import{j as e,r as F}from"./iframe-wfJ_y6tk.js";import{H as r}from"./HeaderButton-DkHr82R4.js";import{a as t,I as B,b as s}from"./Archive-Ban5Sfu5.js";import{D as i}from"./fieldParts-CNLa7vql.js";import"./preload-helper-C1FmrZbK.js";import"./Bulb-DSH1TJRF.js";const H={title:"UI Kit/Навигация/Header/HeaderButton",id:"ui-kit-headerbutton",component:r,tags:["autodocs"],args:{icon:e.jsx(t,{}),label:"Уведомления",badge:3,disabled:!1},argTypes:{label:{control:"text",description:"Подпись. Пусто — круглая кнопка с одной иконкой"},badge:{control:"text",description:"Счётчик на иконке; больше 99 — «99+»",table:{category:"Слоты"}},disabled:{control:"boolean"},icon:{...i,description:"Залитая иконка из components/icons/fill"},onClick:i},decorators:[a=>e.jsx("div",{style:{display:"inline-flex",alignItems:"center",height:48,padding:"0 6px",borderRadius:999,background:"var(--color-surface)"},children:e.jsx(a,{})})],parameters:{docs:{description:{component:`Кнопка шапки. Стоит на белой плашке шапки (\`Header\`).

| Проп | Значения |
|---|---|
| \`label\` | текст или пусто |
| \`badge\` | число / текст |
| состояния | покой · наведение · нажатие |

Наведи и нажми — состояния настоящие. Размеры: высота 36 в плашке 48, иконка 16, подпись 14 Montserrat Medium.`}}}},o={},n={decorators:[a=>e.jsx(a,{})],render:()=>e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:4,height:48,padding:"0 6px",borderRadius:999,background:"var(--color-surface)"},children:[e.jsx(r,{icon:e.jsx(B,{}),label:"Избранное",iconColor:"var(--header-favorite-icon)"}),e.jsx(r,{icon:e.jsx(t,{}),label:"Уведомления",badge:120}),e.jsx(r,{icon:e.jsx(s,{}),label:"Профиль"}),e.jsx(r,{icon:e.jsx(t,{}),badge:3,"aria-label":"Уведомления"}),e.jsx(r,{icon:e.jsx(s,{}),"aria-label":"Профиль"})]})},u={parameters:{docs:{description:{story:"Клик по уведомлениям — счётчик сбрасывается."}}},render:()=>{const[a,j]=F.useState(7);return e.jsx(r,{icon:e.jsx(t,{}),label:"Уведомления",badge:a,onClick:()=>j(0)})}},S=["Playground","Варианты","Кликабельно"];var c,l,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,b,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  decorators: [Story => <Story />],
  render: () => <div style={{
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    height: 48,
    padding: "0 6px",
    borderRadius: 999,
    background: "var(--color-surface)"
  }}>
      <HeaderButton icon={<IconFillStar />} label="Избранное" iconColor="var(--header-favorite-icon)" />
      <HeaderButton icon={<IconFillNotifications />} label="Уведомления" badge={120} />
      <HeaderButton icon={<IconFillUser />} label="Профиль" />
      <HeaderButton icon={<IconFillNotifications />} badge={3} aria-label="Уведомления" />
      <HeaderButton icon={<IconFillUser />} aria-label="Профиль" />
    </div>
}`,...(m=(b=n.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var g,x,f;u.parameters={...u.parameters,docs:{...(g=u.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Клик по уведомлениям — счётчик сбрасывается."
      }
    }
  },
  render: () => {
    const [unread, setUnread] = useState(7);
    return <HeaderButton icon={<IconFillNotifications />} label="Уведомления" badge={unread} onClick={() => setUnread(0)} />;
  }
}`,...(f=(x=u.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};export{o as Playground,S as __namedExportsOrder,H as default,n as Варианты,u as Кликабельно};
