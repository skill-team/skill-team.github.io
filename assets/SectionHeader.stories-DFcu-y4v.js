import{r as x,j as e}from"./iframe-T1G-SIdY.js";import{S as d}from"./SectionHeader-Dm5sO1Zb.js";import"./preload-helper-C1FmrZbK.js";const S={title:"UI Kit/Профиль/SectionHeader",id:"ui-kit-sectionheader",component:d,tags:["autodocs"],args:{title:"Достижения",actionLabel:"Подробнее",as:"h2"},argTypes:{title:{control:"text"},actionLabel:{control:"text"},as:{control:"inline-radio",options:["h2","h3"],description:"Уровень заголовка для экранного диктора"},onAction:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},decorators:[n=>e.jsx("div",{style:{width:319},children:e.jsx(n,{})})],parameters:{docs:{description:{component:"Заголовок блока карточки — Figma Setl, Header `2073:28979`. Высота 40: слева заголовок Montserrat SemiBold 20 (`--panel-title`), справа `Button` link-red со стрелкой ↗ после текста. Нет `onAction` — только заголовок."}}}},t={render:n=>{const[u,p]=x.useState(0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(d,{...n,onAction:()=>p(m=>m+1)}),e.jsxs("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:["Нажатий: ",u]})]})}},o={name:"Без ссылки"},h=["Playground","БезСсылки"];var r,a,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const [n, setN] = useState(0);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 8
    }}>
        <SectionHeader {...args} onAction={() => setN(x => x + 1)} />
        <span style={{
        fontFamily: "var(--font-family-body)",
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>Нажатий: {n}</span>
      </div>;
  }
}`,...(s=(a=t.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,c,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Без ссылки"
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};export{t as Playground,h as __namedExportsOrder,S as default,o as БезСсылки};
