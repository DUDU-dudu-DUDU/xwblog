"use strict";(self.webpackChunkxwblog=self.webpackChunkxwblog||[]).push([[5040],{5040:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var i=n(641),l=n(5220),d=n(1083),a=n(4053);const o=n.n(a)(),c=e=>{const t=new Image;t.src=e,t.onload=()=>{}},g=(0,i.Lk)("div",{class:"none"},"Bing壁纸",-1),r=(0,i.pM)({__name:"HeroBG",setup(e){const t=()=>{var e,t,n,i,l;let d=window.location.pathname,a=o.get("BingImgIndex");const c=o.get("BingImgList");(!a||a<0)&&(a=0),a>c.length-1&&(a=c.length-1),o.set("BingImgIndex",a);const g=document.querySelector(".vp-blog-mask");0==a&&(null==(e=document.getElementById("leftNav"))||e.classList.add("disabled")),a==c.length-1&&(null==(t=document.getElementById("rightNav"))||t.classList.add("disabled")),a>0&&a<c.length-1&&(null==(n=document.getElementById("leftNav"))||n.classList.remove("disabled"),null==(i=document.getElementById("rightNav"))||i.classList.remove("disabled"));let r=c[a];d.includes("/en")&&(r=r.EN);const s=document.getElementById("bingLink_text");s&&(s.innerHTML=r.Title),null==(l=document.getElementById("bingLink"))||l.setAttribute("href",r.CopyrightLink);const m=r.Path;g.style.background="",g.style.backgroundImage=`url(${m})`;const u=document.querySelector(".vp-footer-wrapper");u&&(u.style.backgroundImage=`url(${m})`)},n=e=>{var n;const i=document.querySelector(".vp-blog-mask");if(!i)return;const l=document.querySelector(".vp-blog-hero-title");if(l.addEventListener("click",(()=>{window.location.href="//mo7.cc"})),!l)return;const d=o.get("BingImgList");if(d&&d.length<1)return;if(!document.getElementById("BingSwitchWrapper")){const e=document.createElement("div");e.id="BingSwitchWrapper",e.innerHTML='\n<a href="" target="_Blank" id="bingLink">\n  <div class="bingLink_icon"><svg class="mapPin" height="16" width="16" viewBox="0 0 12 12" aria-hidden="true" role="presentation"><path d="M0 0h12v12h-12z" fill="none"></path><path d="M6.5 3a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5zm0-3a4.5 4.5 0 0 0-4.5 4.5 5.607 5.607 0 0 0 .087.873c.453 2.892 2.951 5.579 3.706 6.334a1 1 0 0 0 1.414 0c.755-.755 3.253-3.442 3.706-6.334a5.549 5.549 0 0 0 .087-.873 4.5 4.5 0 0 0-4.5-4.5zm3.425 5.218c-.36 2.296-2.293 4.65-3.425 5.782-1.131-1.132-3.065-3.486-3.425-5.782a4.694 4.694 0 0 1-.075-.718 3.5 3.5 0 0 1 7 0 4.634 4.634 0 0 1-.075.718z"></path></svg></div>\n  <div id="bingLink_text"></div>\n</a>\n<div id="leftNav"></div>\n<div id="rightNav"></div>',null==(n=i.parentElement)||n.insertBefore(e,i)}const a=document.getElementById("leftNav"),c=document.getElementById("rightNav");a&&c&&(t(),a.onclick=()=>{let e=o.get("BingImgIndex");e--,o.set("BingImgIndex",e),t()},c.onclick=()=>{let e=o.get("BingImgIndex");e++,o.set("BingImgIndex",e),t()})};return(0,i.sV)((()=>{(0,i.dY)((()=>{(0,d.A)({method:"get",url:"//file.mo7.cc/api/public/url",params:{}}).then((e=>{const t=e.data.Data;if(!(t&&t.length<1)){for(const e of t)c(e.Path);o.set("BingImgList",t),n()}}))})),(0,l.rd)().afterEach((e=>{(0,i.dY)((()=>{setTimeout((()=>{n()}),50)}))}))})),(e,t)=>{const n=(0,i.g2)("ClientOnly");return(0,i.uX)(),(0,i.Wv)(n,null,{default:(0,i.k6)((()=>[g])),_:1})}}})}}]);