import{r as s,j as u}from"./iframe-CFCi-G_z.js";import{S as e}from"./SegmentedControl-DuCUJl0N.js";import{a as C,I as x}from"./SymbolDelete-D5DlYVso.js";import"./preload-helper-C1FmrZbK.js";import"./index-zH042xrC.js";import"./ContextIsolator-DRazcLis.js";import"./context-x6QakU1z.js";const j={title:"UI Kit/Фильтры/SegmentedControl",id:"ui-kit-segmentedcontrol",component:e,tags:["autodocs"],args:{label:"Мои курсы",value:"all",options:[],onChange:()=>{}},argTypes:{label:{control:"text"},options:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},value:{control:!1},onChange:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Переключатель на несколько положений — личные фильтры реестра «Все · Я изучаю · Избранное». В макете они стояли тегами в одном ряду с темами; здесь вынесены отдельно, чтобы личное не смешивалось с категориями. Серая дорожка, выбранный — белая таблетка с лёгкой тенью; высота 40, как у тегов; работает вместе с выбранной темой. Иконки в сегментах возможны (проп `icon`), но в реестре курсов их убрали.\n\n| Проп | Значения | Где |\n|---|---|---|\n| `size` | `medium` 40 / `small` 32 | личные фильтры / режимы масштаба просмотрщика |\n| `iconOnly` | true — только иконки, 42, подпись в тултипе | переключатель вида реестра (`ViewSwitch`) |\n| `disabled` | true | пока документ грузится |\n| `count` в варианте | число | «Все 10» — разделы «Моё обучение» в личном кабинете |"}}},decorators:[l=>u.jsx("div",{style:{padding:24,background:"var(--color-surface)",borderRadius:30,display:"flex",flexDirection:"column"},children:u.jsx(l,{})})]},t={render:l=>{const[a,n]=s.useState("all");return u.jsx(e,{label:l.label,value:a,onChange:n,options:[{value:"all",label:"Все"},{value:"studying",label:"Я изучаю"},{value:"favorite",label:"Избранное"}]})}},o={name:"Размеры, счётчики, только иконки",render:()=>{const[l,a]=s.useState("all"),[n,r]=s.useState("width"),[p,m]=s.useState("cards");return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,alignItems:"flex-start"},children:[u.jsx(e,{label:"Мои курсы",value:l,onChange:a,options:[{value:"all",label:"Все"},{value:"studying",label:"Я изучаю"},{value:"favorite",label:"Избранное"}]}),u.jsx(e,{label:"Разделы обучения",value:l,onChange:a,options:[{value:"all",label:"Все",count:10},{value:"assigned",label:"Назначено",count:4},{value:"studying",label:"Я изучаю",count:2},{value:"favorite",label:"Избранное",count:2}]}),u.jsx(e,{size:"small",label:"Масштаб",value:n,onChange:r,options:[{value:"actual",label:"100%"},{value:"width",label:"По ширине"},{value:"page",label:"Целиком"}]}),u.jsx(e,{size:"small",disabled:!0,label:"Масштаб",value:n,onChange:r,options:[{value:"actual",label:"100%"},{value:"width",label:"По ширине"},{value:"page",label:"Целиком"}]}),u.jsx(e,{iconOnly:!0,label:"Вид",value:p,onChange:m,options:[{value:"cards",label:"Карточками",icon:u.jsx(C,{size:16})},{value:"list",label:"Списком",icon:u.jsx(x,{size:16})}]})]})}},B=["Playground","Размеры"];var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var b,v,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Размеры, счётчики, только иконки",
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
        <SegmentedControl label="Разделы обучения" value={a} onChange={setA} options={[{
        value: "all",
        label: "Все",
        count: 10
      }, {
        value: "assigned",
        label: "Назначено",
        count: 4
      }, {
        value: "studying",
        label: "Я изучаю",
        count: 2
      }, {
        value: "favorite",
        label: "Избранное",
        count: 2
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
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};export{t as Playground,B as __namedExportsOrder,j as default,o as Размеры};
