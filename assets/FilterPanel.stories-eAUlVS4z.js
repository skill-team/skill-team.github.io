import{j as u,r as g}from"./iframe-Mg7mFSpI.js";import{F as S,a as h}from"./FilterTag-DtAYYGsd.js";import{I as c}from"./InputSearch-udteblSt.js";import{S as d}from"./Select-CY0GyHri.js";import{F as a}from"./FilterPanel-7M7r2mOS.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-BTlzdCo_.js";import"./index-CvEuNiz6.js";import"./ContextIsolator-CYyXykDJ.js";import"./context-CrBFPMJQ.js";import"./DropdownMenuItem-B5qQrD8P.js";import"./Radio-DOKhlPqx.js";import"./index-CvGWrHqK.js";import"./pickAttrs-DeHhXY-5.js";import"./useCSSVarCls-BXC_AxE0.js";import"./useForm-CKmLZKvb.js";import"./index-BV8XcOl4.js";import"./Select.module-L1SttIPx.js";import"./Spinner-ChNK4eS_.js";import"./InputChrome-C_nxiybR.js";import"./index-DN_fyvQD.js";import"./index-C7Vtoa2u.js";import"./CloseCircleFilled-BYoXnaYu.js";import"./EyeOutlined-DA4d19JW.js";import"./PurePanel-76V1kcAs.js";import"./index-B_x2UgRu.js";import"./useShowArrow-TmGXmNbl.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-DP-xZ7UB.js";import"./useLocale-giwBZfFx.js";import"./move-GoncIHrD.js";import"./useIcons-D04Wfx1k.js";import"./CheckOutlined-Dnbv5Gro.js";import"./CloseOutlined-rvSJE02o.js";import"./SymbolDelete-M0sKV3RB.js";import"./Surface-D1YfmFo3.js";const u4={title:"UI Kit/Фильтры/FilterPanel",id:"ui-kit-filterpanel",component:a,tags:["autodocs"],args:{search:null},argTypes:{search:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},controls:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{story:{height:"260px"},description:{component:"Блок фильтров реестра. Белая подложка `Surface`: первой строкой поиск (`InputSearch` small, тянется) и справа выпадающие списки (`Select` 42 — сортировка, формат), ниже через 24 — фильтры (`SegmentedControl`, облако `FilterTag`). Облако тегов — всегда внутри блока. Без фильтров (новости) — одна строка."}}},decorators:[o=>u.jsx("div",{style:{width:1e3,padding:24,background:"var(--color-background)"},children:u.jsx(o,{})})]},r={name:"С тегами",render:()=>{const[o,b]=g.useState("all");return u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]}),children:u.jsx(S,{label:"Категория",children:["all","Юридический департамент","Дирекция по качеству","Отдел СЭС и экологии"].map(e=>u.jsx(h,{label:e==="all"?"Все документы":e,selected:o===e,onClick:()=>b(e)},e))})})}},t={name:"Без фильтров (новости)",render:()=>u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]})})},e4=["СТегами","БезФильтров"];var l,n,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
