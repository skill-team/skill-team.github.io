import{r as d,j as r}from"./iframe-DCXgeGQz.js";import{C as t,a as o}from"./courseData-BVEPplZ_.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-RsVvaZAD.js";import"./FavoriteButton-Dcu0BHEH.js";import"./Upload-CUGaEg8S.js";import"./index-DsToMKrP.js";import"./context-Cf_eQdng.js";import"./ProgressRing-cbP8rus2.js";const a=t[0],_={title:"UI Kit/Карточки/CourseCard",id:"ui-kit-coursecard",component:o,tags:["autodocs"],args:{title:a.title,image:a.image,duration:a.duration,progress:a.progress,favorite:!1},argTypes:{title:{control:"text",description:"Не больше 3 строк — дальше «…» и тултип с полным названием при наведении на текст"},duration:{control:"text"},progress:{control:{type:"range",min:0,max:100,step:5},description:"Прогресс, %. Пусто — плашки нет"},favorite:{control:"boolean",description:"В избранном — звезда амбером"},image:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onFavoriteChange:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Карточка курса — Figma Setl, Course card `2079:151010`. Ширина 297, белая, без обводки — лёгкая тень (в макете обводка), скругление 24, отступы 12 (в макете 16). Картинка 167 с кнопкой `FavoriteButton`; название — Montserrat SemiBold 20 (стиль `H3`, как заголовок блока; в макете Bold), не больше 3 строк, дальше «…» и тултип кита с полным названием при наведении на текст (только если не влезло), прижато к верху (в макете к низу) — плашки снизу у всех карточек на одной высоте; внизу `InfoTag`: длительность и прогресс с `ProgressRing`.\n\n**Наведение** (в макете нет, придумано): карточка приподнимается на 2 px, тень глубже, картинка чуть приближается. **Нажатие** — карточка «вдавливается» обратно. Вся карточка — одна цель для клика (`onOpen`), кроме звезды. С клавиатуры — Tab на карточку, Enter открывает, кольцо фокуса вокруг карточки.\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| `title` | текст | название (3 строки) |\n| `image` | картинка | Image 167 |\n| `duration` | «10 минут» | Tag синий |\n| `progress` | 0…100 | Tag зелёный «50%» |\n| `favorite` | true / false | Favourites: звезда gray-650 / амбер |"}}},decorators:[e=>r.jsx("div",{style:{padding:24,background:"var(--color-background)"},children:r.jsx(e,{})})]},n={render:e=>{const[u,C]=d.useState(e.favorite??!1),[E,S]=d.useState(0);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"flex-start"},children:[r.jsx(o,{...e,favorite:u,onFavoriteChange:C,onOpen:()=>S(D=>D+1)}),r.jsxs("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:[u?"В избранном":"Не в избранном"," · открыли ",E," раз"]})]})}},s={name:"Длинное название",parameters:{docs:{story:{height:"420px"},description:{story:"Название не влезает в 3 строки — обрезается «…», при наведении на текст — тултип с полным названием. Короткое название (справа) — без тултипа."}}},render:()=>{const e=t.find(u=>u.id==="c5");return r.jsxs("div",{style:{display:"flex",gap:24,paddingTop:48},children:[r.jsx(o,{title:e.title,image:e.image,duration:e.duration,progress:e.progress}),r.jsx(o,{title:t[1].title,image:t[1].image,duration:t[1].duration,progress:t[1].progress})]})}},i={render:()=>r.jsx("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:t.slice(0,3).map((e,u)=>r.jsx(o,{title:e.title,image:e.image,duration:e.duration,progress:[0,50,100][u],favorite:u===0},e.id))})},M=["Playground","ДлинноеНазвание","Варианты"];var l,p,c;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var g,m,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(m=s.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var x,v,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 24,
    flexWrap: "wrap"
  }}>
      {COURSE_ITEMS.slice(0, 3).map((x, i) => <CourseCard key={x.id} title={x.title} image={x.image} duration={x.duration} progress={[0, 50, 100][i]} favorite={i === 0} />)}
    </div>
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};export{n as Playground,M as __namedExportsOrder,_ as default,i as Варианты,s as ДлинноеНазвание};
