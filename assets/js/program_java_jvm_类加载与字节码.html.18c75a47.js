"use strict";(self.webpackChunkxwblog=self.webpackChunkxwblog||[]).push([[1250],{6262:(l,i)=>{i.A=(l,i)=>{const t=l.__vccOpts||l;for(const[l,a]of i)t[l]=a;return t}},5596:(l,i,t)=>{t.r(i),t.d(i,{comp:()=>p,data:()=>d});var a=t(641);const e=t.p+"assets/img/jvm2.dbb30682.png",o=(0,a.Lk)("h1",{id:"类加载与字节码技术",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#类加载与字节码技术"},[(0,a.Lk)("span",null,"类加载与字节码技术")])],-1),r=(0,a.Lk)("h5",{id:"你就是双亲委派",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#你就是双亲委派"},[(0,a.Lk)("span",null,"你就是双亲委派？")])],-1),s=(0,a.Fv)('<p>多态执行原理</p><ul><li>当执行 invokevirtual 指令时， <ol><li>先通过栈帧中的对象引用找到对象</li><li>分析对象头，找到对象的实际 Class</li><li>Class 结构中有 vtable（虚方法表），它在类加载的链接阶段就已经根据方法的重写规则生成好了</li><li>查表得到方法的具体地址</li><li>执行方法的字节码</li></ol></li></ul><p>编译期处理</p><ul><li>语法糖 ，其实就是指 java 编译器把 *.java 源码编译为 *.class 字节码的过程中，自动生成 和转换的一些代码，主要是为了减轻程序员的负担，算是 java 编译器给我们的一个额外福利（给糖吃 嘛） 注意，编译器转换的结果直接就是 class 字节码，只是为了便于阅读，给出了 几乎等价 的 java 源码方式，并 不是编译器还会转换出中间的 java 源码，切记。</li></ul><h5 id="类加载阶段" tabindex="-1"><a class="header-anchor" href="#类加载阶段"><span>类加载阶段</span></a></h5><ol><li><strong>加载</strong><ul><li>将类的字节码载入方法区中，内部采用 C++ 的 instanceKlass 描述 java 类，它的重要 field 有： <ul><li>java_mirror 即 java 的类镜像，例如对 String 来说，就是 String.class，作用是把 klass 暴 露给 java 使用</li><li>_super 即父类</li><li>_fields 即成员变量</li><li>_methods 即方法</li><li>_constants 即常量池</li><li>_class_loader 即类加载器</li><li>_vtable 虚方法表</li><li>_itable 接口方法表</li></ul></li><li>如果这个类还有父类没有加载，先加载父类 加载和链接可能是交替运行的</li></ul></li></ol><figure><img src="'+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li><strong>链接</strong><ol><li>验证 <ul><li>验证类是否符合 JVM规范，安全性检查</li></ul></li><li>准备 <ul><li>为 static 变量分配空间，设置默认值</li><li>static 变量在 JDK 7 之前存储于 instanceKlass 末尾，从 JDK 7 开始，存储于 _java_mirror 末尾</li><li>static 变量分配空间和赋值是两个步骤，分配空间在准备阶段完成，赋值在初始化阶段完成</li><li>如果 static 变量是 final 的基本类型，以及字符串常量，那么编译阶段值就确定了，赋值在准备阶 段完成</li><li>如果 static 变量是 final 的，但属于引用类型，那么赋值也会在初始化阶段完成</li></ul></li><li>解析 <ul><li>将常量池中的符号引用解析为直接引用</li></ul></li></ol></li><li><strong>初始化</strong><ul><li>cinit()V 方法 初始化即调用 cinit()V ，虚拟机会保证这个类的『构造方法』的线程安全</li><li><strong>发生时机</strong> 概括得说，类初始化是【懒惰的】 <ul><li>main 方法所在的类，总会被首先初始化</li><li>首次访问这个类的静态变量或静态方法时</li><li>子类初始化，如果父类还没初始化，会引发</li><li>子类访问父类的静态变量，只会触发父类的初始化</li><li>Class.forName</li><li>new 会导致初始化</li></ul></li><li>不会导致类初始化的情况 <ul><li>访问类的 static final 静态常量（基本类型和字符串）不会触发初始化</li><li>类对象.class 不会触发初始化</li><li>创建该类的数组不会触发初始化</li><li>类加载器的 loadClass 方法</li><li>Class.forName 的参数 2 为 false 时</li></ul></li></ul></li></ol><h5 id="类加载器" tabindex="-1"><a class="header-anchor" href="#类加载器"><span>类加载器</span></a></h5><table><thead><tr><th><strong>名称</strong></th><th><strong>加载哪的类</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>Bootstrap ClassLoader （启动类加载器）</td><td>JAVA_HOME/jre/lib</td><td>无法直接访问</td></tr><tr><td>Extension ClassLoader（拓展类加载器）</td><td>JAVA_HOME/jre/lib/ext</td><td>上级为 Bootstrap，显示为 null</td></tr><tr><td>Application ClassLoader （应用程序类加载器）</td><td>classpath</td><td>上级为 Extension</td></tr><tr><td>自定义类加载器</td><td>自定义</td><td>上级为 Application</td></tr></tbody></table><ol><li><p><strong>双亲委派模式</strong></p><ul><li>所谓的双亲委派，就是指调用类加载器的 loadClass 方法时，查找类的规则</li><li>首先会从应用程序类加载器进行进行加载（缓存）查看是否加载过</li><li>如果没有加载过则委派上级（拓展类加载器）查看是否加载过</li><li>如果没有则再委派上级（启动类加载器）查看是否加载过</li><li>如果还是没有那就通过findClass查找是否有这个类</li><li>启动类如果没有 就接着递归的返回 通过拓展类查找是否有这个类</li><li>如果拓展类加载器没有 就又回到了应用程序类加载器查找是否有这个类 有即返回</li></ul></li><li><p>自定义类加载器</p><ul><li><p>问问自己，什么时候需要自定义类加载器</p><p>1）想加载非 classpath 随意路径中的类文件</p><p>2）都是通过接口来使用实现，希望解耦时，常用在框架设计</p><p>3）这些类希望予以隔离，不同应用的同名类都可以加载，不冲突，常见于 tomcat 容器</p></li><li><p>步骤：</p><ol><li>继承 ClassLoader 父类</li><li>要遵从双亲委派机制，重写 findClass 方法 注意不是重写 loadClass 方法，否则不会走双亲委派机制</li><li>读取类文件的字节码</li><li>调用父类的 defineClass 方法来加载类</li><li>使用者调用该类加载器的 loadClass 方法</li></ol></li></ul></li></ol><h5 id="运行时优化" tabindex="-1"><a class="header-anchor" href="#运行时优化"><span>运行时优化</span></a></h5><ol><li><p>JVM 将执行状态分成了 5 个层次：</p><ul><li>0 层，解释执行（Interpreter）</li><li>1 层，使用 C1 即时编译器编译执行（不带 profiling）</li><li>2 层，使用 C1 即时编译器编译执行（带基本的 profiling）</li><li>3 层，使用 C1 即时编译器编译执行（带完全的 profiling）</li><li>4 层，使用 C2 即时编译器编译执行</li></ul><blockquote><p>profiling 是指在运行过程中收集一些程序执行状态的数据，例如【方法的调用次数】，【循环的回边次数】等</p></blockquote></li><li><p>即时编译器（JIT）与解释器的区别</p><ul><li>解释器是将字节码解释为机器码，下次即使遇到相同的字节码，仍会执行重复的解释</li><li>JIT 是将一些字节码编译为机器码，并存入 Code Cache，下次遇到相同的代码，直接执行，无需再编译</li><li>解释器是将字节码解释为针对所有平台都通用的机器码</li><li>JIT 会根据平台类型，生成平台特定的机器码</li></ul><p>对于占据大部分的不常用的代码，我们无需耗费时间将其编译成机器码，而是采取解释执行的方式运行；另一方面，对于仅占据小部分的热点代码，我们则可以将其编译成机器码，以达到理想的运行速度。执行效率上简单比较一下 Interpreter &lt; C1 &lt; C2，总的目标是发现热点代码（hotspot名称的由来），优化之</p><p><strong>逃逸分析</strong>：就判断对象或者方法会不会被别人使用 如果不会被别人使用则通过JIT C2进行字节码替换不在创建对象</p><p><strong>锁消除</strong>：当JIT编译器通过逃逸分析（Escape Analysis）确定某个对象的锁仅在当前线程内使用（即对象不会逃逸到其他线程）时，它会判定该锁是冗余的。此时，JIT会直接移除同步代码块（如synchronized）的加锁/解锁操作，从而避免线程竞争检查、内核态切换等开销。</p></li><li><p>方法内联</p><ol><li>如果发现 square 是热点方法，并且长度不太长时，会进行内联，所谓的内联就是把方法内代码拷贝、 粘贴到调用者的位置。</li></ol></li></ol>',13),n={},p=(0,t(6262).A)(n,[["render",function(l,i){return(0,a.uX)(),(0,a.CE)("div",null,[o,r,(0,a.Q3)(" more "),s])}]]),d=JSON.parse('{"path":"/program/java/jvm/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E4%B8%8E%E5%AD%97%E8%8A%82%E7%A0%81.html","title":"类加载与字节码技术","lang":"zh-CN","frontmatter":{"icon":"dianjikai","date":"2023-10-01T00:00:00.000Z","category":["编程"],"tag":["Java","JVM"],"description":"你就是双亲委派？","head":[["meta",{"property":"og:url","content":"https://github.com/DUDU-dudu-DUDU/xwblog/xwblog/program/java/jvm/%E7%B1%BB%E5%8A%A0%E8%BD%BD%E4%B8%8E%E5%AD%97%E8%8A%82%E7%A0%81.html"}],["meta",{"property":"og:site_name","content":"小吴 Blog"}],["meta",{"property":"og:title","content":"类加载与字节码技术"}],["meta",{"property":"og:description","content":"你就是双亲委派？"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T12:17:01.000Z"}],["meta",{"property":"article:author","content":"xiaowu"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:published_time","content":"2023-10-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-25T12:17:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类加载与字节码技术\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-01T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-25T12:17:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xiaowu\\",\\"url\\":\\"https://dudu-dudu-dudu.github.io/xwblog/zh/\\"}]}"]]},"headers":[],"git":{"createdTime":1740485821000,"updatedTime":1740485821000,"contributors":[{"name":"DUDU","email":"930824238@qq.com","commits":1}]},"readingTime":{"minutes":6.03,"words":1809},"filePathRelative":"program/java/jvm/类加载与字节码.md","localizedDate":"2023年10月1日","excerpt":"\\n<h5>你就是双亲委派？</h5>\\n","autoDesc":true}')}}]);