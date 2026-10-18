import{r as b,j as e}from"./iframe-BjwqOSi3.js";import{A as k,a as i}from"./adaptationData-CHjuN_j7.js";import{A as p}from"./AdaptationPanel-BhnJLTl2.js";import"./preload-helper-C1FmrZbK.js";import"./DragScroll-5PRTRLQq.js";import"./SegmentedProgress-BHKH3-Ez.js";import"./Surface-vBQ7GXA7.js";import"./SectionHeader-Ck7bOY8B.js";import"./index-ZErZfhiV.js";import"./ContextIsolator-t4IZH0Aw.js";import"./context-CGGttlbE.js";import"./index-CGJuuq_M.js";import"./AchievementBadge-CFJ333u7.js";import"./Scrollbar-CxOVkhpC.js";import"./InfoTag-B_BO-mg6.js";import"./ProgressBar-CtnpO0c8.js";import"./StepNumber-vBNmPs5V.js";const V={title:"UI Kit/Профиль/AdaptationMap",id:"ui-kit-adaptationmap",component:i,tags:["autodocs"],args:{steps:k,title:"Карта адаптации"},argTypes:{title:{control:"text"},steps:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onStepOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onMore:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Карта адаптации — даётся сотруднику при трудоустройстве: шаги, которые проходят по очереди. Стоит на Главной над инфоблоками. Белый блок: «Карта адаптации · N из M шагов» и «Перейти ↗» (страница карты в личном кабинете), ниже шаги-«таблетки» — белый круг с иконкой и номер (`H3`):\n\n| Статус | Вид |\n|---|---|\n| `done` — пройден | зелёный, двойная галочка |\n| `overdue` — просрочен | красный, «!» |\n| `current` — текущий | синий, часы |\n| `locked` — впереди | серый, замок; не нажимается, в подсказке «откроется после шага NN» |\n\n`AdaptationPanel mode="current"` — компактно для телефона («Главная 2»): шапка и прогресс, только текущий шаг и красная строка «N шаг просрочен ↗».\n\n**AdaptationPanel** — та же карта в правой панели («Главная 2»: у нового сотрудника вместо профиля с баллами), общим языком сервиса: на всю высоту экрана, шаги прокручиваются внутри (при открытии — к текущему); «Пройдено N из M» и полоса прогресса; шаги без линий; номер в скруглённом квадрате цветом статуса (пройден — зелёный, просрочен — красный, текущий — синий, впереди — серый полу-неактивный); любой шаг можно открыть, наведение — подъём с тенью; под названием плашки `InfoTag` по сторонам: время (голубая) и статус / срок; текущий шаг пульсирует целиком: голубая подложка «дышит», расходится кольцо (номер и плашки в нём белые).\n\nОткрытый шаг открывает урок (`onStepOpen`), наведение — подъём и тень. Название шага — в подсказке. Шаг 60 × 96 — от кружка до края по 12; между шагами 12, по левому краю; не помещаются — лента листается. «N из M» — шаги до текущего.'}}},decorators:[u=>e.jsx("div",{style:{padding:24,background:"var(--color-background)"},children:e.jsx(u,{})})]},t={render:u=>{const[C,d]=b.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,fontFamily:"var(--font-family-body)"},children:[e.jsx(i,{...u,onStepOpen:c=>d(`Открыли шаг ${c+1}: ${u.steps[c].title}`),onMore:()=>d("Перешли к карте в личном кабинете")}),e.jsx("span",{style:{fontSize:14,color:"var(--color-text-secondary)"},children:C||"Нажмите открытый шаг или «Перейти»"})]})}},r={name:"Узкий — лента листается",decorators:[u=>e.jsx("div",{style:{maxWidth:375},children:e.jsx(u,{})})]},s={name:"В правой панели (AdaptationPanel)",render:u=>e.jsx("div",{style:{width:296,height:640,display:"flex",flexDirection:"column","--sticky-top":"0px"},children:e.jsx(p,{steps:u.steps,className:""})})},a={name:"Компактно — текущий шаг (телефон, «Главная 2»)",render:u=>e.jsx("div",{style:{width:351},children:e.jsx(p,{mode:"current",steps:u.steps})})},n={name:"Кратко — без шагов (Главная 3)",parameters:{docs:{description:{story:'`mode="summary"` — без шагов: «Пройдено N из M шагов», процент и общая полоса прогресса; весь блок — одна цель для клика (`onMore` — карта в личном кабинете), наведение — подъём с тенью.'}}},render:u=>e.jsx(i,{mode:"summary",steps:u.steps,onMore:()=>{}})},o={name:"В правой панели — шапка на голубой плашке (Главная 2)",parameters:{docs:{description:{story:"`accent` — шапка «Адаптация · Все · Пройдено N из M» на голубой плашке во всю ширину панели: карту адаптации на Главной 2 не замечали."}}},render:u=>e.jsx("div",{style:{width:300,height:640,display:"flex"},children:e.jsx(p,{accent:!0,steps:u.steps})})},X=["Playground","Узкий","Панель","ПанельКомпактно","Кратко","ПанельКрасная"];var m,l,x;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(l=t.parameters)==null?void 0:l.docs)==null?void 0:x.source}}};var y,g,A;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Узкий — лента листается",
  decorators: [Story => <div style={{
    maxWidth: 375
  }}><Story /></div>]
}`,...(A=(g=r.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var B,E,D;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(D=(E=s.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var F,f,h;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Компактно — текущий шаг (телефон, «Главная 2»)",
  render: args => <div style={{
    width: 351
  }}>
      <AdaptationPanel mode="current" steps={args.steps} />
    </div>
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var v,M,S;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Кратко — без шагов (Главная 3)",
  parameters: {
    docs: {
      description: {
        story: "\\\`mode=\\"summary\\"\\\` — без шагов: «Пройдено N из M шагов», процент и общая полоса прогресса; весь блок — одна цель для клика (\\\`onMore\\\` — карта в личном кабинете), наведение — подъём с тенью."
      }
    }
  },
  render: args => <AdaptationMap mode="summary" steps={args.steps} onMore={() => {}} />
}`,...(S=(M=n.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var j,N,P;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "В правой панели — шапка на голубой плашке (Главная 2)",
  parameters: {
    docs: {
      description: {
        story: "\\\`accent\\\` — шапка «Адаптация · Все · Пройдено N из M» на голубой плашке во всю ширину панели: карту адаптации на Главной 2 не замечали."
      }
    }
  },
  render: args => <div style={{
    width: 300,
    height: 640,
    display: "flex"
  }}>
      <AdaptationPanel accent steps={args.steps} />
    </div>
}`,...(P=(N=o.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};export{t as Playground,X as __namedExportsOrder,V as default,n as Кратко,s as Панель,a as ПанельКомпактно,o as ПанельКрасная,r as Узкий};
