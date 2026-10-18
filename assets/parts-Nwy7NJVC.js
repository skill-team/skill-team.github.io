import{j as r,r as l}from"./iframe-BjwqOSi3.js";const c=`/*
 * Токены Setl Академии. Подробности и что НЕ вошло сюда — tokens/colors.md, tokens/typography.md,
 * tokens/spacing.md.
 *
 * Шрифт — один, Montserrat (Google Fonts, свободная лицензия OFL; подключается ссылкой в
 * index.html и .storybook/preview-head.html). Шкала — tokens/typography.md.
 *
 * Цвета — два яруса, не путать при использовании в компонентах:
 *  1. PRIMITIVES — сырая палитра (red-main, gray-150...),
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
  --red-800: #8e1116; /* источник: Button Link-red, State=Active */
  --red-700: #b2151b;
  --red-400: #f8a4a7;
  --red-300: #fabbbd;
  --red-200: #fbd2d3;
  --red-150: #fcddde;
  --red-100: #fde8e9;
  --red-50: #fef4f4;

  /* --- black / gray --- */
  --black-main: #282828; /* только тёмные подложки (тултип, фон под видео) — текст и иконки им не красим */
  --black-200: #f6f6f6;
  --white: #ffffff;

  --gray-100: #fbfbfb;
  --gray-150: #f4f3f3;
  --gray-200: #e9e8e7;
  --gray-300: #dedcdc; /* рамка поля ввода по умолчанию */
  --gray-400: #d3d1d0;
  --gray-600: #bdb9b8;
  --gray-700: #646060;
  --gray-800: #524e4e;
  --gray-main: #918b89;
  --beige-100: #f5efe6; /* фон инфоблока «Сообщество» на Главной */

  /* --- blue — есть на экране, но под вопросом как бренд-акцент, см. colors.md --- */
  --blue-accent: #3c83f6;
  --blue-100: #f7faff;
  --blue-200: #e8f0fe;
  --blue-300: #eff5fe;
  --blue-400: #b1cdfb;
  --blue-550: #73a6f9;
  --blue-700: #1a68e8;
  /* Фиолетовый — производные от цвета 6-го уровня (--level-6-fill #c1a3ff), тот же оттенок;
     насыщенность — как у --blue-accent (текст), светлота подложки — как у --blue-300. 2026-10-14 */
  --purple-accent: #8a5cf5;
  --purple-300: #f4efff;

  /* --- прочее --- */
  --green-150: #e0f6cc; /* дорожка кольца прогресса */
  --green-300: #ebfddc; /* green/300 — фон плашки прогресса */
  --green-600: #84c948;
  --green-800: #599c1e; /* text/success-primary — текст и дуга плашки прогресса */
  --green-button: #72bf2f; /* button/success-primary-default — ОТДЕЛЬНЫЙ примитив от green-600, не то же самое */
  --yellow-rating: #fadb14;
  --orange-main: #f99217; /* источник: Bulb type=orange */
  --yellow-main: #f5a300; /* жёлтый, сдвинутый к оранжевому — звезда «Избранное» в шапке
     (2026-10-06: «жёлтой, но чтобы не сливалась с фоном при ховере»). Контраст с
     подложкой наведения gray-200 — 1.7 (у --yellow-rating — 1.13, почти не видно) */

  /* ============================== SEMANTIC =============================== */
  /* Роль → примитив. Компоненты используют только это. */

  --color-surface: var(--white);        /* bg/white-page-full — сайдбар/карточки/шапка/(будущие) модалки/дропдауны */
  --color-background: var(--black-200); /* фон рабочей области под поверхностями */

  --color-text-primary: var(--gray-800);    /* text/primary #524E4E (2026-10-12; был #282828) */
  --color-text-secondary: var(--gray-700);  /* text/secondary #646060 (был холодный #7E7E7E) */
  --color-text-tertiary: var(--gray-main);  /* text/tertiary #918B89 — подписи, плейсхолдеры, шапка таблицы */
  --color-text-disabled: var(--gray-600);   /* text/disabled #BDB9B8 */
  --color-icon-muted: var(--gray-main);     /* icon/muted #918B89 — второстепенные иконки */
  --focus-ring: var(--red-150);             /* focus/ring #FCDDDE — кольцо фокуса с клавиатуры (был red-200) */
  --color-text-on-color: var(--white);   /* текст поверх цветной/тёмной подложки (кнопки и т.п.) */
  --color-text-danger: var(--red-main);     /* danger = accent */

  --color-success: var(--green-600);       /* прогресс-бар и т.п. */
  --color-button-success: var(--green-button); /* заливка зелёной кнопки — не путать с --color-success */
  --button-disabled-bg: var(--gray-150);     /* неактивная кнопка — одна для всех вариантов (2026-10-12) */
  --button-disabled-text: var(--gray-600);
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
  --menu-surface-selected: transparent;    /* с 2026-09-14 без подложки (проба прижилась, финал) — раньше был gray-150 */
  --menu-surface-divider: var(--gray-200);

  /* ================ INPUT (компонентный слой — только
     components/atoms/Input/) =================== */

  --input-border-default: var(--gray-400);
  --input-border-hover: var(--gray-600);
  --input-border-focus: var(--gray-main);
  --input-border-error: var(--red-main); /* тот же красный, что primary-red кнопки */
  --input-border-disabled: var(--gray-300); /* подтверждено — не отдельное значение от default */

  --input-bg: var(--white);
  --input-bg-disabled: var(--gray-150);

  --input-text: var(--gray-800); /* введённый текст, включая disabled+filled */
  --input-text-placeholder: var(--color-text-tertiary);
  --input-text-disabled-empty: var(--gray-400); /* пустой disabled инпут — отдельный от текста с содержимым */
  --input-text-error: var(--red-main); /* текст сообщения об ошибке под полем */

  --input-label: var(--color-text-secondary);
  /* ВАЖНО: отдельный токен от --red-main (#cf3a40, бренд-красный Сетл) — звёздочка
     обязательности и ошибка поля #e55b54, так же, как в praktis-ui-kit. Не унифицировать. */
  --input-required-mark: var(--red-main); /* danger = accent (был #E55B54) */

  --input-radius: 24px; /* скругление поля */
  --input-height: 42px; /* размер один — в отличие от Button */
  --input-padding-inline: var(--space-4); /* 16px = Size/Size */
  --input-label-gap: var(--space-1); /* 4px = Size/SizeXXS — между лейблом/полем/сообщением об ошибке */

  /* ============ ПОЛЯ: общие части семейства (2026-09-30) ============
     Select, MultiSelect, DatePicker, InputSearch, TextArea — перенесены из praktis-ui-kit и
     переведены на Setl. Рамки/фон/текст полей — те же --input-*, что у Input, здесь только то,
     чего у Input нет. Значения — из палитры Setl, по аналогии с Input и меню. */

  --field-icon: var(--color-icon-muted);        /* шеврон, календарь, крестик очистки — в покое (как у praktis #a9a9a9 = black/400) */
  --field-icon-active: var(--gray-800); /* шеврон открытого списка */

  /* Выпадающий список (DropdownMenu, списки Select/MultiSelect). Не --menu-*: тот — боковое меню */
  --dropdown-bg: var(--color-surface);
  --dropdown-radius: var(--radius-l);    /* 16 — как пункты бокового меню */
  --dropdown-item-radius: var(--radius-m); /* 12 */
  --dropdown-shadow: var(--shadow-card);
  --dropdown-item-text: var(--gray-800);
  --dropdown-item-description: var(--color-text-secondary);
  --dropdown-item-hover-bg: var(--gray-150);       /* тот же серый, что ховер бокового меню */
  --dropdown-item-selected-bg: var(--red-50);
  --dropdown-item-selected-hover-bg: var(--red-100);
  --dropdown-item-selected-text: var(--red-main);
  --dropdown-item-disabled-text: var(--gray-400);
  --dropdown-item-disabled-selected-bg: var(--gray-100);
  --dropdown-separator-line: var(--gray-200);
  --dropdown-separator-text: var(--color-text-secondary);

  /* Тег выбранного значения в MultiSelect */
  --tag-bg: var(--gray-150);
  --tag-bg-hover: var(--gray-200);
  --tag-bg-disabled: var(--color-surface); /* в недоступном поле фон поля = --tag-bg, поэтому белый */
  --tag-text: var(--gray-800);
  --tag-remove: var(--color-icon-muted);
  --tag-remove-hover: var(--gray-800);

  /* Уровни обучения — сегменты прогресс-бара: подложка + полоски.
     Номер — порядковый уровень (1 — первый). Подложка — оттенок «400», полоски — «350».
     ВНИМАНИЕ: red/400 уровня #f9c5c2 — не то же, что --red-400 (#f8a4a7);
     поэтому цвета уровней — свои токены, а не примитивы. */
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

  --color-text-info: var(--blue-accent); /* info/text — «До след. уровня 300» */

  /* Правая панель: карточка сотрудника и достижения */
  --panel-title: var(--gray-800);      /* ФИО, «Достижения» */
  --panel-text: var(--gray-700);       /* уровень, «Баллы», значения, подписи */
  --panel-level-count: var(--gray-800); /* «2 из 6» — темнее подписей */
  --badge-frame-fill: var(--gray-100); /* шестиугольник под иконкой ачивки */
  --badge-frame-stroke: var(--color-surface);
  --badge-lock-bg: rgba(255, 255, 255, 0.35); /* круг под замком у ещё не полученной ачивки */
  --badge-lock-icon: var(--gray-main);

  /* Карточка награды (AwardCard): получена — белая с серой рамкой 4, не получена — серая */
  --award-bg: var(--color-surface);
  --award-border: var(--gray-150);
  --award-locked-bg: var(--gray-150);

  /* Строка списка (ListItem): линия снизу, квадрат 40 слева, выбранная — голубая таблетка, «получено» — зелёным */
  --list-item-leading-bg: var(--gray-150);
  --list-item-selected-bg: var(--info-tag-blue-bg);
  --list-item-success-text: var(--green-800);
  --points-total-text: var(--red-main);


  /* Тег-выбор (ChoiceTag): обводка серая, выбранный — голубой с голубой обводкой; static — серая плашка без обводки */
  --choice-tag-border: var(--gray-400);
  --choice-tag-border-hover: var(--gray-main);
  --choice-tag-text: var(--color-text-secondary);
  --choice-tag-selected-bg: var(--blue-300);
  --choice-tag-selected-border: var(--blue-400);
  --choice-tag-selected-text: var(--color-text-info);
  --choice-tag-static-bg: var(--gray-150);

  /* Значок раздела — иконка 12 в красной плашке 26 («Увлечения», «Языки»…) */
  --section-badge-bg: var(--red-100);
  --section-badge-icon: var(--red-main);

  /* Боковое окно (SideModal) */
  --side-modal-mask: rgba(82, 78, 78, 0.24);
  --list-item-filled-bg: var(--gray-150);
  --stat-card-bg: var(--gray-150);           /* карточка-число (StatCard) — «9 · Всего» в архиве */   /* итог за период в истории баллов: «+122 балла» */

  /* Плашка-метка на карточке */
  --info-tag-blue-bg: var(--blue-300);        /* #eff5fe */
  --info-tag-blue-text: var(--color-text-info);
  --info-tag-green-bg: var(--green-300);
  --info-tag-green-text: var(--green-800);
  --info-tag-green-track: var(--green-150);   /* незаполненная часть кольца ProgressRing */
  --info-tag-sm-gap: 3px;                     /* InfoTag size="small" — узкие карточки, строки, шаги адаптации */
  --info-tag-sm-padding: 2px 5px;
  --info-tag-red-bg: var(--red-100);          /* «Просрочен» (карта адаптации), 2026-10-12 */
  --info-tag-red-text: var(--red-main);
  --info-tag-gray-bg: var(--gray-150);        /* нейтральная: время шага и т.п. */
  --info-tag-gray-text: var(--color-text-secondary);
  --info-tag-purple-bg: var(--purple-300);     /* фиолетовая — срок назначенного курса (в строке и таблице) */
  --info-tag-purple-text: var(--purple-accent);
  --info-tag-white-bg: var(--color-surface);
  /* Курс снят с публикации (CourseCard / CourseRow unavailable): картинка ч/б и бледнее, замок в белом круге */
  --course-unavailable-image-opacity: 0.6;
  --course-unavailable-lock-bg: rgba(255, 255, 255, 0.75);
  --course-unavailable-lock-icon: var(--color-text-secondary);
  --course-unavailable-text: var(--color-text-tertiary);   /* белая — поверх картинки (срок назначенного курса на карточке) */
  --info-tag-white-text: var(--color-text-info);

  /* Карточки в лентах — курс и новость (CourseCard, NewsCard): без обводки, лёгкая тень (2026-10-08 —
     по итогам опроса; рамку пробовали) */
  --card-bg: var(--color-surface);
  --card-radius: 24px;
  --card-shadow: var(--shadow-card);
  --card-shadow-hover: var(--lift-shadow-hover);
  --card-media-radius: 12px; /* картинка «в такт» карточке: 24 − отступ 12 = 12 */
  /* Тень подъёма при наведении — у кликабельных больших блоков (карточка сотрудника, инфоблоки) */
  --lift-shadow-hover: 0 8px 20px rgba(82, 42, 34, 0.09), 0 2px 4px rgba(82, 42, 34, 0.05); /* тёплая, #522A22 */
  --card-title: var(--gray-700);

  /* Кнопка «Избранное» на карточке (FavoriteButton) — подложка как у кнопок шапки */
  --favorite-bg: var(--color-surface);
  --favorite-bg-hover: var(--header-button-hover);
  --favorite-bg-press: var(--header-button-press);
  --favorite-icon: var(--color-icon-muted);
  --favorite-icon-active: var(--yellow-main);  /* тот же амбер, что звезда «Избранное» в шапке */

  /* Реакции под новостью */
  --reaction-bg: var(--gray-150);
  --reaction-bg-hover: var(--gray-200);           /* покой уже gray-150 — наведение на шаг темнее */
  --reaction-bg-press: var(--header-button-press); /* gray-300, как нажатие кнопок шапки */
  --reaction-icon: var(--color-icon-muted);
  --reaction-count: var(--gray-main);
  --reaction-active: var(--red-main);             /* лайк — праймари красный */

  /* Карточка новости */
  --news-card-text: var(--gray-800);
  --news-card-date: var(--gray-main); /* как «03 — РЕЙТИНГ» (--banner-overline-strong) */

  /* Тег-фильтр реестра — на белом блоке фильтров */
  --filter-tag-bg: var(--gray-150);          /* в белом блоке; на сером фоне страницы — белые (on="page") */
  --filter-tag-bg-hover: var(--gray-200);
  --filter-tag-text: var(--gray-700);
  --filter-tag-selected-bg: var(--red-main);
  --filter-tag-selected-text: var(--white);
  /* Личные теги «Я изучаю», «Избранное» — голубые (2026-10-08): мягкая подложка + текст blue-700
     (контраст 4.57 — норма; яркий --blue-accent на подложке дал бы 3.3). Выбранный — как все, красный */
  --filter-tag-info-bg: var(--blue-300);
  --filter-tag-info-bg-hover: var(--blue-200);
  --filter-tag-info-text: var(--blue-700);
  --filter-tag-bg-on-page: var(--color-surface);  /* теги прямо на сером фоне страницы — белые */
  --filter-tag-bg-on-page-hover: var(--gray-150);

  /* Переключатель (SegmentedControl) — «Все · Я изучаю · Избранное» */
  --segmented-track: var(--gray-150);
  --segmented-thumb: var(--color-surface);
  --segmented-text: var(--gray-700);
  --segmented-text-selected: var(--gray-800);

  /* Подвал страницы */
  --footer-copyright: var(--gray-main);
  --footer-link: var(--gray-800);
  --footer-link-hover: var(--red-main);

  /* Таблица */
  --table-header-bg: var(--gray-100);
  --table-header-text: var(--color-text-tertiary);
  --table-header-separator: var(--gray-300);
  --table-cell-bg: var(--color-surface);
  --table-row-stripe: var(--gray-100);      /* чётные строки */
  --table-row-hover: var(--gray-150);
  --table-cell-border: var(--gray-200);
  --table-cell-text: var(--gray-800);
  --table-sort: var(--color-icon-muted);
  --table-sort-hover: var(--gray-800);
  --table-sort-active: var(--red-main);     /* направление сортировки — праймари, как выбранный тег */
  --table-card-label: var(--gray-main);     /* телефон: подпись поля на карточке строки */

  /* Плашка типа файла (FileTypeBadge) — цвета уже существующих плашек, новых не заводим */
  --file-pdf-bg: var(--red-100);
  --file-pdf-text: var(--red-main);
  --file-xls-bg: var(--info-tag-green-bg);
  --file-xls-text: var(--info-tag-green-text);
  --file-doc-bg: var(--info-tag-blue-bg);
  --file-doc-text: var(--info-tag-blue-text);
  --file-other-bg: var(--gray-150);
  --file-other-text: var(--gray-700);


  /* Просмотрщик документа (FilePreview) */
  --preview-bg: var(--gray-200);            /* фон под страницами: белые страницы с тенью на светло-сером, не
                                                тёмная рамка (в текущей системе — тёмно-серый) */
  --preview-bg-dark: var(--black-main);     /* под видео — тёмный, как в кино: на светлом ролик блёклый */
  --preview-mask: rgba(40, 40, 40, 0.45);   /* затемнение под окном */
  --preview-meta: var(--gray-main);         /* «275,5 КБ · 9 стр.», значение масштаба */
  --preview-note-bg: var(--blue-300);       /* плашка «Показан PDF-превью…» — как голубые теги */
  --preview-note-text: var(--blue-700);

  /* Материал — раскладка материалов, новостей, курсов (MaterialContent, Callout, AskAuthorBanner; 2026-10-17): текст P1 18 с межстрочным 1,5, подзаголовки H2 / H3 */
  --content-text: var(--color-text-primary);
  --content-link: var(--red-main);              /* ссылки — праймари, как в ответах чата и ссылках-кнопках */
  --content-link-hover: var(--red-700);
  --content-bullet: var(--red-main);            /* точки маркированного списка */
  --content-caption: var(--color-text-tertiary);
  --content-image-radius: var(--card-radius);
  --callout-radius: var(--card-radius);         /* инфоблок */
  --callout-info-bg: var(--blue-300);
  --callout-info-text: var(--blue-700);
  --callout-neutral-bg: var(--gray-150);
  --callout-neutral-text: var(--color-text-primary);
  --callout-success-bg: var(--green-300);
  --callout-success-text: var(--green-800);
  --callout-danger-bg: var(--red-100);
  --callout-danger-text: var(--red-700);
  --ask-banner-bg: var(--gray-800);             /* «Остались вопросы?» — тёмный блок под материалом */
  --ask-banner-text: var(--color-surface);

  /* Курс — программа (CourseModules) и карточка статуса (CourseStatusCard), 2026-10-17 */
  --course-module-bg: var(--gray-150);
  --course-lesson-hover-bg: var(--color-surface);
  --course-lesson-done: var(--green-800);
  --course-status-points: var(--color-text-info);
  --course-progress-fill: var(--level-1-fill);     /* прогресс курса — голубая «колбаска», как 1-й уровень в профиле */
  --course-progress-stripe: var(--level-1-stripe);

  /* Заголовок блока — счётчик «(4)» после названия */
  --section-count: var(--gray-main);
  --section-subtitle: var(--gray-main); /* подзаголовок блока: «400 баллов · Искатель» */

  /* Инфоблоки Главной */
  --banner-warm-bg: var(--beige-100);       /* «Сообщество» */
  --banner-overline: var(--color-text-tertiary);       /* «01 — СООБЩЕСТВО» на бежевом */
  --banner-overline-strong: var(--gray-main); /* «03 — РЕЙТИНГ» на белом */
  --banner-text: var(--gray-800);
  --banner-text-on-photo: var(--white);
  /* Плитка с фоном (MediaTile): текст белым, затемнение снизу, плашка надписи */
  --media-tile-text: var(--banner-text-on-photo);
  --media-tile-overlay: linear-gradient(208.25deg, rgba(255, 229, 204, 0.05) 2.17%, rgba(40, 40, 40, 0.6) 79.71%);
  --media-tile-overlay-video: none; /* видео Сетлика и так тёмное — без затемнения (2026-10-16) */
  --media-tile-tag-bg: rgba(40, 40, 40, 0.25);
  --banner-pill-bg: var(--gray-150);        /* «Баллы» */
  --banner-pill-text: var(--gray-700);
  --banner-accent: var(--red-main);         /* места 1–3, баллы */
  --banner-star: var(--yellow-main);        /* звезда у мест 1–3 — как «Избранное» в шапке */

  /* Шапка */
  --header-favorite-icon: var(--yellow-main); /* звезда «Избранное» */
  --header-button-hover: var(--menu-surface-hover); /* наведение — как у пунктов меню */
  --header-button-press: var(--gray-300);           /* нажатие */

  /* Счётчик Bulb — пять цветов */
  --bulb-black: var(--gray-800);
  --bulb-red: var(--red-main);
  --bulb-blue: var(--blue-accent);
  --bulb-green: var(--green-button); /* green/main #72bf2f */
  --bulb-orange: var(--orange-main);

  /* Спиннер загрузки поля */
  --spinner-track: var(--red-200);
  --spinner-arc: var(--red-main);

  /* Полоса прокрутки (Scrollbar) — вид из praktis-ui-kit, цвета — тёплые серые Setl (2026-10-10; были холодные
     black-200 / black-310 как в Практисе): дорожка светлее, бегунок заметнее на белом, при наведении темнее */
  --scrollbar-track: var(--gray-150);
  --scrollbar-thumb: var(--gray-300);
  --scrollbar-thumb-hover: var(--gray-600);

  /* Чекбокс и радио (метки в пунктах списка) — рамка как у поля, при disabled светлее */
  --control-border-disabled: var(--gray-300);
  --control-mark-disabled: var(--color-text-disabled);

  /* Пустой список (EmptyState) */
  --empty-icon: var(--color-icon-muted);
  --empty-title: var(--color-text-primary);
  --empty-description: var(--color-text-secondary);

  /* Карта адаптации: шаг — подложка и цвет номера/иконки */
  --adapt-done-bg: var(--level-2-fill);       /* пройден — green/400 */
  --adapt-done-text: var(--green-800);
  --adapt-overdue-bg: var(--level-5-fill);    /* просрочен — red/400 #f9c5c2 */
  --adapt-overdue-text: var(--red-main);
  --adapt-current-bg: var(--level-1-fill);    /* текущий — blue/400 */
  --adapt-current-text: var(--blue-accent);
  --adapt-locked-bg: var(--gray-150);         /* впереди — закрыт */
  --adapt-locked-text: var(--gray-700);
  --adapt-icon-bg: var(--color-surface);
  --adapt-line: var(--gray-200);              /* линия змейки и перемычки */
  --adapt-current-row: var(--blue-100);       /* текущий шаг в боковой карте — подложка */
  --adapt-current-row-pulse: var(--blue-300); /* …и её «вдох» при пульсации */
  --adapt-complete-bg: var(--green-300);
  /* Шапка карты адаптации на голубой плашке (AdaptationPanel accent) — чтобы её замечали; красная была слишком яркой
     (2026-10-16): голубой фон, заголовок тёмный, «Все» синим, полоса — белая дорожка и зелёное заполнение */
  --adapt-accent-bg: var(--blue-200);
  --adapt-accent-text: var(--color-text-primary);
  --adapt-accent-link: var(--color-text-info);
  --adapt-accent-text-muted: var(--color-text-secondary);
  --adapt-accent-track: var(--white);
  --adapt-accent-fill: var(--progress-fill);     /* «Адаптация пройдена» — поздравление в боковой карте */
  --adapt-pulse-light: rgba(255, 255, 255, 0.9); /* пульсация белого кружка на «таблетке» горизонтальной карты */

  /* Полоса прогресса (ProgressBar) */
  --progress-track: var(--gray-150);
  --progress-fill: var(--color-success);

  /* Разделитель внутри блока; пункт с иконкой в квадрате (InfoItem) */
  --color-divider: var(--gray-200);
  --info-item-icon-bg: var(--gray-150);
  --info-item-icon: var(--color-text-secondary);

  /* Чат «Сэтл ИИ» (organisms/AiChat). Ответ — длинный текст для чтения: межстрочный 1.5 вместо 1.2 шкалы */
  --chat-text: var(--gray-800);
  --chat-text-secondary: var(--gray-700);
  --chat-line-height: 1.5;
  --chat-user-bubble: var(--gray-150);            /* сообщение пользователя — серое «облачко» справа */
  --chat-link: var(--red-main);                   /* ссылки в ответе — праймари, как ссылки-кнопки */
  --chat-marker: var(--red-main);                 /* точки списков в ответе */
  --chat-code-bg: var(--gray-150);
  --chat-quote-line: var(--red-main);             /* «Важно» — цитата с красной чертой слева */
  --chat-table-head: var(--gray-100);
  --chat-divider: var(--gray-200);
  --chat-dialog-hover: var(--gray-100);           /* список диалогов — как наведение строк */
  --chat-dialog-selected: var(--gray-150);
  --chat-thinking-text: var(--gray-700);
  --chat-thinking-shine: var(--gray-400);         /* бегущий блик по тексту «думаю…» */

  /* --- spacing (см. tokens/spacing.md): шкала 4 / 8 / 12 / 16 / 20 / 24 --- */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;

  /* --- каркас: ширины колонок (2026-10-10) ---
     Компьютер — от 1041 px (до 1040 — планшет: меню шторкой, см. theme/device.tsx). На небольшом экране меню и
     правая панель сужаются, чтобы середине хватало места: меню 216 → 240 (с ~1410; уже 216 — «Техподдержка» рвётся
     посреди слова), панель 248 → 296 (с ~1410). */
  --sidebar-width: clamp(216px, 17vw, 240px);
  --right-panel-width: clamp(248px, 21vw, 296px);

  /* --- radii --- */
  --radius-xs: 8px;  /* маленькие плашки (InfoTag size="small") — 2026-10-12 */
  --radius-s: 10px;  /* плашки InfoTag, квадрат номера шага StepNumber, плашка типа файла — 2026-10-12 */
  --radius-m: 12px; /* карточки и картинки в них */
  --radius-l: 16px; /* радиус пунктов меню */
  --radius-xl: 30px; /* панель меню (сайдбар) и большие блоки страницы (Surface) */

  /* --- shadow --- */
  /* Тени — в тёплом тоне #522A22 (как --shadow-button-hover), не чёрные (2026-10-08): чёрная на белом
     выглядит серой и «грязной». */
  --shadow-card: 0 2px 4px rgba(82, 42, 34, 0.07), 0 -8px 8px rgba(82, 42, 34, 0.02);
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
  --text-h1-size: 32px;  --text-h1-weight: 700;  --text-h1-line-height: 1.15; /* Bold — заголовок баннера Главной (HeroBanner); 2026-10-12 */
  --text-h2-size: 24px;  --text-h2-weight: 700;  --text-h2-line-height: 1.2;  /* Bold — «Уже 1 240+», «Топ-10 Академии», пустой список (большой) */
  --text-h3-size: 20px;  --text-h3-weight: 600;  --text-h3-line-height: 1.2;  /* SemiBold — заголовки блоков, ФИО, уровень, баллы, название курса */
  --text-h4-size: 18px;  --text-h4-weight: 600;  --text-h4-line-height: 1.2;  /* SemiBold — заголовок страницы в шапке */
  --text-h5-size: 16px;  --text-h5-weight: 600;  --text-h5-line-height: 1.2;  /* SemiBold — пункты меню, название новости, «48 курсов» */
  --text-h6-size: 14px;  --text-h6-weight: 600;  --text-h6-line-height: 1.3;  /* SemiBold — названия в узких карточках и строках, номер шага (2026-10-12) */
  --text-p1-size: 18px;  --text-p1-weight: 400;  --text-p1-line-height: 1.2;  /* Regular — крупный поиск */
  --text-p2-size: 16px;  --text-p2-weight: 400;  --text-p2-line-height: 1.2;  /* Regular — текст в полях, пункты списков, «Баллы» */
  --text-p3-size: 14px;  --text-p3-weight: 400;  --text-p3-line-height: 1.2;  /* Regular — лейблы и ошибки полей, дата и текст новости, подписи */
  --text-lead-size: 14px; --text-lead-weight: 600; --text-lead-line-height: 1.4; /* SemiBold — подзаголовок на картинке */
  --text-button-medium-size: 16px; --text-button-medium-weight: 500; --text-button-medium-line-height: 1;   /* Medium — кнопки, ссылки, строки рейтинга */
  --text-button-small-size: 14px;  --text-button-small-weight: 500;  --text-button-small-line-height: 1.2; /* Medium — маленькие кнопки, кнопки шапки, плашки на карточках */
  --text-caption-medium-size: 12px; --text-caption-medium-weight: 600; --text-caption-medium-line-height: 1.2; /* SemiBold — подписи разделов меню */
  --text-caption-small-size: 10px;  --text-caption-small-weight: 600;  --text-caption-small-line-height: 1.2; /* SemiBold — счётчик Bulb, плашка «Баллы», надзаголовок «01 — СООБЩЕСТВО» (там прописными, разрядка 1px) */
}

/* Мобильные браузеры при нажатии рисуют поверх кнопки свою голубую/серую плашку («tap highlight») — у кнопок и
   тегов кита есть свои состояния нажатия, системную убираем для всего кита (2026-10-12). Свойство
   наследуется — достаточно задать на корне. Фокус с клавиатуры это не трогает. */
html {
  -webkit-tap-highlight-color: transparent;
}
`,p=c.split(`
`).flatMap(e=>{const n=e.match(/^\s*(--[\w-]+):\s*([^;]+);\s*(?:\/\*\s*(.*?)\s*(?:\*\/)?\s*)?$/);return n?[{name:n[1],raw:n[2].trim(),note:n[3]||void 0}]:[]});function u(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}const o={fontFamily:"system-ui, -apple-system, sans-serif",color:"#282828"};function d({children:e,note:n}){return r.jsxs("div",{style:{...o,margin:"0 0 16px"},children:[r.jsx("h3",{style:{margin:0,fontSize:16,fontWeight:600},children:e}),n&&r.jsx("p",{style:{margin:"4px 0 0",fontSize:13,color:"#7e7e7e",maxWidth:640},children:n})]})}function g({children:e}){return r.jsx("code",{style:{fontFamily:"ui-monospace, Menlo, monospace",fontSize:12},children:e})}function s({text:e,children:n}){const[i,a]=l.useState(!1);return r.jsx("button",{type:"button",title:`Скопировать ${e}`,onClick:()=>{var t;(t=navigator.clipboard)==null||t.writeText(e),a(!0),setTimeout(()=>a(!1),1e3)},style:{all:"unset",...o,cursor:"pointer",fontFamily:"ui-monospace, Menlo, monospace",fontSize:12,fontWeight:600,wordBreak:"break-all"},children:i?"Скопировано":n??e})}d.__docgenInfo={description:"",methods:[],displayName:"SectionHeading",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},note:{required:!1,tsType:{name:"ReactNode"},description:""}}};g.__docgenInfo={description:"",methods:[],displayName:"Code",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};s.__docgenInfo={description:"Кнопка-подпись: по клику копирует текст в буфер и на секунду пишет «Скопировано».",methods:[],displayName:"CopyLabel",props:{text:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};export{s as C,d as S,g as a,p as c,o as d,u as r};
