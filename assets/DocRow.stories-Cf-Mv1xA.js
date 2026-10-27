import{j as i,r as d}from"./iframe-wfJ_y6tk.js";import{D as w}from"./DocActions-BXD72gmU.js";import{R as g}from"./ListRow-DQrnKcXR.js";import{D as p}from"./DocRow-Dd8U4ft5.js";import{R as m}from"./docsData-mYB44mym.js";import"./preload-helper-C1FmrZbK.js";import"./FavoriteButton-eaF04spG.js";import"./Archive-Ban5Sfu5.js";import"./index-DK8SjL2j.js";import"./ContextIsolator-8G1DI5TY.js";import"./context-BtIUxdFu.js";import"./DropdownMenu-4yu388T_.js";import"./Scrollbar-98UR6P-F.js";import"./DropdownMenuItem-M8EkXKQ7.js";import"./Radio-D556sma4.js";import"./index-sYrw6d-4.js";import"./pickAttrs-DzhteYie.js";import"./useCSSVarCls-Dp79i034.js";import"./useForm-BzeJ6ZcR.js";import"./index-CA55xMRb.js";import"./index-HGI5R0YD.js";import"./KeyCode-lh1qUinJ.js";import"./PurePanel-B9LUDZ6O.js";import"./index-rvaorKVN.js";import"./Overflow-Cofq_D13.js";import"./collapse-BbEVqHco.js";import"./move-CHiurvd8.js";import"./useTruncated-BK8cY36k.js";import"./FileTypeBadge-Bf6y6nxG.js";const u=m[0],Z={title:"UI Kit/Карточки/DocRow",id:"ui-kit-docrow",component:p,tags:["autodocs"],args:{type:u.type,title:u.title},argTypes:{type:{control:"inline-radio",options:["pdf","docx","xlsx","pptx","zip","mp4"]},title:{control:"text",description:"Целиком, переносится — без «…»"},selected:{control:"boolean",description:"Открыт сбоку (DetailLayout) — голубая подсветка"},actions:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Документ строкой — реестр документов списком и на телефоне. Вариант общей строки `ListRow` (вид — там, здесь данные документа). Слева плашка типа `FileTypeBadge` — колонка одной ширины 56, названия у всех строк с одного места; посередине название H5 целиком, без «…»; справа кнопки `DocActions` — «Скачать», звезда, «⋮». Вся строка открывает документ (в реестре на компьютере — сбоку, `DetailLayout`), кроме кнопок; наведение — серый фон, `selected` — голубой.\n\nДата и раздел — в превью сбоку и в просмотрщике: в строке их нет (заказчики 2026-10-21 — «вычистить построчную версию»).\n\n**Узкий список** (уже 480, телефон): без полей по бокам, название 14 SemiBold, «Скачать» — в меню «⋮». Строки — в `RowList`."}}},decorators:[e=>i.jsx("div",{style:{width:351,padding:"0 12px",background:"var(--color-surface)",borderRadius:24},children:i.jsx(e,{})})]},r={name:"Список на компьютере",decorators:[e=>i.jsx("div",{style:{width:640,padding:24,background:"var(--color-surface)",borderRadius:24},children:i.jsx(e,{})})],render:()=>{const e=m.slice(6,11),[n,a]=d.useState(Object.fromEntries(e.map(t=>[t.id,t.favorite]))),[o,c]=d.useState(e[1].id);return i.jsx(g,{children:e.map(t=>i.jsx(p,{type:t.type,title:t.title,selected:t.id===o,onOpen:()=>c(t.id),actions:i.jsx(w,{download:"icon",favorite:!!n[t.id],onFavoriteChange:S=>a(D=>({...D,[t.id]:S})),withOpen:!0})},t.id))})}},s={name:"Список на телефоне",render:()=>{const e=m.slice(0,5),[n,a]=d.useState(Object.fromEntries(e.map(o=>[o.id,o.favorite])));return i.jsx(g,{children:e.map(o=>i.jsx(p,{type:o.type,title:o.title,actions:i.jsx(w,{download:"menu",favorite:!!n[o.id],onFavoriteChange:c=>a(t=>({...t,[o.id]:c})),withOpen:!0})},o.id))})}},$=["Компьютер","Список"];var l,v,f;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var x,R,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Список на телефоне",
  render: () => {
    const items = REGISTRY_DOCS.slice(0, 5);
    const [fav, setFav] = useState<Record<string, boolean>>(Object.fromEntries(items.map(x => [x.id, x.favorite])));
    return <RowList>
        {items.map(x => <DocRow key={x.id} type={x.type} title={x.title} actions={<DocActions download="menu" favorite={!!fav[x.id]} onFavoriteChange={v => setFav(s => ({
        ...s,
        [x.id]: v
      }))} withOpen />} />)}
      </RowList>;
  }
}`,...(y=(R=s.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};export{$ as __namedExportsOrder,Z as default,r as Компьютер,s as Список};
