import{j as u,r as g}from"./iframe-BjwqOSi3.js";import{F as S,a as h}from"./FilterTag-Dwna_cv5.js";import{I as c}from"./InputSearch-CvxzHjE7.js";import{S as d}from"./Select-LCtcaUws.js";import{F as a}from"./FilterPanel-C6v2GjPR.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-1RfrOo5E.js";import"./index-ZErZfhiV.js";import"./ContextIsolator-t4IZH0Aw.js";import"./context-CGGttlbE.js";import"./DropdownMenuItem-CVsz5xsO.js";import"./Radio-CP0jTXNY.js";import"./index-J-DsTmO9.js";import"./pickAttrs-CMH0USIN.js";import"./useCSSVarCls-B_1IN5HN.js";import"./useForm-BGDuyS49.js";import"./index-CIlwjofH.js";import"./Select.module-L1SttIPx.js";import"./Spinner-CMbWbs9A.js";import"./InputChrome-B9O9xXvL.js";import"./index-BSt6hwuB.js";import"./index-CJ9rnbsp.js";import"./Input-BBk_h3IU.js";import"./CloseCircleFilled-Dbe_KSGE.js";import"./SearchOutlined-ZGmUzZWc.js";import"./PurePanel-CWXTrHE_.js";import"./index-31l0o6XA.js";import"./useShowArrow-CDmX56a2.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-DNDcMgHM.js";import"./useLocale-CmSPVnY6.js";import"./move-DIHvAmS-.js";import"./useIcons-ClzfUszN.js";import"./CloseOutlined-D46Xd8n1.js";import"./SymbolDelete-DJgL0EZj.js";import"./Surface-vBQ7GXA7.js";const u4={title:"UI Kit/Фильтры/FilterPanel",id:"ui-kit-filterpanel",component:a,tags:["autodocs"],args:{search:null},argTypes:{search:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},controls:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{story:{height:"260px"},description:{component:"Блок фильтров реестра. Белая подложка `Surface`: первой строкой поиск (`InputSearch` small, тянется) и справа выпадающие списки (`Select` 42 — сортировка, формат), ниже через 24 — фильтры (`SegmentedControl`, облако `FilterTag`). Облако тегов — всегда внутри блока. Без фильтров (новости) — одна строка."}}},decorators:[o=>u.jsx("div",{style:{width:1e3,padding:24,background:"var(--color-background)"},children:u.jsx(o,{})})]},r={name:"С тегами",render:()=>{const[o,b]=g.useState("all");return u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]}),children:u.jsx(S,{label:"Категория",children:["all","Юридический департамент","Дирекция по качеству","Отдел СЭС и экологии"].map(e=>u.jsx(h,{label:e==="all"?"Все документы":e,selected:o===e,onClick:()=>b(e)},e))})})}},t={name:"Без фильтров (новости)",render:()=>u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]})})},e4=["СТегами","БезФильтров"];var l,n,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
