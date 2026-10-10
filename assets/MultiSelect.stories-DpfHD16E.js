import{j as e}from"./iframe-T1G-SIdY.js";import{M as u}from"./MultiSelect-DQywLjmP.js";import{p as r,D as t,f as S,G as x,a as o}from"./fieldParts-DZVs388l.js";import"./preload-helper-C1FmrZbK.js";import"./SymbolDelete-BWfO80vL.js";import"./InputChrome-CODlI84f.js";import"./context-BT_JPeuY.js";import"./useTruncated-wUfbEmiw.js";import"./index-CCOMMNKo.js";import"./Spinner-CnJbqGOK.js";import"./DropdownMenuItem-DOpOoeyh.js";import"./Radio-B887bmkp.js";import"./index-BHPLlts8.js";import"./pickAttrs-prGlZbsm.js";import"./useCSSVarCls-h8B24G72.js";import"./useForm-kud5EZMb.js";import"./Select.module-L1SttIPx.js";import"./MultiSelectTag-ReQBPynL.js";import"./index-CLRR8GDC.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-DRYAuKn9.js";import"./PurePanel-CBq0Z3bd.js";import"./SearchOutlined-BlwStQf3.js";import"./useLocale-w2fOQfta.js";import"./move-CpVcuHve.js";import"./useIcons-t3jf6XO0.js";import"./CloseCircleFilled-lErke8Fw.js";import"./CloseOutlined-Du0dHgkK.js";const l=[{value:"bim",label:"BIM"},{value:"safety",label:"Охрана труда"},{value:"docs",label:"Документооборот"},{value:"estimate",label:"Сметы"},{value:"lead",label:"Руководство проектами"},{value:"soft",label:"Гибкие навыки и работа с командой подрядчика"}],J={title:"UI Kit/Поля ввода/MultiSelect/MultiSelect",id:"ui-kit-multiselect",component:u,tags:["autodocs"],args:{label:"Темы курсов",placeholder:"Выберите темы",options:l,required:!1,status:"",errorMessage:"Выберите хотя бы одну тему",disabled:!1,loading:!1,loadError:!1,singleLine:!1},argTypes:{label:{control:"text"},placeholder:{control:"text"},required:{control:"boolean",table:{category:"Слоты"}},status:{control:{type:"inline-radio",labels:{"":"обычный",error:"error"}},options:["","error"]},errorMessage:{control:"text"},disabled:{control:"boolean"},loading:{control:"boolean"},loadError:{control:"boolean"},singleLine:{control:"boolean",description:"Теги в одну строку, лишние — в «+N»"},options:t,onRetry:t,emptyState:t,value:t,defaultValue:t,onChange:t},...r,decorators:[...r.decorators,S()],parameters:{...r.parameters,docs:{...r.parameters.docs,description:{component:'Выбор нескольких значений. Из praktis-ui-kit (Figma «Практис», Select / Multi `1148:2420`), вид Setl — как Select кита.\nВыбранное — тегами (`MultiSelectTag`, «таблетка» 24), у каждого крестик. Поле растёт по высоте под все теги; `singleLine` — в одну строку, лишние сворачиваются в «+N» с подсказкой. В списке — чекбоксы (`DropdownMenuItem` с `mark="checkbox"`).\nПоиск вводом в поле выключен, включается `showSearch`. Валидация — через `Form.Item noStyle`.\n\n**Figma Setl для мультиселекта не снималась** — сверить.'}}}},a={},s={parameters:{docs:{story:{height:"360px"}}},render:()=>e.jsxs(x,{children:[e.jsx(o,{title:"Default",children:e.jsx(u,{label:"Темы курсов",placeholder:"Выберите темы",options:l})}),e.jsx(o,{title:"Filled — поле растёт",children:e.jsx(u,{label:"Темы курсов",options:l,defaultValue:["bim","safety","docs","soft"]})}),e.jsx(o,{title:"singleLine — «+N»",children:e.jsx(u,{label:"Темы курсов",options:l,defaultValue:["bim","safety","docs","soft"],singleLine:!0})}),e.jsx(o,{title:"Error",children:e.jsx(u,{label:"Темы курсов",required:!0,placeholder:"Выберите темы",options:l,status:"error",errorMessage:"Выберите хотя бы одну тему"})}),e.jsx(o,{title:"Loading",children:e.jsx(u,{label:"Темы курсов",options:l,loading:!0})}),e.jsx(o,{title:"Disabled Filled",children:e.jsx(u,{label:"Темы курсов",options:l,defaultValue:["bim","lead"],disabled:!0})})]})},i={name:"Открытый список",args:{defaultValue:["bim","docs"],open:!0},parameters:{docs:{description:{story:"Выбранные — отмеченные чекбоксы и красный текст."}}}},Q=["Playground","Состояния","ОткрытыйСписок"];var n,d,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,m,b;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,f,C;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};export{a as Playground,Q as __namedExportsOrder,J as default,i as ОткрытыйСписок,s as Состояния};
