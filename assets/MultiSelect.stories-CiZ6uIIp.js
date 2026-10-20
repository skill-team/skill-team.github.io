import{j as e}from"./iframe-DATgQ8vN.js";import{M as u}from"./MultiSelect-BGYHKjkf.js";import{p as r,D as l,f as x,G as S,a as o}from"./fieldParts-BtdALjDX.js";import"./preload-helper-C1FmrZbK.js";import"./SymbolDelete-DrtdrtQu.js";import"./InputChrome-DJBp6cOC.js";import"./context-DazkKd-s.js";import"./useTruncated-N2gxnK_F.js";import"./index-CeHB25lk.js";import"./ContextIsolator-CeJsXOdt.js";import"./Spinner-DyrHG-Mp.js";import"./DropdownMenuItem-Cp_mkPe0.js";import"./Radio-B1KVfDtA.js";import"./index-CYvuY-hE.js";import"./pickAttrs-BISx_BUG.js";import"./useCSSVarCls-DaoFEgPu.js";import"./useForm-B0WsWgFz.js";import"./index-CSlfq-xb.js";import"./Select.module-L1SttIPx.js";import"./MultiSelect.module-BPtK-D04.js";import"./MultiSelectTag-B03cpHYx.js";import"./index-FbqN53M5.js";import"./useShowArrow-x4dDGuQe.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-BA8TJL25.js";import"./useLocale-DXJzhzVt.js";import"./move-WRaalpZN.js";import"./useIcons-DE0ArMNU.js";import"./CheckOutlined-D6ReE52J.js";import"./CloseCircleFilled-BYZZ-KZf.js";import"./CloseOutlined-O5V0BNFK.js";import"./PurePanel-AqUBzLFI.js";const t=[{value:"bim",label:"BIM"},{value:"safety",label:"Охрана труда"},{value:"docs",label:"Документооборот"},{value:"estimate",label:"Сметы"},{value:"lead",label:"Руководство проектами"},{value:"soft",label:"Гибкие навыки и работа с командой подрядчика"}],Z={title:"UI Kit/Поля ввода/MultiSelect/MultiSelect",id:"ui-kit-multiselect",component:u,tags:["autodocs"],args:{label:"Темы курсов",placeholder:"Выберите темы",options:t,required:!1,status:"",errorMessage:"Выберите хотя бы одну тему",disabled:!1,loading:!1,loadError:!1,singleLine:!1},argTypes:{label:{control:"text"},placeholder:{control:"text"},required:{control:"boolean",table:{category:"Слоты"}},status:{control:{type:"inline-radio",labels:{"":"обычный",error:"error"}},options:["","error"]},errorMessage:{control:"text"},disabled:{control:"boolean"},loading:{control:"boolean"},loadError:{control:"boolean"},singleLine:{control:"boolean",description:"Теги в одну строку, лишние — в «+N»"},options:l,onRetry:l,emptyState:l,value:l,defaultValue:l,onChange:l},...r,decorators:[...r.decorators,x()],parameters:{...r.parameters,docs:{...r.parameters.docs,description:{component:'Выбор нескольких значений. Из praktis-ui-kit, вид Setl — как Select кита.\nВыбранное — тегами (`MultiSelectTag`, «таблетка» 24), у каждого крестик. Поле растёт по высоте под все теги; `singleLine` — в одну строку, лишние сворачиваются в «+N» с подсказкой. В списке — чекбоксы (`DropdownMenuItem` с `mark="checkbox"`).\nПоиск вводом в поле выключен, включается `showSearch`. Валидация — через `Form.Item noStyle`.\n\n**'}}}},a={},s={parameters:{docs:{story:{height:"360px"}}},render:()=>e.jsxs(S,{children:[e.jsx(o,{title:"Default",children:e.jsx(u,{label:"Темы курсов",placeholder:"Выберите темы",options:t})}),e.jsx(o,{title:"Filled — поле растёт",children:e.jsx(u,{label:"Темы курсов",options:t,defaultValue:["bim","safety","docs","soft"]})}),e.jsx(o,{title:"singleLine — «+N»",children:e.jsx(u,{label:"Темы курсов",options:t,defaultValue:["bim","safety","docs","soft"],singleLine:!0})}),e.jsx(o,{title:"Error",children:e.jsx(u,{label:"Темы курсов",required:!0,placeholder:"Выберите темы",options:t,status:"error",errorMessage:"Выберите хотя бы одну тему"})}),e.jsx(o,{title:"Loading",children:e.jsx(u,{label:"Темы курсов",options:t,loading:!0})}),e.jsx(o,{title:"Disabled Filled",children:e.jsx(u,{label:"Темы курсов",options:t,defaultValue:["bim","lead"],disabled:!0})})]})},i={name:"Открытый список",args:{defaultValue:["bim","docs"],open:!0},parameters:{docs:{description:{story:"Выбранные — отмеченные чекбоксы и красный текст."}}}},$=["Playground","Состояния","ОткрытыйСписок"];var n,d,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var c,m,b;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var f,g,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(C=(g=i.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};export{a as Playground,$ as __namedExportsOrder,Z as default,i as ОткрытыйСписок,s as Состояния};
