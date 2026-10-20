import{r as g,j as o}from"./iframe-xHeXyRUt.js";import{B as y,b as k}from"./blockCatalog-C1gN4gVX.js";import"./preload-helper-C1FmrZbK.js";import"./InputSearch-DOIQCbpg.js";import"./DropdownMenuItem-DIPkA542.js";import"./Radio-RKMtjUxZ.js";import"./index-DFWcBYSm.js";import"./context-YSLqM9pP.js";import"./pickAttrs-BwR6N1Ic.js";import"./useCSSVarCls-2qV6Kap2.js";import"./useForm-DcteB1QV.js";import"./index-DLAirbDr.js";import"./Select.module-L1SttIPx.js";import"./Spinner-BjmqB2w1.js";import"./InputChrome-RLws-aIV.js";import"./useTruncated-DZT6EyQu.js";import"./index-DAOdAdyQ.js";import"./ContextIsolator-BRwUpuIq.js";import"./index-BSmWugg0.js";import"./index-BZepmLjH.js";import"./CloseCircleFilled-U51GO4x2.js";import"./EyeOutlined-D6oaBCRI.js";import"./PurePanel-DskKyjH6.js";import"./index-PlNzUQFN.js";import"./useShowArrow-BG5xSIIH.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-DDDIwkRC.js";import"./useLocale-C5RInZ-8.js";import"./move-DrY42EjS.js";import"./useIcons-BJDXcmbA.js";import"./CheckOutlined-1AcpI7FG.js";import"./CloseOutlined-Ba06t28w.js";import"./Scrollbar-go_vQ20i.js";const Y={title:"UI Kit/Редактор/BlockMenu",id:"ui-kit-blockmenu",tags:["autodocs"],args:{kind:"news",query:"",maxHeight:460},argTypes:{kind:{control:"inline-radio",options:["news","material","course"],description:"Тип контента — набор блоков: у новостей нет SCORM"},query:{control:"text",description:"Начальный поиск — то, что набрали после «/»"},maxHeight:{control:{type:"number",min:240,max:800,step:20},description:"Высота списка до прокрутки"}},parameters:{docs:{story:{height:"640px"},description:{component:"Меню «что добавить» редактора новости, материала, курса — открывается по «+» у блока или по «/» в тексте. Сверху поиск (по названию и другим словам: «картинка» найдёт «Фото»), ниже группы — «Текст», «Фото и видео», «Выделение», «Вложения», «Ссылки и люди» — с мелкой подписью, в группе плитки по 3 в ряд: иконка 24 и подпись на серой подложке. У инфоблоков иконка цветом инфоблока. Блок, который ещё не сделан, — бледный, «Скоро», не нажимается.\n\nКлавиатура: фокус сразу в поиске, стрелки — по плиткам, Enter — добавить, Esc — закрыть. Список не выше `maxHeight`, дальше прокрутка внутри.\n\nНабор блоков — `blockCatalog.tsx`: один список, у блока — где он доступен; `blockGroupsFor(kind)` отдаёт группы для типа контента."}}}},r={render:({kind:t,query:i,maxHeight:d})=>{const[l,n]=g.useState("—");return o.jsxs("div",{style:{display:"flex",gap:24,alignItems:"flex-start"},children:[o.jsx(y,{groups:k(t),query:i,maxHeight:d,onSelect:x=>n(x.label),onClose:()=>n("закрыли (Esc)")},t+i),o.jsxs("p",{style:{margin:0,font:"14px var(--font-family-body)",color:"var(--color-text-secondary)"},children:["Выбрано: ",l]})]})}},e={name:"Поиск «фото»",args:{query:"фото"},render:r.render},Z=["Playground","Поиск"];var s,a,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: ({
    kind,
    query,
    maxHeight
  }) => {
    const [picked, setPicked] = useState<string>("—");
    return <div style={{
      display: "flex",
      gap: 24,
      alignItems: "flex-start"
    }}>
        <BlockMenu key={kind + query} groups={blockGroupsFor(kind)} query={query} maxHeight={maxHeight} onSelect={it => setPicked(it.label)} onClose={() => setPicked("закрыли (Esc)")} />
        <p style={{
        margin: 0,
        font: "14px var(--font-family-body)",
        color: "var(--color-text-secondary)"
      }}>Выбрано: {picked}</p>
      </div>;
  }
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var m,u,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Поиск «фото»",
  args: {
    query: "фото"
  },
  render: Playground.render
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};export{r as Playground,Z as __namedExportsOrder,Y as default,e as Поиск};
