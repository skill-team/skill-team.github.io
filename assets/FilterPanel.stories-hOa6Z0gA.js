import{j as u,r as g}from"./iframe-wfJ_y6tk.js";import{F as S,a as h}from"./FilterTag-DWKITn2I.js";import{I as c}from"./InputSearch-yPbSvPJ9.js";import{S as d}from"./Select-CVTNCl6U.js";import{F as a}from"./FilterPanel-BIOPGOMs.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-BK8cY36k.js";import"./index-DK8SjL2j.js";import"./ContextIsolator-8G1DI5TY.js";import"./context-BtIUxdFu.js";import"./DropdownMenuItem-M8EkXKQ7.js";import"./Radio-D556sma4.js";import"./index-sYrw6d-4.js";import"./pickAttrs-DzhteYie.js";import"./useCSSVarCls-Dp79i034.js";import"./useForm-BzeJ6ZcR.js";import"./index-CA55xMRb.js";import"./Select.module-L1SttIPx.js";import"./Spinner-0rG8RZBH.js";import"./InputChrome-DH630Ad-.js";import"./index-0GLlaU4q.js";import"./index-BpequZ9y.js";import"./CloseCircleFilled-B-2k4t7L.js";import"./EyeOutlined-doHsXqE_.js";import"./PurePanel-B9LUDZ6O.js";import"./index-BJS0tE0x.js";import"./useShowArrow-eXjq3W-v.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-Cofq_D13.js";import"./useLocale-B0NX3RbO.js";import"./move-CHiurvd8.js";import"./useIcons-CzSgdsuc.js";import"./CheckOutlined-Cvq9bh_0.js";import"./CloseOutlined-BMu17Hic.js";import"./SymbolDelete-CJquarAM.js";import"./Surface-BaIcklCz.js";const u4={title:"UI Kit/Фильтры/FilterPanel",id:"ui-kit-filterpanel",component:a,tags:["autodocs"],args:{search:null},argTypes:{search:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},controls:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{story:{height:"260px"},description:{component:"Блок фильтров реестра. Белая подложка `Surface`: первой строкой поиск (`InputSearch` small, тянется) и справа выпадающие списки (`Select` 42 — сортировка, формат), ниже через 24 — фильтры (`SegmentedControl`, облако `FilterTag`). Облако тегов — всегда внутри блока. Без фильтров (новости) — одна строка."}}},decorators:[o=>u.jsx("div",{style:{width:1e3,padding:24,background:"var(--color-background)"},children:u.jsx(o,{})})]},r={name:"С тегами",render:()=>{const[o,b]=g.useState("all");return u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]}),children:u.jsx(S,{label:"Категория",children:["all","Юридический департамент","Дирекция по качеству","Отдел СЭС и экологии"].map(e=>u.jsx(h,{label:e==="all"?"Все документы":e,selected:o===e,onClick:()=>b(e)},e))})})}},t={name:"Без фильтров (новости)",render:()=>u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]})})},e4=["СТегами","БезФильтров"];var l,n,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
