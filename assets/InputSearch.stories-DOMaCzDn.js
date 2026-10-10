import{j as u,r,g as D,h as C}from"./iframe-T1G-SIdY.js";import{I as a}from"./InputSearch-Cu9LlT-G.js";import{D as c}from"./fieldParts-DZVs388l.js";import"./preload-helper-C1FmrZbK.js";import"./DropdownMenuItem-DOpOoeyh.js";import"./Radio-B887bmkp.js";import"./index-BHPLlts8.js";import"./context-BT_JPeuY.js";import"./pickAttrs-prGlZbsm.js";import"./useCSSVarCls-h8B24G72.js";import"./useForm-kud5EZMb.js";import"./Select.module-L1SttIPx.js";import"./Spinner-CnJbqGOK.js";import"./InputChrome-CODlI84f.js";import"./useTruncated-wUfbEmiw.js";import"./index-CCOMMNKo.js";import"./index-BTCs0-Pv.js";import"./index-bDfGxc6v.js";import"./Input-DMkgWIZL.js";import"./CloseCircleFilled-lErke8Fw.js";import"./SearchOutlined-BlwStQf3.js";import"./PurePanel-CBq0Z3bd.js";import"./index-CLRR8GDC.js";import"./KeyCode-lh1qUinJ.js";import"./Overflow-DRYAuKn9.js";import"./useLocale-w2fOQfta.js";import"./move-CpVcuHve.js";import"./useIcons-t3jf6XO0.js";import"./CloseOutlined-Du0dHgkK.js";const o={big:600,bigMob:316,small:339};function y({title:e,width:t,children:n}){return u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,width:t},children:[u.jsx("span",{style:{fontFamily:"system-ui, sans-serif",fontSize:12,color:"#7e7e7e"},children:e}),n]})}const j4={title:"UI Kit/Поля ввода/InputSearch",id:"ui-kit-inputsearch",component:a,tags:["autodocs"],args:{mode:"submit",size:"small",device:"web",placeholder:"Что хотите найти?",disabled:!1,loading:!1},argTypes:{mode:{control:"inline-radio",options:["submit","instant","combined"],description:"submit — по лупе и Enter; instant — результаты сразу в списке; combined — подсказки при вводе + поиск по лупе и Enter"},size:{control:"inline-radio",options:["big","small"],description:"big — крупный поиск на главной; small — внутри компонентов"},device:{control:"inline-radio",options:["web","mob"],description:"Только для big: web — 72, mob — 64"},placeholder:{control:"text"},disabled:{control:"boolean"},loading:{control:"boolean",description:"Спиннер вместо лупы — идёт поиск"},label:{control:"text",table:{category:"Слоты"},description:"Лейбл над полем — обычно у поиска нет"},onSearch:c,results:c,onSelectResult:c,value:c,defaultValue:c,onChange:c},decorators:[(e,t)=>t.name==="Playground"?u.jsx("div",{style:{width:t.args.size==="big"?t.args.device==="mob"?o.bigMob:o.big:o.small},children:u.jsx(e,{})}):u.jsx(e,{})],parameters:{docs:{description:{component:'Поле поиска — Figma Setl, Search `559:134208`.\n\n| Проп | Значения | В Figma |\n|---|---|---|\n| `size` | `big` · `small` | Variant=Big — крупный поиск на главной · Variant=Small — внутри компонентов |\n| `device` | `web` · `mob` (только big) | Device=Web 72 · Mob 64 |\n| `mode` | `submit` · `instant` | см. «Два режима» ниже |\n| `onSearch` | (value) => … | submit: лупа и Enter; крестик — `onSearch("")` |\n| `results`, `onSelectResult` | `{ key, label, description, icon }[]` | instant: список под полем и выбор |\n| `loading` | true / false | спиннер вместо лупы |\n\n### Три режима — выбирает страница\n\n- **`submit`** (по умолчанию) — пользователь вводит запрос и жмёт лупу (это кнопка) или Enter → `onSearch(текст)`. Результаты показывает сама страница: таблица, список, отдельная страница результатов. Для тяжёлого поиска (по всей базе, с фильтрами) и когда результатов много.\n- **`instant`** — результаты сразу при вводе, в выпадающем списке под полем; лупа — просто иконка, нажимать её не нужно. Страница ищет на каждый `onChange` (с задержкой ~300 мс, чтобы не дёргать сервер на каждую букву) и отдаёт `results`; выбор строки (мышью или ↑↓ Enter) — `onSelectResult`. Ничего не нашлось — «Упс! Такого не нашлось». Для быстрого перехода к конкретной вещи: курс, статья, сотрудник.\n\n- **`combined`** (реестры) — оба сразу: при вводе — подсказки в выпадающем списке (клик или ↑↓ Enter — открыть найденное), а Enter без выбранной подсказки или лупа — `onSearch`: список закрывается, страница показывает все найденные у себя («Результаты по „…" (N)»). Крестик — `onSearch("")`.\n\nПодробно, с примерами кода — `components/atoms/Input/InputSearch.md`.\n\nРазмеры: **big web** — 72, отступы 24, Montserrat Regular 18; **big mob** — 64, отступы 20, 16; **small** — 42, отступы 16, Montserrat Medium 16. Small в макете 48 — выровнен на 42, высоту полей и кнопки Medium: стоит с ними в одну строку.\nСправа — **кнопки**, а не иконки: лупа запускает поиск, крестик очищает. У big пусто — лупа, введено — только крестик; у small введено — крестик и лупа рядом.\nСостояния: big в покое без рамки (белое на сером фоне страницы), наведение — рамка `gray-300`, фокус — `gray-main`; small — рамка `gray-400`, фокус — `gray-main`.'}}}},g={},v=(e,t,n)=>u.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[u.jsx(y,{title:"Default (наведи — Hover)",width:n,children:u.jsx(a,{size:e,device:t})}),u.jsx(y,{title:"Filled",width:n,children:u.jsx(a,{size:e,device:t,defaultValue:"Курс по ИИ"})}),u.jsx(y,{title:"Loading",width:n,children:u.jsx(a,{size:e,device:t,defaultValue:"Курс по ИИ",loading:!0})}),u.jsx(y,{title:"Disabled",width:n,children:u.jsx(a,{size:e,device:t,disabled:!0})})]}),b={name:"Big — главная (web)",render:()=>v("big","web",o.big)},x={name:"Big — главная (mob)",render:()=>v("big","mob",o.bigMob)},f={name:"Small — в компонентах",render:()=>v("small","web",o.small)},X=["BIM-моделирование: путь от чертежа до объекта","Хронология оформления документов","7 привычек, которые незаметно крадут время","Охрана труда на стройплощадке"],h={name:"Поиск по списку",parameters:{docs:{description:{story:"Small: введи «охрана» и нажми Enter или лупу — список отфильтруется; крестик сбрасывает."}}},render:()=>{const[e,t]=r.useState(""),n=X.filter(s=>s.toLowerCase().includes(e.trim().toLowerCase()));return u.jsxs("div",{style:{width:o.small,display:"flex",flexDirection:"column",gap:12,fontFamily:"var(--font-family-body)"},children:[u.jsx(a,{placeholder:"Найти курс",onSearch:t}),n.map(s=>u.jsx("div",{style:{fontSize:14,color:"var(--color-text-primary)"},children:s},s)),n.length===0&&u.jsx("div",{style:{fontSize:14,color:"var(--color-text-secondary)"},children:"Упс! Такого не нашлось"})]})}},Y=[{key:"c1",label:"BIM-моделирование: путь от чертежа до объекта",description:"Курс · 12 уроков",icon:u.jsx(D,{size:16})},{key:"c2",label:"Охрана труда на стройплощадке",description:"Курс · 6 уроков",icon:u.jsx(D,{size:16})},{key:"c3",label:"Деловое общение. Электронная переписка",description:"Курс · 8 уроков",icon:u.jsx(D,{size:16})},{key:"a1",label:"Как устроен документооборот в Сетл",description:"Статья · База знаний",icon:u.jsx(C,{size:16})},{key:"a2",label:"Охрана труда: что изменилось в 2026 году",description:"Новость · 12.09.2026",icon:u.jsx(C,{size:16})}],F=e=>Y.filter(t=>t.label.toLowerCase().includes(e.trim().toLowerCase())),S={name:"Режим submit — по кнопке",parameters:{docs:{description:{story:"Введи «охрана» и нажми лупу или Enter — результаты покажет страница (список ниже). Пока не нажал — список не меняется."}}},render:()=>{const[e,t]=r.useState(null);return u.jsxs("div",{style:{width:o.small,display:"flex",flexDirection:"column",gap:12,fontFamily:"var(--font-family-body)",fontSize:14},children:[u.jsx(a,{mode:"submit",placeholder:"Найти курс или статью",onSearch:n=>t(n?F(n):null)}),e===null&&u.jsx("span",{style:{color:"var(--color-text-secondary)"},children:"Результаты появятся после нажатия на лупу или Enter"}),e==null?void 0:e.map(n=>u.jsx("span",{style:{color:"var(--color-text-primary)"},children:n.label},n.key)),(e==null?void 0:e.length)===0&&u.jsx("span",{style:{color:"var(--color-text-secondary)"},children:"Упс! Такого не нашлось"})]})}},B={name:"Режим instant — сразу в списке",parameters:{docs:{story:{height:"380px"},description:{story:"Введи «охрана» — результаты появятся сразу в списке под полем (с имитацией загрузки 300 мс). ↑↓ и Enter или клик — выбор. «тверь» — «Упс! Такого не нашлось»."}}},render:()=>{const[e,t]=r.useState(""),[n,s]=r.useState([]),[i,d]=r.useState(!1),[m,l]=r.useState(null);return r.useEffect(()=>{if(!e.trim()){s([]);return}d(!0);const p=setTimeout(()=>{s(F(e)),d(!1)},300);return()=>clearTimeout(p)},[e]),u.jsxs("div",{style:{width:o.small,display:"flex",flexDirection:"column",gap:12,minHeight:300,fontFamily:"var(--font-family-body)",fontSize:14},children:[u.jsx(a,{mode:"instant",placeholder:"Найти курс или статью",onChange:p=>t(p.target.value),results:n,loading:i,onSelectResult:p=>l(p.label)}),u.jsx("span",{style:{color:"var(--color-text-secondary)"},children:m?`Открыли: ${m}`:"Выбери результат в списке"})]})}},E={name:"Режим combined — подсказки + поиск",parameters:{docs:{story:{height:"420px"},description:{story:"Введи «охрана» — подсказки под полем; выбери подсказку (открыть) или нажми Enter / лупу — все найденные появятся списком ниже."}}},render:()=>{const[e,t]=r.useState(""),[n,s]=r.useState(""),[i,d]=r.useState(null),m=n?F(n):[];return u.jsxs("div",{style:{width:o.small,display:"flex",flexDirection:"column",gap:12,minHeight:320,fontFamily:"var(--font-family-body)",fontSize:14},children:[u.jsx(a,{mode:"combined",placeholder:"Найти курс или статью",value:e,onChange:l=>{t(l.target.value),d(null)},results:e.trim()?F(e).slice(0,6):[],onSearch:s,onSelectResult:l=>d(l.label)}),i&&u.jsxs("span",{style:{color:"var(--color-text-secondary)"},children:["Открыли: ",i]}),!i&&n&&u.jsxs("span",{style:{color:"var(--color-text-secondary)"},children:["Результаты по «",n,"» (",m.length,"):"]}),!i&&m.map(l=>u.jsx("span",{style:{color:"var(--color-text-primary)"},children:l.label},l.key))]})}},k4=["Playground","Big","BigMob","Small","ПоискПоСписку","РежимSubmit","РежимInstant","РежимCombined"];var A,j,k;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:"{}",...(k=(j=g.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var w,I,R;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Big — главная (web)",
  render: () => states("big", "web", WIDTH.big)
}`,...(R=(I=b.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var z,T,q;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: "Big — главная (mob)",
  render: () => states("big", "mob", WIDTH.bigMob)
}`,...(q=(T=x.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var H,M,L;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: "Small — в компонентах",
  render: () => states("small", "web", WIDTH.small)
}`,...(L=(M=f.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var P,Q,W;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(W=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var V,O,U;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(U=(O=S.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var N,_,$;B.parameters={...B.parameters,docs:{...(N=B.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...($=(_=B.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var G,K,J;E.parameters={...E.parameters,docs:{...(G=E.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: "Режим combined — подсказки + поиск",
  parameters: {
    docs: {
      story: {
        height: "420px"
      },
      description: {
        story: "Введи «охрана» — подсказки под полем; выбери подсказку (открыть) или нажми Enter / лупу — все найденные появятся списком ниже."
      }
    }
  },
  render: () => {
    const [typed, setTyped] = useState("");
    const [query, setQuery] = useState("");
    const [picked, setPicked] = useState<string | null>(null);
    const found = query ? searchCatalog(query) : [];
    return <div style={{
      width: WIDTH.small,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      minHeight: 320,
      fontFamily: "var(--font-family-body)",
      fontSize: 14
    }}>
        <InputSearch mode="combined" placeholder="Найти курс или статью" value={typed} onChange={e => {
        setTyped(e.target.value);
        setPicked(null);
      }} results={typed.trim() ? searchCatalog(typed).slice(0, 6) : []} onSearch={setQuery} onSelectResult={r => setPicked(r.label)} />
        {picked && <span style={{
        color: "var(--color-text-secondary)"
      }}>Открыли: {picked}</span>}
        {!picked && query && <span style={{
        color: "var(--color-text-secondary)"
      }}>Результаты по «{query}» ({found.length}):</span>}
        {!picked && found.map(r => <span key={r.key} style={{
        color: "var(--color-text-primary)"
      }}>{r.label}</span>)}
      </div>;
  }
}`,...(J=(K=E.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};export{b as Big,x as BigMob,g as Playground,f as Small,k4 as __namedExportsOrder,j4 as default,h as ПоискПоСписку,E as РежимCombined,B as РежимInstant,S as РежимSubmit};
