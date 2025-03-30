---
icon: dianjikai
date: 2023-10-01
category:
  - 编程
tag:
  - Java
  - JUC
---
# Java线程
Java线程的基础了解、方法，五种状态六种状态的深度解剖...
<!-- more -->

## Java线程

## 查看线程方法

- windows
  - tasklist 查看进程 
  - taskkill 杀死进程
- linux
  - ps -fe 查看所有进程 
  - ps -fT -p (PID) 查看某个进程（PID）的所有线程 
    - kill 杀死进程 
  - top 按大写 H 切换是否显示线程 
  - top -H -p (PID) 查看某个进程（PID）的所有线程
- java
  - jps 命令查看所有 Java 进程 
  - jstack (PID) 查看某个 Java 进程（PID）的所有线程状态 
  - jconsole 来查看某个 Java 进程中线程的运行情况（图形界面）

## 线程运行原理

- 栈与栈帧

  - 我们都知道 JVM 中由堆、栈、方法区所组成，其中栈内存是给谁用的呢？其实就是线程，每个线程启动后，虚拟 机就会为其分配一块栈内存。 

    > 每个栈由多个栈帧（Frame）组成，对应着每次方法调用时所占用的内存 
    >
    > 每个线程只能有一个活动栈帧，对应着当前正在执行的那个方法

- 线程上下文切换

  因为以下一些原因导致 cpu 不再执行当前的线程，转而执行另一个线程的代码

  - 线程的 cpu 时间片用完 
  - 垃圾回收 
  - 有更高优先级的线程需要运行 
  - 线程自己调用了 sleep、yield、wait、join、park、synchronized、lock 等方法 

  当 Context Switch 发生时，需要由操作系统保存当前线程的状态，并恢复另一个线程的状态，Java 中对应的概念 就是程序计数器（Program Counter Register），它的作用是记住下一条 jvm 指令的执行地址，是线程私有的 

  > 状态包括程序计数器、虚拟机栈中每个栈帧的信息，如局部变量、操作数栈、返回地址等 
  >
  > Context Switch 频繁发生会影响性能

## 常见方法

