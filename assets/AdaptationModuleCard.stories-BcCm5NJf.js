import{r as E,j as u}from"./iframe-DF43zbcH.js";import{A as t}from"./AdaptationModuleCard-FwBuUs9d.js";import"./preload-helper-C1FmrZbK.js";import"./InfoTag-DnH5-QU6.js";import"./StepNumber-DyiP9-q2.js";const C={title:"UI Kit/Профиль/AdaptationModuleCard",id:"ui-kit-adaptationmodulecard",component:t,tags:["autodocs"],args:{number:"01",title:"Деловая переписка",kind:"Материал базы знаний",description:"Общие правила деловой переписки: как придерживаться их в рабочих письмах и чатах.",duration:"10 мин",status:"upcoming"},argTypes:{number:{control:"text"},title:{control:"text"},kind:{control:"text"},description:{control:"text"},duration:{control:"text"},status:{control:"inline-radio",options:["done","overdue","current","upcoming","locked"]},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Модуль шага адаптации — карточка в окне шага (`AdaptationStepModal`), когда шаг собран из нескольких материалов, курсов и тестов. Язык — как у карточек карты адаптации (`AdaptationRoad`): номер и обводка цвета статуса.\n\n| Статус | Вид | Кнопка |\n|---|---|---|\n| `done` — пройден | зелёный, плашка «Пройден» | «Повторить» (серая) |\n| `overdue` — просрочен | красный, плашка «Просрочен» | «Пройти» (красная — не путать с неактивной) |\n| `current` — изучаю | голубой, плашка «Изучаю» фиолетовая (в процессе) | «Продолжить» (красная) |\n| `upcoming` — не начат | голубой — модуль открыт | «Пройти» (красная) |\n| `locked` — закрыт | серая обводка, карточка приглушена | неактивна |\n\nСверху тип модуля и статус, название (H5), описание целиком (P3), снизу время и кнопка. Нажимается только кнопка — `onOpen`."}}},decorators:[e=>u.jsx("div",{style:{padding:24,background:"var(--color-surface)",maxWidth:640},children:u.jsx(e,{})})]},n={render:e=>{const[c,p]=E.useState("");return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,fontFamily:"var(--font-family-body)"},children:[u.jsx("span",{style:{fontSize:14,color:"var(--color-text-secondary)"},children:c||"Нажмите кнопку модуля"}),u.jsx(t,{...e,onOpen:()=>p(`Открыли модуль «${e.title}»`)})]})}},o={render:()=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[u.jsx(t,{number:"01",status:"done",kind:"Электронный курс",title:"Первый день Степана",description:"Как прошёл первый день: пропуск, рабочее место, знакомство с командой.",duration:"10 мин"}),u.jsx(t,{number:"02",status:"overdue",kind:"Электронный курс",title:"Документы на площадке",description:"Акты, исполнительные схемы и журналы работ: что подписывает каждый участник.",duration:"15 мин"}),u.jsx(t,{number:"03",status:"current",kind:"Материал базы знаний",title:"Вопросы, которые возникают у всех",description:"Ответы на частые вопросы: отпуск, больничный, обучение, доступы.",duration:"5 мин"}),u.jsx(t,{number:"04",status:"upcoming",kind:"Тест",title:"Тест «Деловое письмо»",description:"Проверьте, насколько хорошо вы запомнили правила оформления деловых писем.",duration:"10 мин"}),u.jsx(t,{number:"05",status:"locked",kind:"Тест",title:"Итоговый тест",description:"Откроется после прохождения остальных модулей.",duration:"15 мин"})]})},g=["Playground","Статусы"];var r,a,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: args => {
    const [msg, setMsg] = useState("");
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12,
      fontFamily: "var(--font-family-body)"
    }}>
        <span style={{
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>{msg || "Нажмите кнопку модуля"}</span>
        <AdaptationModuleCard {...args} onOpen={() => setMsg(\`Открыли модуль «\${args.title}»\`)} />
      </div>;
  }
}`,...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var s,d,l;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      <AdaptationModuleCard number="01" status="done" kind="Электронный курс" title="Первый день Степана" description="Как прошёл первый день: пропуск, рабочее место, знакомство с командой." duration="10 мин" />
      <AdaptationModuleCard number="02" status="overdue" kind="Электронный курс" title="Документы на площадке" description="Акты, исполнительные схемы и журналы работ: что подписывает каждый участник." duration="15 мин" />
      <AdaptationModuleCard number="03" status="current" kind="Материал базы знаний" title="Вопросы, которые возникают у всех" description="Ответы на частые вопросы: отпуск, больничный, обучение, доступы." duration="5 мин" />
      <AdaptationModuleCard number="04" status="upcoming" kind="Тест" title="Тест «Деловое письмо»" description="Проверьте, насколько хорошо вы запомнили правила оформления деловых писем." duration="10 мин" />
      <AdaptationModuleCard number="05" status="locked" kind="Тест" title="Итоговый тест" description="Откроется после прохождения остальных модулей." duration="15 мин" />
    </div>
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};export{n as Playground,g as __namedExportsOrder,C as default,o as Статусы};
