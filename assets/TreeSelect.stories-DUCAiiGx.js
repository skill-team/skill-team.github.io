import{j as u}from"./iframe-wfJ_y6tk.js";import{T as r}from"./TreeSelect-BjbjN231.js";import{p as a,D as e,f as v}from"./fieldParts-CNLa7vql.js";import"./preload-helper-C1FmrZbK.js";import"./SymbolDelete-CJquarAM.js";import"./InputChrome-DH630Ad-.js";import"./context-BtIUxdFu.js";import"./useTruncated-BK8cY36k.js";import"./index-DK8SjL2j.js";import"./ContextIsolator-8G1DI5TY.js";import"./Spinner-0rG8RZBH.js";import"./MultiSelect.module-CvPZsC0U.js";import"./MultiSelectTag-oTGD-ukt.js";import"./Select.module-L1SttIPx.js";import"./useShowArrow-eXjq3W-v.js";import"./KeyCode-lh1qUinJ.js";import"./pickAttrs-DzhteYie.js";import"./Overflow-Cofq_D13.js";import"./useLocale-B0NX3RbO.js";import"./move-CHiurvd8.js";import"./useIcons-CzSgdsuc.js";import"./CheckOutlined-Cvq9bh_0.js";import"./CloseCircleFilled-B-2k4t7L.js";import"./CloseOutlined-BMu17Hic.js";import"./iconUtil-5Ly8vQ4b.js";import"./index-CA55xMRb.js";import"./collapse-BbEVqHco.js";import"./PurePanel-B9LUDZ6O.js";import"./useCSSVarCls-Dp79i034.js";const F=[{value:"d1",title:"Дирекция по строительству №1",children:[{value:"d1-tn",title:"Отдел технического надзора",children:[{value:"d1-tn-pto",title:"Группа ПТО"},{value:"d1-tn-geo",title:"Группа геодезии"}]},{value:"d1-sn",title:"Отдел снабжения"}]},{value:"gp",title:"Дирекция генерального подряда",children:[{value:"gp-ip",title:"Отдел интернет-проектов",children:[{value:"gp-ip-fe",title:"Группа frontend-разработки"},{value:"gp-ip-be",title:"Группа backend-разработки"},{value:"gp-ip-qa",title:"Группа тестирования"}]},{value:"gp-sm",title:"Сметный отдел"}]},{value:"hr",title:"Отдел обучения и развития корпоративной культуры",children:[{value:"hr-acad",title:"Академия"},{value:"hr-att",title:"Группа подготовки и аттестации инженерно-технических работников строительных площадок"}]}],r4={title:"UI Kit/Поля ввода/TreeSelect",id:"ui-kit-treeselect",component:r,tags:["autodocs"],args:{label:"Подразделение",placeholder:"Выберите подразделение",treeData:F,checkable:!1,singleLine:!1,required:!1,infoText:"",status:"",errorMessage:"Выберите подразделение",disabled:!1,loading:!1,loadError:!1,showSearch:!0},argTypes:{label:{control:"text"},placeholder:{control:"text"},checkable:{control:"boolean",description:"Несколько значений: чекбоксы в списке, выбранное — тегами"},singleLine:{control:"boolean",description:"С checkable: теги в одну строку, лишние — «+N»"},showSearch:{control:"boolean",description:"Поиск — набором прямо в поле"},required:{control:"boolean",table:{category:"Слоты"}},infoText:{control:"text",table:{category:"Слоты"}},status:{control:{type:"inline-radio",labels:{"":"обычный",error:"error"}},options:["","error"]},errorMessage:{control:"text"},disabled:{control:"boolean"},loading:{control:"boolean",description:"Спиннер + «Загрузка…», список не открывается"},loadError:{control:"boolean",description:"Не загрузилось: красная рамка + «повторить»"},treeData:e,onRetry:e,emptyState:e,value:e,defaultValue:e,onChange:e},...a,decorators:[...a.decorators,v()],parameters:{...a.parameters,docs:{...a.parameters.docs,description:{component:"Выпадающий список с иерархией: дирекция → отдел → группа, раздел → подраздел и т. п. Из praktis-ui-kit, вид Setl. Построен на antd **TreeSelect** — раскрытие веток, поиск и связанный выбор родителя и детей работают как у antd. Поле — то же, что у **Select** и **MultiSelect**: подпись, обязательность, подсказка, ошибка, загрузка, ошибка загрузки, пустой список.\n\n**Два режима**\n- **Один пункт** (по умолчанию) — без чекбоксов, выбрать можно только конечный пункт; клик по родителю раскрывает и сворачивает ветку. Выбранный — красным. На заполненном поле при наведении вместо шеврона — крестик «очистить».\n- **Несколько** (`checkable`) — чекбоксы, выбранное — тегами, как у MultiSelect. Отметили родителя — отмечены все вложенные; отметили вложенный — только он, у родителя частичная отметка. Целиком отмеченная ветка — **одним тегом**. `singleLine` — теги в одну строку, лишние — «+N».\n\n**Весь путь.** В поле и в тегах — путь пункта: «Дирекция генерального подряда / Отдел интернет-проектов / Группа тестирования», в списке — только название. Не поместилось — путь сокращается **с начала** целыми частями: «… / Отдел интернет-проектов / Группа тестирования», затем «… / Группа тестирования»; полный — в тултипе.\n\n**Иерархия.** Шеврон → чекбокс → текст; у пункта без вложенных на месте шеврона пусто — тексты одного уровня стоят ровной колонкой. Шаг уровня 26. Пункт — как `DropdownMenuItem` Setl.\n\n**Поиск** — набором прямо в поле, как у `Select` и `MultiSelect`: дерево фильтруется, ветки с найденным раскрываются, совпадения выделены красным; отметили пункт — запрос остаётся, можно отметить ещё. Выключить — `showSearch={false}`.\n"}}}},o={},l={name:"Открытый список — один пункт",args:{defaultValue:"gp-ip-qa",open:!0,treeDefaultExpandedKeys:["gp","gp-ip"]},parameters:{docs:{description:{story:"Выбран конечный пункт — в поле весь путь (сокращён с начала, если не влез), в списке пункт красным."}}}},n={name:"Несколько (checkable)",args:{checkable:!0,defaultValue:["gp-ip","d1-tn-geo"],open:!0,treeDefaultExpandedKeys:["gp","gp-ip","d1","d1-tn"],placeholder:"Выберите подразделения"},parameters:{docs:{description:{story:"Ветка «Отдел интернет-проектов» отмечена целиком — один тег; «Группа геодезии» — отдельно, у её отдела частичная отметка."}}}},s={name:"Несколько — теги в одну строку",args:{checkable:!0,singleLine:!0,defaultValue:["gp-ip-fe","gp-ip-be","d1-sn","hr-acad"],placeholder:"Выберите подразделения"}},i={render:t=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[u.jsx(r,{...t,label:"Загрузка",loading:!0}),u.jsx(r,{...t,label:"Не загрузилось",loadError:!0,onRetry:()=>{}}),u.jsx(r,{...t,label:"Ошибка",status:"error",errorMessage:"Выберите подразделение"}),u.jsx(r,{...t,label:"Недоступно",disabled:!0,defaultValue:"gp-sm"}),u.jsx(r,{...t,label:"Пусто",treeData:[]})]})},t4=["Playground","ОткрытыйСписок","Несколько","ВОднуСтроку","Состояния"];var p,c,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var m,g,E;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Открытый список — один пункт",
  args: {
    defaultValue: "gp-ip-qa",
    open: true,
    treeDefaultExpandedKeys: ["gp", "gp-ip"]
  },
  parameters: {
    docs: {
      description: {
        story: "Выбран конечный пункт — в поле весь путь (сокращён с начала, если не влез), в списке пункт красным."
      }
    }
  }
}`,...(E=(g=l.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};var b,D,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: "Несколько (checkable)",
  args: {
    checkable: true,
    defaultValue: ["gp-ip", "d1-tn-geo"],
    open: true,
    treeDefaultExpandedKeys: ["gp", "gp-ip", "d1", "d1-tn"],
    placeholder: "Выберите подразделения"
  },
  parameters: {
    docs: {
      description: {
        story: "Ветка «Отдел интернет-проектов» отмечена целиком — один тег; «Группа геодезии» — отдельно, у её отдела частичная отметка."
      }
    }
  }
}`,...(f=(D=n.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var h,x,B;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Несколько — теги в одну строку",
  args: {
    checkable: true,
    singleLine: true,
    defaultValue: ["gp-ip-fe", "gp-ip-be", "d1-sn", "hr-acad"],
    placeholder: "Выберите подразделения"
  }
}`,...(B=(x=s.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var S,y,A;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>
      <TreeSelect {...args} label="Загрузка" loading />
      <TreeSelect {...args} label="Не загрузилось" loadError onRetry={() => {}} />
      <TreeSelect {...args} label="Ошибка" status="error" errorMessage="Выберите подразделение" />
      <TreeSelect {...args} label="Недоступно" disabled defaultValue="gp-sm" />
      <TreeSelect {...args} label="Пусто" treeData={[]} />
    </div>
}`,...(A=(y=i.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};export{o as Playground,t4 as __namedExportsOrder,r4 as default,s as ВОднуСтроку,n as Несколько,l as ОткрытыйСписок,i as Состояния};
