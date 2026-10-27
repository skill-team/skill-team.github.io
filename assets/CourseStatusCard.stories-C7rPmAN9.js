import{j as e,r as z}from"./iframe-wfJ_y6tk.js";import{C as c}from"./CourseStatusCard-DyebQN2l.js";import{R as A}from"./coursesData-BZH3rvUT.js";import"./preload-helper-C1FmrZbK.js";import"./AssignedBadge-DBDPFo5k.js";import"./Archive-Ban5Sfu5.js";import"./InfoTag-BAAPDPgL.js";import"./index-DK8SjL2j.js";import"./ContextIsolator-8G1DI5TY.js";import"./context-BtIUxdFu.js";import"./FavoriteButton-eaF04spG.js";import"./SegmentedProgress-rUC_Vblv.js";import"./course-1--YiCqOCo.js";import"./course-4-bsGBpGWB.js";import"./course-3-DSDYLXDH.js";const k=A[1],M={title:"UI Kit/Курсы/CourseStatusCard",id:"ui-kit-coursestatuscard",component:c,tags:["autodocs"],args:{image:k.image,duration:"15 минут",points:275,progress:0,layout:"vertical"},argTypes:{progress:{control:{type:"range",min:0,max:100,step:10},description:"0 — «Ещё не начат», 1…99 — «Пройдено N%», 100 — «Курс пройден»"},layout:{control:"inline-radio",options:["vertical","horizontal"],description:"horizontal — обложка слева (панель сбоку, телефон)"},unavailable:{control:"boolean",description:"Снят с публикации — замок, без кнопки"},image:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},assigned:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},favorite:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onFavoriteChange:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onStart:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Карточка статуса курса — справа на странице курса (состав из старой карточки «База знаний Корп», вид наш): обложка 16:9, плашки — время (`InfoTag blue`), баллы за курс (`InfoTag gray` со звездой-лентой), срок назначенного (`AssignedBadge`); статус H4 — «Ещё не начат», «Пройдено 40%» с голубой «колбаской» (`SegmentedProgress` в один сегмент, как уровень в профиле), «Курс пройден» зелёным; главная кнопка по статусу — «Начать обучение» / «Продолжить» / «Пройти ещё раз» и звезда «В избранное» — круг 48 в размер кнопки (`FavoriteButton size="large"`). `layout="horizontal"` — обложка слева (на телефоне — столбиком).\n\n**Без обложки** (`image` не передан) — так сейчас на курсе (2026-10-21): карточка стоит в шапке курса между названием и описанием, одной подложкой; обложка редко несёт смысл. Статус с полосой и кнопки — в одну линию (кнопки справа, на уровне полосы); уже 520 — кнопки второй строкой.'}}},render:r=>{const[i,j]=z.useState(!1);return e.jsx(c,{...r,favorite:i,onFavoriteChange:j})},decorators:[(r,i)=>e.jsx("div",{style:{padding:24,width:i.args.layout==="horizontal"?820:360,background:"var(--color-surface)",borderRadius:30},children:e.jsx(r,{})})]},a={name:"Ещё не начат"},o={name:"Идёт, назначен",args:{progress:40,assigned:{deadline:"2026-10-20",reason:"Назначил руководитель"}}},s={name:"Пройден",args:{progress:100}},u={name:"Снят с публикации",args:{progress:10,unavailable:!0}},t={name:"Обложка слева (панель)",args:{layout:"horizontal",progress:50}},n={name:"Без обложки (шапка курса)",args:{image:void 0,progress:40},decorators:[r=>e.jsx("div",{style:{padding:24,width:820,background:"var(--color-surface)",borderRadius:30},children:e.jsx(r,{})})]},Q=["НеНачат","Идёт","Пройден","Снят","Горизонтально","БезОбложки"];var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Ещё не начат"
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var l,g,f;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Идёт, назначен",
  args: {
    progress: 40,
    assigned: {
      deadline: "2026-10-20",
      reason: "Назначил руководитель"
    }
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,y,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Пройден",
  args: {
    progress: 100
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var S,h,E;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Снят с публикации",
  args: {
    progress: 10,
    unavailable: true
  }
}`,...(E=(h=u.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var x,C,D;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Обложка слева (панель)",
  args: {
    layout: "horizontal",
    progress: 50
  }
}`,...(D=(C=t.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var B,F,R;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Без обложки (шапка курса)",
  args: {
    image: undefined,
    progress: 40
  },
  decorators: [Story => <div style={{
    padding: 24,
    width: 820,
    background: "var(--color-surface)",
    borderRadius: 30
  }}><Story /></div>]
}`,...(R=(F=n.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};export{Q as __namedExportsOrder,M as default,n as БезОбложки,t as Горизонтально,o as Идёт,a as НеНачат,s as Пройден,u as Снят};
