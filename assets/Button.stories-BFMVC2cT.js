import{B as e,j as u,I as P,a as W,b as _,c as K}from"./iframe-xHeXyRUt.js";import{I as O}from"./Input-hs0-DsvJ.js";import{I as V}from"./InputSearch-DOIQCbpg.js";import{S as q}from"./Select-B3U-pczH.js";import{I as G,a as y,b as x}from"./Archive-BNxmIM9q.js";import"./preload-helper-C1FmrZbK.js";import"./Spinner-BjmqB2w1.js";import"./InputChrome-RLws-aIV.js";import"./context-YSLqM9pP.js";import"./useTruncated-DZT6EyQu.js";import"./index-DAOdAdyQ.js";import"./ContextIsolator-BRwUpuIq.js";import"./index-BSmWugg0.js";import"./index-BZepmLjH.js";import"./CloseCircleFilled-U51GO4x2.js";import"./useCSSVarCls-2qV6Kap2.js";import"./pickAttrs-BwR6N1Ic.js";import"./EyeOutlined-D6oaBCRI.js";import"./DropdownMenuItem-DIPkA542.js";import"./Radio-RKMtjUxZ.js";import"./index-DFWcBYSm.js";import"./useForm-DcteB1QV.js";import"./index-DLAirbDr.js";import"./Select.module-L1SttIPx.js";import"./PurePanel-DskKyjH6.js";import"./index-PlNzUQFN.js";import"./useShowArrow-BG5xSIIH.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-DDDIwkRC.js";import"./useLocale-C5RInZ-8.js";import"./move-DrY42EjS.js";import"./useIcons-BJDXcmbA.js";import"./CheckOutlined-1AcpI7FG.js";import"./CloseOutlined-Ba06t28w.js";import"./SymbolDelete-CQSneJnr.js";const m=["primary-red","primary-black","secondary","success"],R=["link-red","link-black"],J=["header"],p=["large","medium","small"],S4={title:"UI Kit/Кнопки/Button",id:"ui-kit-button",component:e,tags:["autodocs"],args:{children:"Кнопка",variant:"primary-red",size:"large",disabled:!1},argTypes:{variant:{control:"inline-radio",options:[...m,...R,...J],description:"Заливка, кнопка-ссылка или кнопка шапки"},size:{control:"inline-radio",options:p,description:"Высота: 48 / 42 / 32 (у ссылок — 24, меняется кегль)"},disabled:{control:"boolean",description:"Недоступна"},children:{control:"text",description:"Текст кнопки"},icon:{control:!1,table:{category:"Для разработчиков — передаётся из кода"},description:"Иконка слева от текста"},onClick:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Кнопка. Построена на antd `Button`, тема — `theme/antdTheme.ts`.\n\n| Проп | Значения |\n|---|---|\n| `variant` | `primary-red` · `primary-black` · `secondary` · `success` · `link-red` · `link-black` · `header` |\n| `size` | `large` 48 · `medium` 42 · `small` 32 |\n| `disabled` | true / false |\n| `icon` | любая иконка кита |\n\n**Шрифт** — Montserrat Medium: 16 у Large и Medium, 14 у Small.\n**Medium — 42**, ровно высота поля ввода: кнопка рядом с Input, Select, поиском стоит вровень.\n**Кнопки-ссылки** (`link-red`, `link-black`) — без подложки, высота 24; фокус — рамка 3px вокруг. Без ховер-подъёма.\n**Кнопка шапки** — без подложки в покое, наведение `gray-150`, нажатие `gray-300`; высота 36, иконка 16, подпись 14. Только для белой плашки шапки; со счётчиком на иконке — `HeaderButton`.\n\n**Ховер-подъём** заливных кнопок (сдвиг вверх на 3px + тень `--shadow-button-hover`) — как на сайте Практис, цвет тени свой."}}}},a={},t={parameters:{docs:{description:{story:"Все заливки × все размеры. Наведи — ховер-подъём."}}},render:()=>u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, max-content)",gap:20,alignItems:"center"},children:p.flatMap(n=>m.map(r=>u.jsx(e,{variant:r,size:n,children:"Кнопка"},`${n}-${r}`)))})},i={name:"Недоступна",parameters:{docs:{description:{story:"Неактивная кнопка выглядит одинаково у всех вариантов (красная, чёрная, серая, зелёная) и во всех размерах: фон `--button-disabled-bg` (gray-150), текст `--button-disabled-text` (gray-600), без подъёма и тени. Слева — обычная, справа — неактивная."}}},render:()=>u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, auto auto)",gap:"16px 12px",alignItems:"center",justifyContent:"start",fontFamily:"var(--font-family-body)"},children:m.map(n=>["large","medium","small"].map(r=>u.jsxs("div",{style:{display:"contents"},children:[u.jsx(e,{variant:n,size:r,children:"Кнопка"}),u.jsx(e,{variant:n,size:r,disabled:!0,children:"Кнопка"})]},n+r)))})},s={name:"С иконкой",render:()=>u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:20,alignItems:"center"},children:[p.map(n=>u.jsx(e,{size:n,icon:u.jsx(P,{}),children:"Предложить идею"},n)),u.jsx(e,{variant:"secondary",icon:u.jsx(W,{}),children:"Показать ещё"})]})},o={name:"Длинный текст",args:{children:"Записаться на курс «BIM-моделирование: путь от чертежа до объекта»"}},d={name:"Кнопки-ссылки",parameters:{docs:{description:{story:"link-red и link-black во всех размерах и недоступные. Tab — фокус-рамка."}}},render:()=>u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, max-content)",gap:"20px 32px",alignItems:"center"},children:R.flatMap(n=>[...p.map(r=>u.jsx(e,{variant:n,size:r,icon:u.jsx(_,{}),children:"На главную"},`${n}-${r}`)),u.jsx(e,{variant:n,icon:u.jsx(K,{}),disabled:!0,children:"Недоступна"},`${n}-off`)])})},l={name:"Рядом с полем ввода",parameters:{docs:{description:{story:"Medium (42) стоит вровень с полем ввода, поиском (small) и Select — одна высота, одна линия. Large (48) — для отдельно стоящих главных действий."},story:{height:"260px"}}},render:()=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20,width:640},children:[u.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-end"},children:[u.jsx("div",{style:{flex:1},children:u.jsx(O,{label:"Рабочая почта",placeholder:"name@setl.ru"})}),u.jsx(e,{size:"medium",children:"Подписаться"})]}),u.jsxs("div",{style:{display:"flex",gap:12},children:[u.jsx("div",{style:{flex:1},children:u.jsx(V,{placeholder:"Найти курс"})}),u.jsx("div",{style:{width:200},children:u.jsx(q,{placeholder:"Все темы",options:[{value:"bim",label:"BIM"}]})}),u.jsx(e,{size:"medium",variant:"secondary",children:"Сбросить"})]})]})},c={name:"Кнопки шапки",parameters:{docs:{description:{story:'variant="header" — на белой плашке шапки. Наведи и нажми: подложка gray-150 / gray-300. Без подписи — круглая.'}}},render:()=>u.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:4,height:48,padding:"0 6px",borderRadius:999,background:"var(--color-surface)"},children:[u.jsx(e,{variant:"header",icon:u.jsx(G,{style:{color:"var(--header-favorite-icon)"}}),children:"Избранное"}),u.jsx(e,{variant:"header",icon:u.jsx(y,{}),children:"Уведомления"}),u.jsx(e,{variant:"header",icon:u.jsx(x,{}),children:"Профиль"}),u.jsx(e,{variant:"header",icon:u.jsx(y,{}),"aria-label":"Уведомления"}),u.jsx(e,{variant:"header",icon:u.jsx(x,{}),disabled:!0,children:"Недоступна"})]})},M4=["Playground","Варианты","Недоступна","СИконкой","ДлинныйТекст","Ссылки","РядомСПолем","КнопкиШапки"];var g,v,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var B,E,F;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(F=(E=t.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var f,D,b;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Недоступна",
  parameters: {
    docs: {
      description: {
        story: "Неактивная кнопка выглядит одинаково у всех вариантов (красная, чёрная, серая, зелёная) и во всех размерах: фон \\\`--button-disabled-bg\\\` (gray-150), текст \\\`--button-disabled-text\\\` (gray-600), без подъёма и тени. Слева — обычная, справа — неактивная."
      }
    }
  },
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, auto auto)",
    gap: "16px 12px",
    alignItems: "center",
    justifyContent: "start",
    fontFamily: "var(--font-family-body)"
  }}>
      {variants.map(variant => (["large", "medium", "small"] as const).map(size => <div key={variant + size} style={{
      display: "contents"
    }}>
            <Button variant={variant} size={size}>
              Кнопка
            </Button>
            <Button variant={variant} size={size} disabled>
              Кнопка
            </Button>
          </div>))}
    </div>
}`,...(b=(D=i.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var j,A,I;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(I=(A=s.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var C,k,z;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Длинный текст",
  args: {
    children: "Записаться на курс «BIM-моделирование: путь от чертежа до объекта»"
  }
}`,...(z=(k=o.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var S,M,w;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: "Кнопки-ссылки",
  parameters: {
    docs: {
      description: {
        story: "link-red и link-black во всех размерах и недоступные. Tab — фокус-рамка."
      }
    }
  },
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(4, max-content)",
    gap: "20px 32px",
    alignItems: "center"
  }}>
      {links.flatMap(variant => [...sizes.map(size => <Button key={\`\${variant}-\${size}\`} variant={variant} size={size} icon={<IconArrowLeft />}>
            На главную
          </Button>), <Button key={\`\${variant}-off\`} variant={variant} icon={<IconHeart />} disabled>
          Недоступна
        </Button>])}
    </div>
}`,...(w=(M=d.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var T,$,L;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Рядом с полем ввода",
  parameters: {
    docs: {
      description: {
        story: "Medium (42) стоит вровень с полем ввода, поиском (small) и Select — одна высота, одна линия. Large (48) — для отдельно стоящих главных действий."
      },
      story: {
        height: "260px"
      }
    }
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 20,
    width: 640
  }}>
      <div style={{
      display: "flex",
      gap: 12,
      alignItems: "flex-end"
    }}>
        <div style={{
        flex: 1
      }}>
          <Input label="Рабочая почта" placeholder="name@setl.ru" />
        </div>
        <Button size="medium">Подписаться</Button>
      </div>
      <div style={{
      display: "flex",
      gap: 12
    }}>
        <div style={{
        flex: 1
      }}>
          <InputSearch placeholder="Найти курс" />
        </div>
        <div style={{
        width: 200
      }}>
          <Select placeholder="Все темы" options={[{
          value: "bim",
          label: "BIM"
        }]} />
        </div>
        <Button size="medium" variant="secondary">
          Сбросить
        </Button>
      </div>
    </div>
}`,...(L=($=l.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var U,H,N;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: "Кнопки шапки",
  parameters: {
    docs: {
      description: {
        story: "variant=\\"header\\" — на белой плашке шапки. Наведи и нажми: подложка gray-150 / gray-300. Без подписи — круглая."
      }
    }
  },
  render: () => <div style={{
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    height: 48,
    padding: "0 6px",
    borderRadius: 999,
    background: "var(--color-surface)"
  }}>
      <Button variant="header" icon={<IconFillStar style={{
      color: "var(--header-favorite-icon)"
    }} />}>
        Избранное
      </Button>
      <Button variant="header" icon={<IconFillNotifications />}>
        Уведомления
      </Button>
      <Button variant="header" icon={<IconFillUser />}>
        Профиль
      </Button>
      <Button variant="header" icon={<IconFillNotifications />} aria-label="Уведомления" />
      <Button variant="header" icon={<IconFillUser />} disabled>
        Недоступна
      </Button>
    </div>
}`,...(N=(H=c.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};export{a as Playground,M4 as __namedExportsOrder,S4 as default,t as Варианты,o as ДлинныйТекст,c as КнопкиШапки,i as Недоступна,l as РядомСПолем,s as СИконкой,d as Ссылки};
