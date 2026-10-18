import{r as a,j as e,B as m}from"./iframe-BjwqOSi3.js";import{B as c}from"./BottomSheet-J9q2EBpV.js";import{C as d}from"./ChoiceSheet-A28rNuNs.js";import{T as f}from"./coursesData-BZH3rvUT.js";import"./preload-helper-C1FmrZbK.js";import"./index-Dshgv1EZ.js";import"./ContextIsolator-t4IZH0Aw.js";import"./context-CGGttlbE.js";import"./KeyCode-lh1qUinJ.js";import"./pickAttrs-CMH0USIN.js";import"./context-B_HbOPQV.js";import"./CloseOutlined-D46Xd8n1.js";import"./extendsObject-78o_rR5W.js";import"./useLocale-CmSPVnY6.js";import"./DropdownMenuItem-CVsz5xsO.js";import"./Radio-CP0jTXNY.js";import"./index-J-DsTmO9.js";import"./useCSSVarCls-B_1IN5HN.js";import"./useForm-BGDuyS49.js";import"./index-CIlwjofH.js";import"./course-1--YiCqOCo.js";import"./course-4-bsGBpGWB.js";import"./course-3-DSDYLXDH.js";const $={title:"UI Kit/Навигация/BottomSheet",id:"ui-kit-bottomsheet",component:c,tags:["autodocs"],args:{open:!1,onClose:()=>{},title:"Темы",children:null},argTypes:{title:{control:"text"},open:{control:!1},onClose:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Шторка снизу — для телефона. Белая, скругление сверху 30, «ручка» и заголовок; крестика нет — закрыть тапом по затемнению, стянуть вниз (больше 96 px) или Esc. На ней сделаны мобильное меню (`MobileMenu`) и выбор одного варианта `ChoiceSheet`.\n\n**ChoiceSheet** — список вариантов (пункты `DropdownMenuItem`: выбранный красным с галочкой, длинные названия — целиком, в несколько строк). Нажатие — выбрать и закрыть; «Сбросить» (красная ссылка в заголовке; ничего не выбрано — серая, неактивна) — сбросить и закрыть. Пример — темы в каталоге курсов на телефоне: в строке тегов только «Все · Я изучаю · Избранное», темы — по круглой кнопке-фильтру (выбрана тема — кнопка красная)."}}}},t={name:"Выбор темы (ChoiceSheet)",render:()=>{const[p,n]=a.useState(!1),[o,r]=a.useState();return e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",fontFamily:"var(--font-family-body)"},children:[e.jsx(m,{variant:"secondary",onClick:()=>n(!0),children:"Открыть темы"}),e.jsx("span",{style:{fontSize:14,color:"var(--color-text-secondary)"},children:o?`Выбрано: ${o}`:"Ничего не выбрано"}),e.jsx(d,{open:p,onClose:()=>n(!1),title:"Темы",options:f.map(s=>({value:s,label:s})),value:o,onChange:r,onReset:()=>r(void 0)})]})}},w=["Темы"];var u,i,l;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};export{w as __namedExportsOrder,$ as default,t as Темы};
