import{j as a}from"./iframe-BffffG_H.js";import{S as r,a as i}from"./StatCard-DTV466O5.js";import"./preload-helper-C1FmrZbK.js";const x={title:"UI Kit/Профиль/StatCard",id:"ui-kit-statcard",component:r,tags:["autodocs"],args:{value:"9",label:"Всего"},argTypes:{value:{control:"text",description:"Число — H2 24 Bold"},label:{control:"text",description:"Подпись — P3 14 серым"},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Карточка-число — Figma «Статистика → Карточка» (личный кабинет, «Архив»). Серая плашка (`--stat-card-bg`), скругление 16, поля 16 × 20: число `H2` 24 Bold и через 4 подпись `P3` серым. В ряд поровну — `StatCardGroup` (между карточками 16; на телефоне по 2 в ряд)."}}},decorators:[u=>a.jsx("div",{style:{padding:24,background:"var(--color-surface)"},children:a.jsx(u,{})})]},e={render:u=>a.jsx("div",{style:{width:240},children:a.jsx(r,{...u})})},t={name:"В ряд",render:()=>a.jsxs(i,{children:[a.jsx(r,{value:9,label:"Всего"}),a.jsx(r,{value:9,label:"Пройдено"}),a.jsx(r,{value:0,label:"Завершено"}),a.jsx(r,{value:100,label:"Средний балл"})]})},g=["Playground","Ряд"];var s,o,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 240
  }}><StatCard {...args} /></div>
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var d,n,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "В ряд",
  render: () => <StatCardGroup>
      <StatCard value={9} label="Всего" />
      <StatCard value={9} label="Пройдено" />
      <StatCard value={0} label="Завершено" />
      <StatCard value={100} label="Средний балл" />
    </StatCardGroup>
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};export{e as Playground,g as __namedExportsOrder,x as default,t as Ряд};
