import{j as e,r as $,B as u4}from"./iframe-wfJ_y6tk.js";import{F as e4,D as r4,a as q}from"./previewDemo-zvMvTeRj.js";import"./preload-helper-C1FmrZbK.js";import"./FileTypeBadge-Bf6y6nxG.js";import"./useTruncated-BK8cY36k.js";import"./Spinner-0rG8RZBH.js";import"./ZoomControl-CU06vwl_.js";import"./SegmentedControl-D1fYbAYs.js";import"./index-DK8SjL2j.js";import"./ContextIsolator-8G1DI5TY.js";import"./context-BtIUxdFu.js";import"./CheckCircleFilled-C_2HG6LR.js";import"./CloseCircleFilled-B-2k4t7L.js";import"./index-hcjOAbAn.js";import"./CloseOutlined-BMu17Hic.js";import"./KeyCode-lh1qUinJ.js";import"./pickAttrs-DzhteYie.js";import"./useCSSVarCls-Dp79i034.js";import"./context-BzTrU2ok.js";import"./extendsObject-78o_rR5W.js";import"./useLocale-B0NX3RbO.js";import"./fade-RRnVKRiZ.js";import"./PurePanel-B9LUDZ6O.js";const y4={title:"UI Kit/Таблицы/FilePreview",id:"ui-kit-filepreview",component:e4,tags:["autodocs"],args:{open:!1,title:"",fullscreen:!1,onToggleFullscreen:()=>{},onDownload:()=>{},onClose:()=>{}},parameters:{docs:{story:{height:"80px"},description:{component:"Просмотрщик документа — **рамка** окна предпросмотра (бриф разработчиков Setl Академии): страницы рисует их pdf.js (canvas), картинку, видео, текст — подставляют в `children`; кит рисует окно вокруг.\n\n- **Шапка:** плашка типа файла, название (одна строка, «…» и тултип), мелко «275,5 КБ · 9 стр.»; масштаб `ZoomControl` — только когда передан `zoom` (у PDF); «Скачать», на весь экран / выйти, закрыть — всё `Button secondary small`.\n- **До 860 px** масштаб уходит во вторую строку шапки; **на телефоне** окно на весь экран, «Скачать» — иконкой.\n- **Тело:** светло-серый фон (`--preview-bg`, gray-200), страницы белые с тенью — вместо тёмной рамки; для Office-файлов сверху плашка `note`.\n- **Видео и аудио** — в том же окне, плеер браузера (`FilePreviewVideo`, `FilePreviewAudio`), без масштаба, `dark` — тёмный фон под роликом, `canFullscreen={false}` — у плеера свой полный экран, вторая кнопка в шапке путала.\n- **Без скачивания** — `canDownload={false}`: кнопки «Скачать» нет ни в шапке, ни в состояниях.\n- **Состояния** (`status`): `loading` — спиннер и «Рендер PDF…»; `error` / `empty` / `unsupported` — `EmptyState` со «Скачать» (скачать можно всегда).\n- **Клавиатура:** Esc — выйти из полного экрана, иначе закрыть. Клик по затемнению — закрыть.\n\n**Word, Excel, PowerPoint** (у разработчиков): Word и PowerPoint сервер переводит в PDF (LibreOffice / Gotenberg — внутри компании, файлы никуда не уходят), дальше тот же pdf.js; Excel — таблицей в браузере (SheetJS) с ярлычками листов: в PDF широкую таблицу режет на страницы.\n\n**`FilePreviewPane`** — тот же просмотрщик без окна, встроенный в страницу (панель сбоку реестра документов): масштаб и «N стр.» сверху, ниже серое поле со страницами, своя прокрутка, на всю высоту родителя; состояния и `note` — те же. `onExpand` — кнопка «На весь экран».\n\n`bodyRef` — прокручиваемая область: pdf.js нужен её размер для «По ширине» и «Целиком». Пример подключения с масштабом — `stories/ui-kit/previewDemo.tsx`."}}}};function t({label:r,startOpen:u=!0,...Q}){const[Y,x]=$.useState(u);return e.jsxs("div",{style:{padding:24},children:[e.jsx(u4,{variant:"secondary",size:"medium",onClick:()=>x(!0),children:r}),e.jsx(r4,{open:Y,onClose:()=>x(!1),...Q})]})}const o={render:(r,u)=>e.jsx(t,{startOpen:u.viewMode!=="docs",label:"Открыть PDF",title:"Схема взаимодействия между департаментами"})},s={name:"Word / Excel / PowerPoint",render:(r,u)=>e.jsx(t,{startOpen:u.viewMode!=="docs",label:"Открыть DOCX",title:"Сводный отчет по продажам",fileType:"docx",sizeLabel:"48,2 КБ",office:!0})},a={name:"Excel — лист",render:(r,u)=>e.jsx(t,{startOpen:u.viewMode!=="docs",label:"Открыть XLSX",title:"Чек-лист приёмки квартир",fileType:"xlsx",sizeLabel:"86,1 КБ",office:!0})},H=r=>e.jsx("div",{style:{display:"flex",height:640,padding:12,background:"var(--color-surface)",borderRadius:24},children:r}),n={name:"Встроенный (FilePreviewPane) — Word",parameters:{docs:{story:{height:"680px"},description:{story:"Панель сбоку реестра документов: масштаб сверху, страницы со своей прокруткой."}}},render:()=>H(e.jsx(q,{title:"Типовой договор подряда",fileType:"docx"}))},i={name:"Встроенный — Excel",parameters:{docs:{story:{height:"680px"}}},render:()=>H(e.jsx(q,{title:"Чек-лист приёмки квартир",fileType:"xlsx"}))},c={name:"Длинное название",render:(r,u)=>e.jsx(t,{startOpen:u.viewMode!=="docs",label:"Открыть",title:"Доверенность на представление интересов компании в арбитражном суде по делу о взыскании неустойки с подрядчика по договору генерального подряда"})},d={name:"Формат без предпросмотра",render:(r,u)=>e.jsx(t,{startOpen:u.viewMode!=="docs",label:"Открыть ZIP",title:"Корпоративный стиль: шаблоны",fileType:"zip",sizeLabel:"12,4 МБ",forceStatus:"unsupported"})},l={name:"Видео",render:(r,u)=>e.jsx(t,{startOpen:u.viewMode!=="docs",label:"Открыть MP4",title:"Запись вебинара «Утро с экспертом»: BIM на стройплощадке",fileType:"mp4",sizeLabel:"1,1 МБ",video:!0})},p={name:"Без скачивания",parameters:{docs:{description:{story:"`canDownload={false}` — кнопки «Скачать» нет ни в шапке, ни в состояниях."}}},render:(r,u)=>e.jsx(t,{startOpen:u.viewMode!=="docs",label:"Открыть",title:"Положение о премировании (только просмотр)",noDownload:!0})},m={render:(r,u)=>e.jsx(t,{startOpen:u.viewMode!=="docs",label:"Открыть",title:"Итоги годового отчета",forceStatus:"error"})},E={name:"Картинка (без масштаба)",render:(r,u)=>e.jsx(t,{startOpen:u.viewMode!=="docs",label:"Открыть JPG",title:"Фото с объекта «Север»",fileType:"jpg",sizeLabel:"1,8 МБ",noZoom:!0,children:e.jsx("div",{style:{flex:1,display:"grid",placeItems:"center",padding:24},children:e.jsx("div",{style:{width:640,height:420,borderRadius:8,background:"linear-gradient(135deg, var(--blue-400), var(--green-300))",boxShadow:"var(--shadow-card)"}})})})},O4=["PDF","Office","Excel","Встроенный","ВстроенныйExcel","ДлинноеНазвание","НетПредпросмотра","Видео","БезСкачивания","Ошибка","Картинка"];var D,f,F;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: (_, ctx) => <Opener startOpen={ctx.viewMode !== "docs"} label="Открыть PDF" title="Схема взаимодействия между департаментами" />
}`,...(F=(f=o.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var v,w,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: "Word / Excel / PowerPoint",
  render: (_, ctx) => <Opener startOpen={ctx.viewMode !== "docs"} label="Открыть DOCX" title="Сводный отчет по продажам" fileType="docx" sizeLabel="48,2 КБ" office />
}`,...(g=(w=s.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var B,C,b;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: "Excel — лист",
  render: (_, ctx) => <Opener startOpen={ctx.viewMode !== "docs"} label="Открыть XLSX" title="Чек-лист приёмки квартир" fileType="xlsx" sizeLabel="86,1 КБ" office />
}`,...(b=(C=a.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var A,y,O;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Встроенный (FilePreviewPane) — Word",
  parameters: {
    docs: {
      story: {
        height: "680px"
      },
      description: {
        story: "Панель сбоку реестра документов: масштаб сверху, страницы со своей прокруткой."
      }
    }
  },
  render: () => paneFrame(<DemoPane title="Типовой договор подряда" fileType="docx" />)
}`,...(O=(y=n.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var P,h,j;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "Встроенный — Excel",
  parameters: {
    docs: {
      story: {
        height: "680px"
      }
    }
  },
  render: () => paneFrame(<DemoPane title="Чек-лист приёмки квартир" fileType="xlsx" />)
}`,...(j=(h=i.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var S,M,_;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Длинное название",
  render: (_, ctx) => <Opener startOpen={ctx.viewMode !== "docs"} label="Открыть" title="Доверенность на представление интересов компании в арбитражном суде по делу о взыскании неустойки с подрядчика по договору генерального подряда" />
}`,...(_=(M=c.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var T,z,L;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Формат без предпросмотра",
  render: (_, ctx) => <Opener startOpen={ctx.viewMode !== "docs"} label="Открыть ZIP" title="Корпоративный стиль: шаблоны" fileType="zip" sizeLabel="12,4 МБ" forceStatus="unsupported" />
}`,...(L=(z=d.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var k,I,W;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: "Видео",
  render: (_, ctx) => <Opener startOpen={ctx.viewMode !== "docs"} label="Открыть MP4" title="Запись вебинара «Утро с экспертом»: BIM на стройплощадке" fileType="mp4" sizeLabel="1,1 МБ" video />
}`,...(W=(I=l.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var X,R,Z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: "Без скачивания",
  parameters: {
    docs: {
      description: {
        story: "\`canDownload={false}\` — кнопки «Скачать» нет ни в шапке, ни в состояниях."
      }
    }
  },
  render: (_, ctx) => <Opener startOpen={ctx.viewMode !== "docs"} label="Открыть" title="Положение о премировании (только просмотр)" noDownload />
}`,...(Z=(R=p.parameters)==null?void 0:R.docs)==null?void 0:Z.source}}};var G,J,K;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: (_, ctx) => <Opener startOpen={ctx.viewMode !== "docs"} label="Открыть" title="Итоги годового отчета" forceStatus="error" />
}`,...(K=(J=m.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var N,U,V;E.parameters={...E.parameters,docs:{...(N=E.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(V=(U=E.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};export{a as Excel,s as Office,o as PDF,O4 as __namedExportsOrder,y4 as default,p as БезСкачивания,l as Видео,n as Встроенный,i as ВстроенныйExcel,c as ДлинноеНазвание,E as Картинка,d as НетПредпросмотра,m as Ошибка};
