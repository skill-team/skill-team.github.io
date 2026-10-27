import{r,j as e,B as x}from"./iframe-DF43zbcH.js";import{A as d}from"./AdaptationStepModal-K_qIo1Rg.js";import{A as g}from"./adaptationData-BgXbpwWY.js";import"./preload-helper-C1FmrZbK.js";import"./InfoTag-DnH5-QU6.js";import"./AdaptationModuleCard-FwBuUs9d.js";import"./StepNumber-DyiP9-q2.js";import"./SideModal-DhyoKxEd.js";import"./Scrollbar-DaPov4DG.js";import"./index-CpVVr_3u.js";import"./ContextIsolator-CGgXIIAn.js";import"./context-Bvlc22x8.js";import"./KeyCode-lh1qUinJ.js";import"./pickAttrs-D5cNfL7C.js";import"./context-pxAaBSXq.js";import"./CloseOutlined-ep7nLCB3.js";import"./extendsObject-78o_rR5W.js";import"./useLocale-DdUAtv3I.js";import"./DragScroll-BQtsHe0j.js";import"./SegmentedProgress-CI1oac0e.js";import"./Surface-BM1NSgrj.js";import"./SectionHeader-DALco2uY.js";import"./index-Dc-2W6eP.js";import"./index-CGJuuq_M.js";const n=g.filter(s=>{var t;return(t=s.modules)==null?void 0:t.length}),N={title:"UI Kit/Профиль/AdaptationStepModal",id:"ui-kit-adaptationstepmodal",component:d,tags:["autodocs"],args:{open:!1,onClose:()=>{},step:n[0]},argTypes:{open:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onClose:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},step:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onModuleOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Окно шага адаптации из нескольких модулей. Модули собраны из разных курсов, базы знаний и тестов — одной страницей их не показать, поэтому шаг с `modules` открывает боковое окно (`SideModal`), а не урок. Шаг без модулей окно не открывает — страница ведёт сразу на урок.\n\nСверху — название шага, «Пройдено N из M», срок шага (у просроченного — красный) и «Модули можно проходить в любом порядке». Ниже — карточки модулей `AdaptationModuleCard` на белом фоне окна (у них цветная обводка); кнопка модуля — `onModuleOpen(индекс)`. На карте адаптации у такого шага внизу плашка со слоями «2 из 4» (пройдено модулей). Закрыть — крестик, клик по затемнению, Esc; на телефоне — на весь экран."}}}},o={render:()=>{const[s,t]=r.useState(null),[p,c]=r.useState(0),[y,f]=r.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,fontFamily:"var(--font-family-body)"},children:[e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:n.map((a,l)=>e.jsx(x,{variant:"secondary",size:"small",onClick:()=>(c(l),t(l)),children:a.title},l))}),e.jsx("span",{style:{fontSize:14,color:"var(--color-text-secondary)"},children:y||"Откройте шаг"}),e.jsx(d,{open:s!==null,onClose:()=>t(null),step:n[p],onModuleOpen:a=>f(`Открыли модуль «${n[p].modules[a].title}»`)})]})}},$=["Playground"];var i,u,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState<number | null>(null);
    const [last, setLast] = useState(0);
    const [msg, setMsg] = useState("");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12,
      fontFamily: "var(--font-family-body)"
    }}>
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8
      }}>
          {WITH_MODULES.map((s, i) => <Button key={i} variant="secondary" size="small" onClick={() => (setLast(i), setOpen(i))}>
              {s.title}
            </Button>)}
        </div>
        <span style={{
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>{msg || "Откройте шаг"}</span>
        <AdaptationStepModal open={open !== null} onClose={() => setOpen(null)} step={WITH_MODULES[last]} onModuleOpen={j => setMsg(\`Открыли модуль «\${WITH_MODULES[last].modules![j].title}»\`)} />
      </div>;
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};export{o as Playground,$ as __namedExportsOrder,N as default};
