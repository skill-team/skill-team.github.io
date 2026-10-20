import{j as e}from"./iframe-DATgQ8vN.js";import{A as s}from"./AchievementBadge-BsnoJ2Hs.js";import{b as n}from"./index-CGJuuq_M.js";import{A as x}from"./profileData-DZhnLGpr.js";import"./preload-helper-C1FmrZbK.js";import"./index-CeHB25lk.js";import"./ContextIsolator-CeJsXOdt.js";import"./context-DazkKd-s.js";const F={title:"UI Kit/Профиль/AchievementBadge",id:"ui-kit-achievementbadge",component:s,tags:["autodocs"],args:{src:n.explorer,title:"Исследователь",showTooltip:!0,animated:!0,delay:0},argTypes:{title:{control:"text"},showTooltip:{control:"boolean",description:"Тултип с названием при наведении"},animated:{control:"boolean",description:"Переворот при появлении и наведении"},delay:{control:"number",description:"Задержка переворота при появлении, мс"},src:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Ачивка. Шестиугольник 95.6×105.7 (заливка `--badge-frame-fill`, белая обводка 6, тень как у карточек), иконка 66 внутри.\n\nПри наведении — тултип с названием (`title`), тот же тёмный тултип, что у полей.\n\nАнимация: один оборот вокруг вертикальной оси (как монетка) при появлении и при наведении; `delay` — задержка при появлении, чтобы в карточке ачивки шли по очереди. «Уменьшить движение» в системе — без анимации.\n\nИконки — `components/assets/badges`: `badgeImages["explorer"]` и т.д., ключ — имя файла без «badge-». Ужаты до 200 px (в ачивке видно 66 — с запасом под ретину).'}}}},r={},t={name:"Все иконки",render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(6, max-content)",gap:"24px 16px"},children:x.map(u=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8,width:110},children:[e.jsx(s,{src:u.src,title:u.title}),e.jsx("code",{style:{fontSize:11,color:"var(--color-text-secondary)"},children:u.key})]},u.key))})},a={name:"Не получена",parameters:{docs:{description:{story:"`locked` — ещё не получена: плашка 60%, картинка обесцвечена, по центру замок 18 в белом полупрозрачном круге 39. Без переворота. Справа — для сравнения полученная."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:24,width:220},children:[e.jsx(s,{src:n["treasure-hunter"],title:"Кладоискатель",locked:!0}),e.jsx(s,{src:n["treasure-hunter"],title:"Кладоискатель"})]})},k=["Playground","Все","Закрытая"];var o,i,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,l,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,g,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Не получена",
  parameters: {
    docs: {
      description: {
        story: "\\\`locked\\\` — ещё не получена: плашка 60%, картинка обесцвечена, по центру замок 18 в белом полупрозрачном круге 39. Без переворота. Справа — для сравнения полученная."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    gap: 24,
    width: 220
  }}>
      <AchievementBadge src={badgeImages["treasure-hunter"]} title="Кладоискатель" locked />
      <AchievementBadge src={badgeImages["treasure-hunter"]} title="Кладоискатель" />
    </div>
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};export{r as Playground,k as __namedExportsOrder,F as default,t as Все,a as Закрытая};
