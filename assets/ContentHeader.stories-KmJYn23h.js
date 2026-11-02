import{j as e,r as j,e as y}from"./iframe-BjfIqAJn.js";import{F as C}from"./FavoriteButton-CSVvSkzs.js";import{I as F}from"./InfoTag-Dqy2kx7X.js";import{R as s}from"./ReactionButton-Cl12FPc1.js";import{c as S,d as E,e as k}from"./Archive-BFoVJ9mL.js";import{C as d}from"./ContentHeader-CdM6S0C9.js";import{c as z}from"./courseDetails-BDfIrxyd.js";import{R as b}from"./coursesData-BZH3rvUT.js";import{R as H}from"./materialsData-BjzmxcXj.js";import{R as T}from"./newsData-r16a8nJh.js";import"./preload-helper-C1FmrZbK.js";import"./index-BOybzS2M.js";import"./ContextIsolator-x4ptwmC0.js";import"./context-jz5FLBdL.js";import"./avatar-3-cf0W8rvX.js";import"./course-1--YiCqOCo.js";import"./course-4-bsGBpGWB.js";import"./course-3-DSDYLXDH.js";import"./news-2-BoPV_wZg.js";import"./news-1-DmTxuqk6.js";import"./news-3-CbYQUwuB.js";const c=b[1],B=z(c),a=H[0],n=T[0],ee={title:"UI Kit/Материалы/ContentHeader",id:"ui-kit-contentheader",component:d,tags:["autodocs"],args:{title:c.title,section:"Курсы",topic:c.theme,lead:B.description},argTypes:{title:{control:"text"},section:{control:"text",description:"Раздел жирным над названием; нет — надписи нет (в панели сбоку она в шапке панели)"},topic:{control:"text",description:"Тема после раздела"},date:{control:"text",description:"Дата над названием (новость) — вместо раздела"},lead:{control:"text",description:"Описание P1 под названием"},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Шапка материала, курса, новости и документа — одна на все страницы и панели сбоку. Сверху вниз через 12: надпись «Раздел · тема» и / или дата (новость, материал), название, строки под названием (`children`: просмотры и звезда, реакции, кнопки документа), описание `lead`. Авторов в шапке нет (2026-10-21: публикуют только админы)."}}},decorators:[t=>e.jsx("div",{style:{width:720,padding:24,background:"var(--color-surface)",borderRadius:30},children:e.jsx(t,{})})]},o={},r={args:{title:a.title,section:"База знаний",topic:a.theme,lead:void 0},render:t=>{const[I,R]=j.useState(!1);return e.jsx(d,{...t,children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[e.jsx(F,{tone:"gray",size:"control",icon:e.jsx(y,{size:16}),children:a.views}),e.jsx(C,{tone:"gray",active:I,onChange:R})]})})}},i={args:{title:n.title,section:void 0,topic:void 0,date:n.date,lead:void 0},render:t=>e.jsx(d,{...t,children:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(s,{kind:"static",icon:e.jsx(S,{size:16}),count:n.comments,label:"Комментарии"}),e.jsx(s,{kind:"action",icon:e.jsx(E,{size:16}),count:n.shares,label:"Поделиться"}),e.jsx(s,{kind:"toggle",icon:e.jsx(k,{size:16}),count:n.likes,label:"Нравится"})]})})},te=["Курс","Материал","Новость"];var l,u,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,g,f;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,v,h;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};export{te as __namedExportsOrder,ee as default,o as Курс,r as Материал,i as Новость};
