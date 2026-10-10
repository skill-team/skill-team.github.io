import{j as t}from"./iframe-T1G-SIdY.js";import{F as c}from"./FileTypeBadge-RiR0bbu6.js";import"./preload-helper-C1FmrZbK.js";const x={title:"UI Kit/Таблицы/FileTypeBadge",id:"ui-kit-filetypebadge",component:c,tags:["autodocs"],args:{type:"pdf"},argTypes:{type:{control:"text",description:"Расширение: pdf, docx, xlsx…"}},parameters:{docs:{description:{component:"Плашка типа файла — Figma Setl, «File-Type-Badge» `2046:143818`: отступы 4/8, скругление 6, `Caption Medium` прописными. Цвета — уже существующие в ките, новых не заводили: PDF — красная, XLS/XLSX/CSV — зелёная (как «50%»), DOC/DOCX — синяя (как «10 минут»), остальные — серая."}}}},e={},p={name:"Все цвета",render:()=>t.jsx("div",{style:{display:"flex",gap:12},children:["pdf","xlsx","csv","docx","pptx","zip","jpg"].map(r=>t.jsx(c,{type:r},r))})},g=["Playground","Все"];var a,s,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var d,i,n;p.parameters={...p.parameters,docs:{...(d=p.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Все цвета",
  render: () => <div style={{
    display: "flex",
    gap: 12
  }}>
      {["pdf", "xlsx", "csv", "docx", "pptx", "zip", "jpg"].map(t => <FileTypeBadge key={t} type={t} />)}
    </div>
}`,...(n=(i=p.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};export{e as Playground,g as __namedExportsOrder,x as default,p as Все};
