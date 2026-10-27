import{j as u,r as g}from"./iframe-DF43zbcH.js";import{F as S,a as h}from"./FilterTag-CQVMMSlC.js";import{I as c}from"./InputSearch-wlOJ03CK.js";import{S as d}from"./Select-fM9GVskU.js";import{F as a}from"./FilterPanel-DcqdSl0v.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-Bc6x0L2e.js";import"./index-Dc-2W6eP.js";import"./ContextIsolator-CGgXIIAn.js";import"./context-Bvlc22x8.js";import"./DropdownMenuItem-DCYzNhbT.js";import"./Radio-BRGAXydT.js";import"./index-ecjyLzFu.js";import"./pickAttrs-D5cNfL7C.js";import"./useCSSVarCls-BWHCu96H.js";import"./useForm-oNyCIUHi.js";import"./index-BT35_YIn.js";import"./Select.module-L1SttIPx.js";import"./Spinner-CIF-PKWR.js";import"./InputChrome-hwD1g7Gx.js";import"./index-rnexqFIK.js";import"./index-BPkKOLwD.js";import"./CloseCircleFilled-CVw6SRNq.js";import"./EyeOutlined-BIQs8kr6.js";import"./PurePanel-DxMQ-kIt.js";import"./index-CGqq694D.js";import"./useShowArrow-U_WplXvX.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-Cc1AujC4.js";import"./useLocale-DdUAtv3I.js";import"./move-vXhFOdPM.js";import"./useIcons-B8M-dreV.js";import"./CheckOutlined-D58qaGdD.js";import"./CloseOutlined-ep7nLCB3.js";import"./SymbolDelete-Vp4jvHeB.js";import"./Surface-BM1NSgrj.js";const u4={title:"UI Kit/Фильтры/FilterPanel",id:"ui-kit-filterpanel",component:a,tags:["autodocs"],args:{search:null},argTypes:{search:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},controls:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{story:{height:"260px"},description:{component:"Блок фильтров реестра. Белая подложка `Surface`: первой строкой поиск (`InputSearch` small, тянется) и справа выпадающие списки (`Select` 42 — сортировка, формат), ниже через 24 — фильтры (`SegmentedControl`, облако `FilterTag`). Облако тегов — всегда внутри блока. Без фильтров (новости) — одна строка."}}},decorators:[o=>u.jsx("div",{style:{width:1e3,padding:24,background:"var(--color-background)"},children:u.jsx(o,{})})]},r={name:"С тегами",render:()=>{const[o,b]=g.useState("all");return u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]}),children:u.jsx(S,{label:"Категория",children:["all","Юридический департамент","Дирекция по качеству","Отдел СЭС и экологии"].map(e=>u.jsx(h,{label:e==="all"?"Все документы":e,selected:o===e,onClick:()=>b(e)},e))})})}},t={name:"Без фильтров (новости)",render:()=>u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]})})},e4=["СТегами","БезФильтров"];var l,n,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
