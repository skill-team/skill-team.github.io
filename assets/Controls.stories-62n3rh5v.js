import{j as e}from"./iframe-BjwqOSi3.js";import{C as n,R as r}from"./Radio-CP0jTXNY.js";import{S as g}from"./Scrollbar-CxOVkhpC.js";import{S as d}from"./Spinner-CMbWbs9A.js";import"./preload-helper-C1FmrZbK.js";import"./index-J-DsTmO9.js";import"./context-CGGttlbE.js";import"./pickAttrs-CMH0USIN.js";import"./useCSSVarCls-B_1IN5HN.js";import"./useForm-BGDuyS49.js";import"./index-CIlwjofH.js";const b={fontFamily:"var(--font-family-body)",fontSize:16,color:"var(--color-text-primary)"},w={title:"UI Kit/Служебное/Части полей",id:"ui-kit-field-parts",tags:["autodocs"],parameters:{docs:{description:{component:"Служебные части из praktis-ui-kit в цветах Setl:\n- **Checkbox**, **Radio** — antd, красные, бокс 16 (метки в пунктах MultiSelect и DropdownMenu);\n- **Spinner** — загрузка в полях (`accent`) и на кнопках (`current` — цветом текста);\n- **Scrollbar** — вид нативной полосы прокрутки: `s` (22) и `xs` (12), класс `scrollbarClass` для своей коробки.\n\n**"}}}},u={name:"Чекбокс и радио",render:()=>e.jsxs("div",{style:{display:"flex",gap:48},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,...b},children:[e.jsx(n,{children:"Не отмечен"}),e.jsx(n,{defaultChecked:!0,children:"Отмечен"}),e.jsx(n,{indeterminate:!0,children:"Частично"}),e.jsx(n,{disabled:!0,children:"Недоступен"}),e.jsx(n,{disabled:!0,defaultChecked:!0,children:"Недоступен, отмечен"})]}),e.jsxs(r.Group,{defaultValue:"a",style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(r,{value:"a",children:"Выбран"}),e.jsx(r,{value:"b",children:"Не выбран"}),e.jsx(r,{value:"c",disabled:!0,children:"Недоступен"})]})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsx(d,{}),e.jsx(d,{size:24}),e.jsx("span",{style:{display:"inline-flex",padding:8,borderRadius:999,background:"var(--red-main)",color:"#fff"},children:e.jsx(d,{tone:"current"})})]})},i={name:"Полоса прокрутки",render:()=>e.jsx("div",{style:{display:"flex",gap:32},children:["s","xs"].map(s=>e.jsx(g,{size:s,style:{width:240,height:160,background:"var(--color-surface)",borderRadius:16},children:e.jsx("div",{style:{padding:16,...b,fontSize:14},children:Array.from({length:12},(v,l)=>e.jsxs("p",{style:{margin:"0 0 8px"},children:["Строка ",l+1," — size ",s]},l))})},s))})},B=["ЧекбоксИРадио","Спиннер","ПолосаПрокрутки"];var o,t,c;u.parameters={...u.parameters,docs:{...(o=u.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: "Чекбокс и радио",
  render: () => <div style={{
    display: "flex",
    gap: 48
  }}>
      <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12,
      ...label
    }}>
        <Checkbox>Не отмечен</Checkbox>
        <Checkbox defaultChecked>Отмечен</Checkbox>
        <Checkbox indeterminate>Частично</Checkbox>
        <Checkbox disabled>Недоступен</Checkbox>
        <Checkbox disabled defaultChecked>
          Недоступен, отмечен
        </Checkbox>
      </div>
      <Radio.Group defaultValue="a" style={{
      display: "flex",
      flexDirection: "column",
      gap: 12
    }}>
        <Radio value="a">Выбран</Radio>
        <Radio value="b">Не выбран</Radio>
        <Radio value="c" disabled>
          Недоступен
        </Radio>
      </Radio.Group>
    </div>
}`,...(c=(t=u.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var p,x,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 24,
    alignItems: "center"
  }}>
      <Spinner />
      <Spinner size={24} />
      <span style={{
      display: "inline-flex",
      padding: 8,
      borderRadius: 999,
      background: "var(--red-main)",
      color: "#fff"
    }}>
        <Spinner tone="current" />
      </span>
    </div>
}`,...(m=(x=a.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var f,h,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Полоса прокрутки",
  render: () => <div style={{
    display: "flex",
    gap: 32
  }}>
      {(["s", "xs"] as const).map(size => <Scrollbar key={size} size={size} style={{
      width: 240,
      height: 160,
      background: "var(--color-surface)",
      borderRadius: 16
    }}>
          <div style={{
        padding: 16,
        ...label,
        fontSize: 14
      }}>
            {Array.from({
          length: 12
        }, (_, i) => <p key={i} style={{
          margin: "0 0 8px"
        }}>
                Строка {i + 1} — size {size}
              </p>)}
          </div>
        </Scrollbar>)}
    </div>
}`,...(y=(h=i.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};export{B as __namedExportsOrder,w as default,i as ПолосаПрокрутки,a as Спиннер,u as ЧекбоксИРадио};
