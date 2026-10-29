import{j as e}from"./iframe-D1Ouy3kT.js";import{C as o}from"./Callout-CNUC5yr5.js";import"./preload-helper-C1FmrZbK.js";const t="Какая-то информация, на которую стоит обратить внимание, чтобы она выделялась среди полотна текста.",g={title:"UI Kit/Материалы/Callout",id:"ui-kit-callout",component:o,tags:["autodocs"],args:{tone:"info",children:t},argTypes:{tone:{control:"inline-radio",options:["info","neutral","success","danger"],description:"info — важное, neutral — примечание, success — совет, danger — предупреждение"},title:{control:"text",description:"Необязательный заголовок — жирным над текстом"},children:{control:"text"},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Инфоблок — выделенный абзац в материале: цветная плашка, скругление 24, поля 24, текст P1 18 (межстрочный 1,5) цветом плашки. Четыре цвета: голубой, серый, зелёный, красный. На телефоне — поля 16, текст 16."}}},decorators:[d=>e.jsx("div",{style:{padding:24,maxWidth:900,background:"var(--color-surface)",borderRadius:30},children:e.jsx(d,{})})]},n={},r={name:"Все цвета",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(o,{tone:"info",children:t}),e.jsx(o,{tone:"neutral",children:t}),e.jsx(o,{tone:"success",children:t}),e.jsx(o,{tone:"danger",title:"Важно",children:t})]})},f=["Playground","Все"];var a,s,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,i,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Все цвета",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <Callout tone="info">{TEXT}</Callout>
      <Callout tone="neutral">{TEXT}</Callout>
      <Callout tone="success">{TEXT}</Callout>
      <Callout tone="danger" title="Важно">
        {TEXT}
      </Callout>
    </div>
}`,...(u=(i=r.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};export{n as Playground,f as __namedExportsOrder,g as default,r as Все};
