import{r as g,j as e,cL as G,c$ as O}from"./iframe-B8Z8o1yT.js";import{S as Q}from"./Spinner-k20vczyH.js";import{u as U,i as P,I as W}from"./InputChrome-DdUT2QAy.js";import{I as $}from"./index-Ds3kIrnP.js";import{D as n,f as H,G as J,a as l}from"./fieldParts-BJ6nf_NI.js";import"./preload-helper-C1FmrZbK.js";import"./context-DQar6x_M.js";import"./index-BjQvEE3K.js";import"./index-QJeEJnZl.js";import"./pickAttrs-OvQrtQPG.js";const X="_icon_19qp6_3",Y="_search_19qp6_9",E={icon:X,search:Y};function u({label:s,required:p,infoText:o,errorMessage:t,status:h,className:k,disabled:v,allowClear:S=!0,placeholder:A="Поиск",defaultValue:C,value:m,onChange:f,onSearch:a,onKeyDown:y,loading:x=!1,...L}){const I=g.useRef(null),[w,z]=g.useState(()=>String(C??"")),j=m!==void 0?String(m??""):w,M=U(()=>{var r;return(r=I.current)==null?void 0:r.input},[j]),N=e.jsx($,{...L,ref:I,type:"search",disabled:v,status:h,placeholder:A,defaultValue:C,value:m,prefix:e.jsx("span",{className:E.icon,children:x?e.jsx(Q,{}):e.jsx(O,{size:18})}),allowClear:S===!0?{clearIcon:e.jsx(G,{size:16})}:S,"aria-busy":x||void 0,onChange:r=>{z(r.target.value),f==null||f(r),r.type==="click"&&r.target.value===""&&(a==null||a(""))},onKeyDown:r=>{r.key==="Enter"&&!x&&(a==null||a(r.currentTarget.value)),y==null||y(r)},className:[P.input,E.search,k].filter(Boolean).join(" ")});return e.jsx(W,{label:s,required:p,infoText:o,errorMessage:t,isError:h==="error",disabled:v,field:N,valueTooltip:{truncated:M,value:j}})}u.__docgenInfo={description:"",methods:[],displayName:"InputSearch",props:{label:{required:!1,tsType:{name:"ReactNode"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},infoText:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"ReactNode"},description:""},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Запуск поиска: Enter и очистка крестиком. Для поиска на лету — обычный onChange."},loading:{required:!1,tsType:{name:"boolean"},description:"Идёт поиск — спиннер вместо лупы, повторный запуск Enter-ом не срабатывает.",defaultValue:{value:"false",computed:!1}},allowClear:{defaultValue:{value:"true",computed:!1},required:!1},placeholder:{defaultValue:{value:'"Поиск"',computed:!1},required:!1}},composes:["Omit"]};const ie={title:"UI Kit/Поля ввода/InputSearch",id:"ui-kit-inputsearch",component:u,tags:["autodocs"],args:{placeholder:"Поиск",label:"",disabled:!1,loading:!1},argTypes:{label:{control:"text",description:"Лейбл над полем. Обычно у поиска нет"},placeholder:{control:"text"},disabled:{control:"boolean"},loading:{control:"boolean",description:"Спиннер вместо лупы — идёт поиск"},allowClear:n,onSearch:n,value:n,defaultValue:n,onChange:n},decorators:[H(["Состояния","Поиск по списку"])],parameters:{docs:{description:{component:'Поле поиска. По мотивам praktis-ui-kit (Figma «Практис», Search `2249:979`), вид Setl — как у Input.\n\n**Отличие от praktis:** там лупа — отдельная кнопка, приклеенная справа. У Setl поле — «таблетка», и склейка разрезала бы её пополам, поэтому лупа стоит внутри поля слева. Поиск — Enter (`onSearch`) или на лету через `onChange`. Крестик очистки появляется в заполненном поле и тоже вызывает `onSearch("")`.\n\n**Figma Setl для поиска не снималась** — сверить.'}}}},i={},c={render:()=>e.jsxs(J,{children:[e.jsx(l,{title:"Default",children:e.jsx(u,{})}),e.jsx(l,{title:"Filled",children:e.jsx(u,{defaultValue:"BIM-моделирование"})}),e.jsx(l,{title:"Loading",children:e.jsx(u,{defaultValue:"BIM-моделирование",loading:!0})}),e.jsx(l,{title:"Disabled",children:e.jsx(u,{disabled:!0})})]})},Z=["BIM-моделирование: путь от чертежа до объекта","Хронология оформления документов","7 привычек, которые незаметно крадут время","Охрана труда на стройплощадке"],d={name:"Поиск по списку",parameters:{docs:{description:{story:"Фильтр на лету: печатай — список сужается, крестик сбрасывает."}}},render:()=>{const[s,p]=g.useState(""),o=Z.filter(t=>t.toLowerCase().includes(s.trim().toLowerCase()));return e.jsxs("div",{style:{width:320,display:"flex",flexDirection:"column",gap:12,fontFamily:"var(--font-family-expanded)"},children:[e.jsx(u,{placeholder:"Найти курс",value:s,onChange:t=>p(t.target.value)}),o.map(t=>e.jsx("div",{style:{fontSize:14,color:"var(--color-text-primary)"},children:t},t)),o.length===0&&e.jsx("div",{style:{fontSize:14,color:"var(--color-text-secondary)"},children:"Упс! Такого не нашлось"})]})}},ce=["Playground","Состояния","ПоискПоСписку"];var q,b,F;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:"{}",...(F=(b=i.parameters)==null?void 0:b.docs)==null?void 0:F.source}}};var B,T,D;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Grid>
      <Cell title="Default">
        <InputSearch />
      </Cell>
      <Cell title="Filled">
        <InputSearch defaultValue="BIM-моделирование" />
      </Cell>
      <Cell title="Loading">
        <InputSearch defaultValue="BIM-моделирование" loading />
      </Cell>
      <Cell title="Disabled">
        <InputSearch disabled />
      </Cell>
    </Grid>
}`,...(D=(T=c.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var _,V,R;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Поиск по списку",
  parameters: {
    docs: {
      description: {
        story: "Фильтр на лету: печатай — список сужается, крестик сбрасывает."
      }
    }
  },
  render: () => {
    const [query, setQuery] = useState("");
    const found = COURSES.filter(c => c.toLowerCase().includes(query.trim().toLowerCase()));
    return <div style={{
      width: 320,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      fontFamily: "var(--font-family-expanded)"
    }}>
        <InputSearch placeholder="Найти курс" value={query} onChange={e => setQuery(e.target.value)} />
        {found.map(c => <div key={c} style={{
        fontSize: 14,
        color: "var(--color-text-primary)"
      }}>
            {c}
          </div>)}
        {found.length === 0 && <div style={{
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>Упс! Такого не нашлось</div>}
      </div>;
  }
}`,...(R=(V=d.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};export{i as Playground,ce as __namedExportsOrder,ie as default,d as ПоискПоСписку,c as Состояния};
