import{j as e}from"./iframe-T1G-SIdY.js";import{I as l}from"./InputPassword-CJuZFzlt.js";import{D as a,f as c,G as m,a as t}from"./fieldParts-DZVs388l.js";import"./preload-helper-C1FmrZbK.js";import"./Spinner-CnJbqGOK.js";import"./InputChrome-CODlI84f.js";import"./context-BT_JPeuY.js";import"./useTruncated-wUfbEmiw.js";import"./index-CCOMMNKo.js";import"./index-BTCs0-Pv.js";import"./index-bDfGxc6v.js";import"./Input-DMkgWIZL.js";import"./CloseCircleFilled-lErke8Fw.js";import"./SearchOutlined-BlwStQf3.js";import"./useCSSVarCls-h8B24G72.js";import"./pickAttrs-prGlZbsm.js";const S={title:"UI Kit/Поля ввода/InputPassword",id:"ui-kit-inputpassword",component:l,tags:["autodocs"],args:{label:"Пароль",placeholder:"Введите пароль",required:!1,infoText:"",status:"",errorMessage:"Неверный пароль",disabled:!1,loading:!1},argTypes:{label:{control:"text"},placeholder:{control:"text"},required:{control:"boolean",table:{category:"Слоты"}},infoText:{control:"text",table:{category:"Слоты"},description:"Подсказка у иконки ⓘ. Пусто — иконки нет"},status:{control:{type:"inline-radio",labels:{"":"обычный",error:"error"}},options:["","error"]},errorMessage:{control:"text",description:"Текст под полем, виден при status=error"},disabled:{control:"boolean"},loading:{control:"boolean",description:"Спиннер справа — идёт проверка"},value:a,defaultValue:a,onChange:a},decorators:[c()],parameters:{docs:{description:{component:"Поле пароля. Из praktis-ui-kit (Figma «Практис», Password `773:329`), вид Setl — как у Input: 42, скругление 24, цвета `--input-*`, та же обвязка и валидация через `Form.Item noStyle`.\nГлаз справа показывает и скрывает пароль (штатный antd `Input.Password`, свои иконки). Тултипа с полным значением нет — он раскрыл бы пароль.\n\n**Figma Setl для пароля не снималась** — вид взят с Input Setl, сверить с макетом."}}}},r={},u={render:()=>e.jsxs(m,{children:[e.jsx(t,{title:"Default",children:e.jsx(l,{label:"Пароль",placeholder:"Введите пароль"})}),e.jsx(t,{title:"Filled",children:e.jsx(l,{label:"Пароль",defaultValue:"setl-2026"})}),e.jsx(t,{title:"Error",children:e.jsx(l,{label:"Пароль",defaultValue:"123",status:"error",errorMessage:"Минимум 8 символов"})}),e.jsx(t,{title:"Loading",children:e.jsx(l,{label:"Пароль",defaultValue:"setl-2026",loading:!0})}),e.jsx(t,{title:"Disabled",children:e.jsx(l,{label:"Пароль",placeholder:"Введите пароль",disabled:!0})}),e.jsx(t,{title:"Disabled Filled",children:e.jsx(l,{label:"Пароль",defaultValue:"setl-2026",disabled:!0})})]})},G=["Playground","Состояния"];var o,s,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(i=(s=r.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var d,n,p;u.parameters={...u.parameters,docs:{...(d=u.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(n=u.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};export{r as Playground,G as __namedExportsOrder,S as default,u as Состояния};
