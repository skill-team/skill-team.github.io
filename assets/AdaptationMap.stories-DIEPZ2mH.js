import{r as j,j as e}from"./iframe-BffffG_H.js";import{A as D,a as B}from"./adaptationData-YKLZMfef.js";import{A as h}from"./AdaptationPanel-DxvErVlD.js";import"./preload-helper-C1FmrZbK.js";import"./DragScroll-DYMaMTCP.js";import"./Surface-C7wg1raU.js";import"./SectionHeader-4HGinjgb.js";import"./index-CLeoysUr.js";import"./ContextIsolator-2vX43eVK.js";import"./context-foqqPHjY.js";import"./index-CGJuuq_M.js";import"./AchievementBadge-CrZJIBZa.js";import"./Scrollbar-cRITYG_V.js";import"./InfoTag-pTru7Vn7.js";import"./ProgressBar-DGOuUvhY.js";import"./StepNumber-B6tRlpA3.js";const H={title:"UI Kit/Профиль/AdaptationMap",id:"ui-kit-adaptationmap",component:B,tags:["autodocs"],args:{steps:D,title:"Карта адаптации"},argTypes:{title:{control:"text"},steps:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onStepOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onMore:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Карта адаптации — даётся сотруднику при трудоустройстве: шаги, которые проходят по очереди. Стоит на Главной над инфоблоками. Белый блок: «Карта адаптации · N из M шагов» и «Перейти ↗» (страница карты в личном кабинете), ниже шаги-«таблетки» — белый круг с иконкой и номер (`H3`):\n\n| Статус | Вид |\n|---|---|\n| `done` — пройден | зелёный, двойная галочка |\n| `overdue` — просрочен | красный, «!» |\n| `current` — текущий | синий, часы |\n| `locked` — впереди | серый, замок; не нажимается, в подсказке «откроется после шага NN» |\n\n`AdaptationPanel mode="current"` — компактно для телефона («Главная 2»): шапка и прогресс, только текущий шаг и красная строка «N шаг просрочен ↗».\n\n**AdaptationPanel** — та же карта в правой панели («Главная 2»: у нового сотрудника вместо профиля с баллами), общим языком сервиса: на всю высоту экрана, шаги прокручиваются внутри (при открытии — к текущему); «Пройдено N из M» и полоса прогресса; шаги без линий; номер в скруглённом квадрате цветом статуса (пройден — зелёный, просрочен — красный, текущий — синий, впереди — серый полу-неактивный); любой шаг можно открыть, наведение — подъём с тенью; под названием плашки `InfoTag` по сторонам: время (голубая) и статус / срок; текущий шаг пульсирует целиком: голубая подложка «дышит», расходится кольцо (номер и плашки в нём белые).\n\nОткрытый шаг открывает урок (`onStepOpen`), наведение — подъём и тень. Название шага — в подсказке. Шаг 60 × 96 — от кружка до края по 12; между шагами 12, по левому краю; не помещаются — лента листается. «N из M» — шаги до текущего.'}}},decorators:[t=>e.jsx("div",{style:{padding:24,background:"var(--color-background)"},children:e.jsx(t,{})})]},u={render:t=>{const[S,o]=j.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,fontFamily:"var(--font-family-body)"},children:[e.jsx(B,{...t,onStepOpen:n=>o(`Открыли шаг ${n+1}: ${t.steps[n].title}`),onMore:()=>o("Перешли к карте в личном кабинете")}),e.jsx("span",{style:{fontSize:14,color:"var(--color-text-secondary)"},children:S||"Нажмите открытый шаг или «Перейти»"})]})}},r={name:"Узкий — лента листается",decorators:[t=>e.jsx("div",{style:{maxWidth:375},children:e.jsx(t,{})})]},s={name:"В правой панели (AdaptationPanel)",render:t=>e.jsx("div",{style:{width:296,height:640,display:"flex",flexDirection:"column","--sticky-top":"0px"},children:e.jsx(h,{steps:t.steps,className:""})})},a={name:"Компактно — текущий шаг (телефон, «Главная 2»)",render:t=>e.jsx("div",{style:{width:351},children:e.jsx(h,{mode:"current",steps:t.steps})})},K=["Playground","Узкий","Панель","ПанельКомпактно"];var i,p,d;u.parameters={...u.parameters,docs:{...(i=u.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(p=u.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,l,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Узкий — лента листается",
  decorators: [Story => <div style={{
    maxWidth: 375
  }}><Story /></div>]
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var g,x,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "В правой панели (AdaptationPanel)",
  render: args => <div style={{
    width: 296,
    height: 640,
    display: "flex",
    flexDirection: "column",
    ["--sticky-top" as string]: "0px"
  }}>
      <AdaptationPanel steps={args.steps} className="" />
    </div>
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var A,f,v;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Компактно — текущий шаг (телефон, «Главная 2»)",
  render: args => <div style={{
    width: 351
  }}>
      <AdaptationPanel mode="current" steps={args.steps} />
    </div>
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};export{u as Playground,K as __namedExportsOrder,H as default,s as Панель,a as ПанельКомпактно,r as Узкий};
