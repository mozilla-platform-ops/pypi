(this.webpackJsonppypi=this.webpackJsonppypi||[]).push([[0],{11:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var c=e(0),r=e.n(c),i=e(3),o=e.n(i),u=(e(11),e(5)),s=e(6),a=e(1);var p=function(){var t=Object(c.useState)([]),n=Object(u.a)(t,2),e=n[0],r=n[1];return Object(c.useEffect)((function(){fetch("https://raw.githubusercontent.com/mozilla-platform-ops/pypi/main/packageUrls.json").then((function(t){return t.json()})).then((function(t){return r(t)})).catch((function(t){return console.error(t)}))}),[]),Object(a.jsx)(s.a,{children:Object(a.jsx)("ul",{children:e.map((function(t){return Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:t,children:t.split("/").pop()})},t)}))})})},h=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,15)).then((function(n){var e=n.getCLS,c=n.getFID,r=n.getFCP,i=n.getLCP,o=n.getTTFB;e(t),c(t),r(t),i(t),o(t)}))};e(13);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),h()}},[[14,1,2]]]);
//# sourceMappingURL=main.1626e16a.chunk.js.map