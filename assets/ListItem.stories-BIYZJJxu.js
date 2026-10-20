import{j as u,T as x}from"./iframe-BFd96KHm.js";import{m as I}from"./index-Bvs48kgs.js";import{I as t}from"./InfoTag-CNqYZ4Ft.js";import{I as p,a as j}from"./Login-Dd0z4NbJ.js";import{L as e}from"./ListItem-DR9KVzro.js";import"./preload-helper-C1FmrZbK.js";const v={title:"UI Kit/Карточки/ListItem",id:"ui-kit-listitem",component:e,tags:["autodocs"],args:{title:"Завершение курса",subtitle:"вне карты адаптации",selected:!1,tone:"default",quiet:!1,divider:!0},argTypes:{title:{control:"text"},subtitle:{control:"text",description:"Подпись под заголовком — серым"},selected:{control:"boolean",description:"Голубая таблетка: текущий уровень, своя строка в рейтинге"},tone:{control:"inline-radio",options:["default","success"],description:"success — зелёным: уже получено"},quiet:{control:"boolean",description:"Заголовок обычным начертанием (неактивные уровни)"},divider:{control:"boolean",description:"Линия снизу (у выбранной — нет)"},leading:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},trailing:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Строка списка (личный кабинет, «Достижения»: ТОП-10, «Как заработать», «История», уровни). Слева — необязательный квадрат 40 (серый, скругление 12) с иконкой 16, медалью или числом; заголовок `H5` и подпись `P3` серым; справа — своё, обычно `InfoTag size="large"`. Поля 16 × 12, между частями 16, снизу линия. На телефоне плотнее: поля 12 × 8, заголовок 14.\n\n| Проп | Значения |\n|---|---|\n| `leading` | иконка / медаль / число |\n| `trailing` | обычно `InfoTag size="large"` |\n| `selected` | true — голубая таблетка, без линии |\n| `tone` | `success` — зелёным |\n| `quiet` | заголовок обычным |\n| `filled` | серая плашка, квадрат белый |'}}},decorators:[i=>u.jsx("div",{style:{padding:24,maxWidth:640,background:"var(--color-surface)"},children:u.jsx(i,{})})]},s={render:i=>u.jsx(e,{...i,trailing:u.jsx(t,{size:"large",tone:i.tone==="success"?"green":i.selected?"blue":"gray",children:"+50"})})},r={name:"Рейтинг, история, уровни",render:()=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[u.jsxs("div",{children:[u.jsx(e,{leading:u.jsx("img",{src:I[1],alt:"1 место",width:18,height:21}),title:"Обломов Илья Ильич",subtitle:"Дирекция по строительству №4",trailing:u.jsx(t,{size:"large",tone:"red",children:"7 297"})}),u.jsx(e,{leading:4,title:"Ростова Наталья Ильинична",subtitle:"Дирекция по строительству №1",trailing:u.jsx(t,{size:"large",tone:"gray",children:"4 450"})}),u.jsx(e,{selected:!0,leading:144,title:"Вы · Карамазов Александр Аркадьевич",subtitle:"Дирекция генерального подряда",trailing:u.jsx(t,{size:"large",tone:"blue",children:"400"})})]}),u.jsxs("div",{children:[u.jsx(e,{leading:u.jsx(p,{}),title:"Завершение курса «Деловое общение»",subtitle:"07.10.2026",trailing:u.jsx(t,{size:"large",tone:"gray",children:"+50"})}),u.jsx(e,{leading:u.jsx(j,{}),title:"Запрос к Сэтлику",subtitle:"02.10.2026",trailing:u.jsx(t,{size:"large",tone:"gray",children:"+5"})}),u.jsx(e,{tone:"success",title:"Первый вход новому сотруднику",subtitle:"один раз",trailing:u.jsx(t,{size:"large",tone:"green",children:"+30"})})]}),u.jsxs("div",{children:[u.jsx(e,{quiet:!0,divider:!1,title:"Первопроходец",trailing:u.jsx(t,{size:"large",tone:"gray",children:"от 0"})}),u.jsx(e,{quiet:!0,divider:!1,selected:!0,title:"Искатель",trailing:u.jsx(t,{size:"large",tone:"blue",children:"от 300"})}),u.jsx(e,{quiet:!0,divider:!1,title:"Магистр знаний",trailing:u.jsx(t,{size:"large",tone:"gray",children:"от 700"})})]})]})},n={name:"Пояснение (filled)",parameters:{docs:{description:{story:"`filled` — серая плашка, квадрат слева белый: пояснение в окне «Редактирование профиля»."}}},render:()=>u.jsx(e,{filled:!0,quiet:!0,divider:!1,leading:u.jsx(x,{size:16}),title:"ФИО, должность, отдел и руководитель приходят из кадровой системы — изменить их можно через HR"})},z=["Playground","Варианты","Пояснение"];var a,l,o;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => <ListItem {...args} trailing={<InfoTag size="large" tone={args.tone === "success" ? "green" : args.selected ? "blue" : "gray"}>+50</InfoTag>} />
}`,...(o=(l=s.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var d,g,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "Рейтинг, история, уровни",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>
      <div>
        <ListItem leading={<img src={medalImages[1]} alt="1 место" width={18} height={21} />} title="Обломов Илья Ильич" subtitle="Дирекция по строительству №4" trailing={<InfoTag size="large" tone="red">7 297</InfoTag>} />
        <ListItem leading={4} title="Ростова Наталья Ильинична" subtitle="Дирекция по строительству №1" trailing={<InfoTag size="large" tone="gray">4 450</InfoTag>} />
        <ListItem selected leading={144} title="Вы · Карамазов Александр Аркадьевич" subtitle="Дирекция генерального подряда" trailing={<InfoTag size="large" tone="blue">400</InfoTag>} />
      </div>
      <div>
        <ListItem leading={<IconS16Learning />} title="Завершение курса «Деловое общение»" subtitle="07.10.2026" trailing={<InfoTag size="large" tone="gray">+50</InfoTag>} />
        <ListItem leading={<IconS16Chat />} title="Запрос к Сэтлику" subtitle="02.10.2026" trailing={<InfoTag size="large" tone="gray">+5</InfoTag>} />
        <ListItem tone="success" title="Первый вход новому сотруднику" subtitle="один раз" trailing={<InfoTag size="large" tone="green">+30</InfoTag>} />
      </div>
      <div>
        <ListItem quiet divider={false} title="Первопроходец" trailing={<InfoTag size="large" tone="gray">от 0</InfoTag>} />
        <ListItem quiet divider={false} selected title="Искатель" trailing={<InfoTag size="large" tone="blue">от 300</InfoTag>} />
        <ListItem quiet divider={false} title="Магистр знаний" trailing={<InfoTag size="large" tone="gray">от 700</InfoTag>} />
      </div>
    </div>
}`,...(c=(g=r.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var m,f,E;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Пояснение (filled)",
  parameters: {
    docs: {
      description: {
        story: "\\\`filled\\\` — серая плашка, квадрат слева белый: пояснение в окне «Редактирование профиля»."
      }
    }
  },
  render: () => <ListItem filled quiet divider={false} leading={<IconLock01 size={16} />} title="ФИО, должность, отдел и руководитель приходят из кадровой системы — изменить их можно через HR" />
}`,...(E=(f=n.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};export{s as Playground,z as __namedExportsOrder,v as default,r as Варианты,n as Пояснение};
