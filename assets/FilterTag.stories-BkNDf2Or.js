import{r as g,j as e,e as b,s as f}from"./iframe-T1G-SIdY.js";import{a as s,F as x}from"./FilterTag-c0-YYSyz.js";import{T as S}from"./coursesData-DtpNmbio.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-wUfbEmiw.js";import"./index-CCOMMNKo.js";import"./context-BT_JPeuY.js";import"./course-3-gX4Ok3xk.js";import"./course-4-bsGBpGWB.js";const B={title:"UI Kit/Фильтры/FilterTag",id:"ui-kit-filtertag",component:s,tags:["autodocs"],args:{label:"Охрана труда",selected:!1,tone:"default"},argTypes:{label:{control:"text",description:"Длинное — уходит в «…», полное в тултипе"},selected:{control:"boolean"},tone:{control:"inline-radio",options:["default","accent"],description:"accent — голубой: личные фильтры «Я изучаю», «Избранное»"},on:{control:"inline-radio",options:["surface","page"],description:"На белом блоке (серые теги) или на сером фоне страницы (белые)"},icon:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onClick:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Тег-фильтр реестра — Figma Setl, «Bubble» `2046:144280`. Таблетка 40, отступы 12/20, текст `Button Medium`, иконка 16 необязательна. Выбранный — праймари красный; невыбранный — `gray-150` (стоит на белом блоке фильтров), наведение — на шаг темнее.\n\n**Голубой тег** (`tone="accent"`) — личные фильтры «Я изучаю», «Избранное» с иконкой в одном облаке с темами: светло-голубая подложка `blue-300`, текст `blue-700` (контраст 4.57). Выбранный — красный, как все.\n\nОблако — `FilterTagGroup`: переносится по строкам, между тегами 16, **выбор один**. Тег не шире своего ряда: длинное название уходит в «…», полное — в тултипе.'}}},decorators:[t=>e.jsx("div",{style:{padding:24,background:"var(--color-surface)",borderRadius:30},children:e.jsx(t,{})})]},r={render:t=>{const[l,o]=g.useState(t.selected??!1);return e.jsx(s,{...t,selected:l,onClick:()=>o(m=>!m)})}},a={name:"Облако тегов (выбор один)",render:()=>{const[t,l]=g.useState("all");return e.jsx("div",{style:{width:760},children:e.jsxs(x,{label:"Тема",children:[e.jsx(s,{label:"Все курсы",selected:t==="all",onClick:()=>l("all")}),e.jsx(s,{tone:"accent",label:"Я изучаю",icon:e.jsx(b,{size:16}),selected:t==="studying",onClick:()=>l("studying")}),e.jsx(s,{tone:"accent",label:"Избранное",icon:e.jsx(f,{size:16}),selected:t==="favorite",onClick:()=>l("favorite")}),S.map(o=>e.jsx(s,{label:o,selected:t===o,onClick:()=>l(o)},o))]})})}},I=["Playground","Облако"];var n,c,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [on, setOn] = useState(args.selected ?? false);
    return <FilterTag {...args} selected={on} onClick={() => setOn(v => !v)} />;
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var u,d,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Облако тегов (выбор один)",
  render: () => {
    const [sel, setSel] = useState("all");
    return <div style={{
      width: 760
    }}>
        <FilterTagGroup label="Тема">
          <FilterTag label="Все курсы" selected={sel === "all"} onClick={() => setSel("all")} />
          <FilterTag tone="accent" label="Я изучаю" icon={<IconEye size={16} />} selected={sel === "studying"} onClick={() => setSel("studying")} />
          <FilterTag tone="accent" label="Избранное" icon={<IconStar size={16} />} selected={sel === "favorite"} onClick={() => setSel("favorite")} />
          {THEMES.map(t => <FilterTag key={t} label={t} selected={sel === t} onClick={() => setSel(t)} />)}
        </FilterTagGroup>
      </div>;
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};export{r as Playground,I as __namedExportsOrder,B as default,a as Облако};
