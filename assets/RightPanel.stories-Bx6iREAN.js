import{r as d,j as e}from"./iframe-BffffG_H.js";import{A as l}from"./AchievementsCard-g_v6p1ly.js";import{P as p}from"./ProfileCard-CNTv_o6e.js";import{R as s}from"./RightPanel-CJC4hvKK.js";import{E as c,A as t}from"./profileData-DZhnLGpr.js";import"./preload-helper-C1FmrZbK.js";import"./AchievementBadge-CrZJIBZa.js";import"./index-CLeoysUr.js";import"./ContextIsolator-2vX43eVK.js";import"./context-foqqPHjY.js";import"./Surface-C7wg1raU.js";import"./SectionHeader-4HGinjgb.js";import"./Avatar-KoxHaPJt.js";import"./LevelProgress-DSryyKSI.js";import"./SegmentedProgress-Bfdh6SkH.js";import"./StatValue-CrwULRrr.js";import"./index-CGJuuq_M.js";const M={title:"UI Kit/Профиль/RightPanel",id:"ui-kit-rightpanel",component:s,tags:["autodocs"],argTypes:{children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Правая панель страницы — Figma Setl `2073:28130`. Колонка 296 (в макете 367 — сужено на 20%, чтобы на экранах 1440–1680 не сжималась середина страницы), карточки через 12. Сама панель — только расстановка; вид — у карточек:\n\n- **ProfileCard** — фото в кольце цвета уровня, ФИО, уровень с «колбасками» и баллами;\n- **AchievementsCard** — «Достижения», до 6 ачивок, «Подробнее ↗» к полному списку.\n\nИз чего собрано: атомы `Surface`, `Avatar`, `SegmentedProgress`, `AchievementBadge`, `Button` (link-red), иконка `IconRibbonStar`; молекулы `StatValue`, `LevelProgress`, `SectionHeader`."}}}},n={name:"На главной",args:{children:null},render:()=>{const[r,o]=d.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,padding:24,background:"var(--color-background)"},children:[e.jsxs(s,{children:[e.jsx(p,{...c,onOpen:()=>o("Открыли личный кабинет")}),e.jsx(l,{items:t,onMore:()=>o(`Открыли все достижения (${t.length})`)})]}),r&&e.jsx("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:r})]})}},R=["Главная"];var a,u,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
