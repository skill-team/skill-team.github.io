import{j as u,r as g}from"./iframe-BjfIqAJn.js";import{F as S,a as h}from"./FilterTag-CZIVPDAq.js";import{I as c}from"./InputSearch-XNBweQHR.js";import{S as d}from"./Select-BZuXxXXH.js";import{F as a}from"./FilterPanel-xMjJCv2e.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-BPFduf71.js";import"./index-BOybzS2M.js";import"./ContextIsolator-x4ptwmC0.js";import"./context-jz5FLBdL.js";import"./DropdownMenuItem-B8feyDtu.js";import"./Radio-CAEyPEE4.js";import"./index-DmJ6AEjJ.js";import"./pickAttrs-Drm6BpRz.js";import"./useCSSVarCls-B4C9ExDV.js";import"./useForm-CINDJAyM.js";import"./index-DGkbBTgd.js";import"./Select.module-L1SttIPx.js";import"./Spinner-Ps7RK-3F.js";import"./InputChrome-uquXhHtm.js";import"./index-Dm_X03oP.js";import"./index-CLYesAhK.js";import"./CloseCircleFilled-BdFv4Gar.js";import"./EyeOutlined-BEsqd3X3.js";import"./PurePanel-q7RNuK5z.js";import"./index-DZ2o_k1D.js";import"./useShowArrow-B4FkGRYu.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-CMNFnVzm.js";import"./useLocale-D87yzSkG.js";import"./move-B9aT31CZ.js";import"./useIcons-D0pZQ0Hx.js";import"./CheckOutlined-Rycl2aN6.js";import"./CloseOutlined-CZt5D93t.js";import"./SymbolDelete-CrriljYU.js";import"./Surface-WnPlUTOE.js";const u4={title:"UI Kit/Фильтры/FilterPanel",id:"ui-kit-filterpanel",component:a,tags:["autodocs"],args:{search:null},argTypes:{search:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},controls:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{story:{height:"260px"},description:{component:"Блок фильтров реестра. Белая подложка `Surface`: первой строкой поиск (`InputSearch` small, тянется) и справа выпадающие списки (`Select` 42 — сортировка, формат), ниже через 24 — фильтры (`SegmentedControl`, облако `FilterTag`). Облако тегов — всегда внутри блока. Без фильтров (новости) — одна строка."}}},decorators:[o=>u.jsx("div",{style:{width:1e3,padding:24,background:"var(--color-background)"},children:u.jsx(o,{})})]},r={name:"С тегами",render:()=>{const[o,b]=g.useState("all");return u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]}),children:u.jsx(S,{label:"Категория",children:["all","Юридический департамент","Дирекция по качеству","Отдел СЭС и экологии"].map(e=>u.jsx(h,{label:e==="all"?"Все документы":e,selected:o===e,onClick:()=>b(e)},e))})})}},t={name:"Без фильтров (новости)",render:()=>u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]})})},e4=["СТегами","БезФильтров"];var l,n,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
