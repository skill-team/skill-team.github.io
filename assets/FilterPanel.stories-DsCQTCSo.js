import{j as u,r as g}from"./iframe-XQ_qeO9Z.js";import{F as S,a as F}from"./FilterTag-CMiJMWqK.js";import{I as c}from"./InputSearch-D0fb4OHK.js";import{S as d}from"./Select-CwOzQWui.js";import{F as a}from"./FilterPanel-B7lLAZvP.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-B6hy5Aa6.js";import"./index--oqSavUY.js";import"./ContextIsolator-DJke2nN-.js";import"./context-BSOHyiuZ.js";import"./DropdownMenuItem-DnSWM1VI.js";import"./Radio-Bqfo2fjV.js";import"./index-suzIAre7.js";import"./pickAttrs-BAVtGlv8.js";import"./useCSSVarCls-BI9DWBpX.js";import"./useForm-Bzd6vcEE.js";import"./Select.module-L1SttIPx.js";import"./Spinner-C5K3OJmv.js";import"./InputChrome-DVuHJmsy.js";import"./index-CSyY2RW3.js";import"./index-DslMSMmN.js";import"./Input-lJfcN2sb.js";import"./CloseCircleFilled-siTOpMub.js";import"./SearchOutlined-D4In1-vV.js";import"./PurePanel-DYJztHwa.js";import"./index-DBN2nAi4.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-4ha6QWHi.js";import"./useLocale-CPot5WWb.js";import"./move-CkF3eJFq.js";import"./useIcons-Cz6x1PYP.js";import"./CloseOutlined-D3VBGBq2.js";import"./SymbolDelete-B_ol_RKH.js";import"./Surface-T0I_cLNB.js";const Z={title:"UI Kit/Фильтры/FilterPanel",id:"ui-kit-filterpanel",component:a,tags:["autodocs"],args:{search:null},argTypes:{search:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},controls:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{story:{height:"260px"},description:{component:"Блок фильтров реестра — Figma Setl, реестры `2046:144250` / `2025:240792` / `2046:143749`. Белая подложка `Surface`: первой строкой поиск (`InputSearch` small, тянется) и справа выпадающие списки (`Select` 42 — сортировка, формат), ниже через 24 — фильтры (`SegmentedControl`, облако `FilterTag`). Облако тегов — всегда внутри блока. Без фильтров (новости) — одна строка."}}},decorators:[o=>u.jsx("div",{style:{width:1e3,padding:24,background:"var(--color-background)"},children:u.jsx(o,{})})]},r={name:"С тегами",render:()=>{const[o,b]=g.useState("all");return u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]}),children:u.jsx(S,{label:"Категория",children:["all","Юридический департамент","Дирекция по качеству","Отдел СЭС и экологии"].map(e=>u.jsx(F,{label:e==="all"?"Все документы":e,selected:o===e,onClick:()=>b(e)},e))})})}},t={name:"Без фильтров (новости)",render:()=>u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]})})},$=["СТегами","БезФильтров"];var l,n,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
