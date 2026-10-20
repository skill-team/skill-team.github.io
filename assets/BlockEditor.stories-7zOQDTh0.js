import{r as a,j as o}from"./iframe-BFd96KHm.js";import{B as m,e as E,t as f,n as t}from"./BlockEditor-CprT34Ik.js";import{M as C}from"./MaterialContent-L82WnWRP.js";import{n as S}from"./news-3-CbYQUwuB.js";import"./preload-helper-C1FmrZbK.js";import"./Input-C993vLw2.js";import"./Spinner-EIFFJyoN.js";import"./InputChrome-BSiyVpEh.js";import"./context-BWLmWlnn.js";import"./useTruncated-BqF7u7ib.js";import"./index-D72j1uDz.js";import"./ContextIsolator-CfQAkasn.js";import"./index-BlRMKTQl.js";import"./index-FRJeKTdu.js";import"./CloseCircleFilled-BoySjRRf.js";import"./useCSSVarCls-Fz_A80LR.js";import"./pickAttrs-Dl3VOZfP.js";import"./EyeOutlined-BhJKcxe1.js";import"./Callout-BaY2_9ay.js";import"./DropdownMenu-B9NjB5dF.js";import"./Scrollbar-r7VygxA2.js";import"./DropdownMenuItem-4qxiXb0K.js";import"./Radio-B292X7lN.js";import"./index-CNeBUHtQ.js";import"./useForm-Cyvwz6MB.js";import"./index-Did3NbNW.js";import"./index-BLYuZoon.js";import"./KeyCode-lh1qUinJ.js";import"./PurePanel-DltdLcz8.js";import"./index-DmufjSFX.js";import"./Overflow-CrMB_h6p.js";import"./collapse-BbEVqHco.js";import"./move-CITNDSak.js";import"./FileAttachment--PZfAGjp.js";import"./FileTypeBadge-B8MeIvIw.js";import"./ProgressBar-B2XJS4OM.js";import"./Upload-BnzudTVf.js";import"./fade-D86Nm1KY.js";import"./CheckCircleFilled-C7pYr0Bl.js";import"./CheckOutlined-FS8xlgMs.js";import"./CloseOutlined-CeynsCNI.js";import"./useForceUpdate-CtBU4U-n.js";import"./useLocale-C3EajwIt.js";import"./blockCatalog-DBFloAth.js";import"./InputSearch-Dex2gdBJ.js";import"./Select.module-L1SttIPx.js";import"./index-UkvFG8ys.js";import"./useShowArrow-B0nUKOk6.js";import"./useIcons-DhhFghCm.js";import"./Table-DeAH5kQk.js";import"./iconUtil-DD2a_UcY.js";import"./useBreakpoint-DnK7bveh.js";import"./extendsObject-78o_rR5W.js";import"./InfoTag-CNqYZ4Ft.js";const jt={title:"UI Kit/Редактор/BlockEditor",id:"ui-kit-blockeditor",tags:["autodocs"],args:{kind:"news"},argTypes:{kind:{control:"inline-radio",options:["news","material","course"],description:"Тип контента — какие блоки есть в меню «+» (у новостей нет SCORM)"}},parameters:{docs:{story:{height:"720px"},description:{component:"Редактор текста новости, материала, курса — из блоков, как в Notion. Блоки сразу выглядят как на странице (раскладка `MaterialContent`): автор видит то же, что увидит читатель. Шрифтов, цветов и выравнивания у автора нет — только блоки и жирный / курсив / ссылка.\n\n| Проп | Значения |\n| --- | --- |\n| `kind` | `news` · `material` · `course` — набор блоков в меню |\n| `blocks` | массив `EditorBlock` — значение редактора; пустой редактор — `emptyBlocks()` |\n| `onChange` | новый массив блоков после каждой правки |\n\n**Как работает**\n- Наведение на блок — слева «+» и ручка ⋮⋮. «+» — меню блоков (`BlockMenu`), новый блок встаёт ниже. Ручку можно тянуть — синяя линия показывает, куда встанет блок; нажатие на ручку — меню блока: превратить текст в подзаголовок, список, цитату; у инфоблока — другой цвет; у фото — заменить; у «текст + фото» — поменять местами; дублировать, вверх, вниз, удалить.\n- «/» в пустой строке — то же меню с поиском, выбранный блок встаёт на место строки.\n- Enter делит абзац, Backspace в начале строки склеивает её с предыдущей, в пустом блоке — удаляет блок. В списке Enter на пустом пункте — выход из списка.\n- Сокращения в начале строки: `## ` — H2, `### ` — H3, `- ` — список, `1. ` — нумерованный, `> ` — цитата, `---` — разделитель.\n- Выделили текст — над ним тёмная панель: жирный, курсив, ссылка.\n- Фото, видео, «текст + фото», файлы — выбор в меню сразу открывает окно выбора (отменили — блока нет). Фото и видео можно отметить несколько — каждое встанет своим блоком подряд; файлы — все в один блок. Не подошёл — область загрузки с причиной. «Заменить фото» в меню блока — тоже сразу окно выбора.\n- Файлы — плашками, под ними ссылка «Загрузить ещё» (сразу окно выбора). «Файлы» из меню у блока с файлами или в пустой строке сразу под ним, а также файлы, перетащенные из папки на блок, дописываются в тот же список — второй блок не появляется.\n- Таблица — таблица кита, во всю ширину блока (текст — не шире `--editor-text-max`, если страница его задала). Заголовки и ячейки правятся прямо в тексте, как в Notion: Enter — к ячейке ниже, Shift+Enter — перенос, Tab — к следующей. При наведении — ручка ⋮⋮ (тянуть — переставить строку или столбец) и корзина. Ширина столбца — не уже 160; тянуть за правый край заголовка можно и уже (до 64), двойной щелчок — как было; не помещается — прокрутка вбок. Под таблицей — «+ Добавить строку / столбец». Пустые строки на страницу не попадают.\n- Вставка таблицы — скопированная из чата ИИ, Excel или Google Таблиц (HTML, Markdown, с табуляцией) сразу становится блоком «Таблица».\n- Щелчок под последним блоком — новая строка. В «текст + фото» и раскрывающемся блоке Enter на пустой строке — выход на строку ниже.\n- Вставка из буфера — простым текстом: чужие шрифты и цвета не попадают.\n\n**Место:** ручки висят слева от текста — контейнеру нужно 56px свободного поля слева.\n\nЗначение для сервера и страницы — `toContentBlocks(blocks)` (пустые блоки пропускаются), текст для карточки по умолчанию — `firstParagraph(blocks)`."}}}},b={maxWidth:760,padding:"8px 0 320px 64px"},n={render:({kind:e})=>{const[r,i]=a.useState(E);return o.jsx("div",{style:b,children:o.jsx(m,{kind:e,blocks:r,onChange:i})})}},y=()=>[{id:t(),type:"paragraph",html:"С 1 ноября на всех объектах компании вводится <b>цифровая приёмка скрытых работ</b>. Акты подписываются в приложении прямо на площадке — без бумажных копий."},{id:t(),type:"h2",html:"Что меняется"},{id:t(),type:"list",html:"<li>Фотофиксация — обязательна для каждого акта</li><li>Подпись — электронная, с телефона</li><li>Замечания уходят подрядчику сразу</li>"},{id:t(),type:"callout",tone:"info",html:"Обучение для инженеров технадзора — 28 октября, запись у руководителя участка."},{id:t(),type:"image",src:S,caption:"Приёмка скрытых работ на объекте «Север»"},{id:t(),type:"quote",html:"Бумага терялась, фото не совпадали с актами. Теперь всё в одном месте. — <i>Илья Обломов, главный инженер</i>"},{id:t(),type:"toggle",title:"Что делать, если нет связи на площадке?",html:"Акт сохраняется в телефоне и уходит сам, когда появится сеть."},{id:t(),type:"button",label:"Открыть инструкцию",href:"https://example.com"}],s={render:({kind:e})=>{const[r,i]=a.useState(y);return o.jsx("div",{style:b,children:o.jsx(m,{kind:e,blocks:r,onChange:i})})}},p={name:"Редактор и страница рядом",parameters:{docs:{story:{height:"900px"}}},render:({kind:e})=>{const[r,i]=a.useState(y);return o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,padding:"8px 0 320px 64px"},children:[o.jsx(m,{kind:e,blocks:r,onChange:i}),o.jsx(C,{blocks:f(r)})]})}},vt=["Пустой","Заполненный","СПросмотром"];var l,c,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: ({
    kind
  }) => {
    const [blocks, setBlocks] = useState<EditorBlock[]>(emptyBlocks);
    return <div style={frame}>
        <BlockEditor kind={kind} blocks={blocks} onChange={setBlocks} />
      </div>;
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var k,u,g;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: ({
    kind
  }) => {
    const [blocks, setBlocks] = useState<EditorBlock[]>(filled);
    return <div style={frame}>
        <BlockEditor kind={kind} blocks={blocks} onChange={setBlocks} />
      </div>;
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,h,B;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(B=(h=p.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};export{vt as __namedExportsOrder,jt as default,s as Заполненный,n as Пустой,p as СПросмотром};
