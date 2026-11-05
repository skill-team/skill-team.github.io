import{j as u,Z as a,$ as s}from"./iframe-SVfPbzFv.js";import{I as e}from"./InfoItem-Di8yI7RD.js";import"./preload-helper-C1FmrZbK.js";const h={title:"UI Kit/Карточки/InfoItem",id:"ui-kit-infoitem",component:e,tags:["autodocs"],args:{icon:u.jsx(a,{size:18}),title:"Приветствуем вас в Setl Академии!",children:"Перед вами карта адаптации нового сотрудника — образовательный маршрут, по которому мы предлагаем пройти."},argTypes:{title:{control:"text"},children:{control:"text",description:"Текст под заголовком"},onPlate:{control:"boolean",description:"Пункт на серой плашке — квадрат иконки белый"},tone:{control:"inline-radio",options:["gray","blue","green","yellow","orange","red","purple"],description:"Цвет квадрата иконки — светлый из палитры уровней, иконка тёмная того же цвета"},badge:{control:"text",description:"Шильдик в углу иконки — «new»"},icon:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Пункт с иконкой — иконка в сером скруглённом квадрате 36 (`--info-item-icon-bg`), справа заголовок `h5` и текст `p3` вторичным цветом. Пример — панель «О карте адаптации» в личном кабинете. Без текста — заголовок по центру иконки. `onPlate` — пункт на серой плашке (`--info-plate-bg`): квадрат иконки белый, как на странице «Актион 360». `tone` — цветной квадрат иконки: светлый цвет из палитры уровней (blue, green, yellow, orange, red, purple), иконка — тёмным того же цвета; `badge` — маленький красный шильдик в углу иконки («new» — новое направление), места не занимает."}}},decorators:[n=>u.jsx("div",{style:{padding:24,width:360,background:"var(--color-surface)"},children:u.jsx(n,{})})]},o={},r={render:()=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[u.jsx(e,{icon:u.jsx(a,{size:18}),title:"О карте",children:"Образовательный маршрут нового сотрудника."}),u.jsx(e,{icon:u.jsx(s,{size:18}),title:"Как пользоваться картой",children:"Идите по шагам по порядку или переходите к любому."})]})},t={name:"На серой плашке",render:()=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[u.jsx("div",{style:{padding:12,borderRadius:16,background:"var(--info-plate-bg)"},children:u.jsx(e,{onPlate:!0,icon:u.jsx(s,{size:16}),title:"Без текста — по центру иконки"})}),u.jsx("div",{style:{padding:16,borderRadius:16,background:"var(--info-plate-bg)"},children:u.jsx(e,{onPlate:!0,icon:u.jsx(a,{size:16}),title:"С текстом",children:"Квадрат иконки белый — на серой плашке он не сливается."})})]})},i={name:"Цвета и шильдик",render:()=>u.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:["blue","green","yellow","orange","red","purple"].map((n,d)=>u.jsx("div",{style:{padding:12,borderRadius:16,background:"var(--info-plate-bg)"},children:u.jsx(e,{tone:n,badge:d>3?"new":void 0,icon:u.jsx(s,{size:16}),title:`tone="${n}"${d>3?', badge="new"':""}`})},n))})},w=["Playground","Список","НаПлашке","Цвета"];var l,c,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,g,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <InfoItem icon={<IconInformation size={18} />} title="О карте">Образовательный маршрут нового сотрудника.</InfoItem>
      <InfoItem icon={<IconRoute size={18} />} title="Как пользоваться картой">Идите по шагам по порядку или переходите к любому.</InfoItem>
    </div>
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,b,I;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "На серой плашке",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      <div style={{
      padding: 12,
      borderRadius: 16,
      background: "var(--info-plate-bg)"
    }}>
        <InfoItem onPlate icon={<IconRoute size={16} />} title="Без текста — по центру иконки" />
      </div>
      <div style={{
      padding: 16,
      borderRadius: 16,
      background: "var(--info-plate-bg)"
    }}>
        <InfoItem onPlate icon={<IconInformation size={16} />} title="С текстом">Квадрат иконки белый — на серой плашке он не сливается.</InfoItem>
      </div>
    </div>
}`,...(I=(b=t.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};var y,v,E;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Цвета и шильдик",
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 12
  }}>
      {(["blue", "green", "yellow", "orange", "red", "purple"] as const).map((t, i) => <div key={t} style={{
      padding: 12,
      borderRadius: 16,
      background: "var(--info-plate-bg)"
    }}>
          <InfoItem tone={t} badge={i > 3 ? "new" : undefined} icon={<IconRoute size={16} />} title={\`tone="\${t}"\${i > 3 ? ', badge="new"' : ""}\`} />
        </div>)}
    </div>
}`,...(E=(v=i.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};export{o as Playground,w as __namedExportsOrder,h as default,t as НаПлашке,r as Список,i as Цвета};
