import{j as a,r as l}from"./iframe-DCXgeGQz.js";const d=`/*
 * Источник: Figma Setl, node 1128:44040
 * (Setl Академия / Главная), get_variable_defs — реальные значения.
 * Подробности и что НЕ вошло сюда — tokens/colors.md, tokens/typography.md,
 * tokens/spacing.md.
 *
 * Шрифт — один, Montserrat (Google Fonts, свободная лицензия OFL; подключается ссылкой в
 * index.html и .storybook/preview-head.html). Шкала — tokens/typography.md.
 *
 * Цвета — два яруса, не путать при использовании в компонентах:
 *  1. PRIMITIVES — сырая палитра как в Figma (red-main, gray-150...),
 *     значения без роли. Сюда напрямую в компонентах лезть НЕ надо.
 *  2. SEMANTIC — именованные по роли (surface/background/text-*...),
 *     собраны из примитивов. Компоненты берут цвет ОТСЮДА — если роли
 *     ещё нет, сначала завести её здесь, не тянуть примитив напрямую
 *     (то же правило «один источник», что и для остального кита).
 */

:root {
  /* ============================= PRIMITIVES ============================= */

  /* --- red (Сетл Групп, НЕ путать с синим праймари Сетл Тех/Практис) --- */
  --red-main: #cf3a40; /* до 2026-10-06 — #ed1c24 */
  --red-800: #8e1116; /* источник: Button Link-red, State=Active (node 169:10863) */
  --red-700: #b2151b;
  --red-400: #f8a4a7;
  --red-300: #fabbbd;
  --red-200: #fbd2d3;
  --red-150: #fcddde;
  --red-100: #fde8e9;
  --red-50: #fef4f4;

  /* --- black / gray --- */
  --black-main: #282828;
  --black-dark: #141b34; /* отдельный от black-main, не смешивать */
  --black-500: #7e7e7e;
  --black-400: #a9a9a9; /* источник: Input, node 809:126305 (иконка info) */
  --black-310: #e5e5e5;
  --black-300: #eeeeee;
  --black-200: #f6f6f6;
  --white: #ffffff;

  --gray-100: #fbfbfb;
  --gray-150: #f4f3f3;
  --gray-200: #e9e8e7;
  --gray-300: #dedcdc; /* источник: Input, node 809:126305 (рамка по умолчанию) */
  --gray-400: #d3d1d0;
  --gray-600: #bdb9b8;
  --gray-650: #a7a2a1;
  --gray-700: #646060;
  --gray-800: #524e4e;
  --gray-main: #918b89;
  --beige-100: #f5efe6; /* фон инфоблока «Сообщество» на Главной (Figma 2104:28534), без Figma-переменной */

  /* --- blue — есть на экране, но под вопросом как бренд-акцент, см. colors.md --- */
  --blue-accent: #3c83f6;
  --blue-100: #f7faff;
  --blue-200: #e8f0fe;
  --blue-300: #eff5fe;
  --blue-400: #b1cdfb;
  --blue-550: #73a6f9;
  --blue-700: #1a68e8;

  /* --- прочее --- */
  --green-150: #e0f6cc; /* дорожка кольца прогресса (Figma, плашка «50%») */
  --green-300: #ebfddc; /* green/300 — фон плашки прогресса */
  --green-600: #84c948;
  --green-800: #599c1e; /* text/success-primary — текст и дуга плашки прогресса */
  --green-button: #72bf2f; /* button/success-primary-default — ОТДЕЛЬНЫЙ примитив от green-600, не то же самое */
  --yellow-rating: #fadb14;
  --orange-main: #f99217; /* источник: Bulb type=orange (node 284:63397) */
  --yellow-main: #f5a300; /* не из Figma: жёлтый, сдвинутый к оранжевому — звезда «Избранное» в шапке
     (2026-10-06: «жёлтой, но чтобы не сливалась с фоном при ховере»). Контраст с
     подложкой наведения gray-200 — 1.7 (у --yellow-rating — 1.13, почти не видно) */
  --danger-primary: #d33831; /* text/danger-primary — ОТЛИЧАЕТСЯ от --red-main */

  /* ============================== SEMANTIC =============================== */
  /* Роль → примитив. Компоненты используют только это. */

  --color-surface: var(--white);        /* bg/white-page-full — сайдбар/карточки/шапка/(будущие) модалки/дропдауны */
  --color-background: var(--black-200); /* фон рабочей области под поверхностями — подтверждено дизайнером на глаз 2026-09-14, не отдельная Figma-переменная */

  --color-text-primary: var(--black-main);
  --color-text-secondary: var(--black-500);
  --color-text-on-color: var(--white);   /* текст поверх цветной/тёмной подложки (кнопки и т.п.) */
  --color-text-danger: var(--danger-primary);

  --color-success: var(--green-600);       /* прогресс-бар и т.п. */
  --color-button-success: var(--green-button); /* заливка зелёной кнопки — не путать с --color-success */
  --color-rating: var(--yellow-rating);

  /* ================= MENU (компонентный слой — только Sidebar/MenuItem/
     MenuGroup/MenuSectionLabel, см. components/navigation/Sidebar/) =====
     Третий, ещё более узкий ярус поверх SEMANTIC — по группам, как
     попросил дизайнер 2026-09-14: иконки/текст/поверхности меню
     отдельно, а не общими text-primary/surface на всё подряд. Иконка/
     точка/стрелка красятся через \`color: inherit\` от текста строки (см.
     MenuItem.module.css) — поэтому --menu-icon-* сейчас зеркалит
     --menu-text-* один в один. Это осознанно два разных токена, не один:
     если цвет иконки когда-нибудь должен будет отличаться от текста,
     трогать только --menu-icon-*, не текст. */

  --menu-text-default: var(--gray-800);
  --menu-text-hover: var(--gray-800);      /* ховер не меняет цвет текста, только --menu-surface-hover */
  --menu-text-selected: var(--red-main);
  --menu-text-disabled: var(--gray-400);
  --menu-text-section-label: var(--gray-600); /* MenuSectionLabel, напр. «УПРАВЛЕНИЕ» */

  --menu-icon-default: var(--gray-800);
  --menu-icon-hover: var(--gray-800);
  --menu-icon-selected: var(--red-main);
  --menu-icon-disabled: var(--gray-400);

  --menu-surface-panel: var(--color-surface); /* фон самой панели сайдбара */
  --menu-surface-hover: var(--gray-150);   /* было gray-100 — с 2026-09-14 это цвет БЫВШЕГО selected, дизайнер попросил поменять местами */
  --menu-surface-selected: transparent;    /* с 2026-09-14 без подложки (проба прижилась, финал) — раньше был gray-150, см. Sidebar.md */
  --menu-surface-divider: var(--gray-200);

  /* ================ INPUT (компонентный слой — только
     components/atoms/Input/, см. Input.md) ===================
     Источник: Figma Setl, node 809:126305
     («Mini kit» → input), get_variable_defs по каждому Status +
     get_design_context на Type=Behind/Error (809:126511) для layout/radius
     (radius Figma-переменной не является, снят по факту из кода — 24px). */

  --input-border-default: var(--gray-300);
  --input-border-hover: var(--gray-400);
  --input-border-focus: var(--gray-main);
  --input-border-error: var(--red-main); /* тот же красный, что primary-red кнопки */
  --input-border-disabled: var(--gray-300); /* подтверждено — не отдельное значение от default */

  --input-bg: var(--white);
  --input-bg-disabled: var(--gray-150);

  --input-text: var(--gray-800); /* введённый текст, включая disabled+filled */
  --input-text-placeholder: var(--gray-600);
  --input-text-disabled-empty: var(--gray-400); /* пустой disabled инпут — отдельный от текста с содержимым */
  --input-text-error: var(--red-main); /* текст сообщения об ошибке под полем */

  --input-label: var(--black-500);
  /* ВАЖНО: отдельный токен от --red-main (#cf3a40, бренд-красный Сетл) — в самой Figma
     звёздочка обязательности сидит на library-примитиве "red/main" (строчными) #e55b54,
     это НЕ опечатка/не наша унификация. Тот же самый цвет под тем же именем встречается в
     praktis-ui-kit (см. их theme/tokens.ts, inputColors.borderError) — похоже на общий
     примитив шаблонной библиотеки, а не осознанный бренд-выбор кого-то из проектов. */
  --input-required-mark: #e55b54;

  --input-radius: 24px; /* не Figma-переменная — снято из get_design_context */
  --input-height: 42px; /* единственный снятый размер — в отличие от Button, доп. размеров в Figma нет */
  --input-padding-inline: var(--space-4); /* 16px = Size/Size */
  --input-label-gap: var(--space-1); /* 4px = Size/SizeXXS — между лейблом/полем/сообщением об ошибке */

  /* ============ ПОЛЯ: общие части семейства (2026-09-30) ============
     Select, MultiSelect, DatePicker, InputSearch, TextArea — перенесены из praktis-ui-kit и
     переведены на Setl. Рамки/фон/текст полей — те же --input-*, что у Input, здесь только то,
     чего у Input нет. Figma Setl для этих компонентов НЕ снималась (MCP Figma был отключён) —
     значения подобраны из палитры Setl по аналогии с Input и меню, сверить с макетом. */

  --field-icon: var(--black-400);        /* шеврон, календарь, крестик очистки — в покое (как у praktis #a9a9a9 = black/400) */
  --field-icon-active: var(--black-500); /* шеврон открытого списка */

  /* Выпадающий список (DropdownMenu, списки Select/MultiSelect). Не --menu-*: тот — боковое меню */
  --dropdown-bg: var(--color-surface);
  --dropdown-radius: var(--radius-l);    /* 16 — как пункты бокового меню */
  --dropdown-item-radius: var(--radius-m); /* 12 */
  --dropdown-shadow: var(--shadow-card);
  --dropdown-item-text: var(--gray-800);
  --dropdown-item-description: var(--black-500);
  --dropdown-item-hover-bg: var(--gray-150);       /* тот же серый, что ховер бокового меню */
  --dropdown-item-selected-bg: var(--red-50);
  --dropdown-item-selected-hover-bg: var(--red-100);
  --dropdown-item-selected-text: var(--red-main);
  --dropdown-item-disabled-text: var(--gray-400);
  --dropdown-item-disabled-selected-bg: var(--gray-100);
  --dropdown-separator-line: var(--gray-200);
  --dropdown-separator-text: var(--black-500);

  /* Тег выбранного значения в MultiSelect */
  --tag-bg: var(--gray-150);
  --tag-bg-hover: var(--gray-200);
  --tag-bg-disabled: var(--color-surface); /* в недоступном поле фон поля = --tag-bg, поэтому белый */
  --tag-text: var(--gray-800);
  --tag-remove: var(--black-400);
  --tag-remove-hover: var(--gray-800);

  /* Уровни обучения — сегменты прогресс-бара (Figma 1854:141116, цвета колбасок): подложка + полоски.
     Номер — порядковый уровень (1 — первый). Подложка — оттенок «400» Figma, полоски — «350».
     ВНИМАНИЕ: Figma red/400 здесь #f9c5c2 — не то же, что --red-400 (#f8a4a7) с экрана «Главная»;
     поэтому цвета уровней — свои токены, а не примитивы. Фиолетовый — без переменной в Figma. */
  --level-1-fill: #b1cdfb;   /* blue/400 */
  --level-1-stripe: #d8e6fd; /* blue/350 */
  --level-2-fill: #bbe199;   /* green/400 */
  --level-2-stripe: #cbeead; /* green/350 */
  --level-3-fill: #fee699;   /* жёлтый (из картинки полосок) */
  --level-3-stripe: #fff9cc;
  --level-4-fill: #fecc99;   /* orange/400 */
  --level-4-stripe: #ffe5cc; /* orange/350 */
  --level-5-fill: #f9c5c2;   /* red/400 (уровневый) */
  --level-5-stripe: #fad8d8; /* red/350 */
  --level-6-fill: #c1a3ff;   /* фиолетовый (из картинки полосок) */
  --level-6-stripe: #d5c0ff;
  --level-track: var(--gray-150); /* незаполненная часть сегмента */

  --color-text-accent: var(--blue-accent); /* text/accent — «До след. уровня 300» */

  /* Правая панель: карточка сотрудника и достижения (Figma 2073:28130) */
  --panel-title: var(--gray-800);      /* ФИО, «Достижения» */
  --panel-text: var(--gray-700);       /* уровень, «Баллы», значения, подписи */
  --panel-level-count: var(--gray-800); /* «2 из 6» — в макете темнее подписей */
  --badge-frame-fill: var(--gray-100); /* шестиугольник под иконкой ачивки */
  --badge-frame-stroke: var(--color-surface);

  /* Плашка-метка на карточке (InfoTag, Figma «Tag» в Course card 2079:151010) */
  --info-tag-blue-bg: var(--blue-300);        /* в Figma blue/200 #eff5fe — у нас это --blue-300 */
  --info-tag-blue-text: var(--color-text-accent);
  --info-tag-green-bg: var(--green-300);
  --info-tag-green-text: var(--green-800);
  --info-tag-green-track: var(--green-150);   /* незаполненная часть кольца ProgressRing */

  /* Карточка курса (CourseCard, Figma 2079:151010) */
  --course-card-bg: var(--color-surface);
  /* Без обводки — лёгкая тень (в макете обводка #e7e5e4; 2026-10-06: «убрать обводку, оставить тень») */
  --course-card-shadow: var(--shadow-card);
  --course-card-shadow-hover: 0 8px 20px rgba(40, 40, 40, 0.1), 0 2px 4px rgba(40, 40, 40, 0.06);
  --course-card-title: var(--gray-700);

  /* Кнопка «Избранное» на карточке (FavoriteButton) — подложка как у кнопок шапки */
  --favorite-bg: var(--color-surface);
  --favorite-bg-hover: var(--header-button-hover);
  --favorite-bg-press: var(--header-button-press);
  --favorite-icon: var(--gray-650);
  --favorite-icon-active: var(--yellow-main);  /* тот же амбер, что звезда «Избранное» в шапке */

  /* Реакции под новостью (ReactionButton, Figma «Reactions» в News card 2115:143406) */
  --reaction-bg: var(--gray-150);
  --reaction-bg-hover: var(--gray-200);           /* покой уже gray-150 — наведение на шаг темнее */
  --reaction-bg-press: var(--header-button-press); /* gray-300, как нажатие кнопок шапки */
  --reaction-icon: var(--gray-650);
  --reaction-count: var(--gray-main);
  --reaction-active: var(--red-main);             /* лайк — праймари красный */

  /* Карточка новости (NewsCard, Figma 2115:143406) */
  --news-card-text: var(--gray-800);
  --news-card-date: var(--gray-main); /* как «03 — РЕЙТИНГ» (--banner-overline-strong) */

  /* Заголовок блока — счётчик «(4)» после названия */
  --section-count: var(--gray-main);

  /* Инфоблоки Главной (Figma 2104:28532) */
  --banner-warm-bg: var(--beige-100);       /* «Сообщество» */
  --banner-overline: var(--gray-650);       /* «01 — СООБЩЕСТВО» на бежевом */
  --banner-overline-strong: var(--gray-main); /* «03 — РЕЙТИНГ» на белом */
  --banner-text: var(--gray-800);
  --banner-text-on-photo: var(--white);
  --banner-pill-bg: var(--gray-150);        /* «Баллы» */
  --banner-pill-text: var(--gray-700);
  --banner-accent: var(--red-main);         /* места 1–3, баллы */
  --banner-star: var(--yellow-main);        /* звезда у мест 1–3 — как «Избранное» в шапке */

  /* Шапка */
  --header-favorite-icon: var(--yellow-main); /* звезда «Избранное» */
  --header-button-hover: var(--menu-surface-hover); /* наведение — как у пунктов меню (gray-150; в макете gray-200) */
  --header-button-press: var(--gray-300);           /* нажатие — Figma 284:60878, Status=Press */

  /* Счётчик Bulb (Figma 284:63390) — пять цветов */
  --bulb-black: var(--gray-800);
  --bulb-red: var(--red-main);
  --bulb-blue: var(--blue-accent);
  --bulb-green: var(--green-button); /* green/main #72bf2f */
  --bulb-orange: var(--orange-main);

  /* Спиннер загрузки поля */
  --spinner-track: var(--red-200);
  --spinner-arc: var(--red-main);

  /* Полоса прокрутки (Scrollbar) */
  --scrollbar-track: var(--black-200);
  --scrollbar-thumb: var(--black-310);

  /* Чекбокс и радио (метки в пунктах списка) — рамка как у поля, при disabled светлее */
  --control-border-disabled: var(--gray-300);
  --control-mark-disabled: var(--black-400);

  /* Пустой список (EmptyState) */
  --empty-icon: var(--gray-600);
  --empty-title: var(--color-text-primary);
  --empty-description: var(--color-text-secondary);

  /* --- spacing (см. tokens/spacing.md; соответствуют Figma Size/* —
     SizeXXS/SizeXS/SizeXM/Size/SizeMD, кроме space-5: у 20px нет именованной
     Figma-переменной, снято по факту с макета) --- */
  --space-1: 4px;   /* Size/SizeXXS */
  --space-2: 8px;   /* Size/SizeXS */
  --space-3: 12px;  /* Size/SizeXM */
  --space-4: 16px;  /* Size/Size */
  --space-5: 20px;  /* без именованной Figma-переменной */
  --space-6: 24px;  /* Size/SizeMD */

  /* --- radii --- */
  --radius-m: 12px; /* BorderRadius-M — из Figma get_variable_defs */
  --radius-l: 16px; /* радиус пунктов меню — подтверждено дизайнером напрямую 2026-09-14, не из get_variable_defs */
  --radius-xl: 30px; /* панель меню (сайдбар) и большие блоки страницы (Surface) — подтверждено дизайнером
                        2026-09-14 и 2026-10-06 (в макете блоков было 40), не из get_variable_defs */

  /* --- shadow --- */
  --shadow-card: 0 2px 4px rgba(0, 0, 0, 0.08), 0 -8px 8px rgba(0, 0, 0, 0.02);
  /* Ховер-подъём кнопок с заливкой — портировано с Praktis Site (.btn-accent:hover,
     styles.css:141-145), там же offset/blur/spread (0 14px 28px), только цвет
     заменён на 522A22 10% по просьбе дизайнера (был rgba(60,131,246,.32) — их accent-синий). */
  --shadow-button-hover: 0 14px 28px rgba(82, 42, 34, 0.1);

  /* --- typography: шрифт — один, Montserrat (решение дизайнера 2026-10-06; раньше в меню, полях,
     списках и шапке был TT Commons Pro Expanded — убран; сами файлы TT Commons Pro установлены
     в системе и в кит не подключались никогда) --- */
  --font-family-body: "Montserrat", "Arial", sans-serif;

  /* --- typography: шкала (2026-10-06 — сведена из дублей, см. typography.md) ---
     Заголовки — h2…h5, текст — p1…p3 (обычный текст — всегда p), кнопки и метки — button-*,
     мелкие подписи — caption-*. */
  --text-h2-size: 24px;  --text-h2-weight: 700;  --text-h2-line-height: 1.2;  /* Bold — «Уже 1 240+», «Топ-10 Академии», пустой список (большой) */
  --text-h3-size: 20px;  --text-h3-weight: 600;  --text-h3-line-height: 1.2;  /* SemiBold — заголовки блоков, ФИО, уровень, баллы, название курса */
  --text-h4-size: 18px;  --text-h4-weight: 600;  --text-h4-line-height: 1.2;  /* SemiBold — заголовок страницы в шапке */
  --text-h5-size: 16px;  --text-h5-weight: 600;  --text-h5-line-height: 1.2;  /* SemiBold — пункты меню, название новости, «48 курсов» */
  --text-p1-size: 18px;  --text-p1-weight: 400;  --text-p1-line-height: 1.2;  /* Regular — крупный поиск */
  --text-p2-size: 16px;  --text-p2-weight: 400;  --text-p2-line-height: 1.2;  /* Regular — текст в полях, пункты списков, «Баллы» */
  --text-p3-size: 14px;  --text-p3-weight: 400;  --text-p3-line-height: 1.2;  /* Regular — лейблы и ошибки полей, дата и текст новости, подписи */
  --text-lead-size: 14px; --text-lead-weight: 600; --text-lead-line-height: 1.4; /* SemiBold — подзаголовок на картинке */
  --text-button-medium-size: 16px; --text-button-medium-weight: 500; --text-button-medium-line-height: 1;   /* Medium — кнопки, ссылки, строки рейтинга */
  --text-button-small-size: 14px;  --text-button-small-weight: 500;  --text-button-small-line-height: 1.2; /* Medium — маленькие кнопки, кнопки шапки, плашки на карточках */
  --text-caption-medium-size: 12px; --text-caption-medium-weight: 600; --text-caption-medium-line-height: 1.2; /* SemiBold — подписи разделов меню */
  --text-caption-small-size: 10px;  --text-caption-small-weight: 600;  --text-caption-small-line-height: 1.2; /* SemiBold — счётчик Bulb, плашка «Баллы», надзаголовок «01 — СООБЩЕСТВО» (там прописными, разрядка 1px) */
}
`,u=d.split(`
`).flatMap(e=>{const n=e.match(/^\s*(--[\w-]+):\s*([^;]+);\s*(?:\/\*\s*(.*?)\s*(?:\*\/)?\s*)?$/);return n?[{name:n[1],raw:n[2].trim(),note:n[3]||void 0}]:[]});function m(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}const i={fontFamily:"system-ui, -apple-system, sans-serif",color:"#282828"};function s({children:e,note:n}){return a.jsxs("div",{style:{...i,margin:"0 0 16px"},children:[a.jsx("h3",{style:{margin:0,fontSize:16,fontWeight:600},children:e}),n&&a.jsx("p",{style:{margin:"4px 0 0",fontSize:13,color:"#7e7e7e",maxWidth:640},children:n})]})}function c({children:e}){return a.jsx("code",{style:{fontFamily:"ui-monospace, Menlo, monospace",fontSize:12},children:e})}function g({text:e,children:n}){const[o,r]=l.useState(!1);return a.jsx("button",{type:"button",title:`Скопировать ${e}`,onClick:()=>{var t;(t=navigator.clipboard)==null||t.writeText(e),r(!0),setTimeout(()=>r(!1),1e3)},style:{all:"unset",...i,cursor:"pointer",fontFamily:"ui-monospace, Menlo, monospace",fontSize:12,fontWeight:600,wordBreak:"break-all"},children:o?"Скопировано":n??e})}s.__docgenInfo={description:"",methods:[],displayName:"SectionHeading",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},note:{required:!1,tsType:{name:"ReactNode"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"Code",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};g.__docgenInfo={description:"Кнопка-подпись: по клику копирует текст в буфер и на секунду пишет «Скопировано».",methods:[],displayName:"CopyLabel",props:{text:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};export{g as C,s as S,c as a,u as c,i as d,m as r};
