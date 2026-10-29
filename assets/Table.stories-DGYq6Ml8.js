import{j as t,r as R,p as _,U as H,B as b,V as K,W as U}from"./iframe-D1Ouy3kT.js";import{F as V}from"./FavoriteButton-BHxuovug.js";import{F as O}from"./FileTypeBadge-DQdlf97K.js";import{I as Q}from"./InfoTag-CBwk4bqw.js";import{T as n}from"./Table-DK0Sj08c.js";import{A as G}from"./archiveData-Bwv2oo37.js";import{R as M}from"./docsData-mYB44mym.js";import"./preload-helper-C1FmrZbK.js";import"./Archive-6wY4EHJx.js";import"./index-CAYOqa0x.js";import"./ContextIsolator-D4uc6dxX.js";import"./context-ChWBGifp.js";import"./Spinner-CiTLUfij.js";import"./Input-D1TCjWC-.js";import"./InputChrome-CZ9JtHxf.js";import"./useTruncated-DxOFOOjQ.js";import"./index-BC7mMHoq.js";import"./index-C45VZnHA.js";import"./CloseCircleFilled-BkRFSz-1.js";import"./useCSSVarCls-dDZsaw3_.js";import"./pickAttrs-BMctHlOw.js";import"./EyeOutlined-he68d7nl.js";import"./useShowArrow-DfjvHoFs.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-DXcOQ-og.js";import"./useLocale-C79BbFe7.js";import"./move-BN1IyPUy.js";import"./useIcons-DkuMDEkz.js";import"./CheckOutlined-CcryxNv4.js";import"./CloseOutlined-DgVKpIUt.js";import"./iconUtil-BpNYufaq.js";import"./index-CTNgBWkc.js";import"./collapse-BbEVqHco.js";import"./index-BNNZOREg.js";import"./useForm-CVK7oDIr.js";import"./index-C0BbI3DC.js";import"./PurePanel-DnlGZDFn.js";import"./index-D5-dGXFd.js";import"./useBreakpoint-oqZzmexz.js";import"./useForceUpdate-CX1LZxsC.js";import"./index-_BXGFPPs.js";import"./extendsObject-78o_rR5W.js";const Te={title:"UI Kit/Таблицы/Table",id:"ui-kit-table",component:n,tags:["autodocs"],args:{columns:[],dataSource:[]},argTypes:{columns:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},dataSource:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},pageSize:{control:"number",description:"Строк сразу и за одну подгрузку при прокрутке; false — все сразу"},device:{control:"inline-radio",options:["web","mob"],description:"По умолчанию — само (до 601 — телефон)"},size:{control:"inline-radio",options:["medium","small"],description:"small — плотнее: шапка 48, строки 56, текст 14"}},parameters:{docs:{story:{height:"640px"},description:{component:'Таблица — перенесена из кита Практис и перекрашена. Обёртка над antd Table: сортировка, фильтры колонок, выбор строк — логика antd.\n\n- **Шапка** 64 на `gray-100`, скругление 20 сверху, заголовки `H5` `gray-700`, черта между колонками 1×16. Значок сортировки — свой, активная стрелка — красная; фильтр колонки — значок воронки, выпадающий список antd.\n- **Строки** 64, текст `P2` `gray-800`, чётные — `gray-100`, наведение — `gray-150`. Текст до двух строк, дальше «…» и полный в тултипе.\n- **size="small"** — плотнее (личный кабинет, «Архив»): шапка 48 и заголовки `H6` 14, строки 56 и текст `P3` 14.\n- **Подгрузка** — без постраничника: `pageSize` строк сразу и столько же при прокрутке до низа.\n- **Телефон** (до 601 или мобильный браузер) — каждая строка карточка: колонке задают `mobile` (title / status / actions / footer / full / half), `mobileRender` и `mobileFooter` — что показать на карточке иначе, чем в таблице.\n\n- **Редактирование по клику** — `editable: { onSave, placeholder }` у колонки: наведение показывает рамку поля, клик — поле на том же месте (текст не сдвигается), Enter или уход из поля — сохранить, Esc — отменить. Пустая ячейка — голубая: видно, что её надо заполнить. Так же можно править заголовок колонки — `TableEditable` в `title`. `variant: "inline"` — правка прямо в тексте ячейки, без поля, как в Notion: ячейка с курсором — синяя обводка, Enter — к ячейке ниже, Tab — к следующей (так сделан блок «Таблица» в редакторе).\n- **Прокрутка вбок** — `scroll={{ x }}` (как у antd): не помещается — полоса прокрутки кита.\n\nИз Практис не перенесено: перетаскивание строк, вложенные таблицы, постраничник.'}}}};function T({device:r,width:u}){const[a,y]=R.useState({}),i=e=>t.jsx(V,{tone:"gray",active:!!a[e.id],onChange:o=>y(P=>({...P,[e.id]:o}))}),s=t.jsx(b,{variant:"secondary",size:"small",icon:t.jsx(U,{size:14}),"aria-label":"Ещё"}),l=t.jsx(b,{variant:"secondary",size:"small",icon:t.jsx(K,{size:14}),children:"Скачать"}),h=[{title:"Тип",dataIndex:"type",key:"type",width:120,mobile:"status",filters:["pdf","docx","xlsx","pptx","zip"].map(e=>({text:e.toUpperCase(),value:e})),filterIcon:()=>t.jsx(_,{size:16}),onFilter:(e,o)=>o.type===e,render:e=>t.jsx(O,{type:e})},{title:"Наименование",dataIndex:"title",key:"title",mobile:"title",sorter:(e,o)=>e.title.localeCompare(o.title,"ru")},{title:"Дата добавления",dataIndex:"date",key:"date",width:220,mobile:"half",sorter:(e,o)=>e.iso.localeCompare(o.iso)},{title:"Действия",key:"actions",width:240,mobile:"actions",render:(e,o)=>t.jsxs("span",{style:{display:"inline-flex",gap:16},children:[l,i(o),s]}),mobileRender:e=>t.jsxs("span",{style:{display:"inline-flex",gap:8},children:[i(e),s]}),mobileFooter:()=>l}];return t.jsx("div",{style:{width:u,padding:24,background:r==="mob"?"var(--color-background)":"var(--color-surface)"},children:t.jsx(n,{rowKey:"id",columns:h,dataSource:M,pageSize:8,device:r})})}const c={render:()=>t.jsx(T,{})},d={name:"На телефоне",parameters:{docs:{story:{height:"760px"}}},render:()=>t.jsx(T,{device:"mob",width:390})},m={render:()=>t.jsx(n,{columns:[{title:"Наименование",dataIndex:"title"},{title:"Дата добавления",dataIndex:"date",width:220}],dataSource:[],searchQuery:"договор",onSearchReset:()=>{}})},N=[{title:"Тип",dataIndex:"type",key:"type",width:200,mobile:"half"},{title:"Название",dataIndex:"title",key:"title",mobile:"title",sorter:(r,u)=>r.title.localeCompare(u.title,"ru")},{title:"Статус",key:"status",width:160,mobile:"status",render:()=>t.jsx(Q,{size:"small",tone:"green",icon:t.jsx(H,{size:12}),children:"Пройден"})},{title:"Завершение",key:"completed",width:160,mobile:"half",sorter:(r,u)=>(r.completed??"").localeCompare(u.completed??""),render:(r,u)=>{var a;return(a=u.completed)==null?void 0:a.split("-").reverse().join(".")}},{title:"Баллы",dataIndex:"score",key:"score",width:110,mobile:"half"}],p={name:"Компактная (small)",parameters:{docs:{description:{story:'`size="small"` — шапка 48, строки 56, текст 14: история курсов в архиве личного кабинета. Строки не открываются.'}}},render:()=>t.jsx(n,{rowKey:"id",size:"small",columns:N,dataSource:G,pageSize:!1})},x={name:"Редактирование по клику",render:()=>{const[r,u]=R.useState([{key:"1",work:"Кладка перегородок",unit:"м²",price:"1 450"},{key:"2",work:"Штукатурка стен",unit:"м²",price:""},{key:"3",work:"Монтаж окон",unit:"шт.",price:""}]),a=i=>(s,l)=>u(h=>h.map(e=>e.key===s.key?{...e,[i]:l}:e)),y=[{title:"Работа",dataIndex:"work",editable:{onSave:a("work"),placeholder:"Название"}},{title:"Ед.",dataIndex:"unit",width:160,editable:{onSave:a("unit"),placeholder:"м², шт."}},{title:"Цена, ₽",dataIndex:"price",width:220,editable:{onSave:a("price"),placeholder:"Число"}}];return t.jsx(n,{columns:y,dataSource:r,pageSize:!1})}},Pe=["Документы","Телефон","Пусто","Компактная","Редактирование"];var g,w,S;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Docs />
}`,...(S=(w=c.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var E,f,k;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "На телефоне",
  parameters: {
    docs: {
      story: {
        height: "760px"
      }
    }
  },
  render: () => <Docs device="mob" width={390} />
}`,...(k=(f=d.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var v,I,D;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Table<RegistryDoc> columns={[{
    title: "Наименование",
    dataIndex: "title"
  }, {
    title: "Дата добавления",
    dataIndex: "date",
    width: 220
  }]} dataSource={[]} searchQuery="договор" onSearchReset={() => {}} />
}`,...(D=(I=m.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var A,j,z;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Компактная (small)",
  parameters: {
    docs: {
      description: {
        story: "\\\`size=\\"small\\"\\\` — шапка 48, строки 56, текст 14: история курсов в архиве личного кабинета. Строки не открываются."
      }
    }
  },
  render: () => <Table<ArchiveRecord> rowKey="id" size="small" columns={archiveColumns} dataSource={ARCHIVE} pageSize={false} />
}`,...(z=(j=p.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var C,F,B;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Редактирование по клику",
  render: () => {
    const [rows, setRows] = useState<Price[]>([{
      key: "1",
      work: "Кладка перегородок",
      unit: "м²",
      price: "1 450"
    }, {
      key: "2",
      work: "Штукатурка стен",
      unit: "м²",
      price: ""
    }, {
      key: "3",
      work: "Монтаж окон",
      unit: "шт.",
      price: ""
    }]);
    const save = (field: keyof Price) => (r: Price, v: string) => setRows(all => all.map(x => x.key === r.key ? {
      ...x,
      [field]: v
    } : x));
    const columns: TableColumn<Price>[] = [{
      title: "Работа",
      dataIndex: "work",
      editable: {
        onSave: save("work"),
        placeholder: "Название"
      }
    }, {
      title: "Ед.",
      dataIndex: "unit",
      width: 160,
      editable: {
        onSave: save("unit"),
        placeholder: "м², шт."
      }
    }, {
      title: "Цена, ₽",
      dataIndex: "price",
      width: 220,
      editable: {
        onSave: save("price"),
        placeholder: "Число"
      }
    }];
    return <Table columns={columns} dataSource={rows} pageSize={false} />;
  }
}`,...(B=(F=x.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};export{Pe as __namedExportsOrder,Te as default,c as Документы,p as Компактная,m as Пусто,x as Редактирование,d as Телефон};
