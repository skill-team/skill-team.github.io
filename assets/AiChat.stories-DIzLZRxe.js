import{j as u,r as o,a0 as V}from"./iframe-DATgQ8vN.js";import{C as l,M as x,a as f,d as $,b as Y,c as A,e as d,f as K,t as J,g as Q,h as c,i as H,A as a,j as X,k as Z}from"./ChatPopup-YyetuPd1.js";import{H as u4}from"./HeaderButton-DACQADQ6.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-N2gxnK_F.js";import"./Scrollbar-Z2aviri_.js";import"./index-CeHB25lk.js";import"./ContextIsolator-CeJsXOdt.js";import"./context-DazkKd-s.js";import"./TextArea-DCmxcrfi.js";import"./InputChrome-DJBp6cOC.js";import"./index-DfDrvDPo.js";import"./index-dfHOxVsB.js";import"./CloseCircleFilled-BYZZ-KZf.js";import"./useCSSVarCls-DaoFEgPu.js";import"./pickAttrs-BISx_BUG.js";import"./EyeOutlined-B_Mfs_gp.js";import"./Archive-BfENcfBL.js";import"./FileTypeBadge-DxyUSkby.js";import"./Bulb-Bfoz0tSN.js";const y4={title:"UI Kit/Сэтл ИИ/Чат",id:"ui-kit-aichat",component:l,tags:["autodocs"],args:{title:"Новый диалог",children:null,composer:null},argTypes:{title:{control:"text"},subtitle:{control:"text"},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},composer:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},scrollKey:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:"Чат «Сэтл ИИ» — ИИ-помощник платформы. Собеседник — Сетлик, талисман-пазл: его ролик встречает в каждом новом диалоге, его лицо — аватар ответов, а пока он думает, в кружке он печатает на ноутбуке. Правила оформления ответа и состояний — в файле «Сэтл ИИ — правила ответа и интерфейса.md» в корне кита.\n\n| Часть | Что это |\n|---|---|\n| `ChatWindow` | окно: шапка (аватар, название диалога, подпись), переписка (не шире 800), поле внизу; сам прокручивается вниз при новом тексте, если человек не ушёл читать выше |\n| `ChatWelcome` | новый диалог: ролик 16:9 (скругление 24), «Привет! Я Сетлик», готовые вопросы |\n| `ChatUserMessage` | вопрос: серое «облачко» справа |\n| `ChatAnswer` | ответ: аватар и текст без рамки; `markdown` — ответ модели как есть (строка, массив кусков или блоков); пока приходит — курсор; потом «Источники», «Скопировать», «Полезно», «Не то» |\n| `ChatMarkdown` + `formatAnswer` | рисует ответ; перед этим выпрямляет «сплющенный» текст: потерянные переносы, список в одну строку, голые адреса вместо ссылок |\n| `ChatSources` | «Источники» — кнопки как готовые вопросы; у файла — плашка типа; больше 4 — «Ещё N» |\n| `ChatThinking` | думает: что делает (бегущий блик и точки), с 5-й секунды — секунды, с 30-й — «Вопрос непростой» |\n| `ChatError` | не получилось ответить: текст и «Повторить» |\n| `ChatComposer` | поле: Enter — отправить, Shift+Enter — строка; пока думает — «Остановить» |\n| `ChatDialogList` | «Новый диалог» и список диалогов |\n| `ChatLauncher` + `ChatPopup` | плавающая кнопка Сетлика справа внизу (на телефоне прячется при прокрутке вниз) и окошко с тем же чатом: на компьютере панель 400 × до 640, на телефоне — весь экран; Esc закрывает |\n\nРолик — видео без звука, а не GIF: GIF весил бы 17 МБ и терял цвета; видео — 0,4–0,6 МБ. При «уменьшить движение» в системе — стоит первый кадр."}}},decorators:[n=>u.jsx("div",{style:{padding:24,background:"var(--color-background)"},children:u.jsx(n,{})})]},y={height:720,display:"flex",flexDirection:"column"},m={name:"Новый диалог",render:n=>{const[e,s]=o.useState(""),[t,r]=o.useState("");return u.jsxs("div",{style:y,children:[u.jsx(l,{title:n.title,subtitle:n.subtitle,composer:u.jsx(c,{value:e,onChange:s,onSend:()=>r(e)}),children:u.jsx(H,{suggestions:a,onSuggestion:r})}),u.jsx("p",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:t?`Отправлено: «${t}»`:"Нажмите готовый вопрос или напишите свой"})]})}},p={name:"Переписка и оформление ответа",render:()=>{const[n,e]=o.useState({}),s=[a[0],a[2],a[3]];return u.jsx("div",{style:y,children:u.jsx(l,{title:s[0],composer:u.jsx(c,{value:"",onChange:()=>{},onSend:()=>{}}),children:s.map((t,r)=>u.jsxs("div",{style:{display:"contents"},children:[u.jsx(d,{children:t}),u.jsx(f,{markdown:A(t),sources:$(t),feedback:n[r]??null,onFeedback:i=>e(P=>({...P,[r]:i})),onCopy:()=>{}})]},t))})})}},h={name:"Думает, пишет, остановлен, ошибка",render:()=>{const[n,e]=o.useState(0);o.useEffect(()=>{const t=window.setInterval(()=>e(r=>r>=40?0:r+1),1e3);return()=>window.clearInterval(t)},[]);const s=A(a[1]).slice(0,180);return u.jsx("div",{style:y,children:u.jsxs(l,{title:"Состояния ответа",composer:u.jsx(c,{value:"",onChange:()=>{},onSend:()=>{},busy:!0,onStop:()=>{}}),children:[u.jsx(d,{children:"Как найти нужный курс?"}),u.jsx(K,{status:J(n),seconds:n}),u.jsx(d,{children:"А что ещё есть?"}),u.jsx(f,{streaming:!0,markdown:s}),u.jsx(d,{children:"Как получить сертификат?"}),u.jsx(f,{stopped:!0,markdown:A(a[2]).slice(0,70)}),u.jsx(d,{children:"Что такое карта адаптации?"}),u.jsx(Q,{onRetry:()=>{}})]})})}},E={name:"Список диалогов",render:()=>{const[n,e]=o.useState("d2"),[s,t]=o.useState([{id:"d1",title:"Новый диалог"},{id:"d2",title:"Как начать обучение на платформе?"},{id:"d3",title:"Как получить сертификат по охране труда после прохождения курса и теста"},{id:"d4",title:"Что такое карта адаптации?"},...["Где найти положение о премировании","Как сменить пароль от портала","Курсы по охране труда для прорабов","Что такое баллы и уровни","Как записаться на вебинар «Утро с экспертом»","Как скачать сертификат","Где посмотреть свой прогресс","Кто мой наставник","Как предложить идею","Как добавить курс в избранное"].map((r,i)=>({id:`d${i+5}`,title:r}))]);return u.jsx("div",{style:{width:296,height:480,display:"flex",flexDirection:"column"},children:u.jsx(Y,{dialogs:s,selectedId:n,onSelect:e,onNew:()=>{const r=`d${s.length+1}`;t(i=>[{id:r,title:"Новый диалог"},...i]),e(r)}})})}},C={name:"Поле вопроса",render:()=>{const[n,e]=o.useState(""),[s,t]=o.useState(!1);return u.jsx("div",{style:{maxWidth:800,background:"var(--color-surface)",padding:24,borderRadius:30},children:u.jsx(c,{value:n,onChange:e,busy:s,onSend:()=>{t(!0),e("")},onStop:()=>t(!1)})})}},g={name:"Сплющенный ответ → выпрямленный",parameters:{docs:{description:{story:"Слева — ответ модели с действующего портала как есть: переносы потерялись, список идёт строкой, вместо ссылок голые адреса. Справа — тот же текст через `ChatAnswer markdown={…}`: `formatAnswer` расставил переносы, собрал нумерованный список с вложенными пунктами и превратил адреса в ссылки."}}},render:()=>u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,alignItems:"start",fontFamily:"var(--font-family-body)"},children:[u.jsxs("div",{style:{background:"var(--color-surface)",borderRadius:30,padding:24},children:[u.jsx("p",{style:{margin:"0 0 12px",fontSize:12,fontWeight:600,color:"var(--chat-text-secondary)"},children:"Как пришло"}),u.jsx("p",{style:{margin:0,fontSize:14,lineHeight:1.5,color:"var(--chat-text)"},children:x})]}),u.jsxs("div",{style:{background:"var(--color-surface)",borderRadius:30,padding:24},children:[u.jsx("p",{style:{margin:"0 0 12px",fontSize:12,fontWeight:600,color:"var(--chat-text-secondary)"},children:"Как показываем"}),u.jsx(f,{markdown:x,sources:$("Что такое карта адаптации?"),onLinkClick:(n,e)=>e.preventDefault(),onCopy:()=>{}})]})]})},S={name:"Плавающая кнопка и окошко",render:()=>{const[n,e]=o.useState(!1),[s,t]=o.useState("");return u.jsxs("div",{style:{height:720,position:"relative",fontFamily:"var(--font-family-body)",color:"var(--color-text-secondary)"},children:["Кнопка — справа внизу окна примера.",u.jsx(X,{hidden:n,onClick:()=>e(!0)}),u.jsx(Z,{open:n,onClose:()=>e(!1),children:u.jsx(l,{title:"Новый диалог",composer:u.jsx(c,{value:s,onChange:t,onSend:()=>t("")}),headAction:u.jsx(u4,{icon:u.jsx(V,{}),"aria-label":"Закрыть",onClick:()=>e(!1)}),children:u.jsx(H,{suggestions:a})})})]})}},x4=["НовыйДиалог","Переписка","Думает","Диалоги","Поле","Выпрямитель","Окошко"];var v,F,B;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(B=(F=m.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var D,b,k;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(k=(b=p.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var w,j,I;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(I=(j=h.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var W,U,G;E.parameters={...E.parameters,docs:{...(W=E.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(G=(U=E.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var M,N,_;C.parameters={...C.parameters,docs:{...(M=C.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(_=(N=C.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var O,T,R;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(R=(T=g.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var L,z,q;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: "Плавающая кнопка и окошко",
  render: () => {
    const [open, setOpen] = useState(false);
    const [draft, setDraft] = useState("");
    return <div style={{
      height: 720,
      position: "relative",
      fontFamily: "var(--font-family-body)",
      color: "var(--color-text-secondary)"
    }}>
        Кнопка — справа внизу окна примера.
        <ChatLauncher hidden={open} onClick={() => setOpen(true)} />
        <ChatPopup open={open} onClose={() => setOpen(false)}>
          <ChatWindow title="Новый диалог" composer={<ChatComposer value={draft} onChange={setDraft} onSend={() => setDraft("")} />} headAction={<HeaderButton icon={<IconClose />} aria-label="Закрыть" onClick={() => setOpen(false)} />}>
            <ChatWelcome suggestions={AI_SUGGESTIONS} />
          </ChatWindow>
        </ChatPopup>
      </div>;
  }
}`,...(q=(z=S.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};export{x4 as __namedExportsOrder,y4 as default,g as Выпрямитель,E as Диалоги,h as Думает,m as НовыйДиалог,S as Окошко,p as Переписка,C as Поле};
