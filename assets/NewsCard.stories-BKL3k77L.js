import{r as g,j as e,l as R,$ as A}from"./iframe-xHeXyRUt.js";import{I as x}from"./InfoTag-B9QBGaiU.js";import{F}from"./FavoriteButton-DvnnaTL6.js";import{N as a}from"./NewsCard-6_WK_tXx.js";import{R as f}from"./materialsData-DO952muv.js";import{n as y}from"./news-1-DmTxuqk6.js";import{N as r}from"./newsData-C0ooMCpD.js";import"./preload-helper-C1FmrZbK.js";import"./Archive-BNxmIM9q.js";import"./index-DAOdAdyQ.js";import"./ContextIsolator-BRwUpuIq.js";import"./context-YSLqM9pP.js";import"./ReactionButton-DKSXb_1L.js";import"./course-1--YiCqOCo.js";import"./course-3-DSDYLXDH.js";const n=r[0],q={title:"UI Kit/Карточки/NewsCard",id:"ui-kit-newscard",component:a,tags:["autodocs"],args:{image:y,title:n.title,text:n.text,date:n.date,comments:n.comments,shares:n.shares,likes:n.likes,liked:n.liked},argTypes:{image:{control:"inline-radio",options:["С картинкой","Без картинки"],mapping:{"С картинкой":y,"Без картинки":void 0},description:"Картинка необязательна: без неё текста помещается больше"},title:{control:"text",description:"Не больше 2 строк — дальше «…»"},text:{control:"text",description:"Сколько строк влезет — дальше «…». Абзацы — пустой строкой"},date:{control:"text"},comments:{control:"number",description:"0 — только иконка"},shares:{control:"number"},likes:{control:"number"},liked:{control:"boolean",description:"Лайк поставлен — сердце и число красным"},onLikeChange:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onShare:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},actions:{control:!1,table:{category:"Для разработчиков — передаётся из кода"},description:"Своя кнопка внизу справа вместо реакций"},tag:{control:"text",description:"Подпись внизу слева от actions — тема материала"},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},status:{control:!1,table:{category:"Для разработчиков — передаётся из кода"},description:"Вместо реакций — плашка состояния неопубликованной новости (InfoTag): «Черновик», «Выйдет 28.10 в 10:00». Видит только автор"}},parameters:{docs:{description:{component:'Карточка новости, с картинкой и без. 297×334, вид — как у `CourseCard`: без обводки, лёгкая тень, отступы 12, скругление 24, картинка со скруглением 12.\n\n- **Картинка** 108 — необязательна (переключатель `image` в панели ниже). Без неё текст новости занимает освободившееся место.\n- **Дата** — `Caption Small` с разрядкой 1px, цвет `gray-main` — как надзаголовок «03 — РЕЙТИНГ»; **название** — `H5` (SemiBold 16), не больше 2 строк; **текст** — `P2` (Regular 16), сколько строк влезет, на последней «…».\n- **Реакции** (`ReactionButton`): комментарии — только число (без наведения); «поделиться» — кнопка (наведение и нажатие); лайк — переключатель, поставленный — сердце и число праймари красным. Число — Montserrat Regular 14 (`P3`).\n- Вся карточка открывает новость (`onOpen`), кроме кнопок реакций; наведение и нажатие — как у `CourseCard`.\n- **`actions`** — своя кнопка внизу справа вместо реакций. Так та же карточка служит материалом «Базы знаний»: сверху дата, внизу тема (`tag`) слева и звезда `FavoriteButton tone="gray"` (`actions`) справа (история «Материал базы знаний»).'}}},decorators:[s=>e.jsx("div",{style:{padding:24,background:"var(--color-background)"},children:e.jsx(s,{})})]},u={render:s=>{const[o,m]=g.useState(s.liked??!1),[t,i]=g.useState(""),p=(s.likes??0)+(o&&!s.liked?1:0)-(!o&&s.liked?1:0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"flex-start"},children:[e.jsx(a,{...s,liked:o,likes:p,onLikeChange:m,onShare:()=>i("Поделились"),onOpen:()=>i("Открыли новость")}),e.jsx("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:t||"Нажми сердце, «поделиться» или карточку"})]})}},l={name:"С картинкой и без",render:()=>e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsx(a,{...r[0]}),e.jsx(a,{...r[1]})]})},d={name:"Материал базы знаний",render:()=>{const s=[f[0],f[1]],[o,m]=g.useState(Object.fromEntries(s.map(t=>[t.id,t.favorite])));return e.jsx("div",{style:{display:"flex",gap:24},children:s.map(t=>e.jsx(a,{title:t.title,text:t.text,date:t.date,tag:t.theme,image:t.image,actions:e.jsx(F,{tone:"gray",active:o[t.id],onChange:i=>m(p=>({...p,[t.id]:i}))})},t.id))})}},c={name:"Черновик и запланированная",render:()=>e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsx(a,{...r[1],status:e.jsx(x,{tone:"gray",icon:e.jsx(R,{size:14}),size:"small",children:"Черновик"})}),e.jsx(a,{...r[0],status:e.jsx(x,{tone:"blue",icon:e.jsx(A,{size:14}),size:"small",children:"Выйдет 28.10 в 10:00"})})]})},J=["Playground","СКартинкойИБез","МатериалБазыЗнаний","НеОпубликована"];var k,v,E;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => {
    const [liked, setLiked] = useState(args.liked ?? false);
    const [msg, setMsg] = useState("");
    const likes = (args.likes ?? 0) + (liked && !args.liked ? 1 : 0) - (!liked && args.liked ? 1 : 0);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start"
    }}>
        <NewsCard {...args} liked={liked} likes={likes} onLikeChange={setLiked} onShare={() => setMsg("Поделились")} onOpen={() => setMsg("Открыли новость")} />
        <span style={{
        fontFamily: "var(--font-family-body)",
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>{msg || "Нажми сердце, «поделиться» или карточку"}</span>
      </div>;
  }
}`,...(E=(v=u.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var S,C,I;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "С картинкой и без",
  render: () => <div style={{
    display: "flex",
    gap: 24
  }}>
      <NewsCard {...NEWS_ITEMS[0]} />
      <NewsCard {...NEWS_ITEMS[1]} />
    </div>
}`,...(I=(C=l.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var j,h,b;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Материал базы знаний",
  render: () => {
    const items = [REGISTRY_MATERIALS[0], REGISTRY_MATERIALS[1]];
    const [fav, setFav] = useState<Record<string, boolean>>(Object.fromEntries(items.map(x => [x.id, x.favorite])));
    return <div style={{
      display: "flex",
      gap: 24
    }}>
        {items.map(x => <NewsCard key={x.id} title={x.title} text={x.text} date={x.date} tag={x.theme} image={x.image} actions={<FavoriteButton tone="gray" active={fav[x.id]} onChange={v => setFav(s => ({
        ...s,
        [x.id]: v
      }))} />} />)}
      </div>;
  }
}`,...(b=(h=d.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var B,T,N;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Черновик и запланированная",
  render: () => <div style={{
    display: "flex",
    gap: 24
  }}>
      <NewsCard {...NEWS_ITEMS[1]} status={<InfoTag tone="gray" icon={<IconEdit size={14} />} size="small">Черновик</InfoTag>} />
      <NewsCard {...NEWS_ITEMS[0]} status={<InfoTag tone="blue" icon={<IconClockCircle size={14} />} size="small">Выйдет 28.10 в 10:00</InfoTag>} />
    </div>
}`,...(N=(T=c.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};export{u as Playground,J as __namedExportsOrder,q as default,d as МатериалБазыЗнаний,c as НеОпубликована,l as СКартинкойИБез};
