import{T as e,c as t,e as r,a as n}from"./core-DuvgZELZ.js";import{notify as o}from"./error-DrF4uAd-.js";const i=[],s=e=>{throw o(e),new Error(e)},a=({attributes:{worker:e}})=>!e,d=new WeakSet;let l=!0;const c=({interpreter:e,io:t,run:r,type:n},{sync:o})=>{if(!o.is_pyterminal())return;r("from polyscript import currentScript as _; __terminal__ = _.terminal; del _");let i="";const{pyterminal_read:s,pyterminal_write:a}=o,d=new TextDecoder,l={isatty:!1,write:e=>(i=d.decode(e),a(i),e.length)};if(t.stderr=e=>{a(String(e.message||e))},"mpy"===n){e.registerJsModule("_pyscript_input",{input:s}),r("from _pyscript_input import input");const n=e=>{const t=[];let r=0;return n=>{let o=0;for(const i of n)t.push(i),r?r--:194<=i&&i<=223?r=1:224<=i&&i<=239?r=2:240<=i&&i<=244&&(r=3),r||(o+=t.length,e(new Uint8Array(t.splice(0))));return o}};t.stdout=n(l.write),e.registerJsModule("code",{interact(){let r="",o=1;const i=new TextEncoder,l=[],c=n((e=>{l.push(...e),a(d.decode(e))}));t.stdout=e=>o++>r.length?c(e):0,e.replInit(),function t(){const n=d.decode(new Uint8Array(l.splice(0))),a=`${s(n.split("\n").at(-1))}\r`;o=0,r=i.encode(a);for(const t of r)e.replProcessChar(t);t()}()}})}else e.setStdout(l),e.setStderr(l),e.setStdin({isatty:!1,stdin:()=>s(i)})},m=async e=>{const[{Terminal:t},{Readline:o},{FitAddon:i},{WebLinksAddon:s}]=await Promise.all([import("./xterm-DqawCVsv.js"),import("./xterm-readline-D247p8vq.js"),import("./xterm_addon-fit--gyF3PcZ.js"),import("./xterm_addon-web-links-Cnej-nJ6.js")]),a=new o,l=r=>{let o=e;const d=e.getAttribute("target");if(d){if(o=document.getElementById(d)||document.querySelector(d),!o)throw new Error(`Unknown target ${d}`)}else o=document.createElement("py-terminal"),o.style.display="block",e.after(o);const l=new t({theme:{background:"#191A19",foreground:"#F5F2E7"},...r}),c=new i;return l.loadAddon(c),l.loadAddon(a),l.loadAddon(new s),l.open(o),c.fit(),l.focus(),n(e,{terminal:{value:l},process:{value:async e=>{for(const t of e.split(/(?:\r|\n|\r\n)/)){l.paste(`${t}\n`);do{await new Promise((e=>setTimeout(e,0)))}while(!a.activeRead?.resolve);a.activeRead.resolve(t)}}}}),l};e.hasAttribute("worker")?(r.main.onWorker.add((function e(t,n){d.has(n)||(d.add(n),r.main.onWorker.delete(e),l({disableStdin:!1,cursorBlink:!0,cursorStyle:"block"}),n.sync.is_pyterminal=()=>!0,n.sync.pyterminal_read=a.read.bind(a),n.sync.pyterminal_write=a.write.bind(a))})),r.worker.onReady.add(c)):r.main.onReady.add((function e({interpreter:t,io:n,run:o,type:i}){console.warn("py-terminal is read only on main thread"),r.main.onReady.delete(e),globalThis.__py_terminal__=l({disableStdin:!0,cursorBlink:!1,cursorStyle:"underline"}),o("from js import __py_terminal__ as __terminal__"),delete globalThis.__py_terminal__,n.stderr=e=>{a.write(String(e.message||e))},"mpy"===i&&(t.setStdin=Object,t.setStderr=Object,t.setStdout=({write:e})=>{n.stdout=e});let s="";const d=new TextDecoder,c={isatty:!1,write:e=>(s=d.decode(e),a.write(s),e.length)};t.setStdout(c),t.setStderr(c),t.setStdin({isatty:!1,stdin:()=>a.read(s)})}))};for(const r of e.keys()){const e=`script[type="${r}"][terminal],${r}-script[terminal]`;i.push(e),t.set(e,(async e=>{const t=document.querySelectorAll(i.join(","));[].filter.call(t,a).length>1&&s("You can use at most 1 main terminal"),l&&(l=!1,document.head.append(Object.assign(document.createElement("link"),{rel:"stylesheet",href:new URL("./xterm.css",import.meta.url)}))),await m(e)}))}
//# sourceMappingURL=py-terminal-DDHCvl2G.js.map