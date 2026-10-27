import{j as e,r as i}from"./iframe-wfJ_y6tk.js";import{H as v}from"./Header-CkZZaKGy.js";import{I as F,a as C,b as B}from"./Archive-Ban5Sfu5.js";import{D as s}from"./fieldParts-CNLa7vql.js";import"./preload-helper-C1FmrZbK.js";import"./HeaderButton-DkHr82R4.js";import"./Bulb-DSH1TJRF.js";const D=[{key:"favorites",label:"Избранное",icon:e.jsx(F,{}),iconColor:"var(--header-favorite-icon)"},{key:"notifications",label:"Уведомления",icon:e.jsx(C,{}),badge:3},{key:"profile",label:"Профиль",icon:e.jsx(B,{})}],H=1040,O={title:"UI Kit/Навигация/Header/Header",id:"ui-kit-header",component:v,tags:["autodocs"],args:{variant:"main",title:"Главная",backLabel:"Назад",actions:D},argTypes:{variant:{control:"inline-radio",options:["main","inner"],description:"main — заголовок; inner — кнопка «Назад»"},title:{control:"text"},backLabel:{control:"text"},actions:{...s,description:"Действия справа: { key, label, icon, badge, onClick, href }"},onBack:s,className:s},decorators:[u=>e.jsx("div",{style:{width:H},children:e.jsx(u,{})})],parameters:{docs:{source:{type:"code"},description:{component:"Шапка страницы над содержимым. (type=main / inner), собрана заново из частей кита.\n\n| Проп | Значения |\n|---|---|\n| `variant` | `main` · `inner` |\n| `title` | текст |\n| `backLabel`, `onBack` | текст («Назад»), действие |\n| `actions` | `{ key, label, icon, badge }[]` |\n\n**Устройство:**\n- Слева — такая же белая плашка, как справа: на главной в ней заголовок, внутри приложения — кнопка «Назад» того же типа, что «Избранное» (`HeaderButton`).\n- Справа — белая плашка 48 (шаг кнопок) с кнопками шапки `HeaderButton`: состояния (наведение `gray-150`, как у меню, нажатие `gray-300`), залитые иконки 16 из набора Fill, подписи 14 Montserrat Medium `gray-800`, зелёный счётчик на иконке.\n- Заголовок — стиль H4 (Montserrat SemiBold 18).\n\nМобильной шапки в ките пока нет."}}}},a={},o={args:{variant:"inner"}},r={name:"Без счётчиков",args:{actions:D.map(({badge:u,...n})=>n)}},t={parameters:{docs:{description:{story:"«Назад» и действия работают: строка под шапкой показывает, что нажато. Уведомления — счётчик сбрасывается."}}},render:()=>{const[u,n]=i.useState("—"),[S,j]=i.useState(3),I=[{key:"favorites",label:"Избранное",icon:e.jsx(F,{}),iconColor:"var(--header-favorite-icon)",onClick:()=>n("Избранное")},{key:"notifications",label:"Уведомления",icon:e.jsx(C,{}),badge:S,onClick:()=>{n("Уведомления"),j(0)}},{key:"profile",label:"Профиль",icon:e.jsx(B,{}),onClick:()=>n("Профиль")}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(v,{variant:"inner",actions:I,onBack:()=>n("Назад")}),e.jsxs("span",{style:{fontFamily:"system-ui, sans-serif",fontSize:13,color:"#7e7e7e"},children:["Нажато: ",u]})]})}},M=["Главная","Внутренняя","БезСчётчиков","Кликабельно"];var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,p,f;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "inner"
  }
}`,...(f=(p=o.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var y,b,k;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Без счётчиков",
  args: {
    actions: ACTIONS.map(({
      badge: _badge,
      ...a
    }) => a)
  }
}`,...(k=(b=r.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var g,x,E;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "«Назад» и действия работают: строка под шапкой показывает, что нажато. Уведомления — счётчик сбрасывается."
      }
    }
  },
  render: () => {
    const [last, setLast] = useState("—");
    const [unread, setUnread] = useState(3);
    const actions: HeaderAction[] = [{
      key: "favorites",
      label: "Избранное",
      icon: <IconFillStar />,
      iconColor: "var(--header-favorite-icon)",
      onClick: () => setLast("Избранное")
    }, {
      key: "notifications",
      label: "Уведомления",
      icon: <IconFillNotifications />,
      badge: unread,
      onClick: () => {
        setLast("Уведомления");
        setUnread(0);
      }
    }, {
      key: "profile",
      label: "Профиль",
      icon: <IconFillUser />,
      onClick: () => setLast("Профиль")
    }];
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 16
    }}>
        <Header variant="inner" actions={actions} onBack={() => setLast("Назад")} />
        <span style={{
        fontFamily: "system-ui, sans-serif",
        fontSize: 13,
        color: "#7e7e7e"
      }}>Нажато: {last}</span>
      </div>;
  }
}`,...(E=(x=t.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{M as __namedExportsOrder,O as default,r as БезСчётчиков,o as Внутренняя,a as Главная,t as Кликабельно};
