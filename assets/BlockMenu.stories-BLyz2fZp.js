import{r as g,j as o}from"./iframe-wfJ_y6tk.js";import{B as y,b as k}from"./blockCatalog-Cqg4BidB.js";import"./preload-helper-C1FmrZbK.js";import"./InputSearch-yPbSvPJ9.js";import"./DropdownMenuItem-M8EkXKQ7.js";import"./Radio-D556sma4.js";import"./index-sYrw6d-4.js";import"./context-BtIUxdFu.js";import"./pickAttrs-DzhteYie.js";import"./useCSSVarCls-Dp79i034.js";import"./useForm-BzeJ6ZcR.js";import"./index-CA55xMRb.js";import"./Select.module-L1SttIPx.js";import"./Spinner-0rG8RZBH.js";import"./InputChrome-DH630Ad-.js";import"./useTruncated-BK8cY36k.js";import"./index-DK8SjL2j.js";import"./ContextIsolator-8G1DI5TY.js";import"./index-0GLlaU4q.js";import"./index-BpequZ9y.js";import"./CloseCircleFilled-B-2k4t7L.js";import"./EyeOutlined-doHsXqE_.js";import"./PurePanel-B9LUDZ6O.js";import"./index-BJS0tE0x.js";import"./useShowArrow-eXjq3W-v.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-Cofq_D13.js";import"./useLocale-B0NX3RbO.js";import"./move-CHiurvd8.js";import"./useIcons-CzSgdsuc.js";import"./CheckOutlined-Cvq9bh_0.js";import"./CloseOutlined-BMu17Hic.js";import"./Scrollbar-98UR6P-F.js";const Y={title:"UI Kit/Редактор/BlockMenu",id:"ui-kit-blockmenu",tags:["autodocs"],args:{kind:"news",query:"",maxHeight:460},argTypes:{kind:{control:"inline-radio",options:["news","material","course"],description:"Тип контента — набор блоков: у новостей нет SCORM"},query:{control:"text",description:"Начальный поиск — то, что набрали после «/»"},maxHeight:{control:{type:"number",min:240,max:800,step:20},description:"Высота списка до прокрутки"}},parameters:{docs:{story:{height:"640px"},description:{component:"Меню «что добавить» редактора новости, материала, курса — открывается по «+» у блока или по «/» в тексте. Сверху поиск (по названию и другим словам: «картинка» найдёт «Фото»), ниже группы — «Текст», «Фото и видео», «Выделение», «Вложения», «Ссылки и люди» — с мелкой подписью, в группе плитки по 3 в ряд: иконка 24 и подпись на серой подложке. У инфоблоков иконка цветом инфоблока. Блок, который ещё не сделан, — бледный, «Скоро», не нажимается.\n\nКлавиатура: фокус сразу в поиске, стрелки — по плиткам, Enter — добавить, Esc — закрыть. Список не выше `maxHeight`, дальше прокрутка внутри.\n\nНабор блоков — `blockCatalog.tsx`: один список, у блока — где он доступен; `blockGroupsFor(kind)` отдаёт группы для типа контента."}}}},r={render:({kind:t,query:i,maxHeight:d})=>{const[l,n]=g.useState("—");return o.jsxs("div",{style:{display:"flex",gap:24,alignItems:"flex-start"},children:[o.jsx(y,{groups:k(t),query:i,maxHeight:d,onSelect:x=>n(x.label),onClose:()=>n("закрыли (Esc)")},t+i),o.jsxs("p",{style:{margin:0,font:"14px var(--font-family-body)",color:"var(--color-text-secondary)"},children:["Выбрано: ",l]})]})}},e={name:"Поиск «фото»",args:{query:"фото"},render:r.render},Z=["Playground","Поиск"];var s,a,p;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
