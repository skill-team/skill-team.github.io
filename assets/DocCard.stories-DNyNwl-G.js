import{r as p,j as o}from"./iframe-SVfPbzFv.js";import{D as u}from"./DocActions-DC-uSD6b.js";import{D as n}from"./DocCard-BwdvgIJd.js";import{C as R}from"./CardGrid-z9A7XB08.js";import{R as a}from"./docsData-mYB44mym.js";import"./preload-helper-C1FmrZbK.js";import"./FavoriteButton-3Hj1RULp.js";import"./Archive-qpMJ2fkA.js";import"./index-iXG8bMil.js";import"./ContextIsolator-DVAd3_hO.js";import"./context-b9bVuTgo.js";import"./DropdownMenu-BJVgU_sb.js";import"./Scrollbar-BPGkC5Ii.js";import"./DropdownMenuItem-cU0Pqmjq.js";import"./Radio-DEGjtoFY.js";import"./index-A7u8B3sC.js";import"./pickAttrs-YwQEXnsv.js";import"./useCSSVarCls-PcVuGvWx.js";import"./useForm-D6pkhWSI.js";import"./index-ClobrATS.js";import"./index-DpOdeDm_.js";import"./KeyCode-lh1qUinJ.js";import"./PurePanel-BLSEBBsY.js";import"./index-BPPBIC-X.js";import"./Overflow-CByeVqLZ.js";import"./collapse-BbEVqHco.js";import"./move-BhyhAd8i.js";import"./FileTypeBadge-YCAdbyE3.js";import"./Spinner-DZRnUrkQ.js";const v=a[0],re={title:"UI Kit/Карточки/DocCard",id:"ui-kit-doccard",component:n,tags:["autodocs"],args:{type:v.type,title:v.title},argTypes:{type:{control:"inline-radio",options:["pdf","docx","xlsx","pptx","zip","mp4"]},title:{control:"text",description:"До 3 строк — дальше «…»"},actions:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Документ карточкой — реестр документов и «Избранное», вид «карточками» (вместо карточек таблицы). Сверху плашка типа (PDF, DOCX…), название H5 до 3 строк, внизу кнопки `DocActions`: «Скачать» иконкой, звезда, «⋮» (документ только для просмотра — `download="none"`, без «Скачать»). Даты и категории нет — как в строке `DocRow`. Белая карточка 24 с тенью, вся открывает документ; наведение — подъём и тень. Сетка — `CardGrid`, как у курсов и новостей.'}}},decorators:[t=>o.jsx("div",{style:{width:320,padding:24,background:"var(--color-background)",borderRadius:24},children:o.jsx(t,{})})]},i={render:t=>{const[r,e]=p.useState(!1);return o.jsx(n,{...t,actions:o.jsx(u,{download:"icon",favorite:r,onFavoriteChange:e,withOpen:!0})})}},s={name:"Сеткой",decorators:[t=>o.jsx("div",{style:{width:980,padding:24,background:"var(--color-surface)",borderRadius:24},children:o.jsx(t,{})})],render:()=>{const[t,r]=p.useState(Object.fromEntries(a.map(e=>[e.id,e.favorite])));return o.jsx(R,{items:a.slice(0,6),getKey:e=>e.id,renderItem:e=>o.jsx(n,{type:e.type,title:e.title,actions:o.jsx(u,{download:e.downloadable?"icon":"none",favorite:!!t[e.id],onFavoriteChange:m=>r(l=>({...l,[e.id]:m})),withOpen:!0})})})}},d={name:"На телефоне — по 2 в ряд",decorators:[t=>o.jsx("div",{style:{width:366,padding:12,background:"var(--color-surface)",borderRadius:24},children:o.jsx(t,{})})],render:()=>{const[t,r]=p.useState(Object.fromEntries(a.map(e=>[e.id,e.favorite])));return o.jsx(R,{items:a.slice(0,4),getKey:e=>e.id,compact:!0,renderItem:e=>o.jsx(n,{type:e.type,title:e.title,actions:o.jsx(u,{download:e.downloadable?"icon":"none",favorite:!!t[e.id],onFavoriteChange:m=>r(l=>({...l,[e.id]:m})),withOpen:!0})})})}},c={name:"Сотрудник — без «⋮»",render:t=>{const[r,e]=p.useState(!1);return o.jsx(n,{...t,actions:o.jsx(u,{admin:!1,download:"icon",favorite:r,onFavoriteChange:e})})}},ae=["Playground","Сетка","Телефон","Сотрудник"];var f,g,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const [fav, setFav] = useState(false);
    return <DocCard {...args} actions={<DocActions download="icon" favorite={fav} onFavoriteChange={setFav} withOpen />} />;
  }
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,S,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Сеткой",
  decorators: [Story => <div style={{
    width: 980,
    padding: 24,
    background: "var(--color-surface)",
    borderRadius: 24
  }}>
        <Story />
      </div>],
  render: () => {
    const [fav, setFav] = useState<Record<string, boolean>>(Object.fromEntries(REGISTRY_DOCS.map(x => [x.id, x.favorite])));
    return <CardGrid items={REGISTRY_DOCS.slice(0, 6)} getKey={x => x.id} renderItem={x => <DocCard type={x.type} title={x.title} actions={<DocActions download={x.downloadable ? "icon" : "none"} favorite={!!fav[x.id]} onFavoriteChange={v => setFav(s => ({
      ...s,
      [x.id]: v
    }))} withOpen />} />} />;
  }
}`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var C,D,b;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "На телефоне — по 2 в ряд",
  decorators: [Story => <div style={{
    width: 366,
    padding: 12,
    background: "var(--color-surface)",
    borderRadius: 24
  }}>
        <Story />
      </div>],
  render: () => {
    const [fav, setFav] = useState<Record<string, boolean>>(Object.fromEntries(REGISTRY_DOCS.map(x => [x.id, x.favorite])));
    return <CardGrid items={REGISTRY_DOCS.slice(0, 4)} getKey={x => x.id} compact renderItem={x => <DocCard type={x.type} title={x.title} actions={<DocActions download={x.downloadable ? "icon" : "none"} favorite={!!fav[x.id]} onFavoriteChange={v => setFav(s => ({
      ...s,
      [x.id]: v
    }))} withOpen />} />} />;
  }
}`,...(b=(D=d.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var F,h,j;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Сотрудник — без «⋮»",
  render: args => {
    const [fav, setFav] = useState(false);
    return <DocCard {...args} actions={<DocActions admin={false} download="icon" favorite={fav} onFavoriteChange={setFav} />} />;
  }
}`,...(j=(h=c.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};export{i as Playground,ae as __namedExportsOrder,re as default,s as Сетка,c as Сотрудник,d as Телефон};
