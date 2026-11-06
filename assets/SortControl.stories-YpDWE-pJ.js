import{r as l,j as r}from"./iframe-Mg7mFSpI.js";import{S as u}from"./SortControl-W6Hx6751.js";import{D as x}from"./device-BhSkALWT.js";import"./preload-helper-C1FmrZbK.js";import"./Select-CY0GyHri.js";import"./SymbolDelete-M0sKV3RB.js";import"./InputChrome-C_nxiybR.js";import"./context-CrBFPMJQ.js";import"./useTruncated-BTlzdCo_.js";import"./index-CvEuNiz6.js";import"./ContextIsolator-CYyXykDJ.js";import"./Spinner-ChNK4eS_.js";import"./DropdownMenuItem-B5qQrD8P.js";import"./Radio-DOKhlPqx.js";import"./index-CvGWrHqK.js";import"./pickAttrs-DeHhXY-5.js";import"./useCSSVarCls-BXC_AxE0.js";import"./useForm-CKmLZKvb.js";import"./index-BV8XcOl4.js";import"./Select.module-L1SttIPx.js";import"./index-B_x2UgRu.js";import"./useShowArrow-TmGXmNbl.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-DP-xZ7UB.js";import"./useLocale-giwBZfFx.js";import"./move-GoncIHrD.js";import"./useIcons-D04Wfx1k.js";import"./CheckOutlined-Dnbv5Gro.js";import"./CloseCircleFilled-BYoXnaYu.js";import"./CloseOutlined-rvSJE02o.js";import"./PurePanel-76V1kcAs.js";import"./ChoiceSheet-CXcV1_hs.js";import"./BottomSheet-gaH7tpWk.js";import"./index-Dlm8eoKV.js";import"./context-BsbvlsJW.js";import"./extendsObject-78o_rR5W.js";import"./ThemeFilter.module-CL2OYDT9.js";const C=[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"},{value:"title",label:"По названию"}],oe={title:"UI Kit/Фильтры/SortControl",id:"ui-kit-sortcontrol",component:u,tags:["autodocs"],args:{value:"new",options:C,onChange:()=>{},label:"Сортировка"},argTypes:{label:{control:"text",description:"Подпись для читалок и заголовок шторки"},stretch:{control:"boolean",description:"Телефон: кнопка с подписью на всё свободное место (когда рядом нет «Разделов»)"},value:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},options:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onChange:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Сортировка реестра. Компьютер и планшет — поле `Select`. Телефон — круглая кнопка со стрелками вверх-вниз (`Button medium`, как кнопка «Разделы» `ThemeFilter` и переключатель вида рядом), выбор — в шторке `ChoiceSheet`: поле занимало полстроки, а меняют сортировку на телефоне редко. Ставится в `controls` у `FilterPanel`. `stretch` — на телефоне кнопка с подписью («↕ Сначала новые») на всё свободное место: в реестрах без кнопки «Разделы» (новости, «Избранное»)."}}},decorators:[e=>r.jsx("div",{style:{padding:24,background:"var(--color-surface)",maxWidth:360},children:r.jsx(e,{})})]},a={render:e=>{const[t,o]=l.useState(e.value);return r.jsx(u,{...e,value:t,onChange:o})}},n={name:"Телефон — кнопкой",render:e=>{const[t,o]=l.useState(e.value);return r.jsx(x,{mode:"mob",children:r.jsx(u,{...e,value:t,onChange:o})})}},s={name:"Телефон — широкая, с подписью",render:e=>{const[t,o]=l.useState(e.value);return r.jsx(x,{mode:"mob",children:r.jsx("div",{style:{display:"flex"},children:r.jsx(u,{...e,stretch:!0,value:t,onChange:o})})})}},ae=["Playground","Телефон","ТелефонШирокая"];var i,m,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value);
    return <SortControl {...args} value={value} onChange={setValue} />;
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,d,v;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Телефон — кнопкой",
  render: args => {
    const [value, setValue] = useState(args.value);
    return <DeviceProvider mode="mob">
        <SortControl {...args} value={value} onChange={setValue} />
      </DeviceProvider>;
  }
}`,...(v=(d=n.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var g,h,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: "Телефон — широкая, с подписью",
  render: args => {
    const [value, setValue] = useState(args.value);
    return <DeviceProvider mode="mob">
        <div style={{
        display: "flex"
      }}>
          <SortControl {...args} stretch value={value} onChange={setValue} />
        </div>
      </DeviceProvider>;
  }
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};export{a as Playground,ae as __namedExportsOrder,oe as default,n as Телефон,s as ТелефонШирокая};
