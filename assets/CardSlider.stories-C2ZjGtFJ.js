import{r as i,j as r}from"./iframe-T1G-SIdY.js";import{C as v}from"./CourseCard-DhzvQzLD.js";import{C as c}from"./CardSlider-DvnT72ZU.js";import{C as a}from"./courseData-D6Ua4v32.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-wUfbEmiw.js";import"./FavoriteButton-DIlVqwv5.js";import"./StopSquare-CfNJlp54.js";import"./index-CCOMMNKo.js";import"./context-BT_JPeuY.js";import"./ProgressRing-DmxyxwW7.js";import"./DragScroll-AZmSmewP.js";import"./Surface-D4SMnU_6.js";import"./SectionHeader-Dm5sO1Zb.js";import"./course-3-gX4Ok3xk.js";import"./course-4-bsGBpGWB.js";const _={title:"UI Kit/Карточки/CardSlider",id:"ui-kit-cardslider",component:c,tags:["autodocs"],args:{title:"Продолжить обучение",count:a.length,actionLabel:"Больше курсов",children:null},argTypes:{title:{control:"text"},count:{control:"number"},actionLabel:{control:"text"},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onAction:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Блок-лента карточек на Главной — Figma Setl, Blok `2025:264617` («Продолжить обучение»). `Surface`, заголовок `SectionHeader` со счётчиком «(4)» и ссылкой «Больше курсов ↗», под ним через 24 — лента `DragScroll` через 16 (в макете 24 — сближено, карточки читаются одним рядом): без стрелок, листается перетягиванием мышью; карточки уезжают под край блока.\n\nТаких блоков будет несколько, с разными сущностями — карточки передаются детьми (`CourseCard` и будущие)."}}},decorators:[o=>r.jsx("div",{style:{width:1e3,padding:24,background:"var(--color-background)"},children:r.jsx(o,{})})]},e={render:o=>{const[d,m]=i.useState(Object.fromEntries(a.map(t=>[t.id,t.favorite]))),[p,n]=i.useState("Потяни ленту мышью · клик по карточке — открыть");return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[r.jsx(c,{...o,onAction:()=>n("Открыли все курсы"),children:a.map(t=>r.jsx(v,{title:t.title,image:t.image,duration:t.duration,progress:t.progress,favorite:d[t.id],onFavoriteChange:g=>m(f=>({...f,[t.id]:g})),onOpen:()=>n(`Открыли курс «${t.title}»`)},t.id))}),r.jsx("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:p})]})}},I=["Playground"];var u,s,l;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};export{e as Playground,I as __namedExportsOrder,_ as default};
