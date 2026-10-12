import{B as e,j as u,I as N,a as R,b as W,c as G}from"./iframe-CFCi-G_z.js";import{I as K}from"./Input-DxMUVIZM.js";import{I as O}from"./InputSearch-BQbs7Z6n.js";import{S as V}from"./Select-BB40DLFm.js";import{I as q,a as y,b as g}from"./Archive-CVku2Y2A.js";import"./preload-helper-C1FmrZbK.js";import"./Spinner-D-B4sjdZ.js";import"./InputChrome-IlNbsg9R.js";import"./context-x6QakU1z.js";import"./useTruncated-D3AOnDGh.js";import"./index-zH042xrC.js";import"./ContextIsolator-DRazcLis.js";import"./index-CiFNdKY2.js";import"./index-C9yZ3XYq.js";import"./Input-DISfCIgb.js";import"./CloseCircleFilled-KHgVxFq7.js";import"./SearchOutlined-BHrSP-p1.js";import"./useCSSVarCls-HUHG0qLL.js";import"./pickAttrs-DZ5o09-N.js";import"./DropdownMenuItem-BxcJQLvd.js";import"./Radio-AOE7hEzH.js";import"./index-DN7Rm8M0.js";import"./useForm-CmqEyhjQ.js";import"./Select.module-L1SttIPx.js";import"./PurePanel-CQpcQ7LM.js";import"./index-Dyn3QTCL.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-CikPKJr-.js";import"./useLocale-Cay6t4H9.js";import"./move-CjDQpLq-.js";import"./useIcons-DbFr6f9F.js";import"./CloseOutlined-CCxLauq5.js";import"./SymbolDelete-D5DlYVso.js";const m=["primary-red","primary-black","secondary","success"],U=["link-red","link-black"],J=["header"],p=["large","medium","small"],k4={title:"UI Kit/Кнопки/Button",id:"ui-kit-button",component:e,tags:["autodocs"],args:{children:"Кнопка",variant:"primary-red",size:"large",disabled:!1},argTypes:{variant:{control:"inline-radio",options:[...m,...U,...J],description:"Заливка, кнопка-ссылка или кнопка шапки"},size:{control:"inline-radio",options:p,description:"Высота: 48 / 42 / 32 (у ссылок — 24, меняется кегль)"},disabled:{control:"boolean",description:"Недоступна"},children:{control:"text",description:"Текст кнопки"},icon:{control:!1,table:{category:"Для разработчиков — передаётся из кода"},description:"Иконка слева от текста"},onClick:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Кнопка. Figma Setl, node `138:11270` («Кнопки»). Построена на antd `Button`, тема — `theme/antdTheme.ts`.\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| `variant` | `primary-red` · `primary-black` · `secondary` · `success` · `link-red` · `link-black` · `header` | Primary red · Primary black · Secondary · Green · Link-red · Link-black · Header__account__button-notification |\n| `size` | `large` 48 · `medium` 42 · `small` 32 | Size L · M · S |\n| `disabled` | true / false | State=Disabled |\n| `icon` | любая иконка кита | иконка слева (16 у Large и ссылок, 14 у Medium/Small) |\n\n**Шрифт** — Montserrat Medium: 16 у Large и Medium, 14 у Small (стили Figma «Button 16px» / «Button 14px»).\n**Medium — 42**, ровно высота поля ввода: кнопка рядом с Input, Select, поиском стоит вровень (в Figma Medium с иконкой — 42, без иконки — 40; выровнено на 42).\n**Кнопки-ссылки** (`link-red`, `link-black`) — без подложки, высота 24; фокус — рамка 3px вокруг. Без ховер-подъёма.\n**Кнопка шапки** (`header`, Figma `284:60878`) — без подложки в покое, наведение `gray-150` (как у пунктов меню; в макете `gray-200`), нажатие `gray-300`; высота 36, иконка 16, подпись 14. Только для белой плашки шапки; со счётчиком на иконке — `HeaderButton`.\n\n**Ховер-подъём** заливных кнопок (сдвиг вверх на 3px + тень `--shadow-button-hover`) — не из Figma: перенесён с сайта Практис по решению дизайнера, цвет тени свой.\n\n**Не сделано:** состояния Focused/Active заливных кнопок из Figma отдельно не перенесены. Disabled у `primary-black`, `secondary`, `success` взят по аналогии с `primary-red`."}}}},a={},t={parameters:{docs:{description:{story:"Все заливки × все размеры. Наведи — ховер-подъём."}}},render:()=>u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, max-content)",gap:20,alignItems:"center"},children:p.flatMap(n=>m.map(r=>u.jsx(e,{variant:r,size:n,children:"Кнопка"},`${n}-${r}`)))})},i={name:"Недоступна",parameters:{docs:{description:{story:"Неактивная кнопка выглядит одинаково у всех вариантов (красная, чёрная, серая, зелёная) и во всех размерах: фон `--button-disabled-bg` (gray-150), текст `--button-disabled-text` (gray-600), без подъёма и тени. Слева — обычная, справа — неактивная."}}},render:()=>u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, auto auto)",gap:"16px 12px",alignItems:"center",justifyContent:"start",fontFamily:"var(--font-family-body)"},children:m.map(n=>["large","medium","small"].map(r=>u.jsxs("div",{style:{display:"contents"},children:[u.jsx(e,{variant:n,size:r,children:"Кнопка"}),u.jsx(e,{variant:n,size:r,disabled:!0,children:"Кнопка"})]},n+r)))})},s={name:"С иконкой",render:()=>u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:20,alignItems:"center"},children:[p.map(n=>u.jsx(e,{size:n,icon:u.jsx(N,{}),children:"Предложить идею"},n)),u.jsx(e,{variant:"secondary",icon:u.jsx(R,{}),children:"Показать ещё"})]})},o={name:"Длинный текст",args:{children:"Записаться на курс «BIM-моделирование: путь от чертежа до объекта»"}},d={name:"Кнопки-ссылки",parameters:{docs:{description:{story:"link-red и link-black во всех размерах и недоступные. Tab — фокус-рамка."}}},render:()=>u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, max-content)",gap:"20px 32px",alignItems:"center"},children:U.flatMap(n=>[...p.map(r=>u.jsx(e,{variant:n,size:r,icon:u.jsx(W,{}),children:"На главную"},`${n}-${r}`)),u.jsx(e,{variant:n,icon:u.jsx(G,{}),disabled:!0,children:"Недоступна"},`${n}-off`)])})},l={name:"Рядом с полем ввода",parameters:{docs:{description:{story:"Medium (42) стоит вровень с полем ввода, поиском (small) и Select — одна высота, одна линия. Large (48) — для отдельно стоящих главных действий."},story:{height:"260px"}}},render:()=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20,width:640},children:[u.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-end"},children:[u.jsx("div",{style:{flex:1},children:u.jsx(K,{label:"Рабочая почта",placeholder:"name@setl.ru"})}),u.jsx(e,{size:"medium",children:"Подписаться"})]}),u.jsxs("div",{style:{display:"flex",gap:12},children:[u.jsx("div",{style:{flex:1},children:u.jsx(O,{placeholder:"Найти курс"})}),u.jsx("div",{style:{width:200},children:u.jsx(V,{placeholder:"Все темы",options:[{value:"bim",label:"BIM"}]})}),u.jsx(e,{size:"medium",variant:"secondary",children:"Сбросить"})]})]})},c={name:"Кнопки шапки",parameters:{docs:{description:{story:'variant="header" — на белой плашке шапки. Наведи и нажми: подложка gray-150 / gray-300. Без подписи — круглая.'}}},render:()=>u.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:4,height:48,padding:"0 6px",borderRadius:999,background:"var(--color-surface)"},children:[u.jsx(e,{variant:"header",icon:u.jsx(q,{style:{color:"var(--header-favorite-icon)"}}),children:"Избранное"}),u.jsx(e,{variant:"header",icon:u.jsx(y,{}),children:"Уведомления"}),u.jsx(e,{variant:"header",icon:u.jsx(g,{}),children:"Профиль"}),u.jsx(e,{variant:"header",icon:u.jsx(y,{}),"aria-label":"Уведомления"}),u.jsx(e,{variant:"header",icon:u.jsx(g,{}),disabled:!0,children:"Недоступна"})]})},z4=["Playground","Варианты","Недоступна","СИконкой","ДлинныйТекст","Ссылки","РядомСПолем","КнопкиШапки"];var x,v,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var B,F,E;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(E=(F=t.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var f,b,D;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(D=(b=i.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var A,j,I;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(j=s.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var C,k,z;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(L=($=l.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var _,H,P;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(P=(H=c.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};export{a as Playground,z4 as __namedExportsOrder,k4 as default,t as Варианты,o as ДлинныйТекст,c as КнопкиШапки,i as Недоступна,l as РядомСПолем,s as СИконкой,d as Ссылки};
