import{r as a,j as e,e as S,q as x}from"./iframe-CFCi-G_z.js";import{a as r,F as C}from"./FilterTag-DkjDpgFS.js";import{T}from"./coursesData-Bp7P2XRa.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-D3AOnDGh.js";import"./index-zH042xrC.js";import"./ContextIsolator-DRazcLis.js";import"./context-x6QakU1z.js";import"./course-3-gX4Ok3xk.js";import"./course-4-bsGBpGWB.js";const M={title:"UI Kit/Фильтры/FilterTag",id:"ui-kit-filtertag",component:r,tags:["autodocs"],args:{label:"Охрана труда",selected:!1,tone:"default"},argTypes:{label:{control:"text",description:"Длинное — уходит в «…», полное в тултипе"},selected:{control:"boolean"},tone:{control:"inline-radio",options:["default","info"],description:"info — голубой: личные фильтры «Я изучаю», «Избранное»"},on:{control:"inline-radio",options:["surface","page"],description:"На белом блоке (серые теги) или на сером фоне страницы (белые)"},icon:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onClick:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Тег-фильтр реестра — Figma Setl, «Bubble» `2046:144280`. Таблетка 40, отступы 12/20, текст `Button Medium`, иконка 16 необязательна. Выбранный — праймари красный; невыбранный — `gray-150` (стоит на белом блоке фильтров), наведение — на шаг темнее.\n\n**Голубой тег** (`tone="info"`) — личные фильтры «Я изучаю», «Избранное» с иконкой в одном облаке с темами: светло-голубая подложка `blue-300`, текст `blue-700` (контраст 4.57). Выбранный — красный, как все.\n\nОблако — `FilterTagGroup`: переносится по строкам, между тегами 16, **выбор один**. Тег не шире своего ряда: длинное название уходит в «…», полное — в тултипе.'}}},decorators:[u=>e.jsx("div",{style:{padding:24,background:"var(--color-surface)",borderRadius:30},children:e.jsx(u,{})})]},l={render:u=>{const[s,t]=a.useState(u.selected??!1);return e.jsx(r,{...u,selected:s,onClick:()=>t(E=>!E)})}},o={name:"Облако тегов (выбор один)",render:()=>{const[u,s]=a.useState("all");return e.jsx("div",{style:{width:760},children:e.jsxs(C,{label:"Тема",children:[e.jsx(r,{label:"Все курсы",selected:u==="all",onClick:()=>s("all")}),e.jsx(r,{tone:"info",label:"Я изучаю",icon:e.jsx(S,{size:16}),selected:u==="studying",onClick:()=>s("studying")}),e.jsx(r,{tone:"info",label:"Избранное",icon:e.jsx(x,{size:16}),selected:u==="favorite",onClick:()=>s("favorite")}),T.map(t=>e.jsx(r,{label:t,selected:u===t,onClick:()=>s(t)},t))]})})}},n={name:"Маленькие — месяцы",parameters:{docs:{description:{story:'`size="small"` — 32, поля 16, текст `Button Small` 14, между тегами 12 (Figma «Tabs» S): месяцы в истории баллов личного кабинета.'}}},render:()=>{const[u,s]=a.useState("Октябрь");return e.jsx(C,{label:"Период",children:["Октябрь","Сентябрь","Август","Всё время"].map(t=>e.jsx(r,{size:"small",label:t,selected:u===t,onClick:()=>s(t)},t))})}},I=["Playground","Облако","Маленькие"];var i,c,d;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [on, setOn] = useState(args.selected ?? false);
    return <FilterTag {...args} selected={on} onClick={() => setOn(v => !v)} />;
  }
}`,...(d=(c=l.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,p,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Облако тегов (выбор один)",
  render: () => {
    const [sel, setSel] = useState("all");
    return <div style={{
      width: 760
    }}>
        <FilterTagGroup label="Тема">
          <FilterTag label="Все курсы" selected={sel === "all"} onClick={() => setSel("all")} />
          <FilterTag tone="info" label="Я изучаю" icon={<IconEye size={16} />} selected={sel === "studying"} onClick={() => setSel("studying")} />
          <FilterTag tone="info" label="Избранное" icon={<IconStar size={16} />} selected={sel === "favorite"} onClick={() => setSel("favorite")} />
          {THEMES.map(t => <FilterTag key={t} label={t} selected={sel === t} onClick={() => setSel(t)} />)}
        </FilterTagGroup>
      </div>;
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var F,b,f;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Маленькие — месяцы",
  parameters: {
    docs: {
      description: {
        story: "\\\`size=\\"small\\"\\\` — 32, поля 16, текст \\\`Button Small\\\` 14, между тегами 12 (Figma «Tabs» S): месяцы в истории баллов личного кабинета."
      }
    }
  },
  render: () => {
    const [m, setM] = useState("Октябрь");
    return <FilterTagGroup label="Период">
        {["Октябрь", "Сентябрь", "Август", "Всё время"].map(x => <FilterTag key={x} size="small" label={x} selected={m === x} onClick={() => setM(x)} />)}
      </FilterTagGroup>;
  }
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};export{l as Playground,I as __namedExportsOrder,M as default,n as Маленькие,o as Облако};
