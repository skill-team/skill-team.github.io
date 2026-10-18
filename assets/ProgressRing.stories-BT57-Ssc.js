import{j as r}from"./iframe-BjwqOSi3.js";import{I as m}from"./InfoTag-B_BO-mg6.js";import{P as o}from"./ProgressRing-BWRcJAjL.js";import"./preload-helper-C1FmrZbK.js";const f={title:"UI Kit/Карточки/ProgressRing",id:"ui-kit-progressring",component:o,tags:["autodocs"],args:{value:50,size:14},argTypes:{value:{control:{type:"range",min:0,max:100,step:5}},size:{control:{type:"number",min:10,max:48}}},parameters:{docs:{description:{component:"Маленькое кольцо прогресса — иконка в плашке «50%» карточки курса. Круг 14, толщина 1.4, дуга — цветом текста плашки, дорожка `--info-tag-green-track`. Дуга считается от `value`."}}}},n={render:e=>r.jsxs(m,{tone:"green",icon:r.jsx(o,{...e}),children:[e.value,"%"]})},s={render:()=>r.jsx("div",{style:{display:"flex",gap:12},children:[0,10,25,50,75,100].map(e=>r.jsxs(m,{tone:"green",icon:r.jsx(o,{value:e}),children:[e,"%"]},e))})},v=["Playground","Шкала"];var a,t,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};export{n as Playground,v as __namedExportsOrder,f as default,s as Шкала};
