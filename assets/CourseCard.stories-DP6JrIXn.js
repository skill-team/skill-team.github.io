import{r as g,j as e}from"./iframe-BffffG_H.js";import{C as a}from"./CourseCard-BZr_v-c3.js";import{C as r}from"./courseData-qdhqDJcR.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-ZJU5hvpi.js";import"./AssignedBadge-iHre6veX.js";import"./Archive-DVj9kiPb.js";import"./InfoTag-pTru7Vn7.js";import"./index-CLeoysUr.js";import"./ContextIsolator-2vX43eVK.js";import"./context-foqqPHjY.js";import"./FavoriteButton-eg93F9pj.js";import"./ProgressRing-CDntUi2Q.js";import"./course-1--YiCqOCo.js";import"./course-4-bsGBpGWB.js";import"./course-3-DSDYLXDH.js";const t=r[0],N={title:"UI Kit/Карточки/CourseCard",id:"ui-kit-coursecard",component:a,tags:["autodocs"],args:{title:t.title,image:t.image,duration:t.duration,progress:t.progress,favorite:!1},argTypes:{title:{control:"text",description:"Не больше 3 строк — дальше «…» и тултип с полным названием при наведении на текст"},duration:{control:"text"},progress:{control:{type:"range",min:0,max:100,step:5},description:"Прогресс, %. Пусто — плашки нет"},favorite:{control:"boolean",description:"В избранном — звезда амбером"},image:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onFavoriteChange:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Карточка курса — Figma Setl, Course card `2079:151010`. Ширина 297, белая, без обводки — лёгкая тень (в макете обводка 1), скругление 24, отступы 12 (в макете 16). Картинка 167 (скругление 12 — «в такт» карточке) с кнопкой `FavoriteButton`; название — Montserrat SemiBold 20 (стиль `H3`, как заголовок блока; в макете Bold), не больше 3 строк, дальше «…» и тултип кита с полным названием при наведении на текст (только если не влезло), прижато к верху (в макете к низу) — плашки снизу у всех карточек на одной высоте; внизу `InfoTag`: длительность и прогресс с `ProgressRing`.\n\n**Наведение** (в макете нет, придумано): карточка приподнимается на 2 px, тень становится глубже, картинка чуть приближается. **Нажатие** — карточка «вдавливается» обратно. Вся карточка — одна цель для клика (`onOpen`), кроме звезды. С клавиатуры — Tab на карточку, Enter открывает, кольцо фокуса вокруг карточки.\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| `title` | текст | название (3 строки) |\n| `image` | картинка | Image 167 |\n| `duration` | «10 минут» | Tag синий |\n| `progress` | 0…100; 100 — плашка «Курс завершен» вместо длительности и процента | Tag зелёный «50%» |\n| `favorite` | true / false | Favourites: звезда gray-main / амбер |"}}},decorators:[u=>e.jsx("div",{style:{padding:24,background:"var(--color-background)"},children:e.jsx(u,{})})]},s={render:u=>{const[n,o]=g.useState(u.favorite??!1),[I,j]=g.useState(0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"flex-start"},children:[e.jsx(a,{...u,favorite:n,onFavoriteChange:o,onOpen:()=>j(R=>R+1)}),e.jsxs("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:[n?"В избранном":"Не в избранном"," · открыли ",I," раз"]})]})}},i={name:"Длинное название",parameters:{docs:{story:{height:"420px"},description:{story:"Название не влезает в 3 строки — обрезается «…», при наведении на текст — тултип с полным названием. Короткое название (справа) — без тултипа."}}},render:()=>{const u=r.find(n=>n.id==="c5");return e.jsxs("div",{style:{display:"flex",gap:24,paddingTop:48},children:[e.jsx(a,{title:u.title,image:u.image,duration:u.duration,progress:u.progress}),e.jsx(a,{title:r[1].title,image:r[1].image,duration:r[1].duration,progress:r[1].progress})]})}},d={render:()=>e.jsx("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:r.slice(0,3).map((u,n)=>e.jsx(a,{title:u.title,image:u.image,duration:u.duration,progress:[0,50,100][n],favorite:n===0},u.id))})},p={name:"Курс завершен",parameters:{docs:{description:{story:"`progress` 100 — вместо длительности и процента одна зелёная плашка «Курс завершен» с галочкой (личный кабинет, «Моё обучение»). Слева — в процессе, справа — пройден."}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsx(a,{title:t.title,image:t.image,duration:t.duration,progress:35}),e.jsx(a,{title:r[1].title,image:r[1].image,duration:r[1].duration,progress:100})]})},l={name:"Назначен — срок на картинке",parameters:{docs:{description:{story:"`assigned` — плашка `AssignedBadge` слева напротив звезды: «до 20.10», «Сегодня», «Завтра», «Просрочено»; причина — в тултипе. В узкой карточке (телефон) плашка меньше, у «Просрочено» без иконки."}}},render:()=>{const u=n=>{const o=new Date;return o.setDate(o.getDate()+n),o.toISOString().slice(0,10)};return e.jsxs("div",{style:{display:"flex",gap:24,paddingTop:40,flexWrap:"wrap"},children:[e.jsx(a,{title:t.title,image:t.image,duration:t.duration,progress:20,assigned:{deadline:u(-4),reason:"Назначил руководитель"}}),e.jsx(a,{title:r[1].title,image:r[1].image,duration:r[1].duration,assigned:{deadline:u(1),reason:"Обязательное по должности"}})]})}},Q=["Playground","ДлинноеНазвание","Варианты","Завершен","Назначен"];var c,m,E;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(E=(m=s.parameters)==null?void 0:m.docs)==null?void 0:E.source}}};var x,B,D;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(D=(B=i.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var f,y,C;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 24,
    flexWrap: "wrap"
  }}>
      {COURSE_ITEMS.slice(0, 3).map((x, i) => <CourseCard key={x.id} title={x.title} image={x.image} duration={x.duration} progress={[0, 50, 100][i]} favorite={i === 0} />)}
    </div>
}`,...(C=(y=d.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var S,v,F;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(F=(v=p.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var A,O,T;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Назначен — срок на картинке",
  parameters: {
    docs: {
      description: {
        story: "\\\`assigned\\\` — плашка \\\`AssignedBadge\\\` слева напротив звезды: «до 20.10», «Сегодня», «Завтра», «Просрочено»; причина — в тултипе. В узкой карточке (телефон) плашка меньше, у «Просрочено» без иконки."
      }
    }
  },
  render: () => {
    const day = (n: number) => {
      const d = new Date();
      d.setDate(d.getDate() + n);
      return d.toISOString().slice(0, 10);
    };
    return <div style={{
      display: "flex",
      gap: 24,
      paddingTop: 40,
      flexWrap: "wrap"
    }}>
        <CourseCard title={c.title} image={c.image} duration={c.duration} progress={20} assigned={{
        deadline: day(-4),
        reason: "Назначил руководитель"
      }} />
        <CourseCard title={COURSE_ITEMS[1].title} image={COURSE_ITEMS[1].image} duration={COURSE_ITEMS[1].duration} assigned={{
        deadline: day(1),
        reason: "Обязательное по должности"
      }} />
      </div>;
  }
}`,...(T=(O=l.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};export{s as Playground,Q as __namedExportsOrder,N as default,d as Варианты,i as ДлинноеНазвание,p as Завершен,l as Назначен};
