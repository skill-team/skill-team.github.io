import{j as r,r as p}from"./iframe-BJnn3bUc.js";import{D as R}from"./DocActions-BVOKi-_d.js";import{R as w}from"./ListRow-CiZz8YcS.js";import{D as m}from"./DocRow-CyHt27RL.js";import{R as u}from"./docsData-mYB44mym.js";import"./preload-helper-C1FmrZbK.js";import"./FavoriteButton-DqXVUQBS.js";import"./Archive-DU-cRzIy.js";import"./index-Cb8wpR_L.js";import"./ContextIsolator-ChCoEtco.js";import"./context-Ck9A9kxN.js";import"./DropdownMenu-BnRbZ-Qg.js";import"./Scrollbar-B75cohUG.js";import"./DropdownMenuItem-DoDuKSuQ.js";import"./Radio-BY_APane.js";import"./index-DifhXGP3.js";import"./pickAttrs-AhAfGPLL.js";import"./useCSSVarCls-DhrwCwrb.js";import"./useForm-CjiasipT.js";import"./index-CJAHZD8H.js";import"./index-DegsU-z7.js";import"./KeyCode-lh1qUinJ.js";import"./PurePanel-BqB-yt-T.js";import"./index-D0qE8IwX.js";import"./Overflow-Dg2ePXda.js";import"./collapse-BbEVqHco.js";import"./move-B1Ubx2v5.js";import"./useTruncated-Cn3csC5A.js";import"./FileTypeBadge-iUJ94Mhu.js";const d=u[0],Z={title:"UI Kit/Карточки/DocRow",id:"ui-kit-docrow",component:m,tags:["autodocs"],args:{type:d.type,title:d.title,date:d.date},argTypes:{type:{control:"inline-radio",options:["pdf","docx","xlsx","pptx","zip","mp4"]},title:{control:"text",description:"До 2 строк — дальше «…»"},date:{control:"text"},category:{control:"text",description:"Категория после даты; уже выбрана фильтром — не передавать"},selected:{control:"boolean",description:"Открыт сбоку (DetailLayout) — голубая подсветка"},actions:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Документ строкой — реестр документов списком и на телефоне. Вариант общей строки `ListRow` (вид — там, здесь данные документа). Слева плашка типа `FileTypeBadge` — колонка одной ширины 56, названия у всех строк с одного места; посередине надпись «дата · категория» (Caption Small, разрядка) и название H5 до 2 строк; справа кнопки `DocActions` — «Скачать», звезда, «⋮». Вся строка открывает документ (в реестре на компьютере — сбоку, `DetailLayout`), кроме кнопок; наведение — серый фон, `selected` — голубой.\n\n**Узкий список** (уже 480, телефон): без полей по бокам, название 14 SemiBold, «Скачать» — в меню «⋮». Строки — в `RowList`."}}},decorators:[o=>r.jsx("div",{style:{width:351,padding:"0 12px",background:"var(--color-surface)",borderRadius:24},children:r.jsx(o,{})})]},i={name:"Список на компьютере",decorators:[o=>r.jsx("div",{style:{width:640,padding:24,background:"var(--color-surface)",borderRadius:24},children:r.jsx(o,{})})],render:()=>{const o=u.slice(6,11),[s,n]=p.useState(Object.fromEntries(o.map(t=>[t.id,t.favorite]))),[e,c]=p.useState(o[1].id);return r.jsx(w,{children:o.map(t=>r.jsx(m,{type:t.type,title:t.title,date:t.date,category:t.category,selected:t.id===e,onOpen:()=>c(t.id),actions:r.jsx(R,{download:"icon",favorite:!!s[t.id],onFavoriteChange:S=>n(D=>({...D,[t.id]:S})),withOpen:!0})},t.id))})}},a={name:"Список на телефоне",render:()=>{const o=u.slice(0,5),[s,n]=p.useState(Object.fromEntries(o.map(e=>[e.id,e.favorite])));return r.jsx(w,{children:o.map(e=>r.jsx(m,{type:e.type,title:e.title,date:e.date,category:e.category,actions:r.jsx(R,{download:"menu",favorite:!!s[e.id],onFavoriteChange:c=>n(t=>({...t,[e.id]:c})),withOpen:!0})},e.id))})}},$=["Компьютер","Список"];var l,v,y;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Список на компьютере",
  decorators: [Story => <div style={{
    width: 640,
    padding: 24,
    background: "var(--color-surface)",
    borderRadius: 24
  }}>
        <Story />
      </div>],
  render: () => {
    const items = REGISTRY_DOCS.slice(6, 11);
    const [fav, setFav] = useState<Record<string, boolean>>(Object.fromEntries(items.map(x => [x.id, x.favorite])));
    const [sel, setSel] = useState(items[1].id);
    return <RowList>
        {items.map(x => <DocRow key={x.id} type={x.type} title={x.title} date={x.date} category={x.category} selected={x.id === sel} onOpen={() => setSel(x.id)} actions={<DocActions download="icon" favorite={!!fav[x.id]} onFavoriteChange={v => setFav(s => ({
        ...s,
        [x.id]: v
      }))} withOpen />} />)}
      </RowList>;
  }
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var x,f,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Список на телефоне",
  render: () => {
    const items = REGISTRY_DOCS.slice(0, 5);
    const [fav, setFav] = useState<Record<string, boolean>>(Object.fromEntries(items.map(x => [x.id, x.favorite])));
    return <RowList>
        {items.map(x => <DocRow key={x.id} type={x.type} title={x.title} date={x.date} category={x.category} actions={<DocActions download="menu" favorite={!!fav[x.id]} onFavoriteChange={v => setFav(s => ({
        ...s,
        [x.id]: v
      }))} withOpen />} />)}
      </RowList>;
  }
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};export{$ as __namedExportsOrder,Z as default,i as Компьютер,a as Список};
