import{r as d,j as e}from"./iframe-D1Ouy3kT.js";import{A as l}from"./AchievementsCard-C8C5C212.js";import{P as p}from"./ProfileCard-Dp2khpLe.js";import{R as i}from"./RightPanel-SZJc92yb.js";import{E as c,A as t}from"./profileData-DZhnLGpr.js";import"./preload-helper-C1FmrZbK.js";import"./AchievementBadge-BIjJDbO3.js";import"./index-CAYOqa0x.js";import"./ContextIsolator-D4uc6dxX.js";import"./context-ChWBGifp.js";import"./Surface-DPu_yVzG.js";import"./SectionHeader-DSh9i6xP.js";import"./Avatar-CbuKc6zi.js";import"./LevelProgress-DhgUSnKm.js";import"./SegmentedProgress-BWBOCI5A.js";import"./StatValue-BUYAI8Pj.js";import"./index-CGJuuq_M.js";const M={title:"UI Kit/Профиль/RightPanel",id:"ui-kit-rightpanel",component:i,tags:["autodocs"],argTypes:{children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Правая панель страницы. Колонка 296, карточки через 12. Сама панель — только расстановка; вид — у карточек:\n\n- **ProfileCard** — фото в кольце цвета уровня, ФИО, уровень с «колбасками» и баллами;\n- **AchievementsCard** — «Достижения», до 6 ачивок, «Подробнее ↗» к полному списку.\n\nИз чего собрано: атомы `Surface`, `Avatar`, `SegmentedProgress`, `AchievementBadge`, `Button` (link-red), иконка `IconRibbonStar`; молекулы `StatValue`, `LevelProgress`, `SectionHeader`."}}}},n={name:"На главной",args:{children:null},render:()=>{const[r,o]=d.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,padding:24,background:"var(--color-background)"},children:[e.jsxs(i,{children:[e.jsx(p,{...c,onOpen:()=>o("Открыли личный кабинет")}),e.jsx(l,{items:t,onMore:()=>o(`Открыли все достижения (${t.length})`)})]}),r&&e.jsx("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:r})]})}},R=["Главная"];var a,u,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(u=n.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};export{R as __namedExportsOrder,M as default,n as Главная};
