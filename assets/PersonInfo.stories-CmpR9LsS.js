import{j as a,X as f}from"./iframe-BFd96KHm.js";import{I as b}from"./InfoTag-CNqYZ4Ft.js";import{P as B}from"./PersonInfo-BX3ExAFK.js";import{b as e,c as n}from"./aboutData-DrKk9U2N.js";import"./preload-helper-C1FmrZbK.js";import"./Avatar-DzHHXOhb.js";import"./profileData-DZhnLGpr.js";import"./index-CGJuuq_M.js";const z={title:"UI Kit/Профиль/PersonInfo",id:"ui-kit-personinfo",component:B,tags:["autodocs"],args:{name:e.name,photo:e.photo,lines:[e.position,e.department],ringColor:"var(--level-2-fill)",size:"large"},argTypes:{name:{control:"text"},overline:{control:"text",description:"Надпись над именем — «Ваш ментор»"},lines:{control:"object",description:"Строки под именем — должность, отдел"},size:{control:"inline-radio",options:["large","medium","small"],description:"large — фото 76, имя H3; medium — круг 56, имя H5; small — круг 48 (телефон)"},ringColor:{control:"text",description:"Цвет кольца вокруг фото — обычно цвет уровня"},badge:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},photo:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Человек: фото и текст — сотрудник и ментор в шапке личного кабинета. Слева круг — фото (`Avatar`, с кольцом цвета уровня) или инициалы на сером; справа необязательная надпись над именем (overline 10), имя и строки под ним (`P3` серым).\n\n| Проп | Значения |\n|---|---|\n| `size` | `large` — фото 76, имя `H3` 20 |\n| | `small` — круг 48, имя `H5` 16 |\n| `badge` | плашка под фото (баллы) |\n| | `medium` — круг 56, имя `H5` 16 |\n| `photo` | нет — инициалы |"}}},decorators:[E=>a.jsx("div",{style:{padding:24,background:"var(--color-surface)"},children:a.jsx(E,{})})]},o={},u={args:{name:n.name,photo:void 0,lines:[n.role,n.department],overline:"Ваш ментор",size:"medium",ringColor:void 0}},r={name:"С баллами под фото",args:{badge:a.jsx(b,{size:"small",tone:"white",icon:a.jsx(f,{size:12}),children:"400"})},parameters:{docs:{description:{story:"`badge` — плашка внизу по центру фото, наполовину на нём, с лёгкой тенью: баллы сотрудника в шапке личного кабинета."}}}},I=["Playground","Ментор","СБаллами"];var s,t,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(i=(t=o.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var c,m,l;u.parameters={...u.parameters,docs:{...(c=u.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: ABOUT_MENTOR.name,
    photo: undefined,
    lines: [ABOUT_MENTOR.role, ABOUT_MENTOR.department],
    overline: "Ваш ментор",
    size: "medium",
    ringColor: undefined
  }
}`,...(l=(m=u.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,p,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: "С баллами под фото",
  args: {
    badge: <InfoTag size="small" tone="white" icon={<IconRibbonStar size={12} />}>400</InfoTag>
  },
  parameters: {
    docs: {
      description: {
        story: "\\\`badge\\\` — плашка внизу по центру фото, наполовину на нём, с лёгкой тенью: баллы сотрудника в шапке личного кабинета."
      }
    }
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};export{o as Playground,I as __namedExportsOrder,z as default,u as Ментор,r as СБаллами};
