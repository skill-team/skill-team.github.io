import{r as a,j as e,B as c}from"./iframe-XQ_qeO9Z.js";import{B as m}from"./BottomSheet-BtxdGEWj.js";import{C as d}from"./ChoiceSheet-BGTxiISo.js";import{T as f}from"./coursesData-DtpNmbio.js";import"./preload-helper-C1FmrZbK.js";import"./ContextIsolator-DJke2nN-.js";import"./context-BSOHyiuZ.js";import"./KeyCode-lh1qUinJ.js";import"./pickAttrs-BAVtGlv8.js";import"./context-Ch1uXsqs.js";import"./CloseOutlined-D3VBGBq2.js";import"./extendsObject-78o_rR5W.js";import"./useLocale-CPot5WWb.js";import"./DropdownMenuItem-DnSWM1VI.js";import"./Radio-Bqfo2fjV.js";import"./index-suzIAre7.js";import"./useCSSVarCls-BI9DWBpX.js";import"./useForm-Bzd6vcEE.js";import"./course-3-gX4Ok3xk.js";import"./course-4-bsGBpGWB.js";const F={title:"UI Kit/Навигация/BottomSheet",id:"ui-kit-bottomsheet",component:m,tags:["autodocs"],args:{open:!1,onClose:()=>{},title:"Темы",children:null},argTypes:{title:{control:"text"},open:{control:!1},onClose:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Шторка снизу — для телефона. Белая, скругление сверху 30, «ручка» и заголовок; крестика нет — закрыть тапом по затемнению, стянуть вниз (больше 96 px) или Esc. На ней сделаны мобильное меню (`MobileMenu`) и выбор одного варианта `ChoiceSheet`.\n\n**ChoiceSheet** — список вариантов (пункты `DropdownMenuItem`: выбранный красным с галочкой, длинные названия — целиком, в несколько строк). Нажатие — выбрать и закрыть; «Сбросить» (красная ссылка в заголовке; ничего не выбрано — серая, неактивна) — сбросить и закрыть. Пример — темы в каталоге курсов на телефоне: в строке тегов только «Все · Я изучаю · Избранное», темы — по круглой кнопке-фильтру (выбрана тема — кнопка красная)."}}}},t={name:"Выбор темы (ChoiceSheet)",render:()=>{const[p,n]=a.useState(!1),[o,r]=a.useState();return e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",fontFamily:"var(--font-family-body)"},children:[e.jsx(c,{variant:"secondary",onClick:()=>n(!0),children:"Открыть темы"}),e.jsx("span",{style:{fontSize:14,color:"var(--color-text-secondary)"},children:o?`Выбрано: ${o}`:"Ничего не выбрано"}),e.jsx(d,{open:p,onClose:()=>n(!1),title:"Темы",options:f.map(s=>({value:s,label:s})),value:o,onChange:r,onReset:()=>r(void 0)})]})}},H=["Темы"];var u,i,l;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: "Выбор темы (ChoiceSheet)",
  render: () => {
    const [open, setOpen] = useState(false);
    const [v, setV] = useState<string>();
    return <div style={{
      display: "flex",
      gap: 12,
      alignItems: "center",
      fontFamily: "var(--font-family-body)"
    }}>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          Открыть темы
        </Button>
        <span style={{
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>{v ? \`Выбрано: \${v}\` : "Ничего не выбрано"}</span>
        <ChoiceSheet open={open} onClose={() => setOpen(false)} title="Темы" options={THEMES.map(t => ({
        value: t,
        label: t
      }))} value={v} onChange={setV} onReset={() => setV(undefined)} />
      </div>;
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};export{H as __namedExportsOrder,F as default,t as Темы};
