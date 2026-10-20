import{j as e}from"./iframe-BFd96KHm.js";import{D as t}from"./DragScroll-B4f7bZYv.js";import"./preload-helper-C1FmrZbK.js";const m={title:"UI Kit/Лейаут/DragScroll",id:"ui-kit-dragscroll",component:t,tags:["autodocs"],args:{gap:24,bleed:0,children:null},argTypes:{gap:{control:{type:"number",min:0,max:48,step:4}},bleed:{control:{type:"number",min:0,max:48,step:4},description:"Вылет за отступы родителя — элементы уезжают под край"},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Горизонтальная лента без стрелок: листается перетягиванием мышью, тачпадом и пальцем (нативная прокрутка), полосы прокрутки нет. Перетянули больше чем на 5 px — клик по элементу под курсором не срабатывает. Используется в `CardSlider`."}}}},r={render:i=>e.jsx("div",{style:{width:600,padding:24,background:"var(--color-surface)",borderRadius:30,overflow:"hidden"},children:e.jsx(t,{...i,children:Array.from({length:10},(l,a)=>e.jsx("div",{style:{width:160,height:100,borderRadius:20,background:"var(--gray-150)",display:"grid",placeItems:"center",fontFamily:"var(--font-family-body)",color:"var(--gray-700)"},children:a+1},a))})})},p=["Playground"];var n,o,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => <div style={{
    width: 600,
    padding: 24,
    background: "var(--color-surface)",
    borderRadius: 30,
    overflow: "hidden"
  }}>
      <DragScroll {...args}>
        {Array.from({
        length: 10
      }, (_, i) => <div key={i} style={{
        width: 160,
        height: 100,
        borderRadius: 20,
        background: "var(--gray-150)",
        display: "grid",
        placeItems: "center",
        fontFamily: "var(--font-family-body)",
        color: "var(--gray-700)"
      }}>
            {i + 1}
          </div>)}
      </DragScroll>
    </div>
}`,...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};export{r as Playground,p as __namedExportsOrder,m as default};
