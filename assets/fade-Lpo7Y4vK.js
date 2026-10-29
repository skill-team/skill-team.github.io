import"./iframe-D1Ouy3kT.js";import{K as o}from"./ContextIsolator-D4uc6dxX.js";import{i as r}from"./index-CAYOqa0x.js";const c=new o("antFadeIn",{"0%":{opacity:0},"100%":{opacity:1}}),m=new o("antFadeOut",{"0%":{opacity:1},"100%":{opacity:0}}),d=(t,a=!1)=>{const{antCls:e}=t,i=`${e}-fade`,n=a?"&":"";return[r(i,c,m,t.motionDurationMid,a),{[`
        ${n}${i}-enter,
        ${n}${i}-appear
      `]:{opacity:0,animationTimingFunction:"linear"},[`${n}${i}-leave`]:{animationTimingFunction:"linear"}}]};export{d as i};
