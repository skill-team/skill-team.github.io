import{r as l,j as r}from"./iframe-SVfPbzFv.js";import{S as u}from"./SortControl-BCCcqLKc.js";import{D as x}from"./device-BTEGRPTo.js";import"./preload-helper-C1FmrZbK.js";import"./Select-Y0U33vad.js";import"./SymbolDelete-CW4RdK7V.js";import"./InputChrome-CdzRP0ZD.js";import"./context-b9bVuTgo.js";import"./useTruncated-CTyZyZCg.js";import"./index-iXG8bMil.js";import"./ContextIsolator-DVAd3_hO.js";import"./Spinner-DZRnUrkQ.js";import"./DropdownMenuItem-cU0Pqmjq.js";import"./Radio-DEGjtoFY.js";import"./index-A7u8B3sC.js";import"./pickAttrs-YwQEXnsv.js";import"./useCSSVarCls-PcVuGvWx.js";import"./useForm-D6pkhWSI.js";import"./index-ClobrATS.js";import"./Select.module-L1SttIPx.js";import"./index-C4dNvXzg.js";import"./useShowArrow-B9H6ZVSj.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-CByeVqLZ.js";import"./useLocale-CWiQR805.js";import"./move-BhyhAd8i.js";import"./useIcons-C3fjAGC2.js";import"./CheckOutlined-CGEz-eis.js";import"./CloseCircleFilled-CMLlzd4s.js";import"./CloseOutlined-C_pA6AVG.js";import"./PurePanel-BLSEBBsY.js";import"./ChoiceSheet-MsUaVBwT.js";import"./BottomSheet-C2ellRtx.js";import"./index-D7cFwff5.js";import"./context-VzuhpM76.js";import"./extendsObject-78o_rR5W.js";import"./ThemeFilter.module-CL2OYDT9.js";const C=[{value:"new",label:"Сначала новые"},{value:"old",label:"Сначала старые"},{value:"title",label:"По названию"}],oe={title:"UI Kit/Фильтры/SortControl",id:"ui-kit-sortcontrol",component:u,tags:["autodocs"],args:{value:"new",options:C,onChange:()=>{},label:"Сортировка"},argTypes:{label:{control:"text",description:"Подпись для читалок и заголовок шторки"},stretch:{control:"boolean",description:"Телефон: кнопка с подписью на всё свободное место (когда рядом нет «Разделов»)"},value:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},options:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onChange:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Сортировка реестра. Компьютер и планшет — поле `Select`. Телефон — круглая кнопка со стрелками вверх-вниз (`Button medium`, как кнопка «Разделы» `ThemeFilter` и переключатель вида рядом), выбор — в шторке `ChoiceSheet`: поле занимало полстроки, а меняют сортировку на телефоне редко. Ставится в `controls` у `FilterPanel`. `stretch` — на телефоне кнопка с подписью («↕ Сначала новые») на всё свободное место: в реестрах без кнопки «Разделы» (новости, «Избранное»)."}}},decorators:[e=>r.jsx("div",{style:{padding:24,background:"var(--color-surface)",maxWidth:360},children:r.jsx(e,{})})]},a={render:e=>{const[t,o]=l.useState(e.value);return r.jsx(u,{...e,value:t,onChange:o})}},n={name:"Телефон — кнопкой",render:e=>{const[t,o]=l.useState(e.value);return r.jsx(x,{mode:"mob",children:r.jsx(u,{...e,value:t,onChange:o})})}},s={name:"Телефон — широкая, с подписью",render:e=>{const[t,o]=l.useState(e.value);return r.jsx(x,{mode:"mob",children:r.jsx("div",{style:{display:"flex"},children:r.jsx(u,{...e,stretch:!0,value:t,onChange:o})})})}},ae=["Playground","Телефон","ТелефонШирокая"];var i,m,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
