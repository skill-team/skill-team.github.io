import{r as u,j as e}from"./iframe-DF43zbcH.js";import{F as c}from"./FileAttachment-BeztbA9i.js";import{M as y}from"./MaterialRow-Cbg5JMG7.js";import{R as f}from"./ListRow-dgY53sko.js";import{D as p}from"./DetailLayout-B5Rt3lB4.js";import{R as x}from"./materialsData-DO952muv.js";import"./preload-helper-C1FmrZbK.js";import"./FileTypeBadge-CFNmaWvf.js";import"./ProgressBar-B05D_HF0.js";import"./FavoriteButton-CUBxMJhw.js";import"./Archive-NbaJro7L.js";import"./index-Dc-2W6eP.js";import"./ContextIsolator-CGgXIIAn.js";import"./context-Bvlc22x8.js";import"./useTruncated-Bc6x0L2e.js";import"./Scrollbar-DaPov4DG.js";import"./SideModal-DhyoKxEd.js";import"./index-CpVVr_3u.js";import"./KeyCode-lh1qUinJ.js";import"./pickAttrs-D5cNfL7C.js";import"./context-pxAaBSXq.js";import"./CloseOutlined-ep7nLCB3.js";import"./extendsObject-78o_rR5W.js";import"./useLocale-DdUAtv3I.js";import"./course-1--YiCqOCo.js";import"./course-3-DSDYLXDH.js";const i=x.slice(0,8),K={title:"UI Kit/Лейаут/DetailLayout",id:"ui-kit-detaillayout",component:p,tags:["autodocs"],args:{children:null,onClose:()=>{},splitAt:900},argTypes:{splitAt:{control:{type:"number",min:600,max:1600,step:20},description:"С какой ширины блока — рядом, а не поверх (на сайте 1280)"},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},panel:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},panelLabel:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onClose:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onExpand:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{layout:"fullscreen",docs:{story:{inline:!1,height:"720px"},description:{component:"«Список + открытое сбоку» — реестры на больших экранах: вместо перехода на страницу материал открывается панелью справа, список слева становится короче.\n\n- **Широко** (блок не уже `splitAt`, на сайте 1280 — экран от ~1600): список 40%, панель 60% — на высоту экрана под шапкой, своя прокрутка, сверху подпись, «Открыть целиком ↗» и крестик.\n- **Уже** — панель выезжает поверх справа (`SideModal`), внизу «Открыть целиком».\n- **Телефон** — страница открывает материал обычным переходом (решает страница).\n\n`placeholder` — место справа есть всегда: пока ничего не открыто, там подсказка, и список не меняет ширину при открытии. Закрыть — крестик, Esc. Что открыто и адрес (`?open=id`) — забота страницы. Пример на сайте — «База знаний» списком."}}}},n={render:m=>{const[r,a]=u.useState(i[0].id),t=i.find(o=>o.id===r);return e.jsx("div",{style:{padding:24,background:"var(--color-background)",minHeight:"100vh",boxSizing:"border-box"},children:e.jsx(p,{splitAt:m.splitAt,onClose:()=>a(null),onExpand:()=>{},placeholder:e.jsx("span",{style:{fontFamily:"var(--font-family-body)",color:"var(--color-text-tertiary)"},children:"Выберите материал для просмотра"}),panelLabel:t?`База знаний · ${t.theme}`:void 0,panel:t&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,fontFamily:"var(--font-family-body)"},children:[e.jsx("h2",{style:{margin:0},children:t.title}),e.jsx("p",{style:{margin:0},children:t.text}),e.jsx(c,{name:t.file.name,size:t.file.size,onPreview:()=>{},onDownload:()=>{}})]}),children:e.jsx("div",{style:{background:"var(--color-surface)",borderRadius:30,padding:24},children:e.jsx(f,{children:i.map(o=>e.jsx(y,{title:o.title,selected:o.id===r,onOpen:()=>a(o.id)},o.id))})})})})}},U=["Playground"];var l,s,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
              {ITEMS.map(x => <MaterialRow key={x.id} title={x.title} selected={x.id === open} onOpen={() => setOpen(x.id)} />)}
            </RowList>
          </div>
        </DetailLayout>
      </div>;
  }
}`,...(d=(s=n.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};export{n as Playground,U as __namedExportsOrder,K as default};
