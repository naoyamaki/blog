(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{376:function(t,e,r){var a=r(20),n=Date.prototype,s=n.toString,i=n.getTime;"Invalid Date"!=String(new Date(NaN))&&a(n,"toString",(function(){var t=i.call(this);return t==t?s.call(this):"Invalid Date"}))},383:function(t,e,r){"use strict";r.r(e);r(187),r(26),r(376);var a={computed:{posts:function(){return this.$site.pages.filter((function(t){return"post"===t.id})).sort((function(t,e){return new Date(e.frontmatter.date)-new Date(t.frontmatter.date)}))}}},n=r(47),s=Object(n.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"latest-posts"},t._l(t.posts,(function(e){return r("article",{staticClass:"card"},[r("a",{attrs:{href:"/blog"+e.path}},[r("span",[t._v(t._s(e.frontmatter.category))]),t._v(" "),r("figure",[r("img",{attrs:{src:e.frontmatter.img,alt:e.title}})]),t._v(" "),r("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),r("p",[t._v(t._s(e.frontmatter.description))]),t._v(" "),r("time",{attrs:{datetime:e.frontmatter.date.substr(0,10),itemprop:"”datepublished”"}},[t._v(t._s(e.frontmatter.date.substr(0,10)))])])])})),0)}),[],!1,null,"c5d5da64",null);e.default=s.exports}}]);