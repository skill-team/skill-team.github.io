import{j as e,X as c}from"./iframe-xHeXyRUt.js";import{S as n}from"./StatValue-D7r4PkIh.js";import"./preload-helper-C1FmrZbK.js";const g={title:"UI Kit/Профиль/StatValue",id:"ui-kit-statvalue",component:n,tags:["autodocs"],args:{label:"Баллы",value:"400",tone:"default",align:"start"},argTypes:{label:{control:"text"},value:{control:"text"},tone:{control:"inline-radio",options:["default","info"]},align:{control:"inline-radio",options:["start","end"]},icon:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Показатель «подпись + число». Подпись — Montserrat Regular 16, через 4 — число SemiBold 20 (`--panel-text`), иконка 24 после числа.\n\n| Проп | Значения |\n|---|---|\n| `tone` | `default` · `accent` |\n| `align` | `start` · `end` |\n| `icon` | иконка 24 |"}}}},t={args:{icon:e.jsx(c,{size:24})}},a={render:()=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:319},children:[e.jsx(n,{label:"Баллы",value:"400",icon:e.jsx(c,{size:24})}),e.jsx(n,{label:"До след. уровня",value:"300",tone:"info",align:"end"})]})},b=["Playground","Варианты"];var o,r,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    icon: <IconRibbonStar size={24} />
  }
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var l,i,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    justifyContent: "space-between",
    width: 319
  }}>
      <StatValue label="Баллы" value="400" icon={<IconRibbonStar size={24} />} />
      <StatValue label="До след. уровня" value="300" tone="info" align="end" />
    </div>
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};export{t as Playground,b as __namedExportsOrder,g as default,a as Варианты};
