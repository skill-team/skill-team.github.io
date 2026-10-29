import{r as g,j as u}from"./iframe-D1Ouy3kT.js";import{S as x}from"./SectionHeader-DSh9i6xP.js";import"./preload-helper-C1FmrZbK.js";const b={title:"UI Kit/Профиль/SectionHeader",id:"ui-kit-sectionheader",component:x,tags:["autodocs"],args:{title:"Достижения",actionLabel:"Подробнее",as:"h2"},argTypes:{title:{control:"text"},actionLabel:{control:"text"},as:{control:"inline-radio",options:["h2","h3"],description:"Уровень заголовка для экранного диктора"},onAction:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},decorators:[o=>u.jsx("div",{style:{width:319},children:u.jsx(o,{})})],parameters:{docs:{description:{component:"Заголовок блока карточки. Высота 40: слева заголовок Montserrat SemiBold 20 (`--panel-title`), справа `Button` link-red со стрелкой ↗ после текста. Нет `onAction` — только заголовок."}}}},e={render:o=>{const[B,y]=g.useState(0);return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[u.jsx(x,{...o,onAction:()=>y(f=>f+1)}),u.jsxs("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:["Нажатий: ",B]})]})}},t={name:"Без ссылки"},n={name:"С подзаголовком",args:{title:"Уровень",subtitle:"400 баллов · Искатель"},parameters:{docs:{description:{story:"`subtitle` — под заголовком через 2, `P2` 16 серым (`--section-subtitle`): «400 баллов · Искатель», «Вы на 144 месте» в личном кабинете."}}}},h=["Playground","БезСсылки","СПодзаголовком"];var r,s,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var i,c,l;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Без ссылки"
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,p,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "С подзаголовком",
  args: {
    title: "Уровень",
    subtitle: "400 баллов · Искатель"
  },
  parameters: {
    docs: {
      description: {
        story: "\\\`subtitle\\\` — под заголовком через 2, \\\`P2\\\` 16 серым (\\\`--section-subtitle\\\`): «400 баллов · Искатель», «Вы на 144 месте» в личном кабинете."
      }
    }
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};export{e as Playground,h as __namedExportsOrder,b as default,t as БезСсылки,n as СПодзаголовком};
