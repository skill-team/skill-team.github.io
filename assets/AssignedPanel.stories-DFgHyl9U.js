import{j as u}from"./iframe-BffffG_H.js";import{A as n}from"./AdaptationPanel-DxvErVlD.js";import{A as t}from"./AssignedPanel-C-1P1EFK.js";import{A as x,b as f,c as B}from"./adaptationData-YKLZMfef.js";import{a as P}from"./coursesData-CJ0YfTPB.js";import"./preload-helper-C1FmrZbK.js";import"./AchievementBadge-CrZJIBZa.js";import"./index-CLeoysUr.js";import"./ContextIsolator-2vX43eVK.js";import"./context-foqqPHjY.js";import"./Scrollbar-cRITYG_V.js";import"./InfoTag-pTru7Vn7.js";import"./ProgressBar-DGOuUvhY.js";import"./StepNumber-B6tRlpA3.js";import"./Surface-C7wg1raU.js";import"./SectionHeader-4HGinjgb.js";import"./AssignedBadge-iHre6veX.js";import"./Archive-DVj9kiPb.js";import"./ProgressRing-CDntUi2Q.js";import"./DragScroll-DYMaMTCP.js";import"./index-CGJuuq_M.js";import"./course-1--YiCqOCo.js";import"./course-4-bsGBpGWB.js";import"./course-3-DSDYLXDH.js";const E=P().map(e=>({...e,reason:e.assignReason})),Q={title:"UI Kit/Профиль/AssignedPanel",id:"ui-kit-assignedpanel",component:t,tags:["autodocs"],args:{items:E,title:"Вам назначено",limit:3},argTypes:{title:{control:"text"},limit:{control:{type:"number",min:1,max:6},description:"Сколько строк показать"},items:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},today:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onMore:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"«Вам назначено» — курсы, назначенные руководителем, в узкой колонке (личный кабинет, «Обзор»): встаёт на место карты адаптации, когда та пройдена. Тем же языком, что боковая карта адаптации: `SectionHeader` с числом и «Все ↗», строки без линий — картинка 64 × 44, название 14 SemiBold до 2 строк, под ним плашки: время и прогресс слева, срок справа («до 20.10» синим, просрочен — красным). Ближайшие по сроку — первыми, показывает `limit` строк. Наведение — подъём с тенью, строка открывает курс. Ничего не назначено — заглушка «Пока ничего не назначено» и «Перейти к курсам».\n\n**Что встаёт на место карты адаптации** (история «После адаптации»): идёт — текущий шаг; пройдена — поздравление (`AdaptationPanel` с пройденными шагами и `completed`: награды, срок, баллы), первые 2 недели; потом — «Вам назначено». На Главной 2 после адаптации вместо карты — профиль с баллами и ачивки, как на Главной."}}},decorators:[e=>u.jsx("div",{style:{padding:24,background:"var(--color-background)"},children:u.jsx(e,{})})]},r={render:e=>u.jsx("div",{style:{width:380},children:u.jsx(t,{...e})})},s={name:"Ничего не назначено",parameters:{docs:{description:{story:"Назначенных курсов нет — заглушка `EmptyState` xs с переходом в каталог (`onBrowse`); в шапке без числа и «Все»."}}},render:()=>u.jsx("div",{style:{width:380},children:u.jsx(t,{items:[],onBrowse:()=>{}})})},T=e=>u.jsx("span",{style:{fontFamily:"var(--font-family-body)",fontSize:12,fontWeight:600,letterSpacing:1,textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:e}),o={name:"После адаптации — три состояния",parameters:{docs:{description:{story:"Как в «Обзоре» личного кабинета: блок одной высоты во всех состояниях (`AdaptationPanel fill` — шаги прокручиваются внутри, к текущему)."}}},render:()=>{const e=(D,y)=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[T(D),u.jsx("div",{style:{height:432,display:"grid"},children:y})]});return u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 340px)",gap:24,alignItems:"start"},children:[e("1. Адаптация идёт",u.jsx(n,{fill:!0,steps:x})),e("2. Пройдена — первые 2 недели",u.jsx(n,{fill:!0,steps:B,completed:f})),e("3. Потом — «Вам назначено»",u.jsx(t,{fill:!0,items:E})),e("Ничего не назначено",u.jsx(t,{fill:!0,items:[],onBrowse:()=>{}}))]})}},V=["Playground","Пусто","ПослеАдаптации"];var a,i,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 380
  }}><AssignedPanel {...args} /></div>
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,p,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Ничего не назначено",
  parameters: {
    docs: {
      description: {
        story: "Назначенных курсов нет — заглушка \\\`EmptyState\\\` xs с переходом в каталог (\\\`onBrowse\\\`); в шапке без числа и «Все»."
      }
    }
  },
  render: () => <div style={{
    width: 380
  }}><AssignedPanel items={[]} onBrowse={() => {}} /></div>
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,A,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "После адаптации — три состояния",
  parameters: {
    docs: {
      description: {
        story: "Как в «Обзоре» личного кабинета: блок одной высоты во всех состояниях (\\\`AdaptationPanel fill\\\` — шаги прокручиваются внутри, к текущему)."
      }
    }
  },
  render: () => {
    const col = (t: string, child: React.ReactNode) => <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        {label(t)}
        <div style={{
        height: 432,
        display: "grid"
      }}>{child}</div>
      </div>;
    return <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 340px)",
      gap: 24,
      alignItems: "start"
    }}>
        {col("1. Адаптация идёт", <AdaptationPanel fill steps={ADAPTATION_STEPS} />)}
        {col("2. Пройдена — первые 2 недели", <AdaptationPanel fill steps={ADAPTATION_STEPS_DONE} completed={ADAPTATION_COMPLETED} />)}
        {col("3. Потом — «Вам назначено»", <AssignedPanel fill items={ASSIGNED} />)}
        {col("Ничего не назначено", <AssignedPanel fill items={[]} onBrowse={() => {}} />)}
      </div>;
  }
}`,...(g=(A=o.parameters)==null?void 0:A.docs)==null?void 0:g.source}}};export{r as Playground,V as __namedExportsOrder,Q as default,o as ПослеАдаптации,s as Пусто};
