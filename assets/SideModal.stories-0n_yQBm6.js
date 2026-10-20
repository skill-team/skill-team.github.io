import{r as o,j as e,B as a,T as x}from"./iframe-BFd96KHm.js";import{C as E}from"./ChoiceTag-SZfMRFM4.js";import{T as h}from"./TextArea-GjgG7BUD.js";import{L as S}from"./ListItem-DR9KVzro.js";import{S as l}from"./SideModal-BGSWMp0B.js";import{F as A,A as r,a as B}from"./aboutData-DrKk9U2N.js";import"./preload-helper-C1FmrZbK.js";import"./Scrollbar-r7VygxA2.js";import"./InputChrome-BSiyVpEh.js";import"./context-BWLmWlnn.js";import"./useTruncated-BqF7u7ib.js";import"./index-D72j1uDz.js";import"./ContextIsolator-CfQAkasn.js";import"./index-BlRMKTQl.js";import"./index-FRJeKTdu.js";import"./CloseCircleFilled-BoySjRRf.js";import"./useCSSVarCls-Fz_A80LR.js";import"./pickAttrs-Dl3VOZfP.js";import"./EyeOutlined-BhJKcxe1.js";import"./index-Dpiq2stz.js";import"./KeyCode-lh1qUinJ.js";import"./context-PYyRVfpZ.js";import"./CloseOutlined-CeynsCNI.js";import"./extendsObject-78o_rR5W.js";import"./useLocale-C3EajwIt.js";import"./profileData-DZhnLGpr.js";import"./index-CGJuuq_M.js";const W={title:"UI Kit/Навигация/SideModal",id:"ui-kit-sidemodal",component:l,tags:["autodocs"],args:{open:!1,onClose:()=>{},title:"Редактирование профиля",width:700,children:null},argTypes:{title:{control:"text"},width:{control:{type:"number",min:360,max:900,step:20},description:"Ширина, px (не шире экрана)"},open:{control:!1},onClose:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},footer:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{story:{inline:!1,height:"640px"},description:{component:"Боковое окно (личный кабинет, «О себе» → «Редактирование профиля»). Выезжает справа на всю высоту, ширина 700 (не шире экрана), страница под ним затемнена и размыта. Сверху заголовок `H3` и крестик, ниже содержимое с прокруткой (`Scrollbar xs` у края), снизу закреплены кнопки (`footer`) — справа, через 24; на телефоне окно на весь экран, кнопки поровну. Закрыть — крестик, клик по затемнению, Esc. Внутри — antd `Drawer` (фокус и Esc — его)."}}}},u={render:p=>{const[c,t]=o.useState(!1),[d,m]=o.useState(A),[g,C]=o.useState(r[4].selected);return e.jsxs("div",{style:{padding:24},children:[e.jsx(a,{variant:"primary-red",onClick:()=>t(!0),children:"Открыть окно"}),e.jsxs(l,{...p,open:c,onClose:()=>t(!1),footer:e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"secondary",size:"large",onClick:()=>t(!1),children:"Отменить"}),e.jsx(a,{variant:"primary-red",size:"large",onClick:()=>t(!1),children:"Сохранить"})]}),children:[e.jsx(S,{filled:!0,quiet:!0,divider:!1,leading:e.jsx(x,{size:16}),title:"ФИО, должность, отдел и руководитель приходят из кадровой системы — изменить их можно через HR"}),e.jsx(h,{value:d,onChange:f=>m(f.target.value),maxLength:B,showCount:!0,minRows:3,"aria-label":"Интересный факт"}),e.jsx(E,{label:"Языки",options:r[4].options,value:g,onChange:C})]})]})}},Y=["Playground"];var n,s,i;u.parameters={...u.parameters,docs:{...(n=u.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    const [fact, setFact] = useState(FACT);
    const [langs, setLangs] = useState(ABOUT_SECTIONS[4].selected);
    return <div style={{
      padding: 24
    }}>
        <Button variant="primary-red" onClick={() => setOpen(true)}>
          Открыть окно
        </Button>
        <SideModal {...args} open={open} onClose={() => setOpen(false)} footer={<>
              <Button variant="secondary" size="large" onClick={() => setOpen(false)}>
                Отменить
              </Button>
              <Button variant="primary-red" size="large" onClick={() => setOpen(false)}>
                Сохранить
              </Button>
            </>}>
          <ListItem filled quiet divider={false} leading={<IconLock01 size={16} />} title="ФИО, должность, отдел и руководитель приходят из кадровой системы — изменить их можно через HR" />
          <TextArea value={fact} onChange={e => setFact(e.target.value)} maxLength={FACT_MAX} showCount minRows={3} aria-label="Интересный факт" />
          <ChoiceTagGroup label="Языки" options={ABOUT_SECTIONS[4].options} value={langs} onChange={setLangs} />
        </SideModal>
      </div>;
  }
}`,...(i=(s=u.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};export{u as Playground,Y as __namedExportsOrder,W as default};
