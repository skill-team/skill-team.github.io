import{j as n}from"./iframe-B8Z8o1yT.js";import{S as c,d as u,a as y,r as p}from"./parts-Ded-Cpcs.js";import"./preload-helper-C1FmrZbK.js";const x=[{token:"--font-family-expanded",title:"TT Commons Pro Expanded",role:"Заголовки, кнопки, меню, подписи"},{token:"--font-family-text",title:"TT Commons Pro",role:"Короткий текст (P2)"},{token:"--font-family-body",title:"Montserrat",role:"Длинный текст-абзац (P1) — TT Commons Pro на этом размере читается хуже"}],v=[{name:"Caption 1",key:"caption-1",family:"--font-family-expanded"},{name:"Caption 2",key:"caption-2",family:"--font-family-expanded"},{name:"H2",key:"h2",family:"--font-family-expanded"},{name:"H4",key:"h4",family:"--font-family-expanded"},{name:"H5",key:"h5",family:"--font-family-expanded"},{name:"Caption 3",key:"caption-3",family:"--font-family-expanded"},{name:"Caption 4",key:"caption-4",family:"--font-family-expanded"},{name:"Button 1",key:"button-1",family:"--font-family-expanded"},{name:"Button 2",key:"button-2",family:"--font-family-expanded"},{name:"P1",key:"p1",family:"--font-family-body"},{name:"P2",key:"p2",family:"--font-family-text"}],h="Курс «BIM-моделирование: путь от чертежа до объекта»",j={title:"Foundations/Типографика",id:"foundations-typography",tags:["autodocs"],parameters:{docs:{description:{component:"Шрифты и шкала текста из `tokens/tokens.css` (разбор — `tokens/typography.md`).\n\nФайлов шрифтов в ките нет: веб-лицензия TT Commons Pro не подтверждена. Здесь шрифт виден, только если он установлен на компьютере; иначе — Arial, как и в реальном коде.\nInter, найденный на экране в `Heading/3`, в кит сознательно не взят."}}}},t={render:()=>n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:x.map(e=>n.jsxs("div",{children:[n.jsxs("div",{style:{...u,fontSize:12,color:"#7e7e7e",marginBottom:4},children:[n.jsx(y,{children:e.token})," · ",e.role]}),n.jsxs("div",{style:{fontFamily:`var(${e.token})`,fontSize:28,color:"var(--color-text-primary)"},children:[e.title," — Сетл Академия 2026"]})]},e.token))})},i={render:()=>n.jsxs("div",{children:[n.jsx(c,{note:"Размер / начертание / межстрочный — живые значения токенов --text-<стиль>-size|weight|line-height.",children:"Шкала текста"}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:v.map(e=>{const o=f=>p(`--text-${e.key}-${f}`);return n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"200px 1fr",gap:24,alignItems:"baseline"},children:[n.jsxs("div",{style:{...u,fontSize:12,lineHeight:1.5},children:[n.jsx("div",{style:{fontWeight:600},children:e.name}),n.jsxs("div",{style:{color:"#7e7e7e"},children:[o("size")," · ",o("weight")," · ",o("line-height")]}),n.jsx(y,{children:e.family.replace("--font-family-","")})]}),n.jsx("div",{style:{fontFamily:`var(${e.family})`,fontSize:`var(--text-${e.key}-size)`,fontWeight:`var(--text-${e.key}-weight)`,lineHeight:`var(--text-${e.key}-line-height)`,color:"var(--color-text-primary)"},children:h})]},e.key)})})]})},T=["Шрифты","Шкала"];var a,l,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(r=(l=t.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var s,d,m;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          gridTemplateColumns: "200px 1fr",
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
                <Code>{s.family.replace("--font-family-", "")}</Code>
              </div>
              <div style={{
            fontFamily: \`var(\${s.family})\`,
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
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};export{T as __namedExportsOrder,j as default,i as Шкала,t as Шрифты};
