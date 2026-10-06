import{r as j,j as u}from"./iframe-DCXgeGQz.js";import{S as e}from"./Select-DJXoWH3B.js";import{p as l,D as t,C as r,f as T,G as k,a as o}from"./fieldParts-CCu4UZF-.js";import"./preload-helper-C1FmrZbK.js";import"./SymbolDelete-N5vo0Pwq.js";import"./InputChrome-zHxysjNv.js";import"./context-Cf_eQdng.js";import"./useTruncated-RsVvaZAD.js";import"./index-DsToMKrP.js";import"./Spinner-w4Ecu8Fw.js";import"./DropdownMenuItem-CkG9mHbq.js";import"./Radio-DewLZ3Om.js";import"./useCSSVarCls-CcUg8sJf.js";import"./pickAttrs-DkFrowIo.js";import"./useForm-DAnkVyYO.js";import"./Select.module-CfpVDu4I.js";import"./KeyCode-CYKQyFFT.js";import"./Overflow-I_lWx3_h.js";import"./PurePanel-DMvj5ZMf.js";import"./useLocale-BQcte7TJ.js";import"./useIcons-BgN3EQXl.js";const Z={title:"UI Kit/Поля ввода/Select",id:"ui-kit-select",component:e,tags:["autodocs"],args:{label:"Город",placeholder:"Выберите город",options:r,required:!1,infoText:"",status:"",errorMessage:"Выберите город",disabled:!1,loading:!1,loadError:!1,showSearch:!1},argTypes:{label:{control:"text"},placeholder:{control:"text"},required:{control:"boolean",table:{category:"Слоты"}},infoText:{control:"text",table:{category:"Слоты"}},status:{control:{type:"inline-radio",labels:{"":"обычный",error:"error"}},options:["","error"]},errorMessage:{control:"text"},disabled:{control:"boolean"},loading:{control:"boolean",description:"Спиннер + «Загрузка…», список не открывается"},loadError:{control:"boolean",description:"Не загрузилось: красная рамка + «повторить»"},showSearch:{control:"boolean",description:"Поиск вводом в поле"},options:t,onRetry:t,emptyState:t,value:t,defaultValue:t,onChange:t},...l,decorators:[...l.decorators,T()],parameters:{...l.parameters,docs:{...l.parameters.docs,description:{component:"Выбор одного значения из списка. Из praktis-ui-kit (Figma «Практис», Select `814:2546`), вид Setl:\nполе — как Input (42, скругление 24, шрифт 16, цвета `--input-*`), ширина — вся ширина места; список — пункты `DropdownMenuItem`, как у `DropdownMenu` (выбранный — красный текст на бледно-красном, наведение — серая подложка).\n\n| Проп | Значения | Что это |\n|---|---|---|\n| `options` | `{ value, label, disabled }[]` | варианты |\n| `loading` | true / false | спиннер и «Загрузка…», список не открывается |\n| `loadError` + `onRetry` | true / false | не загрузилось: красная рамка, иконка «повторить» |\n| `showSearch` | true / false | поиск вводом; не нашлось — «Упс! Такого не нашлось» |\n| `emptyState` | `{ title, description }` | текст пустого списка; не передан — «Вариантов пока нет» |\n\nДлинное значение обрезается, полный текст — в подсказке. Валидация — через `Form.Item noStyle`, как у Input.\n**Figma Setl для Select не снималась** — вид собран по аналогии с Input и боковым меню, сверить."}}}},a={},s={parameters:{docs:{story:{height:"300px"}}},render:()=>u.jsxs(k,{children:[u.jsx(o,{title:"Default",children:u.jsx(e,{label:"Город",placeholder:"Выберите город",options:r})}),u.jsx(o,{title:"Filled",children:u.jsx(e,{label:"Город",options:r,defaultValue:"spb"})}),u.jsx(o,{title:"Длинное значение — отточие и подсказка",children:u.jsx(e,{label:"Город",options:r,defaultValue:"long"})}),u.jsx(o,{title:"Error",children:u.jsx(e,{label:"Город",required:!0,placeholder:"Выберите город",options:r,status:"error",errorMessage:"Выберите город"})}),u.jsx(o,{title:"Loading",children:u.jsx(e,{label:"Город",options:r,loading:!0})}),u.jsx(o,{title:"Load error — «повторить»",children:u.jsx(e,{label:"Город",options:r,loadError:!0,errorMessage:"Не удалось загрузить список",onRetry:()=>{}})}),u.jsx(o,{title:"Disabled",children:u.jsx(e,{label:"Город",placeholder:"Выберите город",options:r,disabled:!0})}),u.jsx(o,{title:"Disabled Filled",children:u.jsx(e,{label:"Город",options:r,defaultValue:"msk",disabled:!0})})]})},n={name:"Открытый список",args:{defaultValue:"msk",open:!0},parameters:{docs:{description:{story:"Список открыт для просмотра: выбранный — красным, недоступный — бледным, длинный — в отточие."}}}},i={name:"С поиском",args:{showSearch:!0,optionFilterProp:"label",placeholder:"Начните вводить"},parameters:{docs:{description:{story:"Введи «Тверь» — список покажет «Упс! Такого не нашлось»."}}}},d={name:"Загрузка и повтор",parameters:{docs:{description:{story:"Нажми «повторить» справа — полсекунды загрузка, затем список доступен."}}},render:()=>{const[p,c]=j.useState("error");return u.jsx(e,{label:"Город",placeholder:"Выберите город",options:r,loading:p==="loading",loadError:p==="error",errorMessage:p==="error"?"Не удалось загрузить список":void 0,onRetry:()=>{c("loading"),setTimeout(()=>c("ok"),600)}})}},$=["Playground","Состояния","ОткрытыйСписок","СПоиском","ЗагрузкаИПовтор"];var E,m,g;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:"{}",...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var S,b,C;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(C=(b=s.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var x,h,B;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(A=(y=d.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};export{a as Playground,$ as __namedExportsOrder,Z as default,d as ЗагрузкаИПовтор,n as ОткрытыйСписок,i as СПоиском,s as Состояния};
