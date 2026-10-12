import{j as e,r as x,B as v,D as y}from"./iframe-XQ_qeO9Z.js";import{F as f}from"./FavoriteButton-Bbmb4ETI.js";import{R as g}from"./CourseRow-Bw6fYg1l.js";import{D as c}from"./DocRow-uqTYwtTv.js";import{R as d}from"./docsData-mYB44mym.js";import"./preload-helper-C1FmrZbK.js";import"./StopSquare-CqvMLRwJ.js";import"./index--oqSavUY.js";import"./ContextIsolator-DJke2nN-.js";import"./context-BSOHyiuZ.js";import"./ProgressRing-Ca5_V9hc.js";import"./useTruncated-B6hy5Aa6.js";import"./FileTypeBadge-B-dNb87U.js";const a=d[0],C={title:"UI Kit/Таблицы/DocRow",id:"ui-kit-docrow",component:c,tags:["autodocs"],args:{type:a.type,title:a.title,date:a.date},argTypes:{type:{control:"inline-radio",options:["pdf","docx","xlsx","pptx","zip","mp4"]},title:{control:"text",description:"До 2 строк — дальше «…»"},date:{control:"text"},actions:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Документ строкой — реестр документов на телефоне вместо таблицы (таблица там превращалась в большие карточки). Слева плашка типа `FileTypeBadge` — колонка одной ширины 56, названия у всех строк с одного места; посередине название (14 SemiBold, до 2 строк) и дата (12, серым); справа кнопки — звезда `FavoriteButton tone="gray"` и «⋮» (в меню и «Скачать»). Вся строка открывает просмотрщик, кроме кнопок. Строки — в `RowList`, высота ~78.'}}},decorators:[o=>e.jsx("div",{style:{width:351,padding:"0 12px",background:"var(--color-surface)",borderRadius:24},children:e.jsx(o,{})})]},r={name:"Список",render:()=>{const o=d.slice(0,5),[p,m]=x.useState(Object.fromEntries(o.map(t=>[t.id,t.favorite])));return e.jsx(g,{children:o.map(t=>e.jsx(c,{type:t.type,title:t.title,date:t.date,actions:e.jsxs(e.Fragment,{children:[e.jsx(f,{tone:"gray",active:p[t.id],onChange:l=>m(u=>({...u,[t.id]:l}))}),e.jsx(v,{variant:"secondary",size:"small",icon:e.jsx(y,{size:14}),"aria-label":"Ещё"})]})},t.id))})}},L=["Список"];var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Список",
  render: () => {
    const items = REGISTRY_DOCS.slice(0, 5);
    const [fav, setFav] = useState<Record<string, boolean>>(Object.fromEntries(items.map(x => [x.id, x.favorite])));
    return <RowList>
        {items.map(x => <DocRow key={x.id} type={x.type} title={x.title} date={x.date} actions={<>
                <FavoriteButton tone="gray" active={fav[x.id]} onChange={v => setFav(s => ({
          ...s,
          [x.id]: v
        }))} />
                <Button variant="secondary" size="small" icon={<IconMoreVertical size={14} />} aria-label="Ещё" />
              </>} />)}
      </RowList>;
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};export{L as __namedExportsOrder,C as default,r as Список};
