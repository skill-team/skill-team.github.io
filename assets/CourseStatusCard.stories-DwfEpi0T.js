import{j as n,r as B}from"./iframe-BJnn3bUc.js";import{C as i}from"./CourseStatusCard-BI1Yt4Br.js";import{R as F}from"./coursesData-BZH3rvUT.js";import"./preload-helper-C1FmrZbK.js";import"./AssignedBadge-BPSG5NJx.js";import"./Archive-DU-cRzIy.js";import"./InfoTag-DqOAj2AW.js";import"./index-Cb8wpR_L.js";import"./ContextIsolator-ChCoEtco.js";import"./context-Ck9A9kxN.js";import"./FavoriteButton-DqXVUQBS.js";import"./SegmentedProgress-BmRV8dt1.js";import"./course-1--YiCqOCo.js";import"./course-4-bsGBpGWB.js";import"./course-3-DSDYLXDH.js";const z=F[1],Y={title:"UI Kit/Курсы/CourseStatusCard",id:"ui-kit-coursestatuscard",component:i,tags:["autodocs"],args:{image:z.image,duration:"15 минут",points:275,progress:0,layout:"vertical"},argTypes:{progress:{control:{type:"range",min:0,max:100,step:10},description:"0 — «Ещё не начат», 1…99 — «Пройдено N%», 100 — «Курс пройден»"},layout:{control:"inline-radio",options:["vertical","horizontal"],description:"horizontal — обложка слева (панель сбоку, телефон)"},unavailable:{control:"boolean",description:"Снят с публикации — замок, без кнопки"},image:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},assigned:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},favorite:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onFavoriteChange:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onStart:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Карточка статуса курса — справа на странице курса (состав из старой карточки «База знаний Корп», вид наш): обложка 16:9, плашки — время (`InfoTag blue`), баллы за курс (`InfoTag gray` со звездой-лентой), срок назначенного (`AssignedBadge`); статус H4 — «Ещё не начат», «Пройдено 40%» с голубой «колбаской» (`SegmentedProgress` в один сегмент, как уровень в профиле), «Курс пройден» зелёным; главная кнопка по статусу — «Начать обучение» / «Продолжить» / «Пройти ещё раз» и звезда «В избранное» — круг 48 в размер кнопки (`FavoriteButton size="large"`). В панели сбоку и на телефоне — `layout="horizontal"` (обложка слева; на телефоне — столбиком).'}}},render:t=>{const[u,x]=B.useState(!1);return n.jsx(i,{...t,favorite:u,onFavoriteChange:x})},decorators:[(t,u)=>n.jsx("div",{style:{padding:24,width:u.args.layout==="horizontal"?820:360,background:"var(--color-surface)",borderRadius:30},children:n.jsx(t,{})})]},r={name:"Ещё не начат"},a={name:"Идёт, назначен",args:{progress:40,assigned:{deadline:"2026-10-20",reason:"Назначил руководитель"}}},e={name:"Пройден",args:{progress:100}},o={name:"Снят с публикации",args:{progress:10,unavailable:!0}},s={name:"Обложка слева (панель)",args:{layout:"horizontal",progress:50}},q=["НеНачат","Идёт","Пройден","Снят","Горизонтально"];var c,p,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Ещё не начат"
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,g,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Идёт, назначен",
  args: {
    progress: 40,
    assigned: {
      deadline: "2026-10-20",
      reason: "Назначил руководитель"
    }
  }
}`,...(d=(g=a.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var f,y,v;e.parameters={...e.parameters,docs:{...(f=e.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Пройден",
  args: {
    progress: 100
  }
}`,...(v=(y=e.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var b,S,h;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Снят с публикации",
  args: {
    progress: 10,
    unavailable: true
  }
}`,...(h=(S=o.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var C,D,E;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Обложка слева (панель)",
  args: {
    layout: "horizontal",
    progress: 50
  }
}`,...(E=(D=s.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};export{q as __namedExportsOrder,Y as default,s as Горизонтально,a as Идёт,r as НеНачат,e as Пройден,o as Снят};
