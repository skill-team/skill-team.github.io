import{r as v,j as t}from"./iframe-DF43zbcH.js";import{A as E}from"./AdaptationRoad-BQkFbDMG.js";import{A as S}from"./adaptationData-BgXbpwWY.js";import"./preload-helper-C1FmrZbK.js";import"./InfoTag-DnH5-QU6.js";import"./StepNumber-DyiP9-q2.js";import"./DragScroll-BQtsHe0j.js";import"./SegmentedProgress-CI1oac0e.js";import"./Surface-BM1NSgrj.js";import"./SectionHeader-DALco2uY.js";import"./index-Dc-2W6eP.js";import"./ContextIsolator-CGgXIIAn.js";import"./context-Bvlc22x8.js";import"./index-CGJuuq_M.js";const _={title:"UI Kit/Профиль/AdaptationRoad",id:"ui-kit-adaptationroad",component:E,tags:["autodocs"],args:{steps:S},argTypes:{steps:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onStepOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:`Карта адаптации «змейкой» — страница карты в личном кабинете (таб «Адаптация»). По центру — сплошная линия, на ней квадраты-номера в белой обводке. У шага один цвет на номер, перемычку к карточке, обводку карточки и отрезок линии до следующего шага:

| Статус | Вид |
|---|---|
| \`done\` — пройден | зелёный, плашка «Пройден» |
| \`overdue\` — просрочен | красный, плашка «Просрочен» |
| \`current\` — текущий | голубой, номер пульсирует, плашка «Изучаю» фиолетовая (шаг в процессе) |
| \`upcoming\` — впереди | голубой: шаг открыт, перейти можно в любой момент |
| \`locked\` — закрыт | приглушённая карточка без тени и обводки, замок и «откроется дд.мм», не нажимается. В сервисе шаги сейчас не блокируются — статус в ките на будущее (пример — «С закрытыми шагами») |

Карточки чередуются слева и справа, правая колонка сдвинута на полкарточки; от номера к карточке — короткая прямая перемычка. Линия — от первого номера до последнего: ниже последнего шага линии нет.

Карточка — как карточки курсов (белая, тень): тип шага и статус плашкой, название (до 2 строк), описание (3 строки), плашки срока и времени. Вся карточка открывает шаг, наведение — подъём. Шаг из нескольких модулей (\`modules\`) — внизу плашка со слоями «2 из 4» (пройдено модулей); страница открывает по нему окно с модулями (\`AdaptationStepModal\`), а не урок.

**Длинное описание** (не поместилось в 3 строки — последняя строка гаснет; пример — шаг 1): мышью — при наведении или фокусе, через 0,15 с, карточка плавно вытягивается вниз **поверх** соседних, место в раскладке не меняется, соседи не двигаются; ушли — схлопывается. Пальцем (телефон, планшет) — под описанием «Ещё» / «Свернуть», карточка раскрывается на месте и **сдвигает** нижние. Способ выбирается по устройству ввода, а не по ширине.

Уже 680 (телефон, узкая колонка) — одна колонка: линия слева, карточки по порядку.`}}},decorators:[e=>t.jsx("div",{style:{padding:24,background:"var(--color-background)"},children:t.jsx(e,{})})]},r={render:e=>{const[s,a]=v.useState("");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:820,fontFamily:"var(--font-family-body)"},children:[t.jsx("span",{style:{fontSize:14,color:"var(--color-text-secondary)"},children:s||"Нажмите любой шаг"}),t.jsx(E,{...e,onStepOpen:n=>a(`Открыли шаг ${n+1}: ${e.steps[n].title}`)})]})}},o={name:"Узкий — одна колонка",decorators:[e=>t.jsx("div",{style:{maxWidth:375},children:t.jsx(e,{})})]},u={name:"С закрытыми шагами",args:{steps:S.map((e,s,a)=>s>=a.length-2?{...e,status:"locked"}:e)},render:r.render},$=["Playground","Узкий","СЗакрытыми"];var d,i,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,l,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Узкий — одна колонка",
  decorators: [Story => <div style={{
    maxWidth: 375
  }}><Story /></div>]
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var g,y,x,f,A;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "С закрытыми шагами",
  args: {
    steps: ADAPTATION_STEPS.map((s, i, all) => i >= all.length - 2 ? {
      ...s,
      status: "locked" as const
    } : s)
  },
  render: Playground.render
}`,...(x=(y=u.parameters)==null?void 0:y.docs)==null?void 0:x.source},description:{story:"Пример закрытых шагов: два последних откроются позже.",...(A=(f=u.parameters)==null?void 0:f.docs)==null?void 0:A.description}}};export{r as Playground,$ as __namedExportsOrder,_ as default,u as СЗакрытыми,o as Узкий};
