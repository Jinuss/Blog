(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{380:function(s,t,a){s.exports=a.p+"assets/img/css3d.134980ee.gif"},381:function(s,t,a){s.exports=a.p+"assets/img/css3d.29624624.png"},508:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),t("p",[s._v("本文主要讲述如何通过 CSS 简单的设置就可以实现图片的 3D 立体效果。")]),s._v(" "),t("h3",{attrs:{id:"_3d-立体效果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3d-立体效果"}},[s._v("#")]),s._v(" 3D 立体效果")]),s._v(" "),t("p",[s._v("当鼠标移入某一个图片上时，其余图片会像该图片倾斜。")]),s._v(" "),t("img",{attrs:{src:a(380)}}),s._v(" "),t("h3",{attrs:{id:"具体实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具体实现"}},[s._v("#")]),s._v(" 具体实现")]),s._v(" "),t("p",[s._v("静图如下：")]),s._v(" "),t("img",{attrs:{src:a(381)}}),s._v(" "),t("ul",[t("li",[t("strong",[s._v("倒影效果")])])]),s._v(" "),t("p",[s._v("图片会有一个倒影效果，其代码如下：")]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token style"}},[t("span",{pre:!0,attrs:{class:"token language-css"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("img")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("-webkit-box-reflect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" below 1px "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("linear-gradient")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("transparent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" #0009"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[t("code",[s._v("-webkit-box-reflect")]),s._v("属性会有兼容性问题，该属性的作用就是将元素内容在特定方向上进行轴对称反射。")]),s._v(" "),t("p",[s._v("其语法如下：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 方向值 */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("webkit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("box"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("reflect"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" above "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" below "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" left "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 偏移量值 */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("webkit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("box"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("reflect"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" below 10px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 蒙版值 */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("webkit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("box"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("reflect"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" below "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" linear"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("gradient")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("transparent"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" white"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 全局属性值 */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("webkit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("box"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("reflect"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" inherit "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" initial "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" unset"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("webkit"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("box"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("reflect"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("值"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("image"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("ul",[t("li",[t("strong",[t("code",[s._v("hover")]),s._v("旋转效果")]),s._v("\n鼠标移入放大，其余元素旋转效果主要是用到了 CSS3 的 "),t("code",[s._v("preserve-3d")]),s._v("，核心实现如下：")])]),s._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("style")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),t("span",{pre:!0,attrs:{class:"token style"}},[t("span",{pre:!0,attrs:{class:"token language-css"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform-style")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" preserve-3d"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/**开启3D空间 */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("img:hover")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("perspective")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("500px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rotateY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("translateX")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-30px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scale")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("1.5"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*景深 500px 沿X轴负半轴平移30px 放大1.5倍*/")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".container:hover img:not(:hover)")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 0 -40px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("filter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("drop-shadow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0 0 25px #000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("drop-shadow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0 0 45px #000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*阴影效果*/")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("perspective")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("500px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rotateY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("45deg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scale")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0.95"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*景深 500px 沿Y轴逆时针旋转45° 缩小0.95倍*/")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item:hover ~ .item img")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("transform")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("perspective")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("500px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rotateY")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-45deg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scale")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("0.95"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*景深 500px 沿Y轴顺时针旋转45° 缩小0.95倍*/")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("style")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("h4",{attrs:{id:"相关语法介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关语法介绍"}},[s._v("#")]),s._v(" 相关语法介绍")]),s._v(" "),t("ul",[t("li",[t("strong",[t("code",[s._v("drop-shadow()")])]),s._v("：是一个用于创建阴影效果的函数，可以应用到元素上，给元素添加一种阴影的视觉效果。例子中使用了两种不同的阴影效果")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("drop"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("shadow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 25px #"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" drop"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("shadow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 45px #"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("上面这段代码表示元素的阴影在"),t("strong",[s._v("X 轴")]),s._v("（水平方向）和"),t("strong",[s._v("Y 轴")]),s._v("（垂直方向）上的偏移量都是 0，阴影始终保持在元素的正下方；"),t("code",[s._v("25px")]),s._v("表示阴影的模糊半径，这个模糊半径决定了阴影的模糊程度，值越大，阴影越模糊，扩散的范围越广泛。"),t("code",[s._v("#000")]),s._v("表示阴影的颜色。")]),s._v(" "),t("ul",[t("li",[t("strong",[t("code",[s._v("transform-style")])]),s._v(":"),t("code",[s._v("transform-style")]),s._v("属性默认是 2D，当它使用 "),t("code",[s._v("preserve-3d")]),s._v(" 时，子元素会按 3D 空间中的位置进行变换，能够让元素在 3D 空间中立体呈现，而不仅仅是二维扭曲。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);