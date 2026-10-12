import{r as d,j as e}from"./iframe-CFCi-G_z.js";import{A as l}from"./AchievementsCard-DrRrzjLC.js";import{P as p}from"./ProfileCard-D95xGZAe.js";import{R as s}from"./RightPanel-4B0YovS8.js";import{E as c,A as t}from"./profileData-CEgMGd_U.js";import"./preload-helper-C1FmrZbK.js";import"./AchievementBadge-BLlIFGqd.js";import"./index-zH042xrC.js";import"./ContextIsolator-DRazcLis.js";import"./context-x6QakU1z.js";import"./Surface-Dz0reFu7.js";import"./SectionHeader-DDrxZ92-.js";import"./Avatar-DznaJQkJ.js";import"./LevelProgress-e_5x3NOr.js";import"./SegmentedProgress-Dtb-iqdZ.js";import"./StatValue-BWx0ONx7.js";import"./index-UzVeu6a-.js";const M={title:"UI Kit/Профиль/RightPanel",id:"ui-kit-rightpanel",component:s,tags:["autodocs"],argTypes:{children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Правая панель страницы — Figma Setl `2073:28130`. Колонка 296 (в макете 367 — сужено на 20%, чтобы на экранах 1440–1680 не сжималась середина страницы), карточки через 12. Сама панель — только расстановка; вид — у карточек:\n\n- **ProfileCard** — фото в кольце цвета уровня, ФИО, уровень с «колбасками» и баллами;\n- **AchievementsCard** — «Достижения», до 6 ачивок, «Подробнее ↗» к полному списку.\n\nИз чего собрано: атомы `Surface`, `Avatar`, `SegmentedProgress`, `AchievementBadge`, `Button` (link-red), иконка `IconRibbonStar`; молекулы `StatValue`, `LevelProgress`, `SectionHeader`."}}}},n={name:"На главной",args:{children:null},render:()=>{const[r,o]=d.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,padding:24,background:"var(--color-background)"},children:[e.jsxs(s,{children:[e.jsx(p,{...c,onOpen:()=>o("Открыли личный кабинет")}),e.jsx(l,{items:t,onMore:()=>o(`Открыли все достижения (${t.length})`)})]}),r&&e.jsx("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:r})]})}},R=["Главная"];var a,u,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: "На главной",
  args: {
    children: null
  },
  render: () => {
    const [opened, setOpened] = useState("");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: 24,
      background: "var(--color-background)"
    }}>
        <RightPanel>
          <ProfileCard {...EMPLOYEE} onOpen={() => setOpened("Открыли личный кабинет")} />
          <AchievementsCard items={ACHIEVEMENTS} onMore={() => setOpened(\`Открыли все достижения (\${ACHIEVEMENTS.length})\`)} />
        </RightPanel>
        {opened && <span style={{
        fontFamily: "var(--font-family-body)",
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>{opened}</span>}
      </div>;
  }
}`,...(i=(u=n.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};export{R as __namedExportsOrder,M as default,n as Главная};
