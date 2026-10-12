import{r as c,j as o}from"./iframe-XQ_qeO9Z.js";import{C as p,R as y}from"./CourseRow-Bw6fYg1l.js";import{C as d}from"./courseData-D6Ua4v32.js";import"./preload-helper-C1FmrZbK.js";import"./FavoriteButton-Bbmb4ETI.js";import"./StopSquare-CqvMLRwJ.js";import"./index--oqSavUY.js";import"./ContextIsolator-DJke2nN-.js";import"./context-BSOHyiuZ.js";import"./ProgressRing-Ca5_V9hc.js";import"./useTruncated-B6hy5Aa6.js";import"./course-3-gX4Ok3xk.js";import"./course-4-bsGBpGWB.js";const a=d[0],_={title:"UI Kit/Карточки/CourseRow",id:"ui-kit-courserow",component:p,tags:["autodocs"],args:{title:a.title,image:a.image,duration:a.duration,progress:a.progress,favorite:!1},argTypes:{title:{control:"text",description:"Одна строка — дальше «…» и тултип с полным названием"},duration:{control:"text"},progress:{control:{type:"range",min:0,max:100,step:5},description:"Прогресс, %. Пусто — плашки нет"},favorite:{control:"boolean",description:"В избранном — звезда амбером"},image:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onFavoriteChange:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Курс строкой — вид «Списком» в реестре курсов. Те же части, что у `CourseCard`, в одну строку: картинка 120×68 (скругление 12), название `H3` в одну строку («…» и тултип, если не влезло), под ним `InfoTag` длительности и прогресса, справа `FavoriteButton tone="gray"`.\n\nВся строка открывает курс (`onOpen`), кроме звезды; наведение — фон gray-100 без скругления (линии между строками — прямые). Строки ставятся друг под другом в `RowList` — между ними линия gray-200. В макете списка нет — придумано по частям карточки.'}}},decorators:[t=>o.jsx("div",{style:{padding:24,background:"var(--color-surface)",borderRadius:30,maxWidth:900},children:o.jsx(t,{})})]},n={render:t=>{const[r,e]=c.useState(t.favorite??!1),[i,u]=c.useState(0);return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[o.jsx(y,{children:o.jsx(p,{...t,favorite:r,onFavoriteChange:e,onOpen:()=>u(C=>C+1)})}),o.jsxs("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:[r?"В избранном":"Не в избранном"," · открыли ",i," раз"]})]})}},s={name:"Список",render:()=>{const[t,r]=c.useState(Object.fromEntries(d.map(e=>[e.id,e.favorite])));return o.jsx(y,{children:d.slice(0,4).map(e=>o.jsx(p,{...e,favorite:t[e.id],onFavoriteChange:i=>r(u=>({...u,[e.id]:i}))},e.id))})}},B=["Playground","Список"];var l,m,f;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(f=(m=n.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var v,g,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};export{n as Playground,B as __namedExportsOrder,_ as default,s as Список};
