import{r as m,j as t}from"./iframe-BjwqOSi3.js";import{F as b}from"./FavoriteButton-B05oULjs.js";import{N as s}from"./NewsCard-Cq-uKe3e.js";import{R as g}from"./materialsData-DO952muv.js";import{n as x}from"./news-1-DmTxuqk6.js";import{N as p}from"./newsData-C0ooMCpD.js";import"./preload-helper-C1FmrZbK.js";import"./Archive-DO3N_KQw.js";import"./index-ZErZfhiV.js";import"./ContextIsolator-t4IZH0Aw.js";import"./context-CGGttlbE.js";import"./ReactionButton-_rFtCBRQ.js";import"./course-1--YiCqOCo.js";import"./course-3-DSDYLXDH.js";const o=p[0],G={title:"UI Kit/Карточки/NewsCard",id:"ui-kit-newscard",component:s,tags:["autodocs"],args:{image:x,title:o.title,text:o.text,date:o.date,comments:o.comments,shares:o.shares,likes:o.likes,liked:o.liked},argTypes:{image:{control:"inline-radio",options:["С картинкой","Без картинки"],mapping:{"С картинкой":x,"Без картинки":void 0},description:"Картинка необязательна: без неё текста помещается больше"},title:{control:"text",description:"Не больше 2 строк — дальше «…»"},text:{control:"text",description:"Сколько строк влезет — дальше «…». Абзацы — пустой строкой"},date:{control:"text"},comments:{control:"number",description:"0 — только иконка"},shares:{control:"number"},likes:{control:"number"},liked:{control:"boolean",description:"Лайк поставлен — сердце и число красным"},onLikeChange:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onShare:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},actions:{control:!1,table:{category:"Для разработчиков — передаётся из кода"},description:"Своя кнопка внизу справа вместо реакций"},tag:{control:"text",description:"Подпись внизу слева от actions — тема материала"},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Карточка новости, с картинкой и без. 297×334, вид — как у `CourseCard`: без обводки, лёгкая тень, отступы 12, скругление 24, картинка со скруглением 12.\n\n- **Картинка** 108 — необязательна (переключатель `image` в панели ниже). Без неё текст новости занимает освободившееся место.\n- **Дата** — `Caption Small` с разрядкой 1px, цвет `gray-main` — как надзаголовок «03 — РЕЙТИНГ»; **название** — `H5` (SemiBold 16), не больше 2 строк; **текст** — `P2` (Regular 16), сколько строк влезет, на последней «…».\n- **Реакции** (`ReactionButton`): комментарии — только число (без наведения); «поделиться» — кнопка (наведение и нажатие); лайк — переключатель, поставленный — сердце и число праймари красным. Число — Montserrat Regular 14 (`P3`).\n- Вся карточка открывает новость (`onOpen`), кроме кнопок реакций; наведение и нажатие — как у `CourseCard`.\n- **`actions`** — своя кнопка внизу справа вместо реакций. Так та же карточка служит материалом «Базы знаний»: сверху дата, внизу тема (`tag`) слева и звезда `FavoriteButton tone="gray"` (`actions`) справа (история «Материал базы знаний»).'}}},decorators:[n=>t.jsx("div",{style:{padding:24,background:"var(--color-background)"},children:t.jsx(n,{})})]},i={render:n=>{const[a,d]=m.useState(n.liked??!1),[e,r]=m.useState(""),c=(n.likes??0)+(a&&!n.liked?1:0)-(!a&&n.liked?1:0);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"flex-start"},children:[t.jsx(s,{...n,liked:a,likes:c,onLikeChange:d,onShare:()=>r("Поделились"),onOpen:()=>r("Открыли новость")}),t.jsx("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:e||"Нажми сердце, «поделиться» или карточку"})]})}},u={name:"С картинкой и без",render:()=>t.jsxs("div",{style:{display:"flex",gap:24},children:[t.jsx(s,{...p[0]}),t.jsx(s,{...p[1]})]})},l={name:"Материал базы знаний",render:()=>{const n=[g[0],g[1]],[a,d]=m.useState(Object.fromEntries(n.map(e=>[e.id,e.favorite])));return t.jsx("div",{style:{display:"flex",gap:24},children:n.map(e=>t.jsx(s,{title:e.title,text:e.text,date:e.date,tag:e.theme,image:e.image,actions:t.jsx(b,{tone:"gray",active:a[e.id],onChange:r=>d(c=>({...c,[e.id]:r}))})},e.id))})}},W=["Playground","СКартинкойИБез","МатериалБазыЗнаний"];var f,y,k;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(k=(y=i.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var v,S,E;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "С картинкой и без",
  render: () => <div style={{
    display: "flex",
    gap: 24
  }}>
      <NewsCard {...NEWS_ITEMS[0]} />
      <NewsCard {...NEWS_ITEMS[1]} />
    </div>
}`,...(E=(S=u.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var C,h,B;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(B=(h=l.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};export{i as Playground,W as __namedExportsOrder,G as default,l as МатериалБазыЗнаний,u as СКартинкойИБез};
