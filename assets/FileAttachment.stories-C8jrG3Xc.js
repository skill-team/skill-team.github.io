import{j as o}from"./iframe-wfJ_y6tk.js";import{F as r}from"./FileAttachment-BLxfvQCC.js";import"./preload-helper-C1FmrZbK.js";import"./FileTypeBadge-Bf6y6nxG.js";import"./ProgressBar-CfWXXZ3a.js";const w={title:"UI Kit/Таблицы/FileAttachment",id:"ui-kit-fileattachment",component:r,tags:["autodocs"],args:{name:"Типовые обращения подрядных организаций.pdf",size:"404,7 КБ"},argTypes:{name:{control:"text",description:"Имя файла с расширением; длинное — «…», полное — в подсказке"},type:{control:"text",description:"Тип для бейджа; по умолчанию из расширения"},size:{control:"text"},status:{control:"inline-radio",options:["default","loading","error"],description:"loading — грузится (полоса и проценты, «Отменить»), error — не загрузился (красный, только «Удалить»)"},progress:{control:{type:"range",min:0,max:100,step:1},description:'Сколько загружено, 0–100 (при status="loading")'},onDelete:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onCancel:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onPreview:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onDownload:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Плашка вложенного файла — в материале «Базы знаний»: бейдж типа (`FileTypeBadge`), имя и размер, справа «Просмотр» и «Скачать» (`Button secondary small`, как в реестре документов). Рамка серая, скругление 16. Узко — кнопки переносятся под имя. Без `onPreview` / `onDownload` — кнопки нет.\n\nВ загрузке файлов (`Upload`): `onDelete` — корзина «Удалить»; `status="loading"` — вместо размера полоса и проценты, крестик «Отменить» (`onCancel`); `status="error"` — имя и подпись красные, «Не удалось загрузить», остаётся только «Удалить».'}}},decorators:[e=>o.jsx("div",{style:{padding:24,maxWidth:720,background:"var(--color-surface)"},children:o.jsx(e,{})})]},n={render:e=>o.jsx(r,{...e,onPreview:()=>{},onDownload:()=>{}})},a={args:{name:"Отчеты в ICONA.mp4",size:"42 МБ"},render:e=>o.jsx(r,{...e,onPreview:()=>{},onDownload:()=>{}})},t={name:"В загрузке файлов",args:{name:"Акт освидетельствования скрытых работ.pdf"},render:e=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[o.jsx(r,{...e,size:"1,2 МБ",onDelete:()=>{}}),o.jsx(r,{...e,name:"Исполнительная схема.pdf",status:"loading",progress:40,onCancel:()=>{}}),o.jsx(r,{...e,name:"Сертификат на арматуру.pdf",status:"error",onDelete:()=>{}})]})},C=["Playground","Видео","ВЗагрузке"];var u,s,l;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <FileAttachment {...args} onPreview={() => {}} onDownload={() => {}} />
}`,...(l=(s=n.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: "Отчеты в ICONA.mp4",
    size: "42 МБ"
  },
  render: args => <FileAttachment {...args} onPreview={() => {}} onDownload={() => {}} />
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "В загрузке файлов",
  args: {
    name: "Акт освидетельствования скрытых работ.pdf"
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 8
  }}>
      <FileAttachment {...args} size="1,2 МБ" onDelete={() => {}} />
      <FileAttachment {...args} name="Исполнительная схема.pdf" status="loading" progress={40} onCancel={() => {}} />
      <FileAttachment {...args} name="Сертификат на арматуру.pdf" status="error" onDelete={() => {}} />
    </div>
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};export{n as Playground,C as __namedExportsOrder,w as default,t as ВЗагрузке,a as Видео};
