import{r as i,j as r}from"./iframe-XQ_qeO9Z.js";import{C as v}from"./CourseCard-Bqr63SFm.js";import{C as c}from"./CardSlider-C2ftQiC3.js";import{C as a}from"./courseData-D6Ua4v32.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-B6hy5Aa6.js";import"./FavoriteButton-Bbmb4ETI.js";import"./StopSquare-CqvMLRwJ.js";import"./index--oqSavUY.js";import"./ContextIsolator-DJke2nN-.js";import"./context-BSOHyiuZ.js";import"./ProgressRing-Ca5_V9hc.js";import"./DragScroll-DwoZxkVo.js";import"./Surface-T0I_cLNB.js";import"./SectionHeader-Di5LJoLh.js";import"./course-3-gX4Ok3xk.js";import"./course-4-bsGBpGWB.js";const I={title:"UI Kit/Карточки/CardSlider",id:"ui-kit-cardslider",component:c,tags:["autodocs"],args:{title:"Продолжить обучение",count:a.length,actionLabel:"Больше курсов",children:null},argTypes:{title:{control:"text"},count:{control:"number"},actionLabel:{control:"text"},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onAction:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Блок-лента карточек на Главной — Figma Setl, Blok `2025:264617` («Продолжить обучение»). `Surface`, заголовок `SectionHeader` со счётчиком «(4)» и ссылкой «Больше курсов ↗», под ним через 24 — лента `DragScroll` через 16 (в макете 24 — сближено, карточки читаются одним рядом): без стрелок, листается перетягиванием мышью; карточки уезжают под край блока.\n\nТаких блоков будет несколько, с разными сущностями — карточки передаются детьми (`CourseCard` и будущие)."}}},decorators:[o=>r.jsx("div",{style:{width:1e3,padding:24,background:"var(--color-background)"},children:r.jsx(o,{})})]},e={render:o=>{const[d,m]=i.useState(Object.fromEntries(a.map(t=>[t.id,t.favorite]))),[p,n]=i.useState("Потяни ленту мышью · клик по карточке — открыть");return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[r.jsx(c,{...o,onAction:()=>n("Открыли все курсы"),children:a.map(t=>r.jsx(v,{title:t.title,image:t.image,duration:t.duration,progress:t.progress,favorite:d[t.id],onFavoriteChange:g=>m(f=>({...f,[t.id]:g})),onOpen:()=>n(`Открыли курс «${t.title}»`)},t.id))}),r.jsx("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:p})]})}},T=["Playground"];var u,s,l;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const [fav, setFav] = useState<Record<string, boolean>>(Object.fromEntries(COURSE_ITEMS.map(c => [c.id, c.favorite])));
    const [msg, setMsg] = useState("Потяни ленту мышью · клик по карточке — открыть");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <CardSlider {...args} onAction={() => setMsg("Открыли все курсы")}>
          {COURSE_ITEMS.map(c => <CourseCard key={c.id} title={c.title} image={c.image} duration={c.duration} progress={c.progress} favorite={fav[c.id]} onFavoriteChange={v => setFav(f => ({
          ...f,
          [c.id]: v
        }))} onOpen={() => setMsg(\`Открыли курс «\${c.title}»\`)} />)}
        </CardSlider>
        <span style={{
        fontFamily: "var(--font-family-body)",
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>{msg}</span>
      </div>;
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};export{e as Playground,T as __namedExportsOrder,I as default};
