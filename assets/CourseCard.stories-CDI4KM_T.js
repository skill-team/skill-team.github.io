import{r as p,j as e}from"./iframe-CFCi-G_z.js";import{C as a}from"./CourseCard-BcAZh54R.js";import{C as r}from"./courseData-D6Ua4v32.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-D3AOnDGh.js";import"./FavoriteButton-DZiV3SXb.js";import"./Archive-CVku2Y2A.js";import"./index-zH042xrC.js";import"./ContextIsolator-DRazcLis.js";import"./context-x6QakU1z.js";import"./InfoTag-CwntD4rb.js";import"./ProgressRing-D43w80M8.js";import"./course-3-gX4Ok3xk.js";import"./course-4-bsGBpGWB.js";const o=r[0],H={title:"UI Kit/Карточки/CourseCard",id:"ui-kit-coursecard",component:a,tags:["autodocs"],args:{title:o.title,image:o.image,duration:o.duration,progress:o.progress,favorite:!1},argTypes:{title:{control:"text",description:"Не больше 3 строк — дальше «…» и тултип с полным названием при наведении на текст"},duration:{control:"text"},progress:{control:{type:"range",min:0,max:100,step:5},description:"Прогресс, %. Пусто — плашки нет"},favorite:{control:"boolean",description:"В избранном — звезда амбером"},image:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onFavoriteChange:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Карточка курса — Figma Setl, Course card `2079:151010`. Ширина 297, белая, без обводки — лёгкая тень (в макете обводка 1), скругление 24, отступы 12 (в макете 16). Картинка 167 (скругление 12 — «в такт» карточке) с кнопкой `FavoriteButton`; название — Montserrat SemiBold 20 (стиль `H3`, как заголовок блока; в макете Bold), не больше 3 строк, дальше «…» и тултип кита с полным названием при наведении на текст (только если не влезло), прижато к верху (в макете к низу) — плашки снизу у всех карточек на одной высоте; внизу `InfoTag`: длительность и прогресс с `ProgressRing`.\n\n**Наведение** (в макете нет, придумано): карточка приподнимается на 2 px, тень становится глубже, картинка чуть приближается. **Нажатие** — карточка «вдавливается» обратно. Вся карточка — одна цель для клика (`onOpen`), кроме звезды. С клавиатуры — Tab на карточку, Enter открывает, кольцо фокуса вокруг карточки.\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| `title` | текст | название (3 строки) |\n| `image` | картинка | Image 167 |\n| `duration` | «10 минут» | Tag синий |\n| `progress` | 0…100; 100 — плашка «Курс завершен» вместо длительности и процента | Tag зелёный «50%» |\n| `favorite` | true / false | Favourites: звезда gray-main / амбер |"}}},decorators:[u=>e.jsx("div",{style:{padding:24,background:"var(--color-background)"},children:e.jsx(u,{})})]},n={render:u=>{const[t,B]=p.useState(u.favorite??!1),[F,O]=p.useState(0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"flex-start"},children:[e.jsx(a,{...u,favorite:t,onFavoriteChange:B,onOpen:()=>O(T=>T+1)}),e.jsxs("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:[t?"В избранном":"Не в избранном"," · открыли ",F," раз"]})]})}},s={name:"Длинное название",parameters:{docs:{story:{height:"420px"},description:{story:"Название не влезает в 3 строки — обрезается «…», при наведении на текст — тултип с полным названием. Короткое название (справа) — без тултипа."}}},render:()=>{const u=r.find(t=>t.id==="c5");return e.jsxs("div",{style:{display:"flex",gap:24,paddingTop:48},children:[e.jsx(a,{title:u.title,image:u.image,duration:u.duration,progress:u.progress}),e.jsx(a,{title:r[1].title,image:r[1].image,duration:r[1].duration,progress:r[1].progress})]})}},i={render:()=>e.jsx("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:r.slice(0,3).map((u,t)=>e.jsx(a,{title:u.title,image:u.image,duration:u.duration,progress:[0,50,100][t],favorite:t===0},u.id))})},d={name:"Курс завершен",parameters:{docs:{description:{story:"`progress` 100 — вместо длительности и процента одна зелёная плашка «Курс завершен» с галочкой (личный кабинет, «Моё обучение»). Слева — в процессе, справа — пройден."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsx(a,{title:o.title,image:o.image,duration:o.duration,progress:35}),e.jsx(a,{title:r[1].title,image:r[1].image,duration:r[1].duration,progress:100})]})},K=["Playground","ДлинноеНазвание","Варианты","Завершен"];var l,c,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const [fav, setFav] = useState(args.favorite ?? false);
    const [opened, setOpened] = useState(0);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start"
    }}>
        <CourseCard {...args} favorite={fav} onFavoriteChange={setFav} onOpen={() => setOpened(n => n + 1)} />
        <span style={{
        fontFamily: "var(--font-family-body)",
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>
          {fav ? "В избранном" : "Не в избранном"} · открыли {opened} раз
        </span>
      </div>;
  }
}`,...(g=(c=n.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,x,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Длинное название",
  parameters: {
    docs: {
      story: {
        height: "420px"
      },
      description: {
        story: "Название не влезает в 3 строки — обрезается «…», при наведении на текст — тултип с полным названием. Короткое название (справа) — без тултипа."
      }
    }
  },
  render: () => {
    const long = COURSE_ITEMS.find(x => x.id === "c5")!;
    return <div style={{
      display: "flex",
      gap: 24,
      paddingTop: 48
    }}>
        <CourseCard title={long.title} image={long.image} duration={long.duration} progress={long.progress} />
        <CourseCard title={COURSE_ITEMS[1].title} image={COURSE_ITEMS[1].image} duration={COURSE_ITEMS[1].duration} progress={COURSE_ITEMS[1].progress} />
      </div>;
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var E,y,v;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 24,
    flexWrap: "wrap"
  }}>
      {COURSE_ITEMS.slice(0, 3).map((x, i) => <CourseCard key={x.id} title={x.title} image={x.image} duration={x.duration} progress={[0, 50, 100][i]} favorite={i === 0} />)}
    </div>
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var C,D,S;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Курс завершен",
  parameters: {
    docs: {
      description: {
        story: "\\\`progress\\\` 100 — вместо длительности и процента одна зелёная плашка «Курс завершен» с галочкой (личный кабинет, «Моё обучение»). Слева — в процессе, справа — пройден."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    gap: 24
  }}>
      <CourseCard title={c.title} image={c.image} duration={c.duration} progress={35} />
      <CourseCard title={COURSE_ITEMS[1].title} image={COURSE_ITEMS[1].image} duration={COURSE_ITEMS[1].duration} progress={100} />
    </div>
}`,...(S=(D=d.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};export{n as Playground,K as __namedExportsOrder,H as default,i as Варианты,s as ДлинноеНазвание,d as Завершен};
