import{j as e,r as Z,B as R}from"./iframe-T1G-SIdY.js";import{F as G,D as J}from"./previewDemo-CUqa1QsZ.js";import"./preload-helper-C1FmrZbK.js";import"./FileTypeBadge-RiR0bbu6.js";import"./useTruncated-wUfbEmiw.js";import"./Spinner-CnJbqGOK.js";import"./ZoomControl-DV5Dk4y9.js";import"./SegmentedControl-C0ghZS1z.js";import"./index-CCOMMNKo.js";import"./context-BT_JPeuY.js";import"./index-Dl1wdr2M.js";import"./CloseCircleFilled-lErke8Fw.js";import"./CloseOutlined-Du0dHgkK.js";import"./KeyCode-lh1qUinJ.js";import"./pickAttrs-prGlZbsm.js";import"./useCSSVarCls-h8B24G72.js";import"./useLocale-w2fOQfta.js";import"./extendsObject-78o_rR5W.js";import"./PurePanel-CBq0Z3bd.js";const i4={title:"UI Kit/Таблицы/FilePreview",id:"ui-kit-filepreview",component:G,tags:["autodocs"],args:{open:!1,title:"",fullscreen:!1,onToggleFullscreen:()=>{},onDownload:()=>{},onClose:()=>{}},parameters:{docs:{story:{height:"80px"},description:{component:"Просмотрщик документа — **рамка** окна предпросмотра (бриф разработчиков Setl Академии): страницы рисует их pdf.js (canvas), картинку, видео, текст — подставляют в `children`; кит рисует окно вокруг.\n\n- **Шапка:** плашка типа файла, название (одна строка, «…» и тултип), мелко «275,5 КБ · 9 стр.»; масштаб `ZoomControl` — только когда передан `zoom` (у PDF); «Скачать», на весь экран / выйти, закрыть — всё `Button secondary small`.\n- **До 860 px** масштаб уходит во вторую строку шапки; **на телефоне** окно на весь экран, «Скачать» — иконкой.\n- **Тело:** светло-серый фон (`--preview-bg`, gray-200), страницы белые с тенью — вместо тёмной рамки; для Office-файлов сверху плашка `note`.\n- **Видео и аудио** — в том же окне, плеер браузера (`FilePreviewVideo`, `FilePreviewAudio`), без масштаба, `dark` — тёмный фон под роликом, `canFullscreen={false}` — у плеера свой полный экран, вторая кнопка в шапке путала.\n- **Без скачивания** — `canDownload={false}`: кнопки «Скачать» нет ни в шапке, ни в состояниях.\n- **Состояния** (`status`): `loading` — спиннер и «Рендер PDF…»; `error` / `empty` / `unsupported` — `EmptyState` со «Скачать» (скачать можно всегда).\n- **Клавиатура:** Esc — выйти из полного экрана, иначе закрыть. Клик по затемнению — закрыть.\n\n`bodyRef` — прокручиваемая область: pdf.js нужен её размер для «По ширине» и «Целиком». Пример подключения с масштабом — `stories/ui-kit/previewDemo.tsx`."}}}};function t({label:r,startOpen:u=!0,...I}){const[k,p]=Z.useState(u);return e.jsxs("div",{style:{padding:24},children:[e.jsx(R,{variant:"secondary",size:"medium",onClick:()=>p(!0),children:r}),e.jsx(J,{open:k,onClose:()=>p(!1),...I})]})}const o={render:(r,u)=>e.jsx(t,{startOpen:u.viewMode!=="docs",label:"Открыть PDF",title:"Схема взаимодействия между департаментами"})},s={name:"Word / Excel / PowerPoint",render:(r,u)=>e.jsx(t,{startOpen:u.viewMode!=="docs",label:"Открыть DOCX",title:"Сводный отчет по продажам",fileType:"docx",sizeLabel:"48,2 КБ",office:!0})},a={name:"Длинное название",render:(r,u)=>e.jsx(t,{startOpen:u.viewMode!=="docs",label:"Открыть",title:"Доверенность на представление интересов компании в арбитражном суде по делу о взыскании неустойки с подрядчика по договору генерального подряда"})},n={name:"Формат без предпросмотра",render:(r,u)=>e.jsx(t,{startOpen:u.viewMode!=="docs",label:"Открыть ZIP",title:"Корпоративный стиль: шаблоны",fileType:"zip",sizeLabel:"12,4 МБ",forceStatus:"unsupported"})},i={name:"Видео",render:(r,u)=>e.jsx(t,{startOpen:u.viewMode!=="docs",label:"Открыть MP4",title:"Запись вебинара «Утро с экспертом»: BIM на стройплощадке",fileType:"mp4",sizeLabel:"1,1 МБ",video:!0})},d={name:"Без скачивания",parameters:{docs:{description:{story:"`canDownload={false}` — кнопки «Скачать» нет ни в шапке, ни в состояниях."}}},render:(r,u)=>e.jsx(t,{startOpen:u.viewMode!=="docs",label:"Открыть",title:"Положение о премировании (только просмотр)",noDownload:!0})},c={render:(r,u)=>e.jsx(t,{startOpen:u.viewMode!=="docs",label:"Открыть",title:"Итоги годового отчета",forceStatus:"error"})},l={name:"Картинка (без масштаба)",render:(r,u)=>e.jsx(t,{startOpen:u.viewMode!=="docs",label:"Открыть JPG",title:"Фото с объекта «Север»",fileType:"jpg",sizeLabel:"1,8 МБ",noZoom:!0,children:e.jsx("div",{style:{flex:1,display:"grid",placeItems:"center",padding:24},children:e.jsx("div",{style:{width:640,height:420,borderRadius:8,background:"linear-gradient(135deg, var(--blue-400), var(--green-300))",boxShadow:"var(--shadow-card)"}})})})},d4=["PDF","Office","ДлинноеНазвание","НетПредпросмотра","Видео","БезСкачивания","Ошибка","Картинка"];var m,E,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (_, ctx) => <Opener startOpen={ctx.viewMode !== "docs"} label="Открыть PDF" title="Схема взаимодействия между департаментами" />
}`,...(x=(E=o.parameters)==null?void 0:E.docs)==null?void 0:x.source}}};var D,f,v;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: "Word / Excel / PowerPoint",
  render: (_, ctx) => <Opener startOpen={ctx.viewMode !== "docs"} label="Открыть DOCX" title="Сводный отчет по продажам" fileType="docx" sizeLabel="48,2 КБ" office />
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var F,w,C;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Длинное название",
  render: (_, ctx) => <Opener startOpen={ctx.viewMode !== "docs"} label="Открыть" title="Доверенность на представление интересов компании в арбитражном суде по делу о взыскании неустойки с подрядчика по договору генерального подряда" />
}`,...(C=(w=a.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var B,b,g;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Формат без предпросмотра",
  render: (_, ctx) => <Opener startOpen={ctx.viewMode !== "docs"} label="Открыть ZIP" title="Корпоративный стиль: шаблоны" fileType="zip" sizeLabel="12,4 МБ" forceStatus="unsupported" />
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var O,A,y;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: "Видео",
  render: (_, ctx) => <Opener startOpen={ctx.viewMode !== "docs"} label="Открыть MP4" title="Запись вебинара «Утро с экспертом»: BIM на стройплощадке" fileType="mp4" sizeLabel="1,1 МБ" video />
}`,...(y=(A=i.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var P,M,j;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Без скачивания",
  parameters: {
    docs: {
      description: {
        story: "\`canDownload={false}\` — кнопки «Скачать» нет ни в шапке, ни в состояниях."
      }
    }
  },
  render: (_, ctx) => <Opener startOpen={ctx.viewMode !== "docs"} label="Открыть" title="Положение о премировании (только просмотр)" noDownload />
}`,...(j=(M=d.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var _,h,S;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (_, ctx) => <Opener startOpen={ctx.viewMode !== "docs"} label="Открыть" title="Итоги годового отчета" forceStatus="error" />
}`,...(S=(h=c.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var z,T,L;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Картинка (без масштаба)",
  render: (_, ctx) => <Opener startOpen={ctx.viewMode !== "docs"} label="Открыть JPG" title="Фото с объекта «Север»" fileType="jpg" sizeLabel="1,8 МБ" noZoom>
      <div style={{
      flex: 1,
      display: "grid",
      placeItems: "center",
      padding: 24
    }}>
        <div style={{
        width: 640,
        height: 420,
        borderRadius: 8,
        background: "linear-gradient(135deg, var(--blue-400), var(--green-300))",
        boxShadow: "var(--shadow-card)"
      }} />
      </div>
    </Opener>
}`,...(L=(T=l.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};export{s as Office,o as PDF,d4 as __namedExportsOrder,i4 as default,d as БезСкачивания,i as Видео,a as ДлинноеНазвание,l as Картинка,n as НетПредпросмотра,c as Ошибка};
