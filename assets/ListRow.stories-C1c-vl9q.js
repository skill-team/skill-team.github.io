import{r as h,j as t}from"./iframe-DF43zbcH.js";import{F}from"./FavoriteButton-CUBxMJhw.js";import{C as L}from"./CourseRow-Dioxz1OM.js";import{D as j}from"./DocActions-CislEUJR.js";import{D as k}from"./DocRow-BvV5Qlpn.js";import{L as S,R as y}from"./ListRow-dgY53sko.js";import{M as A}from"./MaterialRow-Cbg5JMG7.js";import{N as B}from"./NewsRow-RHlO5xyk.js";import{n as I}from"./news-1-DmTxuqk6.js";import{R as T}from"./coursesData-BZH3rvUT.js";import{R as _}from"./docsData-mYB44mym.js";import{R as O}from"./materialsData-DO952muv.js";import{R as G}from"./newsData-CVbuN9m8.js";import"./preload-helper-C1FmrZbK.js";import"./Archive-NbaJro7L.js";import"./index-Dc-2W6eP.js";import"./ContextIsolator-CGgXIIAn.js";import"./context-Bvlc22x8.js";import"./AssignedBadge-ZGoNyw_f.js";import"./InfoTag-DnH5-QU6.js";import"./ProgressRing-CXxChQlo.js";import"./DropdownMenu-Cd7TjhJQ.js";import"./Scrollbar-DaPov4DG.js";import"./DropdownMenuItem-DCYzNhbT.js";import"./Radio-BRGAXydT.js";import"./index-ecjyLzFu.js";import"./pickAttrs-D5cNfL7C.js";import"./useCSSVarCls-BWHCu96H.js";import"./useForm-oNyCIUHi.js";import"./index-BT35_YIn.js";import"./index-_Yeg93Pq.js";import"./KeyCode-lh1qUinJ.js";import"./PurePanel-DxMQ-kIt.js";import"./index-DjYQmJJm.js";import"./Overflow-Cc1AujC4.js";import"./collapse-BbEVqHco.js";import"./move-vXhFOdPM.js";import"./FileTypeBadge-CFNmaWvf.js";import"./useTruncated-Bc6x0L2e.js";import"./ReactionButton-GeByHN-Z.js";import"./course-1--YiCqOCo.js";import"./course-4-bsGBpGWB.js";import"./course-3-DSDYLXDH.js";import"./news-3-CbYQUwuB.js";const s=T[0],i=O[0],Lt={title:"UI Kit/Карточки/ListRow",id:"ui-kit-listrow",component:S,tags:["autodocs"],args:{title:i.title,titleLines:"all",caption:`${i.date} · ${i.theme}`,text:i.text,image:void 0,imagePosition:"end",selected:!1,disabled:!1},argTypes:{title:{control:"text",description:"Целиком (titleLines: all) или до 1 / 2 строк — дальше «…» и тултип с полным названием"},titleLines:{control:"inline-radio",options:["all",1,2]},caption:{control:"text",description:"Надпись над названием — «дата · тема», прописными"},text:{control:"text",description:"Описание — одна строка"},image:{control:"select",options:["Без картинки","С картинкой"],mapping:{"Без картинки":void 0,"С картинкой":I}},imagePosition:{control:"inline-radio",options:["start","end"],description:"start — слева (курс), end — справа (материал, новость)"},selected:{control:"boolean",description:"Открыт сбоку (DetailLayout) — голубая подсветка"},disabled:{control:"boolean",description:"Недоступен — ч/б, серый, не открывается (курс снят с публикации)"},meta:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},leading:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},actions:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Строка списка — одна на все реестры «списком»: курсы, материалы, новости, документы. Вид задаётся здесь; `CourseRow`, `MaterialRow`, `NewsRow`, `DocRow` — её варианты, они только раскладывают свои данные по частям строки.\n\n| Часть | Проп | У кого |\n|---|---|---|\n| Плашка слева | `leading` | документ — тип файла |\n| Картинка 120×68 | `image`, `imagePosition` | курс — слева |\n| Надпись «дата · тема» | `caption` | новость — дата |\n| Название H5 | `title`, `titleLines` | все — целиком, без «…» (по умолчанию `all`) |\n| Описание | `text` | сейчас никто (строка умеет) |\n| Плашки / реакции | `meta` | курс — время, прогресс, срок; новость — реакции |\n| Кнопки справа | `actions` | звезда; у документа — «Скачать», звезда, «⋮» |\n\nСтроки реестров «списком» с 2026-10-21 очищены (заказчики): без картинок (кроме курса) и текста, названия целиком. Дата, тема, раздел, описание — в превью сбоку и на странице.\n\nВся строка открывает элемент; кнопки в `meta` и `actions` нажимаются отдельно. Наведение — серый фон, `selected` — голубой, `disabled` — ч/б и серый. Строки ставятся в `RowList` — с линией между; уже 480 (телефон) строка компактнее: без полей по бокам, картинка 88×54, название 14 в 2 строки."}}}},C=o=>t.jsx("div",{style:{width:640,padding:24,background:"var(--color-surface)",borderRadius:24},children:t.jsx(o,{})}),n={decorators:[C],render:o=>{const[c,r]=h.useState(!1);return t.jsx(y,{children:t.jsx(S,{...o,actions:t.jsx(F,{tone:"gray",active:c,onChange:r})})})}},a={name:"Все варианты",parameters:{docs:{description:{story:"Курс, материал, новость и документ — одна и та же строка с разными данными."}}},decorators:[C],render:()=>{const[o,c]=h.useState({}),r=E=>D=>c(b=>({...b,[E]:D})),e=G[0],d=_[0];return t.jsxs(y,{children:[t.jsx(L,{title:s.title,image:s.image,duration:s.duration,progress:s.progress||void 0,favorite:!!o.c,onFavoriteChange:r("c")}),t.jsx(A,{title:i.title,favorite:!!o.m,onFavoriteChange:r("m")}),t.jsx(B,{title:e.title,date:e.date,comments:e.comments,shares:e.shares,likes:e.likes,liked:e.liked}),t.jsx(k,{type:d.type,title:d.title,actions:t.jsx(j,{favorite:!!o.d,onFavoriteChange:r("d"),withOpen:!0})})]})}},u={name:"Узкий список (телефон)",decorators:[o=>t.jsx("div",{style:{width:351,padding:"0 12px",background:"var(--color-surface)",borderRadius:24},children:t.jsx(o,{})})],render:a.render},jt=["Playground","Варианты","Телефон"];var m,l,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  decorators: [wide],
  render: args => {
    const [fav, setFav] = useState(false);
    return <RowList>
        <ListRow {...args} actions={<FavoriteButton tone="gray" active={fav} onChange={setFav} />} />
      </RowList>;
  }
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var g,R,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
        <MaterialRow title={m.title} favorite={!!fav.m} onFavoriteChange={toggle("m")} />
        <NewsRow title={n.title} date={n.date} comments={n.comments} shares={n.shares} likes={n.likes} liked={n.liked} />
        <DocRow type={d.type} title={d.title} actions={<DocActions favorite={!!fav.d} onFavoriteChange={toggle("d")} withOpen />} />
      </RowList>;
  }
}`,...(v=(R=a.parameters)==null?void 0:R.docs)==null?void 0:v.source}}};var f,w,x;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(w=u.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};export{n as Playground,jt as __namedExportsOrder,Lt as default,a as Варианты,u as Телефон};
