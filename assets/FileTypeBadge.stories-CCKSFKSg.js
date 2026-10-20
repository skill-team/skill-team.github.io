import{j as s}from"./iframe-xHeXyRUt.js";import{F as c}from"./FileTypeBadge-4RcTRARI.js";import"./preload-helper-C1FmrZbK.js";const x={title:"UI Kit/Таблицы/FileTypeBadge",id:"ui-kit-filetypebadge",component:c,tags:["autodocs"],args:{type:"pdf"},argTypes:{type:{control:"text",description:"Расширение: pdf, docx, xlsx…"}},parameters:{docs:{description:{component:"Плашка типа файла: отступы 4/8, скругление 6, `Caption Medium` прописными. Цвета — уже существующие в ките, новых не заводили: PDF — красная, XLS/XLSX/CSV — зелёная (как «50%»), DOC/DOCX — синяя (как «10 минут»), остальные — серая."}}}},e={},r={name:"Все цвета",render:()=>s.jsx("div",{style:{display:"flex",gap:12},children:["pdf","xlsx","csv","docx","pptx","zip","jpg"].map(p=>s.jsx(c,{type:p},p))})},y=["Playground","Все"];var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var d,i,n;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Все цвета",
  render: () => <div style={{
    display: "flex",
    gap: 12
  }}>
      {["pdf", "xlsx", "csv", "docx", "pptx", "zip", "jpg"].map(t => <FileTypeBadge key={t} type={t} />)}
    </div>
}`,...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};export{e as Playground,y as __namedExportsOrder,x as default,r as Все};
