import{r as u,j as e}from"./iframe-DCXgeGQz.js";import{R as n}from"./ReactionButton-CfjJhJ5u.js";import{c as l,d,e as b}from"./Upload-CUGaEg8S.js";import"./preload-helper-C1FmrZbK.js";const z={title:"UI Kit/Кнопки/ReactionButton",id:"ui-kit-reactionbutton",component:n,tags:["autodocs"],args:{kind:"toggle",count:22,label:"Нравится",active:!1,icon:null},argTypes:{kind:{control:"inline-radio",options:["static","action","toggle"],description:"static — только число; action — кнопка; toggle — переключатель"},count:{control:"number",description:"0 — только иконка"},label:{control:"text"},active:{control:"boolean",description:"toggle: включено — красным"},icon:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onClick:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Реакция под новостью — Figma Setl, «Reactions» в News card `2115:143406`: серая таблетка `gray-150`, иконка 16 `gray-650`, число Montserrat Regular 14 (`P3`) `gray-main`; без числа — 28×24.\n\n| `kind` | Где | Наведение | Нажатие | Включено |\n|---|---|---|---|---|\n| `static` | комментарии | — | — | — |\n| `action` | поделиться | `gray-200` | `gray-300` | — |\n| `toggle` | лайк | `gray-200` | `gray-300` | иконка и число праймари красным |\n\nПокой уже `gray-150`, поэтому наведение — на шаг темнее (`gray-200`), нажатие — как у кнопок шапки (`gray-300`)."}}}},a={render:t=>{const[i,c]=u.useState(t.active??!1),r=t.kind==="static"?e.jsx(l,{size:16}):t.kind==="action"?e.jsx(d,{size:16}):e.jsx(b,{size:16});return e.jsx(n,{...t,icon:r,active:i,count:(t.count??0)+(i&&!t.active?1:0),onClick:()=>c(o=>!o)})}},s={name:"Все виды",render:()=>{const[t,i]=u.useState(!1),[c,r]=u.useState(1);return e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(n,{kind:"static",icon:e.jsx(l,{size:16}),count:5,label:"Комментарии"}),e.jsx(n,{kind:"action",icon:e.jsx(d,{size:16}),count:c,label:"Поделиться",onClick:()=>r(o=>o+1)}),e.jsx(n,{kind:"toggle",icon:e.jsx(b,{size:16}),count:22+(t?1:0),label:"Нравится",active:t,onClick:()=>i(o=>!o)}),e.jsx(n,{kind:"static",icon:e.jsx(l,{size:16}),label:"Комментарии"}),e.jsx(n,{kind:"action",icon:e.jsx(d,{size:16}),label:"Поделиться"})]})}},S=["Playground","Все"];var g,m,k;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};export{a as Playground,S as __namedExportsOrder,z as default,s as Все};
