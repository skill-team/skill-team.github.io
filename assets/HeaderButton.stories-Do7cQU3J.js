import{j as e,r as j}from"./iframe-T1G-SIdY.js";import{H as r}from"./HeaderButton-C7zU9MTH.js";import{a as t,I as F,b as s}from"./StopSquare-CfNJlp54.js";import{D as i}from"./fieldParts-DZVs388l.js";import"./preload-helper-C1FmrZbK.js";import"./Bulb-DuOMX2eT.js";const h={title:"UI Kit/Навигация/Header/HeaderButton",id:"ui-kit-headerbutton",component:r,tags:["autodocs"],args:{icon:e.jsx(t,{}),label:"Уведомления",badge:3,disabled:!1},argTypes:{label:{control:"text",description:"Подпись. Пусто — круглая кнопка с одной иконкой"},badge:{control:"text",description:"Счётчик на иконке; больше 99 — «99+»",table:{category:"Слоты"}},disabled:{control:"boolean"},icon:{...i,description:"Залитая иконка из components/icons/fill"},onClick:i},decorators:[a=>e.jsx("div",{style:{display:"inline-flex",alignItems:"center",height:48,padding:"0 6px",borderRadius:999,background:"var(--color-surface)"},children:e.jsx(a,{})})],parameters:{docs:{description:{component:"Кнопка шапки — Figma Setl, Header__account__button-notification `284:60878`. Стоит на белой плашке шапки (`Header`).\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| `label` | текст или пусто | Text=yes · Text=no (круглая, одна иконка) |\n| `badge` | число / текст | Type=Notif — зелёный счётчик на иконке; Type=Blank — без |\n| состояния | покой · наведение · нажатие | Status=Default · Hover (`gray-150`, как у меню; в макете `gray-200`) · Press (`gray-300`) |\n\nНаведи и нажми — состояния настоящие. Размеры — кита, не из этого макета: высота 36 в плашке 48, иконка 16, подпись 14 Montserrat Medium."}}}},o={},n={decorators:[a=>e.jsx(a,{})],render:()=>e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:4,height:48,padding:"0 6px",borderRadius:999,background:"var(--color-surface)"},children:[e.jsx(r,{icon:e.jsx(F,{}),label:"Избранное",iconColor:"var(--header-favorite-icon)"}),e.jsx(r,{icon:e.jsx(t,{}),label:"Уведомления",badge:120}),e.jsx(r,{icon:e.jsx(s,{}),label:"Профиль"}),e.jsx(r,{icon:e.jsx(t,{}),badge:3,"aria-label":"Уведомления"}),e.jsx(r,{icon:e.jsx(s,{}),"aria-label":"Профиль"})]})},u={parameters:{docs:{description:{story:"Клик по уведомлениям — счётчик сбрасывается."}}},render:()=>{const[a,y]=j.useState(7);return e.jsx(r,{icon:e.jsx(t,{}),label:"Уведомления",badge:a,onClick:()=>y(0)})}},S=["Playground","Варианты","Кликабельно"];var c,l,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,b,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var m,x,f;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(x=u.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};export{o as Playground,S as __namedExportsOrder,h as default,n as Варианты,u as Кликабельно};
