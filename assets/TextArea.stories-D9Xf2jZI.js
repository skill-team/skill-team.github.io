import{j as u}from"./iframe-DCXgeGQz.js";import{T as e}from"./TextArea-BwQlGv4g.js";import{D as a,f as p,G as x,a as r}from"./fieldParts-CCu4UZF-.js";import"./preload-helper-C1FmrZbK.js";import"./Scrollbar-6ATCXCKy.js";import"./InputChrome-zHxysjNv.js";import"./context-Cf_eQdng.js";import"./useTruncated-RsVvaZAD.js";import"./index-DsToMKrP.js";import"./index-DIzNnNPF.js";import"./index-CaExZMU_.js";import"./useCSSVarCls-CcUg8sJf.js";import"./pickAttrs-DkFrowIo.js";const o="Хочу предложить добавить в курс по BIM-моделированию отдельный модуль про согласование изменений с подрядчиком: на практике это занимает больше всего времени, а в текущей программе об этом одна строчка.",G={title:"UI Kit/Поля ввода/TextArea",id:"ui-kit-textarea",component:e,tags:["autodocs"],args:{label:"Комментарий",placeholder:"Опишите идею",required:!1,infoText:"",status:"",errorMessage:"Поле обязательно для заполнения",disabled:!1},argTypes:{label:{control:"text"},placeholder:{control:"text"},required:{control:"boolean",table:{category:"Слоты"}},infoText:{control:"text",table:{category:"Слоты"}},status:{control:{type:"inline-radio",labels:{"":"обычный",error:"error"}},options:["","error"]},errorMessage:{control:"text"},disabled:{control:"boolean"},maxRows:{control:"number",description:"После скольких строк перестать расти и прокручивать. Пусто — растёт без предела"},value:a,defaultValue:a,onChange:a},decorators:[p()],parameters:{docs:{description:{component:"Многострочное поле. Из praktis-ui-kit (Figma «Практис», Textarea `814:1151`), вид Setl: цвета `--input-*`, отступ 16, шрифт 16, та же обвязка и валидация.\nРазмеров нет: 2 строки, дальше растёт по вводу; `maxRows` — предел, дальше прокрутка (полоса кита). Уголка растягивания нет. Текст переносится, тултипа нет.\n\nСкругление 16, а не 24 как у Input: на высоком поле 24 превращает углы в «таблетку». **Figma Setl для textarea не снималась** — сверить."}}}},l={},t={render:()=>u.jsxs(x,{children:[u.jsx(r,{title:"Default",children:u.jsx(e,{label:"Комментарий",placeholder:"Опишите идею"})}),u.jsx(r,{title:"Filled — растёт по тексту",children:u.jsx(e,{label:"Комментарий",defaultValue:o})}),u.jsx(r,{title:"maxRows = 3 — дальше прокрутка",children:u.jsx(e,{label:"Комментарий",defaultValue:o,maxRows:3})}),u.jsx(r,{title:"Error",children:u.jsx(e,{label:"Комментарий",required:!0,status:"error",errorMessage:"Поле обязательно для заполнения"})}),u.jsx(r,{title:"Disabled Filled",children:u.jsx(e,{label:"Комментарий",defaultValue:"Идея уже отправлена",disabled:!0})})]})},R=["Playground","Состояния"];var s,i,n;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(n=(i=l.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};var d,c,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Grid>
      <Cell title="Default">
        <TextArea label="Комментарий" placeholder="Опишите идею" />
      </Cell>
      <Cell title="Filled — растёт по тексту">
        <TextArea label="Комментарий" defaultValue={LONG} />
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
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};export{l as Playground,R as __namedExportsOrder,G as default,t as Состояния};
