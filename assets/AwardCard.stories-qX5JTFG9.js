import{j as r}from"./iframe-DATgQ8vN.js";import{b as m}from"./index-CGJuuq_M.js";import{A as o}from"./AwardCard-DOFYJOd-.js";import{A as u}from"./achievementsData-QTm5KAXF.js";import"./preload-helper-C1FmrZbK.js";import"./AchievementBadge-BsnoJ2Hs.js";import"./index-CeHB25lk.js";import"./ContextIsolator-CeJsXOdt.js";import"./context-DazkKd-s.js";const h={title:"UI Kit/Профиль/AwardCard",id:"ui-kit-awardcard",component:o,tags:["autodocs"],args:{src:m["course-scholar"],title:"Смелый дебют",description:"Первый пройденный курс",locked:!1},argTypes:{title:{control:"text"},description:{control:"text",description:"Условие получения"},locked:{control:"boolean",description:"Ещё не получена — серая, ачивка с замком"},src:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},delay:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:`Карточка награды (личный кабинет, «Достижения» → «Награды»). Ачивка (\`AchievementBadge\`) по центру, через 16 — название (14 SemiBold) и через 8 условие (12). Поля 16, скругление 30.

| Проп | Значения |
|---|---|
| \`locked\` | false — белая с серой рамкой 4, ачивка цветная |
| | true — серая, ачивка обесцвечена с замком, текст серым |`}}},decorators:[e=>r.jsx("div",{style:{padding:24,background:"var(--color-surface)"},children:r.jsx(e,{})})]},a={render:e=>r.jsx("div",{style:{width:205,display:"flex"},children:r.jsx(o,{...e})})},t={name:"Все награды",render:()=>r.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:24},children:u.map((e,p)=>r.jsx(o,{src:e.src,title:e.title,description:e.description,locked:!e.earned,delay:p*60},e.key))})},w=["Playground","Сетка"];var s,d,i;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 205,
    display: "flex"
  }}><AwardCard {...args} /></div>
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var n,c,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Все награды",
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: 24
  }}>
      {AWARDS.map((a, i) => <AwardCard key={a.key} src={a.src} title={a.title} description={a.description} locked={!a.earned} delay={i * 60} />)}
    </div>
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};export{a as Playground,w as __namedExportsOrder,h as default,t as Сетка};
