"use strict";(self.webpackChunkxwblog=self.webpackChunkxwblog||[]).push([[7718,8928],{8928:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var o=n(641),l=n(33);const c=["spin"],u=(0,o.pM)({__name:"MyIcon",props:{name:String,spin:Boolean},setup(e){const t=e;return(e,n)=>((0,o.uX)(),(0,o.CE)("span",{class:(0,l.C4)(["iconfont icon",`icon-${t.name}`]),spin:t.spin},null,10,c))}})},7718:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var o=n(641),l=n(33),c=n(953),u=n(8928),a=n(5220),s=n(1083);const i=[{name:"春庭雪",url:"http://lx.sycdn.kuwo.cn/388fe36bcfe5ab63624b75a9b1c89a2c/6742d511/resource/n3/71/43/1184522675.mp3",cover:"http://imge.kugou.com/stdmusic/400/20240126/20240126152017724110.jpg"},{name:"猪猪侠",url:"http://music.163.com/song/media/outer/url?id=34324641.mp3",cover:"http://imge.kugou.com/stdmusic/400/20221207/20221207214918757588.jpg"},{name:"多余的解释",url:"https://freetyst.nf.migu.cn/public/product7th/productB25/2020/08/0316/2012%E5%B9%B412%E6%9C%8805%E6%97%A5%E6%B5%B7%E8%9D%B6%E5%94%B1%E7%89%87%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A58%E9%A6%96/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_128_16_Stero/60058623029165243.mp3",cover:"http://imge.kugou.com/stdmusic/400/20230802/20230802060202337727.jpg"},{name:"童话镇",url:"https://freetyst.nf.migu.cn/public/product9th/product46/2024/08/2317/2024%E5%B9%B407%E6%9C%8823%E6%97%A511%E7%82%B929%E5%88%86%E5%86%85%E5%AE%B9%E5%87%86%E5%85%A5%E7%94%B3%E4%BC%97%E6%96%87%E5%8C%961%E9%A6%96915191/%E6%A0%87%E6%B8%85%E9%AB%98%E6%B8%85/MP3_128_16_Stero/63293800633173647.mp3",cover:"http://imge.kugou.com/stdmusic/400/20240713/20240713155245425879.jpg"}],r={class:"MyMusic"},d=(0,o.Lk)("div",{id:"GlobalAPlayer"},null,-1),m=(0,o.pM)({__name:"NavMusic",setup(e){let t,m=(0,c.KR)(!1),p=[];const E=()=>{m.value&&(m.value=!1)},y=()=>{const e=document.querySelector(".vp-navbar-end");if(e){if(!document.querySelector("#MyMusic_Menu")){const t=document.createElement("div");t.id="MyMusic_Menu",t.classList.add("nav-item"),t.className="btnImg",t.innerHTML='<div id="MyMusic_icon" class="btnImg" style="background-image: url(\'assets/icon/icone.png\');"></div>',e.appendChild(t)}document.querySelector("#MyMusic_Menu").onclick=e=>{m.value=!m.value,e.stopPropagation()},document.querySelector(".MyMusic").onclick=e=>{e.stopPropagation()}}},g=()=>{if(!t)return;const e=window,n=document.getElementById("GlobalAPlayer");n&&(p.length<1||(b(),n.classList.contains("aplayer")||(e.GlobalAPlayer=new t({container:document.getElementById("GlobalAPlayer"),audio:i,lrcType:3,listFolded:!1,listMaxHeight:"324px",mini:!1,fixed:!1,volume:1,storageName:"GlobalAPlayer"}),e.GlobalAPlayer.on("play",(function(){b()})),e.GlobalAPlayer.on("pause",(function(){b()})))))};function b(){var e,t;const n=window;n.GlobalAPlayer&&n.GlobalAPlayer.mode&&(n.GlobalAPlayer.paused?null==(e=document.getElementById("MyMusic_icon"))||e.setAttribute("spin","false"):null==(t=document.getElementById("MyMusic_icon"))||t.setAttribute("spin","true"))}return(0,o.sV)((()=>{const e=(0,a.rd)();var l;l=()=>{n.e(9417).then(n.t.bind(n,1798,23)).then((n=>{(0,o.dY)((()=>{t=n.default,y(),g(),window.document.body.onclick=()=>{E()}})),e.afterEach((()=>{setTimeout((()=>{y(),g()}),50)}))}))},(0,s.A)({method:"get",url:"//file.mo7.cc/music/list.json",params:{}}).then((e=>{var t=e.data;t&&t.length>0&&(p=t),console.log("加载音乐列表",p),l&&l()}))})),(e,t)=>{const n=(0,o.g2)("ClientOnly");return(0,o.uX)(),(0,o.Wv)(n,null,{default:(0,o.k6)((()=>[(0,o.Lk)("div",r,[(0,o.Lk)("div",{class:(0,l.C4)(["MyMusic_Play",{hide:!(0,c.R1)(m)}])},[(0,o.Lk)("div",{class:"close",onClick:E},[(0,o.bF)(u.default,{name:"guanbi"})]),d],2)])])),_:1})}}})}}]);