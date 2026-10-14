import{r as s,j as e,m as g,n as S,h as M,o as j,p as I,g as B,q as v,s as h,I as C}from"./iframe-BffffG_H.js";import{M as a,a as D}from"./MobileMenu-Bh-oyqW_.js";import{I as E,a as H,b as O}from"./Archive-DVj9kiPb.js";import"./preload-helper-C1FmrZbK.js";import"./Avatar-KoxHaPJt.js";import"./HeaderButton-B5PaK0F4.js";import"./Bulb-G01r8hAG.js";import"./BottomSheet-DhGZb94P.js";import"./index-CiRFsWTn.js";import"./ContextIsolator-2vX43eVK.js";import"./context-foqqPHjY.js";import"./KeyCode-lh1qUinJ.js";import"./pickAttrs-uqbkjBnv.js";import"./context-Ck2Iz0Hf.js";import"./CloseOutlined-CzmQulot.js";import"./extendsObject-78o_rR5W.js";import"./useLocale-DxXTUe-d.js";import"./SideMenu-Dyde9H_i.js";import"./MenuItem-COPIGx6e.js";import"./MenuSectionLabel-DN6PNtc_.js";import"./index-C_XSFebq.js";import"./Overflow-DGL6Usxd.js";import"./index-CLeoysUr.js";import"./useCSSVarCls-iy4-yhSQ.js";import"./collapse-BbEVqHco.js";const F=[{key:"home",label:"Главная",icon:e.jsx(S,{})},{key:"news",label:"Новости",icon:e.jsx(M,{}),children:[{key:"news-all",label:"Все новости"},{key:"news-mine",label:"Я автор"}]},{key:"kb",label:"База знаний",icon:e.jsx(j,{})},{key:"docs",label:"Документы",icon:e.jsx(I,{})},{key:"courses",label:"Курсы",icon:e.jsx(B,{})},{key:"ai",label:"Сэтл ИИ",icon:e.jsx(v,{})},{key:"action360",label:"Актион 360",icon:e.jsx(h,{})},{key:"idea",label:"Предложить идею",icon:e.jsx(C,{})}],w=[{key:"support",label:"Техподдержка",icon:e.jsx(g,{})}],se={title:"UI Kit/Навигация/Header/MobileHeader",id:"ui-kit-mobileheader",component:a,tags:["autodocs"],args:{title:"Setl Академия"},argTypes:{title:{control:"text",description:"Название на Главной — «Setl Академия», 14 SemiBold — целиком и на 360 px"},backLabel:{control:"text",description:"«На главную» — в разделе, «Назад» — глубже"},onMenu:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onBack:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},actions:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:`Шапка и меню на телефоне и планшете (до 1040 px; от 1041 — боковое меню \`Sidebar\` и \`Header\`). Нижнего бара нет — всё в шапке, место внизу свободно.

**MobileHeader** — прямо на фоне страницы, без белых плашек: слева «меню» (четыре квадрата), рядом — как на компьютере: на Главной название 14 SemiBold, в разделе «← На главную», глубже «← Назад»; справа иконками 40 — Избранное, Уведомления со счётчиком, Профиль. Прячется при прокрутке вниз — в \`StickyHeader\`, как \`Header\`.

**MobileMenu** — шторка снизу: «ручка» (стянуть вниз — закрыть), «Меню» (без крестика: закрыть — тап мимо или стянуть), те же пункты, что в боковом меню, под чертой — Техподдержка. Выбор пункта закрывает шторку.

| Ширина | Раскладка |
|---|---|
| до 601 | телефон: эта шапка, отступы 16, на мобильном браузере — при любой ширине |
| 602–1040 | планшет: эта шапка, содержимое как на компьютере |
| от 1041 | компьютер: боковое меню 216–240, правая панель 248–296 |`}}},decorators:[o=>e.jsx("div",{style:{width:360,padding:"8px 16px",background:"var(--color-background)"},children:e.jsx(o,{})})]},r=o=>[{key:"favorites",label:"Избранное",icon:e.jsx(E,{}),iconColor:"var(--header-favorite-icon)",onClick:()=>o("Избранное")},{key:"notifications",label:"Уведомления",icon:e.jsx(H,{}),badge:3,onClick:()=>o("Уведомления")},{key:"profile",label:"Профиль",icon:e.jsx(O,{}),onClick:()=>o("Профиль")}],n={name:"Шапка и меню",render:o=>{const[y,l]=s.useState(!1),[i,f]=s.useState("home"),[c,k]=s.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,fontFamily:"var(--font-family-body)"},children:[e.jsx(a,{title:o.title,onMenu:()=>l(!0),actions:r(k)}),e.jsx("span",{style:{fontSize:14,color:"var(--color-text-secondary)"},children:c?`Нажато: ${c}`:`Раздел: ${i}. Нажмите «меню»`}),e.jsx(D,{open:y,onClose:()=>l(!1),items:F,footerItems:w,selectedKey:i,onSelect:f})]})}},t={name:"Раздел и страница глубже",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(a,{onMenu:()=>{},onBack:()=>{},backLabel:"На главную",actions:r(()=>{})}),e.jsx(a,{onMenu:()=>{},onBack:()=>{},backLabel:"Назад",actions:r(()=>{})})]})},re=["Playground","Раздел"];var u,p,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Шапка и меню",
  render: args => {
    const [open, setOpen] = useState(false);
    const [sel, setSel] = useState("home");
    const [msg, setMsg] = useState("");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12,
      fontFamily: "var(--font-family-body)"
    }}>
        <MobileHeader title={args.title} onMenu={() => setOpen(true)} actions={actions(setMsg)} />
        <span style={{
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>{msg ? \`Нажато: \${msg}\` : \`Раздел: \${sel}. Нажмите «меню»\`}</span>
        <MobileMenu open={open} onClose={() => setOpen(false)} items={ITEMS} footerItems={FOOTER} selectedKey={sel} onSelect={setSel} />
      </div>;
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,b,x;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Раздел и страница глубже",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <MobileHeader onMenu={() => {}} onBack={() => {}} backLabel="На главную" actions={actions(() => {})} />
      <MobileHeader onMenu={() => {}} onBack={() => {}} backLabel="Назад" actions={actions(() => {})} />
    </div>
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};export{n as Playground,re as __namedExportsOrder,se as default,t as Раздел};
