import{j as u,r as a}from"./iframe-T1G-SIdY.js";import{C as g,M as y,a as C,d as z,b as O,c as A,e as d,f as q,t as $,g as V,h as S,i as Y,A as o}from"./aiChatDemo-CuC04hBR.js";import"./preload-helper-C1FmrZbK.js";import"./TextArea-DRM6QrJS.js";import"./Scrollbar-CSaLS32m.js";import"./InputChrome-CODlI84f.js";import"./context-BT_JPeuY.js";import"./useTruncated-wUfbEmiw.js";import"./index-CCOMMNKo.js";import"./index-BTCs0-Pv.js";import"./index-bDfGxc6v.js";import"./Input-DMkgWIZL.js";import"./CloseCircleFilled-lErke8Fw.js";import"./SearchOutlined-BlwStQf3.js";import"./useCSSVarCls-h8B24G72.js";import"./pickAttrs-prGlZbsm.js";import"./StopSquare-CfNJlp54.js";import"./FileTypeBadge-RiR0bbu6.js";const c4={title:"UI Kit/Сэтл ИИ/Чат",id:"ui-kit-aichat",component:g,tags:["autodocs"],args:{title:"Новый диалог",children:null,composer:null},argTypes:{title:{control:"text"},subtitle:{control:"text"},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},composer:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},scrollKey:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Чат «Сэтл ИИ» — ИИ-помощник платформы. Собеседник — Сетлик, талисман-пазл: его ролик встречает в каждом новом диалоге, его лицо — аватар ответов, а пока он думает, в кружке он печатает на ноутбуке. Правила оформления ответа и состояний — в файле «Сэтл ИИ — правила ответа и интерфейса.md» в корне кита.\n\n| Часть | Что это |\n|---|---|\n| `ChatWindow` | окно: шапка (аватар, название диалога, подпись), переписка (не шире 800), поле внизу; сам прокручивается вниз при новом тексте, если человек не ушёл читать выше |\n| `ChatWelcome` | новый диалог: ролик 16:9 (скругление 24), «Привет! Я Сетлик», готовые вопросы |\n| `ChatUserMessage` | вопрос: серое «облачко» справа |\n| `ChatAnswer` | ответ: аватар и текст без рамки; `markdown` — ответ модели как есть (строка, массив кусков или блоков); пока приходит — курсор; потом «Источники», «Скопировать», «Полезно», «Не то» |\n| `ChatMarkdown` + `formatAnswer` | рисует ответ; перед этим выпрямляет «сплющенный» текст: потерянные переносы, список в одну строку, голые адреса вместо ссылок |\n| `ChatSources` | «Источники» — кнопки как готовые вопросы; у файла — плашка типа; больше 4 — «Ещё N» |\n| `ChatThinking` | думает: что делает (бегущий блик и точки), с 5-й секунды — секунды, с 30-й — «Вопрос непростой» |\n| `ChatError` | не получилось ответить: текст и «Повторить» |\n| `ChatComposer` | поле: Enter — отправить, Shift+Enter — строка; пока думает — «Остановить» |\n| `ChatDialogList` | «Новый диалог» и список диалогов |\n\nРолик — видео без звука, а не GIF: GIF весил бы 17 МБ и терял цвета; видео — 0,4–0,6 МБ. При «уменьшить движение» в системе — стоит первый кадр."}}},decorators:[e=>u.jsx("div",{style:{padding:24,background:"var(--color-background)"},children:u.jsx(e,{})})]},f={height:720,display:"flex",flexDirection:"column"},l={name:"Новый диалог",render:e=>{const[t,r]=a.useState(""),[n,s]=a.useState("");return u.jsxs("div",{style:f,children:[u.jsx(g,{title:e.title,subtitle:e.subtitle,composer:u.jsx(S,{value:t,onChange:r,onSend:()=>s(t)}),children:u.jsx(Y,{suggestions:o,onSuggestion:s})}),u.jsx("p",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:n?`Отправлено: «${n}»`:"Нажмите готовый вопрос или напишите свой"})]})}},c={name:"Переписка и оформление ответа",render:()=>{const[e,t]=a.useState({}),r=[o[0],o[2],o[3]];return u.jsx("div",{style:f,children:u.jsx(g,{title:r[0],composer:u.jsx(S,{value:"",onChange:()=>{},onSend:()=>{}}),children:r.map((n,s)=>u.jsxs("div",{style:{display:"contents"},children:[u.jsx(d,{children:n}),u.jsx(C,{markdown:A(n),sources:z(n),feedback:e[s]??null,onFeedback:i=>t(L=>({...L,[s]:i})),onCopy:()=>{}})]},n))})})}},m={name:"Думает, пишет, остановлен, ошибка",render:()=>{const[e,t]=a.useState(0);a.useEffect(()=>{const n=window.setInterval(()=>t(s=>s>=40?0:s+1),1e3);return()=>window.clearInterval(n)},[]);const r=A(o[1]).slice(0,180);return u.jsx("div",{style:f,children:u.jsxs(g,{title:"Состояния ответа",composer:u.jsx(S,{value:"",onChange:()=>{},onSend:()=>{},busy:!0,onStop:()=>{}}),children:[u.jsx(d,{children:"Как найти нужный курс?"}),u.jsx(q,{status:$(e),seconds:e}),u.jsx(d,{children:"А что ещё есть?"}),u.jsx(C,{streaming:!0,markdown:r}),u.jsx(d,{children:"Как получить сертификат?"}),u.jsx(C,{stopped:!0,markdown:A(o[2]).slice(0,70)}),u.jsx(d,{children:"Что такое карта адаптации?"}),u.jsx(V,{onRetry:()=>{}})]})})}},p={name:"Список диалогов",render:()=>{const[e,t]=a.useState("d2"),[r,n]=a.useState([{id:"d1",title:"Новый диалог"},{id:"d2",title:"Как начать обучение на платформе?"},{id:"d3",title:"Как получить сертификат по охране труда после прохождения курса и теста"},{id:"d4",title:"Что такое карта адаптации?"},...["Где найти положение о премировании","Как сменить пароль от портала","Курсы по охране труда для прорабов","Что такое баллы и уровни","Как записаться на вебинар «Утро с экспертом»","Как скачать сертификат","Где посмотреть свой прогресс","Кто мой наставник","Как предложить идею","Как добавить курс в избранное"].map((s,i)=>({id:`d${i+5}`,title:s}))]);return u.jsx("div",{style:{width:296,height:480,display:"flex",flexDirection:"column"},children:u.jsx(O,{dialogs:r,selectedId:e,onSelect:t,onNew:()=>{const s=`d${r.length+1}`;n(i=>[{id:s,title:"Новый диалог"},...i]),t(s)}})})}},E={name:"Поле вопроса",render:()=>{const[e,t]=a.useState(""),[r,n]=a.useState(!1);return u.jsx("div",{style:{maxWidth:800,background:"var(--color-surface)",padding:24,borderRadius:30},children:u.jsx(S,{value:e,onChange:t,busy:r,onSend:()=>{n(!0),t("")},onStop:()=>n(!1)})})}},h={name:"Сплющенный ответ → выпрямленный",parameters:{docs:{description:{story:"Слева — ответ модели с действующего портала как есть: переносы потерялись, список идёт строкой, вместо ссылок голые адреса. Справа — тот же текст через `ChatAnswer markdown={…}`: `formatAnswer` расставил переносы, собрал нумерованный список с вложенными пунктами и превратил адреса в ссылки."}}},render:()=>u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,alignItems:"start",fontFamily:"var(--font-family-body)"},children:[u.jsxs("div",{style:{background:"var(--color-surface)",borderRadius:30,padding:24},children:[u.jsx("p",{style:{margin:"0 0 12px",fontSize:12,fontWeight:600,color:"var(--chat-text-secondary)"},children:"Как пришло"}),u.jsx("p",{style:{margin:0,fontSize:14,lineHeight:1.5,color:"var(--chat-text)"},children:y})]}),u.jsxs("div",{style:{background:"var(--color-surface)",borderRadius:30,padding:24},children:[u.jsx("p",{style:{margin:"0 0 12px",fontSize:12,fontWeight:600,color:"var(--chat-text-secondary)"},children:"Как показываем"}),u.jsx(C,{markdown:y,sources:z("Что такое карта адаптации?"),onLinkClick:(e,t)=>t.preventDefault(),onCopy:()=>{}})]})]})},m4=["НовыйДиалог","Переписка","Думает","Диалоги","Поле","Выпрямитель"];var x,v,B;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Новый диалог",
  render: args => {
    const [draft, setDraft] = useState("");
    const [asked, setAsked] = useState("");
    return <div style={box}>
        <ChatWindow title={args.title} subtitle={args.subtitle} composer={<ChatComposer value={draft} onChange={setDraft} onSend={() => setAsked(draft)} />}>
          <ChatWelcome suggestions={AI_SUGGESTIONS} onSuggestion={setAsked} />
        </ChatWindow>
        <p style={{
        fontFamily: "var(--font-family-body)",
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>{asked ? \`Отправлено: «\${asked}»\` : "Нажмите готовый вопрос или напишите свой"}</p>
      </div>;
  }
}`,...(B=(v=l.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var F,D,b;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: "Переписка и оформление ответа",
  render: () => {
    const [fb, setFb] = useState<Record<number, ChatFeedback>>({});
    const qs = [AI_SUGGESTIONS[0], AI_SUGGESTIONS[2], AI_SUGGESTIONS[3]];
    return <div style={box}>
        <ChatWindow title={qs[0]} composer={<ChatComposer value="" onChange={() => {}} onSend={() => {}} />}>
          {qs.map((q, i) => <div key={q} style={{
          display: "contents"
        }}>
              <ChatUserMessage>{q}</ChatUserMessage>
              <ChatAnswer markdown={demoAnswer(q)} sources={demoSources(q)} feedback={fb[i] ?? null} onFeedback={f => setFb(s => ({
            ...s,
            [i]: f
          }))} onCopy={() => {}} />
            </div>)}
        </ChatWindow>
      </div>;
  }
}`,...(b=(D=c.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};var w,k,j;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "Думает, пишет, остановлен, ошибка",
  render: () => {
    const [s, setS] = useState(0);
    useEffect(() => {
      const t = window.setInterval(() => setS(x => x >= 40 ? 0 : x + 1), 1000);
      return () => window.clearInterval(t);
    }, []);
    const half = demoAnswer(AI_SUGGESTIONS[1]).slice(0, 180);
    return <div style={box}>
        <ChatWindow title="Состояния ответа" composer={<ChatComposer value="" onChange={() => {}} onSend={() => {}} busy onStop={() => {}} />}>
          <ChatUserMessage>Как найти нужный курс?</ChatUserMessage>
          <ChatThinking status={thinkingStatus(s)} seconds={s} />
          <ChatUserMessage>А что ещё есть?</ChatUserMessage>
          <ChatAnswer streaming markdown={half} />
          <ChatUserMessage>Как получить сертификат?</ChatUserMessage>
          <ChatAnswer stopped markdown={demoAnswer(AI_SUGGESTIONS[2]).slice(0, 70)} />
          <ChatUserMessage>Что такое карта адаптации?</ChatUserMessage>
          <ChatError onRetry={() => {}} />
        </ChatWindow>
      </div>;
  }
}`,...(j=(k=m.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var I,U,W;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Список диалогов",
  render: () => {
    const [sel, setSel] = useState("d2");
    const [list, setList] = useState([{
      id: "d1",
      title: "Новый диалог"
    }, {
      id: "d2",
      title: "Как начать обучение на платформе?"
    }, {
      id: "d3",
      title: "Как получить сертификат по охране труда после прохождения курса и теста"
    }, {
      id: "d4",
      title: "Что такое карта адаптации?"
    },
    // ещё — чтобы список прокручивался
    ...["Где найти положение о премировании", "Как сменить пароль от портала", "Курсы по охране труда для прорабов", "Что такое баллы и уровни", "Как записаться на вебинар «Утро с экспертом»", "Как скачать сертификат", "Где посмотреть свой прогресс", "Кто мой наставник", "Как предложить идею", "Как добавить курс в избранное"].map((title, i) => ({
      id: \`d\${i + 5}\`,
      title
    }))]);
    return <div style={{
      width: 296,
      height: 480,
      display: "flex",
      flexDirection: "column"
    }}>
        <ChatDialogList dialogs={list} selectedId={sel} onSelect={setSel} onNew={() => {
        const id = \`d\${list.length + 1}\`;
        setList(l => [{
          id,
          title: "Новый диалог"
        }, ...l]);
        setSel(id);
      }} />
      </div>;
  }
}`,...(W=(U=p.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var M,G,N;E.parameters={...E.parameters,docs:{...(M=E.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "Поле вопроса",
  render: () => {
    const [v, setV] = useState("");
    const [busy, setBusy] = useState(false);
    return <div style={{
      maxWidth: 800,
      background: "var(--color-surface)",
      padding: 24,
      borderRadius: 30
    }}>
        <ChatComposer value={v} onChange={setV} busy={busy} onSend={() => {
        setBusy(true);
        setV("");
      }} onStop={() => setBusy(false)} />
      </div>;
  }
}`,...(N=(G=E.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var _,R,T;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Сплющенный ответ → выпрямленный",
  parameters: {
    docs: {
      description: {
        story: "Слева — ответ модели с действующего портала как есть: переносы потерялись, список идёт строкой, вместо ссылок голые адреса. Справа — тот же текст через \`ChatAnswer markdown={…}\`: \`formatAnswer\` расставил переносы, собрал нумерованный список с вложенными пунктами и превратил адреса в ссылки."
      }
    }
  },
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 24,
    alignItems: "start",
    fontFamily: "var(--font-family-body)"
  }}>
      <div style={{
      background: "var(--color-surface)",
      borderRadius: 30,
      padding: 24
    }}>
        <p style={{
        margin: "0 0 12px",
        fontSize: 12,
        fontWeight: 600,
        color: "var(--chat-text-secondary)"
      }}>Как пришло</p>
        <p style={{
        margin: 0,
        fontSize: 14,
        lineHeight: 1.5,
        color: "var(--chat-text)"
      }}>{MESSY_ANSWER}</p>
      </div>
      <div style={{
      background: "var(--color-surface)",
      borderRadius: 30,
      padding: 24
    }}>
        <p style={{
        margin: "0 0 12px",
        fontSize: 12,
        fontWeight: 600,
        color: "var(--chat-text-secondary)"
      }}>Как показываем</p>
        <ChatAnswer markdown={MESSY_ANSWER} sources={demoSources("Что такое карта адаптации?")} onLinkClick={(_, e) => e.preventDefault()} onCopy={() => {}} />
      </div>
    </div>
}`,...(T=(R=h.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};export{m4 as __namedExportsOrder,c4 as default,h as Выпрямитель,p as Диалоги,m as Думает,l as НовыйДиалог,c as Переписка,E as Поле};
