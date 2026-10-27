import{r as v,j as t}from"./iframe-DF43zbcH.js";import{D as f}from"./DocActions-CislEUJR.js";import{D as s}from"./DocCard-DEsQ7RyQ.js";import{C as w}from"./CardGrid-qmS0ul9Q.js";import{R as d}from"./docsData-mYB44mym.js";import"./preload-helper-C1FmrZbK.js";import"./FavoriteButton-CUBxMJhw.js";import"./Archive-NbaJro7L.js";import"./index-Dc-2W6eP.js";import"./ContextIsolator-CGgXIIAn.js";import"./context-Bvlc22x8.js";import"./DropdownMenu-Cd7TjhJQ.js";import"./Scrollbar-DaPov4DG.js";import"./DropdownMenuItem-DCYzNhbT.js";import"./Radio-BRGAXydT.js";import"./index-ecjyLzFu.js";import"./pickAttrs-D5cNfL7C.js";import"./useCSSVarCls-BWHCu96H.js";import"./useForm-oNyCIUHi.js";import"./index-BT35_YIn.js";import"./index-_Yeg93Pq.js";import"./KeyCode-lh1qUinJ.js";import"./PurePanel-DxMQ-kIt.js";import"./index-DjYQmJJm.js";import"./Overflow-Cc1AujC4.js";import"./collapse-BbEVqHco.js";import"./move-vXhFOdPM.js";import"./FileTypeBadge-CFNmaWvf.js";import"./Spinner-CIF-PKWR.js";const e=d[0],V={title:"UI Kit/Карточки/DocCard",id:"ui-kit-doccard",component:s,tags:["autodocs"],args:{type:e.type,title:e.title,date:e.date,category:e.category},argTypes:{type:{control:"inline-radio",options:["pdf","docx","xlsx","pptx","zip","mp4"]},title:{control:"text",description:"До 3 строк — дальше «…»"},date:{control:"text"},category:{control:"text",description:"Категория после даты; уже выбрана фильтром — не передавать"},actions:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onDownload:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Документ карточкой — реестр документов и «Избранное», вид «карточками» (вместо карточек таблицы). Те же части, что у строки `DocRow`, столбиком: плашка типа и кнопки (`DocActions`: звезда, «⋮»), надпись «дата · категория», название H5 до 3 строк, внизу «Скачать» на всю ширину (нет `onDownload` — документ только для просмотра, кнопки нет). Белая карточка 24 с тенью, вся открывает документ; наведение — подъём и тень. Сетка — `CardGrid`, как у курсов и новостей."}}},decorators:[r=>t.jsx("div",{style:{width:320,padding:24,background:"var(--color-background)",borderRadius:24},children:t.jsx(r,{})})]},a={render:r=>{const[i,o]=v.useState(!1);return t.jsx(s,{...r,onDownload:()=>{},actions:t.jsx(f,{download:"none",favorite:i,onFavoriteChange:o,withOpen:!0})})}},n={name:"Сеткой",decorators:[r=>t.jsx("div",{style:{width:980,padding:24,background:"var(--color-surface)",borderRadius:24},children:t.jsx(r,{})})],render:()=>{const[r,i]=v.useState(Object.fromEntries(d.map(o=>[o.id,o.favorite])));return t.jsx(w,{items:d.slice(0,6),getKey:o=>o.id,renderItem:o=>t.jsx(s,{type:o.type,title:o.title,date:o.date,category:o.category,onDownload:o.downloadable?()=>{}:void 0,actions:t.jsx(f,{download:"none",favorite:!!r[o.id],onFavoriteChange:x=>i(y=>({...y,[o.id]:x})),withOpen:!0})})})}},W=["Playground","Сетка"];var c,p,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [fav, setFav] = useState(false);
    return <DocCard {...args} onDownload={() => {}} actions={<DocActions download="none" favorite={fav} onFavoriteChange={setFav} withOpen />} />;
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var l,u,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
    return <CardGrid items={REGISTRY_DOCS.slice(0, 6)} getKey={x => x.id} renderItem={x => <DocCard type={x.type} title={x.title} date={x.date} category={x.category} onDownload={x.downloadable ? () => {} : undefined} actions={<DocActions download="none" favorite={!!fav[x.id]} onFavoriteChange={v => setFav(s => ({
      ...s,
      [x.id]: v
    }))} withOpen />} />} />;
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};export{a as Playground,W as __namedExportsOrder,V as default,n as Сетка};
