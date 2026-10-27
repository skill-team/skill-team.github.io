import{r as c,j as r}from"./iframe-DF43zbcH.js";import{e as j,B as m,t as F,n}from"./BlockEditor-ykPQoj4p.js";import{M as I}from"./MaterialContent-BeZUmarY.js";import{n as T}from"./news-3-CbYQUwuB.js";import"./preload-helper-C1FmrZbK.js";import"./ProgressBar-B05D_HF0.js";import"./Spinner-CIF-PKWR.js";import"./Input-dGG5TOAC.js";import"./InputChrome-hwD1g7Gx.js";import"./context-Bvlc22x8.js";import"./useTruncated-Bc6x0L2e.js";import"./index-Dc-2W6eP.js";import"./ContextIsolator-CGgXIIAn.js";import"./index-rnexqFIK.js";import"./index-BPkKOLwD.js";import"./CloseCircleFilled-CVw6SRNq.js";import"./useCSSVarCls-BWHCu96H.js";import"./pickAttrs-D5cNfL7C.js";import"./EyeOutlined-BIQs8kr6.js";import"./Callout-CWucmR0i.js";import"./DropdownMenu-Cd7TjhJQ.js";import"./Scrollbar-DaPov4DG.js";import"./DropdownMenuItem-DCYzNhbT.js";import"./Radio-BRGAXydT.js";import"./index-ecjyLzFu.js";import"./useForm-oNyCIUHi.js";import"./index-BT35_YIn.js";import"./index-_Yeg93Pq.js";import"./KeyCode-lh1qUinJ.js";import"./PurePanel-DxMQ-kIt.js";import"./index-DjYQmJJm.js";import"./Overflow-Cc1AujC4.js";import"./collapse-BbEVqHco.js";import"./move-vXhFOdPM.js";import"./FileAttachment-BeztbA9i.js";import"./FileTypeBadge-CFNmaWvf.js";import"./Upload-BF2e6p4s.js";import"./fade-QBHIqkpt.js";import"./CheckCircleFilled-rnyXqEmV.js";import"./CheckOutlined-D58qaGdD.js";import"./CloseOutlined-ep7nLCB3.js";import"./useForceUpdate-CR_OuYun.js";import"./useLocale-DdUAtv3I.js";import"./blockCatalog-bYWPuhjk.js";import"./InputSearch-wlOJ03CK.js";import"./Select.module-L1SttIPx.js";import"./index-CGqq694D.js";import"./useShowArrow-U_WplXvX.js";import"./useIcons-B8M-dreV.js";import"./Table-4gzmzwli.js";import"./iconUtil-B0cpMk7v.js";import"./useBreakpoint-DWzRwPeg.js";import"./extendsObject-78o_rR5W.js";import"./InfoTag-DnH5-QU6.js";const Lt={title:"UI Kit/Редактор/BlockEditor",id:"ui-kit-blockeditor",tags:["autodocs"],args:{kind:"news"},argTypes:{kind:{control:"inline-radio",options:["news","material","course"],description:"Тип контента — какие блоки есть в меню «+» (у новостей нет SCORM)"}},parameters:{docs:{story:{height:"720px"},description:{component:"Редактор текста новости, материала, курса — из блоков, как в Notion. Блоки сразу выглядят как на странице (раскладка `MaterialContent`): автор видит то же, что увидит читатель. Шрифтов, цветов и выравнивания у автора нет — только блоки и жирный / курсив / ссылка.\n\n| Проп | Значения |\n| --- | --- |\n| `kind` | `news` · `material` · `course` — набор блоков в меню |\n| `blocks` | массив `EditorBlock` — значение редактора; пустой редактор — `emptyBlocks()` |\n| `onChange` | новый массив блоков после каждой правки |\n| `uploadFile` | `(file, { kind, onProgress }) => Promise<ссылка>` — загрузка фото, видео и файлов на сервер; не передана — файл из памяти браузера |\n\n**Как работает**\n- Наведение на блок — слева «+» и ручка ⋮⋮. «+» — меню блоков (`BlockMenu`), новый блок встаёт ниже. Ручку можно тянуть — синяя линия показывает, куда встанет блок; нажатие на ручку — меню блока: превратить текст в подзаголовок, список, цитату; у инфоблока — другой цвет; у фото — заменить; у «текст + фото» — поменять местами; дублировать, вверх, вниз, удалить.\n- «/» в пустой строке — то же меню с поиском, выбранный блок встаёт на место строки.\n- Enter делит абзац, Backspace в начале строки склеивает её с предыдущей, в пустом блоке — удаляет блок. В списке Enter на пустом пункте — выход из списка.\n- Сокращения в начале строки: `## ` — H2, `### ` — H3, `- ` — список, `1. ` — нумерованный, `> ` — цитата, `---` — разделитель.\n- Выделили текст — над ним тёмная панель: жирный, курсив, ссылка.\n- Фото, видео, «текст + фото», файлы — выбор в меню сразу открывает окно выбора (отменили — блока нет). Фото и видео можно отметить несколько — каждое встанет своим блоком подряд; файлы — все в один блок. Не подошёл — область загрузки с причиной. «Заменить фото» в меню блока — тоже сразу окно выбора.\n- Файлы — плашками, под ними ссылка «Загрузить ещё» (сразу окно выбора). «Файлы» из меню у блока с файлами или в пустой строке сразу под ним, а также файлы, перетащенные из папки на блок, дописываются в тот же список — второй блок не появляется.\n- Таблица — таблица кита, во всю ширину блока (текст — не шире `--editor-text-max`, если страница его задала). Заголовки и ячейки правятся прямо в тексте, как в Notion: Enter — к ячейке ниже, Shift+Enter — перенос, Tab — к следующей. При наведении — ручка ⋮⋮ (тянуть — переставить строку или столбец) и корзина. Ширина столбца — не уже 160; тянуть за правый край заголовка можно и уже (до 64), двойной щелчок — как было; не помещается — прокрутка вбок. Под таблицей — «+ Добавить строку / столбец». Пустые строки на страницу не попадают.\n- Вставка таблицы — скопированная из чата ИИ, Excel или Google Таблиц (HTML, Markdown, с табуляцией) сразу становится блоком «Таблица».\n- Щелчок под последним блоком — новая строка. В «текст + фото» и раскрывающемся блоке Enter на пустой строке — выход на строку ниже.\n- Вставка из буфера — простым текстом: чужие шрифты и цвета не попадают.\n\n**Загрузка на сервер** — `uploadFile`: редактор отдаёт файл, приложение отправляет его на свой сервер и возвращает постоянную ссылку — она и попадает в блок. `kind` — `image` / `video` / `file`; `onProgress(0…100)` — по желанию, для полосы. Пока грузится — у фото и видео на месте картинки имя и полоса с процентами, у файла — плашка с полосой и «Отменить»; ошибка (Promise отклонён) — «Не удалось загрузить» у фото, красная плашка у файла. Формат и размер редактор проверяет сам, до отправки. Пример — «Загрузка на сервер».\n\n**Место:** ручки висят слева от текста — контейнеру нужно 56px свободного поля слева.\n\nЗначение для сервера и страницы — `toContentBlocks(blocks)` (пустые блоки пропускаются), текст для карточки по умолчанию — `firstParagraph(blocks)`."}}}},d={maxWidth:760,padding:"8px 0 320px 64px"},s={render:({kind:o})=>{const[t,e]=c.useState(j);return r.jsx("div",{style:d,children:r.jsx(m,{kind:o,blocks:t,onChange:e})})}},w=()=>[{id:n(),type:"paragraph",html:"С 1 ноября на всех объектах компании вводится <b>цифровая приёмка скрытых работ</b>. Акты подписываются в приложении прямо на площадке — без бумажных копий."},{id:n(),type:"h2",html:"Что меняется"},{id:n(),type:"list",html:"<li>Фотофиксация — обязательна для каждого акта</li><li>Подпись — электронная, с телефона</li><li>Замечания уходят подрядчику сразу</li>"},{id:n(),type:"callout",tone:"info",html:"Обучение для инженеров технадзора — 28 октября, запись у руководителя участка."},{id:n(),type:"image",src:T,caption:"Приёмка скрытых работ на объекте «Север»"},{id:n(),type:"quote",html:"Бумага терялась, фото не совпадали с актами. Теперь всё в одном месте. — <i>Илья Обломов, главный инженер</i>"},{id:n(),type:"toggle",title:"Что делать, если нет связи на площадке?",html:"Акт сохраняется в телефоне и уходит сам, когда появится сеть."},{id:n(),type:"button",label:"Открыть инструкцию",href:"https://example.com"}],a={render:({kind:o})=>{const[t,e]=c.useState(w);return r.jsx("div",{style:d,children:r.jsx(m,{kind:o,blocks:t,onChange:e})})}},l={name:"Редактор и страница рядом",parameters:{docs:{story:{height:"900px"}}},render:({kind:o})=>{const[t,e]=c.useState(w);return r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,padding:"8px 0 320px 64px"},children:[r.jsx(m,{kind:o,blocks:t,onChange:e}),r.jsx(I,{blocks:F(t)})]})}},U=(o,{onProgress:t})=>new Promise((e,M)=>{let i=0;const u=setInterval(()=>{i+=10,t==null||t(i),o.name.toLowerCase().includes("ошибка")&&i>=50?(clearInterval(u),M(new Error("Сервер не принял файл"))):i>=100&&(clearInterval(u),e(URL.createObjectURL(o)))},200)}),p={name:"Загрузка на сервер",render:({kind:o})=>{const[t,e]=c.useState(j);return r.jsx("div",{style:d,children:r.jsx(m,{kind:o,blocks:t,onChange:e,uploadFile:U})})}},Rt=["Пустой","Заполненный","СПросмотром","ЗагрузкаНаСервер"];var k,g,B;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
