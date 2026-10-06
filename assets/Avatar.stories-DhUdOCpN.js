import{j as e}from"./iframe-DCXgeGQz.js";import{A as t}from"./Avatar-DohhwPCM.js";import{E as a}from"./profileData-C_mFuJiu.js";import"./preload-helper-C1FmrZbK.js";const y={title:"UI Kit/Профиль/Avatar",id:"ui-kit-avatar",component:t,tags:["autodocs"],args:{src:a.photo,alt:a.name,size:100,ringColor:"var(--level-2-fill)",emphasized:!1},argTypes:{alt:{control:"text"},size:{control:{type:"number",min:32,max:160}},ringColor:{control:"select",options:[void 0,...[1,2,3,4,5,6].map(r=>`var(--level-${r}-fill)`)],description:"Цвет кольца — обычно цвет уровня; пусто — без кольца"},emphasized:{control:"boolean",description:"Кольцо толще (9 вместо 6), наружу — фото не меняется. Наведение на кликабельную карточку сотрудника"},src:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Фото сотрудника — Figma Setl, Avatar_card `2073:28149`. Круг 100 вместе с кольцом (фото 88), кольцо 6 цветом текущего уровня (`--level-N-fill`), фото обрезается по кругу. `emphasized` — кольцо толще (9), утолщается наружу, фото не сжимается: так аватар выглядит при наведении на карточку сотрудника (`ProfileCard` с `onOpen`)."}}}},o={},l={name:"Кольцо толще (наведение)",render:()=>e.jsxs("div",{style:{display:"flex",gap:32,padding:8},children:[e.jsx(t,{src:a.photo,alt:"Обычное",ringColor:"var(--level-2-fill)"}),e.jsx(t,{src:a.photo,alt:"Выделенное",ringColor:"var(--level-2-fill)",emphasized:!0})]})},s={name:"Кольцо по уровням",render:()=>e.jsx("div",{style:{display:"flex",gap:16},children:[1,2,3,4,5,6].map(r=>e.jsx(t,{src:a.photo,alt:`Уровень ${r}`,ringColor:`var(--level-${r}-fill)`},r))})},C=["Playground","Выделение","Уровни"];var u,n,i;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var p,c,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Кольцо толще (наведение)",
  render: () => <div style={{
    display: "flex",
    gap: 32,
    padding: 8
  }}>
      <Avatar src={EMPLOYEE.photo} alt="Обычное" ringColor="var(--level-2-fill)" />
      <Avatar src={EMPLOYEE.photo} alt="Выделенное" ringColor="var(--level-2-fill)" emphasized />
    </div>
}`,...(d=(c=l.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,v,E;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Кольцо по уровням",
  render: () => <div style={{
    display: "flex",
    gap: 16
  }}>
      {[1, 2, 3, 4, 5, 6].map(n => <Avatar key={n} src={EMPLOYEE.photo} alt={\`Уровень \${n}\`} ringColor={\`var(--level-\${n}-fill)\`} />)}
    </div>
}`,...(E=(v=s.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};export{o as Playground,C as __namedExportsOrder,y as default,l as Выделение,s as Уровни};
