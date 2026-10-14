import{j as u,r as g}from"./iframe-BffffG_H.js";import{F as S,a as F}from"./FilterTag-BHSFdcI6.js";import{I as c}from"./InputSearch-CKd5j-L7.js";import{S as d}from"./Select-ChODxu4i.js";import{F as a}from"./FilterPanel-BnQwmreX.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-ZJU5hvpi.js";import"./index-CLeoysUr.js";import"./ContextIsolator-2vX43eVK.js";import"./context-foqqPHjY.js";import"./DropdownMenuItem-BPuB8aPn.js";import"./Radio-D3tDqghY.js";import"./index-C4D3yo95.js";import"./pickAttrs-uqbkjBnv.js";import"./useCSSVarCls-iy4-yhSQ.js";import"./useForm-Dpkajk5P.js";import"./Select.module-L1SttIPx.js";import"./Spinner-B3oL47C_.js";import"./InputChrome-evWZ6HGm.js";import"./index-D9fNtoOo.js";import"./index-CHrsy_07.js";import"./Input-HJa-aOxa.js";import"./CloseCircleFilled-D9cC6Rst.js";import"./SearchOutlined-BD-Qtr_S.js";import"./PurePanel-DqM-XvLO.js";import"./index-PGMmWecY.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-DGL6Usxd.js";import"./useLocale-DxXTUe-d.js";import"./move-COyY7QoI.js";import"./useIcons-B4xxohpT.js";import"./CloseOutlined-CzmQulot.js";import"./SymbolDelete-CXJja4Ym.js";import"./Surface-C7wg1raU.js";const Z={title:"UI Kit/Фильтры/FilterPanel",id:"ui-kit-filterpanel",component:a,tags:["autodocs"],args:{search:null},argTypes:{search:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},controls:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{story:{height:"260px"},description:{component:"Блок фильтров реестра — Figma Setl, реестры `2046:144250` / `2025:240792` / `2046:143749`. Белая подложка `Surface`: первой строкой поиск (`InputSearch` small, тянется) и справа выпадающие списки (`Select` 42 — сортировка, формат), ниже через 24 — фильтры (`SegmentedControl`, облако `FilterTag`). Облако тегов — всегда внутри блока. Без фильтров (новости) — одна строка."}}},decorators:[o=>u.jsx("div",{style:{width:1e3,padding:24,background:"var(--color-background)"},children:u.jsx(o,{})})]},r={name:"С тегами",render:()=>{const[o,b]=g.useState("all");return u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]}),children:u.jsx(S,{label:"Категория",children:["all","Юридический департамент","Дирекция по качеству","Отдел СЭС и экологии"].map(e=>u.jsx(F,{label:e==="all"?"Все документы":e,selected:o===e,onClick:()=>b(e)},e))})})}},t={name:"Без фильтров (новости)",render:()=>u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]})})},$=["СТегами","БезФильтров"];var l,n,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
