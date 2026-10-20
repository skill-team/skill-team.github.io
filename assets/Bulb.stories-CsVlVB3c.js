import{j as t}from"./iframe-xHeXyRUt.js";import{B as n}from"./Bulb-De5iwoJT.js";import"./preload-helper-C1FmrZbK.js";const a=["black","red","blue","green","orange"],x={title:"UI Kit/Сообщения/Bulb",id:"ui-kit-bulb",component:n,tags:["autodocs"],args:{count:7,color:"red",max:99},argTypes:{count:{control:"text",description:"Число или текст. 0 и пусто — счётчика нет"},color:{control:"inline-radio",options:a},max:{control:"number",description:"Больше этого — «max+»"}},parameters:{docs:{description:{component:"Счётчик. Высота 20, мин. ширина 20, скругление 10, белый текст 10 (Montserrat SemiBold — стиль Caption Small).\n\n| Проп | Значения |\n|---|---|\n| `color` | `black` · `red` · `blue` · `green` · `orange` |\n| `count` | число / текст |\n| `max` | число (99) |\n\nГде стоит: пункт бокового меню (`MenuItem`, красный), кнопка шапки (`HeaderButton`, зелёный, на иконке)."}}}},e={},r={render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, max-content)",gap:"16px 24px",alignItems:"center"},children:[a.map(o=>t.jsx(n,{color:o,count:3},o)),a.map(o=>t.jsx(n,{color:o,count:120},o))]})},b=["Playground","Цвета"];var c,s,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var m,p,i;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(5, max-content)",
    gap: "16px 24px",
    alignItems: "center"
  }}>
      {colors.map(c => <Bulb key={c} color={c} count={3} />)}
      {colors.map(c => <Bulb key={c} color={c} count={120} />)}
    </div>
}`,...(i=(p=r.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};export{e as Playground,b as __namedExportsOrder,x as default,r as Цвета};
