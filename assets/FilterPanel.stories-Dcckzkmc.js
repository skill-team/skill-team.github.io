import{j as u,r as g}from"./iframe-BFd96KHm.js";import{F as S,a as h}from"./FilterTag-Cq1wr8Us.js";import{I as c}from"./InputSearch-Dex2gdBJ.js";import{S as d}from"./Select-B3rQDd8h.js";import{F as a}from"./FilterPanel-Vis3DfYk.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-BqF7u7ib.js";import"./index-D72j1uDz.js";import"./ContextIsolator-CfQAkasn.js";import"./context-BWLmWlnn.js";import"./DropdownMenuItem-4qxiXb0K.js";import"./Radio-B292X7lN.js";import"./index-CNeBUHtQ.js";import"./pickAttrs-Dl3VOZfP.js";import"./useCSSVarCls-Fz_A80LR.js";import"./useForm-Cyvwz6MB.js";import"./index-Did3NbNW.js";import"./Select.module-L1SttIPx.js";import"./Spinner-EIFFJyoN.js";import"./InputChrome-BSiyVpEh.js";import"./index-BlRMKTQl.js";import"./index-FRJeKTdu.js";import"./CloseCircleFilled-BoySjRRf.js";import"./EyeOutlined-BhJKcxe1.js";import"./PurePanel-DltdLcz8.js";import"./index-UkvFG8ys.js";import"./useShowArrow-B0nUKOk6.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-CrMB_h6p.js";import"./useLocale-C3EajwIt.js";import"./move-CITNDSak.js";import"./useIcons-DhhFghCm.js";import"./CheckOutlined-FS8xlgMs.js";import"./CloseOutlined-CeynsCNI.js";import"./SymbolDelete-Cbodh0dm.js";import"./Surface-C74ZpfmP.js";const u4={title:"UI Kit/Фильтры/FilterPanel",id:"ui-kit-filterpanel",component:a,tags:["autodocs"],args:{search:null},argTypes:{search:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},controls:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{story:{height:"260px"},description:{component:"Блок фильтров реестра. Белая подложка `Surface`: первой строкой поиск (`InputSearch` small, тянется) и справа выпадающие списки (`Select` 42 — сортировка, формат), ниже через 24 — фильтры (`SegmentedControl`, облако `FilterTag`). Облако тегов — всегда внутри блока. Без фильтров (новости) — одна строка."}}},decorators:[o=>u.jsx("div",{style:{width:1e3,padding:24,background:"var(--color-background)"},children:u.jsx(o,{})})]},r={name:"С тегами",render:()=>{const[o,b]=g.useState("all");return u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]}),children:u.jsx(S,{label:"Категория",children:["all","Юридический департамент","Дирекция по качеству","Отдел СЭС и экологии"].map(e=>u.jsx(h,{label:e==="all"?"Все документы":e,selected:o===e,onClick:()=>b(e)},e))})})}},t={name:"Без фильтров (новости)",render:()=>u.jsx(a,{search:u.jsx(c,{mode:"combined"}),controls:u.jsx(d,{defaultValue:"new",options:[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"}]})})},e4=["СТегами","БезФильтров"];var l,n,s;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
