import{j as e,B as k,l as x,m as D,n as S,r as b}from"./iframe-DATgQ8vN.js";import{D as h}from"./DropdownMenu-Da1eEZTm.js";import{D as u}from"./fieldParts-BtdALjDX.js";import"./preload-helper-C1FmrZbK.js";import"./Scrollbar-Z2aviri_.js";import"./DropdownMenuItem-Cp_mkPe0.js";import"./Radio-B1KVfDtA.js";import"./index-CYvuY-hE.js";import"./context-DazkKd-s.js";import"./pickAttrs-BISx_BUG.js";import"./useCSSVarCls-DaoFEgPu.js";import"./useForm-B0WsWgFz.js";import"./index-CSlfq-xb.js";import"./index-B8sw4QUr.js";import"./index-CeHB25lk.js";import"./ContextIsolator-CeJsXOdt.js";import"./KeyCode-lh1qUinJ.js";import"./PurePanel-AqUBzLFI.js";import"./index-DsieWkth.js";import"./Overflow-BA8TJL25.js";import"./collapse-BbEVqHco.js";import"./move-WRaalpZN.js";const B=[{key:"edit",label:"Редактировать",icon:e.jsx(x,{size:16})},{key:"share",label:"Поделиться",icon:e.jsx(D,{size:16})},{type:"divider"},{key:"delete",label:"Удалить курс",icon:e.jsx(S,{size:16}),description:"Отменить будет нельзя"}],E=[{type:"group",label:"Сортировка",line:!1},{key:"new",label:"Сначала новые"},{key:"popular",label:"Сначала популярные"},{key:"alpha",label:"По алфавиту"},{key:"old",label:"Сначала старые",disabled:!0}],J={title:"UI Kit/Навигация/DropdownMenu/DropdownMenu",id:"ui-kit-dropdownmenu",component:h,tags:["autodocs"],args:{items:B,children:e.jsx(k,{variant:"secondary",size:"medium",children:"Действия"}),mark:"none",multiline:!1,width:260},argTypes:{mark:{control:"inline-radio",options:["none","tick","checkbox","radio"],description:"Чем помечать выбранное"},multiline:{control:"boolean",description:"Текст пунктов в несколько строк вместо отточия"},width:{control:"number"},maxHeight:{control:"number",description:"С этой высоты — прокрутка"},items:u,children:u,selectedKeys:u,defaultSelectedKeys:u,onSelectedChange:u,onItemClick:u},parameters:{layout:"padded",docs:{source:{type:"code"},story:{height:"360px"},description:{component:'Выпадающее меню у кнопки. Из praktis-ui-kit, вид Setl: контейнер со скруглением 16 и мягкой тенью, пункты — `DropdownMenuItem` (те же, что в списках Select и MultiSelect).\nОбёртка над antd `Dropdown`: открытие, позиционирование, клавиатура (стрелки, Enter, Esc) — от antd.\n\n| Проп | Значения | Что это |\n|---|---|---|\n| `items` | пункты `{ key, label, icon, description, disabled }`, `{ type: "divider" }`, `{ type: "group", label, line }` | содержимое |\n| `mark` | `none` · `tick` · `checkbox` · `radio` | как помечать выбранное |\n| `multiline` | true / false | перенос текста |\n| `width` / `maxHeight` | px | ширина (260) и высота до прокрутки |\n\n**'}}},decorators:[n=>e.jsx("div",{style:{minHeight:300},children:e.jsx(n,{})})]},r={},t={parameters:{docs:{description:{story:"mark=tick — выбранное галочкой. Клик выбирает пункт, меню закрывается."}}},render:()=>{const[n,g]=b.useState(["new"]);return e.jsx(h,{items:E,mark:"tick",selectedKeys:n,onSelectedChange:g,children:e.jsx(k,{variant:"secondary",size:"medium",children:"Сортировка"})})}},o={args:{open:!0,items:E,mark:"tick",defaultSelectedKeys:["popular"]},parameters:{docs:{description:{story:"Меню открыто для просмотра: подпись раздела, выбранный, недоступный."}}}},L=["Playground","Выбор","Открыто"];var s,i,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "mark=tick — выбранное галочкой. Клик выбирает пункт, меню закрывается."
      }
    }
  },
  render: () => {
    const [keys, setKeys] = useState(["new"]);
    return <DropdownMenu items={SORT} mark="tick" selectedKeys={keys} onSelectedChange={setKeys}>
        <Button variant="secondary" size="medium">
          Сортировка
        </Button>
      </DropdownMenu>;
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,l,y;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    open: true,
    items: SORT,
    mark: "tick",
    defaultSelectedKeys: ["popular"]
  },
  parameters: {
    docs: {
      description: {
        story: "Меню открыто для просмотра: подпись раздела, выбранный, недоступный."
      }
    }
  }
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};export{r as Playground,L as __namedExportsOrder,J as default,t as Выбор,o as Открыто};
