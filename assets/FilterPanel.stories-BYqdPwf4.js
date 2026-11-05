import{j as u,r as g}from"./iframe-SVfPbzFv.js";import{F as S,a as h}from"./FilterTag-Ds2IpdyH.js";import{I as c}from"./InputSearch-BOo08HUT.js";import{S as d}from"./Select-Y0U33vad.js";import{F as a}from"./FilterPanel-lhgSNPM5.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-CTyZyZCg.js";import"./index-iXG8bMil.js";import"./ContextIsolator-DVAd3_hO.js";import"./context-b9bVuTgo.js";import"./DropdownMenuItem-cU0Pqmjq.js";import"./Radio-DEGjtoFY.js";import"./index-A7u8B3sC.js";import"./pickAttrs-YwQEXnsv.js";import"./useCSSVarCls-PcVuGvWx.js";import"./useForm-D6pkhWSI.js";import"./index-ClobrATS.js";import"./Select.module-L1SttIPx.js";import"./Spinner-DZRnUrkQ.js";import"./InputChrome-CdzRP0ZD.js";import"./index-BrCXnK5w.js";import"./index-wQriZ3kr.js";import"./CloseCircleFilled-CMLlzd4s.js";import"./EyeOutlined-CPCLj8wR.js";import"./PurePanel-BLSEBBsY.js";import"./index-C4dNvXzg.js";import"./useShowArrow-B9H6ZVSj.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-CByeVqLZ.js";import"./useLocale-CWiQR805.js";import"./move-BhyhAd8i.js";import"./useIcons-C3fjAGC2.js";import"./CheckOutlined-CGEz-eis.js";import"./CloseOutlined-C_pA6AVG.js";import"./SymbolDelete-CW4RdK7V.js";import"./Surface-CrlrQ0gF.js";const u4={title:"UI Kit/Фильтры/FilterPanel",id:"ui-kit-filterpanel",component:a,tags:["autodocs"],args:{search:null},argTypes:{search:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},controls:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{story:{height:"260px"},description:{component:"Блок фильтров реестра. Белая подложка `Surface`: первой строкой поиск (`InputSearch` small, тянется) и справа выпадающие списки (`Select` 42 — сортировка, формат), ниже через 24 — фильтры (`SegmentedControl`, облако `FilterTag`). Облако тегов — всегда внутри блока. Без фильтров (новости) — одна строка."}}},decorators:[o=>u.jsx("div",{style:{width:1e3,padding:24,background:"var(--color-background)"},children:u.jsx(o,{})})]},r={name:"С тегами",render:()=>{const[o,b]=g.useState("all");return u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]}),children:u.jsx(S,{label:"Категория",children:["all","Юридический департамент","Дирекция по качеству","Отдел СЭС и экологии"].map(e=>u.jsx(h,{label:e==="all"?"Все документы":e,selected:o===e,onClick:()=>b(e)},e))})})}},t={name:"Без фильтров (новости)",render:()=>u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]})})},e4=["СТегами","БезФильтров"];var l,n,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
