import{B as a,j as e,I as z,a as D}from"./iframe-B8Z8o1yT.js";import"./preload-helper-C1FmrZbK.js";const o=["primary-red","primary-black","secondary","success"],c=["large","medium","small"],j={title:"UI Kit/Кнопки/Button",id:"ui-kit-button",component:a,tags:["autodocs"],args:{children:"Кнопка",variant:"primary-red",size:"large",disabled:!1},argTypes:{variant:{control:"inline-radio",options:o,description:"Заливка"},size:{control:"inline-radio",options:c,description:"Высота: 48 / 40 / 32"},disabled:{control:"boolean",description:"Недоступна"},children:{control:"text",description:"Текст кнопки"},icon:{control:!1,table:{category:"Для разработчиков — передаётся из кода"},description:"Иконка слева от текста"},onClick:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Кнопка с заливкой. Figma Setl, node `138:11270` («Кнопки»). Построена на antd `Button`, тема — `theme/antdTheme.ts`.\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| `variant` | `primary-red` · `primary-black` · `secondary` · `success` | Primary red · Primary black · Secondary · Success |\n| `size` | `large` 48 · `medium` 40 · `small` 32 | Size L · M · S |\n| `disabled` | true / false | State=Disabled |\n| `icon` | любая иконка кита | иконка слева |\n\n**Ховер-подъём** (сдвиг вверх на 3px + тень `--shadow-button-hover`) — не из Figma: перенесён с сайта Практис по решению дизайнера, цвет тени свой.\n\n**Не сделано:** кнопки-ссылки без заливки (`Link-red`, `Link-black`) — отдельный компонент. Состояния Focused/Active из Figma отдельно не перенесены. Disabled у `primary-black`, `secondary`, `success` взят по аналогии с `primary-red` и в Figma отдельно не сверен."}}}},u={},n={parameters:{docs:{description:{story:"Все заливки × все размеры. Наведи — ховер-подъём."}}},render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, max-content)",gap:20,alignItems:"center"},children:c.flatMap(r=>o.map(d=>e.jsx(a,{variant:d,size:r,children:"Кнопка"},`${r}-${d}`)))})},s={render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:20},children:o.map(r=>e.jsx(a,{variant:r,disabled:!0,children:"Кнопка"},r))})},t={name:"С иконкой",render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:20,alignItems:"center"},children:[c.map(r=>e.jsx(a,{size:r,icon:e.jsx(z,{}),children:"Предложить идею"},r)),e.jsx(a,{variant:"secondary",icon:e.jsx(D,{}),children:"Показать ещё"})]})},i={name:"Длинный текст",args:{children:"Записаться на курс «BIM-моделирование: путь от чертежа до объекта»"}},S=["Playground","Варианты","Недоступна","СИконкой","ДлинныйТекст"];var l,p,m;u.parameters={...u.parameters,docs:{...(l=u.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(m=(p=u.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var y,g,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Все заливки × все размеры. Наведи — ховер-подъём."
      }
    }
  },
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, max-content)",
    gap: 20,
    alignItems: "center"
  }}>
      {sizes.flatMap(size => variants.map(variant => <Button key={\`\${size}-\${variant}\`} variant={variant} size={size}>
            Кнопка
          </Button>))}
    </div>
}`,...(x=(g=n.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,B,b;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: 20
  }}>
      {variants.map(variant => <Button key={variant} variant={variant} disabled>
          Кнопка
        </Button>)}
    </div>
}`,...(b=(B=s.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var h,A,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "С иконкой",
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: 20,
    alignItems: "center"
  }}>
      {sizes.map(size => <Button key={size} size={size} icon={<IconChatCentered />}>
          Предложить идею
        </Button>)}
      <Button variant="secondary" icon={<IconArrowDown />}>
        Показать ещё
      </Button>
    </div>
}`,...(f=(A=t.parameters)==null?void 0:A.docs)==null?void 0:f.source}}};var E,C,F;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: "Длинный текст",
  args: {
    children: "Записаться на курс «BIM-моделирование: путь от чертежа до объекта»"
  }
}`,...(F=(C=i.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};export{u as Playground,S as __namedExportsOrder,j as default,n as Варианты,i as ДлинныйТекст,s as Недоступна,t as СИконкой};
