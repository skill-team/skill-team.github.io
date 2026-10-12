import{E as m,j as p,M as g}from"./iframe-XQ_qeO9Z.js";import"./preload-helper-C1FmrZbK.js";const S={title:"UI Kit/Сообщения/EmptyState",id:"ui-kit-emptystate",component:m,tags:["autodocs"],args:{size:"m",title:"Вы пока не записаны ни на один курс",description:"Выберите курс в каталоге — он появится здесь"},argTypes:{size:{control:"inline-radio",options:["m","s","xs"]},title:{control:"text"},description:{control:"text"},icon:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},image:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},action:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},secondaryAction:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Плашка на пустом месте: пустой список, «ничего не найдено». Из praktis-ui-kit (Figma «Практис», «Пустые страницы и ошибки»), вид Setl: шрифт кита, кнопки `primary-red` и `secondary`.\nРазмеры M / S / XS (XS — внутри выпадающих списков, её ставят Select и MultiSelect сами). Правило текста: всегда заголовок и пояснение — что сделать или чего ждать; просто «Нет данных» не бывает. `kind="notFound"` — готовый текст «Упс! Такого не нашлось».\n**Figma Setl для пустых состояний не снималась.**'}}}},e={},t={name:"С кнопкой",args:{action:{label:"Открыть каталог",icon:p.jsx(g,{})},secondaryAction:{label:"Позже"}}},o={name:"Ничего не найдено",args:{kind:"notFound",size:"s",onReset:()=>{},title:void 0,description:void 0}},A=["Playground","СКнопкой","НичегоНеНайдено"];var n,a,r;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var s,u,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "С кнопкой",
  args: {
    action: {
      label: "Открыть каталог",
      icon: <IconAddCircle />
    },
    secondaryAction: {
      label: "Позже"
    }
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var i,d,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Ничего не найдено",
  args: {
    kind: "notFound",
    size: "s",
    onReset: () => {},
    title: undefined,
    description: undefined
  }
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};export{e as Playground,A as __namedExportsOrder,S as default,o as НичегоНеНайдено,t as СКнопкой};
