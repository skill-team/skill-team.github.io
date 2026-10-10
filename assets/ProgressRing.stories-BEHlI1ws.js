import{j as r}from"./iframe-T1G-SIdY.js";import{P as a,I as d}from"./ProgressRing-DmxyxwW7.js";import"./preload-helper-C1FmrZbK.js";const x={title:"UI Kit/Карточки/ProgressRing",id:"ui-kit-progressring",component:a,tags:["autodocs"],args:{value:50,size:14},argTypes:{value:{control:{type:"range",min:0,max:100,step:5}},size:{control:{type:"number",min:10,max:48}}},parameters:{docs:{description:{component:"Маленькое кольцо прогресса — иконка в плашке «50%» карточки курса (Figma `2079:151019`). Круг 14, толщина 1.4, дуга — цветом текста плашки, дорожка `--info-tag-green-track`. В макете дуга нарисована на 50% картинкой — здесь считается от `value`."}}}},n={render:e=>r.jsxs(d,{tone:"green",icon:r.jsx(a,{...e}),children:[e.value,"%"]})},s={render:()=>r.jsx("div",{style:{display:"flex",gap:12},children:[0,10,25,50,75,100].map(e=>r.jsxs(d,{tone:"green",icon:r.jsx(a,{value:e}),children:[e,"%"]},e))})},v=["Playground","Шкала"];var o,t,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <InfoTag tone="green" icon={<ProgressRing {...args} />}>
      {args.value}%
    </InfoTag>
}`,...(i=(t=n.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var g,c,p;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12
  }}>
      {[0, 10, 25, 50, 75, 100].map(v => <InfoTag key={v} tone="green" icon={<ProgressRing value={v} />}>
          {v}%
        </InfoTag>)}
    </div>
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};export{n as Playground,v as __namedExportsOrder,x as default,s as Шкала};
