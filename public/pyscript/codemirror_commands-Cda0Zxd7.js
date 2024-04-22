import{Annotation as e,Facet as t,EditorSelection as n,Text as r,findClusterBreak as o,countColumn as l,combineConfig as s,StateField as i,Transaction as a,ChangeSet as c,ChangeDesc as f,StateEffect as u,CharCategory as h}from"./codemirror_state-BKbyfKsm.js";import{E as m,D as d}from"./codemirror_view-Bz8y6BoV.js";import{q as p,r as g,u as y,v,s as A,w as k,b as w,i as D}from"./codemirror_language-DCl5sMoK.js";const S=e=>{let{state:t}=e,n=t.doc.lineAt(t.selection.main.from),r=I(e.state,n.from);return r.line?M(e):!!r.block&&T(e)};function x(e,t){return({state:n,dispatch:r})=>{if(n.readOnly)return!1;let o=e(t,n);return!!o&&(r(n.update(o)),!0)}}const M=x(J,0),B=x(J,1),C=x(J,2),O=x(R,0),E=x(R,1),b=x(R,2),T=x(((e,t)=>R(e,t,function(e){let t=[];for(let n of e.selection.ranges){let r=e.doc.lineAt(n.from),o=n.to<=r.to?r:e.doc.lineAt(n.to),l=t.length-1;l>=0&&t[l].to>r.from?t[l].to=o.to:t.push({from:r.from+/^\s*/.exec(r.text)[0].length,to:o.to})}return t}(t))),0);function I(e,t){let n=e.languageDataAt("commentTokens",t);return n.length?n[0]:{}}const V=50;function R(e,t,n=t.selection.ranges){let r=n.map((e=>I(t,e.from).block));if(!r.every((e=>e)))return null;let o=n.map(((e,n)=>function(e,{open:t,close:n},r,o){let l,s,i=e.sliceDoc(r-V,r),a=e.sliceDoc(o,o+V),c=/\s*$/.exec(i)[0].length,f=/^\s*/.exec(a)[0].length,u=i.length-c;if(i.slice(u-t.length,u)==t&&a.slice(f,f+n.length)==n)return{open:{pos:r-c,margin:c&&1},close:{pos:o+f,margin:f&&1}};o-r<=2*V?l=s=e.sliceDoc(r,o):(l=e.sliceDoc(r,r+V),s=e.sliceDoc(o-V,o));let h=/^\s*/.exec(l)[0].length,m=/\s*$/.exec(s)[0].length,d=s.length-m-n.length;return l.slice(h,h+t.length)==t&&s.slice(d,d+n.length)==n?{open:{pos:r+h+t.length,margin:/\s/.test(l.charAt(h+t.length))?1:0},close:{pos:o-m-n.length,margin:/\s/.test(s.charAt(d-1))?1:0}}:null}(t,r[n],e.from,e.to)));if(2!=e&&!o.every((e=>e)))return{changes:t.changes(n.map(((e,t)=>o[t]?[]:[{from:e.from,insert:r[t].open+" "},{from:e.to,insert:" "+r[t].close}])))};if(1!=e&&o.some((e=>e))){let e=[];for(let t,n=0;n<o.length;n++)if(t=o[n]){let o=r[n],{open:l,close:s}=t;e.push({from:l.pos-o.open.length,to:l.pos+l.margin},{from:s.pos-s.margin,to:s.pos+o.close.length})}return{changes:e}}return null}function J(e,t,n=t.selection.ranges){let r=[],o=-1;for(let{from:e,to:l}of n){let n=r.length,s=1e9,i=I(t,e).line;if(i){for(let n=e;n<=l;){let a=t.doc.lineAt(n);if(a.from>o&&(e==l||l>a.from)){o=a.from;let e=/^\s*/.exec(a.text)[0].length,t=e==a.length,n=a.text.slice(e,e+i.length)==i?e:-1;e<a.text.length&&e<s&&(s=e),r.push({line:a,comment:n,token:i,indent:e,empty:t,single:!1})}n=a.to+1}if(s<1e9)for(let e=n;e<r.length;e++)r[e].indent<r[e].line.text.length&&(r[e].indent=s);r.length==n+1&&(r[n].single=!0)}}if(2!=e&&r.some((e=>e.comment<0&&(!e.empty||e.single)))){let e=[];for(let{line:t,token:n,indent:o,empty:l,single:s}of r)!s&&l||e.push({from:t.from+o,insert:n+" "});let n=t.changes(e);return{changes:n,selection:t.selection.map(n,1)}}if(1!=e&&r.some((e=>e.comment>=0))){let e=[];for(let{line:t,comment:n,token:o}of r)if(n>=0){let r=t.from+n,l=r+o.length;" "==t.text[l-t.from]&&l++,e.push({from:r,to:l})}return{changes:e}}return null}const L=e.define(),N=e.define(),U=t.define(),H=t.define({combine:e=>s(e,{minDepth:100,newGroupDelay:500,joinToEvent:(e,t)=>t},{minDepth:Math.max,newGroupDelay:Math.min,joinToEvent:(e,t)=>(n,r)=>e(n,r)||t(n,r)})}),z=i.define({create:()=>ie.empty,update(e,t){let n=t.state.facet(H),r=t.annotation(L);if(r){let o=X.fromTransaction(t,r.selection),l=r.side,s=0==l?e.undone:e.done;return s=o?Y(s,s.length,n.minDepth,o):ne(s,t.startState.selection),new ie(0==l?r.rest:s,0==l?s:r.rest)}let o=t.annotation(N);if("full"!=o&&"before"!=o||(e=e.isolate()),!1===t.annotation(a.addToHistory))return t.changes.empty?e:e.addMapping(t.changes.desc);let l=X.fromTransaction(t),s=t.annotation(a.time),i=t.annotation(a.userEvent);return l?e=e.addChanges(l,s,i,n,t):t.selection&&(e=e.addSelection(t.startState.selection,s,i,n.newGroupDelay)),"full"!=o&&"after"!=o||(e=e.isolate()),e},toJSON:e=>({done:e.done.map((e=>e.toJSON())),undone:e.undone.map((e=>e.toJSON()))}),fromJSON:e=>new ie(e.done.map(X.fromJSON),e.undone.map(X.fromJSON))});function j(e={}){return[z,H.of(e),m.domEventHandlers({beforeinput(e,t){let n="historyUndo"==e.inputType?P:"historyRedo"==e.inputType?W:null;return!!n&&(e.preventDefault(),n(t))}})]}const G=z;function q(e,t){return function({state:n,dispatch:r}){if(!t&&n.readOnly)return!1;let o=n.field(z,!1);if(!o)return!1;let l=o.pop(e,n,t);return!!l&&(r(l),!0)}}const P=q(0,!1),W=q(1,!1),$=q(0,!0),_=q(1,!0);function F(e){return function(t){let n=t.field(z,!1);if(!n)return 0;let r=0==e?n.done:n.undone;return r.length-(r.length&&!r[0].changes?1:0)}}const K=F(0),Q=F(1);class X{constructor(e,t,n,r,o){this.changes=e,this.effects=t,this.mapped=n,this.startSelection=r,this.selectionsAfter=o}setSelAfter(e){return new X(this.changes,this.effects,this.mapped,this.startSelection,e)}toJSON(){var e,t,n;return{changes:null===(e=this.changes)||void 0===e?void 0:e.toJSON(),mapped:null===(t=this.mapped)||void 0===t?void 0:t.toJSON(),startSelection:null===(n=this.startSelection)||void 0===n?void 0:n.toJSON(),selectionsAfter:this.selectionsAfter.map((e=>e.toJSON()))}}static fromJSON(e){return new X(e.changes&&c.fromJSON(e.changes),[],e.mapped&&f.fromJSON(e.mapped),e.startSelection&&n.fromJSON(e.startSelection),e.selectionsAfter.map(n.fromJSON))}static fromTransaction(e,t){let n=ee;for(let t of e.startState.facet(U)){let r=t(e);r.length&&(n=n.concat(r))}return!n.length&&e.changes.empty?null:new X(e.changes.invert(e.startState.doc),n,void 0,t||e.startState.selection,ee)}static selection(e){return new X(void 0,ee,void 0,void 0,e)}}function Y(e,t,n,r){let o=t+1>n+20?t-n-1:0,l=e.slice(o,t);return l.push(r),l}function Z(e,t){return e.length?t.length?e.concat(t):e:t}const ee=[],te=200;function ne(e,t){if(e.length){let n=e[e.length-1],r=n.selectionsAfter.slice(Math.max(0,n.selectionsAfter.length-te));return r.length&&r[r.length-1].eq(t)?e:(r.push(t),Y(e,e.length-1,1e9,n.setSelAfter(r)))}return[X.selection([t])]}function re(e){let t=e[e.length-1],n=e.slice();return n[e.length-1]=t.setSelAfter(t.selectionsAfter.slice(0,t.selectionsAfter.length-1)),n}function oe(e,t){if(!e.length)return e;let n=e.length,r=ee;for(;n;){let o=le(e[n-1],t,r);if(o.changes&&!o.changes.empty||o.effects.length){let t=e.slice(0,n);return t[n-1]=o,t}t=o.mapped,n--,r=o.selectionsAfter}return r.length?[X.selection(r)]:ee}function le(e,t,n){let r=Z(e.selectionsAfter.length?e.selectionsAfter.map((e=>e.map(t))):ee,n);if(!e.changes)return X.selection(r);let o=e.changes.map(t),l=t.mapDesc(e.changes,!0),s=e.mapped?e.mapped.composeDesc(l):l;return new X(o,u.mapEffects(e.effects,t),s,e.startSelection.map(l),r)}const se=/^(input\.type|delete)($|\.)/;class ie{constructor(e,t,n=0,r=void 0){this.done=e,this.undone=t,this.prevTime=n,this.prevUserEvent=r}isolate(){return this.prevTime?new ie(this.done,this.undone):this}addChanges(e,t,n,r,o){let l=this.done,s=l[l.length-1];return l=s&&s.changes&&!s.changes.empty&&e.changes&&(!n||se.test(n))&&(!s.selectionsAfter.length&&t-this.prevTime<r.newGroupDelay&&r.joinToEvent(o,function(e,t){let n=[],r=!1;return e.iterChangedRanges(((e,t)=>n.push(e,t))),t.iterChangedRanges(((e,t,o,l)=>{for(let e=0;e<n.length;){let t=n[e++],s=n[e++];l>=t&&o<=s&&(r=!0)}})),r}(s.changes,e.changes))||"input.type.compose"==n)?Y(l,l.length-1,r.minDepth,new X(e.changes.compose(s.changes),Z(e.effects,s.effects),s.mapped,s.startSelection,ee)):Y(l,l.length,r.minDepth,e),new ie(l,ee,t,n)}addSelection(e,t,n,r){let o=this.done.length?this.done[this.done.length-1].selectionsAfter:ee;return o.length>0&&t-this.prevTime<r&&n==this.prevUserEvent&&n&&/^select($|\.)/.test(n)&&(l=o[o.length-1],s=e,l.ranges.length==s.ranges.length&&0===l.ranges.filter(((e,t)=>e.empty!=s.ranges[t].empty)).length)?this:new ie(ne(this.done,e),this.undone,t,n);var l,s}addMapping(e){return new ie(oe(this.done,e),oe(this.undone,e),this.prevTime,this.prevUserEvent)}pop(e,t,n){let r=0==e?this.done:this.undone;if(0==r.length)return null;let o=r[r.length-1],l=o.selectionsAfter[0]||t.selection;if(n&&o.selectionsAfter.length)return t.update({selection:o.selectionsAfter[o.selectionsAfter.length-1],annotations:L.of({side:e,rest:re(r),selection:l}),userEvent:0==e?"select.undo":"select.redo",scrollIntoView:!0});if(o.changes){let n=1==r.length?ee:r.slice(0,r.length-1);return o.mapped&&(n=oe(n,o.mapped)),t.update({changes:o.changes,selection:o.startSelection,effects:o.effects,annotations:L.of({side:e,rest:n,selection:l}),filter:!1,userEvent:0==e?"undo":"redo",scrollIntoView:!0})}return null}}ie.empty=new ie(ee,ee);const ae=[{key:"Mod-z",run:P,preventDefault:!0},{key:"Mod-y",mac:"Mod-Shift-z",run:W,preventDefault:!0},{linux:"Ctrl-Shift-z",run:W,preventDefault:!0},{key:"Mod-u",run:$,preventDefault:!0},{key:"Alt-u",mac:"Mod-Shift-u",run:_,preventDefault:!0}];function ce(e,t){return n.create(e.ranges.map(t),e.mainIndex)}function fe(e,t){return e.update({selection:t,scrollIntoView:!0,userEvent:"select"})}function ue({state:e,dispatch:t},n){let r=ce(e.selection,n);return!r.eq(e.selection,!0)&&(t(fe(e,r)),!0)}function he(e,t){return n.cursor(t?e.to:e.from)}function me(e,t){return ue(e,(n=>n.empty?e.moveByChar(n,t):he(n,t)))}function de(e){return e.textDirectionAt(e.state.selection.main.head)==d.LTR}const pe=e=>me(e,!de(e)),ge=e=>me(e,de(e)),ye=e=>me(e,!0),ve=e=>me(e,!1);function Ae(e,t){return ue(e,(n=>n.empty?e.moveByGroup(n,t):he(n,t)))}const ke=e=>Ae(e,!de(e)),we=e=>Ae(e,de(e)),De=e=>Ae(e,!0),Se=e=>Ae(e,!1),xe="undefined"!=typeof Intl&&Intl.Segmenter?new Intl.Segmenter(void 0,{granularity:"word"}):null;function Me(e,t,r){let o=e.state.charCategorizer(t.from),l=h.Space,s=t.from,i=0,a=!1,c=!1,f=!1,u=t=>{if(a)return!1;s+=r?t.length:-t.length;let n,u=o(t);if(u==h.Word&&t.charCodeAt(0)<128&&/[\W_]/.test(t)&&(u=-1),l==h.Space&&(l=u),l!=u)return!1;if(l==h.Word)if(t.toLowerCase()==t){if(!r&&c)return!1;f=!0}else if(f){if(r)return!1;a=!0}else{if(c&&r&&o(n=e.state.sliceDoc(s,s+1))==h.Word&&n.toLowerCase()==n)return!1;c=!0}return i++,!0},m=e.moveByChar(t,r,(e=>(u(e),u)));if(xe&&l==h.Word&&m.from==t.from+i*(r?1:-1)){let o=Math.min(t.head,m.head),l=Math.max(t.head,m.head),s=e.state.sliceDoc(o,l);if(s.length>1&&/[\u4E00-\uffff]/.test(s)){let e=Array.from(xe.segment(s));if(e.length>1)return r?n.cursor(t.head+e[1].index,-1):n.cursor(m.head+e[e.length-1].index,1)}}return m}function Be(e,t){return ue(e,(n=>n.empty?Me(e,n,t):he(n,t)))}const Ce=e=>Be(e,!0),Oe=e=>Be(e,!1);function Ee(e,t,n){if(t.type.prop(n))return!0;let r=t.to-t.from;return r&&(r>2||/[^\s,.;:]/.test(e.sliceDoc(t.from,t.to)))||t.firstChild}function be(e,t,r){let o,l,s=A(e).resolveInner(t.head),i=r?w.closedBy:w.openedBy;for(let n=t.head;;){let t=r?s.childAfter(n):s.childBefore(n);if(!t)break;Ee(e,t,i)?s=t:n=r?t.to:t.from}return l=s.type.prop(i)&&(o=r?v(e,s.from,1):v(e,s.to,-1))&&o.matched?r?o.end.to:o.end.from:r?s.to:s.from,n.cursor(l,r?-1:1)}const Te=e=>ue(e,(t=>be(e.state,t,!de(e)))),Ie=e=>ue(e,(t=>be(e.state,t,de(e))));function Ve(e,t){return ue(e,(n=>{if(!n.empty)return he(n,t);let r=e.moveVertically(n,t);return r.head!=n.head?r:e.moveToLineBoundary(n,t)}))}const Re=e=>Ve(e,!1),Je=e=>Ve(e,!0);function Le(e){let t,n=e.scrollDOM.clientHeight<e.scrollDOM.scrollHeight-2,r=0,o=0;if(n){for(let t of e.state.facet(m.scrollMargins)){let n=t(e);(null==n?void 0:n.top)&&(r=Math.max(null==n?void 0:n.top,r)),(null==n?void 0:n.bottom)&&(o=Math.max(null==n?void 0:n.bottom,o))}t=e.scrollDOM.clientHeight-r-o}else t=(e.dom.ownerDocument.defaultView||window).innerHeight;return{marginTop:r,marginBottom:o,selfScroll:n,height:Math.max(e.defaultLineHeight,t-5)}}function Ne(e,t){let n,r=Le(e),{state:o}=e,l=ce(o.selection,(n=>n.empty?e.moveVertically(n,t,r.height):he(n,t)));if(l.eq(o.selection))return!1;if(r.selfScroll){let t=e.coordsAtPos(o.selection.main.head),s=e.scrollDOM.getBoundingClientRect(),i=s.top+r.marginTop,a=s.bottom-r.marginBottom;t&&t.top>i&&t.bottom<a&&(n=m.scrollIntoView(l.main.head,{y:"start",yMargin:t.top-i}))}return e.dispatch(fe(o,l),{effects:n}),!0}const Ue=e=>Ne(e,!1),He=e=>Ne(e,!0);function ze(e,t,r){let o=e.lineBlockAt(t.head),l=e.moveToLineBoundary(t,r);if(l.head==t.head&&l.head!=(r?o.to:o.from)&&(l=e.moveToLineBoundary(t,r,!1)),!r&&l.head==o.from&&o.length){let r=/^\s*/.exec(e.state.sliceDoc(o.from,Math.min(o.from+100,o.to)))[0].length;r&&t.head!=o.from+r&&(l=n.cursor(o.from+r))}return l}const je=e=>ue(e,(t=>ze(e,t,!0))),Ge=e=>ue(e,(t=>ze(e,t,!1))),qe=e=>ue(e,(t=>ze(e,t,!de(e)))),Pe=e=>ue(e,(t=>ze(e,t,de(e)))),We=e=>ue(e,(t=>n.cursor(e.lineBlockAt(t.head).from,1))),$e=e=>ue(e,(t=>n.cursor(e.lineBlockAt(t.head).to,-1)));function _e(e,t,r){let o=!1,l=ce(e.selection,(t=>{let l=v(e,t.head,-1)||v(e,t.head,1)||t.head>0&&v(e,t.head-1,1)||t.head<e.doc.length&&v(e,t.head+1,-1);if(!l||!l.end)return t;o=!0;let s=l.start.from==t.head?l.end.to:l.end.from;return r?n.range(t.anchor,s):n.cursor(s)}));return!!o&&(t(fe(e,l)),!0)}const Fe=({state:e,dispatch:t})=>_e(e,t,!1),Ke=({state:e,dispatch:t})=>_e(e,t,!0);function Qe(e,t){let r=ce(e.state.selection,(e=>{let r=t(e);return n.range(e.anchor,r.head,r.goalColumn,r.bidiLevel||void 0)}));return!r.eq(e.state.selection)&&(e.dispatch(fe(e.state,r)),!0)}function Xe(e,t){return Qe(e,(n=>e.moveByChar(n,t)))}const Ye=e=>Xe(e,!de(e)),Ze=e=>Xe(e,de(e)),et=e=>Xe(e,!0),tt=e=>Xe(e,!1);function nt(e,t){return Qe(e,(n=>e.moveByGroup(n,t)))}const rt=e=>nt(e,!de(e)),ot=e=>nt(e,de(e)),lt=e=>nt(e,!0),st=e=>nt(e,!1);function it(e,t){return Qe(e,(n=>Me(e,n,t)))}const at=e=>it(e,!0),ct=e=>it(e,!1),ft=e=>Qe(e,(t=>be(e.state,t,!de(e)))),ut=e=>Qe(e,(t=>be(e.state,t,de(e))));function ht(e,t){return Qe(e,(n=>e.moveVertically(n,t)))}const mt=e=>ht(e,!1),dt=e=>ht(e,!0);function pt(e,t){return Qe(e,(n=>e.moveVertically(n,t,Le(e).height)))}const gt=e=>pt(e,!1),yt=e=>pt(e,!0),vt=e=>Qe(e,(t=>ze(e,t,!0))),At=e=>Qe(e,(t=>ze(e,t,!1))),kt=e=>Qe(e,(t=>ze(e,t,!de(e)))),wt=e=>Qe(e,(t=>ze(e,t,de(e)))),Dt=e=>Qe(e,(t=>n.cursor(e.lineBlockAt(t.head).from))),St=e=>Qe(e,(t=>n.cursor(e.lineBlockAt(t.head).to))),xt=({state:e,dispatch:t})=>(t(fe(e,{anchor:0})),!0),Mt=({state:e,dispatch:t})=>(t(fe(e,{anchor:e.doc.length})),!0),Bt=({state:e,dispatch:t})=>(t(fe(e,{anchor:e.selection.main.anchor,head:0})),!0),Ct=({state:e,dispatch:t})=>(t(fe(e,{anchor:e.selection.main.anchor,head:e.doc.length})),!0),Ot=({state:e,dispatch:t})=>(t(e.update({selection:{anchor:0,head:e.doc.length},userEvent:"select"})),!0),Et=({state:e,dispatch:t})=>{let r=_t(e).map((({from:t,to:r})=>n.range(t,Math.min(r+1,e.doc.length))));return t(e.update({selection:n.create(r),userEvent:"select"})),!0},bt=({state:e,dispatch:t})=>{let r=ce(e.selection,(t=>{var r;for(let o=A(e).resolveStack(t.from,1);o;o=o.next){let{node:e}=o;if((e.from<t.from&&e.to>=t.to||e.to>t.to&&e.from<=t.from)&&(null===(r=e.parent)||void 0===r?void 0:r.parent))return n.range(e.to,e.from)}return t}));return t(fe(e,r)),!0},Tt=({state:e,dispatch:t})=>{let r=e.selection,o=null;return r.ranges.length>1?o=n.create([r.main]):r.main.empty||(o=n.create([n.cursor(r.main.head)])),!!o&&(t(fe(e,o)),!0)};function It(e,t){if(e.state.readOnly)return!1;let r="delete.selection",{state:o}=e,l=o.changeByRange((o=>{let{from:l,to:s}=o;if(l==s){let n=t(o);n<l?(r="delete.backward",n=Vt(e,n,!1)):n>l&&(r="delete.forward",n=Vt(e,n,!0)),l=Math.min(l,n),s=Math.max(s,n)}else l=Vt(e,l,!1),s=Vt(e,s,!0);return l==s?{range:o}:{changes:{from:l,to:s},range:n.cursor(l,l<o.head?-1:1)}}));return!l.changes.empty&&(e.dispatch(o.update(l,{scrollIntoView:!0,userEvent:r,effects:"delete.selection"==r?m.announce.of(o.phrase("Selection deleted")):void 0})),!0)}function Vt(e,t,n){if(e instanceof m)for(let r of e.state.facet(m.atomicRanges).map((t=>t(e))))r.between(t,t,((e,r)=>{e<t&&r>t&&(t=n?r:e)}));return t}const Rt=(e,t)=>It(e,(n=>{let r,s,i=n.from,{state:a}=e,c=a.doc.lineAt(i);if(!t&&i>c.from&&i<c.from+200&&!/[^ \t]/.test(r=c.text.slice(0,i-c.from))){if("\t"==r[r.length-1])return i-1;let e=l(r,a.tabSize)%k(a)||k(a);for(let t=0;t<e&&" "==r[r.length-1-t];t++)i--;s=i}else s=o(c.text,i-c.from,t,t)+c.from,s==i&&c.number!=(t?a.doc.lines:1)?s+=t?1:-1:!t&&/[\ufe00-\ufe0f]/.test(c.text.slice(s-c.from,i-c.from))&&(s=o(c.text,s-c.from,!1,!1)+c.from);return s})),Jt=e=>Rt(e,!1),Lt=e=>Rt(e,!0),Nt=(e,t)=>It(e,(n=>{let r=n.head,{state:l}=e,s=l.doc.lineAt(r),i=l.charCategorizer(r);for(let e=null;;){if(r==(t?s.to:s.from)){r==n.head&&s.number!=(t?l.doc.lines:1)&&(r+=t?1:-1);break}let a=o(s.text,r-s.from,t)+s.from,c=s.text.slice(Math.min(r,a)-s.from,Math.max(r,a)-s.from),f=i(c);if(null!=e&&f!=e)break;" "==c&&r==n.head||(e=f),r=a}return r})),Ut=e=>Nt(e,!1),Ht=e=>Nt(e,!0),zt=e=>It(e,(t=>{let n=e.lineBlockAt(t.head).to;return t.head<n?n:Math.min(e.state.doc.length,t.head+1)})),jt=e=>It(e,(t=>{let n=e.lineBlockAt(t.head).from;return t.head>n?n:Math.max(0,t.head-1)})),Gt=e=>It(e,(t=>{let n=e.moveToLineBoundary(t,!1).head;return t.head>n?n:Math.max(0,t.head-1)})),qt=e=>It(e,(t=>{let n=e.moveToLineBoundary(t,!0).head;return t.head<n?n:Math.min(e.state.doc.length,t.head+1)})),Pt=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=[];for(let t=0,r="",o=e.doc.iter();;){if(o.next(),o.lineBreak||o.done){let e=r.search(/\s+$/);if(e>-1&&n.push({from:t-(r.length-e),to:t}),o.done)break;r=""}else r=o.value;t+=o.value.length}return!!n.length&&(t(e.update({changes:n,userEvent:"delete"})),!0)},Wt=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let o=e.changeByRange((e=>({changes:{from:e.from,to:e.to,insert:r.of(["",""])},range:n.cursor(e.from)})));return t(e.update(o,{scrollIntoView:!0,userEvent:"input"})),!0},$t=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let r=e.changeByRange((t=>{if(!t.empty||0==t.from||t.from==e.doc.length)return{range:t};let r=t.from,l=e.doc.lineAt(r),s=r==l.from?r-1:o(l.text,r-l.from,!1)+l.from,i=r==l.to?r+1:o(l.text,r-l.from,!0)+l.from;return{changes:{from:s,to:i,insert:e.doc.slice(r,i).append(e.doc.slice(s,r))},range:n.cursor(i)}}));return!r.changes.empty&&(t(e.update(r,{scrollIntoView:!0,userEvent:"move.character"})),!0)};function _t(e){let t=[],n=-1;for(let r of e.selection.ranges){let o=e.doc.lineAt(r.from),l=e.doc.lineAt(r.to);if(r.empty||r.to!=l.from||(l=e.doc.lineAt(r.to-1)),n>=o.number){let e=t[t.length-1];e.to=l.to,e.ranges.push(r)}else t.push({from:o.from,to:l.to,ranges:[r]});n=l.number+1}return t}function Ft(e,t,r){if(e.readOnly)return!1;let o=[],l=[];for(let t of _t(e)){if(r?t.to==e.doc.length:0==t.from)continue;let s=e.doc.lineAt(r?t.to+1:t.from-1),i=s.length+1;if(r){o.push({from:t.to,to:s.to},{from:t.from,insert:s.text+e.lineBreak});for(let r of t.ranges)l.push(n.range(Math.min(e.doc.length,r.anchor+i),Math.min(e.doc.length,r.head+i)))}else{o.push({from:s.from,to:t.from},{from:t.to,insert:e.lineBreak+s.text});for(let e of t.ranges)l.push(n.range(e.anchor-i,e.head-i))}}return!!o.length&&(t(e.update({changes:o,scrollIntoView:!0,selection:n.create(l,e.selection.mainIndex),userEvent:"move.line"})),!0)}const Kt=({state:e,dispatch:t})=>Ft(e,t,!1),Qt=({state:e,dispatch:t})=>Ft(e,t,!0);function Xt(e,t,n){if(e.readOnly)return!1;let r=[];for(let t of _t(e))n?r.push({from:t.from,insert:e.doc.slice(t.from,t.to)+e.lineBreak}):r.push({from:t.to,insert:e.lineBreak+e.doc.slice(t.from,t.to)});return t(e.update({changes:r,scrollIntoView:!0,userEvent:"input.copyline"})),!0}const Yt=({state:e,dispatch:t})=>Xt(e,t,!1),Zt=({state:e,dispatch:t})=>Xt(e,t,!0),en=e=>{if(e.state.readOnly)return!1;let{state:t}=e,n=t.changes(_t(t).map((({from:e,to:n})=>(e>0?e--:n<t.doc.length&&n++,{from:e,to:n})))),r=ce(t.selection,(t=>e.moveVertically(t,!0))).map(n);return e.dispatch({changes:n,selection:r,scrollIntoView:!0,userEvent:"delete.line"}),!0},tn=({state:e,dispatch:t})=>(t(e.update(e.replaceSelection(e.lineBreak),{scrollIntoView:!0,userEvent:"input"})),!0);const nn=on(!1),rn=on(!0);function on(e){return({state:t,dispatch:o})=>{if(t.readOnly)return!1;let s=t.changeByRange((o=>{let{from:s,to:i}=o,a=t.doc.lineAt(s),c=!e&&s==i&&function(e,t){if(/\(\)|\[\]|\{\}/.test(e.sliceDoc(t-1,t+1)))return{from:t,to:t};let n,r=A(e).resolveInner(t),o=r.childBefore(t),l=r.childAfter(t);return o&&l&&o.to<=t&&l.from>=t&&(n=o.type.prop(w.closedBy))&&n.indexOf(l.name)>-1&&e.doc.lineAt(o.to).from==e.doc.lineAt(l.from).from&&!/\S/.test(e.sliceDoc(o.to,l.from))?{from:o.to,to:l.from}:null}(t,s);e&&(s=i=(i<=a.to?a:t.doc.lineAt(i)).to);let f=new p(t,{simulateBreak:s,simulateDoubleBreak:!!c}),u=g(f,s);for(null==u&&(u=l(/^\s*/.exec(t.doc.lineAt(s).text)[0],t.tabSize));i<a.to&&/\s/.test(a.text[i-a.from]);)i++;c?({from:s,to:i}=c):s>a.from&&s<a.from+100&&!/\S/.test(a.text.slice(0,s))&&(s=a.from);let h=["",y(t,u)];return c&&h.push(y(t,f.lineIndent(a.from,-1))),{changes:{from:s,to:i,insert:r.of(h)},range:n.cursor(s+1+h[1].length)}}));return o(t.update(s,{scrollIntoView:!0,userEvent:"input"})),!0}}function ln(e,t){let r=-1;return e.changeByRange((o=>{let l=[];for(let n=o.from;n<=o.to;){let s=e.doc.lineAt(n);s.number>r&&(o.empty||o.to>s.from)&&(t(s,l,o),r=s.number),n=s.to+1}let s=e.changes(l);return{changes:l,range:n.range(s.mapPos(o.anchor,1),s.mapPos(o.head,1))}}))}const sn=({state:e,dispatch:t})=>{if(e.readOnly)return!1;let n=Object.create(null),r=new p(e,{overrideIndentation:e=>{let t=n[e];return null==t?-1:t}}),o=ln(e,((t,o,l)=>{let s=g(r,t.from);if(null==s)return;/\S/.test(t.text)||(s=0);let i=/^\s*/.exec(t.text)[0],a=y(e,s);(i!=a||l.from<t.from+i.length)&&(n[t.from]=s,o.push({from:t.from,to:t.from+i.length,insert:a}))}));return o.changes.empty||t(e.update(o,{userEvent:"indent"})),!0},an=({state:e,dispatch:t})=>!e.readOnly&&(t(e.update(ln(e,((t,n)=>{n.push({from:t.from,insert:e.facet(D)})})),{userEvent:"input.indent"})),!0),cn=({state:e,dispatch:t})=>!e.readOnly&&(t(e.update(ln(e,((t,n)=>{let r=/^\s*/.exec(t.text)[0];if(!r)return;let o=l(r,e.tabSize),s=0,i=y(e,Math.max(0,o-k(e)));for(;s<r.length&&s<i.length&&r.charCodeAt(s)==i.charCodeAt(s);)s++;n.push({from:t.from+s,to:t.from+r.length,insert:i.slice(s)})})),{userEvent:"delete.dedent"})),!0),fn=({state:e,dispatch:t})=>e.selection.ranges.some((e=>!e.empty))?an({state:e,dispatch:t}):(t(e.update(e.replaceSelection("\t"),{scrollIntoView:!0,userEvent:"input"})),!0),un=[{key:"Ctrl-b",run:pe,shift:Ye,preventDefault:!0},{key:"Ctrl-f",run:ge,shift:Ze},{key:"Ctrl-p",run:Re,shift:mt},{key:"Ctrl-n",run:Je,shift:dt},{key:"Ctrl-a",run:We,shift:Dt},{key:"Ctrl-e",run:$e,shift:St},{key:"Ctrl-d",run:Lt},{key:"Ctrl-h",run:Jt},{key:"Ctrl-k",run:zt},{key:"Ctrl-Alt-h",run:Ut},{key:"Ctrl-o",run:Wt},{key:"Ctrl-t",run:$t},{key:"Ctrl-v",run:He}],hn=[{key:"ArrowLeft",run:pe,shift:Ye,preventDefault:!0},{key:"Mod-ArrowLeft",mac:"Alt-ArrowLeft",run:ke,shift:rt,preventDefault:!0},{mac:"Cmd-ArrowLeft",run:qe,shift:kt,preventDefault:!0},{key:"ArrowRight",run:ge,shift:Ze,preventDefault:!0},{key:"Mod-ArrowRight",mac:"Alt-ArrowRight",run:we,shift:ot,preventDefault:!0},{mac:"Cmd-ArrowRight",run:Pe,shift:wt,preventDefault:!0},{key:"ArrowUp",run:Re,shift:mt,preventDefault:!0},{mac:"Cmd-ArrowUp",run:xt,shift:Bt},{mac:"Ctrl-ArrowUp",run:Ue,shift:gt},{key:"ArrowDown",run:Je,shift:dt,preventDefault:!0},{mac:"Cmd-ArrowDown",run:Mt,shift:Ct},{mac:"Ctrl-ArrowDown",run:He,shift:yt},{key:"PageUp",run:Ue,shift:gt},{key:"PageDown",run:He,shift:yt},{key:"Home",run:Ge,shift:At,preventDefault:!0},{key:"Mod-Home",run:xt,shift:Bt},{key:"End",run:je,shift:vt,preventDefault:!0},{key:"Mod-End",run:Mt,shift:Ct},{key:"Enter",run:nn},{key:"Mod-a",run:Ot},{key:"Backspace",run:Jt,shift:Jt},{key:"Delete",run:Lt},{key:"Mod-Backspace",mac:"Alt-Backspace",run:Ut},{key:"Mod-Delete",mac:"Alt-Delete",run:Ht},{mac:"Mod-Backspace",run:Gt},{mac:"Mod-Delete",run:qt}].concat(un.map((e=>({mac:e.key,run:e.run,shift:e.shift})))),mn=[{key:"Alt-ArrowLeft",mac:"Ctrl-ArrowLeft",run:Te,shift:ft},{key:"Alt-ArrowRight",mac:"Ctrl-ArrowRight",run:Ie,shift:ut},{key:"Alt-ArrowUp",run:Kt},{key:"Shift-Alt-ArrowUp",run:Yt},{key:"Alt-ArrowDown",run:Qt},{key:"Shift-Alt-ArrowDown",run:Zt},{key:"Escape",run:Tt},{key:"Mod-Enter",run:rn},{key:"Alt-l",mac:"Ctrl-l",run:Et},{key:"Mod-i",run:bt,preventDefault:!0},{key:"Mod-[",run:cn},{key:"Mod-]",run:an},{key:"Mod-Alt-\\",run:sn},{key:"Shift-Mod-k",run:en},{key:"Shift-Mod-\\",run:Fe},{key:"Mod-/",run:S},{key:"Alt-A",run:O}].concat(hn),dn={key:"Tab",run:an,shift:cn};export{E as blockComment,b as blockUncomment,Zt as copyLineDown,Yt as copyLineUp,ve as cursorCharBackward,ye as cursorCharForward,pe as cursorCharLeft,ge as cursorCharRight,Mt as cursorDocEnd,xt as cursorDocStart,Se as cursorGroupBackward,De as cursorGroupForward,ke as cursorGroupLeft,we as cursorGroupRight,Ge as cursorLineBoundaryBackward,je as cursorLineBoundaryForward,qe as cursorLineBoundaryLeft,Pe as cursorLineBoundaryRight,Je as cursorLineDown,$e as cursorLineEnd,We as cursorLineStart,Re as cursorLineUp,Fe as cursorMatchingBracket,He as cursorPageDown,Ue as cursorPageUp,Oe as cursorSubwordBackward,Ce as cursorSubwordForward,Te as cursorSyntaxLeft,Ie as cursorSyntaxRight,mn as defaultKeymap,Jt as deleteCharBackward,Lt as deleteCharForward,Ut as deleteGroupBackward,Ht as deleteGroupForward,en as deleteLine,Gt as deleteLineBoundaryBackward,qt as deleteLineBoundaryForward,zt as deleteToLineEnd,jt as deleteToLineStart,Pt as deleteTrailingWhitespace,un as emacsStyleKeymap,j as history,G as historyField,ae as historyKeymap,cn as indentLess,an as indentMore,sn as indentSelection,dn as indentWithTab,rn as insertBlankLine,tn as insertNewline,nn as insertNewlineAndIndent,fn as insertTab,U as invertedEffects,N as isolateHistory,B as lineComment,C as lineUncomment,Qt as moveLineDown,Kt as moveLineUp,W as redo,Q as redoDepth,_ as redoSelection,Ot as selectAll,tt as selectCharBackward,et as selectCharForward,Ye as selectCharLeft,Ze as selectCharRight,Ct as selectDocEnd,Bt as selectDocStart,st as selectGroupBackward,lt as selectGroupForward,rt as selectGroupLeft,ot as selectGroupRight,Et as selectLine,At as selectLineBoundaryBackward,vt as selectLineBoundaryForward,kt as selectLineBoundaryLeft,wt as selectLineBoundaryRight,dt as selectLineDown,St as selectLineEnd,Dt as selectLineStart,mt as selectLineUp,Ke as selectMatchingBracket,yt as selectPageDown,gt as selectPageUp,bt as selectParentSyntax,ct as selectSubwordBackward,at as selectSubwordForward,ft as selectSyntaxLeft,ut as selectSyntaxRight,Tt as simplifySelection,Wt as splitLine,hn as standardKeymap,O as toggleBlockComment,T as toggleBlockCommentByLine,S as toggleComment,M as toggleLineComment,$t as transposeChars,P as undo,K as undoDepth,$ as undoSelection};
//# sourceMappingURL=codemirror_commands-Cda0Zxd7.js.map
