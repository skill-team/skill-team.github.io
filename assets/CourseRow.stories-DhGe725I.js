import{r as l,j as u}from"./iframe-xHeXyRUt.js";import{C as c}from"./CourseRow-CufE1JW6.js";import{R as m}from"./ListRow-nZbbBl3p.js";import{C as r}from"./courseData-qdhqDJcR.js";import"./preload-helper-C1FmrZbK.js";import"./AssignedBadge-CMa6UbEF.js";import"./Archive-BNxmIM9q.js";import"./InfoTag-B9QBGaiU.js";import"./index-DAOdAdyQ.js";import"./ContextIsolator-BRwUpuIq.js";import"./context-YSLqM9pP.js";import"./FavoriteButton-DvnnaTL6.js";import"./ProgressRing-Cw0lDwmx.js";import"./useTruncated-DZT6EyQu.js";import"./course-1--YiCqOCo.js";import"./course-4-bsGBpGWB.js";import"./course-3-DSDYLXDH.js";const a=r[0],H={title:"UI Kit/Карточки/CourseRow",id:"ui-kit-courserow",component:c,tags:["autodocs"],args:{title:a.title,image:"С картинкой",duration:a.duration,progress:a.progress,favorite:!1},argTypes:{title:{control:"text",description:"До 2 строк — дальше «…» и тултип с полным названием"},duration:{control:"text"},progress:{control:{type:"range",min:0,max:100,step:5},description:"Прогресс, %. Пусто — плашки нет"},favorite:{control:"boolean",description:"В избранном — звезда амбером"},image:{control:"select",options:["С картинкой","Без картинки"],mapping:{"С картинкой":a.image,"Без картинки":void 0},description:"Необязательна: без неё — «Курсы по теме» в узкой колонке"},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onFavoriteChange:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Вариант общей строки `ListRow` — вид задаётся там, здесь только данные курса. Курс строкой — вид «Списком» в реестре курсов. Те же части, что у `CourseCard`, в одну строку: картинка 120×68 (скругление 12), название `H5` в 2 строки, как у документов и материалов («…» и тултип, если не влезло), под ним через 4 `InfoTag` длительности и прогресса, справа `FavoriteButton tone="gray"`.\n\nВся строка открывает курс (`onOpen`), кроме звезды; наведение — фон gray-100 без скругления (линии между строками — прямые). Строки ставятся друг под другом в `RowList` — между ними линия gray-200.'}}},decorators:[o=>u.jsx("div",{style:{padding:24,background:"var(--color-surface)",borderRadius:30,maxWidth:900},children:u.jsx(o,{})})]},n={render:o=>{const[t,e]=l.useState(o.favorite??!1),[d,p]=l.useState(0);return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[u.jsx(m,{children:u.jsx(c,{...o,favorite:t,onFavoriteChange:e,onOpen:()=>p(S=>S+1)})}),u.jsxs("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:[t?"В избранном":"Не в избранном"," · открыли ",d," раз"]})]})}},s={name:"Список",render:()=>{const[o,t]=l.useState(Object.fromEntries(r.map(e=>[e.id,e.favorite])));return u.jsx(m,{children:r.slice(0,4).map(e=>u.jsx(c,{...e,favorite:o[e.id],onFavoriteChange:d=>t(p=>({...p,[e.id]:d}))},e.id))})}},i={name:"Снят с публикации",parameters:{docs:{description:{story:"`unavailable` — картинка ч/б, название и плашки серые, вместо срока — «Снято с публикации» с замком (не помещается в ряд — коротко «Снято»; подробности — в тултипе); строка не открывается."}}},render:()=>u.jsx(m,{children:u.jsx(c,{title:r[0].title,image:r[0].image,duration:r[0].duration,progress:35,unavailable:!0})})},K=["Playground","Список","СнятСПубликации"];var v,f,g;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => {
    const [fav, setFav] = useState(args.favorite ?? false);
    const [opened, setOpened] = useState(0);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <RowList>
          <CourseRow {...args} favorite={fav} onFavoriteChange={setFav} onOpen={() => setOpened(n => n + 1)} />
        </RowList>
        <span style={{
        fontFamily: "var(--font-family-body)",
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>
          {fav ? "В избранном" : "Не в избранном"} · открыли {opened} раз
        </span>
      </div>;
  }
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var E,x,y;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Список",
  render: () => {
    const [fav, setFav] = useState<Record<string, boolean>>(Object.fromEntries(COURSE_ITEMS.map(x => [x.id, x.favorite])));
    return <RowList>
        {COURSE_ITEMS.slice(0, 4).map(x => <CourseRow key={x.id} {...x} favorite={fav[x.id]} onFavoriteChange={v => setFav(s => ({
        ...s,
        [x.id]: v
      }))} />)}
      </RowList>;
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var F,C,R;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Снят с публикации",
  parameters: {
    docs: {
      description: {
        story: "\\\`unavailable\\\` — картинка ч/б, название и плашки серые, вместо срока — «Снято с публикации» с замком (не помещается в ряд — коротко «Снято»; подробности — в тултипе); строка не открывается."
      }
    }
  },
  render: () => <RowList>
      <CourseRow title={COURSE_ITEMS[0].title} image={COURSE_ITEMS[0].image} duration={COURSE_ITEMS[0].duration} progress={35} unavailable />
    </RowList>
}`,...(R=(C=i.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};export{n as Playground,K as __namedExportsOrder,H as default,i as СнятСПубликации,s as Список};
