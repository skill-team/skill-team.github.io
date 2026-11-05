import{r,j as e,B as x}from"./iframe-SVfPbzFv.js";import{A as d}from"./AdaptationStepModal-CMslUFWr.js";import{A as g}from"./adaptationData-Do9l0oLo.js";import"./preload-helper-C1FmrZbK.js";import"./InfoTag-yxhjZ-QC.js";import"./AdaptationModuleCard-CG4aDHe9.js";import"./StepNumber-BZs6CQiH.js";import"./SideModal-D_8Wp4ku.js";import"./Scrollbar-BPGkC5Ii.js";import"./index-D7cFwff5.js";import"./ContextIsolator-DVAd3_hO.js";import"./context-b9bVuTgo.js";import"./KeyCode-lh1qUinJ.js";import"./pickAttrs-YwQEXnsv.js";import"./context-VzuhpM76.js";import"./CloseOutlined-C_pA6AVG.js";import"./extendsObject-78o_rR5W.js";import"./useLocale-CWiQR805.js";import"./DragScroll-nYKYvjr7.js";import"./SegmentedProgress-CGBGKk45.js";import"./Surface-CrlrQ0gF.js";import"./SectionHeader-CXNfpuSl.js";import"./index-iXG8bMil.js";import"./index-CGJuuq_M.js";const n=g.filter(s=>{var t;return(t=s.modules)==null?void 0:t.length}),N={title:"UI Kit/Профиль/AdaptationStepModal",id:"ui-kit-adaptationstepmodal",component:d,tags:["autodocs"],args:{open:!1,onClose:()=>{},step:n[0]},argTypes:{open:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onClose:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},step:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onModuleOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Окно шага адаптации из нескольких модулей. Модули собраны из разных курсов, базы знаний и тестов — одной страницей их не показать, поэтому шаг с `modules` открывает боковое окно (`SideModal`), а не урок. Шаг без модулей окно не открывает — страница ведёт сразу на урок.\n\nСверху — название шага, «Пройдено N из M», срок шага (у просроченного — красный) и «Модули можно проходить в любом порядке». Ниже — карточки модулей `AdaptationModuleCard` на белом фоне окна (у них цветная обводка); кнопка модуля — `onModuleOpen(индекс)`. На карте адаптации у такого шага внизу плашка со слоями «2 из 4» (пройдено модулей). Закрыть — крестик, клик по затемнению, Esc; на телефоне — на весь экран."}}}},o={render:()=>{const[s,t]=r.useState(null),[p,c]=r.useState(0),[y,f]=r.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,fontFamily:"var(--font-family-body)"},children:[e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:n.map((a,l)=>e.jsx(x,{variant:"secondary",size:"small",onClick:()=>(c(l),t(l)),children:a.title},l))}),e.jsx("span",{style:{fontSize:14,color:"var(--color-text-secondary)"},children:y||"Откройте шаг"}),e.jsx(d,{open:s!==null,onClose:()=>t(null),step:n[p],onModuleOpen:a=>f(`Открыли модуль «${n[p].modules[a].title}»`)})]})}},$=["Playground"];var i,u,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
