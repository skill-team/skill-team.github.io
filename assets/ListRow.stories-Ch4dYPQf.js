import{r as h,j as t}from"./iframe-BjwqOSi3.js";import{F}from"./FavoriteButton-B05oULjs.js";import{C as L}from"./CourseRow-oLr-28Ph.js";import{D as j}from"./DocActions-DSDNo7tX.js";import{D as k}from"./DocRow-4_5RXtys.js";import{L as y,R as S}from"./ListRow-Cs2M_cqq.js";import{M as A}from"./MaterialRow-wjlfJyoY.js";import{N as B}from"./NewsRow-CTN1jLgk.js";import{n as I}from"./news-1-DmTxuqk6.js";import{R as T}from"./coursesData-BZH3rvUT.js";import{R as _}from"./docsData-mYB44mym.js";import{R as O}from"./materialsData-DO952muv.js";import{R as G}from"./newsData-CVbuN9m8.js";import"./preload-helper-C1FmrZbK.js";import"./Archive-DO3N_KQw.js";import"./index-ZErZfhiV.js";import"./ContextIsolator-t4IZH0Aw.js";import"./context-CGGttlbE.js";import"./AssignedBadge-DoOeXd3v.js";import"./InfoTag-B_BO-mg6.js";import"./ProgressRing-BWRcJAjL.js";import"./DropdownMenu-Ci6j9vKz.js";import"./Scrollbar-CxOVkhpC.js";import"./DropdownMenuItem-CVsz5xsO.js";import"./Radio-CP0jTXNY.js";import"./index-J-DsTmO9.js";import"./pickAttrs-CMH0USIN.js";import"./useCSSVarCls-B_1IN5HN.js";import"./useForm-BGDuyS49.js";import"./index-CIlwjofH.js";import"./index-Dd9AIVo_.js";import"./KeyCode-lh1qUinJ.js";import"./PurePanel-CWXTrHE_.js";import"./index-DwlsUQ8G.js";import"./Overflow-DNDcMgHM.js";import"./collapse-BbEVqHco.js";import"./move-DIHvAmS-.js";import"./FileTypeBadge-5EtkH_9E.js";import"./useTruncated-1RfrOo5E.js";import"./ReactionButton-_rFtCBRQ.js";import"./course-1--YiCqOCo.js";import"./course-4-bsGBpGWB.js";import"./course-3-DSDYLXDH.js";import"./news-3-CbYQUwuB.js";const n=T[0],o=O[0],Lt={title:"UI Kit/Карточки/ListRow",id:"ui-kit-listrow",component:y,tags:["autodocs"],args:{title:o.title,titleLines:2,caption:`${o.date} · ${o.theme}`,text:o.text,image:void 0,imagePosition:"end",selected:!1,disabled:!1},argTypes:{title:{control:"text",description:"До titleLines строк — дальше «…» и тултип с полным названием"},titleLines:{control:"inline-radio",options:[1,2]},caption:{control:"text",description:"Надпись над названием — «дата · тема», прописными"},text:{control:"text",description:"Описание — одна строка"},image:{control:"select",options:["Без картинки","С картинкой"],mapping:{"Без картинки":void 0,"С картинкой":I}},imagePosition:{control:"inline-radio",options:["start","end"],description:"start — слева (курс), end — справа (материал, новость)"},selected:{control:"boolean",description:"Открыт сбоку (DetailLayout) — голубая подсветка"},disabled:{control:"boolean",description:"Недоступен — ч/б, серый, не открывается (курс снят с публикации)"},meta:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},leading:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},actions:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Строка списка — одна на все реестры «списком»: курсы, материалы, новости, документы. Вид задаётся здесь; `CourseRow`, `MaterialRow`, `NewsRow`, `DocRow` — её варианты, они только раскладывают свои данные по частям строки.\n\n| Часть | Проп | У кого |\n|---|---|---|\n| Плашка слева | `leading` | документ — тип файла |\n| Картинка 120×68 | `image`, `imagePosition` | курс — слева; материал и новость — справа, если есть |\n| Надпись «дата · тема» | `caption` | материал, новость, документ |\n| Название H5 | `title`, `titleLines` | все: курс и документ — до 2 строк, материал и новость — 1 (под ним текст) |\n| Описание | `text` | материал, новость |\n| Плашки / реакции | `meta` | курс — время, прогресс, срок; новость — реакции |\n| Кнопки справа | `actions` | звезда; у документа — «Скачать», звезда, «⋮» |\n\nВся строка открывает элемент; кнопки в `meta` и `actions` нажимаются отдельно. Наведение — серый фон, `selected` — голубой, `disabled` — ч/б и серый. Строки ставятся в `RowList` — с линией между; уже 480 (телефон) строка компактнее: без полей по бокам, картинка 88×54, название 14 в 2 строки."}}}},C=e=>t.jsx("div",{style:{width:640,padding:24,background:"var(--color-surface)",borderRadius:24},children:t.jsx(e,{})}),u={decorators:[C],render:e=>{const[d,i]=h.useState(!1);return t.jsx(S,{children:t.jsx(y,{...e,actions:t.jsx(F,{tone:"gray",active:d,onChange:i})})})}},a={name:"Все варианты",parameters:{docs:{description:{story:"Курс, материал, новость и документ — одна и та же строка с разными данными."}}},decorators:[C],render:()=>{const[e,d]=h.useState({}),i=E=>D=>d(b=>({...b,[E]:D})),r=G[0],s=_[0];return t.jsxs(S,{children:[t.jsx(L,{title:n.title,image:n.image,duration:n.duration,progress:n.progress||void 0,favorite:!!e.c,onFavoriteChange:i("c")}),t.jsx(A,{title:o.title,text:o.text,date:o.date,theme:o.theme,image:o.image,favorite:!!e.m,onFavoriteChange:i("m")}),t.jsx(B,{title:r.title,text:r.text,date:r.date,image:r.image,comments:r.comments,shares:r.shares,likes:r.likes,liked:r.liked}),t.jsx(k,{type:s.type,title:s.title,date:s.date,category:s.category,actions:t.jsx(j,{favorite:!!e.d,onFavoriteChange:i("d"),withOpen:!0})})]})}},c={name:"Узкий список (телефон)",decorators:[e=>t.jsx("div",{style:{width:351,padding:"0 12px",background:"var(--color-surface)",borderRadius:24},children:t.jsx(e,{})})],render:a.render},jt=["Playground","Варианты","Телефон"];var m,p,l;u.parameters={...u.parameters,docs:{...(m=u.parameters)==null?void 0:m.docs,source:{originalSource:`{
  decorators: [wide],
  render: args => {
    const [fav, setFav] = useState(false);
    return <RowList>
        <ListRow {...args} actions={<FavoriteButton tone="gray" active={fav} onChange={setFav} />} />
      </RowList>;
  }
}`,...(l=(p=u.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var g,R,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Все варианты",
  parameters: {
    docs: {
      description: {
        story: "Курс, материал, новость и документ — одна и та же строка с разными данными."
      }
    }
  },
  decorators: [wide],
  render: () => {
    const [fav, setFav] = useState<Record<string, boolean>>({});
    const toggle = (id: string) => (v: boolean) => setFav(s => ({
      ...s,
      [id]: v
    }));
    const n = REGISTRY_NEWS[0];
    const d = REGISTRY_DOCS[0];
    return <RowList>
        <CourseRow title={c.title} image={c.image} duration={c.duration} progress={c.progress || undefined} favorite={!!fav.c} onFavoriteChange={toggle("c")} />
        <MaterialRow title={m.title} text={m.text} date={m.date} theme={m.theme} image={m.image} favorite={!!fav.m} onFavoriteChange={toggle("m")} />
        <NewsRow title={n.title} text={n.text} date={n.date} image={n.image} comments={n.comments} shares={n.shares} likes={n.likes} liked={n.liked} />
        <DocRow type={d.type} title={d.title} date={d.date} category={d.category} actions={<DocActions favorite={!!fav.d} onFavoriteChange={toggle("d")} withOpen />} />
      </RowList>;
  }
}`,...(v=(R=a.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var f,x,w;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Узкий список (телефон)",
  decorators: [Story => <div style={{
    width: 351,
    padding: "0 12px",
    background: "var(--color-surface)",
    borderRadius: 24
  }}>
        <Story />
      </div>],
  render: Варианты.render
}`,...(w=(x=c.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};export{u as Playground,jt as __namedExportsOrder,Lt as default,a as Варианты,c as Телефон};
