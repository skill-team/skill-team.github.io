import{j as e,r as f,B as j}from"./iframe-DATgQ8vN.js";import{S as o}from"./SegmentedProgress-BtZhltuN.js";import"./preload-helper-C1FmrZbK.js";const E={title:"UI Kit/Профиль/SegmentedProgress",id:"ui-kit-segmentedprogress",component:o,tags:["autodocs"],args:{total:6,current:2,progress:.57},argTypes:{total:{control:{type:"number",min:1,max:6}},current:{control:{type:"number",min:1,max:6},description:"Текущий уровень, с 1"},progress:{control:{type:"range",min:0,max:1,step:.05},description:"Доля текущего уровня"},ariaLabel:{control:"text"}},decorators:[r=>e.jsx("div",{style:{width:319},children:e.jsx(r,{})})],parameters:{docs:{description:{component:"Прогресс по уровням («колбаски»). Сегмент на уровень: высота 24, скругление 4, между сегментами 4. Пройденные — залиты, текущий — на долю `progress`, будущие — пустые (`--level-track`, gray-150). Заливка — подложка + полоски под 45° цветом уровня (`--level-N-fill` / `--level-N-stripe`).\n\n**Анимация**: при появлении сегменты заполняются слева направо по очереди (0.6 с, задержка 120 мс на сегмент, фирменная кривая кита). Если в системе включено «Уменьшить движение» — сразу без анимации.\n\n| Проп | Значения |\n|---|---|\n| `total` | число (6) |\n| `current` | 1…total |\n| `progress` | 0…1 |"}}}},s={},t={render:r=>{const[x,y]=f.useState(0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx("div",{style:{width:"100%"},children:e.jsx(o,{...r},x)}),e.jsx(j,{variant:"secondary",size:"small",onClick:()=>y(v=>v+1),children:"Повторить"})]})}},n={name:"Все уровни",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[1,2,3,4,5,6].map(r=>e.jsx(o,{total:6,current:r,progress:.5},r))})},P=["Playground","Анимация","Уровни"];var a,i,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(i=s.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,u,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [run, setRun] = useState(0);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start"
    }}>
        <div style={{
        width: "100%"
      }}>
          <SegmentedProgress key={run} {...args} />
        </div>
        <Button variant="secondary" size="small" onClick={() => setRun(n => n + 1)}>
          Повторить
        </Button>
      </div>;
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,p,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Все уровни",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      {[1, 2, 3, 4, 5, 6].map(n => <SegmentedProgress key={n} total={6} current={n} progress={0.5} />)}
    </div>
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};export{s as Playground,P as __namedExportsOrder,E as default,t as Анимация,n as Уровни};
