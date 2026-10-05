import{j as e}from"./iframe-B8Z8o1yT.js";import{I as l}from"./InputPassword-DRBpMv1Y.js";import{D as a,f as c,G as m,a as t}from"./fieldParts-BJ6nf_NI.js";import"./preload-helper-C1FmrZbK.js";import"./Spinner-k20vczyH.js";import"./InputChrome-DdUT2QAy.js";import"./context-DQar6x_M.js";import"./index-BjQvEE3K.js";import"./index-Ds3kIrnP.js";import"./index-QJeEJnZl.js";import"./pickAttrs-OvQrtQPG.js";const w={title:"UI Kit/Поля ввода/InputPassword",id:"ui-kit-inputpassword",component:l,tags:["autodocs"],args:{label:"Пароль",placeholder:"Введите пароль",required:!1,infoText:"",status:"",errorMessage:"Неверный пароль",disabled:!1,loading:!1},argTypes:{label:{control:"text"},placeholder:{control:"text"},required:{control:"boolean",table:{category:"Слоты"}},infoText:{control:"text",table:{category:"Слоты"},description:"Подсказка у иконки ⓘ. Пусто — иконки нет"},status:{control:{type:"inline-radio",labels:{"":"обычный",error:"error"}},options:["","error"]},errorMessage:{control:"text",description:"Текст под полем, виден при status=error"},disabled:{control:"boolean"},loading:{control:"boolean",description:"Спиннер справа — идёт проверка"},value:a,defaultValue:a,onChange:a},decorators:[c()],parameters:{docs:{description:{component:"Поле пароля. Из praktis-ui-kit (Figma «Практис», Password `773:329`), вид Setl — как у Input: 42, скругление 24, цвета `--input-*`, та же обвязка и валидация через `Form.Item noStyle`.\nГлаз справа показывает и скрывает пароль (штатный antd `Input.Password`, свои иконки). Тултипа с полным значением нет — он раскрыл бы пароль.\n\n**Figma Setl для пароля не снималась** — вид взят с Input Setl, сверить с макетом."}}}},r={},u={render:()=>e.jsxs(m,{children:[e.jsx(t,{title:"Default",children:e.jsx(l,{label:"Пароль",placeholder:"Введите пароль"})}),e.jsx(t,{title:"Filled",children:e.jsx(l,{label:"Пароль",defaultValue:"setl-2026"})}),e.jsx(t,{title:"Error",children:e.jsx(l,{label:"Пароль",defaultValue:"123",status:"error",errorMessage:"Минимум 8 символов"})}),e.jsx(t,{title:"Loading",children:e.jsx(l,{label:"Пароль",defaultValue:"setl-2026",loading:!0})}),e.jsx(t,{title:"Disabled",children:e.jsx(l,{label:"Пароль",placeholder:"Введите пароль",disabled:!0})}),e.jsx(t,{title:"Disabled Filled",children:e.jsx(l,{label:"Пароль",defaultValue:"setl-2026",disabled:!0})})]})},V=["Playground","Состояния"];var s,o,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(d=(o=r.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var i,n,p;u.parameters={...u.parameters,docs:{...(i=u.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Grid>
      <Cell title="Default">
        <InputPassword label="Пароль" placeholder="Введите пароль" />
      </Cell>
      <Cell title="Filled">
        <InputPassword label="Пароль" defaultValue="setl-2026" />
      </Cell>
      <Cell title="Error">
        <InputPassword label="Пароль" defaultValue="123" status="error" errorMessage="Минимум 8 символов" />
      </Cell>
      <Cell title="Loading">
        <InputPassword label="Пароль" defaultValue="setl-2026" loading />
      </Cell>
      <Cell title="Disabled">
        <InputPassword label="Пароль" placeholder="Введите пароль" disabled />
      </Cell>
      <Cell title="Disabled Filled">
        <InputPassword label="Пароль" defaultValue="setl-2026" disabled />
      </Cell>
    </Grid>
}`,...(p=(n=u.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};export{r as Playground,V as __namedExportsOrder,w as default,u as Состояния};
