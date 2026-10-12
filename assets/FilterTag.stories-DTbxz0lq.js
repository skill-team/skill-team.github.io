import{r as m,j as e,e as f,q as b}from"./iframe-XQ_qeO9Z.js";import{a as r,F as x}from"./FilterTag-CMiJMWqK.js";import{T as S}from"./coursesData-DtpNmbio.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-B6hy5Aa6.js";import"./index--oqSavUY.js";import"./ContextIsolator-DJke2nN-.js";import"./context-BSOHyiuZ.js";import"./course-3-gX4Ok3xk.js";import"./course-4-bsGBpGWB.js";const I={title:"UI Kit/Фильтры/FilterTag",id:"ui-kit-filtertag",component:r,tags:["autodocs"],args:{label:"Охрана труда",selected:!1,tone:"default"},argTypes:{label:{control:"text",description:"Длинное — уходит в «…», полное в тултипе"},selected:{control:"boolean"},tone:{control:"inline-radio",options:["default","info"],description:"info — голубой: личные фильтры «Я изучаю», «Избранное»"},on:{control:"inline-radio",options:["surface","page"],description:"На белом блоке (серые теги) или на сером фоне страницы (белые)"},icon:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onClick:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Тег-фильтр реестра — Figma Setl, «Bubble» `2046:144280`. Таблетка 40, отступы 12/20, текст `Button Medium`, иконка 16 необязательна. Выбранный — праймари красный; невыбранный — `gray-150` (стоит на белом блоке фильтров), наведение — на шаг темнее.\n\n**Голубой тег** (`tone="info"`) — личные фильтры «Я изучаю», «Избранное» с иконкой в одном облаке с темами: светло-голубая подложка `blue-300`, текст `blue-700` (контраст 4.57). Выбранный — красный, как все.\n\nОблако — `FilterTagGroup`: переносится по строкам, между тегами 16, **выбор один**. Тег не шире своего ряда: длинное название уходит в «…», полное — в тултипе.'}}},decorators:[t=>e.jsx("div",{style:{padding:24,background:"var(--color-surface)",borderRadius:30},children:e.jsx(t,{})})]},s={render:t=>{const[o,l]=m.useState(t.selected??!1);return e.jsx(r,{...t,selected:o,onClick:()=>l(g=>!g)})}},n={name:"Облако тегов (выбор один)",render:()=>{const[t,o]=m.useState("all");return e.jsx("div",{style:{width:760},children:e.jsxs(x,{label:"Тема",children:[e.jsx(r,{label:"Все курсы",selected:t==="all",onClick:()=>o("all")}),e.jsx(r,{tone:"info",label:"Я изучаю",icon:e.jsx(f,{size:16}),selected:t==="studying",onClick:()=>o("studying")}),e.jsx(r,{tone:"info",label:"Избранное",icon:e.jsx(b,{size:16}),selected:t==="favorite",onClick:()=>o("favorite")}),S.map(l=>e.jsx(r,{label:l,selected:t===l,onClick:()=>o(l)},l))]})})}},z=["Playground","Облако"];var a,i,u;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    const [on, setOn] = useState(args.selected ?? false);
    return <FilterTag {...args} selected={on} onClick={() => setOn(v => !v)} />;
  }
}`,...(u=(i=s.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var c,d,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};export{s as Playground,z as __namedExportsOrder,I as default,n as Облако};
