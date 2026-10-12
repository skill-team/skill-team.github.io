import{j as t}from"./iframe-XQ_qeO9Z.js";import{A as d}from"./AchievementBadge-uVstA0Fk.js";import{b as m,A as p}from"./profileData-C_mFuJiu.js";import"./preload-helper-C1FmrZbK.js";import"./index--oqSavUY.js";import"./ContextIsolator-DJke2nN-.js";import"./context-BSOHyiuZ.js";const h={title:"UI Kit/Профиль/AchievementBadge",id:"ui-kit-achievementbadge",component:d,tags:["autodocs"],args:{src:m.explorer,title:"Исследователь",showTooltip:!0,animated:!0,delay:0},argTypes:{title:{control:"text"},showTooltip:{control:"boolean",description:"Тултип с названием при наведении"},animated:{control:"boolean",description:"Переворот при появлении и наведении"},delay:{control:"number",description:"Задержка переворота при появлении, мс"},src:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Ачивка — Figma Setl, Reward `2073:28981`. Шестиугольник 95.6×105.7 (заливка `--badge-frame-fill`, белая обводка 6, тень как у карточек), иконка 66 внутри.\n\nПри наведении — тултип с названием (`title`), тот же тёмный тултип, что у полей.\n\nАнимация: один оборот вокруг вертикальной оси (как монетка) при появлении и при наведении; `delay` — задержка при появлении, чтобы в карточке ачивки шли по очереди. «Уменьшить движение» в системе — без анимации.\n\nИконки — `components/assets/badges`: `badgeImages["explorer"]` и т.д., ключ — имя файла без «badge-». Ужаты до 200 px (в ачивке видно 66 — с запасом под ретину).'}}}},r={},o={name:"Все иконки",render:()=>t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, max-content)",gap:"24px 16px"},children:p.map(e=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8,width:110},children:[t.jsx(d,{src:e.src,title:e.title}),t.jsx("code",{style:{fontSize:11,color:"var(--color-text-secondary)"},children:e.key})]},e.key))})},A=["Playground","Все"];var a,n,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,c,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Все иконки",
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(6, max-content)",
    gap: "24px 16px"
  }}>
      {ACHIEVEMENTS.map(a => <div key={a.key} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      width: 110
    }}>
          <AchievementBadge src={a.src} title={a.title} />
          <code style={{
        fontSize: 11,
        color: "var(--color-text-secondary)"
      }}>{a.key}</code>
        </div>)}
    </div>
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};export{r as Playground,A as __namedExportsOrder,h as default,o as Все};
