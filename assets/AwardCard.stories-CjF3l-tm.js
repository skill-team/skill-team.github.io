import{j as r}from"./iframe-Mg7mFSpI.js";import{b as f}from"./index-CGJuuq_M.js";import{A as d,a as A}from"./AwardCard-BBD4VqEt.js";import{A as x}from"./achievementsData-o0BWwx5X.js";import"./preload-helper-C1FmrZbK.js";import"./AchievementBadge-Bi8Hd8rF.js";import"./index-CvEuNiz6.js";import"./ContextIsolator-CYyXykDJ.js";import"./context-CrBFPMJQ.js";import"./top-2-C8R-txU2.js";const B={title:"UI Kit/Профиль/AwardCard",id:"ui-kit-awardcard",component:d,tags:["autodocs"],args:{src:f["course-scholar"],title:"Смелый дебют",description:"Первый пройденный курс",locked:!1},argTypes:{title:{control:"text"},description:{control:"text",description:"Условие получения"},locked:{control:"boolean",description:"Ещё не получена — серая, ачивка с замком"},src:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},delay:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:`Карточка награды (личный кабинет, «Достижения» → «Награды»). Ачивка (\`AchievementBadge\`) по центру, через 16 — название (14 SemiBold) и через 8 условие (12). Поля 16, скругление 30.

| Проп | Значения |
|---|---|
| \`locked\` | false — белая с серой рамкой 4, ачивка цветная |
| | true — серая, ачивка обесцвечена с замком, текст серым |`}}},decorators:[e=>r.jsx("div",{style:{padding:24,background:"var(--color-surface)"},children:r.jsx(e,{})})]},a={render:e=>r.jsx("div",{style:{width:205,display:"flex"},children:r.jsx(d,{...e})})},t={name:"Все награды",render:()=>r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:24},children:x.map((e,o)=>r.jsx(d,{src:e.src,title:e.title,description:e.description,locked:!e.earned,delay:o*60},e.key))})},s={name:"Иконками (телефон)",render:()=>r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 96px)",gap:8,justifyContent:"start"},children:x.slice(0,6).map((e,o)=>r.jsx(A,{src:e.src,title:e.title,locked:!e.earned,delay:o*60},e.key))})},E=["Playground","Сетка","Иконками"];var i,n,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 205,
    display: "flex"
  }}><AwardCard {...args} /></div>
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,p,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Все награды",
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: 24
  }}>
      {AWARDS.map((a, i) => <AwardCard key={a.key} src={a.src} title={a.title} description={a.description} locked={!a.earned} delay={i * 60} />)}
    </div>
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,y,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Иконками (телефон)",
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 96px)",
    gap: 8,
    justifyContent: "start"
  }}>
      {AWARDS.slice(0, 6).map((a, i) => <AwardIcon key={a.key} src={a.src} title={a.title} locked={!a.earned} delay={i * 60} />)}
    </div>
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};export{a as Playground,E as __namedExportsOrder,B as default,s as Иконками,t as Сетка};
