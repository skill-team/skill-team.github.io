import{r as i,j as r}from"./iframe-BffffG_H.js";import{C as v}from"./CourseCard-BZr_v-c3.js";import{C as c}from"./CardSlider-BD2_h4Sb.js";import{C as a}from"./courseData-qdhqDJcR.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-ZJU5hvpi.js";import"./AssignedBadge-iHre6veX.js";import"./Archive-DVj9kiPb.js";import"./InfoTag-pTru7Vn7.js";import"./index-CLeoysUr.js";import"./ContextIsolator-2vX43eVK.js";import"./context-foqqPHjY.js";import"./FavoriteButton-eg93F9pj.js";import"./ProgressRing-CDntUi2Q.js";import"./DragScroll-DYMaMTCP.js";import"./Surface-C7wg1raU.js";import"./SectionHeader-4HGinjgb.js";import"./course-1--YiCqOCo.js";import"./course-4-bsGBpGWB.js";import"./course-3-DSDYLXDH.js";const z={title:"UI Kit/Карточки/CardSlider",id:"ui-kit-cardslider",component:c,tags:["autodocs"],args:{title:"Продолжить обучение",count:a.length,actionLabel:"Больше курсов",children:null},argTypes:{title:{control:"text"},count:{control:"number"},actionLabel:{control:"text"},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onAction:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Блок-лента карточек на Главной — Figma Setl, Blok `2025:264617` («Продолжить обучение»). `Surface`, заголовок `SectionHeader` со счётчиком «(4)» и ссылкой «Больше курсов ↗», под ним через 24 — лента `DragScroll` через 16 (в макете 24 — сближено, карточки читаются одним рядом): без стрелок, листается перетягиванием мышью; карточки уезжают под край блока.\n\nТаких блоков будет несколько, с разными сущностями — карточки передаются детьми (`CourseCard` и будущие)."}}},decorators:[e=>r.jsx("div",{style:{width:1e3,padding:24,background:"var(--color-background)"},children:r.jsx(e,{})})]},o={render:e=>{const[d,m]=i.useState(Object.fromEntries(a.map(t=>[t.id,t.favorite]))),[p,n]=i.useState("Потяни ленту мышью · клик по карточке — открыть");return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[r.jsx(c,{...e,onAction:()=>n("Открыли все курсы"),children:a.map(t=>r.jsx(v,{title:t.title,image:t.image,duration:t.duration,progress:t.progress,favorite:d[t.id],onFavoriteChange:g=>m(f=>({...f,[t.id]:g})),onOpen:()=>n(`Открыли курс «${t.title}»`)},t.id))}),r.jsx("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:p})]})}},L=["Playground"];var u,s,l;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};export{o as Playground,L as __namedExportsOrder,z as default};
