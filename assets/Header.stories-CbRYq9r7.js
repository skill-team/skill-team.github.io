import{j as e,r as i}from"./iframe-BffffG_H.js";import{H as F}from"./Header-CpDI_FuZ.js";import{I as v,a as C,b as B}from"./Archive-DVj9kiPb.js";import{D as s}from"./fieldParts-Xx04RyIY.js";import"./preload-helper-C1FmrZbK.js";import"./HeaderButton-B5PaK0F4.js";import"./Bulb-G01r8hAG.js";const D=[{key:"favorites",label:"Избранное",icon:e.jsx(v,{}),iconColor:"var(--header-favorite-icon)"},{key:"notifications",label:"Уведомления",icon:e.jsx(C,{}),badge:3},{key:"profile",label:"Профиль",icon:e.jsx(B,{})}],H=1040,O={title:"UI Kit/Навигация/Header/Header",id:"ui-kit-header",component:F,tags:["autodocs"],args:{variant:"main",title:"Главная",backLabel:"Назад",actions:D},argTypes:{variant:{control:"inline-radio",options:["main","inner"],description:"main — заголовок; inner — кнопка «Назад»"},title:{control:"text"},backLabel:{control:"text"},actions:{...s,description:"Действия справа: { key, label, icon, badge, onClick, href }"},onBack:s,className:s},decorators:[a=>e.jsx("div",{style:{width:H},children:e.jsx(a,{})})],parameters:{docs:{source:{type:"code"},description:{component:"Шапка страницы над содержимым. Figma Setl, node `456:86260` (type=main / inner), собрана заново из частей кита.\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| `variant` | `main` · `inner` | type=main · type=inner |\n| `title` | текст | заголовок страницы (main) |\n| `backLabel`, `onBack` | текст («Назад»), действие | кнопка «На главную» (inner) |\n| `actions` | `{ key, label, icon, badge }[]` | Избранное · Уведомления · Профиль |\n\n**Что изменено относительно макета:**\n- Слева — такая же белая плашка, как справа: на главной в ней заголовок, внутри приложения — кнопка «Назад» того же типа, что «Избранное» (`HeaderButton`). В макете была белая таблетка с отдельной кнопкой-кружком внутри (две цели для клика).\n- Справа — белая плашка 48 (шаг кнопок) с кнопками шапки `HeaderButton`: состояния из Figma (наведение `gray-150`, как у меню, нажатие `gray-300`), залитые иконки 16 из набора Fill, подписи 14 Montserrat Medium `gray-800` (в макете — подписи 12 в цвете Практис), зелёный счётчик на иконке.\n- Заголовок — стиль H4 (Montserrat SemiBold 18), в макете Inter — Inter из кита убран.\n\nМобильной шапки в ките пока нет."}}}},u={},o={args:{variant:"inner"}},r={name:"Без счётчиков",args:{actions:D.map(({badge:a,...n})=>n)}},t={parameters:{docs:{description:{story:"«Назад» и действия работают: строка под шапкой показывает, что нажато. Уведомления — счётчик сбрасывается."}}},render:()=>{const[a,n]=i.useState("—"),[S,j]=i.useState(3),I=[{key:"favorites",label:"Избранное",icon:e.jsx(v,{}),iconColor:"var(--header-favorite-icon)",onClick:()=>n("Избранное")},{key:"notifications",label:"Уведомления",icon:e.jsx(C,{}),badge:S,onClick:()=>{n("Уведомления"),j(0)}},{key:"profile",label:"Профиль",icon:e.jsx(B,{}),onClick:()=>n("Профиль")}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(F,{variant:"inner",actions:I,onBack:()=>n("Назад")}),e.jsxs("span",{style:{fontFamily:"system-ui, sans-serif",fontSize:13,color:"#7e7e7e"},children:["Нажато: ",a]})]})}},M=["Главная","Внутренняя","БезСчётчиков","Кликабельно"];var c,l,d;u.parameters={...u.parameters,docs:{...(c=u.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(d=(l=u.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,p,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: "inner"
  }
}`,...(y=(p=o.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var f,g,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Без счётчиков",
  args: {
    actions: ACTIONS.map(({
      badge: _badge,
      ...a
    }) => a)
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var k,x,E;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(E=(x=t.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};export{M as __namedExportsOrder,O as default,r as БезСчётчиков,o as Внутренняя,u as Главная,t as Кликабельно};
