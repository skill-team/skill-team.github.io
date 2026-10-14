import{j as u,O as a}from"./iframe-BffffG_H.js";import{I as e}from"./InfoTag-pTru7Vn7.js";import{P as B}from"./ProgressRing-CDntUi2Q.js";import"./preload-helper-C1FmrZbK.js";const A={title:"UI Kit/Карточки/InfoTag",id:"ui-kit-infotag",component:e,tags:["autodocs"],args:{tone:"blue",size:"medium",children:"10 минут"},argTypes:{size:{control:"inline-radio",options:["medium","small","large"],description:"small — 12, поля 2 × 5, скругление 8: узкие карточки, строки, шаги адаптации; large — таблетка 30, шрифт 16: баллы в строках списка"},tone:{control:"inline-radio",options:["blue","green","red","gray","purple","white"],description:"red — «Просрочен», gray — нейтральная (карта адаптации)"},children:{control:"text"},icon:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Плашка-метка на карточке — Figma Setl, «Tag» в Course card `2079:151010`: иконка 14 + текст Montserrat Medium 14 (`Button Small`), отступы 4/8, скругление 10.\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| `tone` | `blue` · `green` | длительность · прогресс |\n| `icon` | иконка 14 | Duration · кольцо прогресса (`ProgressRing`) |"}}}},n={render:E=>u.jsx(e,{...E,icon:u.jsx(a,{size:14})})},r={render:()=>u.jsxs("div",{style:{display:"flex",gap:12},children:[u.jsx(e,{tone:"blue",icon:u.jsx(a,{size:14}),children:"10 минут"}),u.jsx(e,{tone:"green",icon:u.jsx(B,{value:50}),children:"50%"})]})},o={name:"Крупная — баллы",parameters:{docs:{description:{story:'`size="large"` — «Status» из личного кабинета: таблетка 30, шрифт 16 (`Button Medium`), поля 0 × 8. Баллы и пороги в строках списка (`ListItem`).'}}},render:()=>u.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[u.jsx(e,{size:"large",tone:"gray",children:"+50"}),u.jsx(e,{size:"large",tone:"red",children:"7 297"}),u.jsx(e,{size:"large",tone:"blue",children:"от 300"}),u.jsx(e,{size:"large",tone:"green",children:"+30"})]})},s={name:"Белая — поверх картинки",parameters:{docs:{description:{story:'`tone="white"` — белая подложка, голубой текст: тег поверх картинки (срок назначенного курса на карточке, `AssignedBadge`). В строке и таблице тот же тег — голубой.'}}},render:()=>u.jsxs("div",{style:{display:"flex",gap:12,padding:16,borderRadius:12,background:"linear-gradient(135deg, #f6d7c6, #c9dcf3)"},children:[u.jsx(e,{tone:"white",icon:u.jsx(a,{size:14}),children:"до 30.10"}),u.jsx(e,{tone:"white",size:"small",icon:u.jsx(a,{size:12}),children:"Завтра"})]})},D=["Playground","Варианты","Крупная","Белая"];var i,t,c;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <InfoTag {...args} icon={<IconClockCircle size={14} />} />
}`,...(c=(t=n.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var d,l,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12
  }}>
      <InfoTag tone="blue" icon={<IconClockCircle size={14} />}>
        10 минут
      </InfoTag>
      <InfoTag tone="green" icon={<ProgressRing value={50} />}>
        50%
      </InfoTag>
    </div>
}`,...(g=(l=r.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var p,m,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Крупная — баллы",
  parameters: {
    docs: {
      description: {
        story: "\\\`size=\\"large\\"\\\` — «Status» из личного кабинета: таблетка 30, шрифт 16 (\\\`Button Medium\\\`), поля 0 × 8. Баллы и пороги в строках списка (\\\`ListItem\\\`)."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    gap: 12,
    alignItems: "center"
  }}>
      <InfoTag size="large" tone="gray">+50</InfoTag>
      <InfoTag size="large" tone="red">7 297</InfoTag>
      <InfoTag size="large" tone="blue">от 300</InfoTag>
      <InfoTag size="large" tone="green">+30</InfoTag>
    </div>
}`,...(f=(m=o.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var x,I,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Белая — поверх картинки",
  parameters: {
    docs: {
      description: {
        story: "\\\`tone=\\"white\\"\\\` — белая подложка, голубой текст: тег поверх картинки (срок назначенного курса на карточке, \\\`AssignedBadge\\\`). В строке и таблице тот же тег — голубой."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    gap: 12,
    padding: 16,
    borderRadius: 12,
    background: "linear-gradient(135deg, #f6d7c6, #c9dcf3)"
  }}>
      <InfoTag tone="white" icon={<IconClockCircle size={14} />}>до 30.10</InfoTag>
      <InfoTag tone="white" size="small" icon={<IconClockCircle size={12} />}>Завтра</InfoTag>
    </div>
}`,...(y=(I=s.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};export{n as Playground,D as __namedExportsOrder,A as default,s as Белая,r as Варианты,o as Крупная};
