import{j as t,r as d}from"./iframe-B8Z8o1yT.js";const s=`/*
 * Источник: Figma Setl, node 1128:44040
 * (Setl Академия / Главная), get_variable_defs — реальные значения.
 * Подробности и что НЕ вошло сюда — tokens/colors.md, tokens/typography.md,
 * tokens/spacing.md.
 *
 * Шрифт: имена семейств заведены, файлов (@font-face) нет — TT Commons Pro
 * лицензионный, веб-embedding не подтверждён (см. typography.md). Пока
 * системный fallback.
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
  --red-main: #ed1c24;
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

  /* --- blue — есть на экране, но под вопросом как бренд-акцент, см. colors.md --- */
  --blue-accent: #3c83f6;
  --blue-100: #f7faff;
  --blue-200: #e8f0fe;
  --blue-300: #eff5fe;
  --blue-400: #b1cdfb;
  --blue-550: #73a6f9;
  --blue-700: #1a68e8;

  /* --- прочее --- */
  --green-600: #84c948;
  --green-button: #72bf2f; /* button/success-primary-default — ОТДЕЛЬНЫЙ примитив от green-600, не то же самое */
  --yellow-rating: #fadb14;
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
  /* ВАЖНО: отдельный токен от --red-main (#ed1c24, бренд-красный Сетл) — в самой Figma
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
  --radius-xl: 30px; /* радиус панели меню (сайдбара) — подтверждено дизайнером напрямую 2026-09-14, не из get_variable_defs */

  /* --- shadow --- */
  --shadow-card: 0 2px 4px rgba(0, 0, 0, 0.08), 0 -8px 8px rgba(0, 0, 0, 0.02);
  /* Ховер-подъём кнопок с заливкой — портировано с Praktis Site (.btn-accent:hover,
     styles.css:141-145), там же offset/blur/spread (0 14px 28px), только цвет
     заменён на 522A22 10% по просьбе дизайнера (был rgba(60,131,246,.32) — их accent-синий). */
  --shadow-button-hover: 0 14px 28px rgba(82, 42, 34, 0.1);

  /* --- typography: font families (без @font-face, см. комментарий выше) --- */
  --font-family-expanded: "TT Commons Pro Expanded", "Arial", sans-serif;
  --font-family-text: "TT Commons Pro", "Arial", sans-serif;
  --font-family-body: "Montserrat", "Arial", sans-serif; /* длинный текст-абзац — TT Commons Pro тут читается хуже */

  /* --- typography: scale (только реально встреченные на экране стили) --- */
  --text-caption-1-size: 48px; --text-caption-1-weight: 600; --text-caption-1-line-height: 1.2; /* Expanded DemiBold */
  --text-caption-2-size: 32px; --text-caption-2-weight: 700; --text-caption-2-line-height: 1.1;  /* Expanded Bold */
  --text-h2-size: 24px;        --text-h2-weight: 600;        --text-h2-line-height: 1.2;         /* Expanded DemiBold */
  --text-h4-size: 18px;        --text-h4-weight: 600;        --text-h4-line-height: 1.2;         /* Expanded DemiBold */
  --text-h5-size: 16px;        --text-h5-weight: 600;        --text-h5-line-height: 1.2;         /* Expanded DemiBold */
  --text-caption-4-size: 12px; --text-caption-4-weight: 600; --text-caption-4-line-height: 1.2;  /* Expanded DemiBold */
  --text-caption-3-size: 14px; --text-caption-3-weight: 400; --text-caption-3-line-height: 1.2;  /* Expanded Regular */
  --text-button-1-size: 16px;  --text-button-1-weight: 400; --text-button-1-line-height: 1;      /* Expanded Regular */
  --text-button-2-size: 14px;  --text-button-2-weight: 400; --text-button-2-line-height: 1.2;    /* Expanded Regular */
  --text-p2-size: 16px;        --text-p2-weight: 400;        --text-p2-line-height: 1.2;         /* TT Commons Pro (не Expanded) */
  --text-p1-size: 18px;        --text-p1-weight: 400;        --text-p1-line-height: 1.2;         /* Montserrat — --font-family-body, не --font-family-text */
}
`,u=s.split(`
`).flatMap(e=>{const n=e.match(/^\s*(--[\w-]+):\s*([^;]+);\s*(?:\/\*\s*(.*?)\s*(?:\*\/)?\s*)?$/);return n?[{name:n[1],raw:n[2].trim(),note:n[3]||void 0}]:[]});function m(e){return getComputedStyle(document.documentElement).getPropertyValue(e).trim()}const i={fontFamily:"system-ui, -apple-system, sans-serif",color:"#282828"};function l({children:e,note:n}){return t.jsxs("div",{style:{...i,margin:"0 0 16px"},children:[t.jsx("h3",{style:{margin:0,fontSize:16,fontWeight:600},children:e}),n&&t.jsx("p",{style:{margin:"4px 0 0",fontSize:13,color:"#7e7e7e",maxWidth:640},children:n})]})}function p({children:e}){return t.jsx("code",{style:{fontFamily:"ui-monospace, Menlo, monospace",fontSize:12},children:e})}function c({text:e,children:n}){const[o,a]=d.useState(!1);return t.jsx("button",{type:"button",title:`Скопировать ${e}`,onClick:()=>{var r;(r=navigator.clipboard)==null||r.writeText(e),a(!0),setTimeout(()=>a(!1),1e3)},style:{all:"unset",...i,cursor:"pointer",fontFamily:"ui-monospace, Menlo, monospace",fontSize:12,fontWeight:600,wordBreak:"break-all"},children:o?"Скопировано":n??e})}l.__docgenInfo={description:"",methods:[],displayName:"SectionHeading",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},note:{required:!1,tsType:{name:"ReactNode"},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"Code",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};c.__docgenInfo={description:"Кнопка-подпись: по клику копирует текст в буфер и на секунду пишет «Скопировано».",methods:[],displayName:"CopyLabel",props:{text:{required:!0,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};export{c as C,l as S,p as a,u as c,i as d,m as r};
