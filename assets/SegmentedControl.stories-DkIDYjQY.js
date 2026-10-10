import{r as o,j as e}from"./iframe-T1G-SIdY.js";import{S as u}from"./SegmentedControl-C0ghZS1z.js";import{c as C,b as x}from"./SymbolDelete-BWfO80vL.js";import"./preload-helper-C1FmrZbK.js";import"./index-CCOMMNKo.js";import"./context-BT_JPeuY.js";const A={title:"UI Kit/Фильтры/SegmentedControl",id:"ui-kit-segmentedcontrol",component:u,tags:["autodocs"],args:{label:"Мои курсы",value:"all",options:[],onChange:()=>{}},argTypes:{label:{control:"text"},options:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},value:{control:!1},onChange:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Переключатель на несколько положений — личные фильтры реестра «Все · Я изучаю · Избранное». В макете они стояли тегами в одном ряду с темами; здесь вынесены отдельно, чтобы личное не смешивалось с категориями. Серая дорожка, выбранный — белая таблетка с лёгкой тенью; высота 40, как у тегов; работает вместе с выбранной темой. Иконки в сегментах возможны (проп `icon`), но в реестре курсов их убрали.\n\n| Проп | Значения | Где |\n|---|---|---|\n| `size` | `medium` 40 / `small` 32 | личные фильтры / режимы масштаба просмотрщика |\n| `iconOnly` | true — только иконки, 42, подпись в тултипе | переключатель вида реестра (`ViewSwitch`) |\n| `disabled` | true | пока документ грузится |"}}},decorators:[l=>e.jsx("div",{style:{padding:24,background:"var(--color-surface)",borderRadius:30,display:"flex",flexDirection:"column"},children:e.jsx(l,{})})]},n={render:l=>{const[s,a]=o.useState("all");return e.jsx(u,{label:l.label,value:s,onChange:a,options:[{value:"all",label:"Все"},{value:"studying",label:"Я изучаю"},{value:"favorite",label:"Избранное"}]})}},t={name:"Размеры и только иконки",render:()=>{const[l,s]=o.useState("all"),[a,r]=o.useState("width"),[m,p]=o.useState("cards");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(u,{label:"Мои курсы",value:l,onChange:s,options:[{value:"all",label:"Все"},{value:"studying",label:"Я изучаю"},{value:"favorite",label:"Избранное"}]}),e.jsx(u,{size:"small",label:"Масштаб",value:a,onChange:r,options:[{value:"actual",label:"100%"},{value:"width",label:"По ширине"},{value:"page",label:"Целиком"}]}),e.jsx(u,{size:"small",disabled:!0,label:"Масштаб",value:a,onChange:r,options:[{value:"actual",label:"100%"},{value:"width",label:"По ширине"},{value:"page",label:"Целиком"}]}),e.jsx(u,{iconOnly:!0,label:"Вид",value:m,onChange:p,options:[{value:"cards",label:"Карточками",icon:e.jsx(C,{size:16})},{value:"list",label:"Списком",icon:e.jsx(x,{size:16})}]})]})}},D=["Playground","Размеры"];var i,c,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [v, setV] = useState("all");
    return <SegmentedControl label={args.label} value={v} onChange={setV} options={[{
      value: "all",
      label: "Все"
    }, {
      value: "studying",
      label: "Я изучаю"
    }, {
      value: "favorite",
      label: "Избранное"
    }]} />;
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var b,v,g;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Размеры и только иконки",
  render: () => {
    const [a, setA] = useState("all");
    const [b, setB] = useState("width");
    const [c, setC] = useState("cards");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start"
    }}>
        <SegmentedControl label="Мои курсы" value={a} onChange={setA} options={[{
        value: "all",
        label: "Все"
      }, {
        value: "studying",
        label: "Я изучаю"
      }, {
        value: "favorite",
        label: "Избранное"
      }]} />
        <SegmentedControl size="small" label="Масштаб" value={b} onChange={setB} options={[{
        value: "actual",
        label: "100%"
      }, {
        value: "width",
        label: "По ширине"
      }, {
        value: "page",
        label: "Целиком"
      }]} />
        <SegmentedControl size="small" disabled label="Масштаб" value={b} onChange={setB} options={[{
        value: "actual",
        label: "100%"
      }, {
        value: "width",
        label: "По ширине"
      }, {
        value: "page",
        label: "Целиком"
      }]} />
        <SegmentedControl iconOnly label="Вид" value={c} onChange={setC} options={[{
        value: "cards",
        label: "Карточками",
        icon: <IconFatGrid size={16} />
      }, {
        value: "list",
        label: "Списком",
        icon: <IconFatMenuMob size={16} />
      }]} />
      </div>;
  }
}`,...(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};export{n as Playground,D as __namedExportsOrder,A as default,t as Размеры};
