import{j as e,B as k,i as E,k as S,l as x,r as b}from"./iframe-T1G-SIdY.js";import{D as h}from"./DropdownMenu-Dv6duW_9.js";import{D as u}from"./fieldParts-DZVs388l.js";import"./preload-helper-C1FmrZbK.js";import"./Scrollbar-CSaLS32m.js";import"./DropdownMenuItem-DOpOoeyh.js";import"./Radio-B887bmkp.js";import"./index-BHPLlts8.js";import"./context-BT_JPeuY.js";import"./pickAttrs-prGlZbsm.js";import"./useCSSVarCls-h8B24G72.js";import"./useForm-kud5EZMb.js";import"./index-BNlT3avm.js";import"./index-CCOMMNKo.js";import"./KeyCode-lh1qUinJ.js";import"./PurePanel-CBq0Z3bd.js";import"./index-DjU6C9F2.js";import"./Overflow-DRYAuKn9.js";import"./collapse-BbEVqHco.js";import"./move-CpVcuHve.js";const w=[{key:"edit",label:"Редактировать",icon:e.jsx(E,{size:16})},{key:"share",label:"Поделиться",icon:e.jsx(S,{size:16})},{type:"divider"},{key:"delete",label:"Удалить курс",icon:e.jsx(x,{size:16}),description:"Отменить будет нельзя"}],g=[{type:"group",label:"Сортировка",line:!1},{key:"new",label:"Сначала новые"},{key:"popular",label:"Сначала популярные"},{key:"alpha",label:"По алфавиту"},{key:"old",label:"Сначала старые",disabled:!0}],q={title:"UI Kit/Навигация/DropdownMenu/DropdownMenu",id:"ui-kit-dropdownmenu",component:h,tags:["autodocs"],args:{items:w,children:e.jsx(k,{variant:"secondary",size:"medium",children:"Действия"}),mark:"none",multiline:!1,width:260},argTypes:{mark:{control:"inline-radio",options:["none","tick","checkbox","radio"],description:"Чем помечать выбранное"},multiline:{control:"boolean",description:"Текст пунктов в несколько строк вместо отточия"},width:{control:"number"},maxHeight:{control:"number",description:"С этой высоты — прокрутка"},items:u,children:u,selectedKeys:u,defaultSelectedKeys:u,onSelectedChange:u,onItemClick:u},parameters:{layout:"padded",docs:{source:{type:"code"},story:{height:"360px"},description:{component:'Выпадающее меню у кнопки. Из praktis-ui-kit (Figma «Практис», Dropdown Menu `189:2587`), вид Setl: контейнер со скруглением 16 и мягкой тенью, пункты — `DropdownMenuItem` (те же, что в списках Select и MultiSelect).\nОбёртка над antd `Dropdown`: открытие, позиционирование, клавиатура (стрелки, Enter, Esc) — от antd.\n\n| Проп | Значения | Что это |\n|---|---|---|\n| `items` | пункты `{ key, label, icon, description, disabled }`, `{ type: "divider" }`, `{ type: "group", label, line }` | содержимое |\n| `mark` | `none` · `tick` · `checkbox` · `radio` | как помечать выбранное |\n| `multiline` | true / false | перенос текста |\n| `width` / `maxHeight` | px | ширина (260) и высота до прокрутки |\n\n**Figma Setl для меню не снималась** — вид собран по аналогии с боковым меню, сверить.'}}},decorators:[n=>e.jsx("div",{style:{minHeight:300},children:e.jsx(n,{})})]},r={},t={parameters:{docs:{description:{story:"mark=tick — выбранное галочкой. Клик выбирает пункт, меню закрывается."}}},render:()=>{const[n,D]=b.useState(["new"]);return e.jsx(h,{items:g,mark:"tick",selectedKeys:n,onSelectedChange:D,children:e.jsx(k,{variant:"secondary",size:"medium",children:"Сортировка"})})}},o={args:{open:!0,items:g,mark:"tick",defaultSelectedKeys:["popular"]},parameters:{docs:{description:{story:"Меню открыто для просмотра: подпись раздела, выбранный, недоступный."}}}},G=["Playground","Выбор","Открыто"];var s,i,a;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(l=o.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};export{r as Playground,G as __namedExportsOrder,q as default,t as Выбор,o as Открыто};
