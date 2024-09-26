(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{331:function(t,a,s){t.exports=s.p+"assets/img/oplayers面.b1e038ce.png"},332:function(t,a,s){t.exports=s.p+"assets/img/imageData.10f5fdc5.jpeg"},419:function(t,a,s){"use strict";s.r(a);var n=s(4),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),a("p",[t._v("我们知道"),a("code",[t._v("openlayers")]),t._v("通常设置"),a("code",[t._v("feature")]),t._v("要素的方式主要是通过"),a("code",[t._v("ol.style.stroke")]),t._v("描边和"),a("code",[t._v("ol.style.fill")]),t._v("填充,这对比较简单的样式设置十分有效。如果要设置"),a("code",[t._v("feature")]),t._v("的图标，还可以通过"),a("code",[t._v("ol.style.Icon")]),t._v("加载外部图片资源，但是如果要设置面的填充，就需要稍微复杂的设置。")]),t._v(" "),a("h4",{attrs:{id:"效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#效果"}},[t._v("#")]),t._v(" 效果")]),t._v(" "),a("img",{attrs:{src:s(331)}}),t._v(" "),a("h3",{attrs:{id:"解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[t._v("#")]),t._v(" 解决方案")]),t._v(" "),a("h4",{attrs:{id:"colorlike"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#colorlike"}},[t._v("#")]),t._v(" "),a("code",[t._v("colorlike")])]),t._v(" "),a("p",[a("code",[t._v("openlayers")]),t._v("中定义了"),a("code",[t._v("colorlike")]),t._v("类型, 通过"),a("code",[t._v("ol.colorlike")]),t._v("可以加载图片资源，返回的是一个"),a("code",[t._v("CanvasPattern")]),t._v(",而"),a("code",[t._v("ol.style.fill")]),t._v("的"),a("code",[t._v("color")]),t._v("属性可以接收这个值，从而实现图片的填充。\n"),a("code",[t._v("colorlike")]),t._v("提供一个方法"),a("code",[t._v("asColorLike")]),t._v("，参数可以是一个图片，返回一个 "),a("code",[t._v("color")]),t._v(",其类型为"),a("code",[t._v("Color")]),t._v("|"),a("code",[t._v("ColorLike")]),t._v("|"),a("code",[t._v("Patttern")])]),t._v(" "),a("h4",{attrs:{id:"canvaspattern"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canvaspattern"}},[t._v("#")]),t._v(" "),a("code",[t._v("CanvasPattern")])]),t._v(" "),a("p",[t._v("但是在开发中，用到比较多的是"),a("code",[t._v("CanvasPattern")]),t._v(",它是"),a("code",[t._v("canvas")]),t._v("中的类型，在 MDN 中的描述如下")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("CanvasPattern")]),t._v("接口表示一个不透明对象，描述了一个基于图像、画布或视频的模板，该模板通过"),a("code",[t._v("CanvasRenderContext2D.createPattern")]),t._v("方法创建。\n它们可用作"),a("code",[t._v("fillStyle")]),t._v("或"),a("code",[t._v("strokeStyle")])])]),t._v(" "),a("p",[a("code",[t._v("CanvasRenderContext2D")]),t._v("就是通过"),a("code",[t._v('canvas.getContext("2d")')]),t._v("获取的"),a("code",[t._v("canvas")]),t._v(" 2d 的上下文环境")]),t._v(" "),a("p",[t._v("但是如果我们需要动态改变填充图片的透明度，单纯依靠"),a("code",[t._v("CanvasPattern")]),t._v("是无法实现，因为如上的定义中已经提及它是表示一个不透明对象，如果外部资源图片是一个透明图片呢，那样也只能保证初始是透明，而无法动态修改。这时就需要用到"),a("code",[t._v("canvas")]),t._v("中的 API 了。")]),t._v(" "),a("h4",{attrs:{id:"canvas的魔力"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canvas的魔力"}},[t._v("#")]),t._v(" "),a("code",[t._v("canvas")]),t._v("的魔力")]),t._v(" "),a("p",[t._v("先看看如下示例")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getImagePattern")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("imgUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opacity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" img "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imgUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cnv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"canvas"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ctx "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cnv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      cnv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      cnv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" imageData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getImageData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cnv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cnv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" imageData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" opacity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putImageData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("imageData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pattern "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPattern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cnv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"repeat"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pattern"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onerror")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br")])]),a("p",[t._v("示例中定义一个获取图片"),a("code",[t._v("Pattern")]),t._v("的方法，返回的是一个"),a("code",[t._v("Promise")]),t._v("对象，接收两个参数")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("img")]),t._v(":资源图片")]),t._v(" "),a("li",[a("code",[t._v("opacity")]),t._v(":透明度 （0~1）")])]),t._v(" "),a("p",[t._v("在图片加载成功后，创建一个"),a("code",[t._v("canvas")]),t._v("画布，调用"),a("code",[t._v("drawImage")]),t._v("方法将图片渲染到画布上，再通过"),a("code",[t._v("getImageData")]),t._v("方法拿到图片数据，改变每个像素的透明度，再次渲染到画布上，最后调用"),a("code",[t._v("createPattern")]),t._v("方法创建"),a("code",[t._v("pattern")])]),t._v(" "),a("h5",{attrs:{id:"getimagedata方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getimagedata方法"}},[t._v("#")]),t._v(" "),a("code",[t._v("getImageData")]),t._v("方法")]),t._v(" "),a("p",[a("code",[t._v("getImageData")]),t._v("方法可以实现对图像的像素操作，其语法："),a("code",[t._v("ctx.getImageData(x,y,w,h)")])]),t._v(" "),a("p",[a("strong",[t._v("参数")])]),t._v(" "),a("p",[a("code",[t._v("x")]),t._v(":被提取图像矩形区域的左上角 x 坐标\n"),a("code",[t._v("y")]),t._v(":被提取图像矩形区域的左上角 x 坐标\n"),a("code",[t._v("w")]),t._v(":被提取图像矩形区域的宽度\n"),a("code",[t._v("h")]),t._v(":被提取图像矩形区域的高度")]),t._v(" "),a("p",[t._v("补充一点："),a("code",[t._v("canvas")]),t._v("画布的原点坐标:（0，0）位于画布的左上角")]),t._v(" "),a("p",[a("strong",[t._v("返回值")])]),t._v(" "),a("p",[a("code",[t._v("getImageData")]),t._v("会返回一个"),a("code",[t._v("ImageData")]),t._v("对象，它包含"),a("code",[t._v("canvas")]),t._v("给定的也是被提取图像的矩形区域的数据。该对象的"),a("code",[t._v("height")]),t._v("和"),a("code",[t._v("width")]),t._v("分别对应参数"),a("code",[t._v("h")]),t._v("和"),a("code",[t._v("w")]),t._v(",而示例中用到的"),a("code",[t._v("imageData.data")]),t._v("则是一个一维数组，包含以"),a("code",[t._v("RGBA")]),t._v("顺序的数据，大小为 0 —— 255 的整数表示\n"),a("img",{attrs:{src:s(332)}})]),t._v(" "),a("p",[t._v("示例中的 for 循环就是处理"),a("code",[t._v("RGBA")]),t._v("中"),a("code",[t._v("A")]),t._v("即"),a("code",[t._v("alpha")]),t._v(":透明度")]),t._v(" "),a("p",[a("strong",[t._v("所以这会引发一个新的问题，如果图片很大，这种遍历的操作会带来性能的问题")])]),t._v(" "),a("h5",{attrs:{id:"putimagedata方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#putimagedata方法"}},[t._v("#")]),t._v(" "),a("code",[t._v("putImageData")]),t._v("方法")]),t._v(" "),a("p",[a("code",[t._v("putImageData")]),t._v("顾名思义就是将"),a("code",[t._v("ImageData")]),t._v("对象绘制到画布中，示例中只写了必传的参数，其语法为")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putImageData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("imageData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("putImageData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("imageData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dirtyX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dirtyY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dirtyWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dirtyHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("参数")])]),t._v(" "),a("p",[a("code",[t._v("imageData")]),t._v("：上面提到的"),a("code",[t._v("ImageData")]),t._v("对象\n"),a("code",[t._v("dx")]),t._v("和"),a("code",[t._v("dy")]),t._v("就是要绘制到"),a("code",[t._v("canvas")]),t._v("的起始位置\n"),a("code",[t._v("dirtyX")]),t._v("和"),a("code",[t._v("dirtyY")]),t._v("对应"),a("code",[t._v("ImageData")]),t._v("中的左上角的坐标，默认均为 0\n"),a("code",[t._v("dirtyWidth")]),t._v(":要绘制的矩形的宽度，默认为"),a("code",[t._v("imageData")]),t._v("的宽度\n"),a("code",[t._v("dirtyHeight")]),t._v(":要绘制的矩形的宽度，默认为"),a("code",[t._v("imageData")]),t._v("的高度")]),t._v(" "),a("h4",{attrs:{id:"调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用"}},[t._v("#")]),t._v(" 调用")]),t._v(" "),a("p",[t._v("调用"),a("code",[t._v("getImagePattern")]),t._v("方法时，动态改变参数"),a("code",[t._v("opacity")]),t._v("获取到"),a("code",[t._v("pattern")]),t._v("赋值就可以实现"),a("code",[t._v("openlayers")]),t._v("的"),a("code",[t._v("fetaure")]),t._v("填充图像的透明度改变")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pattern "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getImagePattern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opacity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nnewStyle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("stroke")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stroke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" width"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" pattern"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfetaure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setStyle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newStyle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);