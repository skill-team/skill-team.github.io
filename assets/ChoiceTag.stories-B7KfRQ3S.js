import{r as f,j as t}from"./iframe-CFCi-G_z.js";import{a as h,C as y,S as C}from"./ChoiceTag-D_RAQuJJ.js";import{A as v}from"./aboutData-qbmciRRW.js";import"./preload-helper-C1FmrZbK.js";import"./profileData-CEgMGd_U.js";import"./index-UzVeu6a-.js";const r=v[0],B={title:"UI Kit/Фильтры/ChoiceTag",id:"ui-kit-choicetag",component:h,tags:["autodocs"],args:{label:"Путешествия",selected:!1,static:!1},argTypes:{label:{control:"text"},selected:{control:"boolean",description:"Выбран — голубой с голубой обводкой"},static:{control:"boolean",description:"Только показать — серая плашка, не нажимается"},onChange:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Тег-выбор — Figma «Tabs» M в окне «Редактирование профиля» (личный кабинет, «О себе»). Таблетка 40, поля 24, `Button Medium` 16. Не выбран — белый с серой обводкой (`--choice-tag-border`), выбран — голубой с голубой обводкой, текст синим. Выбор **множественный** (в отличие от `FilterTag`, где выбор один): каждый тег — переключатель, группа — `ChoiceTagGroup` (`options`, `value[]`, `onChange`). `static` и `StaticTagList` — выбранное серыми плашками на странице профиля. На телефоне — 36, поля 16, шрифт 14.\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| `selected` | true / false | Tabs: Active / Default |\n| `static` | true — серая плашка | Tabs в блоках страницы «О себе» |"}}},decorators:[e=>t.jsx("div",{style:{padding:24,maxWidth:680,background:"var(--color-surface)"},children:t.jsx(e,{})})]},a={render:e=>{const[n,x]=f.useState(e.selected??!1);return t.jsx(h,{...e,selected:n,onChange:x})}},o={name:"Группа — выбор нескольких",render:()=>{const[e,n]=f.useState(r.selected);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[t.jsxs("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:["Выбрано ",e.length]}),t.jsx(y,{label:r.title,options:r.options,value:e,onChange:n})]})}},s={name:"Только показать",render:()=>t.jsx(C,{items:r.selected})},O=["Playground","Группа","Плашки"];var c,u,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [on, setOn] = useState(args.selected ?? false);
    return <ChoiceTag {...args} selected={on} onChange={setOn} />;
  }
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var i,d,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Группа — выбор нескольких",
  render: () => {
    const [value, setValue] = useState(hobbies.selected);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <span style={{
        fontFamily: "var(--font-family-body)",
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>Выбрано {value.length}</span>
        <ChoiceTagGroup label={hobbies.title} options={hobbies.options} value={value} onChange={setValue} />
      </div>;
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,g,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Только показать",
  render: () => <StaticTagList items={hobbies.selected} />
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};export{a as Playground,O as __namedExportsOrder,B as default,o as Группа,s as Плашки};
