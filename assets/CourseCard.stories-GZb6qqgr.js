import{r as g,j as u}from"./iframe-wfJ_y6tk.js";import{C as a}from"./CourseCard-CneO8gBR.js";import{C as t}from"./courseData-qdhqDJcR.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-BK8cY36k.js";import"./AssignedBadge-DBDPFo5k.js";import"./Archive-Ban5Sfu5.js";import"./InfoTag-BAAPDPgL.js";import"./index-DK8SjL2j.js";import"./ContextIsolator-8G1DI5TY.js";import"./context-BtIUxdFu.js";import"./FavoriteButton-eaF04spG.js";import"./ProgressRing-KegNBJRC.js";import"./course-1--YiCqOCo.js";import"./course-4-bsGBpGWB.js";import"./course-3-DSDYLXDH.js";const r=t[0],Y={title:"UI Kit/Карточки/CourseCard",id:"ui-kit-coursecard",component:a,tags:["autodocs"],args:{title:r.title,image:r.image,duration:r.duration,progress:r.progress,favorite:!1},argTypes:{title:{control:"text",description:"Не больше 3 строк — дальше «…» и тултип с полным названием при наведении на текст"},duration:{control:"text"},progress:{control:{type:"range",min:0,max:100,step:5},description:"Прогресс, %. Пусто — плашки нет"},favorite:{control:"boolean",description:"В избранном — звезда амбером"},image:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onFavoriteChange:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Карточка курса. Ширина 297, белая, без обводки — лёгкая тень, скругление 24, отступы 12. Картинка 167 (скругление 12 — «в такт» карточке) с кнопкой `FavoriteButton`; название — Montserrat SemiBold 20, не больше 3 строк, дальше «…» и тултип кита с полным названием при наведении на текст (только если не влезло), прижато к верху — плашки снизу у всех карточек на одной высоте; внизу `InfoTag`: длительность и прогресс с `ProgressRing`.\n\n**Наведение**: карточка приподнимается на 2 px, тень становится глубже, картинка чуть приближается. **Нажатие** — карточка «вдавливается» обратно. Вся карточка — одна цель для клика (`onOpen`), кроме звезды. С клавиатуры — Tab на карточку, Enter открывает, кольцо фокуса вокруг карточки.\n\n| Проп | Значения |\n|---|---|\n| `title` | текст |\n| `image` | картинка |\n| `duration` | «10 минут» |\n| `progress` | 0…100; 100 — плашка «Курс завершен» вместо длительности и процента |\n| `favorite` | true / false |"}}},decorators:[e=>u.jsx("div",{style:{padding:24,background:"var(--color-background)"},children:u.jsx(e,{})})]},o={render:e=>{const[n,s]=g.useState(e.favorite??!1),[R,_]=g.useState(0);return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"flex-start"},children:[u.jsx(a,{...e,favorite:n,onFavoriteChange:s,onOpen:()=>_(M=>M+1)}),u.jsxs("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:[n?"В избранном":"Не в избранном"," · открыли ",R," раз"]})]})}},i={name:"Длинное название",parameters:{docs:{story:{height:"420px"},description:{story:"Название не влезает в 3 строки — обрезается «…», при наведении на текст — тултип с полным названием. Короткое название (справа) — без тултипа."}}},render:()=>{const e=t.find(n=>n.id==="c5");return u.jsxs("div",{style:{display:"flex",gap:24,paddingTop:48},children:[u.jsx(a,{title:e.title,image:e.image,duration:e.duration,progress:e.progress}),u.jsx(a,{title:t[1].title,image:t[1].image,duration:t[1].duration,progress:t[1].progress})]})}},d={render:()=>u.jsx("div",{style:{display:"flex",gap:24,flexWrap:"wrap"},children:t.slice(0,3).map((e,n)=>u.jsx(a,{title:e.title,image:e.image,duration:e.duration,progress:[0,50,100][n],favorite:n===0},e.id))})},l={name:"Курс завершен",parameters:{docs:{description:{story:"`progress` 100 — вместо длительности и процента одна зелёная плашка «Курс завершен» с галочкой (личный кабинет, «Моё обучение»). Слева — в процессе, справа — пройден."}}},render:()=>u.jsxs("div",{style:{display:"flex",gap:24},children:[u.jsx(a,{title:r.title,image:r.image,duration:r.duration,progress:35}),u.jsx(a,{title:t[1].title,image:t[1].image,duration:t[1].duration,progress:100})]})},p={name:"Назначен — срок на картинке",parameters:{docs:{description:{story:"`assigned` — плашка `AssignedBadge` слева напротив звезды: «до 20.10», «Сегодня», «Завтра», «Просрочено»; причина — в тултипе. В узкой карточке (телефон) плашка меньше, у «Просрочено» без иконки."}}},render:()=>{const e=n=>{const s=new Date;return s.setDate(s.getDate()+n),s.toISOString().slice(0,10)};return u.jsxs("div",{style:{display:"flex",gap:24,paddingTop:40,flexWrap:"wrap"},children:[u.jsx(a,{title:r.title,image:r.image,duration:r.duration,progress:20,assigned:{deadline:e(-4),reason:"Назначил руководитель"}}),u.jsx(a,{title:t[1].title,image:t[1].image,duration:t[1].duration,assigned:{deadline:e(1),reason:"Обязательное по должности"}})]})}},c={name:"Снят с публикации",parameters:{docs:{description:{story:"`unavailable` — курс начали, а его убрали в архив: картинка ч/б и бледнее, по центру замок, плашка «Снято с публикации» (подробности — в тултипе), название и плашки серые; карточка не открывается и не приподнимается, звезду снять можно. В узкой карточке (телефон) плашка — внизу картинки. Справа — узкая."}}},render:()=>u.jsxs("div",{style:{display:"flex",gap:24,alignItems:"flex-start"},children:[u.jsx(a,{title:r.title,image:r.image,duration:r.duration,progress:35,unavailable:!0}),u.jsx("div",{style:{width:170},children:u.jsx(a,{title:r.title,image:r.image,duration:r.duration,progress:35,unavailable:!0})})]})},Z=["Playground","ДлинноеНазвание","Варианты","Завершен","Назначен","СнятСПубликации"];var m,E,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(x=(E=o.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var D,B,y;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(y=(B=i.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var f,C,v;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 24,
    flexWrap: "wrap"
  }}>
      {COURSE_ITEMS.slice(0, 3).map((x, i) => <CourseCard key={x.id} title={x.title} image={x.image} duration={x.duration} progress={[0, 50, 100][i]} favorite={i === 0} />)}
    </div>
}`,...(v=(C=d.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var A,F,S;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(S=(F=l.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var O,j,I;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(I=(j=p.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var T,h,b;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Снят с публикации",
  parameters: {
    docs: {
      description: {
        story: "\\\`unavailable\\\` — курс начали, а его убрали в архив: картинка ч/б и бледнее, по центру замок, плашка «Снято с публикации» (подробности — в тултипе), название и плашки серые; карточка не открывается и не приподнимается, звезду снять можно. В узкой карточке (телефон) плашка — внизу картинки. Справа — узкая."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    gap: 24,
    alignItems: "flex-start"
  }}>
      <CourseCard title={c.title} image={c.image} duration={c.duration} progress={35} unavailable />
      <div style={{
      width: 170
    }}>
        <CourseCard title={c.title} image={c.image} duration={c.duration} progress={35} unavailable />
      </div>
    </div>
}`,...(b=(h=c.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};export{o as Playground,Z as __namedExportsOrder,Y as default,d as Варианты,i as ДлинноеНазвание,l as Завершен,p as Назначен,c as СнятСПубликации};
