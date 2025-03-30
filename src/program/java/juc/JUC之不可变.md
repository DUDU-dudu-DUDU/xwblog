---
icon: dianjikai
date: 2023-10-01
category:
  - 编程
tag:
  - Java
  - JUC
---
# JUC之不可变
JUC的不可变原理、手动实现一个连接池...
<!-- more -->


### 共享模式之不可变

**不可变思路**

如果一个对象在不能够修改其内部状态（属性），那么它就是线程安全的，因为不存在并发修改啊！这样的对象在 Java 中有很多，例如在 Java 8 后，提供了一个新的日期格式化类：DateTimeFormatter

不可变对象，实际是另一种避免竞争的方式。

**不可变设计** 

 String 类也是不可变的

说明：

- 将字符数组声明为final，避免被修改
- hash虽然不是final的，但是其只有在调用`hash()`方法的时候才被赋值，除此之外再无别的方法修改。



#### final 的使用 

发现该类、类中所有属性都是 final 的 

- final保证其引用不会被修改
- 属性用 final 修饰保证了该属性是只读的，不能修改 
- 类用 final 修饰保证了该类中的方法不能被覆盖，防止子类无意间破坏不可变性



#### final变量原理

**设置final**

字节码

```
0: aload_0
1: invokespecial #1 // Method java/lang/Object."<init>":()V
4: aload_0
5: bipush 20
7: putfield #2 // Field a:I
 <-- 写屏障
10: return
```

发现 final 变量的赋值也会通过 putfield 指令来完成，同样在这条指令之后也会加入写屏障，这样对final变量的写入不会重排序到构造方法之外，保证在其它线程读到 它的值时不会出现为 0 的情况。普通变量不能保证这一点了。



**读取final**

jvm对final变量的访问做出了优化：另一个类中的方法调用final变量时，不是从final变量所在类中获取（共享内存），而是直接复制一份到方法栈栈帧中的操作数栈中（工作内存），这样可以提升效率，是一种优化。

总结：

- 对于较小的static final变量：复制一份到操作数栈中
- 对于较大的static final变量：复制一份到当前类的常量池中
- 对于非静态final变量，则去堆中访问 速度会慢。



#### 保护性拷贝

String 的构造方法创建了一个新字符串，构造新字符串对象时，会生成新的 char[] value，对内容进行复制 。这种通过创建副本对象来避 免共享的手段称之为【**保护性拷贝（defensive copy）**】



#### 设计模式之享元

文名称：Flyweight pattern. 当需要重用数量有限的同一类对象时 

**包装类**

在JDK中 Boolean，Byte，Short，Integer，Long，Character 等包装类提供了 valueOf 方法，例如 Long 的 valueOf 会缓存 -128~127 之间的 Long 对象，在这个范围之间会重用对象，大于这个范围，才会新建 Long 对 象：

```java
public static Long valueOf(long l) {
    final int offset = 128;
    if (l >= -128 && l <= 127) { // will cache
        return LongCache.cache[(int)l + offset];
    }
    return new Long(l);
}
```

> **注意**： 
>
> - Byte, Short, Long 缓存的范围都是 -128~127 
> - Character 缓存的范围是 0~127 
> - Integer的默认范围是 -128~127 
>   - 最小值不能变 
>   - 但最大值可以通过调整虚拟机参数 `  -Djava.lang.Integer.IntegerCache.high` 来改变 
> - Boolean 缓存了 TRUE 和 FALSE



#### 手动实现一个连接池

连接池类

```java
@Slf4j
class Pool {
    // 1. 连接池大小
    private final int poolSize;
    // 2. 连接对象数组
    private MockConnection[] connections;
    // 3. 连接状态数组 0 表示空闲， 1 表示繁忙
    private AtomicIntegerArray states;

    // 4. 构造方法初始化
    public Pool(int poolSize) {
        this.poolSize = poolSize;
        this.connections = new MockConnection[poolSize];
        this.states = new AtomicIntegerArray(new int[poolSize]);
        for (int i = 0; i < poolSize; i++) {
            connections[i] = new MockConnection("连接" + (i + 1));
        }
    }

    // 借用连接
    public MockConnection borrow() {
        long startTime = System.currentTimeMillis();
        long timeout = 10;
        while (true) {
            for (int i = 0; i < poolSize; i++) {
                if (states.get(i) == 0) {
                    if (states.compareAndSet(i, 0, 1)) {
                        log.debug("borrow {}", connections[i]);
                        return connections[i];
                    }
                }
            }
            synchronized (this) {
                try {
                    log.debug("wait...");
                    this.wait(timeout);
                } catch (Exception e) {
                    log.error("放弃等待", this);
                }
            }
            // 实现超时等待
            if (System.currentTimeMillis() - startTime > timeout) {
                throw new RuntimeException("超时");
            }
        }
    }

    // 归还连接
    public void free(MockConnection connection) {
        for (int i = 0; i < poolSize; i++) {
            if (connections[i] == connection) {
                states.set(i, 0);
                log.debug("free {}", connection);
                synchronized (this) {
                    this.notifyAll();
                }
                break;
            }
        }
    }

}
```

使用

```java
Pool pool = new Pool(2);
for (int i = 0; i < 5; i++) {
    new Thread(() -> {
        Connection conn = pool.borrow();
        try {
            Thread.sleep(new Random().nextInt(1000));
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        pool.free(conn);
    }).start();
}
```

