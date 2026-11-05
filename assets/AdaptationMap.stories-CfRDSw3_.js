import{r as y,j as u}from"./iframe-SVfPbzFv.js";import{A as L,a as n}from"./adaptationData-Do9l0oLo.js";import{A}from"./AdaptationPanel-mZabXl0B.js";import"./preload-helper-C1FmrZbK.js";import"./InfoTag-yxhjZ-QC.js";import"./DragScroll-nYKYvjr7.js";import"./SegmentedProgress-CGBGKk45.js";import"./Surface-CrlrQ0gF.js";import"./SectionHeader-CXNfpuSl.js";import"./index-iXG8bMil.js";import"./ContextIsolator-DVAd3_hO.js";import"./context-b9bVuTgo.js";import"./index-CGJuuq_M.js";import"./AchievementBadge-I2rRZT01.js";import"./Scrollbar-BPGkC5Ii.js";import"./ProgressBar-CmVsovFx.js";import"./StepNumber-BZs6CQiH.js";const l4={title:"UI Kit/Профиль/AdaptationMap",id:"ui-kit-adaptationmap",component:n,tags:["autodocs"],args:{steps:L,title:"Карта адаптации"},argTypes:{title:{control:"text"},steps:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onStepOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onMore:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Карта адаптации — даётся сотруднику при трудоустройстве: шаги, которые проходят по очереди. Стоит на Главной над инфоблоками. Белый блок: «Карта адаптации · N из M шагов» и «Перейти ↗» (страница карты в личном кабинете), ниже шаги-«таблетки» — белый круг с иконкой и номер (`H3`):\n\n| Статус | Вид |\n|---|---|\n| `done` — пройден | зелёный, двойная галочка |\n| `overdue` — просрочен | красный, «!» |\n| `current` — текущий | синий, часы |\n| `upcoming` — впереди | синий, календарь; ещё не начат, но открыт — пройти можно в любой момент |\n| `locked` — закрыт | серый, замок; откроется позже, не нажимается. В сервисе шаги сейчас не блокируются — статус в ките на будущее |\n\n**`mode="cards"` — карточки этапов** (Главная 4): слева «Карта адаптации» и плашка «N из M шагов», справа лента карточек 178 × 140: «N этап», название в 2 строки, «срок • длительность». Обводка цветом статуса — пройден зелёная, просрочен красная со стрелкой, впереди синяя со стрелкой (открыт), закрыт — серая; **текущий** — голубая заливка, синяя обводка, стрелка и пульсация (голубое кольцо расходится и гаснет), чтобы его было хорошо видно. Карточки не нажимаются — на страницу адаптации ведёт только «Перейти ↗»; под лентой стрелки листания, при открытии лента сама показывает текущий этап. Уже 640 — заголовок над лентой, стрелок нет (листается пальцем). `cardsHeader="top"` (Главная 5) — те же карточки, шапка сверху, как у остальных блоков: заголовок, плашка «N из M шагов» и «Все ↗»; без стрелок и «Перейти».\n\n`AdaptationPanel mode="current"` — компактно для телефона («Главная 2»): шапка и прогресс, только текущий шаг и красная строка «N шаг просрочен ↗».\n\n**AdaptationPanel** — та же карта в правой панели («Главная 2»: у нового сотрудника вместо профиля с баллами), общим языком сервиса: на всю высоту экрана, шаги прокручиваются внутри (при открытии — к текущему); «Пройдено N из M» и полоса прогресса; шаги без линий; номер в скруглённом квадрате цветом статуса (пройден — зелёный, просрочен — красный, текущий и впереди — синий, закрыт — серый); любой шаг можно открыть, наведение — подъём с тенью; под названием плашки `InfoTag` по сторонам: время (голубая) и статус / срок; текущий шаг пульсирует целиком: голубая подложка «дышит», расходится кольцо (номер и плашки в нём белые).\n\nЛюбой шаг открывает урок (`onStepOpen`) — шаги не блокируются, ещё не начатый можно пройти в любой момент, наведение — подъём и тень. Название шага — в подсказке. Шаг 60 × 96 — от кружка до края по 12; между шагами 12, по левому краю; не помещаются — лента листается. «N из M» — шаги до текущего.'}}},decorators:[e=>u.jsx("div",{style:{padding:24,background:"var(--color-background)"},children:u.jsx(e,{})})]},a={render:e=>{const[s,r]=y.useState("");return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,fontFamily:"var(--font-family-body)"},children:[u.jsx(n,{...e,onStepOpen:x=>r(`Открыли шаг ${x+1}: ${e.steps[x].title}`),onMore:()=>r("Перешли к карте в личном кабинете")}),u.jsx("span",{style:{fontSize:14,color:"var(--color-text-secondary)"},children:s||"Нажмите открытый шаг или «Перейти»"})]})}},t={name:"Карточки этапов (Главная 4)",args:{mode:"cards"},render:e=>{const[s,r]=y.useState("");return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,fontFamily:"var(--font-family-body)"},children:[u.jsx(n,{...e,onMore:()=>r("Перешли к карте в личном кабинете")}),u.jsx("span",{style:{fontSize:14,color:"var(--color-text-secondary)"},children:s||"Листайте стрелками; «Перейти» — карта в личном кабинете"})]})}},o={name:"Карточки этапов — шапка сверху (Главная 5)",args:{mode:"cards",cardsHeader:"top",title:"Адаптация"},render:e=>{const[s,r]=y.useState("");return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,fontFamily:"var(--font-family-body)"},children:[u.jsx(n,{...e,onMore:()=>r("Перешли к карте в личном кабинете")}),u.jsx("span",{style:{fontSize:14,color:"var(--color-text-secondary)"},children:s||"Листайте пальцем, тачпадом или мышью; «Все ↗» — карта в личном кабинете"})]})}},d={name:"Карточки этапов — узко",args:{mode:"cards"},decorators:[e=>u.jsx("div",{style:{maxWidth:375},children:u.jsx(e,{})})]},c={name:"Узкий — лента листается",decorators:[e=>u.jsx("div",{style:{maxWidth:375},children:u.jsx(e,{})})]},i={name:"В правой панели (AdaptationPanel)",render:e=>u.jsx("div",{style:{width:296,height:640,display:"flex",flexDirection:"column","--sticky-top":"0px"},children:u.jsx(A,{steps:e.steps,className:""})})},p={name:"Шагами в ширину (AdaptationPanel layout=horizontal, Главная 4)",parameters:{docs:{description:{story:"Та же карта с «Главной 2», но шаги — лентой слева направо (карточки 232, листается пальцем, тачпадом и колесом), при открытии лента сама показывает текущий шаг. Шапка — обычный заголовок и «Все ↗», как у блоков Главной, рядом тег «N из M шагов». Пройденные — светло-зелёные, просроченные — светло-красные, ещё не начатые — светло-серые, без обводки."}}},render:e=>u.jsx(A,{layout:"horizontal",steps:e.steps})},l={name:"Компактно — текущий шаг (телефон, «Главная 2»)",render:e=>u.jsx("div",{style:{width:351},children:u.jsx(A,{mode:"current",steps:e.steps})})},m={name:"Кратко — без шагов (Главная 3)",parameters:{docs:{description:{story:'`mode="summary"` — без шагов: «Пройдено N из M шагов», процент и общая полоса прогресса; весь блок — одна цель для клика (`onMore` — карта в личном кабинете), наведение — подъём с тенью.'}}},render:e=>u.jsx(n,{mode:"summary",steps:e.steps,onMore:()=>{}})},B={name:"В правой панели — шапка на голубой плашке (Главная 2)",parameters:{docs:{description:{story:"`accent` — шапка «Адаптация · Все · Пройдено N из M» на голубой плашке во всю ширину панели: карту адаптации на Главной 2 не замечали."}}},render:e=>u.jsx("div",{style:{width:300,height:640,display:"flex"},children:u.jsx(A,{accent:!0,steps:e.steps})})},m4=["Playground","Карточки","КарточкиШапкаСверху","КарточкиУзко","Узкий","Панель","ПанельВШирину","ПанельКомпактно","Кратко","ПанельКрасная"];var E,g,D;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(g=a.parameters)==null?void 0:g.docs)==null?void 0:D.source}}};var F,f,v;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var M,h,S;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Карточки этапов — шапка сверху (Главная 5)",
  args: {
    mode: "cards",
    cardsHeader: "top",
    title: "Адаптация"
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
      }}>{msg || "Листайте пальцем, тачпадом или мышью; «Все ↗» — карта в личном кабинете"}</span>
      </div>;
  }
}`,...(S=(h=o.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var C,j,N;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Карточки этапов — узко",
  args: {
    mode: "cards"
  },
  decorators: [Story => <div style={{
    maxWidth: 375
  }}><Story /></div>]
}`,...(N=(j=d.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var P,b,z;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Узкий — лента листается",
  decorators: [Story => <div style={{
    maxWidth: 375
  }}><Story /></div>]
}`,...(z=(b=c.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var k,w,O;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(O=(w=i.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var T,H,W;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Шагами в ширину (AdaptationPanel layout=horizontal, Главная 4)",
  parameters: {
    docs: {
      description: {
        story: "Та же карта с «Главной 2», но шаги — лентой слева направо (карточки 232, листается пальцем, тачпадом и колесом), при открытии лента сама показывает текущий шаг. Шапка — обычный заголовок и «Все ↗», как у блоков Главной, рядом тег «N из M шагов». Пройденные — светло-зелёные, просроченные — светло-красные, ещё не начатые — светло-серые, без обводки."
      }
    }
  },
  render: args => <AdaptationPanel layout="horizontal" steps={args.steps} />
}`,...(W=(H=p.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var $,I,_;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "Компактно — текущий шаг (телефон, «Главная 2»)",
  render: args => <div style={{
    width: 351
  }}>
      <AdaptationPanel mode="current" steps={args.steps} />
    </div>
}`,...(_=(I=l.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var K,R,U;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "Кратко — без шагов (Главная 3)",
  parameters: {
    docs: {
      description: {
        story: "\\\`mode=\\"summary\\"\\\` — без шагов: «Пройдено N из M шагов», процент и общая полоса прогресса; весь блок — одна цель для клика (\\\`onMore\\\` — карта в личном кабинете), наведение — подъём с тенью."
      }
    }
  },
  render: args => <AdaptationMap mode="summary" steps={args.steps} onMore={() => {}} />
}`,...(U=(R=m.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var q,G,J;B.parameters={...B.parameters,docs:{...(q=B.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(J=(G=B.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};export{a as Playground,m4 as __namedExportsOrder,l4 as default,t as Карточки,d as КарточкиУзко,o as КарточкиШапкаСверху,m as Кратко,i as Панель,p as ПанельВШирину,l as ПанельКомпактно,B as ПанельКрасная,c as Узкий};
