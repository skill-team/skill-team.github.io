import{r as l,j as e}from"./iframe-DCXgeGQz.js";import{n as d,N as i,a as r}from"./newsData-BUKnAVAN.js";import"./preload-helper-C1FmrZbK.js";import"./Upload-CUGaEg8S.js";import"./ReactionButton-CfjJhJ5u.js";const s=i[0],B={title:"UI Kit/Карточки/NewsCard",id:"ui-kit-newscard",component:r,tags:["autodocs"],args:{image:d,title:s.title,text:s.text,date:s.date,comments:s.comments,shares:s.shares,likes:s.likes,liked:s.liked},argTypes:{image:{control:"inline-radio",options:["С картинкой","Без картинки"],mapping:{"С картинкой":d,"Без картинки":void 0},description:"Картинка необязательна: без неё текста помещается больше"},title:{control:"text",description:"Не больше 2 строк — дальше «…»"},text:{control:"text",description:"Сколько строк влезет — дальше «…». Абзацы — пустой строкой"},date:{control:"text"},comments:{control:"number",description:"0 — только иконка"},shares:{control:"number"},likes:{control:"number"},liked:{control:"boolean",description:"Лайк поставлен — сердце и число красным"},onLikeChange:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onShare:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Карточка новости — Figma Setl, News card `2115:143406` (с картинкой) и `2115:143429` (без). 297×334, вид — как у `CourseCard`: без обводки, лёгкая тень, отступы 12, скругление 24 (в макете обводка и 16).\n\n- **Картинка** 108 — необязательна (переключатель `image` в панели ниже). Без неё текст новости занимает освободившееся место.\n- **Дата** — `Caption Small` с разрядкой 1px, цвет `gray-main` — как надзаголовок «03 — РЕЙТИНГ»; **название** — `H5` (SemiBold 16), не больше 2 строк; **текст** — `P2` (Regular 16), сколько строк влезет, на последней «…».\n- **Реакции** (`ReactionButton`): комментарии — только число (без наведения); «поделиться» — кнопка (наведение и нажатие); лайк — переключатель, поставленный — сердце и число праймари красным. Число — Montserrat Regular 14 (`P3`).\n- Вся карточка открывает новость (`onOpen`), кроме кнопок реакций; наведение и нажатие — как у `CourseCard`."}}},decorators:[t=>e.jsx("div",{style:{padding:24,background:"var(--color-background)"},children:e.jsx(t,{})})]},n={render:t=>{const[a,y]=l.useState(t.liked??!1),[f,u]=l.useState(""),S=(t.likes??0)+(a&&!t.liked?1:0)-(!a&&t.liked?1:0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,alignItems:"flex-start"},children:[e.jsx(r,{...t,liked:a,likes:S,onLikeChange:y,onShare:()=>u("Поделились"),onOpen:()=>u("Открыли новость")}),e.jsx("span",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:f||"Нажми сердце, «поделиться» или карточку"})]})}},o={name:"С картинкой и без",render:()=>e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsx(r,{...i[0]}),e.jsx(r,{...i[1]})]})},j=["Playground","СКартинкойИБез"];var c,m,p;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,k,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "С картинкой и без",
  render: () => <div style={{
    display: "flex",
    gap: 24
  }}>
      <NewsCard {...NEWS_ITEMS[0]} />
      <NewsCard {...NEWS_ITEMS[1]} />
    </div>
}`,...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};export{n as Playground,j as __namedExportsOrder,B as default,o as СКартинкойИБез};
