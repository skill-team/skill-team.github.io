import{r as g,j as o}from"./iframe-Mg7mFSpI.js";import{B as y,b as k}from"./blockCatalog-BBz8VRsU.js";import"./preload-helper-C1FmrZbK.js";import"./InputSearch-udteblSt.js";import"./DropdownMenuItem-B5qQrD8P.js";import"./Radio-DOKhlPqx.js";import"./index-CvGWrHqK.js";import"./context-CrBFPMJQ.js";import"./pickAttrs-DeHhXY-5.js";import"./useCSSVarCls-BXC_AxE0.js";import"./useForm-CKmLZKvb.js";import"./index-BV8XcOl4.js";import"./Select.module-L1SttIPx.js";import"./Spinner-ChNK4eS_.js";import"./InputChrome-C_nxiybR.js";import"./useTruncated-BTlzdCo_.js";import"./index-CvEuNiz6.js";import"./ContextIsolator-CYyXykDJ.js";import"./index-DN_fyvQD.js";import"./index-C7Vtoa2u.js";import"./CloseCircleFilled-BYoXnaYu.js";import"./EyeOutlined-DA4d19JW.js";import"./PurePanel-76V1kcAs.js";import"./index-B_x2UgRu.js";import"./useShowArrow-TmGXmNbl.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-DP-xZ7UB.js";import"./useLocale-giwBZfFx.js";import"./move-GoncIHrD.js";import"./useIcons-D04Wfx1k.js";import"./CheckOutlined-Dnbv5Gro.js";import"./CloseOutlined-rvSJE02o.js";import"./Scrollbar-Dgz02oz2.js";const Y={title:"UI Kit/Редактор/BlockMenu",id:"ui-kit-blockmenu",tags:["autodocs"],args:{kind:"news",query:"",maxHeight:460},argTypes:{kind:{control:"inline-radio",options:["news","material","course"],description:"Тип контента — набор блоков: у новостей нет SCORM"},query:{control:"text",description:"Начальный поиск — то, что набрали после «/»"},maxHeight:{control:{type:"number",min:240,max:800,step:20},description:"Высота списка до прокрутки"}},parameters:{docs:{story:{height:"640px"},description:{component:"Меню «что добавить» редактора новости, материала, курса — открывается по «+» у блока или по «/» в тексте. Сверху поиск (по названию и другим словам: «картинка» найдёт «Фото»), ниже группы — «Текст», «Фото и видео», «Выделение», «Вложения», «Ссылки и люди» — с мелкой подписью, в группе плитки по 3 в ряд: иконка 24 и подпись на серой подложке. У инфоблоков иконка цветом инфоблока. Блок, который ещё не сделан, — бледный, «Скоро», не нажимается.\n\nКлавиатура: фокус сразу в поиске, стрелки — по плиткам, Enter — добавить, Esc — закрыть. Список не выше `maxHeight`, дальше прокрутка внутри.\n\nНабор блоков — `blockCatalog.tsx`: один список, у блока — где он доступен; `blockGroupsFor(kind)` отдаёт группы для типа контента."}}}},r={render:({kind:t,query:i,maxHeight:d})=>{const[l,n]=g.useState("—");return o.jsxs("div",{style:{display:"flex",gap:24,alignItems:"flex-start"},children:[o.jsx(y,{groups:k(t),query:i,maxHeight:d,onSelect:x=>n(x.label),onClose:()=>n("закрыли (Esc)")},t+i),o.jsxs("p",{style:{margin:0,font:"14px var(--font-family-body)",color:"var(--color-text-secondary)"},children:["Выбрано: ",l]})]})}},e={name:"Поиск «фото»",args:{query:"фото"},render:r.render},Z=["Playground","Поиск"];var s,a,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
