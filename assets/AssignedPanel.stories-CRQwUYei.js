import{j as e,E as q,g as I,a0 as w}from"./iframe-BjfIqAJn.js";import{A as p}from"./AdaptationPanel-BVLGUDVr.js";import{A as F}from"./AssignedBadge-sv1KiOpA.js";import{I as g}from"./InfoTag-Dqy2kx7X.js";import{P as C}from"./ProgressRing-BgpoemgI.js";import{s as O}from"./Scrollbar-C0TrX6YL.js";import{S as k}from"./Surface-WnPlUTOE.js";import{S as L}from"./SectionHeader-BeTVk7Xj.js";import{A as z,b as M,c as R}from"./adaptationData-DRJ_nHma.js";import{a as G}from"./coursesData-BZH3rvUT.js";import"./preload-helper-C1FmrZbK.js";import"./AchievementBadge-DTuF2GQv.js";import"./index-BOybzS2M.js";import"./ContextIsolator-x4ptwmC0.js";import"./context-jz5FLBdL.js";import"./DragScroll-DuG7ua-j.js";import"./ProgressBar-Cs9cZmYr.js";import"./StepNumber-oAWMkXlL.js";import"./Archive-BFoVJ9mL.js";import"./SegmentedProgress-BxJ7qfWL.js";import"./index-CGJuuq_M.js";import"./course-1--YiCqOCo.js";import"./course-4-bsGBpGWB.js";import"./course-3-DSDYLXDH.js";const H="_panel_1amq3_2",K="_list_1amq3_5",U="_fill_1amq3_14",V="_row_1amq3_25",W="_image_1amq3_55",$="_body_1amq3_62",J="_title_1amq3_69",Q="_meta_1amq3_79",X="_metaLeft_1amq3_80",Y="_deadline_1amq3_95",t={panel:H,list:K,fill:U,row:V,image:W,body:$,title:J,meta:Q,metaLeft:X,deadline:Y},Z=u=>u.replace(/минут[аы]?/,"мин").replace(/час(а|ов)?/,"ч");function a({items:u,onOpen:n,onMore:l,onBrowse:m,title:c="Вам назначено",limit:v,fill:d,today:B,className:P}){const b=v??(d?1/0:3),S=[...u].sort((s,N)=>(s.deadline??"9999").localeCompare(N.deadline??"9999"));return e.jsxs(k,{className:[t.panel,d&&t.fill,P].filter(Boolean).join(" "),"aria-label":c,children:[e.jsx(L,{title:c,count:u.length||void 0,actionLabel:"Все",onAction:u.length?l:void 0}),u.length===0?e.jsx(q,{size:"xs",icon:e.jsx(I,{}),title:"Пока ничего не назначено",description:"Когда руководитель назначит курс, он появится здесь. А пока — загляните в каталог",action:m?{label:"Перейти к курсам",onClick:m}:void 0}):e.jsx("ul",{className:[t.list,d&&O.xs].filter(Boolean).join(" "),children:S.slice(0,b).map(s=>e.jsx("li",{children:e.jsxs("button",{type:"button",className:t.row,onClick:()=>n==null?void 0:n(s.id),children:[e.jsx("img",{className:t.image,src:s.image,alt:"",draggable:!1}),e.jsxs("span",{className:t.body,children:[e.jsx("span",{className:t.title,children:s.title}),e.jsxs("span",{className:t.meta,children:[e.jsxs("span",{className:t.metaLeft,children:[e.jsx(g,{size:"small",tone:"blue",icon:e.jsx(w,{size:12}),children:Z(s.duration)}),!!s.progress&&e.jsxs(g,{size:"small",tone:"green",icon:e.jsx(C,{value:s.progress}),children:[Math.round(s.progress),"%"]})]}),s.deadline&&e.jsx(F,{variant:"tag",size:"small",deadline:s.deadline,reason:s.reason,today:B,className:t.deadline})]})]})]})},s.id))})]})}a.__docgenInfo={description:"",methods:[],displayName:"AssignedPanel",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AssignedItem"}],raw:"AssignedItem[]"},description:""},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},onMore:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBrowse:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Пусто — «Перейти к курсам»."},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Вам назначено"',computed:!1}},limit:{required:!1,tsType:{name:"number"},description:"Сколько строк показать. По умолчанию 3, с fill — все."},fill:{required:!1,tsType:{name:"boolean"},description:"На высоту родителя: все курсы, прокрутка внутри."},today:{required:!1,tsType:{name:"Date"},description:"«Сегодня» — для срока; по умолчанию текущая дата."},className:{required:!1,tsType:{name:"string"},description:""}}};const T=G().map(u=>({...u,reason:u.assignReason})),ve={title:"UI Kit/Профиль/AssignedPanel",id:"ui-kit-assignedpanel",component:a,tags:["autodocs"],args:{items:T,title:"Вам назначено",limit:3},argTypes:{title:{control:"text"},limit:{control:{type:"number",min:1,max:6},description:"Сколько строк показать"},items:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},today:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onMore:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"«Вам назначено» — курсы, назначенные руководителем, в узкой колонке (личный кабинет, «Обзор»): встаёт на место карты адаптации, когда та пройдена. Тем же языком, что боковая карта адаптации: `SectionHeader` с числом и «Все ↗», строки без линий — картинка 64 × 44, название 14 SemiBold до 2 строк, под ним плашки: время и прогресс слева, срок справа («до 20.10» синим, просрочен — красным). Ближайшие по сроку — первыми, показывает `limit` строк. Наведение — подъём с тенью, строка открывает курс. Ничего не назначено — заглушка «Пока ничего не назначено» и «Перейти к курсам».\n\n**Что встаёт на место карты адаптации** (история «После адаптации»): идёт — текущий шаг; пройдена — поздравление (`AdaptationPanel` с пройденными шагами и `completed`: награды, срок, баллы), первые 2 недели; потом — «Вам назначено». На Главной 2 после адаптации вместо карты — профиль с баллами и ачивки, как на Главной."}}},decorators:[u=>e.jsx("div",{style:{padding:24,background:"var(--color-background)"},children:e.jsx(u,{})})]},r={render:u=>e.jsx("div",{style:{width:380},children:e.jsx(a,{...u})})},i={name:"Ничего не назначено",parameters:{docs:{description:{story:"Назначенных курсов нет — заглушка `EmptyState` xs с переходом в каталог (`onBrowse`); в шапке без числа и «Все»."}}},render:()=>e.jsx("div",{style:{width:380},children:e.jsx(a,{items:[],onBrowse:()=>{}})})},ee=u=>e.jsx("span",{style:{fontFamily:"var(--font-family-body)",fontSize:12,fontWeight:600,letterSpacing:1,textTransform:"uppercase",color:"var(--color-text-tertiary)"},children:u}),o={name:"После адаптации — три состояния",parameters:{docs:{description:{story:"Как в «Обзоре» личного кабинета: блок одной высоты во всех состояниях (`AdaptationPanel fill` — шаги прокручиваются внутри, к текущему)."}}},render:()=>{const u=(n,l)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[ee(n),e.jsx("div",{style:{height:432,display:"grid"},children:l})]});return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 340px)",gap:24,alignItems:"start"},children:[u("1. Адаптация идёт",e.jsx(p,{fill:!0,steps:z})),u("2. Пройдена — первые 2 недели",e.jsx(p,{fill:!0,steps:R,completed:M})),u("3. Потом — «Вам назначено»",e.jsx(a,{fill:!0,items:T})),u("Ничего не назначено",e.jsx(a,{fill:!0,items:[],onBrowse:()=>{}}))]})}},Be=["Playground","Пусто","ПослеАдаптации"];var f,y,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 380
  }}><AssignedPanel {...args} /></div>
}`,...(x=(y=r.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var A,E,D;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(D=(E=i.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var _,j,h;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(h=(j=o.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};export{r as Playground,Be as __namedExportsOrder,ve as default,o as ПослеАдаптации,i as Пусто};
