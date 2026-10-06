import{r as x,j as e}from"./iframe-DCXgeGQz.js";import{P as p}from"./ProfileCard-BjlI6gJk.js";import{E as f}from"./profileData-C_mFuJiu.js";import"./preload-helper-C1FmrZbK.js";import"./Avatar-DohhwPCM.js";import"./Surface-Cj2staza.js";import"./LevelProgress-Bs-6KgQS.js";import"./SegmentedProgress-bbyaCJRM.js";import"./StatValue-Cirlxwkn.js";const P={title:"UI Kit/Профиль/ProfileCard",id:"ui-kit-profilecard",component:p,tags:["autodocs"],args:f,argTypes:{name:{control:"text"},levelName:{control:"text"},level:{control:{type:"number",min:1,max:6}},total:{control:{type:"number",min:1,max:6}},points:{control:"number"},toNext:{control:"number",description:"0 — последний уровень: «До след. уровня» не показывается"},progress:{control:{type:"range",min:0,max:1,step:.05},description:"Доля текущего уровня; пусто — points / (points + toNext)"},photo:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},decorators:[t=>e.jsx("div",{style:{width:296,padding:24,background:"var(--color-background)"},children:e.jsx(t,{})})],parameters:{docs:{description:{component:"Карточка сотрудника — Figma Setl, Container 3 `2073:28147`. Подложка `Surface` (скругление 30, отступы 24), фото `Avatar` 100 в кольце цвета текущего уровня, через 16 — ФИО (Montserrat SemiBold 20 по центру), через 24 — `LevelProgress`. В макете 24 и 32 — сжато.\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| `name` | текст | FIO |\n| `photo` | картинка | Avatar_card |\n| `levelName`, `level`, `total` | «Искатель», 2, 6 | «Искатель», «2 из 6» |\n| `points`, `toNext` | числа | Баллы 400 · До след. уровня 300 |\n\n**Карточка — ссылка в личный кабинет** (`onOpen`): вся карточка одна цель для клика. Наведение — подъём и тень, как у карточек курсов; фото внутри кольца чуть приближается, кольцо уровня становится толще. Нажатие — «вдавливание». С клавиатуры — Tab и Enter. Без `onOpen` карточка не кликабельна.\n\nЦвет кольца и «колбасок» — токены `--level-N-fill` / `--level-N-stripe` (страница «Цвета»)."}}}},o={render:t=>{const[n,m]=x.useState(0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(p,{...t,onOpen:()=>m(d=>d+1)}),e.jsx("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:n?`Открыли личный кабинет (${n})`:"Наведи и нажми на карточку"})]})}},r={name:"Последний уровень",args:{levelName:"Мастер",level:6,points:2400,toNext:0}},j=["Playground","ПоследнийУровень"];var a,u,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => {
    const [n, setN] = useState(0);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <ProfileCard {...args} onOpen={() => setN(x => x + 1)} />
        <span style={{
        fontFamily: "var(--font-family-body)",
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>{n ? \`Открыли личный кабинет (\${n})\` : "Наведи и нажми на карточку"}</span>
      </div>;
  }
}`,...(s=(u=o.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};var l,i,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Последний уровень",
  args: {
    levelName: "Мастер",
    level: 6,
    points: 2400,
    toNext: 0
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};export{o as Playground,j as __namedExportsOrder,P as default,r as ПоследнийУровень};
