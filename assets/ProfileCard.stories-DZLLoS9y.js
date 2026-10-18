import{r as x,j as e}from"./iframe-BjwqOSi3.js";import{P as c}from"./ProfileCard-D3ZbplwU.js";import{E as f}from"./profileData-DZhnLGpr.js";import"./preload-helper-C1FmrZbK.js";import"./Avatar-DNopxRzE.js";import"./Surface-vBQ7GXA7.js";import"./LevelProgress-JDAgULMD.js";import"./SegmentedProgress-BHKH3-Ez.js";import"./StatValue-CaQDrAJX.js";import"./index-CGJuuq_M.js";const j={title:"UI Kit/Профиль/ProfileCard",id:"ui-kit-profilecard",component:c,tags:["autodocs"],args:f,argTypes:{name:{control:"text"},levelName:{control:"text"},level:{control:{type:"number",min:1,max:6}},total:{control:{type:"number",min:1,max:6}},points:{control:"number"},toNext:{control:"number",description:"0 — последний уровень: «До след. уровня» не показывается"},progress:{control:{type:"range",min:0,max:1,step:.05},description:"Доля текущего уровня; пусто — points / (points + toNext)"},photo:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},decorators:[t=>e.jsx("div",{style:{width:296,padding:24,background:"var(--color-background)"},children:e.jsx(t,{})})],parameters:{docs:{description:{component:"Карточка сотрудника. Подложка `Surface` (скругление 30, отступы 24), фото `Avatar` 100 в кольце цвета текущего уровня, через 16 — ФИО (Montserrat SemiBold 20 по центру), через 24 — `LevelProgress`.\n\n| Проп | Значения |\n|---|---|\n| `name` | текст |\n| `photo` | картинка |\n| `levelName`, `level`, `total` | «Искатель», 2, 6 |\n| `points`, `toNext` | числа |\n\n**Карточка — ссылка в личный кабинет** (`onOpen`): вся карточка одна цель для клика. Наведение — подъём и тень, как у карточек курсов; фото внутри кольца чуть приближается, кольцо уровня становится толще. Нажатие — «вдавливание». С клавиатуры — Tab и Enter. Без `onOpen` карточка не кликабельна.\n\nЦвет кольца и «колбасок» — токены `--level-N-fill` / `--level-N-stripe` (страница «Цвета»).\n\n**Широкая карточка** (место внутри от 300 — на телефоне и планшете, где она над Главной на всю ширину): горизонтально — фото 72 слева, ФИО справа по левому краю в 2–3 строки; ниже — уровень. Карточка подстраивается сама по своей ширине.\n\n`showPerson={false}` — без фото и ФИО, только уровень с «колбасками» (Главная на телефоне и планшете); вся карточка по-прежнему открывает личный кабинет."}}}},o={render:t=>{const[n,m]=x.useState(0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(c,{...t,onOpen:()=>m(d=>d+1)}),e.jsx("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:n?`Открыли личный кабинет (${n})`:"Наведи и нажми на карточку"})]})}},r={name:"Последний уровень",args:{levelName:"Мастер",level:6,points:2400,toNext:0}},O=["Playground","ПоследнийУровень"];var a,u,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(u=o.parameters)==null?void 0:u.docs)==null?void 0:s.source}}};var l,i,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Последний уровень",
  args: {
    levelName: "Мастер",
    level: 6,
    points: 2400,
    toNext: 0
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};export{o as Playground,O as __namedExportsOrder,j as default,r as ПоследнийУровень};
