import{j as u,r as g}from"./iframe-xHeXyRUt.js";import{F as S,a as h}from"./FilterTag-vzEltKFk.js";import{I as c}from"./InputSearch-DOIQCbpg.js";import{S as d}from"./Select-B3U-pczH.js";import{F as a}from"./FilterPanel-BXoSkRvK.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-DZT6EyQu.js";import"./index-DAOdAdyQ.js";import"./ContextIsolator-BRwUpuIq.js";import"./context-YSLqM9pP.js";import"./DropdownMenuItem-DIPkA542.js";import"./Radio-RKMtjUxZ.js";import"./index-DFWcBYSm.js";import"./pickAttrs-BwR6N1Ic.js";import"./useCSSVarCls-2qV6Kap2.js";import"./useForm-DcteB1QV.js";import"./index-DLAirbDr.js";import"./Select.module-L1SttIPx.js";import"./Spinner-BjmqB2w1.js";import"./InputChrome-RLws-aIV.js";import"./index-BSmWugg0.js";import"./index-BZepmLjH.js";import"./CloseCircleFilled-U51GO4x2.js";import"./EyeOutlined-D6oaBCRI.js";import"./PurePanel-DskKyjH6.js";import"./index-PlNzUQFN.js";import"./useShowArrow-BG5xSIIH.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-DDDIwkRC.js";import"./useLocale-C5RInZ-8.js";import"./move-DrY42EjS.js";import"./useIcons-BJDXcmbA.js";import"./CheckOutlined-1AcpI7FG.js";import"./CloseOutlined-Ba06t28w.js";import"./SymbolDelete-CQSneJnr.js";import"./Surface-C1rhrTeK.js";const u4={title:"UI Kit/Фильтры/FilterPanel",id:"ui-kit-filterpanel",component:a,tags:["autodocs"],args:{search:null},argTypes:{search:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},controls:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{story:{height:"260px"},description:{component:"Блок фильтров реестра. Белая подложка `Surface`: первой строкой поиск (`InputSearch` small, тянется) и справа выпадающие списки (`Select` 42 — сортировка, формат), ниже через 24 — фильтры (`SegmentedControl`, облако `FilterTag`). Облако тегов — всегда внутри блока. Без фильтров (новости) — одна строка."}}},decorators:[o=>u.jsx("div",{style:{width:1e3,padding:24,background:"var(--color-background)"},children:u.jsx(o,{})})]},r={name:"С тегами",render:()=>{const[o,b]=g.useState("all");return u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]}),children:u.jsx(S,{label:"Категория",children:["all","Юридический департамент","Дирекция по качеству","Отдел СЭС и экологии"].map(e=>u.jsx(h,{label:e==="all"?"Все документы":e,selected:o===e,onClick:()=>b(e)},e))})})}},t={name:"Без фильтров (новости)",render:()=>u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]})})},e4=["СТегами","БезФильтров"];var l,n,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "С тегами",
  render: () => {
    const [sel, setSel] = useState("all");
    return <FilterPanel search={<InputSearch mode="combined" />} controls={<Select defaultValue="new" options={[{
      value: "new",
      label: "Сначала новые"
    }, {
      value: "old",
      label: "Сначала старые"
    }]} />}>
        <FilterTagGroup label="Категория">
          {["all", "Юридический департамент", "Дирекция по качеству", "Отдел СЭС и экологии"].map(t => <FilterTag key={t} label={t === "all" ? "Все документы" : t} selected={sel === t} onClick={() => setSel(t)} />)}
        </FilterTagGroup>
      </FilterPanel>;
  }
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,m,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Без фильтров (новости)",
  render: () => <FilterPanel search={<InputSearch mode="combined" />} controls={<Select defaultValue="new" options={[{
    value: "new",
    label: "Сначала новые"
  }, {
    value: "old",
    label: "Сначала старые"
  }]} />} />
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{e4 as __namedExportsOrder,u4 as default,t as БезФильтров,r as СТегами};
