import{r as i,j as r}from"./iframe-D1Ouy3kT.js";import{C as v}from"./CourseCard-ELbh_IUE.js";import{C as d}from"./CardSlider-DITJ0ZjR.js";import{C as a}from"./courseData-qdhqDJcR.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-DxOFOOjQ.js";import"./AssignedBadge-B7HRNlX0.js";import"./Archive-6wY4EHJx.js";import"./InfoTag-CBwk4bqw.js";import"./index-CAYOqa0x.js";import"./ContextIsolator-D4uc6dxX.js";import"./context-ChWBGifp.js";import"./FavoriteButton-BHxuovug.js";import"./ProgressRing-DRwasaGX.js";import"./DragScroll-C-QWlkuP.js";import"./Surface-DPu_yVzG.js";import"./SectionHeader-DSh9i6xP.js";import"./course-1--YiCqOCo.js";import"./course-4-bsGBpGWB.js";import"./course-3-DSDYLXDH.js";const z={title:"UI Kit/Карточки/CardSlider",id:"ui-kit-cardslider",component:d,tags:["autodocs"],args:{title:"Продолжить обучение",count:a.length,actionLabel:"Больше курсов",children:null},argTypes:{title:{control:"text"},count:{control:"number"},actionLabel:{control:"text"},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onAction:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Блок-лента карточек на Главной («Продолжить обучение»). `Surface`, заголовок `SectionHeader` со счётчиком «(4)» и ссылкой «Больше курсов ↗», под ним через 24 — лента `DragScroll` через 16: без стрелок, листается перетягиванием мышью; карточки уезжают под край блока.\n\nТаких блоков будет несколько, с разными сущностями — карточки передаются детьми (`CourseCard` и будущие)."}}},decorators:[e=>r.jsx("div",{style:{width:1e3,padding:24,background:"var(--color-background)"},children:r.jsx(e,{})})]},o={render:e=>{const[l,m]=i.useState(Object.fromEntries(a.map(t=>[t.id,t.favorite]))),[p,n]=i.useState("Потяни ленту мышью · клик по карточке — открыть");return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[r.jsx(d,{...e,onAction:()=>n("Открыли все курсы"),children:a.map(t=>r.jsx(v,{title:t.title,image:t.image,duration:t.duration,progress:t.progress,favorite:l[t.id],onFavoriteChange:g=>m(f=>({...f,[t.id]:g})),onOpen:()=>n(`Открыли курс «${t.title}»`)},t.id))}),r.jsx("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:p})]})}},L=["Playground"];var u,s,c;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};export{o as Playground,L as __namedExportsOrder,z as default};
