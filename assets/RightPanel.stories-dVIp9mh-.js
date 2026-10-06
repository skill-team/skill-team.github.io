import{r as d,j as e}from"./iframe-DCXgeGQz.js";import{A as l}from"./AchievementsCard-BxIKxWt2.js";import{P as c}from"./ProfileCard-BjlI6gJk.js";import{R as i}from"./RightPanel-D__K98Wm.js";import{E as p,A as t}from"./profileData-C_mFuJiu.js";import"./preload-helper-C1FmrZbK.js";import"./AchievementBadge-B5i8gBBs.js";import"./index-DsToMKrP.js";import"./context-Cf_eQdng.js";import"./Surface-Cj2staza.js";import"./SectionHeader-C0EID0U1.js";import"./Avatar-DohhwPCM.js";import"./LevelProgress-Bs-6KgQS.js";import"./SegmentedProgress-bbyaCJRM.js";import"./StatValue-Cirlxwkn.js";const j={title:"UI Kit/Профиль/RightPanel",id:"ui-kit-rightpanel",component:i,tags:["autodocs"],argTypes:{children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Правая панель страницы — Figma Setl `2073:28130`. Колонка 296 (в макете 367 — сужено на 20%, чтобы на экранах 1440–1680 не сжималась середина страницы), карточки через 12. Сама панель — только расстановка; вид — у карточек:\n\n- **ProfileCard** — фото в кольце цвета уровня, ФИО, уровень с «колбасками» и баллами;\n- **AchievementsCard** — «Достижения», до 6 ачивок, «Подробнее ↗» к полному списку.\n\nИз чего собрано: атомы `Surface`, `Avatar`, `SegmentedProgress`, `AchievementBadge`, `Button` (link-red), иконка `IconRibbonStar`; молекулы `StatValue`, `LevelProgress`, `SectionHeader`."}}}},n={name:"На главной",args:{children:null},render:()=>{const[r,o]=d.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,padding:24,background:"var(--color-background)"},children:[e.jsxs(i,{children:[e.jsx(c,{...p,onOpen:()=>o("Открыли личный кабинет")}),e.jsx(l,{items:t,onMore:()=>o(`Открыли все достижения (${t.length})`)})]}),r&&e.jsx("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:r})]})}},D=["Главная"];var a,u,s;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(u=n.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};export{D as __namedExportsOrder,j as default,n as Главная};
