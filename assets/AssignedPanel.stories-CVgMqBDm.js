import{j as u}from"./iframe-CFCi-G_z.js";import{A as n}from"./AdaptationPanel-DKbaeAM0.js";import{A as t}from"./AssignedPanel-Cos1fVgT.js";import{A as f,b as B,c as P}from"./adaptationData-BrqHn851.js";import{R as T}from"./coursesData-Bp7P2XRa.js";import"./preload-helper-C1FmrZbK.js";import"./AchievementBadge-BLlIFGqd.js";import"./index-zH042xrC.js";import"./ContextIsolator-DRazcLis.js";import"./context-x6QakU1z.js";import"./Scrollbar-CVrxOr3D.js";import"./InfoTag-CwntD4rb.js";import"./ProgressBar-mrveDIsZ.js";import"./StepNumber-BVHgdMHr.js";import"./Surface-Dz0reFu7.js";import"./SectionHeader-DDrxZ92-.js";import"./ProgressRing-D43w80M8.js";import"./DragScroll-C6x74Hvj.js";import"./index-UzVeu6a-.js";import"./course-3-gX4Ok3xk.js";import"./course-4-bsGBpGWB.js";const g=T.filter(e=>e.assigned&&e.progress<100),D=new Date("2026-10-12"),W={title:"UI Kit/Профиль/AssignedPanel",id:"ui-kit-assignedpanel",component:t,tags:["autodocs"],args:{items:g,title:"Вам назначено",limit:3,today:D},argTypes:{title:{control:"text"},limit:{control:{type:"number",min:1,max:6},description:"Сколько строк показать"},items:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},today:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onMore:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"«Вам назначено» — курсы, назначенные руководителем, в узкой колонке (личный кабинет, «Обзор»): встаёт на место карты адаптации, когда та пройдена. Тем же языком, что боковая карта адаптации: `SectionHeader` с числом и «Все ↗», строки без линий — картинка 64 × 44, название 14 SemiBold до 2 строк, под ним плашки: время и прогресс слева, срок справа («до 20.10» синим, просрочен — красным). Ближайшие по сроку — первыми, показывает `limit` строк. Наведение — подъём с тенью, строка открывает курс. Ничего не назначено — заглушка «Пока ничего не назначено» и «Перейти к курсам».\n\n**Что встаёт на место карты адаптации** (история «После адаптации»): идёт — текущий шаг; пройдена — поздравление (`AdaptationPanel` с пройденными шагами и `completed`: награды, срок, баллы), первые 2 недели; потом — «Вам назначено». На Главной 2 после адаптации вместо карты — профиль с баллами и ачивки, как на Главной."}}},decorators:[e=>u.jsx("div",{style:{padding:24,background:"var(--color-background)"},children:u.jsx(e,{})})]},r={render:e=>u.jsx("div",{style:{width:380},children:u.jsx(t,{...e})})},s={name:"Ничего не назначено",parameters:{docs:{description:{story:"Назначенных курсов нет — заглушка `EmptyState` xs с переходом в каталог (`onBrowse`); в шапке без числа и «Все»."}}},render:()=>u.jsx("div",{style:{width:380},children:u.jsx(t,{items:[],onBrowse:()=>{}})})},S=e=>u.jsx("span",{style:{fontFamily:"var(--font-family-body)",fontSize:12,fontWeight:600,letterSpacing:1,textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:e}),o={name:"После адаптации — три состояния",parameters:{docs:{description:{story:"Как в «Обзоре» личного кабинета: блок одной высоты во всех состояниях (`AdaptationPanel fill` — шаги прокручиваются внутри, к текущему)."}}},render:()=>{const e=(y,x)=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[S(y),u.jsx("div",{style:{height:432,display:"grid"},children:x})]});return u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 340px)",gap:24,alignItems:"start"},children:[e("1. Адаптация идёт",u.jsx(n,{fill:!0,steps:f})),e("2. Пройдена — первые 2 недели",u.jsx(n,{fill:!0,steps:P,completed:B})),e("3. Потом — «Вам назначено»",u.jsx(t,{items:g,today:D})),e("Ничего не назначено",u.jsx(t,{items:[],onBrowse:()=>{}}))]})}},q=["Playground","Пусто","ПослеАдаптации"];var a,i,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 380
  }}><AssignedPanel {...args} /></div>
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,p,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,A,E;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
        {col("3. Потом — «Вам назначено»", <AssignedPanel items={ASSIGNED} today={TODAY} />)}
        {col("Ничего не назначено", <AssignedPanel items={[]} onBrowse={() => {}} />)}
      </div>;
  }
}`,...(E=(A=o.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};export{r as Playground,q as __namedExportsOrder,W as default,o as ПослеАдаптации,s as Пусто};
