(this["webpackJsonpword-search-wizard"]=this["webpackJsonpword-search-wizard"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r,c,a=n(1),o=n.n(a),s=n(6),i=n.n(s),u=n(3),f=n.n(u),d=n(4),l=n(2),h=(n(12),[]),j={},b=function(){var e=Object(d.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=function(e){var t=String.fromCharCode(e),n=c.filter((function(e){return e.startsWith(t)}));j[t]=n},n=65;n<=90;n++)t(n);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(e,t){var n=Math.sqrt(e),c=0;return(r=Array.from({length:n},(function(e){return Array.from({length:n},(function(e){return""}))}))).forEach((function(e,n){e.forEach((function(e,a){r[n][a]=t[c],c++}))})),r},p=function(){var e=Object(d.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("dictionary.txt");case 2:return t=e.sent,e.next=5,t.text();case 5:c=(c=(c=e.sent).split("\r\n")).filter((function(e){return e.length>2}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=[];return h.forEach((function(t){var n=t.map((function(e){return e.letter})).join("");!1===e.some((function(e){return e.word==n}))&&e.push({word:n,path:t.map((function(e){return[e.row,e.col]}))})})),e},x=function e(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0,r=t[t.length-1].row,c=t[t.length-1].col,a=0,o=[-1,0,1];a<o.length;a++)for(var s=o[a],i=function(){var a=f[u];if(0===s&&0===a)return"continue";var o=r+s,i=c+a;if(o<0||i<0||o>=4||i>=4)return"continue";if(t.some((function(e){return e.row==o&&e.col==i})))return"continue";var d=JSON.parse(JSON.stringify(t)),l=d.map((function(e){return e.letter})).join("").toUpperCase(),b=l+n[o][i].toUpperCase(),O=b.charAt(0),p=j[O].find((function(e){return e.startsWith(b)}));if(!p)return"continue";d.push({letter:n[o][i],row:o,col:i}),l+n[o][i].toUpperCase().trim()==p.trim()&&h.push(d),e(d,n)},u=0,f=[-1,0,1];u<f.length;u++)i()},m=function(){var e=Object(d.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:b();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=n(0);var g=function(e){return Object(w.jsx)("section",{className:"app-wrap ".concat(e.loader&&"click-off"),children:e.children})};var S=function(e){var t=e.genReady,n=e.genStart;return Object(a.useEffect)((function(){console.log(t)}),[t]),Object(w.jsxs)("div",{className:"app-info",children:[Object(w.jsxs)("h1",{className:"proj-title",children:["Word Search ",Object(w.jsx)("span",{children:"Wizard"})]}),Object(w.jsx)("p",{className:"proj-desc",children:"Type in a random set of letters and watch the word search do the rest."}),Object(w.jsx)("button",{className:"proj-btn",disabled:!t,onClick:n,children:"Generate"})]})};var y=function(e){var t=e.index,n=e.activeIndex,r=e.moveHandler,c=e.cords,o=e.hoveredPath,s=Object(a.useRef)(),i=Object(a.useState)(""),u=Object(l.a)(i,2),f=u[0],d=u[1],h=Object(a.useState)(!1),j=Object(l.a)(h,2),b=j[0],O=j[1];Object(a.useEffect)((function(){}),[b]),Object(a.useEffect)((function(){t===n&&s.current.focus(),console.log("CORDS",c,"HOVERED PATH",o,"MATCHED?",b),o.length>0&&o.some((function(e){return e.toString()==c}))?O(!0):O(!1)}),[n,o,c]);var p=b?function(){var e=o.findIndex((function(e){return e.toString()==c}));if(-1!==e){var t=c.split(","),n=parseInt(t[0]),r=parseInt(t[1]);if(void 0==o[e+1])return"";var a=o[e+1][0],s=o[e+1][1];if(console.log("cord array",n,r,"path",o,"next rows and cols",a,s),a==n&&s==r+1)return"dirshow-e";if(a==n+1&&s==r)return"dirshow-s";if(a==n+1&&s==r+1)return"dirshow-se";if(a==n-1&&s==r+1)return"dirshow-ne";if(a==n&&s==r-1)return"dirshow-w";if(a==n-1&&s==r)return"dirshow-n";if(a==n-1&&s==r-1)return"dirshow-nw";if(a==n+1&&s==r-1)return"dirshow-sw"}}():"";return Object(w.jsxs)("div",{className:"input-box-".concat(t),children:[Object(w.jsx)("div",{className:"dir ".concat(p)}),Object(w.jsx)("input",{name:"field-".concat(t),ref:s,value:f,type:"text",onKeyDown:function(e){e.key.match(/^[A-Za-z]+$/)&&1===e.key.length&&d(e.key.toUpperCase()),"Backspace"===e.key&&(r("prev",t),d(""))},onChange:function(e){e.target.value.match(/^[A-Za-z]+$/)&&r("next",t,f)},onClick:function(){return r("change",t)}})]})};var k=function(e){return Object(w.jsx)("div",{className:"src-wizard-hero",children:e.children})};var E=function(e){var t=e.word,n=e.path,r=e.passUpPathHovered,c=e.passUpPathRemoved;return Object(w.jsx)("div",{className:"word-res",onMouseOut:c,onMouseOver:function(){r(n)},children:Object(w.jsx)("h6",{children:t})})},N=["0,0","0,1","0,2","0,3","1,0","1,1","1,2","1,3","2,0","2,1","2,2","2,3","3,0","3,1","3,2","3,3"];var R=function(e){var t=e.srcSize,n=e.readySetter,r=e.wordRes,c=Object(a.useState)(0),o=Object(l.a)(c,2),s=o[0],i=o[1],u=Object(a.useState)(Array(t).fill("")),f=Object(l.a)(u,2),d=f[0],h=f[1],j=Object(a.useState)([]),b=Object(l.a)(j,2),O=b[0],p=b[1],v=Object(a.useState)(),x=Object(l.a)(v,2),m=x[0],g=x[1];Object(a.useEffect)((function(){console.log("WORDRES CHANGE",r),r&&g(r.length)}),[r]),Object(a.useEffect)((function(){n(d.every((function(e){return""!==e})),d)}),[d]);var S=function(e,t){h((function(n){var r=Array.from(n);return r.splice(e,1,t),r}))},R=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";switch(console.log(s),e){case"prev":if(0===s)return;S(n,r),i((function(e){return e-1}));break;case"next":if(S(n,r),s===t+1)return;i((function(e){return e+1}));break;case"change":i(n)}},A=function(e){p(e)},C=function(){p([])},P="";return m>0&&(P=Object(w.jsxs)("h3",{className:"word-count",children:["This many words found: ",Object(w.jsx)("span",{className:"count",children:m})]})),0===m&&(P=Object(w.jsx)("h3",{className:"word-count",children:"No words found!"})),Object(w.jsxs)(k,{children:[P,Object(w.jsx)("div",{className:"search-box",children:d.length&&d.map((function(e,t){return Object(w.jsx)(y,{index:t,cords:N[t],activeIndex:s,hoveredPath:O,moveHandler:R},t)}))}),Object(w.jsx)("div",{className:"search-results",children:r&&r.length>0&&r.map((function(e){return Object(w.jsx)(E,{word:e.word,path:e.path,passUpPathRemoved:C,passUpPathHovered:A},e.word)}))})]})};var A=function(e){var t=e.srcSize,n=Object(a.useState)(""),r=Object(l.a)(n,2),c=r[0],o=r[1],s=Object(a.useState)(0),i=Object(l.a)(s,2),u=i[0],h=i[1];Object(a.useEffect)((function(){document.addEventListener("loadPush",j,!1)}),[]),Object(a.useEffect)((function(){console.log(u,"LOADING PROG")}),[u]),Object(a.useEffect)((function(){b(c.length)}),[c]);var j=function(){var e=Object(d.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("PROG LOADER CALLED"),h((function(e){return e+100/t})),e.next=4,new Promise((function(e){return setTimeout(e,350)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(e){setTimeout((function(){switch(e){case 0:o(".");break;case 1:o("..");break;case 2:o("...");break;default:o("")}}),500)};return Object(w.jsxs)("div",{className:"loader-sec",children:[Object(w.jsx)("h2",{children:"Loading..."}),Object(w.jsxs)("div",{className:"loader-bar",children:[Object(w.jsx)("div",{className:"loader-thumb",style:{width:"".concat(u,"%")}}),Object(w.jsxs)("h3",{className:"loader-num",children:[u,"%"]})]})]})};var C=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(16),o=Object(l.a)(c,2),s=o[0],i=(o[1],Object(a.useState)()),u=Object(l.a)(i,2),j=u[0],b=u[1],p=Object(a.useState)(),y=Object(l.a)(p,2),k=y[0],E=y[1],N=Object(a.useState)(!1),C=Object(l.a)(N,2),P=C[0],z=C[1],D=Object(a.useState)(0),H=Object(l.a)(D,2),I=H[0],T=H[1];Object(a.useEffect)((function(){m()}),[]);var U=function(){var e=Object(d.a)(f.a.mark((function e(){var t,n,r,c,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(s,j);case 2:t=e.sent,z(!0),[],h=[],console.log(h,"WIZARD ARRAY RESET"),n=0;case 6:if(!(n<t.length)){e.next=20;break}r=0;case 8:if(!(r<t[0].length)){e.next=17;break}return c=[{letter:t[n][r],row:n,col:r}],x(c,t),T((function(e){return e+100/s})),e.next=14,new Promise((function(e){return setTimeout(e,350)}));case 14:r++,e.next=8;break;case 17:n++,e.next=6;break;case 20:a=v(),E(a),z(!1),T(0);case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsxs)(g,{loader:P,children:[P&&Object(w.jsx)(A,{srcSize:s,loadingProg:I}),Object(w.jsx)(S,{genReady:n,genStart:U}),Object(w.jsx)(R,{srcSize:s,readySetter:function(e,t){e?(r(!0),b(t)):r(!1)},wordRes:k})]})};i.a.render(Object(w.jsx)(o.a.StrictMode,{children:Object(w.jsx)(C,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.251f0adb.chunk.js.map