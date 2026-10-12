import{j as e,O as p}from"./iframe-CFCi-G_z.js";import{I as n}from"./InfoTag-CwntD4rb.js";import{P as x}from"./ProgressRing-D43w80M8.js";import"./preload-helper-C1FmrZbK.js";const B={title:"UI Kit/Карточки/InfoTag",id:"ui-kit-infotag",component:n,tags:["autodocs"],args:{tone:"blue",size:"medium",children:"10 минут"},argTypes:{size:{control:"inline-radio",options:["medium","small","large"],description:"small — 12, поля 2 × 5, скругление 8: узкие карточки, строки, шаги адаптации; large — таблетка 30, шрифт 16: баллы в строках списка"},tone:{control:"inline-radio",options:["blue","green","red","gray"],description:"red — «Просрочен», gray — нейтральная (карта адаптации)"},children:{control:"text"},icon:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Плашка-метка на карточке — Figma Setl, «Tag» в Course card `2079:151010`: иконка 14 + текст Montserrat Medium 14 (`Button Small`), отступы 4/8, скругление 10.\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| `tone` | `blue` · `green` | длительность · прогресс |\n| `icon` | иконка 14 | Duration · кольцо прогресса (`ProgressRing`) |"}}}},r={render:f=>e.jsx(n,{...f,icon:e.jsx(p,{size:14})})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(n,{tone:"blue",icon:e.jsx(p,{size:14}),children:"10 минут"}),e.jsx(n,{tone:"green",icon:e.jsx(x,{value:50}),children:"50%"})]})},u={name:"Крупная — баллы",parameters:{docs:{description:{story:'`size="large"` — «Status» из личного кабинета: таблетка 30, шрифт 16 (`Button Medium`), поля 0 × 8. Баллы и пороги в строках списка (`ListItem`).'}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(n,{size:"large",tone:"gray",children:"+50"}),e.jsx(n,{size:"large",tone:"red",children:"7 297"}),e.jsx(n,{size:"large",tone:"blue",children:"от 300"}),e.jsx(n,{size:"large",tone:"green",children:"+30"})]})},j=["Playground","Варианты","Крупная"];var s,a,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => <InfoTag {...args} icon={<IconClockCircle size={14} />} />
}`,...(i=(a=r.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var t,l,c;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var g,d,m;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Крупная — баллы",
  parameters: {
    docs: {
      description: {
        story: "\\\`size=\\"large\\"\\\` — «Status» из личного кабинета: таблетка 30, шрифт 16 (\\\`Button Medium\\\`), поля 0 × 8. Баллы и пороги в строках списка (\\\`ListItem\\\`)."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    gap: 12,
    alignItems: "center"
  }}>
      <InfoTag size="large" tone="gray">+50</InfoTag>
      <InfoTag size="large" tone="red">7 297</InfoTag>
      <InfoTag size="large" tone="blue">от 300</InfoTag>
      <InfoTag size="large" tone="green">+30</InfoTag>
    </div>
}`,...(m=(d=u.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};export{r as Playground,j as __namedExportsOrder,B as default,o as Варианты,u as Крупная};
