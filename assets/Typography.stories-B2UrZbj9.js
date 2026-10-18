import{j as e}from"./iframe-BjwqOSi3.js";import{S as y,d as m,a as p,r as v}from"./parts-Nwy7NJVC.js";import"./preload-helper-C1FmrZbK.js";const x=[{token:"--font-family-body",title:"Montserrat",role:"Единственный шрифт кита: заголовки, текст, кнопки, меню, поля"}],h=[{name:"H2",key:"h2",use:"«Уже 1 240+», «Топ-10 Академии», заголовок на картинке, пустой список (большой)"},{name:"H3",key:"h3",use:"Заголовки блоков («Продолжить обучение», «Достижения»), ФИО, уровень, баллы, название курса"},{name:"H4",key:"h4",use:"Заголовок страницы в шапке («Главная»)"},{name:"H5",key:"h5",use:"Пункты меню, название новости, «48 курсов», пустой список (маленький)"},{name:"P1",key:"p1",use:"Крупный поиск на Главной"},{name:"P2",key:"p2",use:"Текст в полях, пункты выпадающих списков, подпункты меню, «Баллы», «2 из 6»"},{name:"P3",key:"p3",use:"Лейблы и ошибки полей, описания пунктов, теги, дата и текст новости, числа реакций"},{name:"Lead",key:"lead",use:"Подзаголовок на картинке"},{name:"Button Medium",key:"button-medium",use:"Кнопки, ссылки «Подробнее ↗», маленький поиск, имена и баллы в рейтинге"},{name:"Button Small",key:"button-small",use:"Маленькие кнопки, кнопки шапки, плашки «10 минут» и «50%»"},{name:"Caption Medium",key:"caption-medium",use:"Подписи разделов меню"},{name:"Caption Small",key:"caption-small",use:"Счётчик Bulb, плашка «Баллы», надзаголовок «01 — СООБЩЕСТВО» (там прописными, разрядка 1px), номер места в рейтинге"}],g="Курс «BIM-моделирование: путь от чертежа до объекта»",S={title:"Foundations/Типографика",id:"foundations-typography",tags:["autodocs"],parameters:{docs:{description:{component:"Шрифты и шкала текста из `tokens/tokens.css` (разбор — `tokens/typography.md`).\n\nШрифт один — **Montserrat** (Google Fonts, свободная лицензия). Заголовки — `h2…h5`, обычный текст — всегда `p1…p3`, кнопки и метки — `button-*`, мелкие подписи — `caption-*`."}}}},t={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:x.map(n=>e.jsxs("div",{children:[e.jsxs("div",{style:{...m,fontSize:12,color:"#7e7e7e",marginBottom:4},children:[e.jsx(p,{children:n.token})," · ",n.role]}),e.jsxs("div",{style:{fontFamily:`var(${n.token})`,fontSize:28,color:"var(--color-text-primary)"},children:[n.title," — Сетл Академия 2026"]})]},n.token))})},i={render:()=>e.jsxs("div",{children:[e.jsx(y,{note:"Размер / начертание / межстрочный — живые значения токенов --text-<стиль>-size|weight|line-height.",children:"Шкала текста"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:h.map(n=>{const o=c=>v(`--text-${n.key}-${c}`);return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"260px 1fr",gap:24,alignItems:"baseline"},children:[e.jsxs("div",{style:{...m,fontSize:12,lineHeight:1.5},children:[e.jsx("div",{style:{fontWeight:600},children:n.name}),e.jsxs("div",{style:{color:"#7e7e7e"},children:[o("size")," · ",o("weight")," · ",o("line-height")]}),e.jsx("div",{style:{color:"#7e7e7e"},children:n.use})]}),e.jsx("div",{style:{fontFamily:"var(--font-family-body)",fontSize:`var(--text-${n.key}-size)`,fontWeight:`var(--text-${n.key}-weight)`,lineHeight:`var(--text-${n.key}-line-height)`,color:"var(--color-text-primary)"},children:g})]},n.key)})})]})},z=["Шрифты","Шкала"];var s,a,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: 24
  }}>
      {families.map(f => <div key={f.token}>
          <div style={{
        ...docText,
        fontSize: 12,
        color: "#7e7e7e",
        marginBottom: 4
      }}>
            <Code>{f.token}</Code> · {f.role}
          </div>
          <div style={{
        fontFamily: \`var(\${f.token})\`,
        fontSize: 28,
        color: "var(--color-text-primary)"
      }}>{f.title} — Сетл Академия 2026</div>
        </div>)}
    </div>
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var u,l,d;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div>
      <SectionHeading note="Размер / начертание / межстрочный — живые значения токенов --text-<стиль>-size|weight|line-height.">
        Шкала текста
      </SectionHeading>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 20
    }}>
        {scale.map(s => {
        const v = (p: string) => readToken(\`--text-\${s.key}-\${p}\`);
        return <div key={s.key} style={{
          display: "grid",
          gridTemplateColumns: "260px 1fr",
          gap: 24,
          alignItems: "baseline"
        }}>
              <div style={{
            ...docText,
            fontSize: 12,
            lineHeight: 1.5
          }}>
                <div style={{
              fontWeight: 600
            }}>{s.name}</div>
                <div style={{
              color: "#7e7e7e"
            }}>
                  {v("size")} · {v("weight")} · {v("line-height")}
                </div>
                <div style={{
              color: "#7e7e7e"
            }}>{s.use}</div>
              </div>
              <div style={{
            fontFamily: "var(--font-family-body)",
            fontSize: \`var(--text-\${s.key}-size)\`,
            fontWeight: \`var(--text-\${s.key}-weight)\` as unknown as number,
            lineHeight: \`var(--text-\${s.key}-line-height)\`,
            color: "var(--color-text-primary)"
          }}>
                {sample}
              </div>
            </div>;
      })}
      </div>
    </div>
}`,...(d=(l=i.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};export{z as __namedExportsOrder,S as default,i as Шкала,t as Шрифты};
