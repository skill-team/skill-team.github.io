import{j as u,r as g}from"./iframe-BJnn3bUc.js";import{F as S,a as h}from"./FilterTag-BvhpCF3I.js";import{I as c}from"./InputSearch-CqgkyOpH.js";import{S as d}from"./Select-DEr1sV6D.js";import{F as a}from"./FilterPanel-X1wQqz-F.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-Cn3csC5A.js";import"./index-Cb8wpR_L.js";import"./ContextIsolator-ChCoEtco.js";import"./context-Ck9A9kxN.js";import"./DropdownMenuItem-DoDuKSuQ.js";import"./Radio-BY_APane.js";import"./index-DifhXGP3.js";import"./pickAttrs-AhAfGPLL.js";import"./useCSSVarCls-DhrwCwrb.js";import"./useForm-CjiasipT.js";import"./index-CJAHZD8H.js";import"./Select.module-L1SttIPx.js";import"./Spinner-D7Kjzl7N.js";import"./InputChrome-BYw6lJNN.js";import"./index-CxK1I0_L.js";import"./index-CHg-hIfR.js";import"./CloseCircleFilled-BEespV2m.js";import"./EyeOutlined-CLhmasNI.js";import"./PurePanel-BqB-yt-T.js";import"./index-C3Z7_7VO.js";import"./useShowArrow-C9jgsvWu.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-Dg2ePXda.js";import"./useLocale-CrrE2IeT.js";import"./move-B1Ubx2v5.js";import"./useIcons-DregDiJg.js";import"./CheckOutlined-DDGtlZ6M.js";import"./CloseOutlined--EXLjAlw.js";import"./SymbolDelete-g3Ebr3Ap.js";import"./Surface-DiuU4L-3.js";const u4={title:"UI Kit/Фильтры/FilterPanel",id:"ui-kit-filterpanel",component:a,tags:["autodocs"],args:{search:null},argTypes:{search:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},controls:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{story:{height:"260px"},description:{component:"Блок фильтров реестра. Белая подложка `Surface`: первой строкой поиск (`InputSearch` small, тянется) и справа выпадающие списки (`Select` 42 — сортировка, формат), ниже через 24 — фильтры (`SegmentedControl`, облако `FilterTag`). Облако тегов — всегда внутри блока. Без фильтров (новости) — одна строка."}}},decorators:[o=>u.jsx("div",{style:{width:1e3,padding:24,background:"var(--color-background)"},children:u.jsx(o,{})})]},r={name:"С тегами",render:()=>{const[o,b]=g.useState("all");return u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]}),children:u.jsx(S,{label:"Категория",children:["all","Юридический департамент","Дирекция по качеству","Отдел СЭС и экологии"].map(e=>u.jsx(h,{label:e==="all"?"Все документы":e,selected:o===e,onClick:()=>b(e)},e))})})}},t={name:"Без фильтров (новости)",render:()=>u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]})})},e4=["СТегами","БезФильтров"];var l,n,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
