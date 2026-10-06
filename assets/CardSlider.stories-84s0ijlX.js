import{r as u,j as e}from"./iframe-DCXgeGQz.js";import{C as a,a as v}from"./courseData-BVEPplZ_.js";import{C as c}from"./CardSlider-BbJHDREu.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-RsVvaZAD.js";import"./FavoriteButton-Dcu0BHEH.js";import"./Upload-CUGaEg8S.js";import"./index-DsToMKrP.js";import"./context-Cf_eQdng.js";import"./ProgressRing-cbP8rus2.js";import"./DragScroll-CyUf2bcz.js";import"./Surface-Cj2staza.js";import"./SectionHeader-C0EID0U1.js";const k={title:"UI Kit/Карточки/CardSlider",id:"ui-kit-cardslider",component:c,tags:["autodocs"],args:{title:"Продолжить обучение",count:a.length,actionLabel:"Больше курсов",children:null},argTypes:{title:{control:"text"},count:{control:"number"},actionLabel:{control:"text"},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onAction:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Блок-лента карточек на Главной — Figma Setl, Blok `2025:264617` («Продолжить обучение»). `Surface`, заголовок `SectionHeader` со счётчиком «(4)» и ссылкой «Больше курсов ↗», под ним через 24 — лента `DragScroll` через 16 (в макете 24 — сближено, карточки читаются одним рядом): без стрелок, листается перетягиванием мышью; карточки уезжают под край блока.\n\nТаких блоков будет несколько, с разными сущностями — карточки передаются детьми (`CourseCard` и будущие)."}}},decorators:[o=>e.jsx("div",{style:{width:1e3,padding:24,background:"var(--color-background)"},children:e.jsx(o,{})})]},r={render:o=>{const[d,m]=u.useState(Object.fromEntries(a.map(t=>[t.id,t.favorite]))),[p,n]=u.useState("Потяни ленту мышью · клик по карточке — открыть");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(c,{...o,onAction:()=>n("Открыли все курсы"),children:a.map(t=>e.jsx(v,{title:t.title,image:t.image,duration:t.duration,progress:t.progress,favorite:d[t.id],onFavoriteChange:g=>m(f=>({...f,[t.id]:g})),onOpen:()=>n(`Открыли курс «${t.title}»`)},t.id))}),e.jsx("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:p})]})}},D=["Playground"];var i,s,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(s=r.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};export{r as Playground,D as __namedExportsOrder,k as default};
