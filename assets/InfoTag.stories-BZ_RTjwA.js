import{j as e,J as g}from"./iframe-XQ_qeO9Z.js";import{I as r,P as u}from"./ProgressRing-Ca5_V9hc.js";import"./preload-helper-C1FmrZbK.js";const x={title:"UI Kit/Карточки/InfoTag",id:"ui-kit-infotag",component:r,tags:["autodocs"],args:{tone:"blue",children:"10 минут"},argTypes:{tone:{control:"inline-radio",options:["blue","green"]},children:{control:"text"},icon:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Плашка-метка на карточке — Figma Setl, «Tag» в Course card `2079:151010`: иконка 14 + текст Montserrat Medium 14 (`Button Small`), отступы 4/8, скругление 10.\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| `tone` | `blue` · `green` | длительность · прогресс |\n| `icon` | иконка 14 | Duration · кольцо прогресса (`ProgressRing`) |"}}}},o={render:d=>e.jsx(r,{...d,icon:e.jsx(g,{size:14})})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(r,{tone:"blue",icon:e.jsx(g,{size:14}),children:"10 минут"}),e.jsx(r,{tone:"green",icon:e.jsx(u,{value:50}),children:"50%"})]})},I=["Playground","Варианты"];var s,a,t;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <InfoTag {...args} icon={<IconClockCircle size={14} />} />
}`,...(t=(a=o.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};var i,c,l;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12
  }}>
      <InfoTag tone="blue" icon={<IconClockCircle size={14} />}>
        10 минут
      </InfoTag>
      <InfoTag tone="green" icon={<ProgressRing value={50} />}>
        50%
      </InfoTag>
    </div>
}`,...(l=(c=n.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};export{o as Playground,I as __namedExportsOrder,x as default,n as Варианты};
