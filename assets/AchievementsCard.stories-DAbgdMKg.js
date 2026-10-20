import{r as x,j as e,B as h}from"./iframe-xHeXyRUt.js";import{A as i}from"./AchievementsCard-CcgWTLFy.js";import{A as v}from"./profileData-DZhnLGpr.js";import"./preload-helper-C1FmrZbK.js";import"./AchievementBadge-CqvEBXiJ.js";import"./index-DAOdAdyQ.js";import"./ContextIsolator-BRwUpuIq.js";import"./context-YSLqM9pP.js";import"./Surface-C1rhrTeK.js";import"./SectionHeader-DAQD-aYM.js";import"./index-CGJuuq_M.js";const H={title:"UI Kit/Профиль/AchievementsCard",id:"ui-kit-achievementscard",component:i,tags:["autodocs"],args:{items:v,title:"Достижения"},argTypes:{title:{control:"text"},items:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onMore:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},decorators:[r=>e.jsx("div",{style:{width:296,padding:24,background:"var(--color-background)"},children:e.jsx(r,{})})],parameters:{docs:{description:{component:"Достижения. Подложка `Surface`, заголовок `SectionHeader` («Достижения» + «Все ↗» — `Button` link-red; на узкой панели — одна стрелка), ачивки `AchievementBadge` сеткой 3 в ряд, между рядами 16.\n\n**Анимация**: при появлении ачивки по очереди переворачиваются вокруг своей оси, как монетка (0.9 с, через 100 мс друг за другом); наведение на ачивку — ещё один оборот и тултип с её названием. «Уменьшить движение» в системе — без анимации.\n\n**Не больше 6** — два ряда; остальные — по «Все». Передавать можно сколько угодно, лишние карточка не покажет (`ACHIEVEMENTS_MAX`).\n\n| Проп | Значения |\n|---|---|\n| `items` | `{ key, title, src }[]` |\n| `title` | текст |\n| `onMore` | () => … |"}}}},t={render:r=>{const[o,a]=x.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(i,{...r,onMore:()=>a(!0)}),o&&e.jsxs("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:["Открыли все ",r.items.length]})]})}},n={render:r=>{const[o,a]=x.useState(0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"flex-start"},children:[e.jsx(i,{...r,onMore:()=>{}},o),e.jsx(h,{variant:"secondary",size:"small",onClick:()=>a(E=>E+1),children:"Повторить"})]})}},s={name:"Меньше шести",args:{items:v.slice(0,4)}},O=["Playground","Анимация","Мало"];var c,l,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [opened, setOpened] = useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <AchievementsCard {...args} onMore={() => setOpened(true)} />
        {opened && <span style={{
        fontFamily: "var(--font-family-body)",
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>Открыли все {args.items.length}</span>}
      </div>;
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,m,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [run, setRun] = useState(0);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start"
    }}>
        <AchievementsCard key={run} {...args} onMore={() => {}} />
        <Button variant="secondary" size="small" onClick={() => setRun(n => n + 1)}>
          Повторить
        </Button>
      </div>;
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,y,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Меньше шести",
  args: {
    items: ACHIEVEMENTS.slice(0, 4)
  }
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};export{t as Playground,O as __namedExportsOrder,H as default,n as Анимация,s as Мало};
