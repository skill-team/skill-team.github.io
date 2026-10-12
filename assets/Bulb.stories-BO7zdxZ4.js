import{j as t}from"./iframe-XQ_qeO9Z.js";import{B as a}from"./Bulb-9Dv9-nMu.js";import"./preload-helper-C1FmrZbK.js";const n=["black","red","blue","green","orange"],x={title:"UI Kit/Сообщения/Bulb",id:"ui-kit-bulb",component:a,tags:["autodocs"],args:{count:7,color:"red",max:99},argTypes:{count:{control:"text",description:"Число или текст. 0 и пусто — счётчика нет"},color:{control:"inline-radio",options:n},max:{control:"number",description:"Больше этого — «max+»"}},parameters:{docs:{description:{component:"Счётчик — Figma Setl, Bulb `284:63390`. Высота 20, мин. ширина 20, скругление 10, белый текст 10 (Montserrat SemiBold — стиль Caption Small).\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| `color` | `black` · `red` · `blue` · `green` · `orange` | type=black · red · blue · green · orange |\n| `count` | число / текст | 99+ |\n| `max` | число (99) | больше — «99+» |\n\nГде стоит: пункт бокового меню (`MenuItem`, красный), кнопка шапки (`HeaderButton`, зелёный, на иконке)."}}}},o={},r={render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, max-content)",gap:"16px 24px",alignItems:"center"},children:[n.map(e=>t.jsx(a,{color:e,count:3},e)),n.map(e=>t.jsx(a,{color:e,count:120},e))]})},b=["Playground","Цвета"];var c,s,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var m,p,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(5, max-content)",
    gap: "16px 24px",
    alignItems: "center"
  }}>
      {colors.map(c => <Bulb key={c} color={c} count={3} />)}
      {colors.map(c => <Bulb key={c} color={c} count={120} />)}
    </div>
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};export{o as Playground,b as __namedExportsOrder,x as default,r as Цвета};
