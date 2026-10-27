import{j as e}from"./iframe-wfJ_y6tk.js";import{A as a}from"./AssignedBadge-DBDPFo5k.js";import{c as p}from"./course-1--YiCqOCo.js";import"./preload-helper-C1FmrZbK.js";import"./Archive-Ban5Sfu5.js";import"./InfoTag-BAAPDPgL.js";import"./index-DK8SjL2j.js";import"./ContextIsolator-8G1DI5TY.js";import"./context-BtIUxdFu.js";const n=s=>{const u=new Date;return u.setDate(u.getDate()+s),`${u.getFullYear()}-${String(u.getMonth()+1).padStart(2,"0")}-${String(u.getDate()).padStart(2,"0")}`},j={title:"UI Kit/Карточки/AssignedBadge",id:"ui-kit-assignedbadge",component:a,tags:["autodocs"],args:{deadline:n(5),reason:"Назначил руководитель",variant:"overlay",size:"medium"},argTypes:{deadline:{control:"text",description:"Срок — ISO-дата (2026-10-20)"},reason:{control:"text",description:"Причина — в тултипе"},variant:{control:"inline-radio",options:["overlay","tag"],description:"overlay — на картинке карточки; tag — в строке плашек"},size:{control:"inline-radio",options:["medium","small"],description:"Для tag"},today:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Плашка «Курс назначен» со сроком. Иконка человека (фиолетовая, временная) и срок: «до 20.10», близкие — «Сегодня» / «Завтра», прошёл — «Просрочено» (красная). Причина («Назначил руководитель», «Обязательное по должности») и полная дата — в тултипе при наведении.\n\n| Проп | Значения | Где |\n|---|---|---|\n| `variant` | `overlay` — `InfoTag` белая, текст фиолетовый, поверх картинки | `CourseCard` — слева напротив звезды |\n| | `tag` — `InfoTag purple`, фиолетовая (не сливается с голубым временем) | `CourseRow` (списком), `AssignedPanel`, таблица на телефоне |\n\nПросрочено — красная в обоих видах. Форма и размер — как у плашек времени и прогресса; в узкой карточке — мельче вместе с ними, у «Просрочено» без иконки."}}},decorators:[s=>e.jsx("div",{style:{padding:24,paddingTop:56,background:"var(--color-surface)"},children:e.jsx(s,{})})]},d={},r={name:"Сроки — на картинке и в строке",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsxs("div",{style:{display:"flex",gap:12,padding:12,borderRadius:12,backgroundImage:`url(${p})`,backgroundSize:"cover"},children:[e.jsx(a,{deadline:n(-3),reason:"Назначил руководитель"}),e.jsx(a,{deadline:n(0),reason:"Обязательное по должности"}),e.jsx(a,{deadline:n(1),reason:"Назначил руководитель"}),e.jsx(a,{deadline:n(12),reason:"Обязательное по должности"})]}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{variant:"tag",deadline:n(-3)}),e.jsx(a,{variant:"tag",deadline:n(0)}),e.jsx(a,{variant:"tag",deadline:n(1)}),e.jsx(a,{variant:"tag",deadline:n(12)})]})]})},b=["Playground","Сроки"];var i,o,t;d.parameters={...d.parameters,docs:{...(i=d.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(t=(o=d.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var l,g,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Сроки — на картинке и в строке",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 20
  }}>
      <div style={{
      display: "flex",
      gap: 12,
      padding: 12,
      borderRadius: 12,
      backgroundImage: \`url(\${course})\`,
      backgroundSize: "cover"
    }}>
        <AssignedBadge deadline={day(-3)} reason="Назначил руководитель" />
        <AssignedBadge deadline={day(0)} reason="Обязательное по должности" />
        <AssignedBadge deadline={day(1)} reason="Назначил руководитель" />
        <AssignedBadge deadline={day(12)} reason="Обязательное по должности" />
      </div>
      <div style={{
      display: "flex",
      gap: 8
    }}>
        <AssignedBadge variant="tag" deadline={day(-3)} />
        <AssignedBadge variant="tag" deadline={day(0)} />
        <AssignedBadge variant="tag" deadline={day(1)} />
        <AssignedBadge variant="tag" deadline={day(12)} />
      </div>
    </div>
}`,...(c=(g=r.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};export{d as Playground,b as __namedExportsOrder,j as default,r as Сроки};
