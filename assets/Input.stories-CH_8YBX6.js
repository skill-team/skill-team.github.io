import{j as u,r as H,B as E}from"./iframe-BFd96KHm.js";import{I as e}from"./Input-C993vLw2.js";import{F as l}from"./index-Spu-ig-I.js";import"./preload-helper-C1FmrZbK.js";import"./Spinner-EIFFJyoN.js";import"./InputChrome-BSiyVpEh.js";import"./context-BWLmWlnn.js";import"./useTruncated-BqF7u7ib.js";import"./index-D72j1uDz.js";import"./ContextIsolator-CfQAkasn.js";import"./index-BlRMKTQl.js";import"./index-FRJeKTdu.js";import"./CloseCircleFilled-BoySjRRf.js";import"./useCSSVarCls-Fz_A80LR.js";import"./pickAttrs-Dl3VOZfP.js";import"./EyeOutlined-BhJKcxe1.js";import"./collapse-BbEVqHco.js";import"./useForm-Cyvwz6MB.js";import"./useBreakpoint-DnK7bveh.js";import"./useForceUpdate-CtBU4U-n.js";import"./index-hLPHZdjn.js";import"./useLocale-C3EajwIt.js";import"./CheckCircleFilled-C7pYr0Bl.js";const m=320;function s({title:r,children:t}){return u.jsxs("div",{style:{width:m,display:"flex",flexDirection:"column",gap:8},children:[u.jsx("span",{style:{fontFamily:"system-ui, sans-serif",fontSize:12,color:"#7e7e7e"},children:r}),t]})}const l4={title:"UI Kit/Поля ввода/Input",id:"ui-kit-input",component:e,tags:["autodocs"],args:{label:"Тип",placeholder:"Text",required:!1,infoText:"",status:"",errorMessage:"Поле обязательно для заполнения",disabled:!1},argTypes:{label:{control:"text",description:"Лейбл над полем. Пусто — поле без обвязки (Type=Normal)"},placeholder:{control:"text"},required:{control:"boolean",description:"Красная звёздочка у лейбла",table:{category:"Слоты"}},infoText:{control:"text",description:"Текст подсказки у иконки ⓘ. Пусто — иконки нет",table:{category:"Слоты"}},status:{control:{type:"inline-radio",labels:{"":"обычный",error:"error"}},options:["","error"],description:"Ошибка — красная рамка и сообщение"},errorMessage:{control:"text",description:"Текст под полем, виден только при status=error"},disabled:{control:"boolean"},value:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},defaultValue:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onChange:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},decorators:[(r,t)=>t.name==="Состояния"?u.jsx(r,{}):u.jsx("div",{style:{width:m},children:u.jsx(r,{})})],parameters:{docs:{description:{component:"Однострочное поле ввода. Построено на antd `Input`, цвета — токены `--input-*`.\n\n| Проп | Значения |\n|---|---|\n| `label` | текст или пусто |\n| `required` | true / false |\n| `infoText` | текст подсказки |\n| `status` | — · `error` |\n| `errorMessage` | текст |\n| `disabled` | true / false |\n\nHover и Focused — настоящие состояния браузера, Filled — просто введённый текст. Размер один — 42px.\nДлинный текст обрезается многоточием, полный — в подсказке при наведении (только когда действительно обрезан). То же у сообщения об ошибке.\n\n**Валидация через antd Form.** Оберни поле в `<Form.Item name rules noStyle>` — поле само покажет ошибку формы своей обвязкой (красные рамка и лейбл, текст под полем), `status` и `errorMessage` руками не нужны. `noStyle` обязателен: без него Form.Item нарисует второй, антдшный лейбл и текст ошибки. Пример — история «В форме».\n"}}}},a={},o={parameters:{docs:{description:{story:"Все состояния. Hover и Focused — наведи или кликни в любое поле."}}},render:()=>u.jsxs("div",{style:{display:"grid",gridTemplateColumns:`repeat(auto-fill, ${m}px)`,gap:"28px 24px"},children:[u.jsx(s,{title:"Default",children:u.jsx(e,{label:"Тип",placeholder:"Text"})}),u.jsx(s,{title:"Filled",children:u.jsx(e,{label:"Тип",defaultValue:"Заполненное значение"})}),u.jsx(s,{title:"Error",children:u.jsx(e,{label:"Тип",placeholder:"Text",status:"error",errorMessage:"Поле обязательно для заполнения"})}),u.jsx(s,{title:"Error Filled",children:u.jsx(e,{label:"Тип",defaultValue:"Text",status:"error",errorMessage:"Неверный формат"})}),u.jsx(s,{title:"Disabled",children:u.jsx(e,{label:"Тип",placeholder:"Text",disabled:!0})}),u.jsx(s,{title:"Disabled Filled",children:u.jsx(e,{label:"Тип",defaultValue:"Заполненное значение",disabled:!0})})]})},n={name:"Лейбл, звёздочка, подсказка",args:{label:"Название курса",required:!0,infoText:"Будет видно в каталоге курсов"}},i={name:"Без лейбла",args:{label:void 0}},d={name:"Длинный текст",parameters:{docs:{description:{story:"Значение и ошибка не помещаются — обрезаются, полный текст в подсказке при наведении."}}},args:{defaultValue:"BIM-моделирование: путь от чертежа до объекта, часть вторая, расширенная",status:"error",errorMessage:"Название длиннее 60 символов — сократите его, чтобы оно поместилось в карточку курса"}};function z(){const[r]=l.useForm(),[t,p]=H.useState(null);return u.jsx(l,{form:r,onFinish:x=>p(`Отправлено: ${x.name}, ${x.email}`),onValuesChange:()=>p(null),children:u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[u.jsx(l.Item,{name:"name",noStyle:!0,rules:[{required:!0,whitespace:!0,message:"Поле обязательно для заполнения"}],children:u.jsx(e,{label:"ФИО",required:!0,placeholder:"Иванов Иван"})}),u.jsx(l.Item,{name:"email",noStyle:!0,rules:[{required:!0,message:"Поле обязательно для заполнения"},{type:"email",message:"Неверный формат почты — пример: name@setl.ru"}],children:u.jsx(e,{label:"Рабочая почта",required:!0,infoText:"На неё придёт подтверждение записи",placeholder:"name@setl.ru"})}),u.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[u.jsx(E,{variant:"primary-red",size:"medium",htmlType:"submit",children:"Записаться"}),u.jsx(E,{variant:"secondary",size:"medium",onClick:()=>{r.resetFields(),p(null)},children:"Очистить"})]}),t&&u.jsx("span",{style:{fontFamily:"system-ui, sans-serif",fontSize:13,color:"var(--color-text-secondary)"},children:t})]})})}const c={name:"В форме",parameters:{docs:{source:{type:"code"},description:{story:"Нажми «Записаться» с пустыми полями — оба покажут ошибку. Начни печатать — ошибка обновляется на лету: пусто → «обязательно», неверная почта → «неверный формат». «Очистить» сбрасывает и значения, и ошибки."}}},render:()=>u.jsx(z,{})},a4=["Playground","Состояния","ЛейблИПодсказка","БезЛейбла","ДлинныйТекст","ВФорме"];var F,D,B;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(B=(D=a.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};var g,f,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Все состояния. Hover и Focused — наведи или кликни в любое поле."
      }
    }
  },
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: \`repeat(auto-fill, \${FIELD_WIDTH}px)\`,
    gap: "28px 24px"
  }}>
      <Cell title="Default">
        <Input label="Тип" placeholder="Text" />
      </Cell>
      <Cell title="Filled">
        <Input label="Тип" defaultValue="Заполненное значение" />
      </Cell>
      <Cell title="Error">
        <Input label="Тип" placeholder="Text" status="error" errorMessage="Поле обязательно для заполнения" />
      </Cell>
      <Cell title="Error Filled">
        <Input label="Тип" defaultValue="Text" status="error" errorMessage="Неверный формат" />
      </Cell>
      <Cell title="Disabled">
        <Input label="Тип" placeholder="Text" disabled />
      </Cell>
      <Cell title="Disabled Filled">
        <Input label="Тип" defaultValue="Заполненное значение" disabled />
      </Cell>
    </div>
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,C,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Лейбл, звёздочка, подсказка",
  args: {
    label: "Название курса",
    required: true,
    infoText: "Будет видно в каталоге курсов"
  }
}`,...(h=(C=n.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var j,A,I;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Без лейбла",
  args: {
    label: undefined
  }
}`,...(I=(A=i.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var T,v,S;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Длинный текст",
  parameters: {
    docs: {
      description: {
        story: "Значение и ошибка не помещаются — обрезаются, полный текст в подсказке при наведении."
      }
    }
  },
  args: {
    defaultValue: "BIM-моделирование: путь от чертежа до объекта, часть вторая, расширенная",
    status: "error",
    errorMessage: "Название длиннее 60 символов — сократите его, чтобы оно поместилось в карточку курса"
  }
}`,...(S=(v=d.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var M,V,q;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "В форме",
  parameters: {
    docs: {
      source: {
        type: "code"
      },
      description: {
        story: "Нажми «Записаться» с пустыми полями — оба покажут ошибку. Начни печатать — ошибка обновляется на лету: пусто → «обязательно», неверная почта → «неверный формат». «Очистить» сбрасывает и значения, и ошибки."
      }
    }
  },
  render: () => <ExampleForm />
}`,...(q=(V=c.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};export{a as Playground,a4 as __namedExportsOrder,l4 as default,i as БезЛейбла,c as ВФорме,d as ДлинныйТекст,n as ЛейблИПодсказка,o as Состояния};
