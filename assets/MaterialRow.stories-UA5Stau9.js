import{r as c,j as t}from"./iframe-wfJ_y6tk.js";import{R as g}from"./ListRow-DQrnKcXR.js";import{M as d}from"./MaterialRow-G5yqbvRo.js";import{R as y}from"./materialsData-DO952muv.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-BK8cY36k.js";import"./index-DK8SjL2j.js";import"./ContextIsolator-8G1DI5TY.js";import"./context-BtIUxdFu.js";import"./FavoriteButton-eaF04spG.js";import"./Archive-Ban5Sfu5.js";import"./course-1--YiCqOCo.js";import"./course-3-DSDYLXDH.js";const R=y[1],I={title:"UI Kit/Карточки/MaterialRow",id:"ui-kit-materialrow",component:d,tags:["autodocs"],args:{title:R.title,favorite:!1},argTypes:{title:{control:"text",description:"Целиком, переносится — без «…»"},favorite:{control:"boolean",description:"В избранном — звезда амбером"},onFavoriteChange:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Вариант общей строки `ListRow` — вид задаётся там, здесь только данные материала. Материал «Базы знаний» строкой — вид «Списком» в реестре базы знаний, «Другие материалы», «По теме». Только название `H5` целиком (без «…», переносится) и звезда `FavoriteButton tone="gray"`: дата, тема, описание и обложка — в превью сбоку и на странице материала (заказчики 2026-10-21 — «вычистить построчную версию»).\n\nВся строка открывает материал (`onOpen`), кроме звезды; наведение — фон gray-100 без скругления. Строки — в `RowList` (из `CourseRow`). Вид «Карточками» в том же реестре — `NewsCard` со звездой в `actions`.'}}},decorators:[o=>t.jsx("div",{style:{padding:24,background:"var(--color-surface)",borderRadius:30,maxWidth:900},children:t.jsx(o,{})})]},a={render:o=>{const[r,s]=c.useState(o.favorite??!1),[e,i]=c.useState(0);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[t.jsx(g,{children:t.jsx(d,{...o,favorite:r,onFavoriteChange:s,onOpen:()=>i(u=>u+1)})}),t.jsxs("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:[r?"В избранном":"Не в избранном"," · открыли ",e," раз"]})]})}},n={name:"Список",render:()=>{const o=y.slice(0,5),[r,s]=c.useState(Object.fromEntries(o.map(e=>[e.id,e.favorite])));return t.jsx(g,{children:o.map(e=>t.jsx(d,{...e,favorite:r[e.id],onFavoriteChange:i=>s(u=>({...u,[e.id]:i}))},e.id))})}},T=["Playground","Список"];var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const [fav, setFav] = useState(args.favorite ?? false);
    const [opened, setOpened] = useState(0);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <RowList>
          <MaterialRow {...args} favorite={fav} onFavoriteChange={setFav} onOpen={() => setOpened(n => n + 1)} />
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
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,v,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Список",
  render: () => {
    const items = REGISTRY_MATERIALS.slice(0, 5);
    const [fav, setFav] = useState<Record<string, boolean>>(Object.fromEntries(items.map(x => [x.id, x.favorite])));
    return <RowList>
        {items.map(x => <MaterialRow key={x.id} {...x} favorite={fav[x.id]} onFavoriteChange={v => setFav(s => ({
        ...s,
        [x.id]: v
      }))} />)}
      </RowList>;
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};export{a as Playground,T as __namedExportsOrder,I as default,n as Список};
