import{j as u,r as o,a0 as J}from"./iframe-D1Ouy3kT.js";import{C as i,a as Q,b as e4,c as X,d as v,A as r,e as d,M as F,f as A,g as Z,h as n4,i as y,j as c,k as t4,t as s4,l as a4}from"./ChatLauncher-WjQHEKjp.js";import{H as x}from"./HeaderButton-gpYkMGvA.js";import"./preload-helper-C1FmrZbK.js";import"./useTruncated-DxOFOOjQ.js";import"./Scrollbar-CI5AhxyY.js";import"./index-CAYOqa0x.js";import"./ContextIsolator-D4uc6dxX.js";import"./context-ChWBGifp.js";import"./mascot-o4d2V8Md.js";import"./TextArea-ZoEC98bn.js";import"./InputChrome-CZ9JtHxf.js";import"./index-BC7mMHoq.js";import"./index-C45VZnHA.js";import"./CloseCircleFilled-BkRFSz-1.js";import"./useCSSVarCls-dDZsaw3_.js";import"./pickAttrs-BMctHlOw.js";import"./EyeOutlined-he68d7nl.js";import"./Archive-6wY4EHJx.js";import"./FileTypeBadge-DQdlf97K.js";import"./Bulb-CynvsjUX.js";const D4={title:"UI Kit/Сэтл ИИ/Чат",id:"ui-kit-aichat",component:i,tags:["autodocs"],args:{title:"Новый диалог",children:null,composer:null},argTypes:{title:{control:"text"},subtitle:{control:"text"},children:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},composer:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},scrollKey:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:'Чат «Сэтл ИИ» — ИИ-помощник платформы. Собеседник — Сэтлик, талисман-пазл: картинка с ним за ноутбуком встречает в каждом новом диалоге, его лицо — аватар ответов, а пока он думает, аватар мягко «дышит». Правила оформления ответа и состояний — в файле «Сэтл ИИ — правила ответа и интерфейса.md» в корне кита.\n\n| Часть | Что это |\n|---|---|\n| `ChatWindow` | окно: шапка (аватар, название диалога, подпись), переписка (не шире 800), поле внизу; сам прокручивается вниз при новом тексте, если человек не ушёл читать выше |\n| `ChatWelcome` | новый диалог: картинка Сэтлика за ноутбуком, «Привет! Я Сэтлик», готовые вопросы |\n| `ChatUserMessage` | вопрос: серое «облачко» справа |\n| `ChatAnswer` | ответ: аватар и текст без рамки; `markdown` — ответ модели как есть (строка, массив кусков или блоков); пока приходит — курсор; потом «Источники», «Скопировать», «Полезно», «Не то» |\n| `ChatMarkdown` + `formatAnswer` | рисует ответ; перед этим выпрямляет «сплющенный» текст: потерянные переносы, список в одну строку, голые адреса вместо ссылок |\n| `ChatSources` | «Источники» — кнопки как готовые вопросы; у файла — плашка типа; больше 4 — «Ещё N» |\n| `ChatThinking` | думает: что делает (бегущий блик и точки), с 5-й секунды — секунды, с 30-й — «Вопрос непростой» |\n| `ChatError` | не получилось ответить: текст и «Повторить» |\n| `ChatComposer` | поле: Enter — отправить, Shift+Enter — строка; пока думает — «Остановить» |\n| `ChatDialogList` | «Новый диалог» и список диалогов |\n| `ChatLauncher` + `ChatPopup` | кнопка Сэтлика и окошко с тем же чатом: на компьютере панель 400 × до 640, на телефоне — весь экран; Esc закрывает. Кнопка — `variant="menu"` (карточка внизу бокового меню, окно `placement="bottom-left"`), пункт в шапке с `ChatMascotIcon` (окно `top-right`) или `variant="float"` — плавающая справа внизу (на сайте с 2026-10-29 не используется: закрывала содержимое) |\n\nРолик — видео без звука, а не GIF: GIF весил бы 17 МБ и терял цвета; видео — 0,4–0,6 МБ. При «уменьшить движение» в системе — стоит первый кадр.'}}},decorators:[n=>u.jsx("div",{style:{padding:24,background:"var(--color-background)"},children:u.jsx(n,{})})]},B={height:720,display:"flex",flexDirection:"column"},p={name:"Новый диалог",render:n=>{const[e,s]=o.useState(""),[t,a]=o.useState("");return u.jsxs("div",{style:B,children:[u.jsx(i,{title:n.title,subtitle:n.subtitle,composer:u.jsx(d,{value:e,onChange:s,onSend:()=>a(e)}),children:u.jsx(v,{suggestions:r,onSuggestion:a})}),u.jsx("p",{style:{fontFamily:"var(--font-family-body)",fontSize:14,color:"var(--color-text-secondary)"},children:t?`Отправлено: «${t}»`:"Нажмите готовый вопрос или напишите свой"})]})}},m={name:"Переписка и оформление ответа",render:()=>{const[n,e]=o.useState({}),s=[r[0],r[2],r[3]];return u.jsx("div",{style:B,children:u.jsx(i,{title:s[0],composer:u.jsx(d,{value:"",onChange:()=>{},onSend:()=>{}}),children:s.map((t,a)=>u.jsxs("div",{style:{display:"contents"},children:[u.jsx(c,{children:t}),u.jsx(A,{markdown:y(t),sources:Z(t),feedback:n[a]??null,onFeedback:l=>e(u4=>({...u4,[a]:l})),onCopy:()=>{}})]},t))})})}},h={name:"Думает, пишет, остановлен, ошибка",render:()=>{const[n,e]=o.useState(0);o.useEffect(()=>{const t=window.setInterval(()=>e(a=>a>=40?0:a+1),1e3);return()=>window.clearInterval(t)},[]);const s=y(r[1]).slice(0,180);return u.jsx("div",{style:B,children:u.jsxs(i,{title:"Состояния ответа",composer:u.jsx(d,{value:"",onChange:()=>{},onSend:()=>{},busy:!0,onStop:()=>{}}),children:[u.jsx(c,{children:"Как найти нужный курс?"}),u.jsx(t4,{status:s4(n),seconds:n}),u.jsx(c,{children:"А что ещё есть?"}),u.jsx(A,{streaming:!0,markdown:s}),u.jsx(c,{children:"Как получить сертификат?"}),u.jsx(A,{stopped:!0,markdown:y(r[2]).slice(0,70)}),u.jsx(c,{children:"Что такое карта адаптации?"}),u.jsx(a4,{onRetry:()=>{}})]})})}},C={name:"Список диалогов",render:()=>{const[n,e]=o.useState("d2"),[s,t]=o.useState([{id:"d1",title:"Новый диалог"},{id:"d2",title:"Как начать обучение на платформе?"},{id:"d3",title:"Как получить сертификат по охране труда после прохождения курса и теста"},{id:"d4",title:"Что такое карта адаптации?"},...["Где найти положение о премировании","Как сменить пароль от портала","Курсы по охране труда для прорабов","Что такое баллы и уровни","Как записаться на вебинар «Утро с экспертом»","Как скачать сертификат","Где посмотреть свой прогресс","Кто мой наставник","Как предложить идею","Как добавить курс в избранное"].map((a,l)=>({id:`d${l+5}`,title:a}))]);return u.jsx("div",{style:{width:296,height:480,display:"flex",flexDirection:"column"},children:u.jsx(n4,{dialogs:s,selectedId:n,onSelect:e,onNew:()=>{const a=`d${s.length+1}`;t(l=>[{id:a,title:"Новый диалог"},...l]),e(a)}})})}},E={name:"Поле вопроса",render:()=>{const[n,e]=o.useState(""),[s,t]=o.useState(!1);return u.jsx("div",{style:{maxWidth:800,background:"var(--color-surface)",padding:24,borderRadius:30},children:u.jsx(d,{value:n,onChange:e,busy:s,onSend:()=>{t(!0),e("")},onStop:()=>t(!1)})})}},g={name:"Сплющенный ответ → выпрямленный",parameters:{docs:{description:{story:"Слева — ответ модели с действующего портала как есть: переносы потерялись, список идёт строкой, вместо ссылок голые адреса. Справа — тот же текст через `ChatAnswer markdown={…}`: `formatAnswer` расставил переносы, собрал нумерованный список с вложенными пунктами и превратил адреса в ссылки."}}},render:()=>u.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,alignItems:"start",fontFamily:"var(--font-family-body)"},children:[u.jsxs("div",{style:{background:"var(--color-surface)",borderRadius:30,padding:24},children:[u.jsx("p",{style:{margin:"0 0 12px",fontSize:12,fontWeight:600,color:"var(--chat-text-secondary)"},children:"Как пришло"}),u.jsx("p",{style:{margin:0,fontSize:14,lineHeight:1.5,color:"var(--chat-text)"},children:F})]}),u.jsxs("div",{style:{background:"var(--color-surface)",borderRadius:30,padding:24},children:[u.jsx("p",{style:{margin:"0 0 12px",fontSize:12,fontWeight:600,color:"var(--chat-text-secondary)"},children:"Как показываем"}),u.jsx(A,{markdown:F,sources:Z("Что такое карта адаптации?"),onLinkClick:(n,e)=>e.preventDefault(),onCopy:()=>{}})]})]})},f={name:"Плавающая кнопка и окошко",render:()=>{const[n,e]=o.useState(!1),[s,t]=o.useState("");return u.jsxs("div",{style:{height:720,position:"relative",fontFamily:"var(--font-family-body)",color:"var(--color-text-secondary)"},children:["Кнопка — справа внизу окна примера.",u.jsx(Q,{hidden:n,onClick:()=>e(!0)}),u.jsx(X,{open:n,onClose:()=>e(!1),children:u.jsx(i,{title:"Новый диалог",composer:u.jsx(d,{value:s,onChange:t,onSend:()=>t("")}),headAction:u.jsx(x,{icon:u.jsx(J,{}),"aria-label":"Закрыть",onClick:()=>e(!1)}),children:u.jsx(v,{suggestions:r})})})]})}},S={name:"Сэтлик в меню и в шапке",render:()=>{const[n,e]=o.useState(null),[s,t]=o.useState("");return u.jsxs("div",{style:{display:"flex",gap:24,alignItems:"flex-start",height:720,fontFamily:"var(--font-family-body)"},children:[u.jsx("div",{style:{width:216,padding:16,borderRadius:24,background:"var(--color-surface)"},children:u.jsx(Q,{variant:"menu",onClick:()=>e("bottom-left")})}),u.jsx("div",{style:{display:"flex",padding:6,borderRadius:999,background:"var(--color-surface)"},children:u.jsx(x,{icon:u.jsx(e4,{size:24}),label:"Сэтлик",onClick:()=>e("top-right")})}),u.jsx(X,{open:!!n,onClose:()=>e(null),placement:n??void 0,children:u.jsx(i,{title:"Новый диалог",composer:u.jsx(d,{value:s,onChange:t,onSend:()=>t("")}),headAction:u.jsx(x,{icon:u.jsx(J,{}),"aria-label":"Закрыть",onClick:()=>e(null)}),children:u.jsx(v,{suggestions:r})})})]})}},k4=["НовыйДиалог","Переписка","Думает","Диалоги","Поле","Выпрямитель","Окошко","ВМенюИШапке"];var b,D,k;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(k=(D=p.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var j,w,I;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(I=(w=m.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var W,U,O;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(O=(U=h.parameters)==null?void 0:U.docs)==null?void 0:O.source}}};var G,M,R;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(R=(M=C.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var N,_,T;E.parameters={...E.parameters,docs:{...(N=E.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(T=(_=E.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var L,z,H;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(H=(z=g.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var q,P,$;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...($=(P=f.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var V,Y,K;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: "Сэтлик в меню и в шапке",
  render: () => {
    const [open, setOpen] = useState<null | "bottom-left" | "top-right">(null);
    const [draft, setDraft] = useState("");
    return <div style={{
      display: "flex",
      gap: 24,
      alignItems: "flex-start",
      height: 720,
      fontFamily: "var(--font-family-body)"
    }}>
        <div style={{
        width: 216,
        padding: 16,
        borderRadius: 24,
        background: "var(--color-surface)"
      }}>
          <ChatLauncher variant="menu" onClick={() => setOpen("bottom-left")} />
        </div>
        <div style={{
        display: "flex",
        padding: 6,
        borderRadius: 999,
        background: "var(--color-surface)"
      }}>
          <HeaderButton icon={<ChatMascotIcon size={24} />} label="Сэтлик" onClick={() => setOpen("top-right")} />
        </div>
        <ChatPopup open={!!open} onClose={() => setOpen(null)} placement={open ?? undefined}>
          <ChatWindow title="Новый диалог" composer={<ChatComposer value={draft} onChange={setDraft} onSend={() => setDraft("")} />} headAction={<HeaderButton icon={<IconClose />} aria-label="Закрыть" onClick={() => setOpen(null)} />}>
            <ChatWelcome suggestions={AI_SUGGESTIONS} />
          </ChatWindow>
        </ChatPopup>
      </div>;
  }
}`,...(K=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};export{k4 as __namedExportsOrder,D4 as default,S as ВМенюИШапке,g as Выпрямитель,C as Диалоги,h as Думает,p as НовыйДиалог,f as Окошко,m as Переписка,E as Поле};
