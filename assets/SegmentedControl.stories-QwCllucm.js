import{r as o,j as e}from"./iframe-XQ_qeO9Z.js";import{S as u}from"./SegmentedControl-DVw1vK3m.js";import{a as C,I as x}from"./SymbolDelete-B_ol_RKH.js";import"./preload-helper-C1FmrZbK.js";import"./index--oqSavUY.js";import"./ContextIsolator-DJke2nN-.js";import"./context-BSOHyiuZ.js";const D={title:"UI Kit/Фильтры/SegmentedControl",id:"ui-kit-segmentedcontrol",component:u,tags:["autodocs"],args:{label:"Мои курсы",value:"all",options:[],onChange:()=>{}},argTypes:{label:{control:"text"},options:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},value:{control:!1},onChange:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Переключатель на несколько положений — личные фильтры реестра «Все · Я изучаю · Избранное». В макете они стояли тегами в одном ряду с темами; здесь вынесены отдельно, чтобы личное не смешивалось с категориями. Серая дорожка, выбранный — белая таблетка с лёгкой тенью; высота 40, как у тегов; работает вместе с выбранной темой. Иконки в сегментах возможны (проп `icon`), но в реестре курсов их убрали.\n\n| Проп | Значения | Где |\n|---|---|---|\n| `size` | `medium` 40 / `small` 32 | личные фильтры / режимы масштаба просмотрщика |\n| `iconOnly` | true — только иконки, 42, подпись в тултипе | переключатель вида реестра (`ViewSwitch`) |\n| `disabled` | true | пока документ грузится |"}}},decorators:[a=>e.jsx("div",{style:{padding:24,background:"var(--color-surface)",borderRadius:30,display:"flex",flexDirection:"column"},children:e.jsx(a,{})})]},n={render:a=>{const[s,l]=o.useState("all");return e.jsx(u,{label:a.label,value:s,onChange:l,options:[{value:"all",label:"Все"},{value:"studying",label:"Я изучаю"},{value:"favorite",label:"Избранное"}]})}},t={name:"Размеры и только иконки",render:()=>{const[a,s]=o.useState("all"),[l,r]=o.useState("width"),[p,g]=o.useState("cards");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[e.jsx(u,{label:"Мои курсы",value:a,onChange:s,options:[{value:"all",label:"Все"},{value:"studying",label:"Я изучаю"},{value:"favorite",label:"Избранное"}]}),e.jsx(u,{size:"small",label:"Масштаб",value:l,onChange:r,options:[{value:"actual",label:"100%"},{value:"width",label:"По ширине"},{value:"page",label:"Целиком"}]}),e.jsx(u,{size:"small",disabled:!0,label:"Масштаб",value:l,onChange:r,options:[{value:"actual",label:"100%"},{value:"width",label:"По ширине"},{value:"page",label:"Целиком"}]}),e.jsx(u,{iconOnly:!0,label:"Вид",value:p,onChange:g,options:[{value:"cards",label:"Карточками",icon:e.jsx(C,{size:16})},{value:"list",label:"Списком",icon:e.jsx(x,{size:16})}]})]})}},z=["Playground","Размеры"];var i,c,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var b,v,m;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(m=(v=t.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};export{n as Playground,z as __namedExportsOrder,D as default,t as Размеры};