| **方法名**       | 功能说明                                                     | 注意                                                         |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| start()          | 启动一个新线程，在新的线程运行 run 方法中的代码              | start 方法只是让线程进入就绪，里面代码不一定立刻运行（CPU 的时间片还没分给它）。每个线程对象的start方法只能调用一次，如果调用了多次会出现IllegalThreadStateException |
| run()            | 新线程启动后会调用的方法                                     | 如果在构造 Thread 对象时传递了 Runnable 参数，则线程启动后会调用 Runnable 中的 run 方法，否则默认不执行任何操作。但可以创建 Thread 的子类对象，来覆盖默认行为 |
| join()           | 等待线程运行结束                                             |                                                              |
| join(long n)     | 等待线程运行结束,最多等待 n 毫秒                             |                                                              |
| getId()          | 获取线程长整型的 id                                          | id唯一                                                       |
| getName()        | 获取线程名                                                   |                                                              |
| setName(String)  | 修改线程名                                                   |                                                              |
| getPriority()    | 获取线程优先级                                               |                                                              |
| setPriority(int) | 修改线程优先级                                               | java中规定线程优先级是1~10 的整数，较大的优先级能提高该线程被 CPU 调度的机率 |
| getState(）      | 获取线程状态                                                 | Java 中线程状态是用 6 个 enum 表示，分别为：NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED |
| isInterrupted()  | 判断是否被打 断                                              | 不会清除 打断标记                                            |
| isAlive()        | 线程是否存活（还没有运行完毕）                               |                                                              |
| interrupt()      | 打断线程                                                     | 如果被打断线程正在 sleep，wait，join 会导致被打断的线程抛出 InterruptedException，并清除 打断标记 ；如果打断的正在运行的线程，则会设置 打断标记 ；park 的线程被打断，也会设置打断标记 |
| interrupted()    | （static）判断当前线程是否被打断                             | 会清除 打断标记                                              |
| currentThread()  | （static）获取当前正在执行的线程                             |                                                              |
| sleep(long n)    | （static）让当前执行的线程休眠n毫秒，休眠时让出 cpu 的时间片给其它线程 |                                                              |
| yield()          | （static）提示线程调度器让出当前线程对CPU的使用              | 主要是为了测试和调试                                         |

### start 与 run

- 直接调用 run 是在主线程中执行了 run，没有启动新的线程 
- 使用 start 是启动新的线程，通过新的线程间接执行 run 中的代码



### sleep与 yield

- **sleep** 
  - 调用 sleep 会让当前线程从 *Running* 进入 *Timed Waiting* 状态（阻塞） 
  - 其它线程可以使用 interrupt 方法打断正在睡眠的线程，这时 sleep 方法会抛出 InterruptedException 
  - 睡眠结束后的线程未必会立刻得到执行 
  - 建议用 TimeUnit 的 sleep 代替 Thread 的 sleep 来获得更好的可读性 
- **yield** 
  - 调用 yield 会让当前线程从 *Running* 进入 *Runnable* 就绪状态，然后调度执行其它线程 
  - 具体的实现依赖于操作系统的任务调度器
- **interrupt方法**
  - 打断sleep，wait，join的线程，这几个方法都会让线程进入阻塞状态
  - 打断 sleep 的线程, 会清空打断状态
  - 打断正常运行的线程, 不会清空打断状态
  - 打断 park 线程, 不会清空打断状态 如果打断标记已经是 true, 则 park 会失效



主线程与守护线程

Java 进程需要等待所有线程都运行结束，才会结束。有一种特殊的线程叫做守护线程，只要其它非守 

护线程运行结束了，即使守护线程的代码没有执行完，也会强制结束。使用thread.setDaemon(true);可以设置守护线程

> 垃圾回收器线程就是一种守护线程 
>
> Tomcat 中的 Acceptor 和 Poller 线程都是守护线程，所以 Tomcat 接收到 shutdown 命令后，不会等 待它们处理完当前请求



## 五种状态与六种状态

### 五种状态

![1741003381141](.\img\1741003381141.png)

1. 【初始状态】仅是在语言层面创建了线程对象，还未与操作系统线程关联 

2. 【可运行状态】（就绪状态）指该线程已经被创建（与操作系统线程关联），可以由 CPU 调度执行 

3. 【运行状态】指获取了 CPU 时间片运行中的状态 

   - 当 CPU 时间片用完，会从【运行状态】转换至【可运行状态】，会导致线程的上下文切换 

4. 【阻塞状态】 

   - 如果调用了阻塞 API，如 BIO 读写文件，这时该线程实际不会用到 CPU，会导致线程上下文切换，进入【阻塞状态】 
   - 等 BIO 操作完毕，会由操作系统唤醒阻塞的线程，转换至【可运行状态】 
   - 与【可运行状态】的区别是，对【阻塞状态】的线程来说只要它们一直不唤醒，调度器就一直不会考虑调度它们 

5. 【终止状态】表示线程已经执行完毕，生命周期已经结束，不会再转换为其它状态

   

### 六种状态详解

![1741003705353](.\img\1741003705353.png)

1. **NEW** 线程刚被创建，但是还没有调用 start() 方法 
2. **RUNNABLE** 当调用了 start() 方法之后，注意，Java API 层面的 RUNNABLE 状态涵盖了 **操作系统** 层面的 【可运行状态】、【运行状态】和【阻塞状态】（由于 BIO 导致的线程阻塞，在 Java 里无法区分，仍然认为是可运行） 
3. **BLOCKED** ， **WAITING** ， **TIMED_WAITING** 都是 Java API 层面对【阻塞状态】的细分，后面会在状态转换一节详述 
4. **TERMINATED** 当线程代码运行结束



假设有线程 `Thread t` 

情况 1 `NEW --> RUNNABLE`

- 当调用 `t.start()` 方法时，由 NEW --> RUNNABLE



情况 2 `RUNNABLE <--> WAITING` 

**t 线程**用 `synchronized(obj)` 获取了对象锁后 

- 调用 `obj.wait()` 方法时，**t 线程**从 `RUNNABLE --> WAITING` 
- 调用 `obj.notify()` ， `obj.notifyAll()` ， `t.interrupt()` 时 
  - 竞争锁成功，**t 线程**从 `WAITING --> RUNNABLE` 
  - 竞争锁失败，**t 线程**从 `WAITING --> BLOCKED`

情况 3 `RUNNABLE <--> WAITING` 

- **当前线程**调用 `t.join()` 方法时，**当前线程**从 `RUNNABLE --> WAITING` 注意是**当前线程**在**t 线程对象**的监视器上等待 
- **t 线程**运行结束，或调用了**当前线程**的 interrupt() 时，当前线程从 `WAITING --> RUNNABLE`



情况 4 `RUNNABLE <--> WAITING` 

- **当前线程**调用 `LockSupport.park()` 方法会让**当前线程**从 `RUNNABLE --> WAITING` 
- 调用 `LockSupport.unpark`(目标线程) 或调用了线程 的 `interrupt()` ，会让目标线程从 `WAITING -->  RUNNABLE`



情况 5 `RUNNABLE <--> TIMED_WAITING`

**t 线程**用 `synchronized(obj)` 获取了对象锁后 

- 调用 `obj.wait(long n)` 方法时，**t 线程**从 `RUNNABLE --> TIMED_WAITING` 
- **t 线程**等待时间超过了 n 毫秒，或调用 `obj.notify()` ， `obj.notifyAll()` ，` t.interrupt() `时 
  - 竞争锁成功，**t 线程**从 `TIMED_WAITING --> RUNNABLE` 
  - 竞争锁失败，**t 线程**从 `TIMED_WAITING --> BLOCKED`



情况 6 `RUNNABLE <--> TIMED_WAITING` 

- **当前线程**调用 `t.join(long n)` 方法时，**当前线程**从 `RUNNABLE --> TIMED_WAITING` 注意是当前线程在**t 线程**对象的监视器上等待 
- **当前线程**等待时间超过了 n 毫秒，或**t 线程**运行结束，或调用了**当前线程**的 `interrupt()` 时，当前线程从 `TIMED_WAITING --> RUNNABLE`



情况 7 `RUNNABLE <--> TIMED_WAITING` 

- **当前线程**调用 `Thread.sleep(long n)` ，**当前线程**从 `RUNNABLE --> TIMED_WAITING` 
- **当前线程**等待时间超过了 n 毫秒，**当前线程**从 `TIMED_WAITING --> RUNNABLE`



情况 8 `RUNNABLE <--> TIMED_WAITING` 

- **当前线程**调用 `LockSupport.parkNanos(long nanos)` 或 `LockSupport.parkUntil(long millis)` 时，**当前线程**从 `RUNNABLE --> TIMED_WAITING `
- 调用 `LockSupport.unpark`(目标线程) 或调用了线程 的 `interrupt()` ，或是等待超时，会让目标线程从 `TIMED_WAITING--> RUNNABLE`



情况 9 `RUNNABLE <--> BLOCKED` 

- **t 线程**用 `synchronized(obj)` 获取了对象锁时如果竞争失败，从 `RUNNABLE --> BLOCKED` 
- 持 obj 锁线程的同步代码块执行完毕，会唤醒该对象上所有 `BLOCKED` 的线程重新竞争，如果其中 **t 线程**竞争 成功，从 `BLOCKED --> RUNNABLE` ，其它失败的线程仍然 `BLOCKED`



情况 10 `RUNNABLE <--> TERMINATED` 

- 当前线程所有代码运行完毕，进入 `TERMINATED`