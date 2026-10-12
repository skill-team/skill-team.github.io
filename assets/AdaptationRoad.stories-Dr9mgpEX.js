import{r as y,j as t}from"./iframe-CFCi-G_z.js";import{A as c}from"./AdaptationRoad-D0W7ZZYo.js";import{A as g}from"./adaptationData-BrqHn851.js";import"./preload-helper-C1FmrZbK.js";import"./InfoTag-CwntD4rb.js";import"./StepNumber-BVHgdMHr.js";import"./DragScroll-C6x74Hvj.js";import"./Surface-Dz0reFu7.js";import"./SectionHeader-DDrxZ92-.js";import"./index-zH042xrC.js";import"./ContextIsolator-DRazcLis.js";import"./context-x6QakU1z.js";import"./index-UzVeu6a-.js";const R={title:"UI Kit/Профиль/AdaptationRoad",id:"ui-kit-adaptationroad",component:c,tags:["autodocs"],args:{steps:g},argTypes:{steps:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onStepOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:`Карта адаптации «змейкой» — страница карты в личном кабинете (таб «Адаптация»). По центру — сплошная линия (пройденный участок зелёный), на ней квадраты-номера цвета статуса: пройден — зелёный, просрочен — красный, текущий — синий с мягкой пульсацией, впереди — серый. Карточки чередуются слева и справа, правая колонка сдвинута на полкарточки; от номера к карточке — короткая прямая перемычка. Линия — от первого номера до последнего: ниже последнего шага линии нет.

Карточка — как карточки курсов (белая, тень, без цветных обводок): тип шага и статус плашкой (у будущих — «откроется дд.мм»), название (до 2 строк), описание (3 строки), плашки срока и времени. Вся карточка открывает шаг, наведение — подъём.

Уже 680 (телефон, узкая колонка) — одна колонка: линия слева, карточки по порядку.`}}},decorators:[o=>t.jsx("div",{style:{padding:24,background:"var(--color-background)"},children:t.jsx(o,{})})]},r={render:o=>{const[l,m]=y.useState("");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:820,fontFamily:"var(--font-family-body)"},children:[t.jsx("span",{style:{fontSize:14,color:"var(--color-text-secondary)"},children:l||"Нажмите любой шаг"}),t.jsx(c,{...o,onStepOpen:a=>m(`Открыли шаг ${a+1}: ${o.steps[a].title}`)})]})}},e={name:"Узкий — одна колонка",decorators:[o=>t.jsx("div",{style:{maxWidth:375},children:t.jsx(o,{})})]},T=["Playground","Узкий"];var s,n,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const [msg, setMsg] = useState("");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12,
      maxWidth: 820,
      fontFamily: "var(--font-family-body)"
    }}>
        <span style={{
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>{msg || "Нажмите любой шаг"}</span>
        <AdaptationRoad {...args} onStepOpen={i => setMsg(\`Открыли шаг \${i + 1}: \${args.steps[i].title}\`)} />
      </div>;
  }
}`,...(u=(n=r.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};var i,d,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Узкий — одна колонка",
  decorators: [Story => <div style={{
    maxWidth: 375
  }}><Story /></div>]
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};export{r as Playground,T as __namedExportsOrder,R as default,e as Узкий};
