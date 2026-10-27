import{j as n}from"./iframe-DF43zbcH.js";import{U as p}from"./Upload-BF2e6p4s.js";import"./preload-helper-C1FmrZbK.js";import"./FileAttachment-BeztbA9i.js";import"./FileTypeBadge-CFNmaWvf.js";import"./ProgressBar-B05D_HF0.js";import"./pickAttrs-D5cNfL7C.js";import"./context-Bvlc22x8.js";import"./collapse-BbEVqHco.js";import"./ContextIsolator-CGgXIIAn.js";import"./fade-QBHIqkpt.js";import"./index-Dc-2W6eP.js";import"./EyeOutlined-BIQs8kr6.js";import"./CheckCircleFilled-rnyXqEmV.js";import"./CheckOutlined-D58qaGdD.js";import"./CloseCircleFilled-CVw6SRNq.js";import"./CloseOutlined-ep7nLCB3.js";import"./useForceUpdate-CR_OuYun.js";import"./useLocale-DdUAtv3I.js";const q=({file:e,onProgress:t,onSuccess:r,onError:o})=>{let i=0;const I=e.name.toLowerCase().includes("ошибка"),m=setInterval(()=>{i+=12,t==null||t({percent:Math.min(i,100)}),I&&i>=48?(clearInterval(m),o==null||o(new Error("Сервер не принял файл"))):i>=100&&(clearInterval(m),r==null||r("ok"))},250);return{abort:()=>clearInterval(m)}},z=[{uid:"1",name:"Исполнительная схема.pdf",size:124e4,status:"done"},{uid:"2",name:"Акт освидетельствования скрытых работ.pdf",size:412e3,status:"uploading",percent:40},{uid:"3",name:"Сертификат на арматуру.pdf",size:9e4,status:"error"}],X={title:"UI Kit/Поля ввода/Upload",id:"ui-kit-upload",tags:["autodocs"],args:{trigger:"area",title:"",hint:"",accept:".pdf,.docx,.xlsx",maxSize:50,compact:!1,disabled:!1,error:!1},argTypes:{trigger:{control:"inline-radio",options:["area","button"],description:"area — пунктирная область, button — кнопка «Загрузить»"},title:{control:"text",description:"Заголовок области / подпись кнопки; пусто — «Загрузить файлы» / «Загрузить»"},hint:{control:"text",description:"Своя подсказка; пусто — собирается из accept и maxSize"},accept:{control:"text",description:"Какие файлы можно: «.pdf,.docx», «image/*», «video/*»"},maxSize:{control:{type:"number",min:1},description:"Максимальный размер одного файла, МБ"},maxCount:{control:{type:"number",min:1},description:"Сколько файлов можно; набрали — область бледная"},compact:{control:"boolean",description:"Низкая область в одну строку, без подсказки"},disabled:{control:"boolean"},error:{control:"boolean",description:'Ошибка снаружи — status="error" + errorMessage'}},parameters:{docs:{story:{height:"460px"},description:{component:'Загрузка файлов — в редакторе (фото, видео, файлы) и в формах. Нажать или перетащить файл. Отправка на сервер — `action` или `customRequest`, как у antd Upload; без них файл сразу считается загруженным (для прототипа).\n\n| Проп | Значения |\n| --- | --- |\n| `trigger` | `area` — пунктирная область во всю ширину, `button` — кнопка «Загрузить» |\n| `accept`, `maxSize` (МБ) | из них подсказка «Формат — pdf, docx, не больше 50 МБ»; своя — `hint` |\n| `maxCount` | набрали — область бледная, «Вы уже загрузили максимум файлов» |\n| `compact` | низкая область в одну строку — «добавить ещё» под списком |\n| `status="error"` + `errorMessage` | ошибка снаружи: красная рамка, текст под областью |\n| `showList` | файлы плашками под областью (по умолчанию да); `false` — список рисует страница сама |\n| `onView`, `onDownload` | «Просмотр» и «Скачать» у загруженного файла |\n| `fileList` / `defaultFileList` / `onChange` | список файлов — как у antd |\n\n**Состояния.** Наведение и файл над областью — рамка темнее, фон серый. Не тот формат, больше `maxSize` или лишний сверх `maxCount` — файл не попадает в список, рамка красная, под ней — что не так. Файлы — плашки `FileAttachment`: загружается — полоса и «Отменить», не загрузился — красная, только «Удалить».\n\nВ примерах загрузка показана «как настоящая» — с полосой; файл со словом «ошибка» в имени не загрузится.'}}},decorators:[e=>n.jsx("div",{style:{maxWidth:640,background:"var(--color-surface)"},children:n.jsx(e,{})})]},a={render:({title:e,hint:t,error:r,...o})=>n.jsx(p,{...o,title:e||void 0,hint:t||void 0,status:r?"error":void 0,errorMessage:"Приложите акт",customRequest:q})},u={name:"С файлами",render:({title:e,hint:t,error:r,...o})=>n.jsx(p,{...o,title:e||void 0,hint:t||void 0,status:r?"error":void 0,customRequest:q,defaultFileList:z,onView:()=>{},onDownload:()=>{}})},s={args:{trigger:"button"},render:a.render},d={name:"Набран максимум",args:{maxCount:1},render:({title:e,hint:t,...r})=>n.jsx(p,{...r,title:e||void 0,hint:t||void 0,defaultFileList:[z[0]]})},c={name:"Фото, в одну строку",args:{accept:"image/*",compact:!0,title:"Загрузить фото"},render:a.render},Y=["Playground","СФайлами","Кнопка","Максимум","Фото"];var l,g,f;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    title,
    hint,
    error,
    ...a
  }) => <Upload {...a} title={title || undefined} hint={hint || undefined} status={error ? "error" : undefined} errorMessage="Приложите акт" customRequest={fakeRequest} />
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,h,v;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "С файлами",
  render: ({
    title,
    hint,
    error,
    ...a
  }) => <Upload {...a} title={title || undefined} hint={hint || undefined} status={error ? "error" : undefined} customRequest={fakeRequest} defaultFileList={FILES} onView={() => {}} onDownload={() => {}} />
}`,...(v=(h=u.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var b,C,L;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    trigger: "button"
  },
  render: Playground.render
}`,...(L=(C=s.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var F,w,y;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Набран максимум",
  args: {
    maxCount: 1
  },
  render: ({
    title,
    hint,
    ...a
  }) => <Upload {...a} title={title || undefined} hint={hint || undefined} defaultFileList={[FILES[0]]} />
}`,...(y=(w=d.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var E,R,S;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Фото, в одну строку",
  args: {
    accept: "image/*",
    compact: true,
    title: "Загрузить фото"
  },
  render: Playground.render
}`,...(S=(R=c.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};export{a as Playground,Y as __namedExportsOrder,X as default,s as Кнопка,d as Максимум,u as СФайлами,c as Фото};
