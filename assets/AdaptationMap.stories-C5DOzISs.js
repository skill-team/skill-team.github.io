import{r as y,j as t}from"./iframe-XQ_qeO9Z.js";import{A as g,a as d}from"./AdaptationMap-DM_Pivve.js";import"./preload-helper-C1FmrZbK.js";import"./DragScroll-DwoZxkVo.js";import"./Surface-T0I_cLNB.js";import"./SectionHeader-Di5LJoLh.js";import"./index--oqSavUY.js";import"./ContextIsolator-DJke2nN-.js";import"./context-BSOHyiuZ.js";const D={title:"UI Kit/Профиль/AdaptationMap",id:"ui-kit-adaptationmap",component:d,tags:["autodocs"],args:{steps:g,title:"Карта адаптации"},argTypes:{title:{control:"text"},steps:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onStepOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onMore:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Карта адаптации — даётся сотруднику при трудоустройстве: шаги, которые проходят по очереди. Стоит на Главной над инфоблоками. Белый блок: «Карта адаптации · N из M шагов» и «Перейти ↗» (страница карты в личном кабинете), ниже шаги-«таблетки» — белый круг с иконкой и номер (`H3`):\n\n| Статус | Вид |\n|---|---|\n| `done` — пройден | зелёный, двойная галочка |\n| `overdue` — просрочен | красный, «!» |\n| `current` — текущий | синий, часы |\n| `locked` — впереди | серый, замок; не нажимается, в подсказке «откроется после шага NN» |\n\nОткрытый шаг открывает урок (`onStepOpen`), наведение — подъём и тень. Название шага — в подсказке. В широком блоке шаги тянутся поровну (46–64), в узком — лента листается. «N из M» — шаги до текущего."}}},decorators:[e=>t.jsx("div",{style:{padding:24,background:"var(--color-background)"},children:t.jsx(e,{})})]},o={render:e=>{const[m,r]=y.useState("");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,fontFamily:"var(--font-family-body)"},children:[t.jsx(d,{...e,onStepOpen:a=>r(`Открыли шаг ${a+1}: ${e.steps[a].title}`),onMore:()=>r("Перешли к карте в личном кабинете")}),t.jsx("span",{style:{fontSize:14,color:"var(--color-text-secondary)"},children:m||"Нажмите открытый шаг или «Перейти»"})]})}},u={name:"Узкий — лента листается",decorators:[e=>t.jsx("div",{style:{maxWidth:375},children:t.jsx(e,{})})]},E=["Playground","Узкий"];var s,n,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const [msg, setMsg] = useState("");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12,
      fontFamily: "var(--font-family-body)"
    }}>
        <AdaptationMap {...args} onStepOpen={i => setMsg(\`Открыли шаг \${i + 1}: \${args.steps[i].title}\`)} onMore={() => setMsg("Перешли к карте в личном кабинете")} />
        <span style={{
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>{msg || "Нажмите открытый шаг или «Перейти»"}</span>
      </div>;
  }
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var c,p,l;u.parameters={...u.parameters,docs:{...(c=u.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Узкий — лента листается",
  decorators: [Story => <div style={{
    maxWidth: 375
  }}><Story /></div>]
}`,...(l=(p=u.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};export{o as Playground,E as __namedExportsOrder,D as default,u as Узкий};
