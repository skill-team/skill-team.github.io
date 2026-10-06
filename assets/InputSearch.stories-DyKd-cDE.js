import{j as u,r as a,g as f,h as E}from"./iframe-DCXgeGQz.js";import{I as s}from"./InputSearch-a2VvNEZs.js";import{D as l}from"./fieldParts-CCu4UZF-.js";import"./preload-helper-C1FmrZbK.js";import"./DropdownMenuItem-CkG9mHbq.js";import"./Radio-DewLZ3Om.js";import"./useCSSVarCls-CcUg8sJf.js";import"./context-Cf_eQdng.js";import"./pickAttrs-DkFrowIo.js";import"./useForm-DAnkVyYO.js";import"./Select.module-CfpVDu4I.js";import"./index-DsToMKrP.js";import"./KeyCode-CYKQyFFT.js";import"./Overflow-I_lWx3_h.js";import"./PurePanel-DMvj5ZMf.js";import"./InputChrome-zHxysjNv.js";import"./useTruncated-RsVvaZAD.js";import"./useLocale-BQcte7TJ.js";import"./useIcons-BgN3EQXl.js";import"./Spinner-w4Ecu8Fw.js";import"./index-DIzNnNPF.js";import"./index-CaExZMU_.js";const r={big:600,bigMob:316,small:339};function c({title:e,width:n,children:t}){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,width:n},children:[u.jsx("span",{style:{fontFamily:"system-ui, sans-serif",fontSize:12,color:"#7e7e7e"},children:e}),t]})}const x4={title:"UI Kit/Поля ввода/InputSearch",id:"ui-kit-inputsearch",component:s,tags:["autodocs"],args:{mode:"submit",size:"small",device:"web",placeholder:"Что хотите найти?",disabled:!1,loading:!1},argTypes:{mode:{control:"inline-radio",options:["submit","instant"],description:"submit — по лупе и Enter; instant — результаты сразу в списке"},size:{control:"inline-radio",options:["big","small"],description:"big — крупный поиск на главной; small — внутри компонентов"},device:{control:"inline-radio",options:["web","mob"],description:"Только для big: web — 72, mob — 64"},placeholder:{control:"text"},disabled:{control:"boolean"},loading:{control:"boolean",description:"Спиннер вместо лупы — идёт поиск"},label:{control:"text",table:{category:"Слоты"},description:"Лейбл над полем — обычно у поиска нет"},onSearch:l,results:l,onSelectResult:l,value:l,defaultValue:l,onChange:l},decorators:[(e,n)=>n.name==="Playground"?u.jsx("div",{style:{width:n.args.size==="big"?n.args.device==="mob"?r.bigMob:r.big:r.small},children:u.jsx(e,{})}):u.jsx(e,{})],parameters:{docs:{description:{component:'Поле поиска — Figma Setl, Search `559:134208`.\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| `size` | `big` · `small` | Variant=Big — крупный поиск на главной · Variant=Small — внутри компонентов |\n| `device` | `web` · `mob` (только big) | Device=Web 72 · Mob 64 |\n| `mode` | `submit` · `instant` | см. «Два режима» ниже |\n| `onSearch` | (value) => … | submit: лупа и Enter; крестик — `onSearch("")` |\n| `results`, `onSelectResult` | `{ key, label, description, icon }[]` | instant: список под полем и выбор |\n| `loading` | true / false | спиннер вместо лупы |\n\n### Два режима — выбирает страница\n\n- **`submit`** (по умолчанию) — пользователь вводит запрос и жмёт лупу (это кнопка) или Enter → `onSearch(текст)`. Результаты показывает сама страница: таблица, список, отдельная страница результатов. Для тяжёлого поиска (по всей базе, с фильтрами) и когда результатов много.\n- **`instant`** — результаты сразу при вводе, в выпадающем списке под полем; лупа — просто иконка, нажимать её не нужно. Страница ищет на каждый `onChange` (с задержкой ~300 мс, чтобы не дёргать сервер на каждую букву) и отдаёт `results`; выбор строки (мышью или ↑↓ Enter) — `onSelectResult`. Ничего не нашлось — «Упс! Такого не нашлось». Для быстрого перехода к конкретной вещи: курс, статья, сотрудник.\n\nПодробно, с примерами кода — `components/atoms/Input/InputSearch.md`.\n\nРазмеры: **big web** — 72, отступы 24, Montserrat Regular 18; **big mob** — 64, отступы 20, 16; **small** — 42, отступы 16, Montserrat Medium 16. Small в макете 48 — выровнен на 42, высоту полей и кнопки Medium: стоит с ними в одну строку.\nСправа — **кнопки**, а не иконки: лупа запускает поиск, крестик очищает. У big пусто — лупа, введено — только крестик; у small введено — крестик и лупа рядом.\nСостояния: big в покое без рамки (белое на сером фоне страницы), наведение — рамка `gray-300`, фокус — `gray-main`; small — рамка `gray-400`, фокус — `gray-main`.'}}}},d={},h=(e,n,t)=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[u.jsx(c,{title:"Default (наведи — Hover)",width:t,children:u.jsx(s,{size:e,device:n})}),u.jsx(c,{title:"Filled",width:t,children:u.jsx(s,{size:e,device:n,defaultValue:"Курс по ИИ"})}),u.jsx(c,{title:"Loading",width:t,children:u.jsx(s,{size:e,device:n,defaultValue:"Курс по ИИ",loading:!0})}),u.jsx(c,{title:"Disabled",width:t,children:u.jsx(s,{size:e,device:n,disabled:!0})})]}),m={name:"Big — главная (web)",render:()=>h("big","web",r.big)},p={name:"Big — главная (mob)",render:()=>h("big","mob",r.bigMob)},y={name:"Small — в компонентах",render:()=>h("small","web",r.small)},G=["BIM-моделирование: путь от чертежа до объекта","Хронология оформления документов","7 привычек, которые незаметно крадут время","Охрана труда на стройплощадке"],g={name:"Поиск по списку",parameters:{docs:{description:{story:"Small: введи «охрана» и нажми Enter или лупу — список отфильтруется; крестик сбрасывает."}}},render:()=>{const[e,n]=a.useState(""),t=G.filter(o=>o.toLowerCase().includes(e.trim().toLowerCase()));return u.jsxs("div",{style:{width:r.small,display:"flex",flexDirection:"column",gap:12,fontFamily:"var(--font-family-body)"},children:[u.jsx(s,{placeholder:"Найти курс",onSearch:n}),t.map(o=>u.jsx("div",{style:{fontSize:14,color:"var(--color-text-primary)"},children:o},o)),t.length===0&&u.jsx("div",{style:{fontSize:14,color:"var(--color-text-secondary)"},children:"Упс! Такого не нашлось"})]})}},K=[{key:"c1",label:"BIM-моделирование: путь от чертежа до объекта",description:"Курс · 12 уроков",icon:u.jsx(f,{size:16})},{key:"c2",label:"Охрана труда на стройплощадке",description:"Курс · 6 уроков",icon:u.jsx(f,{size:16})},{key:"c3",label:"Деловое общение. Электронная переписка",description:"Курс · 8 уроков",icon:u.jsx(f,{size:16})},{key:"a1",label:"Как устроен документооборот в Сетл",description:"Статья · База знаний",icon:u.jsx(E,{size:16})},{key:"a2",label:"Охрана труда: что изменилось в 2026 году",description:"Новость · 12.09.2026",icon:u.jsx(E,{size:16})}],U=e=>K.filter(n=>n.label.toLowerCase().includes(e.trim().toLowerCase())),b={name:"Режим submit — по кнопке",parameters:{docs:{description:{story:"Введи «охрана» и нажми лупу или Enter — результаты покажет страница (список ниже). Пока не нажал — список не меняется."}}},render:()=>{const[e,n]=a.useState(null);return u.jsxs("div",{style:{width:r.small,display:"flex",flexDirection:"column",gap:12,fontFamily:"var(--font-family-body)",fontSize:14},children:[u.jsx(s,{mode:"submit",placeholder:"Найти курс или статью",onSearch:t=>n(t?U(t):null)}),e===null&&u.jsx("span",{style:{color:"var(--color-text-secondary)"},children:"Результаты появятся после нажатия на лупу или Enter"}),e==null?void 0:e.map(t=>u.jsx("span",{style:{color:"var(--color-text-primary)"},children:t.label},t.key)),(e==null?void 0:e.length)===0&&u.jsx("span",{style:{color:"var(--color-text-secondary)"},children:"Упс! Такого не нашлось"})]})}},x={name:"Режим instant — сразу в списке",parameters:{docs:{story:{height:"380px"},description:{story:"Введи «охрана» — результаты появятся сразу в списке под полем (с имитацией загрузки 300 мс). ↑↓ и Enter или клик — выбор. «тверь» — «Упс! Такого не нашлось»."}}},render:()=>{const[e,n]=a.useState(""),[t,o]=a.useState([]),[_,S]=a.useState(!1),[B,$]=a.useState(null);return a.useEffect(()=>{if(!e.trim()){o([]);return}S(!0);const i=setTimeout(()=>{o(U(e)),S(!1)},300);return()=>clearTimeout(i)},[e]),u.jsxs("div",{style:{width:r.small,display:"flex",flexDirection:"column",gap:12,minHeight:300,fontFamily:"var(--font-family-body)",fontSize:14},children:[u.jsx(s,{mode:"instant",placeholder:"Найти курс или статью",onChange:i=>n(i.target.value),results:t,loading:_,onSelectResult:i=>$(i.label)}),u.jsx("span",{style:{color:"var(--color-text-secondary)"},children:B?`Открыли: ${B}`:"Выбери результат в списке"})]})}},f4=["Playground","Big","BigMob","Small","ПоискПоСписку","РежимSubmit","РежимInstant"];var D,F,v;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(v=(F=d.parameters)==null?void 0:F.docs)==null?void 0:v.source}}};var C,A,j;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: "Big — главная (web)",
  render: () => states("big", "web", WIDTH.big)
}`,...(j=(A=m.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var w,I,k;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Big — главная (mob)",
  render: () => states("big", "mob", WIDTH.bigMob)
}`,...(k=(I=p.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var R,z,M;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "Small — в компонентах",
  render: () => states("small", "web", WIDTH.small)
}`,...(M=(z=y.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var T,L,q;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: "Поиск по списку",
  parameters: {
    docs: {
      description: {
        story: "Small: введи «охрана» и нажми Enter или лупу — список отфильтруется; крестик сбрасывает."
      }
    }
  },
  render: () => {
    const [query, setQuery] = useState("");
    const found = COURSES.filter(c => c.toLowerCase().includes(query.trim().toLowerCase()));
    return <div style={{
      width: WIDTH.small,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      fontFamily: "var(--font-family-body)"
    }}>
        <InputSearch placeholder="Найти курс" onSearch={setQuery} />
        {found.map(c => <div key={c} style={{
        fontSize: 14,
        color: "var(--color-text-primary)"
      }}>
            {c}
          </div>)}
        {found.length === 0 && <div style={{
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>Упс! Такого не нашлось</div>}
      </div>;
  }
}`,...(q=(L=g.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};var H,W,P;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Режим submit — по кнопке",
  parameters: {
    docs: {
      description: {
        story: "Введи «охрана» и нажми лупу или Enter — результаты покажет страница (список ниже). Пока не нажал — список не меняется."
      }
    }
  },
  render: () => {
    const [found, setFound] = useState<SearchResult[] | null>(null);
    return <div style={{
      width: WIDTH.small,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      fontFamily: "var(--font-family-body)",
      fontSize: 14
    }}>
        <InputSearch mode="submit" placeholder="Найти курс или статью" onSearch={q => setFound(q ? searchCatalog(q) : null)} />
        {found === null && <span style={{
        color: "var(--color-text-secondary)"
      }}>Результаты появятся после нажатия на лупу или Enter</span>}
        {found?.map(r => <span key={r.key} style={{
        color: "var(--color-text-primary)"
      }}>
            {r.label}
          </span>)}
        {found?.length === 0 && <span style={{
        color: "var(--color-text-secondary)"
      }}>Упс! Такого не нашлось</span>}
      </div>;
  }
}`,...(P=(W=b.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var Q,V,O;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: "Режим instant — сразу в списке",
  parameters: {
    docs: {
      story: {
        height: "380px"
      },
      description: {
        story: "Введи «охрана» — результаты появятся сразу в списке под полем (с имитацией загрузки 300 мс). ↑↓ и Enter или клик — выбор. «тверь» — «Упс! Такого не нашлось»."
      }
    }
  },
  render: () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<SearchResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [picked, setPicked] = useState<string | null>(null);
    // Как на странице: ищем на ввод с задержкой 300 мс, пока ищем — спиннер
    useEffect(() => {
      if (!query.trim()) {
        setResults([]);
        return;
      }
      setLoading(true);
      const t = setTimeout(() => {
        setResults(searchCatalog(query));
        setLoading(false);
      }, 300);
      return () => clearTimeout(t);
    }, [query]);
    return <div style={{
      width: WIDTH.small,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      minHeight: 300,
      fontFamily: "var(--font-family-body)",
      fontSize: 14
    }}>
        <InputSearch mode="instant" placeholder="Найти курс или статью" onChange={e => setQuery(e.target.value)} results={results} loading={loading} onSelectResult={r => setPicked(r.label)} />
        <span style={{
        color: "var(--color-text-secondary)"
      }}>{picked ? \`Открыли: \${picked}\` : "Выбери результат в списке"}</span>
      </div>;
  }
}`,...(O=(V=x.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};export{m as Big,p as BigMob,d as Playground,y as Small,f4 as __namedExportsOrder,x4 as default,g as ПоискПоСписку,x as РежимInstant,b as РежимSubmit};
