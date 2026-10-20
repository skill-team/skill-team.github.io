import{r as c,j as r}from"./iframe-xHeXyRUt.js";import{e as j,B as m,t as F,n}from"./BlockEditor-DEMmw0pc.js";import{M as I}from"./MaterialContent-gRKrtAcn.js";import{n as T}from"./news-3-CbYQUwuB.js";import"./preload-helper-C1FmrZbK.js";import"./ProgressBar-DDDjj0Dt.js";import"./Spinner-BjmqB2w1.js";import"./Input-hs0-DsvJ.js";import"./InputChrome-RLws-aIV.js";import"./context-YSLqM9pP.js";import"./useTruncated-DZT6EyQu.js";import"./index-DAOdAdyQ.js";import"./ContextIsolator-BRwUpuIq.js";import"./index-BSmWugg0.js";import"./index-BZepmLjH.js";import"./CloseCircleFilled-U51GO4x2.js";import"./useCSSVarCls-2qV6Kap2.js";import"./pickAttrs-BwR6N1Ic.js";import"./EyeOutlined-D6oaBCRI.js";import"./Callout-tbctQqX6.js";import"./DropdownMenu-BZM7Gyro.js";import"./Scrollbar-go_vQ20i.js";import"./DropdownMenuItem-DIPkA542.js";import"./Radio-RKMtjUxZ.js";import"./index-DFWcBYSm.js";import"./useForm-DcteB1QV.js";import"./index-DLAirbDr.js";import"./index-5d9M48ZJ.js";import"./KeyCode-lh1qUinJ.js";import"./PurePanel-DskKyjH6.js";import"./index-CirdRWj1.js";import"./Overflow-DDDIwkRC.js";import"./collapse-BbEVqHco.js";import"./move-DrY42EjS.js";import"./FileAttachment-CimBpC6h.js";import"./FileTypeBadge-4RcTRARI.js";import"./Upload-CGtAxvQb.js";import"./fade-BLoGMnIA.js";import"./CheckCircleFilled-m1DKoOX_.js";import"./CheckOutlined-1AcpI7FG.js";import"./CloseOutlined-Ba06t28w.js";import"./useForceUpdate-DiXsf6TS.js";import"./useLocale-C5RInZ-8.js";import"./blockCatalog-C1gN4gVX.js";import"./InputSearch-DOIQCbpg.js";import"./Select.module-L1SttIPx.js";import"./index-PlNzUQFN.js";import"./useShowArrow-BG5xSIIH.js";import"./useIcons-BJDXcmbA.js";import"./Table-DF13NWgK.js";import"./iconUtil-E-uN_iFw.js";import"./useBreakpoint-DFD_TI5c.js";import"./extendsObject-78o_rR5W.js";import"./InfoTag-B9QBGaiU.js";const Lt={title:"UI Kit/Редактор/BlockEditor",id:"ui-kit-blockeditor",tags:["autodocs"],args:{kind:"news"},argTypes:{kind:{control:"inline-radio",options:["news","material","course"],description:"Тип контента — какие блоки есть в меню «+» (у новостей нет SCORM)"}},parameters:{docs:{story:{height:"720px"},description:{component:"Редактор текста новости, материала, курса — из блоков, как в Notion. Блоки сразу выглядят как на странице (раскладка `MaterialContent`): автор видит то же, что увидит читатель. Шрифтов, цветов и выравнивания у автора нет — только блоки и жирный / курсив / ссылка.\n\n| Проп | Значения |\n| --- | --- |\n| `kind` | `news` · `material` · `course` — набор блоков в меню |\n| `blocks` | массив `EditorBlock` — значение редактора; пустой редактор — `emptyBlocks()` |\n| `onChange` | новый массив блоков после каждой правки |\n| `uploadFile` | `(file, { kind, onProgress }) => Promise<ссылка>` — загрузка фото, видео и файлов на сервер; не передана — файл из памяти браузера |\n\n**Как работает**\n- Наведение на блок — слева «+» и ручка ⋮⋮. «+» — меню блоков (`BlockMenu`), новый блок встаёт ниже. Ручку можно тянуть — синяя линия показывает, куда встанет блок; нажатие на ручку — меню блока: превратить текст в подзаголовок, список, цитату; у инфоблока — другой цвет; у фото — заменить; у «текст + фото» — поменять местами; дублировать, вверх, вниз, удалить.\n- «/» в пустой строке — то же меню с поиском, выбранный блок встаёт на место строки.\n- Enter делит абзац, Backspace в начале строки склеивает её с предыдущей, в пустом блоке — удаляет блок. В списке Enter на пустом пункте — выход из списка.\n- Сокращения в начале строки: `## ` — H2, `### ` — H3, `- ` — список, `1. ` — нумерованный, `> ` — цитата, `---` — разделитель.\n- Выделили текст — над ним тёмная панель: жирный, курсив, ссылка.\n- Фото, видео, «текст + фото», файлы — выбор в меню сразу открывает окно выбора (отменили — блока нет). Фото и видео можно отметить несколько — каждое встанет своим блоком подряд; файлы — все в один блок. Не подошёл — область загрузки с причиной. «Заменить фото» в меню блока — тоже сразу окно выбора.\n- Файлы — плашками, под ними ссылка «Загрузить ещё» (сразу окно выбора). «Файлы» из меню у блока с файлами или в пустой строке сразу под ним, а также файлы, перетащенные из папки на блок, дописываются в тот же список — второй блок не появляется.\n- Таблица — таблица кита, во всю ширину блока (текст — не шире `--editor-text-max`, если страница его задала). Заголовки и ячейки правятся прямо в тексте, как в Notion: Enter — к ячейке ниже, Shift+Enter — перенос, Tab — к следующей. При наведении — ручка ⋮⋮ (тянуть — переставить строку или столбец) и корзина. Ширина столбца — не уже 160; тянуть за правый край заголовка можно и уже (до 64), двойной щелчок — как было; не помещается — прокрутка вбок. Под таблицей — «+ Добавить строку / столбец». Пустые строки на страницу не попадают.\n- Вставка таблицы — скопированная из чата ИИ, Excel или Google Таблиц (HTML, Markdown, с табуляцией) сразу становится блоком «Таблица».\n- Щелчок под последним блоком — новая строка. В «текст + фото» и раскрывающемся блоке Enter на пустой строке — выход на строку ниже.\n- Вставка из буфера — простым текстом: чужие шрифты и цвета не попадают.\n\n**Загрузка на сервер** — `uploadFile`: редактор отдаёт файл, приложение отправляет его на свой сервер и возвращает постоянную ссылку — она и попадает в блок. `kind` — `image` / `video` / `file`; `onProgress(0…100)` — по желанию, для полосы. Пока грузится — у фото и видео на месте картинки имя и полоса с процентами, у файла — плашка с полосой и «Отменить»; ошибка (Promise отклонён) — «Не удалось загрузить» у фото, красная плашка у файла. Формат и размер редактор проверяет сам, до отправки. Пример — «Загрузка на сервер».\n\n**Место:** ручки висят слева от текста — контейнеру нужно 56px свободного поля слева.\n\nЗначение для сервера и страницы — `toContentBlocks(blocks)` (пустые блоки пропускаются), текст для карточки по умолчанию — `firstParagraph(blocks)`."}}}},d={maxWidth:760,padding:"8px 0 320px 64px"},s={render:({kind:o})=>{const[t,e]=c.useState(j);return r.jsx("div",{style:d,children:r.jsx(m,{kind:o,blocks:t,onChange:e})})}},w=()=>[{id:n(),type:"paragraph",html:"С 1 ноября на всех объектах компании вводится <b>цифровая приёмка скрытых работ</b>. Акты подписываются в приложении прямо на площадке — без бумажных копий."},{id:n(),type:"h2",html:"Что меняется"},{id:n(),type:"list",html:"<li>Фотофиксация — обязательна для каждого акта</li><li>Подпись — электронная, с телефона</li><li>Замечания уходят подрядчику сразу</li>"},{id:n(),type:"callout",tone:"info",html:"Обучение для инженеров технадзора — 28 октября, запись у руководителя участка."},{id:n(),type:"image",src:T,caption:"Приёмка скрытых работ на объекте «Север»"},{id:n(),type:"quote",html:"Бумага терялась, фото не совпадали с актами. Теперь всё в одном месте. — <i>Илья Обломов, главный инженер</i>"},{id:n(),type:"toggle",title:"Что делать, если нет связи на площадке?",html:"Акт сохраняется в телефоне и уходит сам, когда появится сеть."},{id:n(),type:"button",label:"Открыть инструкцию",href:"https://example.com"}],a={render:({kind:o})=>{const[t,e]=c.useState(w);return r.jsx("div",{style:d,children:r.jsx(m,{kind:o,blocks:t,onChange:e})})}},l={name:"Редактор и страница рядом",parameters:{docs:{story:{height:"900px"}}},render:({kind:o})=>{const[t,e]=c.useState(w);return r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,padding:"8px 0 320px 64px"},children:[r.jsx(m,{kind:o,blocks:t,onChange:e}),r.jsx(I,{blocks:F(t)})]})}},U=(o,{onProgress:t})=>new Promise((e,M)=>{let i=0;const u=setInterval(()=>{i+=10,t==null||t(i),o.name.toLowerCase().includes("ошибка")&&i>=50?(clearInterval(u),M(new Error("Сервер не принял файл"))):i>=100&&(clearInterval(u),e(URL.createObjectURL(o)))},200)}),p={name:"Загрузка на сервер",render:({kind:o})=>{const[t,e]=c.useState(j);return r.jsx("div",{style:d,children:r.jsx(m,{kind:o,blocks:t,onChange:e,uploadFile:U})})}},Rt=["Пустой","Заполненный","СПросмотром","ЗагрузкаНаСервер"];var k,g,B;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: ({
    kind
  }) => {
    const [blocks, setBlocks] = useState<EditorBlock[]>(emptyBlocks);
    return <div style={frame}>
        <BlockEditor kind={kind} blocks={blocks} onChange={setBlocks} />
      </div>;
  }
}`,...(B=(g=s.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var h,x,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: ({
    kind
  }) => {
    const [blocks, setBlocks] = useState<EditorBlock[]>(filled);
    return <div style={frame}>
        <BlockEditor kind={kind} blocks={blocks} onChange={setBlocks} />
      </div>;
  }
}`,...(b=(x=a.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,f,E;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Редактор и страница рядом",
  parameters: {
    docs: {
      story: {
        height: "900px"
      }
    }
  },
  render: ({
    kind
  }) => {
    const [blocks, setBlocks] = useState<EditorBlock[]>(filled);
    return <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48,
      padding: "8px 0 320px 64px"
    }}>
        <BlockEditor kind={kind} blocks={blocks} onChange={setBlocks} />
        <MaterialContent blocks={toContentBlocks(blocks)} />
      </div>;
  }
}`,...(E=(f=l.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var C,v,S;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Загрузка на сервер",
  render: ({
    kind
  }) => {
    const [blocks, setBlocks] = useState<EditorBlock[]>(emptyBlocks);
    return <div style={frame}>
        <BlockEditor kind={kind} blocks={blocks} onChange={setBlocks} uploadFile={fakeUpload} />
      </div>;
  }
}`,...(S=(v=p.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};export{Rt as __namedExportsOrder,Lt as default,p as ЗагрузкаНаСервер,a as Заполненный,s as Пустой,l as СПросмотром};
