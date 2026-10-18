import{r as j,j as u}from"./iframe-BjwqOSi3.js";import{S as e}from"./Select-LCtcaUws.js";import{p as l,D as t,C as r,f as T,G as k,a as o}from"./fieldParts-DMSBRTZK.js";import"./preload-helper-C1FmrZbK.js";import"./SymbolDelete-DJgL0EZj.js";import"./InputChrome-B9O9xXvL.js";import"./context-CGGttlbE.js";import"./useTruncated-1RfrOo5E.js";import"./index-ZErZfhiV.js";import"./ContextIsolator-t4IZH0Aw.js";import"./Spinner-CMbWbs9A.js";import"./DropdownMenuItem-CVsz5xsO.js";import"./Radio-CP0jTXNY.js";import"./index-J-DsTmO9.js";import"./pickAttrs-CMH0USIN.js";import"./useCSSVarCls-B_1IN5HN.js";import"./useForm-BGDuyS49.js";import"./index-CIlwjofH.js";import"./Select.module-L1SttIPx.js";import"./index-31l0o6XA.js";import"./useShowArrow-CDmX56a2.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-DNDcMgHM.js";import"./useLocale-CmSPVnY6.js";import"./move-DIHvAmS-.js";import"./useIcons-ClzfUszN.js";import"./CloseCircleFilled-Dbe_KSGE.js";import"./CloseOutlined-D46Xd8n1.js";import"./SearchOutlined-ZGmUzZWc.js";import"./PurePanel-CWXTrHE_.js";const s4={title:"UI Kit/Поля ввода/Select",id:"ui-kit-select",component:e,tags:["autodocs"],args:{label:"Город",placeholder:"Выберите город",options:r,required:!1,infoText:"",status:"",errorMessage:"Выберите город",disabled:!1,loading:!1,loadError:!1,showSearch:!1},argTypes:{label:{control:"text"},placeholder:{control:"text"},required:{control:"boolean",table:{category:"Слоты"}},infoText:{control:"text",table:{category:"Слоты"}},status:{control:{type:"inline-radio",labels:{"":"обычный",error:"error"}},options:["","error"]},errorMessage:{control:"text"},disabled:{control:"boolean"},loading:{control:"boolean",description:"Спиннер + «Загрузка…», список не открывается"},loadError:{control:"boolean",description:"Не загрузилось: красная рамка + «повторить»"},showSearch:{control:"boolean",description:"Поиск вводом в поле"},options:t,onRetry:t,emptyState:t,value:t,defaultValue:t,onChange:t},...l,decorators:[...l.decorators,T()],parameters:{...l.parameters,docs:{...l.parameters.docs,description:{component:"Выбор одного значения из списка. Из praktis-ui-kit, вид Setl:\nполе — как Input (42, скругление 24, шрифт 16, цвета `--input-*`), ширина — вся ширина места; список — пункты `DropdownMenuItem`, как у `DropdownMenu` (выбранный — красный текст на бледно-красном, наведение — серая подложка).\n\n| Проп | Значения | Что это |\n|---|---|---|\n| `options` | `{ value, label, disabled }[]` | варианты |\n| `loading` | true / false | спиннер и «Загрузка…», список не открывается |\n| `loadError` + `onRetry` | true / false | не загрузилось: красная рамка, иконка «повторить» |\n| `showSearch` | true / false | поиск вводом; не нашлось — «Упс! Такого не нашлось» |\n| `emptyState` | `{ title, description }` | текст пустого списка; не передан — «Вариантов пока нет» |\n\nДлинное значение обрезается, полный текст — в подсказке. Валидация — через `Form.Item noStyle`, как у Input.\n**"}}}},a={},s={parameters:{docs:{story:{height:"300px"}}},render:()=>u.jsxs(k,{children:[u.jsx(o,{title:"Default",children:u.jsx(e,{label:"Город",placeholder:"Выберите город",options:r})}),u.jsx(o,{title:"Filled",children:u.jsx(e,{label:"Город",options:r,defaultValue:"spb"})}),u.jsx(o,{title:"Длинное значение — отточие и подсказка",children:u.jsx(e,{label:"Город",options:r,defaultValue:"long"})}),u.jsx(o,{title:"Error",children:u.jsx(e,{label:"Город",required:!0,placeholder:"Выберите город",options:r,status:"error",errorMessage:"Выберите город"})}),u.jsx(o,{title:"Loading",children:u.jsx(e,{label:"Город",options:r,loading:!0})}),u.jsx(o,{title:"Load error — «повторить»",children:u.jsx(e,{label:"Город",options:r,loadError:!0,errorMessage:"Не удалось загрузить список",onRetry:()=>{}})}),u.jsx(o,{title:"Disabled",children:u.jsx(e,{label:"Город",placeholder:"Выберите город",options:r,disabled:!0})}),u.jsx(o,{title:"Disabled Filled",children:u.jsx(e,{label:"Город",options:r,defaultValue:"msk",disabled:!0})})]})},n={name:"Открытый список",args:{defaultValue:"msk",open:!0},parameters:{docs:{description:{story:"Список открыт для просмотра: выбранный — красным, недоступный — бледным, длинный — в отточие."}}}},i={name:"С поиском",args:{showSearch:!0,optionFilterProp:"label",placeholder:"Начните вводить"},parameters:{docs:{description:{story:"Введи «Тверь» — список покажет «Упс! Такого не нашлось»."}}}},d={name:"Загрузка и повтор",parameters:{docs:{description:{story:"Нажми «повторить» справа — полсекунды загрузка, затем список доступен."}}},render:()=>{const[p,c]=j.useState("error");return u.jsx(e,{label:"Город",placeholder:"Выберите город",options:r,loading:p==="loading",loadError:p==="error",errorMessage:p==="error"?"Не удалось загрузить список":void 0,onRetry:()=>{c("loading"),setTimeout(()=>c("ok"),600)}})}},n4=["Playground","Состояния","ОткрытыйСписок","СПоиском","ЗагрузкаИПовтор"];var m,E,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(b=(E=a.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};var C,g,S;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        height: "300px"
      }
    }
  },
  render: () => <Grid>
      <Cell title="Default">
        <Select label="Город" placeholder="Выберите город" options={CITIES} />
      </Cell>
      <Cell title="Filled">
        <Select label="Город" options={CITIES} defaultValue="spb" />
      </Cell>
      <Cell title="Длинное значение — отточие и подсказка">
        <Select label="Город" options={CITIES} defaultValue="long" />
      </Cell>
      <Cell title="Error">
        <Select label="Город" required placeholder="Выберите город" options={CITIES} status="error" errorMessage="Выберите город" />
      </Cell>
      <Cell title="Loading">
        <Select label="Город" options={CITIES} loading />
      </Cell>
      <Cell title="Load error — «повторить»">
        <Select label="Город" options={CITIES} loadError errorMessage="Не удалось загрузить список" onRetry={() => {}} />
      </Cell>
      <Cell title="Disabled">
        <Select label="Город" placeholder="Выберите город" options={CITIES} disabled />
      </Cell>
      <Cell title="Disabled Filled">
        <Select label="Город" options={CITIES} defaultValue="msk" disabled />
      </Cell>
    </Grid>
}`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var x,h,B;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Открытый список",
  args: {
    defaultValue: "msk",
    open: true
  },
  parameters: {
    docs: {
      description: {
        story: "Список открыт для просмотра: выбранный — красным, недоступный — бледным, длинный — в отточие."
      }
    }
  }
}`,...(B=(h=n.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var D,f,F;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "С поиском",
  args: {
    showSearch: true,
    optionFilterProp: "label",
    placeholder: "Начните вводить"
  },
  parameters: {
    docs: {
      description: {
        story: "Введи «Тверь» — список покажет «Упс! Такого не нашлось»."
      }
    }
  }
}`,...(F=(f=i.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var I,y,A;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Загрузка и повтор",
  parameters: {
    docs: {
      description: {
        story: "Нажми «повторить» справа — полсекунды загрузка, затем список доступен."
      }
    }
  },
  render: () => {
    const [state, setState] = useState<"error" | "loading" | "ok">("error");
    return <Select label="Город" placeholder="Выберите город" options={CITIES} loading={state === "loading"} loadError={state === "error"} errorMessage={state === "error" ? "Не удалось загрузить список" : undefined} onRetry={() => {
      setState("loading");
      setTimeout(() => setState("ok"), 600);
    }} />;
  }
}`,...(A=(y=d.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};export{a as Playground,n4 as __namedExportsOrder,s4 as default,d as ЗагрузкаИПовтор,n as ОткрытыйСписок,i as СПоиском,s as Состояния};
