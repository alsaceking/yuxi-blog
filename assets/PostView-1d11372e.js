import{_ as p,k as m,s as v,r as a,h as n,l as h,o as u,c as g,f,d as t,t as s,m as o,w as V,q as w,v as D,F as y}from"./index-5fa4a7ab.js";import{_ as P}from"./dynamic-import-helper-be004503.js";import{H as x}from"./HeaderComp-a231bf4c.js";const E={class:"post-details"},R={class:"title"},b={class:"tips"},k={__name:"PostView",setup(B){const l=m(),i=v(null),_=a(""),r=a(""),c=a("");return P(Object.assign({"../posts/life/two.md":()=>n(()=>import("./two-1b316372.js"),["assets/two-1b316372.js","assets/index-5fa4a7ab.js","assets/index-049d1f36.css"]),"../posts/technology/git-sharing.md":()=>n(()=>import("./git-sharing-c22ab9d2.js"),["assets/git-sharing-c22ab9d2.js","assets/index-5fa4a7ab.js","assets/index-049d1f36.css"])}),`../posts/${l.params.tag}/${l.params.alias}.md`).then(e=>{i.value=e.default,_.value=e.title||"title",c.value=e.author||"雨析",r.value=e.date||"很久以前"}).catch(()=>{}),(e,I)=>{const d=h("highlight");return u(),g(y,null,[f(x),t("div",E,[t("h1",R,s(_.value),1),t("p",b,[o("由 "),t("span",null,s(c.value),1),o(" 于 "),t("span",null,s(r.value),1),o(" 所写")]),V((u(),w(D(i.value),null,null,512)),[[d]])])],64)}}},T=p(k,[["__scopeId","data-v-056b32cd"]]);export{T as default};
