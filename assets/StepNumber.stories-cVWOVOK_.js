import{j as e}from"./iframe-wfJ_y6tk.js";import{S as r}from"./StepNumber-BRK1dVas.js";import"./preload-helper-C1FmrZbK.js";const b={title:"UI Kit/Профиль/StepNumber",id:"ui-kit-stepnumber",component:r,tags:["autodocs"],args:{number:"03",status:"current",pulse:!0},argTypes:{number:{control:"text"},status:{control:"inline-radio",options:["done","overdue","current","upcoming","locked"]},pulse:{control:"boolean",description:"Мягкая пульсация — у текущего шага"},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Номер шага адаптации — скруглённый квадрат 32 (`--radius-s`), номер `h6` цвета статуса: пройден — зелёный, просрочен — красный, текущий и впереди — синий (впереди — шаг открыт), закрыт (`locked`) — серый полу-неактивный. `pulse` — мягкая пульсация (расходится и гаснет голубое кольцо). Для линии змейки — «вырез» фоном страницы: `--step-cutout` и `--step-cutout-color` снаружи. Используется в `AdaptationPanel` и `AdaptationRoad`."}}},decorators:[d=>e.jsx("div",{style:{padding:24,background:"var(--color-surface)"},children:e.jsx(d,{})})]},t={},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(r,{number:"01",status:"done"}),e.jsx(r,{number:"02",status:"overdue"}),e.jsx(r,{number:"03",status:"current",pulse:!0}),e.jsx(r,{number:"04",status:"upcoming"}),e.jsx(r,{number:"05",status:"locked"})]})},g=["Playground","Статусы"];var o,u,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(a=(u=t.parameters)==null?void 0:u.docs)==null?void 0:a.source}}};var n,c,p;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 16
  }}>
      <StepNumber number="01" status="done" />
      <StepNumber number="02" status="overdue" />
      <StepNumber number="03" status="current" pulse />
      <StepNumber number="04" status="upcoming" />
      <StepNumber number="05" status="locked" />
    </div>
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};export{t as Playground,g as __namedExportsOrder,b as default,s as Статусы};
