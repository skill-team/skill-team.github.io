import{r as u,j as o}from"./iframe-xHeXyRUt.js";import{C as c}from"./CertificateCard-CaCHwb_Y.js";import{C as d}from"./achievementsData-QTm5KAXF.js";import"./preload-helper-C1FmrZbK.js";import"./index-CGJuuq_M.js";const a=d[0],x={title:"UI Kit/Карточки/CertificateCard",id:"ui-kit-certificatecard",component:c,tags:["autodocs"],args:{title:a.title,image:a.image},argTypes:{title:{control:"text",description:"В одну строку, дальше «…»"},image:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onDownload:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Карточка сертификата в блоке «Сертификаты» (личный кабинет, «Достижения»). Картинка 167, под ней название (`H3`, в одну строку) и кнопка «Скачать» иконкой — `Button secondary small`, как «Скачать» и «⋮» в реестре документов. Оформление — как у `CourseCard`: белая, лёгкая тень, скругление 24, поля 12. Клик по картинке — открыть, по кнопке — скачать."}}},decorators:[e=>o.jsx("div",{style:{padding:24,background:"var(--color-background)"},children:o.jsx(e,{})})]},t={render:e=>{const[i,r]=u.useState("—");return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"flex-start"},children:[o.jsx(c,{...e,onOpen:()=>r("Открыть"),onDownload:()=>r("Скачать")}),o.jsxs("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:["Последнее действие: ",i]})]})}},C=["Playground"];var n,s,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [log, setLog] = useState("—");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start"
    }}>
        <CertificateCard {...args} onOpen={() => setLog("Открыть")} onDownload={() => setLog("Скачать")} />
        <span style={{
        fontFamily: "var(--font-family-body)",
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>Последнее действие: {log}</span>
      </div>;
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};export{t as Playground,C as __namedExportsOrder,x as default};
