import{j as e,d as s}from"./iframe-xHeXyRUt.js";import{D as u}from"./DatePicker-DkjeiO9C.js";import{D as t,f as D,G as f,a as r}from"./fieldParts-CRP_2h79.js";import"./preload-helper-C1FmrZbK.js";import"./context-YSLqM9pP.js";import"./InputChrome-RLws-aIV.js";import"./useTruncated-DZT6EyQu.js";import"./index-DAOdAdyQ.js";import"./ContextIsolator-BRwUpuIq.js";import"./Spinner-BjmqB2w1.js";import"./PurePanel-DskKyjH6.js";import"./pickAttrs-BwR6N1Ic.js";import"./Overflow-DDDIwkRC.js";import"./useCSSVarCls-2qV6Kap2.js";import"./index-BZepmLjH.js";import"./move-DrY42EjS.js";import"./useIcons-BJDXcmbA.js";import"./CheckOutlined-1AcpI7FG.js";import"./CloseCircleFilled-U51GO4x2.js";import"./CloseOutlined-Ba06t28w.js";import"./useLocale-C5RInZ-8.js";const K={title:"UI Kit/Поля ввода/DatePicker",id:"ui-kit-datepicker",component:u,tags:["autodocs"],args:{label:"Дата начала",required:!1,infoText:"",status:"",errorMessage:"Укажите дату",disabled:!1,loading:!1},argTypes:{label:{control:"text"},required:{control:"boolean",table:{category:"Слоты"}},infoText:{control:"text",table:{category:"Слоты"}},status:{control:{type:"inline-radio",labels:{"":"обычный",error:"error"}},options:["","error"]},errorMessage:{control:"text"},disabled:{control:"boolean"},loading:{control:"boolean"},onValidChange:t,value:t,defaultValue:t,onChange:t},decorators:[D()],parameters:{docs:{description:{component:"Выбор даты — только день (`ДД.ММ.ГГГГ`). Из praktis-ui-kit, вид Setl — как у Input, календарь — штатная панель antd в красном Setl, по-русски.\n\nРучной ввод — своя маска, поток цифр: точки ставятся сами, удаление и вставка сдвигают цифры. Незаконченная или несуществующая дата краснеет **после ухода из поля**, а не во время набора; пустое поле ошибкой не считается (это забота `required` формы).\nВ форме antd незаконченную дату видит и форма — правило `dateCompleteRule` («Введите дату полностью»). `onValidChange` — можно ли принять текущее значение (для кнопки «Применить»).\n\n**"},story:{height:"440px"}}}},a={},l={parameters:{docs:{story:{height:"260px"}}},render:()=>e.jsxs(f,{children:[e.jsx(r,{title:"Default",children:e.jsx(u,{label:"Дата начала"})}),e.jsx(r,{title:"Filled",children:e.jsx(u,{label:"Дата начала",defaultValue:s("2026-10-15")})}),e.jsx(r,{title:"Error",children:e.jsx(u,{label:"Дата начала",required:!0,status:"error",errorMessage:"Укажите дату"})}),e.jsx(r,{title:"Loading",children:e.jsx(u,{label:"Дата начала",loading:!0})}),e.jsx(r,{title:"Disabled Filled",children:e.jsx(u,{label:"Дата начала",defaultValue:s("2026-10-15"),disabled:!0})})]})},o={name:"Ручной ввод",parameters:{docs:{description:{story:"Набери «1510» и уйди из поля (Tab) — поле покраснеет: дата не дописана. Вернись, допиши «2026» — ошибка снимется."}}}},O=["Playground","Состояния","РучнойВвод"];var i,n,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var c,p,m;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        height: "260px"
      }
    }
  },
  render: () => <Grid>
      <Cell title="Default">
        <DatePicker label="Дата начала" />
      </Cell>
      <Cell title="Filled">
        <DatePicker label="Дата начала" defaultValue={dayjs("2026-10-15")} />
      </Cell>
      <Cell title="Error">
        <DatePicker label="Дата начала" required status="error" errorMessage="Укажите дату" />
      </Cell>
      <Cell title="Loading">
        <DatePicker label="Дата начала" loading />
      </Cell>
      <Cell title="Disabled Filled">
        <DatePicker label="Дата начала" defaultValue={dayjs("2026-10-15")} disabled />
      </Cell>
    </Grid>
}`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var x,b,g;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Ручной ввод",
  parameters: {
    docs: {
      description: {
        story: "Набери «1510» и уйди из поля (Tab) — поле покраснеет: дата не дописана. Вернись, допиши «2026» — ошибка снимется."
      }
    }
  }
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};export{a as Playground,O as __namedExportsOrder,K as default,o as РучнойВвод,l as Состояния};
