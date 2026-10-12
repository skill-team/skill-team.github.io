import{j as u,n as j,r as A,h as B,t as k}from"./iframe-CFCi-G_z.js";import{M as i}from"./MenuItem-BiBpvyeo.js";import"./preload-helper-C1FmrZbK.js";import"./Bulb-Bpml80cL.js";const C=208;function w({title:e,children:a}){return u.jsxs("div",{style:{width:C,display:"flex",flexDirection:"column",gap:8},children:[u.jsx("span",{style:{fontFamily:"system-ui, sans-serif",fontSize:12,color:"#7e7e7e"},children:e}),u.jsx("div",{style:{background:"var(--menu-surface-panel)",borderRadius:"var(--radius-l)",display:"flex",flexDirection:"column",gap:"var(--space-2)"},children:a})]})}const S=["main","group","child"],I=["default","selected","disabled"],R={main:u.jsx(j,{}),group:u.jsx(B,{}),child:null},_={main:"Главная",group:"Новости",child:"Все новости"},N={title:"UI Kit/Навигация/MenuItem",id:"ui-kit-menuitem",component:i,tags:["autodocs"],args:{label:"Главная",icon:u.jsx(j,{}),variant:"main",status:"default",expanded:!1,badge:""},argTypes:{label:{control:"text",description:"Текст пункта"},variant:{control:"inline-radio",options:S,description:"main — пункт; group — со стрелкой, разворачивает детей; child — вложенный, точка вместо иконки"},status:{control:"inline-radio",options:I},expanded:{control:"boolean",description:"Только для group: стрелка развёрнута"},badge:{control:"text",description:"Счётчик-пилюля справа, например 9+. Пусто — нет",table:{category:"Слоты"}},icon:{control:!1,table:{category:"Для разработчиков — передаётся из кода"},description:"Иконка из components/icons"}},decorators:[(e,a)=>a.name==="Варианты"?u.jsx(e,{}):u.jsx("div",{style:{width:C,background:"var(--menu-surface-panel)",borderRadius:"var(--radius-l)"},children:u.jsx(e,{})})],parameters:{docs:{description:{component:"Строка меню — молекула: иконка или точка + текст + необязательные стрелка и счётчик. Живёт в `components/molecules/MenuItem`. Только вид: в меню её ставит `SideMenu` (antd `Menu`), он же ведёт выбор, раскрытие групп и клавиатуру.\nFigma Setl, node `261:22369` (Menu__items). Цвета — токены `--menu-*`.\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| `variant` | `main` · `group` · `child` | Type=Main · Groupe · Сhild |\n| `status` | `default` · `selected` · `disabled` | Status=Default · Selected · Disabled |\n| `expanded` | true / false | стрелка вниз / вверх |\n| `badge` | текст | Bulb (скрытый слой) |\n\nHover — настоящее наведение: серая подложка `--menu-surface-hover`. У выбранного пункта подложки нет — только красный текст и иконка (решение дизайнера, в Figma подложка есть).\nТекст не обрезается — переносится на новую строку. `child` — обычное начертание (Button 1, Regular), не жирное.\n\n**Не сверено с Figma:** цвета и форма счётчика; палитра `main` и `child` взята по аналогии с `group`."}}}},n={},r={parameters:{docs:{description:{story:"Типы пункта × статусы. Наведи на любой — hover."}}},render:()=>u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:32},children:I.map(e=>u.jsx(w,{title:e,children:S.map(a=>u.jsx(i,{label:_[a],icon:R[a],variant:a,status:e},a))},e))})},s={parameters:{docs:{description:{story:"Стрелка группы поворачивается при раскрытии. Здесь клик переключает её вручную; в меню раскрытие ведёт SideMenu."}}},render:()=>{const[e,a]=A.useState(!1);return u.jsx(i,{label:"Новости",icon:u.jsx(B,{}),variant:"group",expanded:e,onClick:()=>a(M=>!M)})}},o={name:"Со счётчиком",args:{label:"Админ панель",icon:u.jsx(k,{}),badge:"9+"}},t={name:"Длинный текст",args:{label:"Панель управления курсами и учебными программами",badge:"12"}},O=["Playground","Варианты","Группа","СоСчётчиком","ДлинныйТекст"];var c,d,l;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(l=(d=n.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var p,m,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Типы пункта × статусы. Наведи на любой — hover."
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: 32
  }}>
      {statuses.map(status => <Column key={status} title={status}>
          {variants.map(variant => <MenuItem key={variant} label={labelFor[variant]} icon={iconFor[variant]} variant={variant} status={status} />)}
        </Column>)}
    </div>
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var x,b,f;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Стрелка группы поворачивается при раскрытии. Здесь клик переключает её вручную; в меню раскрытие ведёт SideMenu."
      }
    }
  },
  render: () => {
    const [expanded, setExpanded] = useState(false);
    return <MenuItem label="Новости" icon={<IconNews />} variant="group" expanded={expanded} onClick={() => setExpanded(v => !v)} />;
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,y,F;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Со счётчиком",
  args: {
    label: "Админ панель",
    icon: <IconPanel />,
    badge: "9+"
  }
}`,...(F=(y=o.parameters)==null?void 0:y.docs)==null?void 0:F.source}}};var h,D,E;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Длинный текст",
  args: {
    label: "Панель управления курсами и учебными программами",
    badge: "12"
  }
}`,...(E=(D=t.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};export{n as Playground,O as __namedExportsOrder,N as default,r as Варианты,s as Группа,t as ДлинныйТекст,o as СоСчётчиком};
