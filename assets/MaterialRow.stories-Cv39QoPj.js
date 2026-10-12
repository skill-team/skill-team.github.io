import{r as u,j as t}from"./iframe-CFCi-G_z.js";import{R as y}from"./CourseRow-C4icJGeS.js";import{M as l}from"./MaterialRow-DfFE_ygS.js";import{c as S}from"./course-3-gX4Ok3xk.js";import{R}from"./materialsData-X1IdPTrq.js";import"./preload-helper-C1FmrZbK.js";import"./FavoriteButton-DZiV3SXb.js";import"./Archive-CVku2Y2A.js";import"./index-zH042xrC.js";import"./ContextIsolator-DRazcLis.js";import"./context-x6QakU1z.js";import"./InfoTag-CwntD4rb.js";import"./useTruncated-D3AOnDGh.js";import"./ProgressRing-D43w80M8.js";const a=R[1],B={title:"UI Kit/Карточки/MaterialRow",id:"ui-kit-materialrow",component:l,tags:["autodocs"],args:{title:a.title,text:a.text,date:a.date,theme:a.theme,image:void 0,favorite:!1},argTypes:{title:{control:"text",description:"Одна строка — дальше «…» и тултип с полным названием"},text:{control:"text",description:"Одна строка — дальше «…»"},date:{control:"text"},theme:{control:"text",description:"Тема — после даты через «·». Пусто — только дата (напр. когда реестр уже отфильтрован по теме)"},image:{control:"inline-radio",options:["Без обложки","С обложкой"],mapping:{"Без обложки":void 0,"С обложкой":S},description:"Справа, перед звездой; нет обложки — нет и места под неё"},favorite:{control:"boolean",description:"В избранном — звезда амбером"},onFavoriteChange:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Материал «Базы знаний» строкой — вид «Списком» в реестре базы знаний. Устроена как `NewsRow`: слева надпись «дата · тема» (`Caption Small` прописными, с разрядкой, gray-main), название `H5` в одну строку («…» и тултип, если не влезло), описание `P3` в одну строку с «…»; справа обложка 120×68 — только если есть — и звезда `FavoriteButton tone="gray"`.\n\nВся строка открывает материал (`onOpen`), кроме звезды; наведение — фон gray-100 без скругления. Строки — в `RowList` (из `CourseRow`). Вид «Карточками» в том же реестре — `NewsCard` со звездой в `actions`. В макете Setl реестра базы знаний нет — собрано по образцу строки новости.'}}},decorators:[o=>t.jsx("div",{style:{padding:24,background:"var(--color-surface)",borderRadius:30,maxWidth:900},children:t.jsx(o,{})})]},n={render:o=>{const[r,i]=u.useState(o.favorite??!1),[e,c]=u.useState(0);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[t.jsx(y,{children:t.jsx(l,{...o,favorite:r,onFavoriteChange:i,onOpen:()=>c(d=>d+1)})}),t.jsxs("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:[r?"В избранном":"Не в избранном"," · открыли ",e," раз"]})]})}},s={name:"Список",render:()=>{const o=R.slice(0,5),[r,i]=u.useState(Object.fromEntries(o.map(e=>[e.id,e.favorite])));return t.jsx(y,{children:o.map(e=>t.jsx(l,{...e,favorite:r[e.id],onFavoriteChange:c=>i(d=>({...d,[e.id]:c}))},e.id))})}},_=["Playground","Список"];var m,p,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(p=n.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var v,x,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};export{n as Playground,_ as __namedExportsOrder,B as default,s as Список};
