(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),i=c(4),r=c(1);c(10);function l(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}var s=c(2),o=c.n(s),j=c(0),d=function(e){var a=e.total,c=e.perPage,t=e.currentPage,n=e.onPageChange,i=Math.ceil(a/c),r=l(1,i),s=1===t,d=function(e){return t===e},u=t===i;return Object(j.jsxs)("ul",{className:"pagination",children:[Object(j.jsx)("li",{className:o()("page-item",{disabled:s}),children:Object(j.jsx)("a",{onClick:function(){s||n(t-1)},"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":s,children:"\xab"})}),r.map((function(e){return Object(j.jsx)("li",{className:o()("page-item",{active:d(e)}),children:Object(j.jsx)("a",{onClick:function(){d(e)||n(e)},"data-cy":"pageLink",className:"page-link",href:"#".concat(e),children:e})},e)})),Object(j.jsx)("li",{className:o()("page-item",{disabled:u}),children:Object(j.jsx)("a",{onClick:function(){u||n(t+1)},"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===i,children:"\xbb"})})]})},u=l(1,42).map((function(e){return"Item ".concat(e)})),p=function(e){var a=e.pagesPerPage;return Object(j.jsx)("ul",{children:a.map((function(e){return Object(j.jsx)("li",{"data-cy":"item",children:e},e)}))})},b=function(){var e=Object(r.useState)(5),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(r.useState)(1),l=Object(i.a)(n,2),s=l[0],o=l[1],b=c*s-(c-1),h=c*s<=42?c*s:42,g=u.slice(b-1,h);return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Items with Pagination"}),Object(j.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(b," - ").concat(h," of ").concat(42,")")}),Object(j.jsxs)("div",{className:"form-group row",children:[Object(j.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(j.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){t(+e.target.value),o(1)},children:[Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"5",selected:!0,children:"5"}),Object(j.jsx)("option",{value:"10",children:"10"}),Object(j.jsx)("option",{value:"20",children:"20"})]})}),Object(j.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(j.jsx)(d,{total:42,perPage:c,currentPage:s,onPageChange:function(e){o(e)}}),Object(j.jsx)(p,{pagesPerPage:g})]})};n.a.render(Object(j.jsx)(b,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.083e6621.chunk.js.map