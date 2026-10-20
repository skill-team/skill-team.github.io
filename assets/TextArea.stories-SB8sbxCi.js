import{j as u}from"./iframe-DATgQ8vN.js";import{T as e}from"./TextArea-DCmxcrfi.js";import{D as o,f as A,G as b,a as r}from"./fieldParts-BtdALjDX.js";import"./preload-helper-C1FmrZbK.js";import"./Scrollbar-Z2aviri_.js";import"./InputChrome-DJBp6cOC.js";import"./context-DazkKd-s.js";import"./useTruncated-N2gxnK_F.js";import"./index-CeHB25lk.js";import"./ContextIsolator-CeJsXOdt.js";import"./index-DfDrvDPo.js";import"./index-dfHOxVsB.js";import"./CloseCircleFilled-BYZZ-KZf.js";import"./useCSSVarCls-DaoFEgPu.js";import"./pickAttrs-BISx_BUG.js";import"./EyeOutlined-B_Mfs_gp.js";const s="Хочу предложить добавить в курс по BIM-моделированию отдельный модуль про согласование изменений с подрядчиком: на практике это занимает больше всего времени, а в текущей программе об этом одна строчка.",q={title:"UI Kit/Поля ввода/TextArea",id:"ui-kit-textarea",component:e,tags:["autodocs"],args:{label:"Комментарий",placeholder:"Опишите идею",required:!1,infoText:"",status:"",errorMessage:"Поле обязательно для заполнения",disabled:!1,minRows:2},argTypes:{label:{control:"text"},placeholder:{control:"text"},required:{control:"boolean",table:{category:"Слоты"}},infoText:{control:"text",table:{category:"Слоты"}},status:{control:{type:"inline-radio",labels:{"":"обычный",error:"error"}},options:["","error"]},errorMessage:{control:"text"},disabled:{control:"boolean"},minRows:{control:{type:"range",min:1,max:10,step:1},description:"Сколько строк у пустого поля — с этой высоты оно начинает и дальше растёт по тексту. По умолчанию 2; 1 — поле в строку (поле вопроса Сэтл ИИ)"},maxRows:{control:"number",description:"После скольких строк перестать расти и прокручивать. Пусто — растёт без предела"},value:o,defaultValue:o,onChange:o},decorators:[A()],parameters:{docs:{description:{component:"Многострочное поле. Из praktis-ui-kit, вид Setl: цвета `--input-*`, отступ 16, шрифт 16, та же обвязка и валидация.\nРазмеров нет: высота пустого поля — `minRows` строк (по умолчанию 2, ползунок в панели ниже), дальше растёт по вводу; `maxRows` — предел, дальше прокрутка (полоса кита). Уголка растягивания нет. Текст переносится, тултипа нет.\n\nСкругление 16, а не 24 как у Input: на высоком поле 24 превращает углы в «таблетку». **"}}}},l={},t={render:()=>u.jsxs(b,{children:[u.jsx(r,{title:"Default",children:u.jsx(e,{label:"Комментарий",placeholder:"Опишите идею"})}),u.jsx(r,{title:"Filled — растёт по тексту",children:u.jsx(e,{label:"Комментарий",defaultValue:s})}),u.jsx(r,{title:"minRows = 1 — в строку, растёт по тексту",children:u.jsx(e,{label:"Комментарий",placeholder:"Опишите идею",minRows:1})}),u.jsx(r,{title:"minRows = 5 — высокое пустое поле",children:u.jsx(e,{label:"Комментарий",placeholder:"Опишите идею",minRows:5})}),u.jsx(r,{title:"maxRows = 3 — дальше прокрутка",children:u.jsx(e,{label:"Комментарий",defaultValue:s,maxRows:3})}),u.jsx(r,{title:"Error",children:u.jsx(e,{label:"Комментарий",required:!0,status:"error",errorMessage:"Поле обязательно для заполнения"})}),u.jsx(r,{title:"Disabled Filled",children:u.jsx(e,{label:"Комментарий",defaultValue:"Идея уже отправлена",disabled:!0})})]})},a={name:"Со счётчиком",args:{maxLength:300,showCount:!0,minRows:3,defaultValue:"Однажды построил миниатюрную модель своего родного города из конструктора."},parameters:{docs:{description:{story:"`showCount` + `maxLength` — счётчик «N / 300» внутри поля снизу слева, overline 10 серым (окно «Редактирование профиля» в личном кабинете)."}}}},O=["Playground","Состояния","Счётчик"];var n,i,d;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(d=(i=l.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,c,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var E,x,C;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Со счётчиком",
  args: {
    maxLength: 300,
    showCount: true,
    minRows: 3,
    defaultValue: "Однажды построил миниатюрную модель своего родного города из конструктора."
  },
  parameters: {
    docs: {
      description: {
        story: "\\\`showCount\\\` + \\\`maxLength\\\` — счётчик «N / 300» внутри поля снизу слева, overline 10 серым (окно «Редактирование профиля» в личном кабинете)."
      }
    }
  }
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};export{l as Playground,O as __namedExportsOrder,q as default,t as Состояния,a as Счётчик};
