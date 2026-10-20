import{r as M,j as u}from"./iframe-xHeXyRUt.js";import{M as e}from"./MultiSelect-BcrY0u3V.js";import{p as a,D as r,f as j,G as v,a as l}from"./fieldParts-CRP_2h79.js";import"./preload-helper-C1FmrZbK.js";import"./SymbolDelete-CQSneJnr.js";import"./InputChrome-RLws-aIV.js";import"./context-YSLqM9pP.js";import"./useTruncated-DZT6EyQu.js";import"./index-DAOdAdyQ.js";import"./ContextIsolator-BRwUpuIq.js";import"./Spinner-BjmqB2w1.js";import"./DropdownMenuItem-DIPkA542.js";import"./Radio-RKMtjUxZ.js";import"./index-DFWcBYSm.js";import"./pickAttrs-BwR6N1Ic.js";import"./useCSSVarCls-2qV6Kap2.js";import"./useForm-DcteB1QV.js";import"./index-DLAirbDr.js";import"./Select.module-L1SttIPx.js";import"./MultiSelect.module-CvPZsC0U.js";import"./MultiSelectTag-C-t0yLYm.js";import"./index-PlNzUQFN.js";import"./useShowArrow-BG5xSIIH.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-DDDIwkRC.js";import"./useLocale-C5RInZ-8.js";import"./move-DrY42EjS.js";import"./useIcons-BJDXcmbA.js";import"./CheckOutlined-1AcpI7FG.js";import"./CloseCircleFilled-U51GO4x2.js";import"./CloseOutlined-Ba06t28w.js";import"./PurePanel-DskKyjH6.js";const t=[{value:"bim",label:"BIM"},{value:"safety",label:"Охрана труда"},{value:"docs",label:"Документооборот"},{value:"estimate",label:"Сметы"},{value:"lead",label:"Руководство проектами"},{value:"soft",label:"Гибкие навыки и работа с командой подрядчика"}],s4={title:"UI Kit/Поля ввода/MultiSelect/MultiSelect",id:"ui-kit-multiselect",component:e,tags:["autodocs"],args:{label:"Темы курсов",placeholder:"Выберите темы",options:t,required:!1,status:"",errorMessage:"Выберите хотя бы одну тему",disabled:!1,loading:!1,loadError:!1,singleLine:!1},argTypes:{label:{control:"text"},placeholder:{control:"text"},required:{control:"boolean",table:{category:"Слоты"}},status:{control:{type:"inline-radio",labels:{"":"обычный",error:"error"}},options:["","error"]},errorMessage:{control:"text"},disabled:{control:"boolean"},loading:{control:"boolean"},loadError:{control:"boolean"},singleLine:{control:"boolean",description:"Теги в одну строку, лишние — в «+N»"},options:r,onRetry:r,emptyState:r,value:r,defaultValue:r,onChange:r},...a,decorators:[...a.decorators,j()],parameters:{...a.parameters,docs:{...a.parameters.docs,description:{component:'Выбор нескольких значений. Из praktis-ui-kit, вид Setl — как Select кита.\nВыбранное — тегами (`MultiSelectTag`, «таблетка» 24), у каждого крестик. Поле растёт по высоте под все теги; `singleLine` — в одну строку, лишние сворачиваются в «+N» с подсказкой. В списке — чекбоксы (`DropdownMenuItem` с `mark="checkbox"`).\nПоиск вводом в поле выключен, включается `showSearch`. Валидация — через `Form.Item noStyle`.\n\n**Свой пункт — `creatable`.** Набрали текст, такого пункта нет — первым в списке «+ Создать «…»» (подпись — строкой: `creatable="Создать тег"`); Enter или нажатие — пункт сразу выбран и остаётся в списке. Сохранить его у себя — `onCreate(текст)`. Поиск при этом включается сам. Пример — теги новости.\n\n**Длинные пункты — `multilineOptions`.** Название целиком, в несколько строк, без «…» и подсказки при наведении (пример — «Связанные материалы» при создании новости).'}}}},s={},n={parameters:{docs:{story:{height:"360px"}}},render:()=>u.jsxs(v,{children:[u.jsx(l,{title:"Default",children:u.jsx(e,{label:"Темы курсов",placeholder:"Выберите темы",options:t})}),u.jsx(l,{title:"Filled — поле растёт",children:u.jsx(e,{label:"Темы курсов",options:t,defaultValue:["bim","safety","docs","soft"]})}),u.jsx(l,{title:"singleLine — «+N»",children:u.jsx(e,{label:"Темы курсов",options:t,defaultValue:["bim","safety","docs","soft"],singleLine:!0})}),u.jsx(l,{title:"Error",children:u.jsx(e,{label:"Темы курсов",required:!0,placeholder:"Выберите темы",options:t,status:"error",errorMessage:"Выберите хотя бы одну тему"})}),u.jsx(l,{title:"Loading",children:u.jsx(e,{label:"Темы курсов",options:t,loading:!0})}),u.jsx(l,{title:"Disabled Filled",children:u.jsx(e,{label:"Темы курсов",options:t,defaultValue:["bim","lead"],disabled:!0})})]})},i={name:"Открытый список",args:{defaultValue:["bim","docs"],open:!0},parameters:{docs:{description:{story:"Выбранные — отмеченные чекбоксы и красный текст."}}}},d={name:"Свой пункт (теги)",parameters:{docs:{description:{story:"Наберите тег, которого нет в списке, — «+ Создать тег «…»» первым пунктом, Enter — тег добавлен и выбран."}}},render:D=>{const[A,y]=M.useState(["Обучение"]);return u.jsx("div",{style:{width:360},children:u.jsx(e,{...D,label:"Теги",placeholder:"Выберите или введите новый",creatable:"Создать тег",options:["Объекты","Обучение","Праздники","Спорт","Охрана труда"].map(o=>({value:o,label:o})),value:A,onChange:o=>y(o)})})}},n4=["Playground","Состояния","ОткрытыйСписок","СвойПункт"];var p,c,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var b,g,E;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        height: "360px"
      }
    }
  },
  render: () => <Grid>
      <Cell title="Default">
        <MultiSelect label="Темы курсов" placeholder="Выберите темы" options={TOPICS} />
      </Cell>
      <Cell title="Filled — поле растёт">
        <MultiSelect label="Темы курсов" options={TOPICS} defaultValue={["bim", "safety", "docs", "soft"]} />
      </Cell>
      <Cell title="singleLine — «+N»">
        <MultiSelect label="Темы курсов" options={TOPICS} defaultValue={["bim", "safety", "docs", "soft"]} singleLine />
      </Cell>
      <Cell title="Error">
        <MultiSelect label="Темы курсов" required placeholder="Выберите темы" options={TOPICS} status="error" errorMessage="Выберите хотя бы одну тему" />
      </Cell>
      <Cell title="Loading">
        <MultiSelect label="Темы курсов" options={TOPICS} loading />
      </Cell>
      <Cell title="Disabled Filled">
        <MultiSelect label="Темы курсов" options={TOPICS} defaultValue={["bim", "lead"]} disabled />
      </Cell>
    </Grid>
}`,...(E=(g=n.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var C,B,f;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Открытый список",
  args: {
    defaultValue: ["bim", "docs"],
    open: true
  },
  parameters: {
    docs: {
      description: {
        story: "Выбранные — отмеченные чекбоксы и красный текст."
      }
    }
  }
}`,...(f=(B=i.parameters)==null?void 0:B.docs)==null?void 0:f.source}}};var x,h,S;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Свой пункт (теги)",
  parameters: {
    docs: {
      description: {
        story: "Наберите тег, которого нет в списке, — «+ Создать тег «…»» первым пунктом, Enter — тег добавлен и выбран."
      }
    }
  },
  render: args => {
    const [tags, setTags] = useState<string[]>(["Обучение"]);
    return <div style={{
      width: 360
    }}>
        <MultiSelect {...args} label="Теги" placeholder="Выберите или введите новый" creatable="Создать тег" options={["Объекты", "Обучение", "Праздники", "Спорт", "Охрана труда"].map(t => ({
        value: t,
        label: t
      }))} value={tags} onChange={v => setTags(v as string[])} />
      </div>;
  }
}`,...(S=(h=d.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};export{s as Playground,n4 as __namedExportsOrder,s4 as default,i as ОткрытыйСписок,d as СвойПункт,n as Состояния};
