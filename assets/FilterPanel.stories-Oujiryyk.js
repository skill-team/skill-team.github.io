import{j as u,r as g}from"./iframe-CFCi-G_z.js";import{F as S,a as F}from"./FilterTag-DkjDpgFS.js";import{I as c}from"./InputSearch-BQbs7Z6n.js";import{S as d}from"./Select-BB40DLFm.js";import{F as a}from"./FilterPanel-BJ1qac6M.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-D3AOnDGh.js";import"./index-zH042xrC.js";import"./ContextIsolator-DRazcLis.js";import"./context-x6QakU1z.js";import"./DropdownMenuItem-BxcJQLvd.js";import"./Radio-AOE7hEzH.js";import"./index-DN7Rm8M0.js";import"./pickAttrs-DZ5o09-N.js";import"./useCSSVarCls-HUHG0qLL.js";import"./useForm-CmqEyhjQ.js";import"./Select.module-L1SttIPx.js";import"./Spinner-D-B4sjdZ.js";import"./InputChrome-IlNbsg9R.js";import"./index-CiFNdKY2.js";import"./index-C9yZ3XYq.js";import"./Input-DISfCIgb.js";import"./CloseCircleFilled-KHgVxFq7.js";import"./SearchOutlined-BHrSP-p1.js";import"./PurePanel-CQpcQ7LM.js";import"./index-Dyn3QTCL.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-CikPKJr-.js";import"./useLocale-Cay6t4H9.js";import"./move-CjDQpLq-.js";import"./useIcons-DbFr6f9F.js";import"./CloseOutlined-CCxLauq5.js";import"./SymbolDelete-D5DlYVso.js";import"./Surface-Dz0reFu7.js";const Z={title:"UI Kit/Фильтры/FilterPanel",id:"ui-kit-filterpanel",component:a,tags:["autodocs"],args:{search:null},argTypes:{search:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},controls:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{story:{height:"260px"},description:{component:"Блок фильтров реестра — Figma Setl, реестры `2046:144250` / `2025:240792` / `2046:143749`. Белая подложка `Surface`: первой строкой поиск (`InputSearch` small, тянется) и справа выпадающие списки (`Select` 42 — сортировка, формат), ниже через 24 — фильтры (`SegmentedControl`, облако `FilterTag`). Облако тегов — всегда внутри блока. Без фильтров (новости) — одна строка."}}},decorators:[o=>u.jsx("div",{style:{width:1e3,padding:24,background:"var(--color-background)"},children:u.jsx(o,{})})]},r={name:"С тегами",render:()=>{const[o,b]=g.useState("all");return u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]}),children:u.jsx(S,{label:"Категория",children:["all","Юридический департамент","Дирекция по качеству","Отдел СЭС и экологии"].map(e=>u.jsx(F,{label:e==="all"?"Все документы":e,selected:o===e,onClick:()=>b(e)},e))})})}},t={name:"Без фильтров (новости)",render:()=>u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]})})},$=["СТегами","БезФильтров"];var l,n,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{$ as __namedExportsOrder,Z as default,t as БезФильтров,r as СТегами};
