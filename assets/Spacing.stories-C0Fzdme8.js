import{j as n}from"./iframe-DCXgeGQz.js";import{S as o,C as t,d as a,r as d,c as f}from"./parts-7ekynreP.js";import"./preload-helper-C1FmrZbK.js";const u=e=>f.filter(b=>b.name.startsWith(e)),w={title:"Foundations/Отступы, радиусы, тени",id:"foundations-spacing",tags:["autodocs"],parameters:{docs:{description:{component:"Шкала отступов, радиусы и тени из `tokens/tokens.css` (разбор отступов — `tokens/spacing.md`,\nкаркас страницы — `patterns/page-shell.md`). Клик по имени — копирует `var(--имя)`.\n\nРадиусы сняты не шкалой, а по месту: 12 — из Figma, 16 и 30 — подтверждены по меню. У поля ввода свой радиус 24 (`--input-radius`)."}}}},r={render:()=>n.jsxs("div",{children:[n.jsx(o,{note:"Каркас страницы: 12 — от края экрана, 24 — между блоками.",children:"Отступы"}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:u("--space-").map(e=>n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"120px 48px 1fr",gap:16,alignItems:"center"},children:[n.jsx(t,{text:`var(${e.name})`,children:e.name}),n.jsx("span",{style:{...a,fontSize:12,color:"#7e7e7e"},children:d(e.name)}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[n.jsx("div",{style:{width:`var(${e.name})`,height:24,background:"var(--red-main)",borderRadius:2}}),e.note&&n.jsx("span",{style:{...a,fontSize:11.5,color:"#a9a9a9"},children:e.note})]})]},e.name))})]})},s={render:()=>n.jsxs("div",{children:[n.jsx(o,{children:"Радиусы"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:24},children:[...u("--radius-"),...f.filter(e=>e.name==="--input-radius")].map(e=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,width:176},children:[n.jsx("div",{style:{height:88,background:"var(--color-surface)",borderRadius:`var(${e.name})`,border:"1px solid var(--gray-300)"}}),n.jsx(t,{text:`var(${e.name})`,children:e.name}),n.jsx("span",{style:{...a,fontSize:12,color:"#7e7e7e"},children:d(e.name)}),e.note&&n.jsx("span",{style:{...a,fontSize:11.5,color:"#a9a9a9",lineHeight:1.35},children:e.note})]},e.name))})]})},i={render:()=>n.jsxs("div",{children:[n.jsx(o,{note:"--shadow-button-hover — тень ховер-подъёма кнопок с заливкой.",children:"Тени"}),n.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:32},children:u("--shadow-").map(e=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10,width:220},children:[n.jsx("div",{style:{height:88,background:"var(--color-surface)",borderRadius:"var(--radius-m)",boxShadow:`var(${e.name})`}}),n.jsx(t,{text:`var(${e.name})`,children:e.name}),n.jsx("span",{style:{...a,fontSize:11.5,color:"#7e7e7e",wordBreak:"break-word"},children:d(e.name)})]},e.name))})]})},C=["Отступы","Радиусы","Тени"];var l,c,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div>
      <SectionHeading note="Каркас страницы: 12 — от края экрана, 24 — между блоками.">Отступы</SectionHeading>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        {byPrefix("--space-").map(t => <div key={t.name} style={{
        display: "grid",
        gridTemplateColumns: "120px 48px 1fr",
        gap: 16,
        alignItems: "center"
      }}>
            <CopyLabel text={\`var(\${t.name})\`}>{t.name}</CopyLabel>
            <span style={{
          ...docText,
          fontSize: 12,
          color: "#7e7e7e"
        }}>{readToken(t.name)}</span>
            <div style={{
          display: "flex",
          alignItems: "center",
          gap: 12
        }}>
              <div style={{
            width: \`var(\${t.name})\`,
            height: 24,
            background: "var(--red-main)",
            borderRadius: 2
          }} />
              {t.note && <span style={{
            ...docText,
            fontSize: 11.5,
            color: "#a9a9a9"
          }}>{t.note}</span>}
            </div>
          </div>)}
      </div>
    </div>
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,x,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div>
      <SectionHeading>Радиусы</SectionHeading>
      <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 24
    }}>
        {[...byPrefix("--radius-"), ...cssTokens.filter(t => t.name === "--input-radius")].map(t => <div key={t.name} style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        width: 176
      }}>
            <div style={{
          height: 88,
          background: "var(--color-surface)",
          borderRadius: \`var(\${t.name})\`,
          border: "1px solid var(--gray-300)"
        }} />
            <CopyLabel text={\`var(\${t.name})\`}>{t.name}</CopyLabel>
            <span style={{
          ...docText,
          fontSize: 12,
          color: "#7e7e7e"
        }}>{readToken(t.name)}</span>
            {t.note && <span style={{
          ...docText,
          fontSize: 11.5,
          color: "#a9a9a9",
          lineHeight: 1.35
        }}>{t.note}</span>}
          </div>)}
      </div>
    </div>
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,g,h;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div>
      <SectionHeading note="--shadow-button-hover — тень ховер-подъёма кнопок с заливкой.">Тени</SectionHeading>
      <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 32
    }}>
        {byPrefix("--shadow-").map(t => <div key={t.name} style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        width: 220
      }}>
            <div style={{
          height: 88,
          background: "var(--color-surface)",
          borderRadius: "var(--radius-m)",
          boxShadow: \`var(\${t.name})\`
        }} />
            <CopyLabel text={\`var(\${t.name})\`}>{t.name}</CopyLabel>
            <span style={{
          ...docText,
          fontSize: 11.5,
          color: "#7e7e7e",
          wordBreak: "break-word"
        }}>{readToken(t.name)}</span>
          </div>)}
      </div>
    </div>
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};export{C as __namedExportsOrder,w as default,r as Отступы,s as Радиусы,i as Тени};
