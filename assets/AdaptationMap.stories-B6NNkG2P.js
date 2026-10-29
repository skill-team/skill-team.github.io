import{r as R,j as e}from"./iframe-D1Ouy3kT.js";import{A as U,a as m}from"./adaptationData-DGs2tjeM.js";import{A as l}from"./AdaptationPanel-BNCss4oO.js";import"./preload-helper-C1FmrZbK.js";import"./InfoTag-CBwk4bqw.js";import"./DragScroll-C-QWlkuP.js";import"./SegmentedProgress-BWBOCI5A.js";import"./Surface-DPu_yVzG.js";import"./SectionHeader-DSh9i6xP.js";import"./index-CAYOqa0x.js";import"./ContextIsolator-D4uc6dxX.js";import"./context-ChWBGifp.js";import"./index-CGJuuq_M.js";import"./AchievementBadge-BIjJDbO3.js";import"./Scrollbar-CI5AhxyY.js";import"./ProgressBar-Bl3nc5Xs.js";import"./StepNumber-CUVwzPEU.js";const d4={title:"UI Kit/Профиль/AdaptationMap",id:"ui-kit-adaptationmap",component:m,tags:["autodocs"],args:{steps:U,title:"Карта адаптации"},argTypes:{title:{control:"text"},steps:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onStepOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onMore:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Карта адаптации — даётся сотруднику при трудоустройстве: шаги, которые проходят по очереди. Стоит на Главной над инфоблоками. Белый блок: «Карта адаптации · N из M шагов» и «Перейти ↗» (страница карты в личном кабинете), ниже шаги-«таблетки» — белый круг с иконкой и номер (`H3`):\n\n| Статус | Вид |\n|---|---|\n| `done` — пройден | зелёный, двойная галочка |\n| `overdue` — просрочен | красный, «!» |\n| `current` — текущий | синий, часы |\n| `upcoming` — впереди | синий, календарь; ещё не начат, но открыт — пройти можно в любой момент |\n| `locked` — закрыт | серый, замок; откроется позже, не нажимается. В сервисе шаги сейчас не блокируются — статус в ките на будущее |\n\n**`mode="cards"` — карточки этапов** (Главная 4): слева «Карта адаптации» и плашка «N из M шагов», справа лента карточек 178 × 140: «N этап», название в 2 строки, «срок • длительность». Обводка цветом статуса — пройден зелёная, просрочен красная со стрелкой, впереди синяя со стрелкой (открыт), закрыт — серая; **текущий** — голубая заливка, синяя обводка, стрелка и пульсация (голубое кольцо расходится и гаснет), чтобы его было хорошо видно. Карточки не нажимаются — на страницу адаптации ведёт только «Перейти ↗»; под лентой стрелки листания, при открытии лента сама показывает текущий этап. Уже 640 — заголовок над лентой, стрелок нет (листается пальцем).\n\n`AdaptationPanel mode="current"` — компактно для телефона («Главная 2»): шапка и прогресс, только текущий шаг и красная строка «N шаг просрочен ↗».\n\n**AdaptationPanel** — та же карта в правой панели («Главная 2»: у нового сотрудника вместо профиля с баллами), общим языком сервиса: на всю высоту экрана, шаги прокручиваются внутри (при открытии — к текущему); «Пройдено N из M» и полоса прогресса; шаги без линий; номер в скруглённом квадрате цветом статуса (пройден — зелёный, просрочен — красный, текущий и впереди — синий, закрыт — серый); любой шаг можно открыть, наведение — подъём с тенью; под названием плашки `InfoTag` по сторонам: время (голубая) и статус / срок; текущий шаг пульсирует целиком: голубая подложка «дышит», расходится кольцо (номер и плашки в нём белые).\n\nЛюбой шаг открывает урок (`onStepOpen`) — шаги не блокируются, ещё не начатый можно пройти в любой момент, наведение — подъём и тень. Название шага — в подсказке. Шаг 60 × 96 — от кружка до края по 12; между шагами 12, по левому краю; не помещаются — лента листается. «N из M» — шаги до текущего.'}}},decorators:[u=>e.jsx("div",{style:{padding:24,background:"var(--color-background)"},children:e.jsx(u,{})})]},s={render:u=>{const[B,r]=R.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,fontFamily:"var(--font-family-body)"},children:[e.jsx(m,{...u,onStepOpen:A=>r(`Открыли шаг ${A+1}: ${u.steps[A].title}`),onMore:()=>r("Перешли к карте в личном кабинете")}),e.jsx("span",{style:{fontSize:14,color:"var(--color-text-secondary)"},children:B||"Нажмите открытый шаг или «Перейти»"})]})}},t={name:"Карточки этапов (Главная 4)",args:{mode:"cards"},render:u=>{const[B,r]=R.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,fontFamily:"var(--font-family-body)"},children:[e.jsx(m,{...u,onMore:()=>r("Перешли к карте в личном кабинете")}),e.jsx("span",{style:{fontSize:14,color:"var(--color-text-secondary)"},children:B||"Листайте стрелками; «Перейти» — карта в личном кабинете"})]})}},a={name:"Карточки этапов — узко",args:{mode:"cards"},decorators:[u=>e.jsx("div",{style:{maxWidth:375},children:e.jsx(u,{})})]},n={name:"Узкий — лента листается",decorators:[u=>e.jsx("div",{style:{maxWidth:375},children:e.jsx(u,{})})]},o={name:"В правой панели (AdaptationPanel)",render:u=>e.jsx("div",{style:{width:296,height:640,display:"flex",flexDirection:"column","--sticky-top":"0px"},children:e.jsx(l,{steps:u.steps,className:""})})},d={name:"Шагами в ширину (AdaptationPanel layout=horizontal, Главная 4)",parameters:{docs:{description:{story:"Та же карта с «Главной 2», но шаги — лентой слева направо (карточки 232, листается пальцем, тачпадом и колесом), при открытии лента сама показывает текущий шаг. Шапка — обычный заголовок и «Все ↗», как у блоков Главной, рядом тег «N из M шагов». Пройденные — светло-зелёные, просроченные — светло-красные, ещё не начатые — светло-серые, без обводки."}}},render:u=>e.jsx(l,{layout:"horizontal",steps:u.steps})},i={name:"Компактно — текущий шаг (телефон, «Главная 2»)",render:u=>e.jsx("div",{style:{width:351},children:e.jsx(l,{mode:"current",steps:u.steps})})},c={name:"Кратко — без шагов (Главная 3)",parameters:{docs:{description:{story:'`mode="summary"` — без шагов: «Пройдено N из M шагов», процент и общая полоса прогресса; весь блок — одна цель для клика (`onMore` — карта в личном кабинете), наведение — подъём с тенью.'}}},render:u=>e.jsx(m,{mode:"summary",steps:u.steps,onMore:()=>{}})},p={name:"В правой панели — шапка на голубой плашке (Главная 2)",parameters:{docs:{description:{story:"`accent` — шапка «Адаптация · Все · Пройдено N из M» на голубой плашке во всю ширину панели: карту адаптации на Главной 2 не замечали."}}},render:u=>e.jsx("div",{style:{width:300,height:640,display:"flex"},children:e.jsx(l,{accent:!0,steps:u.steps})})},i4=["Playground","Карточки","КарточкиУзко","Узкий","Панель","ПанельВШирину","ПанельКомпактно","Кратко","ПанельКрасная"];var E,y,x;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var g,D,F;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Карточки этапов (Главная 4)",
  args: {
    mode: "cards"
  },
  render: args => {
    const [msg, setMsg] = useState("");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12,
      fontFamily: "var(--font-family-body)"
    }}>
        <AdaptationMap {...args} onMore={() => setMsg("Перешли к карте в личном кабинете")} />
        <span style={{
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>{msg || "Листайте стрелками; «Перейти» — карта в личном кабинете"}</span>
      </div>;
  }
}`,...(F=(D=t.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var f,h,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Карточки этапов — узко",
  args: {
    mode: "cards"
  },
  decorators: [Story => <div style={{
    maxWidth: 375
  }}><Story /></div>]
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var M,S,j;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Узкий — лента листается",
  decorators: [Story => <div style={{
    maxWidth: 375
  }}><Story /></div>]
}`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var C,N,P;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(P=(N=o.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var b,z,k;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Шагами в ширину (AdaptationPanel layout=horizontal, Главная 4)",
  parameters: {
    docs: {
      description: {
        story: "Та же карта с «Главной 2», но шаги — лентой слева направо (карточки 232, листается пальцем, тачпадом и колесом), при открытии лента сама показывает текущий шаг. Шапка — обычный заголовок и «Все ↗», как у блоков Главной, рядом тег «N из M шагов». Пройденные — светло-зелёные, просроченные — светло-красные, ещё не начатые — светло-серые, без обводки."
      }
    }
  },
  render: args => <AdaptationPanel layout="horizontal" steps={args.steps} />
}`,...(k=(z=d.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var w,O,T;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Компактно — текущий шаг (телефон, «Главная 2»)",
  render: args => <div style={{
    width: 351
  }}>
      <AdaptationPanel mode="current" steps={args.steps} />
    </div>
}`,...(T=(O=i.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var W,$,I;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: "Кратко — без шагов (Главная 3)",
  parameters: {
    docs: {
      description: {
        story: "\\\`mode=\\"summary\\"\\\` — без шагов: «Пройдено N из M шагов», процент и общая полоса прогресса; весь блок — одна цель для клика (\\\`onMore\\\` — карта в личном кабинете), наведение — подъём с тенью."
      }
    }
  },
  render: args => <AdaptationMap mode="summary" steps={args.steps} onMore={() => {}} />
}`,...(I=($=c.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var _,H,K;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(K=(H=p.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};export{s as Playground,i4 as __namedExportsOrder,d4 as default,t as Карточки,a as КарточкиУзко,c as Кратко,o as Панель,d as ПанельВШирину,i as ПанельКомпактно,p as ПанельКрасная,n as Узкий};
