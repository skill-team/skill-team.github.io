import{r as u,j as t}from"./iframe-BjfIqAJn.js";import{M as p,R as m,T as i}from"./TopRatingCard-DQRq0ns9.js";import"./preload-helper-C1FmrZbK.js";import"./achievementsData-o0BWwx5X.js";import"./top-2-C8R-txU2.js";import"./index-CGJuuq_M.js";import"./Avatar-C2gNBoQ8.js";import"./Surface-WnPlUTOE.js";import"./index-Bvs48kgs.js";import"./InfoTag-Dqy2kx7X.js";import"./SectionHeader-BeTVk7Xj.js";import"./index-BOybzS2M.js";import"./ContextIsolator-x4ptwmC0.js";import"./context-jz5FLBdL.js";const O={title:"UI Kit/Профиль/TopRatingCard",id:"ui-kit-topratingcard",component:i,tags:["autodocs"],args:{items:m,title:"Топ-10 Академии",myPlace:p},argTypes:{title:{control:"text"},myPlace:{control:"number",description:"Место сотрудника — «Вы на N месте» под заголовком"},items:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},onOpen:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}},className:{control:!1,table:{category:"Для разработчиков — передаётся из кода"}}},parameters:{docs:{description:{component:`«Топ-10 Академии» для правой колонки (Главная 4) — под достижениями. Тот же рейтинг и тот же вид строки, что «ТОП-10» в личном кабинете: слева медаль у 1–3 (дальше номер места), аватарка 32 и фамилия с именем (одна строка, не поместились — отточие), справа баллы плашкой (красная у 1–3, серая дальше). Имя целиком — в подсказке при наведении на строку. Под заголовком — «Вы на N месте».

| Проп | Значения |
| --- | --- |
| \`items\` | ФИО, баллы, фото — сортируется по баллам, показываются первые 10 |
| \`onOpen\` | весь блок и «Все» — полный рейтинг (личный кабинет, «Достижения») |

Весь блок — одна цель для клика, наведение — подъём с тенью, как у карточек.`}}},decorators:[r=>t.jsx("div",{style:{width:296,padding:24,background:"var(--color-background)"},children:t.jsx(r,{})})]},o={render:r=>{const[e,c]=u.useState(0);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,fontFamily:"var(--font-family-body)"},children:[t.jsx(i,{...r,onOpen:()=>c(l=>l+1)}),t.jsx("span",{style:{fontSize:14,color:"var(--color-text-secondary)"},children:e?`Открыли рейтинг: ${e}`:"Нажмите на блок"})]})}},P=["Playground"];var n,a,s;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => {
    const [n, setN] = useState(0);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 12,
      fontFamily: "var(--font-family-body)"
    }}>
        <TopRatingCard {...args} onOpen={() => setN(x => x + 1)} />
        <span style={{
        fontSize: 14,
        color: "var(--color-text-secondary)"
      }}>{n ? \`Открыли рейтинг: \${n}\` : "Нажмите на блок"}</span>
      </div>;
  }
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};export{o as Playground,P as __namedExportsOrder,O as default};
