import{r as x,j as s}from"./iframe-DF43zbcH.js";import{M as c}from"./MultiSelectTag-hkyhXvEJ.js";import"./preload-helper-C1FmrZbK.js";const S={title:"UI Kit/Поля ввода/MultiSelect/MultiSelectTag",id:"ui-kit-multiselecttag",component:c,tags:["autodocs"],args:{children:"Охрана труда",disabled:!1},argTypes:{children:{control:"text",description:"Текст тега"},disabled:{control:"boolean",description:"Недоступен — без крестика"},onRemove:{control:!1,table:{category:"Для разработчиков — передаётся из кода"},description:"Есть — у тега крестик"}},parameters:{docs:{description:{component:"Тег выбранного значения — то, из чего MultiSelect собирает поле. Можно ставить и вне поля. Из praktis-ui-kit (multi-select__value), вид Setl: высота 24, «таблетка», текст 14, цвета `--tag-*`. Без `onRemove` — тег без крестика (так рисуется «+N»). ****"}}}},t={args:{onRemove:()=>{}}},r={parameters:{docs:{description:{story:"Крестик удаляет тег."}}},render:()=>{const[d,p]=x.useState(["BIM","Охрана труда","Документооборот","+2"]);return s.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,width:320},children:d.map(e=>s.jsx(c,{onRemove:e.startsWith("+")?void 0:()=>p(m=>m.filter(g=>g!==e)),children:e},e))})}},E=["Playground","Удаление"];var a,o,u;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    onRemove: () => {}
  }
}`,...(u=(o=t.parameters)==null?void 0:o.docs)==null?void 0:u.source}}};var n,i,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Крестик удаляет тег."
      }
    }
  },
  render: () => {
    const [tags, setTags] = useState(["BIM", "Охрана труда", "Документооборот", "+2"]);
    return <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      width: 320
    }}>
        {tags.map(t => <MultiSelectTag key={t} onRemove={t.startsWith("+") ? undefined : () => setTags(all => all.filter(x => x !== t))}>
            {t}
          </MultiSelectTag>)}
      </div>;
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};export{t as Playground,E as __namedExportsOrder,S as default,r as Удаление};
