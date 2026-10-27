import{j as t}from"./iframe-DF43zbcH.js";import{M as n}from"./mascot-DUyJTS__.js";import{N as m}from"./NewsTile-Bh0MUO5f.js";import{N as p}from"./newsData-C0ooMCpD.js";import{n as g}from"./news-1-DmTxuqk6.js";import"./preload-helper-C1FmrZbK.js";import"./Surface-BM1NSgrj.js";const r=p[0],v={title:"UI Kit/Карточки/NewsTile",id:"ui-kit-newstile",component:m,tags:["autodocs"],args:{overline:"02 — Новости",title:r.title,subtitle:"Новый портал обучения для всей команды",text:r.text,image:n.image},argTypes:{overline:{control:"text",description:"Надпись сверху — «02 — Новости»"},title:{control:"text",description:"Заголовок H2"},subtitle:{control:"text",description:"Подзаголовок H5"},text:{control:"text",description:"Короткий текст — сколько строк влезет, на последней «…»"},image:{control:"inline-radio",options:["С картинкой","Без картинки"],mapping:{"С картинкой":n.image,"Без картинки":void 0},description:"Небольшая картинка справа сверху, рядом с заголовком; нет — заголовок во всю ширину"},layout:{control:"inline-radio",options:["icon","media"],description:"icon — небольшая картинка справа сверху; media — картинка новости под текстом, уходит под края"},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Плитка новости — инфоблок Главной 4, в ряд с «Знаниями» (`MediaTile`). Белый блок: надпись «02 — Новости» (прописные, разрядка — как у инфоблоков), заголовок `H2`, подзаголовок `H5`, короткий текст `P2` — сколько целых строк влезает в оставшееся место, на последней «…». Справа сверху, рядом с надписью и заголовком, — небольшая картинка (140 по ширине; прозрачный PNG смотрится лучше); подзаголовок и текст — под ними во всю ширину. Весь блок открывает новость (`onOpen`), наведение — подъём с тенью. Размер задаёт место — в ряду инфоблоков высота 300.\n\n**`layout="media"`** (на Главной 4) — текст сверху, картинка новости под ним уходит под правый и нижний края плитки (скругление только у левого верхнего угла), автор вставляет свою. Шрифт мельче — заголовок `H3` до 2 строк, текст `P3` до 2 строк; подзаголовок лучше не давать. Наведение — картинка чуть выезжает.'}}},decorators:[d=>t.jsx("div",{style:{width:560,height:300,display:"grid",padding:24,background:"var(--color-background)"},children:t.jsx(d,{})})]},e={args:{onOpen:()=>{}}},o={name:"Картинка под текстом (Главная 4)",args:{layout:"media",subtitle:void 0,image:g,onOpen:()=>{}},argTypes:{image:{control:!1}}},w=["Playground","КартинкаПодТекстом"];var a,i,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    onOpen: () => {}
  }
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var c,u,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Картинка под текстом (Главная 4)",
  args: {
    layout: "media",
    subtitle: undefined,
    image: news1,
    onOpen: () => {}
  },
  argTypes: {
    image: {
      control: false
    }
  }
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};export{e as Playground,w as __namedExportsOrder,v as default,o as КартинкаПодТекстом};
