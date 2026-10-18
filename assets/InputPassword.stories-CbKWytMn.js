import{j as e}from"./iframe-BjwqOSi3.js";import{I as l}from"./InputPassword-aVXoUEie.js";import{D as a,f as c,G as m,a as r}from"./fieldParts-DMSBRTZK.js";import"./preload-helper-C1FmrZbK.js";import"./Spinner-CMbWbs9A.js";import"./InputChrome-B9O9xXvL.js";import"./context-CGGttlbE.js";import"./useTruncated-1RfrOo5E.js";import"./index-ZErZfhiV.js";import"./ContextIsolator-t4IZH0Aw.js";import"./index-BSt6hwuB.js";import"./index-CJ9rnbsp.js";import"./Input-BBk_h3IU.js";import"./CloseCircleFilled-Dbe_KSGE.js";import"./SearchOutlined-ZGmUzZWc.js";import"./useCSSVarCls-B_1IN5HN.js";import"./pickAttrs-CMH0USIN.js";const M={title:"UI Kit/Поля ввода/InputPassword",id:"ui-kit-inputpassword",component:l,tags:["autodocs"],args:{label:"Пароль",placeholder:"Введите пароль",required:!1,infoText:"",status:"",errorMessage:"Неверный пароль",disabled:!1,loading:!1},argTypes:{label:{control:"text"},placeholder:{control:"text"},required:{control:"boolean",table:{category:"Слоты"}},infoText:{control:"text",table:{category:"Слоты"},description:"Подсказка у иконки ⓘ. Пусто — иконки нет"},status:{control:{type:"inline-radio",labels:{"":"обычный",error:"error"}},options:["","error"]},errorMessage:{control:"text",description:"Текст под полем, виден при status=error"},disabled:{control:"boolean"},loading:{control:"boolean",description:"Спиннер справа — идёт проверка"},value:a,defaultValue:a,onChange:a},decorators:[c()],parameters:{docs:{description:{component:"Поле пароля. Из praktis-ui-kit, вид Setl — как у Input: 42, скругление 24, цвета `--input-*`, та же обвязка и валидация через `Form.Item noStyle`.\nГлаз справа показывает и скрывает пароль (штатный antd `Input.Password`, свои иконки). Тултипа с полным значением нет — он раскрыл бы пароль.\n\n**"}}}},t={},u={render:()=>e.jsxs(m,{children:[e.jsx(r,{title:"Default",children:e.jsx(l,{label:"Пароль",placeholder:"Введите пароль"})}),e.jsx(r,{title:"Filled",children:e.jsx(l,{label:"Пароль",defaultValue:"setl-2026"})}),e.jsx(r,{title:"Error",children:e.jsx(l,{label:"Пароль",defaultValue:"123",status:"error",errorMessage:"Минимум 8 символов"})}),e.jsx(r,{title:"Loading",children:e.jsx(l,{label:"Пароль",defaultValue:"setl-2026",loading:!0})}),e.jsx(r,{title:"Disabled",children:e.jsx(l,{label:"Пароль",placeholder:"Введите пароль",disabled:!0})}),e.jsx(r,{title:"Disabled Filled",children:e.jsx(l,{label:"Пароль",defaultValue:"setl-2026",disabled:!0})})]})},S=["Playground","Состояния"];var o,s,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var d,n,p;u.parameters={...u.parameters,docs:{...(d=u.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(n=u.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};export{t as Playground,S as __namedExportsOrder,M as default,u as Состояния};
