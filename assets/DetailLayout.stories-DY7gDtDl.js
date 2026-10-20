import{r as u,j as e}from"./iframe-xHeXyRUt.js";import{F as c}from"./FileAttachment-CimBpC6h.js";import{M as y}from"./MaterialRow-euT9tEwT.js";import{R as x}from"./ListRow-nZbbBl3p.js";import{D as p}from"./DetailLayout-W8nO2adW.js";import{R as f}from"./materialsData-DO952muv.js";import"./preload-helper-C1FmrZbK.js";import"./FileTypeBadge-4RcTRARI.js";import"./ProgressBar-DDDjj0Dt.js";import"./FavoriteButton-DvnnaTL6.js";import"./Archive-BNxmIM9q.js";import"./index-DAOdAdyQ.js";import"./ContextIsolator-BRwUpuIq.js";import"./context-YSLqM9pP.js";import"./useTruncated-DZT6EyQu.js";import"./Scrollbar-go_vQ20i.js";import"./SideModal-DwrMrlTd.js";import"./index-C3rIXwUN.js";import"./KeyCode-lh1qUinJ.js";import"./pickAttrs-BwR6N1Ic.js";import"./context-DqPORx0F.js";import"./CloseOutlined-Ba06t28w.js";import"./extendsObject-78o_rR5W.js";import"./useLocale-C5RInZ-8.js";import"./course-1--YiCqOCo.js";import"./course-3-DSDYLXDH.js";const i=f.slice(0,8),K={title:"UI Kit/Лейаут/DetailLayout",id:"ui-kit-detaillayout",component:p,tags:["autodocs"],args:{children:null,onClose:()=>{},splitAt:900},argTypes:{splitAt:{control:{type:"number",min:600,max:1600,step:20},description:"С какой ширины блока — рядом, а не поверх (на сайте 1280)"},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},panel:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},panelLabel:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onClose:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onExpand:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{layout:"fullscreen",docs:{story:{inline:!1,height:"720px"},description:{component:"«Список + открытое сбоку» — реестры на больших экранах: вместо перехода на страницу материал открывается панелью справа, список слева становится короче.\n\n- **Широко** (блок не уже `splitAt`, на сайте 1280 — экран от ~1600): список 40%, панель 60% — на высоту экрана под шапкой, своя прокрутка, сверху подпись, «Открыть целиком ↗» и крестик.\n- **Уже** — панель выезжает поверх справа (`SideModal`), внизу «Открыть целиком».\n- **Телефон** — страница открывает материал обычным переходом (решает страница).\n\n`placeholder` — место справа есть всегда: пока ничего не открыто, там подсказка, и список не меняет ширину при открытии. Закрыть — крестик, Esc. Что открыто и адрес (`?open=id`) — забота страницы. Пример на сайте — «База знаний» списком."}}}},n={render:m=>{const[r,a]=u.useState(i[0].id),o=i.find(t=>t.id===r);return e.jsx("div",{style:{padding:24,background:"var(--color-background)",minHeight:"100vh",boxSizing:"border-box"},children:e.jsx(p,{splitAt:m.splitAt,onClose:()=>a(null),onExpand:()=>{},placeholder:e.jsx("span",{style:{fontFamily:"var(--font-family-body)",color:"var(--color-text-tertiary)"},children:"Выберите материал для просмотра"}),panelLabel:o?`База знаний · ${o.theme}`:void 0,panel:o&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,fontFamily:"var(--font-family-body)"},children:[e.jsx("h2",{style:{margin:0},children:o.title}),e.jsx("p",{style:{margin:0},children:o.text}),e.jsx(c,{name:o.file.name,size:o.file.size,onPreview:()=>{},onDownload:()=>{}})]}),children:e.jsx("div",{style:{background:"var(--color-surface)",borderRadius:30,padding:24},children:e.jsx(x,{children:i.map(t=>e.jsx(y,{title:t.title,text:t.text,date:t.date,theme:t.theme,selected:t.id===r,onOpen:()=>a(t.id)},t.id))})})})})}},U=["Playground"];var l,s,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState<string | null>(ITEMS[0].id);
    const m = ITEMS.find(x => x.id === open);
    return <div style={{
      padding: 24,
      background: "var(--color-background)",
      minHeight: "100vh",
      boxSizing: "border-box"
    }}>
        <DetailLayout splitAt={args.splitAt} onClose={() => setOpen(null)} onExpand={() => {}} placeholder={<span style={{
        fontFamily: "var(--font-family-body)",
        color: "var(--color-text-tertiary)"
      }}>Выберите материал для просмотра</span>} panelLabel={m ? \`База знаний · \${m.theme}\` : undefined} panel={m && <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        fontFamily: "var(--font-family-body)"
      }}>
                <h2 style={{
          margin: 0
        }}>{m.title}</h2>
                <p style={{
          margin: 0
        }}>{m.text}</p>
                <FileAttachment name={m.file.name} size={m.file.size} onPreview={() => {}} onDownload={() => {}} />
              </div>}>
          <div style={{
          background: "var(--color-surface)",
          borderRadius: 30,
          padding: 24
        }}>
            <RowList>
              {ITEMS.map(x => <MaterialRow key={x.id} title={x.title} text={x.text} date={x.date} theme={x.theme} selected={x.id === open} onOpen={() => setOpen(x.id)} />)}
            </RowList>
          </div>
        </DetailLayout>
      </div>;
  }
}`,...(d=(s=n.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};export{n as Playground,U as __namedExportsOrder,K as default};
