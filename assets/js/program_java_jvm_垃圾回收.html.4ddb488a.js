"use strict";(self.webpackChunkxwblog=self.webpackChunkxwblog||[]).push([[2397],{6262:(t,l)=>{l.A=(t,l)=>{const i=t.__vccOpts||t;for(const[t,e]of l)i[t]=e;return i}},1956:(t,l,i)=>{i.r(l),i.d(l,{comp:()=>d,data:()=>u});var e=i(641);const r=i.p+"assets/img/jvm1.e7f0c2e9.png",o=(0,e.Lk)("h1",{id:"垃圾回收",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#垃圾回收"},[(0,e.Lk)("span",null,"垃圾回收")])],-1),a=(0,e.Lk)("p",null,"jvm几种垃圾回收算法",-1),p=(0,e.Fv)('<ol><li><p>如何判断对象是否可以回收</p><ul><li><strong>引用计数法</strong> 无法处理循环引用</li><li><strong>可达性分析算法</strong><ul><li>使用可达性分析探索所有存活的对象</li><li>扫描堆中的对象，看是否能够沿着GC Root（多个 一系列）对象起点的引用链找到该对象，找不到就回收</li><li>些对象可以作为GC Root （加锁的 线程中的 启动的核心对象 等）</li></ul></li><li>四种引用 <ul><li><strong>强引用</strong><ul><li>只有所有 GC Roots 对象都不通过【强引用】引用该对象，该对象才能被垃圾回收</li></ul></li><li><strong>软引用</strong>（SoftReference） <ul><li>仅有软引用引用该对象时，在垃圾回收后，内存仍不足时会再次出发垃圾回收，回收软引用对象 可以配合引用队列来释放软引用自身</li></ul></li><li><strong>弱引用</strong>（WeakReference） <ul><li>仅有弱引用引用该对象时，在垃圾回收时，无论内存是否充足，都会回收弱引用对象可以配合引用队列来释放弱引用自身</li></ul></li><li><strong>虚引用</strong>（PhantomReference） <ul><li>必须配合引用队列使用，主要配合 ByteBuffer 使用，被引用对象回收时，会将虚引用入队， 由 Reference Handler 线程调用虚引用相关方法释放直接内存</li></ul></li><li><strong>终结器引用</strong>（FinalReference） <ul><li>无需手动编码，但其内部配合引用队列使用，在垃圾回收时，终结器引用入队（被引用对象 暂时没有被回收），再由 Finalizer 线程通过终结器引用找到被引用对象并调用它的 finalize 方法，第二次 GC 时才能回收被引用对象</li></ul></li></ul></li></ul></li><li><p>垃圾回收算法（结合多种算法共同实现）</p><ol><li><strong>标记清除算法</strong> （标记可以释放的内存块 并记录到地址列表里 下次有新的对象则直接用这块地址 而不用清直接清除这块内存 鸠占鹊巢） <ul><li>速度较快</li><li>会造成内存碎片</li></ul></li><li><strong>标记整理</strong>（需要移动是对象从而进行整理） <ul><li>速度慢</li><li>没内存碎片</li></ul></li><li><strong>复制</strong> （需要将对象复制到新的空间中） <ul><li>不会有内存碎片</li><li>需要占用双倍内存空间</li></ul></li></ol></li><li><p>分代垃圾回收</p><ul><li><p>对象首先分配在伊甸园区域</p></li><li><p>新生代空间不足时，触发 minor gc，伊甸园和 from区 存活的对象使用 copy 复制到 to区 中，存活的 对象年龄加 1并且交换 from和 to （幸存区 to 和 from）</p></li><li><p>minor gc 会引发 stop the world（STW），暂停其它用户的线程，等垃圾回收结束，用户线程才恢复运行 当对象寿命超过阈值时，会晋升至老年代，最大寿命是15（4bit）</p></li><li><p>当老年代空间不足，会先尝试触发 minor gc，如果之后空间仍不足，那么触发 full gc，STW的时间更长</p></li><li><p>相关 VM 参数</p><table><thead><tr><th><strong>含义</strong></th><th><strong>参数</strong></th></tr></thead><tbody><tr><td>堆初始大小</td><td>-Xms</td></tr><tr><td>堆最大大小</td><td>-Xmn 或 (-XX:NewSize=size + -XX:MaxNewSize=size )</td></tr><tr><td>幸存区比例（动态）</td><td>-XX:InitialSurvivorRatio=ratio 和 -XX:+UseAdaptiveSizePolicy</td></tr><tr><td>幸存区比例</td><td>-XX:SurvivorRatio=ratio</td></tr><tr><td>晋升阈值</td><td>-XX:MaxTenuringThreshold=threshold</td></tr><tr><td>晋升详情</td><td>-XX:+PrintTenuringDistribution</td></tr><tr><td>GC详情</td><td>-XX:+PrintGCDetails -verbose:gc</td></tr><tr><td>FullGC前先MinorGC</td><td>-XX:+ScavengeBeforeFullGC</td></tr><tr><td></td><td></td></tr></tbody></table></li></ul></li><li><p>垃圾回收器</p><ol><li><p>串行单线程 （SerialGC）</p><ul><li>堆内存较小，适合个人电脑</li><li>-XX:+UseSerialGC = Serial + SerialOld</li></ul></li><li><p>吞吐量优先 (ParallelGC)</p><ul><li><p>多线程</p></li><li><p>堆内存较大，多核 cpu</p></li><li><p>让单位时间内，STW 的时间最短 0.2 0.2 = 0.4，垃圾回收时间占比最低，这样就称吞吐量高</p></li><li><p>-XX:+UseParallelGC ~ -XX:+UseParallelOldGC</p><p>-XX:+UseAdaptiveSizePolicy</p><p>-XX:GCTimeRatio=ratio</p><p>-XX:MaxGCPauseMillis=ms</p><p>-XX:ParallelGCThreads=n</p></li></ul></li><li><p>响应时间优先 （CMS 因为使用标记-清除算法 所以会存在垃圾碎片过多时 并发失败 退化为串行垃圾回收 时间反而会更长）</p><ul><li>首先初始标记标记根对象（STW） 并发标记标记可达性对象 重新标记标记在刚才并发标记过程中新生成的对象（STW）、随后并发清除（标记-清除）</li></ul><p>​ <img src="'+r+'" alt="" loading="lazy"></p><ul><li><p>多线程</p></li><li><p>堆内存较大，多核 cpu</p></li><li><p>尽可能让单次 STW 的时间最短 0.1 0.1 0.1 0.1 0.1 = 0.5</p></li><li><p>-XX:+UseConcMarkSweepGC ~ -XX:+UseParNewGC ~ SerialOld</p><p>-XX:ParallelGCThreads=n ~ -XX:ConcGCThreads=threads</p><p>-XX:CMSInitiatingOccupancyFraction=percent</p><p>-XX:+CMSScavengeBeforeRemark</p></li></ul></li><li><p>G1</p><ul><li><p>同时注重吞吐量（Throughput）和低延迟（Low latency），默认的暂停目标是 200 ms</p></li><li><p>超大堆内存，会将堆划分为<strong>多个大小相等的</strong> Region</p></li><li><p>整体上是 标记+整理 算法，两个区域之间是 复制 算法</p></li><li><p>-XX:+UseG1GC</p><p>-XX:G1HeapRegionSize=size</p><p>-XX:MaxGCPauseMillis=time</p></li><li><p>过程</p><ol><li>首先进行新生代的垃圾回收Young GC</li><li>在 Young GC 时就会进行 GC Root 的初始标记 当老年代占用堆空间比例达到阈值时（触发条件），会进行并发标记（不会 STW），由下面的 JVM 参数决定-XX:InitiatingHeapOccupancyPercent=percent （默认45%）</li><li>当并发标记完成后 进行混合收集 会对 新生代、幸存区、老年代 进行全面垃圾回收（会优先回收那些垃圾最多的区域更有行性价比）；最终标记然后因为是并发的 所以在标记的时候会产生新的垃圾 这时候会进行一次最终标记（Remark）会 STW 标记完就行拷贝存活（Evacuation）（就是把没有回收的的幸存对象拷贝到新的堆空间）会 STW</li></ol></li></ul></li></ol></li><li><p>垃圾回收调优</p><ul><li>没有固定的调优手法 只有最适合当前场景的调优手段</li></ul></li></ol>',1),n={},d=(0,i(6262).A)(n,[["render",function(t,l){return(0,e.uX)(),(0,e.CE)("div",null,[o,a,(0,e.Q3)(" more "),p])}]]),u=JSON.parse('{"path":"/program/java/jvm/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6.html","title":"垃圾回收","lang":"zh-CN","frontmatter":{"icon":"dianjikai","date":"2023-10-01T00:00:00.000Z","category":["编程"],"tag":["Java","JVM"],"description":"jvm几种垃圾回收算法","head":[["meta",{"property":"og:url","content":"https://github.com/DUDU-dudu-DUDU/xwblog/xwblog/program/java/jvm/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6.html"}],["meta",{"property":"og:site_name","content":"小吴 Blog"}],["meta",{"property":"og:title","content":"垃圾回收"}],["meta",{"property":"og:description","content":"jvm几种垃圾回收算法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T12:17:01.000Z"}],["meta",{"property":"article:author","content":"xiaowu"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:published_time","content":"2023-10-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-25T12:17:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"垃圾回收\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-01T00:00:00.000Z\\",\\"dateModified\\":\\"2025-02-25T12:17:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xiaowu\\",\\"url\\":\\"https://dudu-dudu-dudu.github.io/xwblog/zh/\\"}]}"]]},"headers":[],"git":{"createdTime":1740485821000,"updatedTime":1740485821000,"contributors":[{"name":"DUDU","email":"930824238@qq.com","commits":1}]},"readingTime":{"minutes":4.6,"words":1379},"filePathRelative":"program/java/jvm/垃圾回收.md","localizedDate":"2023年10月1日","excerpt":"\\n<p>jvm几种垃圾回收算法</p>\\n","autoDesc":true}')}}]);