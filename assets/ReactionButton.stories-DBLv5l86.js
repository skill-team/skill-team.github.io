import{r as u,j as n}from"./iframe-DATgQ8vN.js";import{R as t}from"./ReactionButton-B5LHpwNh.js";import{c as l,d,e as b}from"./Archive-BfENcfBL.js";import"./preload-helper-C1FmrZbK.js";const F={title:"UI Kit/Кнопки/ReactionButton",id:"ui-kit-reactionbutton",component:t,tags:["autodocs"],args:{kind:"toggle",count:22,label:"Нравится",active:!1,icon:null},argTypes:{kind:{control:"inline-radio",options:["static","action","toggle"],description:"static — только число; action — кнопка; toggle — переключатель"},count:{control:"number",description:"0 — только иконка"},label:{control:"text"},active:{control:"boolean",description:"toggle: включено — красным"},icon:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onClick:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Реакция под новостью: серая таблетка `gray-150`, иконка 16 `gray-main`, число Montserrat Regular 14 (`P3`) `gray-main`; без числа — 28×24.\n\n| `kind` | Где | Наведение | Нажатие | Включено |\n|---|---|---|---|---|\n| `static` | комментарии | — | — | — |\n| `action` | поделиться | `gray-200` | `gray-300` | — |\n| `toggle` | лайк | `gray-200` | `gray-300` | иконка и число праймари красным |\n\nПокой уже `gray-150`, поэтому наведение — на шаг темнее (`gray-200`), нажатие — как у кнопок шапки (`gray-300`)."}}}},a={render:e=>{const[i,c]=u.useState(e.active??!1),r=e.kind==="static"?n.jsx(l,{size:16}):e.kind==="action"?n.jsx(d,{size:16}):n.jsx(b,{size:16});return n.jsx(t,{...e,icon:r,active:i,count:(e.count??0)+(i&&!e.active?1:0),onClick:()=>c(o=>!o)})}},s={name:"Все виды",render:()=>{const[e,i]=u.useState(!1),[c,r]=u.useState(1);return n.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[n.jsx(t,{kind:"static",icon:n.jsx(l,{size:16}),count:5,label:"Комментарии"}),n.jsx(t,{kind:"action",icon:n.jsx(d,{size:16}),count:c,label:"Поделиться",onClick:()=>r(o=>o+1)}),n.jsx(t,{kind:"toggle",icon:n.jsx(b,{size:16}),count:22+(e?1:0),label:"Нравится",active:e,onClick:()=>i(o=>!o)}),n.jsx(t,{kind:"static",icon:n.jsx(l,{size:16}),label:"Комментарии"}),n.jsx(t,{kind:"action",icon:n.jsx(d,{size:16}),label:"Поделиться"})]})}},S=["Playground","Все"];var g,m,k;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => {
    const [on, setOn] = useState(args.active ?? false);
    const icon = args.kind === "static" ? <IconFillComment size={16} /> : args.kind === "action" ? <IconFillShare size={16} /> : <IconFillHeart size={16} />;
    return <ReactionButton {...args} icon={icon} active={on} count={(args.count ?? 0) + (on && !args.active ? 1 : 0)} onClick={() => setOn(v => !v)} />;
  }
}`,...(k=(m=a.parameters)==null?void 0:m.docs)==null?void 0:k.source}}};var p,x,y;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Все виды",
  render: () => {
    const [liked, setLiked] = useState(false);
    const [shares, setShares] = useState(1);
    return <div style={{
      display: "flex",
      gap: 16,
      alignItems: "center"
    }}>
        <ReactionButton kind="static" icon={<IconFillComment size={16} />} count={5} label="Комментарии" />
        <ReactionButton kind="action" icon={<IconFillShare size={16} />} count={shares} label="Поделиться" onClick={() => setShares(n => n + 1)} />
        <ReactionButton kind="toggle" icon={<IconFillHeart size={16} />} count={22 + (liked ? 1 : 0)} label="Нравится" active={liked} onClick={() => setLiked(v => !v)} />
        <ReactionButton kind="static" icon={<IconFillComment size={16} />} label="Комментарии" />
        <ReactionButton kind="action" icon={<IconFillShare size={16} />} label="Поделиться" />
      </div>;
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};export{a as Playground,S as __namedExportsOrder,F as default,s as Все};
