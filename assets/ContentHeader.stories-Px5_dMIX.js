import{j as e,r as y,e as C}from"./iframe-BjwqOSi3.js";import{F}from"./FavoriteButton-B05oULjs.js";import{I as E}from"./InfoTag-B_BO-mg6.js";import{R as a}from"./ReactionButton-_rFtCBRQ.js";import{c as S,d as z,e as b}from"./Archive-DO3N_KQw.js";import{A as k}from"./AuthorLine-B0BqK8Z6.js";import{C as s}from"./ContentHeader-Ccc8hRTq.js";import{c as H}from"./courseDetails-BDfIrxyd.js";import{R as B}from"./coursesData-BZH3rvUT.js";import{R as T}from"./materialsData-DO952muv.js";import{R as A}from"./newsData-CVbuN9m8.js";import"./preload-helper-C1FmrZbK.js";import"./index-ZErZfhiV.js";import"./ContextIsolator-t4IZH0Aw.js";import"./context-CGGttlbE.js";import"./Avatar-DNopxRzE.js";import"./avatar-3-cf0W8rvX.js";import"./course-1--YiCqOCo.js";import"./course-4-bsGBpGWB.js";import"./course-3-DSDYLXDH.js";import"./news-1-DmTxuqk6.js";import"./news-3-CbYQUwuB.js";const d=B[1],u=H(d),c=T[0],n=A[0],ne={title:"UI Kit/Материалы/ContentHeader",id:"ui-kit-contentheader",component:s,tags:["autodocs"],args:{title:d.title,section:"Курсы",topic:d.theme,size:"h1",lead:u.description},argTypes:{title:{control:"text"},section:{control:"text",description:"Раздел жирным над названием; нет — надписи нет (в панели сбоку она в шапке панели)"},topic:{control:"text",description:"Тема после раздела"},date:{control:"text",description:"Дата над названием (новость) — вместо раздела"},size:{control:"inline-radio",options:["h1","h2"],description:"h1 — страница (32), h2 — документ в панели (24); на телефоне h1 → h2"},lead:{control:"text",description:"Описание P1 под названием"},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Шапка материала, курса, новости и документа — одна на все страницы и панели сбоку. Сверху вниз через 12: надпись «Раздел · тема» или дата новости, название, строки под названием (`children`: авторы, просмотры и звезда, реакции, кнопки документа), описание `lead`."}}},decorators:[t=>e.jsx("div",{style:{width:720,padding:24,background:"var(--color-surface)",borderRadius:30},children:e.jsx(t,{})})]},o={render:t=>e.jsx(s,{...t,children:e.jsx(k,{authors:u.authors,note:`Опубликован ${u.published}`})})},r={args:{title:c.title,section:"База знаний",topic:c.theme,lead:void 0},render:t=>{const[I,R]=y.useState(!1);return e.jsx(s,{...t,children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx(E,{tone:"gray",size:"control",icon:e.jsx(C,{size:16}),children:c.views}),e.jsx(F,{tone:"gray",active:I,onChange:R})]})})}},i={args:{title:n.title,section:void 0,topic:void 0,date:n.date,lead:void 0},render:t=>e.jsx(s,{...t,children:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{kind:"static",icon:e.jsx(S,{size:16}),count:n.comments,label:"Комментарии"}),e.jsx(a,{kind:"action",icon:e.jsx(z,{size:16}),count:n.shares,label:"Поделиться"}),e.jsx(a,{kind:"toggle",icon:e.jsx(b,{size:16}),count:n.likes,label:"Нравится"})]})})},oe=["Курс","Материал","Новость"];var l,m,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <ContentHeader {...args}>
      <AuthorLine authors={d.authors} note={\`Опубликован \${d.published}\`} />
    </ContentHeader>
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,h,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: m.title,
    section: "База знаний",
    topic: m.theme,
    lead: undefined
  },
  render: args => {
    const [fav, setFav] = useState(false);
    return <ContentHeader {...args}>
        <div style={{
        display: "flex",
        alignItems: "center",
        gap: 12
      }}>
          <InfoTag tone="gray" size="control" icon={<IconEye size={16} />}>
            {m.views}
          </InfoTag>
          <FavoriteButton tone="gray" active={fav} onChange={setFav} />
        </div>
      </ContentHeader>;
  }
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,v,j;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: n.title,
    section: undefined,
    topic: undefined,
    date: n.date,
    lead: undefined
  },
  render: args => <ContentHeader {...args}>
      <div style={{
      display: "flex",
      gap: 8
    }}>
        <ReactionButton kind="static" icon={<IconFillComment size={16} />} count={n.comments} label="Комментарии" />
        <ReactionButton kind="action" icon={<IconFillShare size={16} />} count={n.shares} label="Поделиться" />
        <ReactionButton kind="toggle" icon={<IconFillHeart size={16} />} count={n.likes} label="Нравится" />
      </div>
    </ContentHeader>
}`,...(j=(v=i.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};export{oe as __namedExportsOrder,ne as default,o as Курс,r as Материал,i as Новость};
