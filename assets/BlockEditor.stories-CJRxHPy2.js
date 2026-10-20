import{r as a,j as o}from"./iframe-DATgQ8vN.js";import{B as m,e as E,t as f,n as t}from"./BlockEditor-CdE3D5sH.js";import{M as C}from"./MaterialContent-LclLMil7.js";import{n as S}from"./news-3-CbYQUwuB.js";import"./preload-helper-C1FmrZbK.js";import"./Input-Bsl1c8Hf.js";import"./Spinner-DyrHG-Mp.js";import"./InputChrome-DJBp6cOC.js";import"./context-DazkKd-s.js";import"./useTruncated-N2gxnK_F.js";import"./index-CeHB25lk.js";import"./ContextIsolator-CeJsXOdt.js";import"./index-DfDrvDPo.js";import"./index-dfHOxVsB.js";import"./CloseCircleFilled-BYZZ-KZf.js";import"./useCSSVarCls-DaoFEgPu.js";import"./pickAttrs-BISx_BUG.js";import"./EyeOutlined-B_Mfs_gp.js";import"./Callout-B66freDR.js";import"./DropdownMenu-Da1eEZTm.js";import"./Scrollbar-Z2aviri_.js";import"./DropdownMenuItem-Cp_mkPe0.js";import"./Radio-B1KVfDtA.js";import"./index-CYvuY-hE.js";import"./useForm-B0WsWgFz.js";import"./index-CSlfq-xb.js";import"./index-B8sw4QUr.js";import"./KeyCode-lh1qUinJ.js";import"./PurePanel-AqUBzLFI.js";import"./index-DsieWkth.js";import"./Overflow-BA8TJL25.js";import"./collapse-BbEVqHco.js";import"./move-WRaalpZN.js";import"./FileAttachment-bY1suigF.js";import"./FileTypeBadge-DxyUSkby.js";import"./ProgressBar-yCca9ueZ.js";import"./Upload-CPjpx1-v.js";import"./fade-BqYa48kl.js";import"./CheckCircleFilled-yEhrpBVR.js";import"./CheckOutlined-D6ReE52J.js";import"./CloseOutlined-O5V0BNFK.js";import"./useForceUpdate-C5n8wFCc.js";import"./useLocale-DXJzhzVt.js";import"./blockCatalog-BbqJ_XJ-.js";import"./InputSearch-CKyeMEQp.js";import"./Select.module-L1SttIPx.js";import"./index-FbqN53M5.js";import"./useShowArrow-x4dDGuQe.js";import"./useIcons-DE0ArMNU.js";import"./Table-DggoQ0Tu.js";import"./iconUtil-Z9vp2UZH.js";import"./useBreakpoint-mInezEDo.js";import"./extendsObject-78o_rR5W.js";import"./InfoTag-epD7JVfr.js";const jt={title:"UI Kit/Редактор/BlockEditor",id:"ui-kit-blockeditor",tags:["autodocs"],args:{kind:"news"},argTypes:{kind:{control:"inline-radio",options:["news","material","course"],description:"Тип контента — какие блоки есть в меню «+» (у новостей нет SCORM)"}},parameters:{docs:{story:{height:"720px"},description:{component:"Редактор текста новости, материала, курса — из блоков, как в Notion. Блоки сразу выглядят как на странице (раскладка `MaterialContent`): автор видит то же, что увидит читатель. Шрифтов, цветов и выравнивания у автора нет — только блоки и жирный / курсив / ссылка.\n\n| Проп | Значения |\n| --- | --- |\n| `kind` | `news` · `material` · `course` — набор блоков в меню |\n| `blocks` | массив `EditorBlock` — значение редактора; пустой редактор — `emptyBlocks()` |\n| `onChange` | новый массив блоков после каждой правки |\n\n**Как работает**\n- Наведение на блок — слева «+» и ручка ⋮⋮. «+» — меню блоков (`BlockMenu`), новый блок встаёт ниже. Ручку можно тянуть — синяя линия показывает, куда встанет блок; нажатие на ручку — меню блока: превратить текст в подзаголовок, список, цитату; у инфоблока — другой цвет; у фото — заменить; у «текст + фото» — поменять местами; дублировать, вверх, вниз, удалить.\n- «/» в пустой строке — то же меню с поиском, выбранный блок встаёт на место строки.\n- Enter делит абзац, Backspace в начале строки склеивает её с предыдущей, в пустом блоке — удаляет блок. В списке Enter на пустом пункте — выход из списка.\n- Сокращения в начале строки: `## ` — H2, `### ` — H3, `- ` — список, `1. ` — нумерованный, `> ` — цитата, `---` — разделитель.\n- Выделили текст — над ним тёмная панель: жирный, курсив, ссылка.\n- Фото, видео, «текст + фото», файлы — выбор в меню сразу открывает окно выбора (отменили — блока нет). Фото и видео можно отметить несколько — каждое встанет своим блоком подряд; файлы — все в один блок. Не подошёл — область загрузки с причиной. «Заменить фото» в меню блока — тоже сразу окно выбора.\n- Файлы — плашками, под ними ссылка «Загрузить ещё» (сразу окно выбора). «Файлы» из меню у блока с файлами или в пустой строке сразу под ним, а также файлы, перетащенные из папки на блок, дописываются в тот же список — второй блок не появляется.\n- Таблица — таблица кита, во всю ширину блока (текст — не шире `--editor-text-max`, если страница его задала). Заголовки и ячейки правятся прямо в тексте, как в Notion: Enter — к ячейке ниже, Shift+Enter — перенос, Tab — к следующей. При наведении — ручка ⋮⋮ (тянуть — переставить строку или столбец) и корзина. Ширина столбца — не уже 160; тянуть за правый край заголовка можно и уже (до 64), двойной щелчок — как было; не помещается — прокрутка вбок. Под таблицей — «+ Добавить строку / столбец». Пустые строки на страницу не попадают.\n- Вставка таблицы — скопированная из чата ИИ, Excel или Google Таблиц (HTML, Markdown, с табуляцией) сразу становится блоком «Таблица».\n- Щелчок под последним блоком — новая строка. В «текст + фото» и раскрывающемся блоке Enter на пустой строке — выход на строку ниже.\n- Вставка из буфера — простым текстом: чужие шрифты и цвета не попадают.\n\n**Место:** ручки висят слева от текста — контейнеру нужно 56px свободного поля слева.\n\nЗначение для сервера и страницы — `toContentBlocks(blocks)` (пустые блоки пропускаются), текст для карточки по умолчанию — `firstParagraph(blocks)`."}}}},b={maxWidth:760,padding:"8px 0 320px 64px"},n={render:({kind:e})=>{const[r,i]=a.useState(E);return o.jsx("div",{style:b,children:o.jsx(m,{kind:e,blocks:r,onChange:i})})}},y=()=>[{id:t(),type:"paragraph",html:"С 1 ноября на всех объектах компании вводится <b>цифровая приёмка скрытых работ</b>. Акты подписываются в приложении прямо на площадке — без бумажных копий."},{id:t(),type:"h2",html:"Что меняется"},{id:t(),type:"list",html:"<li>Фотофиксация — обязательна для каждого акта</li><li>Подпись — электронная, с телефона</li><li>Замечания уходят подрядчику сразу</li>"},{id:t(),type:"callout",tone:"info",html:"Обучение для инженеров технадзора — 28 октября, запись у руководителя участка."},{id:t(),type:"image",src:S,caption:"Приёмка скрытых работ на объекте «Север»"},{id:t(),type:"quote",html:"Бумага терялась, фото не совпадали с актами. Теперь всё в одном месте. — <i>Илья Обломов, главный инженер</i>"},{id:t(),type:"toggle",title:"Что делать, если нет связи на площадке?",html:"Акт сохраняется в телефоне и уходит сам, когда появится сеть."},{id:t(),type:"button",label:"Открыть инструкцию",href:"https://example.com"}],s={render:({kind:e})=>{const[r,i]=a.useState(y);return o.jsx("div",{style:b,children:o.jsx(m,{kind:e,blocks:r,onChange:i})})}},p={name:"Редактор и страница рядом",parameters:{docs:{story:{height:"900px"}}},render:({kind:e})=>{const[r,i]=a.useState(y);return o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,padding:"8px 0 320px 64px"},children:[o.jsx(m,{kind:e,blocks:r,onChange:i}),o.jsx(C,{blocks:f(r)})]})}},vt=["Пустой","Заполненный","СПросмотром"];var l,c,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
