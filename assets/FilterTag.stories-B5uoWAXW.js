import{r as i,j as u,e as S,O as k}from"./iframe-wfJ_y6tk.js";import{a as s,F as c}from"./FilterTag-DWKITn2I.js";import{T as j}from"./coursesData-BZH3rvUT.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-BK8cY36k.js";import"./index-DK8SjL2j.js";import"./ContextIsolator-8G1DI5TY.js";import"./context-BtIUxdFu.js";import"./course-1--YiCqOCo.js";import"./course-4-bsGBpGWB.js";import"./course-3-DSDYLXDH.js";const H={title:"UI Kit/Фильтры/FilterTag",id:"ui-kit-filtertag",component:s,tags:["autodocs"],args:{label:"Охрана труда",selected:!1,tone:"default"},argTypes:{label:{control:"text",description:"Длинное — уходит в «…», полное в тултипе"},selected:{control:"boolean"},tone:{control:"inline-radio",options:["default","info"],description:"info — голубой: личные фильтры «Я изучаю», «Избранное»"},on:{control:"inline-radio",options:["surface","page"],description:"На белом блоке (серые теги) или на сером фоне страницы (белые)"},icon:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onClick:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Тег-фильтр реестра. Таблетка 40, отступы 12/20, текст `Button Medium`, иконка 16 необязательна. Выбранный — праймари красный; невыбранный — `gray-150` (стоит на белом блоке фильтров), наведение — на шаг темнее.\n\n**Голубой тег** (`tone="info"`) — личные фильтры «Я изучаю», «Избранное» с иконкой в одном облаке с темами: светло-голубая подложка `blue-300`, текст `blue-700` (контраст 4.57). Выбранный — красный, как все.\n\nОблако — `FilterTagGroup`: переносится по строкам, между тегами 16, **выбор один**. Тег не шире своего ряда: длинное название уходит в «…», полное — в тултипе.'}}},decorators:[e=>u.jsx("div",{style:{padding:24,background:"var(--color-surface)",borderRadius:30},children:u.jsx(e,{})})]},l={render:e=>{const[t,n]=i.useState(e.selected??!1);return u.jsx(s,{...e,selected:t,onClick:()=>n(T=>!T)})}},o={name:"Облако тегов (выбор один)",render:()=>{const[e,t]=i.useState("all");return u.jsx("div",{style:{width:760},children:u.jsxs(c,{label:"Тема",children:[u.jsx(s,{label:"Все курсы",selected:e==="all",onClick:()=>t("all")}),u.jsx(s,{tone:"info",label:"Я изучаю",icon:u.jsx(S,{size:16}),selected:e==="studying",onClick:()=>t("studying")}),u.jsx(s,{tone:"info",label:"Избранное",icon:u.jsx(k,{size:16}),selected:e==="favorite",onClick:()=>t("favorite")}),j.map(n=>u.jsx(s,{label:n,selected:e===n,onClick:()=>t(n)},n))]})})}},r={name:"Маленькие — месяцы",parameters:{docs:{description:{story:'`size="small"` — 32, поля 16, текст `Button Small` 14, между тегами 12: месяцы в истории баллов личного кабинета.'}}},render:()=>{const[e,t]=i.useState("Октябрь");return u.jsx(c,{label:"Период",children:["Октябрь","Сентябрь","Август","Всё время"].map(n=>u.jsx(s,{size:"small",label:n,selected:e===n,onClick:()=>t(n)},n))})}},a={name:"Только иконка (iconOnly)",parameters:{docs:{description:{story:"`iconOnly` — круглый тег 40 без подписи, подпись — в тултипе и для экранного диктора. Реестр курсов на телефоне: «Все · Изучаю · Назначено · ☆»."}}},render:()=>{const[e,t]=i.useState("all");return u.jsxs(c,{label:"Курсы",children:[u.jsx(s,{label:"Все",selected:e==="all",onClick:()=>t("all")}),u.jsx(s,{tone:"info",icon:u.jsx(S,{size:16}),label:"Изучаю",selected:e==="s",onClick:()=>t("s")}),u.jsx(s,{tone:"info",icon:u.jsx(k,{size:16}),label:"Избранное",iconOnly:!0,selected:e==="f",onClick:()=>t("f")})]})}},P=["Playground","Облако","Маленькие","ТолькоИконка"];var d,p,m;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [on, setOn] = useState(args.selected ?? false);
    return <FilterTag {...args} selected={on} onClick={() => setOn(v => !v)} />;
  }
}`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,E,F;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(F=(E=o.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var f,x,C;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Маленькие — месяцы",
  parameters: {
    docs: {
      description: {
        story: "\\\`size=\\"small\\"\\\` — 32, поля 16, текст \\\`Button Small\\\` 14, между тегами 12: месяцы в истории баллов личного кабинета."
      }
    }
  },
  render: () => {
    const [m, setM] = useState("Октябрь");
    return <FilterTagGroup label="Период">
        {["Октябрь", "Сентябрь", "Август", "Всё время"].map(x => <FilterTag key={x} size="small" label={x} selected={m === x} onClick={() => setM(x)} />)}
      </FilterTagGroup>;
  }
}`,...(C=(x=r.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var b,y,B;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Только иконка (iconOnly)",
  parameters: {
    docs: {
      description: {
        story: "\\\`iconOnly\\\` — круглый тег 40 без подписи, подпись — в тултипе и для экранного диктора. Реестр курсов на телефоне: «Все · Изучаю · Назначено · ☆»."
      }
    }
  },
  render: () => {
    const [v, setV] = useState("all");
    return <FilterTagGroup label="Курсы">
        <FilterTag label="Все" selected={v === "all"} onClick={() => setV("all")} />
        <FilterTag tone="info" icon={<IconEye size={16} />} label="Изучаю" selected={v === "s"} onClick={() => setV("s")} />
        <FilterTag tone="info" icon={<IconStar size={16} />} label="Избранное" iconOnly selected={v === "f"} onClick={() => setV("f")} />
      </FilterTagGroup>;
  }
}`,...(B=(y=a.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};export{l as Playground,P as __namedExportsOrder,H as default,r as Маленькие,o as Облако,a as ТолькоИконка};
