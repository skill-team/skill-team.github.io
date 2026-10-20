import{r as s,j as l}from"./iframe-BFd96KHm.js";import{Z as m}from"./ZoomControl-DyR3u4E7.js";import"./preload-helper-C1FmrZbK.js";import"./SegmentedControl-CzJ9crHz.js";import"./index-D72j1uDz.js";import"./ContextIsolator-CfQAkasn.js";import"./context-BWLmWlnn.js";const Z={title:"UI Kit/Таблицы/ZoomControl",id:"ui-kit-zoomcontrol",component:m,tags:["autodocs"],args:{percent:100,mode:"fitWidth",onZoomOut:()=>{},onZoomIn:()=>{},onActualSize:()=>{},onFitWidth:()=>{},onFitPage:()=>{}},argTypes:{disabled:{control:"boolean",description:"Пока документ грузится"}},parameters:{docs:{description:{component:'Масштаб документа — для `FilePreview`: «− 103% +» (`Button secondary small`, значение `P3`) и режимы «100% · По ширине · Целиком» (`SegmentedControl` small). Режимы взаимоисключающие; масштаб, заданный − / + (`mode="custom"`), — не нажат ни один. На границах 25% / 300% − / + неактивны.'}}}},e={render:c=>{const[o,t]=s.useState("fitWidth"),[u,a]=s.useState(103);return l.jsx(m,{disabled:c.disabled,percent:o==="actual"?100:o==="fitPage"?74:o==="fitWidth"?103:u,mode:o,onZoomOut:()=>{a(n=>Math.max(25,n-10)),t("custom")},onZoomIn:()=>{a(n=>Math.min(300,n+10)),t("custom")},onActualSize:()=>t("actual"),onFitWidth:()=>t("fitWidth"),onFitPage:()=>t("fitPage")})}},W=["Playground"];var i,r,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => {
    const [mode, setMode] = useState<ZoomMode>("fitWidth");
    const [p, setP] = useState(103);
    return <ZoomControl disabled={args.disabled} percent={mode === "actual" ? 100 : mode === "fitPage" ? 74 : mode === "fitWidth" ? 103 : p} mode={mode} onZoomOut={() => {
      setP(x => Math.max(25, x - 10));
      setMode("custom");
    }} onZoomIn={() => {
      setP(x => Math.min(300, x + 10));
      setMode("custom");
    }} onActualSize={() => setMode("actual")} onFitWidth={() => setMode("fitWidth")} onFitPage={() => setMode("fitPage")} />;
  }
}`,...(d=(r=e.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};export{e as Playground,W as __namedExportsOrder,Z as default};
