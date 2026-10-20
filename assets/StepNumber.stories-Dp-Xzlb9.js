import{j as e}from"./iframe-DATgQ8vN.js";import{S as r}from"./StepNumber-DOmXvye-.js";import"./preload-helper-C1FmrZbK.js";const b={title:"UI Kit/Профиль/StepNumber",id:"ui-kit-stepnumber",component:r,tags:["autodocs"],args:{number:"03",status:"current",pulse:!0},argTypes:{number:{control:"text"},status:{control:"inline-radio",options:["done","overdue","current","locked"]},pulse:{control:"boolean",description:"Мягкая пульсация — у текущего шага"},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Номер шага адаптации — скруглённый квадрат 32 (`--radius-s`), номер `h6` цвета статуса: пройден — зелёный, просрочен — красный, текущий — синий, впереди — серый полу-неактивный. `pulse` — мягкая пульсация (расходится и гаснет голубое кольцо). Для линии змейки — «вырез» фоном страницы: `--step-cutout` и `--step-cutout-color` снаружи. Используется в `AdaptationPanel` и `AdaptationRoad`."}}},decorators:[p=>e.jsx("div",{style:{padding:24,background:"var(--color-surface)"},children:e.jsx(p,{})})]},t={},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(r,{number:"01",status:"done"}),e.jsx(r,{number:"02",status:"overdue"}),e.jsx(r,{number:"03",status:"current",pulse:!0}),e.jsx(r,{number:"04",status:"locked"})]})},x=["Playground","Статусы"];var o,a,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(n=(a=t.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};var u,c,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16
  }}>
      <StepNumber number="01" status="done" />
      <StepNumber number="02" status="overdue" />
      <StepNumber number="03" status="current" pulse />
      <StepNumber number="04" status="locked" />
    </div>
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};export{t as Playground,x as __namedExportsOrder,b as default,s as Статусы};
