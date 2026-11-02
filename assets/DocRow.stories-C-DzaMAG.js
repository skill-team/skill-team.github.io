import{j as i,r as u}from"./iframe-BjfIqAJn.js";import{D as l}from"./DocActions-DL4yLWU2.js";import{R as v}from"./ListRow-DCP33hZX.js";import{D as p}from"./DocRow-BEk903Wr.js";import{R as m}from"./docsData-mYB44mym.js";import"./preload-helper-C1FmrZbK.js";import"./FavoriteButton-CSVvSkzs.js";import"./Archive-BFoVJ9mL.js";import"./index-BOybzS2M.js";import"./ContextIsolator-x4ptwmC0.js";import"./context-jz5FLBdL.js";import"./DropdownMenu-D2jRpJoe.js";import"./Scrollbar-C0TrX6YL.js";import"./DropdownMenuItem-B8feyDtu.js";import"./Radio-CAEyPEE4.js";import"./index-DmJ6AEjJ.js";import"./pickAttrs-Drm6BpRz.js";import"./useCSSVarCls-B4C9ExDV.js";import"./useForm-CINDJAyM.js";import"./index-DGkbBTgd.js";import"./index-D1TlLcFL.js";import"./KeyCode-lh1qUinJ.js";import"./PurePanel-q7RNuK5z.js";import"./index-4nv2QEZc.js";import"./Overflow-CMNFnVzm.js";import"./collapse-BbEVqHco.js";import"./move-B9aT31CZ.js";import"./useTruncated-BPFduf71.js";import"./FileTypeBadge-CHy3Lm3S.js";const f=m[0],ot={title:"UI Kit/Карточки/DocRow",id:"ui-kit-docrow",component:p,tags:["autodocs"],args:{type:f.type,title:f.title},argTypes:{type:{control:"inline-radio",options:["pdf","docx","xlsx","pptx","zip","mp4"]},title:{control:"text",description:"Целиком, переносится — без «…»"},selected:{control:"boolean",description:"Открыт сбоку (DetailLayout) — голубая подсветка"},actions:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Документ строкой — реестр документов списком и на телефоне. Вариант общей строки `ListRow` (вид — там, здесь данные документа). Слева плашка типа `FileTypeBadge` — колонка одной ширины 56, названия у всех строк с одного места; посередине название H5 целиком, без «…»; справа кнопки `DocActions` — «Скачать», звезда, «⋮». Вся строка открывает документ (в реестре на компьютере — сбоку, `DetailLayout`), кроме кнопок; наведение — серый фон, `selected` — голубой.\n\nДата и раздел — в превью сбоку и в просмотрщике: в строке их нет (заказчики 2026-10-21 — «вычистить построчную версию»).\n\n**Узкий список** (уже 480, телефон): без полей по бокам, название 14 SemiBold, «Скачать» — в меню «⋮». Строки — в `RowList`."}}},decorators:[o=>i.jsx("div",{style:{width:351,padding:"0 12px",background:"var(--color-surface)",borderRadius:24},children:i.jsx(o,{})})]},a={name:"Список на компьютере",decorators:[o=>i.jsx("div",{style:{width:640,padding:24,background:"var(--color-surface)",borderRadius:24},children:i.jsx(o,{})})],render:()=>{const o=m.slice(6,11),[n,r]=u.useState(Object.fromEntries(o.map(e=>[e.id,e.favorite]))),[t,s]=u.useState(o[1].id);return i.jsx(v,{children:o.map(e=>i.jsx(p,{type:e.type,title:e.title,selected:e.id===t,onOpen:()=>s(e.id),actions:i.jsx(l,{download:"icon",favorite:!!n[e.id],onFavoriteChange:E=>r(F=>({...F,[e.id]:E})),withOpen:!0})},e.id))})}},d={name:"Список на телефоне",render:()=>{const o=m.slice(0,5),[n,r]=u.useState(Object.fromEntries(o.map(t=>[t.id,t.favorite])));return i.jsx(v,{children:o.map(t=>i.jsx(p,{type:t.type,title:t.title,actions:i.jsx(l,{download:t.downloadable?"icon":"none",favorite:!!n[t.id],onFavoriteChange:s=>r(e=>({...e,[t.id]:s})),withOpen:!0})},t.id))})}},c={name:"Сотрудник — «Скачать» и звезда, без «⋮»",render:()=>{const o=m.slice(0,4),[n,r]=u.useState(Object.fromEntries(o.map(t=>[t.id,t.favorite])));return i.jsx(v,{children:o.map(t=>i.jsx(p,{type:t.type,title:t.title,actions:i.jsx(l,{admin:!1,download:t.downloadable?"icon":"none",favorite:!!n[t.id],onFavoriteChange:s=>r(e=>({...e,[t.id]:s}))})},t.id))})}},it=["Компьютер","Список","Сотрудник"];var x,w,R;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
        {items.map(x => <DocRow key={x.id} type={x.type} title={x.title} selected={x.id === sel} onOpen={() => setSel(x.id)} actions={<DocActions download="icon" favorite={!!fav[x.id]} onFavoriteChange={v => setFav(s => ({
        ...s,
        [x.id]: v
      }))} withOpen />} />)}
      </RowList>;
  }
}`,...(R=(w=a.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var y,S,g;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Список на телефоне",
  render: () => {
    const items = REGISTRY_DOCS.slice(0, 5);
    const [fav, setFav] = useState<Record<string, boolean>>(Object.fromEntries(items.map(x => [x.id, x.favorite])));
    return <RowList>
        {items.map(x => <DocRow key={x.id} type={x.type} title={x.title} actions={<DocActions download={x.downloadable ? "icon" : "none"} favorite={!!fav[x.id]} onFavoriteChange={v => setFav(s => ({
        ...s,
        [x.id]: v
      }))} withOpen />} />)}
      </RowList>;
  }
}`,...(g=(S=d.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var b,D,j;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Сотрудник — «Скачать» и звезда, без «⋮»",
  render: () => {
    const items = REGISTRY_DOCS.slice(0, 4);
    const [fav, setFav] = useState<Record<string, boolean>>(Object.fromEntries(items.map(x => [x.id, x.favorite])));
    return <RowList>
        {items.map(x => <DocRow key={x.id} type={x.type} title={x.title} actions={<DocActions admin={false} download={x.downloadable ? "icon" : "none"} favorite={!!fav[x.id]} onFavoriteChange={v => setFav(s => ({
        ...s,
        [x.id]: v
      }))} />} />)}
      </RowList>;
  }
}`,...(j=(D=c.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};export{it as __namedExportsOrder,ot as default,a as Компьютер,c as Сотрудник,d as Список};
