import{j as u,r as g}from"./iframe-T1G-SIdY.js";import{F as S,a as F}from"./FilterTag-c0-YYSyz.js";import{I as p}from"./InputSearch-Cu9LlT-G.js";import{S as d}from"./Select-DK5-RWu6.js";import{F as a}from"./FilterPanel-vleH7qmR.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-wUfbEmiw.js";import"./index-CCOMMNKo.js";import"./context-BT_JPeuY.js";import"./DropdownMenuItem-DOpOoeyh.js";import"./Radio-B887bmkp.js";import"./index-BHPLlts8.js";import"./pickAttrs-prGlZbsm.js";import"./useCSSVarCls-h8B24G72.js";import"./useForm-kud5EZMb.js";import"./Select.module-L1SttIPx.js";import"./Spinner-CnJbqGOK.js";import"./InputChrome-CODlI84f.js";import"./index-BTCs0-Pv.js";import"./index-bDfGxc6v.js";import"./Input-DMkgWIZL.js";import"./CloseCircleFilled-lErke8Fw.js";import"./SearchOutlined-BlwStQf3.js";import"./PurePanel-CBq0Z3bd.js";import"./index-CLRR8GDC.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-DRYAuKn9.js";import"./useLocale-w2fOQfta.js";import"./move-CpVcuHve.js";import"./useIcons-t3jf6XO0.js";import"./CloseOutlined-Du0dHgkK.js";import"./SymbolDelete-BWfO80vL.js";import"./Surface-D4SMnU_6.js";const Y={title:"UI Kit/Фильтры/FilterPanel",id:"ui-kit-filterpanel",component:a,tags:["autodocs"],args:{search:null},argTypes:{search:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},controls:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{story:{height:"260px"},description:{component:"Блок фильтров реестра — Figma Setl, реестры `2046:144250` / `2025:240792` / `2046:143749`. Белая подложка `Surface`: первой строкой поиск (`InputSearch` small, тянется) и справа выпадающие списки (`Select` 42 — сортировка, формат), ниже через 24 — фильтры (`SegmentedControl`, облако `FilterTag`). Облако тегов — всегда внутри блока. Без фильтров (новости) — одна строка."}}},decorators:[o=>u.jsx("div",{style:{width:1e3,padding:24,background:"var(--color-background)"},children:u.jsx(o,{})})]},r={name:"С тегами",render:()=>{const[o,b]=g.useState("all");return u.jsx(a,{search:u.jsx(p,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]}),children:u.jsx(S,{label:"Категория",children:["all","Юридический департамент","Дирекция по качеству","Отдел СЭС и экологии"].map(e=>u.jsx(F,{label:e==="all"?"Все документы":e,selected:o===e,onClick:()=>b(e)},e))})})}},t={name:"Без фильтров (новости)",render:()=>u.jsx(a,{search:u.jsx(p,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]})})},Z=["СТегами","БезФильтров"];var l,n,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,m,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Без фильтров (новости)",
  render: () => <FilterPanel search={<InputSearch mode="combined" />} controls={<Select defaultValue="new" options={[{
    value: "new",
    label: "Сначала новые"
  }, {
    value: "old",
    label: "Сначала старые"
  }]} />} />
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};export{Z as __namedExportsOrder,Y as default,t as БезФильтров,r as СТегами};
