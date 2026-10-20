import{j as u,l as b}from"./iframe-xHeXyRUt.js";import{D as e}from"./DropdownMenuItem-DIPkA542.js";import{D as x}from"./fieldParts-CRP_2h79.js";import"./preload-helper-C1FmrZbK.js";import"./Radio-RKMtjUxZ.js";import"./index-DFWcBYSm.js";import"./context-YSLqM9pP.js";import"./pickAttrs-BwR6N1Ic.js";import"./useCSSVarCls-2qV6Kap2.js";import"./useForm-DcteB1QV.js";import"./index-DLAirbDr.js";const p=244;function t({title:o,children:r}){return u.jsxs("div",{style:{width:p,display:"flex",flexDirection:"column",gap:4},children:[u.jsx("span",{style:{fontFamily:"system-ui, sans-serif",fontSize:12,color:"#7e7e7e",marginBottom:4},children:o}),u.jsx("div",{style:{padding:8,background:"var(--dropdown-bg)",borderRadius:"var(--dropdown-radius)",boxShadow:"var(--dropdown-shadow)",display:"flex",flexDirection:"column",gap:4},children:r})]})}const B={title:"UI Kit/Навигация/DropdownMenu/DropdownMenuItem",id:"ui-kit-dropdownmenuitem",component:e,tags:["autodocs"],args:{label:"Санкт-Петербург",description:"",mark:"none",selected:!1,disabled:!1,multiline:!1},argTypes:{label:{control:"text"},description:{control:"text",description:"Пояснение второй строкой",table:{category:"Слоты"}},mark:{control:"inline-radio",options:["none","tick","checkbox","radio"]},selected:{control:"boolean"},disabled:{control:"boolean"},multiline:{control:"boolean"},icon:x},decorators:[(o,r)=>r.name==="Playground"?u.jsx("div",{style:{width:p},children:u.jsx(o,{})}):u.jsx(o,{})],parameters:{docs:{description:{component:"Пункт выпадающего списка — молекула: его ставят `DropdownMenu`, `Select`, `MultiSelect`, можно и вне меню. Сам выбор не хранит — `selected`/`disabled` снаружи, наведение — CSS.\nИз praktis-ui-kit, вид Setl (`--dropdown-*`): текст 16 как в поле, выбранный — красный на бледно-красном, наведение — серая подложка, как у бокового меню. **"}}}},l={},n={render:()=>u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:32},children:[u.jsxs(t,{title:"mark = none",children:[u.jsx(e,{label:"Обычный"}),u.jsx(e,{label:"Выбранный",selected:!0}),u.jsx(e,{label:"Недоступный",disabled:!0}),u.jsx(e,{label:"Выбран и недоступен",selected:!0,disabled:!0})]}),u.jsxs(t,{title:"tick / checkbox / radio",children:[u.jsx(e,{label:"Галочка",mark:"tick",selected:!0}),u.jsx(e,{label:"Чекбокс",mark:"checkbox",selected:!0}),u.jsx(e,{label:"Чекбокс",mark:"checkbox"}),u.jsx(e,{label:"Радио",mark:"radio",selected:!0})]}),u.jsxs(t,{title:"Иконка, пояснение, перенос",children:[u.jsx(e,{label:"Редактировать",icon:u.jsx(b,{size:16})}),u.jsx(e,{label:"Удалить курс",description:"Отменить будет нельзя"}),u.jsx(e,{label:"Ленинградская область, Всеволожский район, Кудрово"}),u.jsx(e,{label:"Ленинградская область, Всеволожский район, Кудрово",multiline:!0})]})]})},A=["Playground","Варианты"];var a,s,d;l.parameters={...l.parameters,docs:{...(a=l.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(d=(s=l.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var i,c,m;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: 32
  }}>
      <Column title="mark = none">
        <DropdownMenuItem label="Обычный" />
        <DropdownMenuItem label="Выбранный" selected />
        <DropdownMenuItem label="Недоступный" disabled />
        <DropdownMenuItem label="Выбран и недоступен" selected disabled />
      </Column>
      <Column title="tick / checkbox / radio">
        <DropdownMenuItem label="Галочка" mark="tick" selected />
        <DropdownMenuItem label="Чекбокс" mark="checkbox" selected />
        <DropdownMenuItem label="Чекбокс" mark="checkbox" />
        <DropdownMenuItem label="Радио" mark="radio" selected />
      </Column>
      <Column title="Иконка, пояснение, перенос">
        <DropdownMenuItem label="Редактировать" icon={<IconEdit size={16} />} />
        <DropdownMenuItem label="Удалить курс" description="Отменить будет нельзя" />
        <DropdownMenuItem label="Ленинградская область, Всеволожский район, Кудрово" />
        <DropdownMenuItem label="Ленинградская область, Всеволожский район, Кудрово" multiline />
      </Column>
    </div>
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};export{l as Playground,A as __namedExportsOrder,B as default,n as Варианты};
