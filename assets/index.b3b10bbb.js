const Ce=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const n of l)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(l){const n={};return l.integrity&&(n.integrity=l.integrity),l.referrerpolicy&&(n.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?n.credentials="include":l.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(l){if(l.ep)return;l.ep=!0;const n=s(l);fetch(l.href,n)}};Ce();function E(){}function we(e,t){for(const s in t)e[s]=t[s];return e}function me(e){return e()}function ae(){return Object.create(null)}function K(e){e.forEach(me)}function _e(e){return typeof e=="function"}function Q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let D;function te(e,t){return D||(D=document.createElement("a")),D.href=t,e===D.href}function je(e){return Object.keys(e).length===0}function a(e,t){e.appendChild(t)}function P(e,t,s){e.insertBefore(t,s||null)}function $(e){e.parentNode.removeChild(e)}function ye(e,t){for(let s=0;s<e.length;s+=1)e[s]&&e[s].d(t)}function p(e){return document.createElement(e)}function de(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function G(e){return document.createTextNode(e)}function x(){return G(" ")}function ke(e,t,s,i){return e.addEventListener(t,s,i),()=>e.removeEventListener(t,s,i)}function f(e,t,s){s==null?e.removeAttribute(t):e.getAttribute(t)!==s&&e.setAttribute(t,s)}function xe(e){return Array.from(e.childNodes)}function se(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function k(e,t,s,i){s===null?e.style.removeProperty(t):e.style.setProperty(t,s,i?"important":"")}let re;function z(e){re=e}const H=[],fe=[],Z=[],ue=[],$e=Promise.resolve();let ne=!1;function Le(){ne||(ne=!0,$e.then(be))}function le(e){Z.push(e)}const ee=new Set;let F=0;function be(){const e=re;do{for(;F<H.length;){const t=H[F];F++,z(t),Ae(t.$$)}for(z(null),H.length=0,F=0;fe.length;)fe.pop()();for(let t=0;t<Z.length;t+=1){const s=Z[t];ee.has(s)||(ee.add(s),s())}Z.length=0}while(H.length);for(;ue.length;)ue.pop()();ne=!1,ee.clear(),z(e)}function Ae(e){if(e.fragment!==null){e.update(),K(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(le)}}const R=new Set;let T;function Ee(){T={r:0,c:[],p:T}}function Te(){T.r||K(T.c),T=T.p}function S(e,t){e&&e.i&&(R.delete(e),e.i(t))}function I(e,t,s,i){if(e&&e.o){if(R.has(e))return;R.add(e),T.c.push(()=>{R.delete(e),i&&(s&&e.d(1),i())}),e.o(t)}}function Se(e,t){const s={},i={},l={$$scope:1};let n=e.length;for(;n--;){const r=e[n],d=t[n];if(d){for(const o in r)o in d||(i[o]=1);for(const o in d)l[o]||(s[o]=d[o],l[o]=1);e[n]=d}else for(const o in r)l[o]=1}for(const r in i)r in s||(s[r]=void 0);return s}function Pe(e){return typeof e=="object"&&e!==null?e:{}}function ie(e){e&&e.c()}function U(e,t,s,i){const{fragment:l,on_mount:n,on_destroy:r,after_update:d}=e.$$;l&&l.m(t,s),i||le(()=>{const o=n.map(me).filter(_e);r?r.push(...o):K(o),e.$$.on_mount=[]}),d.forEach(le)}function J(e,t){const s=e.$$;s.fragment!==null&&(K(s.on_destroy),s.fragment&&s.fragment.d(t),s.on_destroy=s.fragment=null,s.ctx=[])}function Me(e,t){e.$$.dirty[0]===-1&&(H.push(e),Le(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function V(e,t,s,i,l,n,r,d=[-1]){const o=re;z(e);const c=e.$$={fragment:null,ctx:null,props:n,update:E,not_equal:l,bound:ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(o?o.$$.context:[])),callbacks:ae(),dirty:d,skip_bound:!1,root:t.target||o.$$.root};r&&r(c.root);let u=!1;if(c.ctx=s?s(e,t.props||{},(m,b,...L)=>{const j=L.length?L[0]:b;return c.ctx&&l(c.ctx[m],c.ctx[m]=j)&&(!c.skip_bound&&c.bound[m]&&c.bound[m](j),u&&Me(e,m)),b}):[],c.update(),u=!0,K(c.before_update),c.fragment=i?i(c.ctx):!1,t.target){if(t.hydrate){const m=xe(t.target);c.fragment&&c.fragment.l(m),m.forEach($)}else c.fragment&&c.fragment.c();t.intro&&S(e.$$.fragment),U(e,t.target,t.anchor,t.customElement),be()}z(o)}class W{$destroy(){J(this,1),this.$destroy=E}$on(t,s){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(s),()=>{const l=i.indexOf(s);l!==-1&&i.splice(l,1)}}$set(t){this.$$set&&!je(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Ne(e){let t;return{c(){t=p("div"),t.innerHTML=`<div class="firsthalf svelte-5b7duj"><nav style="display:flex" class="svelte-5b7duj"><div style="flex-grow:0.8" class="svelte-5b7duj"><i class="fa-solid fa-code svelte-5b7duj"></i>Taiga</div> 
            <div class="svelte-5b7duj">About</div> 
            <div class="svelte-5b7duj">Skills</div> 
            <div class="svelte-5b7duj">Projects</div> 
            <div class="svelte-5b7duj">Contacts</div></nav> 
        <img src="https://www.maavan.com/images/banner%20image.svg" style="float:right; width:300px;height:300px"/> 

        <div class="depth svelte-5b7duj"><span class="svelte-5b7duj">Portfolio</span><br/> 

            <h1 class="svelte-5b7duj">Taiga</h1> 

            <div class="info svelte-5b7duj"></div></div></div> 
    <svg id="wave" style="transform:rotate(0deg); transition: 0.3s" version="1.1" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" class="svelte-5b7duj"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop offset="0%" stop-color="rgba(42, 52, 67, 1)"></stop><stop offset="100%" stop-color="rgba(42, 52, 67, 1)"></stop></linearGradient></defs><path d="M0,196L48,179.7C96,163,192,131,288,106.2C384,82,480,65,576,114.3C672,163,768,278,864,310.3C960,343,1056,294,1152,261.3C1248,229,1344,212,1440,245C1536,278,1632,359,1728,383.8C1824,408,1920,376,2016,302.2C2112,229,2208,114,2304,130.7C2400,147,2496,294,2592,294C2688,294,2784,147,2880,114.3C2976,82,3072,163,3168,163.3C3264,163,3360,82,3456,49C3552,16,3648,33,3744,40.8C3840,49,3936,49,4032,106.2C4128,163,4224,278,4320,277.7C4416,278,4512,163,4608,138.8C4704,114,4800,180,4896,179.7C4992,180,5088,114,5184,130.7C5280,147,5376,245,5472,236.8C5568,229,5664,114,5760,114.3C5856,114,5952,229,6048,269.5C6144,310,6240,278,6336,228.7C6432,180,6528,114,6624,130.7C6720,147,6816,245,6864,294L6912,343L6912,490L6864,490C6816,490,6720,490,6624,490C6528,490,6432,490,6336,490C6240,490,6144,490,6048,490C5952,490,5856,490,5760,490C5664,490,5568,490,5472,490C5376,490,5280,490,5184,490C5088,490,4992,490,4896,490C4800,490,4704,490,4608,490C4512,490,4416,490,4320,490C4224,490,4128,490,4032,490C3936,490,3840,490,3744,490C3648,490,3552,490,3456,490C3360,490,3264,490,3168,490C3072,490,2976,490,2880,490C2784,490,2688,490,2592,490C2496,490,2400,490,2304,490C2208,490,2112,490,2016,490C1920,490,1824,490,1728,490C1632,490,1536,490,1440,490C1344,490,1248,490,1152,490C1056,490,960,490,864,490C768,490,672,490,576,490C480,490,384,490,288,490C192,490,96,490,48,490L0,490Z" fill="url(#sw-gradient-0)" style="transform:translate(0, 0px); opacity:1"></path></svg> 
    <div class="secondhalf svelte-5b7duj" style="display:flex"><section class="profile svelte-5b7duj" style="width:40%;font-family: &#39;Alata&#39;, sans-serif;color:#e5e5e5 ; margin-top:100px; "><img src="https://cdn.discordapp.com/avatars/696988079352709140/336dbfbc940738c007eb4e291b9319ea.webp?size=1024" class="svelte-5b7duj"/>
            Taiga
            <nav class="contactsBar svelte-5b7duj" style="display:flex"><div class="svelte-5b7duj"><a href="https://github.com/Taiga74164"><i class="fa-brands fa-github svelte-5b7duj"></i></a></div> 
                <div class="svelte-5b7duj"><a href="https://discord.com/users/696988079352709140"><i class="fa-brands fa-discord svelte-5b7duj"></i></a></div></nav></section> 
        <section class="about svelte-5b7duj" style="width: 55%"><h2 class="svelte-5b7duj"><i class="fa-regular fa-circle-dot svelte-5b7duj"></i> About me</h2>
            I&#39;m a hobbyist who likes to learn about software development and reverse engineering.</section></div>`,f(t,"class","container first active svelte-5b7duj")},m(s,i){P(s,t,i)},p:E,i:E,o:E,d(s){s&&$(t)}}}function Be(e){return window.onload=function(){const t=document.getElementsByClassName("info")[0],s="Advanced Game Development Student",i=["Advanced Game Development Student"].map(n=>[s.search(n),s.search(n)+n.length]);let l=0;for(let n=0;n<s.length;n++)setTimeout(()=>{if(i.find(r=>r[0]==n||r[1]>n&&r[0]<n))return t.innerHTML+=`<span>${s[n]}</span>`;t.innerHTML+=s[n]},l+=50)},[]}class Oe extends W{constructor(t){super(),V(this,t,Be,Ne,Q,{})}}function ve(e,t,s){const i=e.slice();return i[5]=t[s],i}function ge(e){let t,s=e[5]+"",i;return{c(){t=p("div"),i=G(s),f(t,"class","language svelte-jbick1")},m(l,n){P(l,t,n),a(t,i)},p(l,n){n&8&&s!==(s=l[5]+"")&&se(i,s)},d(l){l&&$(t)}}}function qe(e){let t,s,i,l,n,r,d,o,c,u,m,b,L,j,v,N,h,C,g,B,O,X,q,Y,oe,M=e[3],w=[];for(let _=0;_<M.length;_+=1)w[_]=ge(ve(e,M,_));return{c(){t=p("div"),s=p("div"),i=x(),l=p("div"),n=p("div"),r=p("img"),o=x(),c=p("div"),u=p("span"),m=G("\u29BE "),b=G(e[1]),L=p("br"),j=x(),v=p("span"),N=G(e[2]),h=p("br"),C=x(),g=p("div");for(let _=0;_<w.length;_+=1)w[_].c();B=x(),O=p("button"),O.textContent="Page",X=x(),q=p("link"),f(s,"class","bookmark svelte-jbick1"),te(r.src,d=e[0])||f(r,"src",d),f(r,"class","svelte-jbick1"),k(u,"font-weight","normal"),k(u,"font-size","15px"),k(u,"left","5px"),k(u,"position","relative"),k(v,"font-size","13px"),k(v,"font-family","'Alata', sans-serif"),f(c,"class","indepth svelte-jbick1"),f(g,"class","languages svelte-jbick1"),f(O,"class","svelte-jbick1"),f(n,"class","insides svelte-jbick1"),f(l,"id","project"),f(l,"class","svelte-jbick1"),f(t,"class","coe svelte-jbick1"),f(q,"href","https://fonts.googleapis.com/css2?family=Alata&display=swap"),f(q,"rel","stylesheet")},m(_,A){P(_,t,A),a(t,s),a(t,i),a(t,l),a(l,n),a(n,r),a(n,o),a(n,c),a(c,u),a(u,m),a(u,b),a(c,L),a(c,j),a(c,v),a(v,N),a(c,h),a(n,C),a(n,g);for(let y=0;y<w.length;y+=1)w[y].m(g,null);a(n,B),a(n,O),P(_,X,A),a(document.head,q),Y||(oe=ke(O,"click",function(){_e(location.href=e[4])&&(location.href=e[4]).apply(this,arguments)}),Y=!0)},p(_,[A]){if(e=_,A&1&&!te(r.src,d=e[0])&&f(r,"src",d),A&2&&se(b,e[1]),A&4&&se(N,e[2]),A&8){M=e[3];let y;for(y=0;y<M.length;y+=1){const ce=ve(e,M,y);w[y]?w[y].p(ce,A):(w[y]=ge(ce),w[y].c(),w[y].m(g,null))}for(;y<w.length;y+=1)w[y].d(1);w.length=M.length}},i:E,o:E,d(_){_&&$(t),ye(w,_),_&&$(X),$(q),Y=!1,oe()}}}function He(e,t,s){let{image:i}=t,{name:l}=t,{description:n}=t,{languages:r}=t,{link:d}=t;return e.$$set=o=>{"image"in o&&s(0,i=o.image),"name"in o&&s(1,l=o.name),"description"in o&&s(2,n=o.description),"languages"in o&&s(3,r=o.languages),"link"in o&&s(4,d=o.link)},[i,l,n,r,d]}class Ge extends W{constructor(t){super(),V(this,t,He,qe,Q,{image:0,name:1,description:2,languages:3,link:4})}}function he(e,t,s){const i=e.slice();return i[1]=t[s],i}function pe(e){let t,s;const i=[e[1]];let l={};for(let n=0;n<i.length;n+=1)l=we(l,i[n]);return t=new Ge({props:l}),{c(){ie(t.$$.fragment)},m(n,r){U(t,n,r),s=!0},p(n,r){const d=r&1?Se(i,[Pe(n[1])]):{};t.$set(d)},i(n){s||(S(t.$$.fragment,n),s=!0)},o(n){I(t.$$.fragment,n),s=!1},d(n){J(t,n)}}}function ze(e){let t,s,i,l,n,r,d,o,c,u,m,b,L,j=e[0],v=[];for(let h=0;h<j.length;h+=1)v[h]=pe(he(e,j,h));const N=h=>I(v[h],1,1,()=>{v[h]=null});return{c(){t=p("div"),s=p("div"),i=x(),l=de("svg"),n=de("path"),r=x(),d=p("div"),d.innerHTML=`<div style="text-align:center"><i class="fa-regular fa-square-check svelte-1dv4hrl"></i> Skills
            <div class="skills svelte-1dv4hrl"><div class="skill cpp svelte-1dv4hrl"><img class="language svelte-1dv4hrl" src="https://cdn.worldvectorlogo.com/logos/c.svg"/> 
                    <div class="progress cpp svelte-1dv4hrl"></div></div> 
                <div class="skill cs svelte-1dv4hrl"><img class="language svelte-1dv4hrl" src="https://cdn.worldvectorlogo.com/logos/c--4.svg"/> 
                    <div class="progress cs svelte-1dv4hrl"></div></div> 
                <div class="skill js svelte-1dv4hrl"><img class="language svelte-1dv4hrl" src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"/> 
                    <div class="progress js svelte-1dv4hrl"></div></div> 
                <div class="skill python svelte-1dv4hrl"><img class="language svelte-1dv4hrl" src="https://cdn.worldvectorlogo.com/logos/python-5.svg"/> 
                    <div class="progress python svelte-1dv4hrl"></div></div> 
                <div class="skill lua svelte-1dv4hrl"><img class="language svelte-1dv4hrl" src="https://cdn.worldvectorlogo.com/logos/lua-5.svg"/> 
                    <div class="progress lua svelte-1dv4hrl"></div></div></div></div> 
        <div></div> 
        <div></div>`,o=x(),c=p("div"),u=p("h1"),u.innerHTML='<i class="fa-regular fa-square-check svelte-1dv4hrl"></i> Projects',m=x(),b=p("div");for(let h=0;h<v.length;h+=1)v[h].c();f(s,"class","end svelte-1dv4hrl"),f(n,"d","M0,64L48,74.7C96,85,192,107,288,106.7C384,107,480,85,576,85.3C672,85,768,107,864,138.7C960,171,1056,213,1152,224C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"),f(n,"fill","#455876"),f(n,"fill-opacity","1"),f(l,"viewBox","0 0 1440 320"),f(l,"xmlns","http://www.w3.org/2000/svg"),f(d,"class","skillsAndStuff svelte-1dv4hrl"),k(d,"display","flex"),k(d,"flex-direction","column"),f(u,"class","svelte-1dv4hrl"),f(b,"class","projects"),k(b,"display","grid"),k(b,"padding-top","30px"),k(b,"grid-template-columns","50% 3fr"),k(c,"text-align","center"),f(t,"class","container second svelte-1dv4hrl"),k(t,"background","#202833")},m(h,C){P(h,t,C),a(t,s),a(t,i),a(t,l),a(l,n),a(t,r),a(t,d),a(t,o),a(t,c),a(c,u),a(c,m),a(c,b);for(let g=0;g<v.length;g+=1)v[g].m(b,null);L=!0},p(h,[C]){if(C&1){j=h[0];let g;for(g=0;g<j.length;g+=1){const B=he(h,j,g);v[g]?(v[g].p(B,C),S(v[g],1)):(v[g]=pe(B),v[g].c(),S(v[g],1),v[g].m(b,null))}for(Ee(),g=j.length;g<v.length;g+=1)N(g);Te()}},i(h){if(!L){for(let C=0;C<j.length;C+=1)S(v[C]);L=!0}},o(h){v=v.filter(Boolean);for(let C=0;C<v.length;C+=1)I(v[C]);L=!1},d(h){h&&$(t),ye(v,h)}}}function Ie(e){return[[]]}class Ke extends W{constructor(t){super(),V(this,t,Ie,ze,Q,{})}}function De(e){let t,s,i,l,n,r,d,o,c;return r=new Oe({}),o=new Ke({}),{c(){t=p("link"),s=p("script"),s.textContent='<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@500&family=Raleway:wght@200&family=Ubuntu:wght@300&display=swap" rel="stylesheet">',l=x(),n=p("main"),ie(r.$$.fragment),d=x(),ie(o.$$.fragment),f(t,"href","https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap"),f(t,"rel","stylesheet"),f(s,"crossorigin","anonymous"),te(s.src,i="https://kit.fontawesome.com/24814b69dd.js")||f(s,"src",i)},m(u,m){a(document.head,t),a(document.head,s),P(u,l,m),P(u,n,m),U(r,n,null),a(n,d),U(o,n,null),c=!0},p:E,i(u){c||(S(r.$$.fragment,u),S(o.$$.fragment,u),c=!0)},o(u){I(r.$$.fragment,u),I(o.$$.fragment,u),c=!1},d(u){$(t),$(s),u&&$(l),u&&$(n),J(r),J(o)}}}class Fe extends W{constructor(t){super(),V(this,t,null,De,Q,{})}}new Fe({target:document.getElementById("app")});
