import{j as u}from"./iframe-XQ_qeO9Z.js";import{T as e}from"./TextArea-CysBZA5_.js";import{D as a,f as p,G as x,a as l}from"./fieldParts-BYBLgJcq.js";import"./preload-helper-C1FmrZbK.js";import"./Scrollbar-CNu4UKK1.js";import"./InputChrome-DVuHJmsy.js";import"./context-BSOHyiuZ.js";import"./useTruncated-B6hy5Aa6.js";import"./index--oqSavUY.js";import"./ContextIsolator-DJke2nN-.js";import"./index-CSyY2RW3.js";import"./index-DslMSMmN.js";import"./Input-lJfcN2sb.js";import"./CloseCircleFilled-siTOpMub.js";import"./SearchOutlined-D4In1-vV.js";import"./useCSSVarCls-BI9DWBpX.js";import"./pickAttrs-BAVtGlv8.js";const o="Хочу предложить добавить в курс по BIM-моделированию отдельный модуль про согласование изменений с подрядчиком: на практике это занимает больше всего времени, а в текущей программе об этом одна строчка.",M={title:"UI Kit/Поля ввода/TextArea",id:"ui-kit-textarea",component:e,tags:["autodocs"],args:{label:"Комментарий",placeholder:"Опишите идею",required:!1,infoText:"",status:"",errorMessage:"Поле обязательно для заполнения",disabled:!1,minRows:2},argTypes:{label:{control:"text"},placeholder:{control:"text"},required:{control:"boolean",table:{category:"Слоты"}},infoText:{control:"text",table:{category:"Слоты"}},status:{control:{type:"inline-radio",labels:{"":"обычный",error:"error"}},options:["","error"]},errorMessage:{control:"text"},disabled:{control:"boolean"},minRows:{control:{type:"range",min:1,max:10,step:1},description:"Сколько строк у пустого поля — с этой высоты оно начинает и дальше растёт по тексту. По умолчанию 2; 1 — поле в строку (поле вопроса Сэтл ИИ)"},maxRows:{control:"number",description:"После скольких строк перестать расти и прокручивать. Пусто — растёт без предела"},value:a,defaultValue:a,onChange:a},decorators:[p()],parameters:{docs:{description:{component:"Многострочное поле. Из praktis-ui-kit (Figma «Практис», Textarea `814:1151`), вид Setl: цвета `--input-*`, отступ 16, шрифт 16, та же обвязка и валидация.\nРазмеров нет: высота пустого поля — `minRows` строк (по умолчанию 2, ползунок в панели ниже), дальше растёт по вводу; `maxRows` — предел, дальше прокрутка (полоса кита). Уголка растягивания нет. Текст переносится, тултипа нет.\n\nСкругление 16, а не 24 как у Input: на высоком поле 24 превращает углы в «таблетку». **Figma Setl для textarea не снималась** — сверить."}}}},r={},t={render:()=>u.jsxs(x,{children:[u.jsx(l,{title:"Default",children:u.jsx(e,{label:"Комментарий",placeholder:"Опишите идею"})}),u.jsx(l,{title:"Filled — растёт по тексту",children:u.jsx(e,{label:"Комментарий",defaultValue:o})}),u.jsx(l,{title:"minRows = 1 — в строку, растёт по тексту",children:u.jsx(e,{label:"Комментарий",placeholder:"Опишите идею",minRows:1})}),u.jsx(l,{title:"minRows = 5 — высокое пустое поле",children:u.jsx(e,{label:"Комментарий",placeholder:"Опишите идею",minRows:5})}),u.jsx(l,{title:"maxRows = 3 — дальше прокрутка",children:u.jsx(e,{label:"Комментарий",defaultValue:o,maxRows:3})}),u.jsx(l,{title:"Error",children:u.jsx(e,{label:"Комментарий",required:!0,status:"error",errorMessage:"Поле обязательно для заполнения"})}),u.jsx(l,{title:"Disabled Filled",children:u.jsx(e,{label:"Комментарий",defaultValue:"Идея уже отправлена",disabled:!0})})]})},q=["Playground","Состояния"];var s,i,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(n=(i=r.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var d,m,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Grid>
      <Cell title="Default">
        <TextArea label="Комментарий" placeholder="Опишите идею" />
      </Cell>
      <Cell title="Filled — растёт по тексту">
        <TextArea label="Комментарий" defaultValue={LONG} />
      </Cell>
      <Cell title="minRows = 1 — в строку, растёт по тексту">
        <TextArea label="Комментарий" placeholder="Опишите идею" minRows={1} />
      </Cell>
      <Cell title="minRows = 5 — высокое пустое поле">
        <TextArea label="Комментарий" placeholder="Опишите идею" minRows={5} />
      </Cell>
      <Cell title="maxRows = 3 — дальше прокрутка">
        <TextArea label="Комментарий" defaultValue={LONG} maxRows={3} />
      </Cell>
      <Cell title="Error">
        <TextArea label="Комментарий" required status="error" errorMessage="Поле обязательно для заполнения" />
      </Cell>
      <Cell title="Disabled Filled">
        <TextArea label="Комментарий" defaultValue="Идея уже отправлена" disabled />
      </Cell>
    </Grid>
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};export{r as Playground,q as __namedExportsOrder,M as default,t as Состояния};
