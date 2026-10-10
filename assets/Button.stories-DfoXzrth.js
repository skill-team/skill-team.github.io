import{B as e,j as u,I as W,a as N,b as R,c as G}from"./iframe-T1G-SIdY.js";import{I as K}from"./Input-D5Kbb44B.js";import{I as O}from"./InputSearch-Cu9LlT-G.js";import{S as V}from"./Select-DK5-RWu6.js";import{I as q,a as x,b as y}from"./StopSquare-CfNJlp54.js";import"./preload-helper-C1FmrZbK.js";import"./Spinner-CnJbqGOK.js";import"./InputChrome-CODlI84f.js";import"./context-BT_JPeuY.js";import"./useTruncated-wUfbEmiw.js";import"./index-CCOMMNKo.js";import"./index-BTCs0-Pv.js";import"./index-bDfGxc6v.js";import"./Input-DMkgWIZL.js";import"./CloseCircleFilled-lErke8Fw.js";import"./SearchOutlined-BlwStQf3.js";import"./useCSSVarCls-h8B24G72.js";import"./pickAttrs-prGlZbsm.js";import"./DropdownMenuItem-DOpOoeyh.js";import"./Radio-B887bmkp.js";import"./index-BHPLlts8.js";import"./useForm-kud5EZMb.js";import"./Select.module-L1SttIPx.js";import"./PurePanel-CBq0Z3bd.js";import"./index-CLRR8GDC.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-DRYAuKn9.js";import"./useLocale-w2fOQfta.js";import"./move-CpVcuHve.js";import"./useIcons-t3jf6XO0.js";import"./CloseOutlined-Du0dHgkK.js";import"./SymbolDelete-BWfO80vL.js";const m=["primary-red","primary-black","secondary","success"],U=["link-red","link-black"],J=["header"],p=["large","medium","small"],A4={title:"UI Kit/Кнопки/Button",id:"ui-kit-button",component:e,tags:["autodocs"],args:{children:"Кнопка",variant:"primary-red",size:"large",disabled:!1},argTypes:{variant:{control:"inline-radio",options:[...m,...U,...J],description:"Заливка, кнопка-ссылка или кнопка шапки"},size:{control:"inline-radio",options:p,description:"Высота: 48 / 42 / 32 (у ссылок — 24, меняется кегль)"},disabled:{control:"boolean",description:"Недоступна"},children:{control:"text",description:"Текст кнопки"},icon:{control:!1,table:{category:"Для разработчиков — передаётся из кода"},description:"Иконка слева от текста"},onClick:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Кнопка. Figma Setl, node `138:11270` («Кнопки»). Построена на antd `Button`, тема — `theme/antdTheme.ts`.\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| `variant` | `primary-red` · `primary-black` · `secondary` · `success` · `link-red` · `link-black` · `header` | Primary red · Primary black · Secondary · Green · Link-red · Link-black · Header__account__button-notification |\n| `size` | `large` 48 · `medium` 42 · `small` 32 | Size L · M · S |\n| `disabled` | true / false | State=Disabled |\n| `icon` | любая иконка кита | иконка слева (16 у Large и ссылок, 14 у Medium/Small) |\n\n**Шрифт** — Montserrat Medium: 16 у Large и Medium, 14 у Small (стили Figma «Button 16px» / «Button 14px»).\n**Medium — 42**, ровно высота поля ввода: кнопка рядом с Input, Select, поиском стоит вровень (в Figma Medium с иконкой — 42, без иконки — 40; выровнено на 42).\n**Кнопки-ссылки** (`link-red`, `link-black`) — без подложки, высота 24; фокус — рамка 3px вокруг. Без ховер-подъёма.\n**Кнопка шапки** (`header`, Figma `284:60878`) — без подложки в покое, наведение `gray-150` (как у пунктов меню; в макете `gray-200`), нажатие `gray-300`; высота 36, иконка 16, подпись 14. Только для белой плашки шапки; со счётчиком на иконке — `HeaderButton`.\n\n**Ховер-подъём** заливных кнопок (сдвиг вверх на 3px + тень `--shadow-button-hover`) — не из Figma: перенесён с сайта Практис по решению дизайнера, цвет тени свой.\n\n**Не сделано:** состояния Focused/Active заливных кнопок из Figma отдельно не перенесены. Disabled у `primary-black`, `secondary`, `success` взят по аналогии с `primary-red`."}}}},a={},i={parameters:{docs:{description:{story:"Все заливки × все размеры. Наведи — ховер-подъём."}}},render:()=>u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, max-content)",gap:20,alignItems:"center"},children:p.flatMap(n=>m.map(r=>u.jsx(e,{variant:r,size:n,children:"Кнопка"},`${n}-${r}`)))})},t={render:()=>u.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:20},children:m.map(n=>u.jsx(e,{variant:n,disabled:!0,children:"Кнопка"},n))})},s={name:"С иконкой",render:()=>u.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:20,alignItems:"center"},children:[p.map(n=>u.jsx(e,{size:n,icon:u.jsx(W,{}),children:"Предложить идею"},n)),u.jsx(e,{variant:"secondary",icon:u.jsx(N,{}),children:"Показать ещё"})]})},o={name:"Длинный текст",args:{children:"Записаться на курс «BIM-моделирование: путь от чертежа до объекта»"}},d={name:"Кнопки-ссылки",parameters:{docs:{description:{story:"link-red и link-black во всех размерах и недоступные. Tab — фокус-рамка."}}},render:()=>u.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, max-content)",gap:"20px 32px",alignItems:"center"},children:U.flatMap(n=>[...p.map(r=>u.jsx(e,{variant:n,size:r,icon:u.jsx(R,{}),children:"На главную"},`${n}-${r}`)),u.jsx(e,{variant:n,icon:u.jsx(G,{}),disabled:!0,children:"Недоступна"},`${n}-off`)])})},l={name:"Рядом с полем ввода",parameters:{docs:{description:{story:"Medium (42) стоит вровень с полем ввода, поиском (small) и Select — одна высота, одна линия. Large (48) — для отдельно стоящих главных действий."},story:{height:"260px"}}},render:()=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20,width:640},children:[u.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-end"},children:[u.jsx("div",{style:{flex:1},children:u.jsx(K,{label:"Рабочая почта",placeholder:"name@setl.ru"})}),u.jsx(e,{size:"medium",children:"Подписаться"})]}),u.jsxs("div",{style:{display:"flex",gap:12},children:[u.jsx("div",{style:{flex:1},children:u.jsx(O,{placeholder:"Найти курс"})}),u.jsx("div",{style:{width:200},children:u.jsx(V,{placeholder:"Все темы",options:[{value:"bim",label:"BIM"}]})}),u.jsx(e,{size:"medium",variant:"secondary",children:"Сбросить"})]})]})},c={name:"Кнопки шапки",parameters:{docs:{description:{story:'variant="header" — на белой плашке шапки. Наведи и нажми: подложка gray-150 / gray-300. Без подписи — круглая.'}}},render:()=>u.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:4,height:48,padding:"0 6px",borderRadius:999,background:"var(--color-surface)"},children:[u.jsx(e,{variant:"header",icon:u.jsx(q,{style:{color:"var(--header-favorite-icon)"}}),children:"Избранное"}),u.jsx(e,{variant:"header",icon:u.jsx(x,{}),children:"Уведомления"}),u.jsx(e,{variant:"header",icon:u.jsx(y,{}),children:"Профиль"}),u.jsx(e,{variant:"header",icon:u.jsx(x,{}),"aria-label":"Уведомления"}),u.jsx(e,{variant:"header",icon:u.jsx(y,{}),disabled:!0,children:"Недоступна"})]})},C4=["Playground","Варианты","Недоступна","СИконкой","ДлинныйТекст","Ссылки","РядомСПолем","КнопкиШапки"];var g,v,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var B,f,E;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(E=(f=i.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var F,b,I;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: 20
  }}>
      {variants.map(variant => <Button key={variant} variant={variant} disabled>
          Кнопка
        </Button>)}
    </div>
}`,...(I=(b=t.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var D,j,k;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(k=(j=s.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var A,C,S;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Длинный текст",
  args: {
    children: "Записаться на курс «BIM-моделирование: путь от чертежа до объекта»"
  }
}`,...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var z,M,w;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(w=(M=d.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var $,L,T;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(T=(L=l.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var _,H,P;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(P=(H=c.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};export{a as Playground,C4 as __namedExportsOrder,A4 as default,i as Варианты,o as ДлинныйТекст,c as КнопкиШапки,t as Недоступна,l as РядомСПолем,s as СИконкой,d as Ссылки};
