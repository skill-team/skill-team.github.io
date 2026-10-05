import{j as e,d as s}from"./iframe-B8Z8o1yT.js";import{D as u}from"./DatePicker-CeGVAGkk.js";import{D as a,f as b,G as f,a as r}from"./fieldParts-BJ6nf_NI.js";import"./preload-helper-C1FmrZbK.js";import"./context-DQar6x_M.js";import"./InputChrome-DdUT2QAy.js";import"./index-BjQvEE3K.js";import"./Spinner-k20vczyH.js";import"./PurePanel-DM4s-6WO.js";import"./pickAttrs-OvQrtQPG.js";import"./Overflow-dX7i2slI.js";import"./index-QJeEJnZl.js";import"./useIcons-CeS_PWEI.js";import"./useLocale-Bj-xWlrE.js";const G={title:"UI Kit/Поля ввода/DatePicker",id:"ui-kit-datepicker",component:u,tags:["autodocs"],args:{label:"Дата начала",required:!1,infoText:"",status:"",errorMessage:"Укажите дату",disabled:!1,loading:!1},argTypes:{label:{control:"text"},required:{control:"boolean",table:{category:"Слоты"}},infoText:{control:"text",table:{category:"Слоты"}},status:{control:{type:"inline-radio",labels:{"":"обычный",error:"error"}},options:["","error"]},errorMessage:{control:"text"},disabled:{control:"boolean"},loading:{control:"boolean"},onValidChange:a,value:a,defaultValue:a,onChange:a},decorators:[b()],parameters:{docs:{description:{component:"Выбор даты — только день (`ДД.ММ.ГГГГ`). Из praktis-ui-kit (Figma «Практис», Datapicker `1253:4599` + «Флоу ручного ввода даты»), вид Setl — как у Input, календарь — штатная панель antd в красном Setl, по-русски.\n\nРучной ввод — своя маска, поток цифр: точки ставятся сами, удаление и вставка сдвигают цифры. Незаконченная или несуществующая дата краснеет **после ухода из поля**, а не во время набора; пустое поле ошибкой не считается (это забота `required` формы).\nВ форме antd незаконченную дату видит и форма — правило `dateCompleteRule` («Введите дату полностью»). `onValidChange` — можно ли принять текущее значение (для кнопки «Применить»).\n\n**Figma Setl для даты не снималась** — сверить."},story:{height:"440px"}}}},t={},l={parameters:{docs:{story:{height:"260px"}}},render:()=>e.jsxs(f,{children:[e.jsx(r,{title:"Default",children:e.jsx(u,{label:"Дата начала"})}),e.jsx(r,{title:"Filled",children:e.jsx(u,{label:"Дата начала",defaultValue:s("2026-10-15")})}),e.jsx(r,{title:"Error",children:e.jsx(u,{label:"Дата начала",required:!0,status:"error",errorMessage:"Укажите дату"})}),e.jsx(r,{title:"Loading",children:e.jsx(u,{label:"Дата начала",loading:!0})}),e.jsx(r,{title:"Disabled Filled",children:e.jsx(u,{label:"Дата начала",defaultValue:s("2026-10-15"),disabled:!0})})]})},o={name:"Ручной ввод",parameters:{docs:{description:{story:"Набери «1510» и уйди из поля (Tab) — поле покраснеет: дата не дописана. Вернись, допиши «2026» — ошибка снимется."}}}},M=["Playground","Состояния","РучнойВвод"];var i,n,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(n=t.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var c,p,m;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,x,D;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Ручной ввод",
  parameters: {
    docs: {
      description: {
        story: "Набери «1510» и уйди из поля (Tab) — поле покраснеет: дата не дописана. Вернись, допиши «2026» — ошибка снимется."
      }
    }
  }
}`,...(D=(x=o.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};export{t as Playground,M as __namedExportsOrder,G as default,o as РучнойВвод,l as Состояния};
