(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{355:function(t,s,a){t.exports=a.p+"assets/img/openlayers_map_style.12401405.gif"},485:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("在二维地图系统中,有时候地图会配置多个样式或者主题,支持样式定制,最快捷的方式是不同主题用不同图层去表示渲染,切换地图主题就是切换图层源的引用,但是作为也可以在不切换图层源的前提下,去通过改变地图的不同样式来实现地图主题的切换.")]),t._v(" "),s("h3",{attrs:{id:"具体实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#具体实现"}},[t._v("#")]),t._v(" 具体实现")]),t._v(" "),s("p",[s("strong",[t._v("效果如下")])]),t._v(" "),s("img",{attrs:{src:a(355)}}),t._v(" "),s("p",[t._v("上述例子中演示了通过按钮切换明亮和暗黑风格的切换.其核心实现如下:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//暗色地图底图")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("tileLoadFunction")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("imageTile")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Tile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" img "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"crossOrigin"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"anonymous"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" canvas "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"canvas"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" w "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" h "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2d"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"grayscale(98%) invert(100%) sepia(20%) hue-rotate(180deg) saturate(1600%) brightness(80%) contrast(90%)"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("drawImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      imageTile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" canvas"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toDataURL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"image/png"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  img"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" src"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])]),s("p",[t._v("封装一个"),s("code",[t._v("tileLoadFunction")]),t._v("函数,然后在切换图层源时去指定"),s("code",[t._v("source")]),t._v("的"),s("code",[t._v("setTileLoadFunction")]),t._v("方法,如下:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTileLoadFunction")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tileLoadFunction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setSource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("h4",{attrs:{id:"tileloadfunction-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tileloadfunction-函数"}},[t._v("#")]),t._v(" "),s("code",[t._v("tileLoadFunction")]),t._v(" 函数")]),t._v(" "),s("p",[s("code",[t._v("tileLoadFunction")]),t._v("是一个函数类型的回调,用于自定义瓦片图层("),s("code",[t._v("Tile")]),t._v("类型图层)加载瓦片的过程,通过该回调函数,可以控制每个瓦片图像的加载方式,包括修改瓦片的"),s("code",[t._v("URL")]),t._v("、添加自定义请求头、处理缓存或者更复杂的加载逻辑.")]),t._v(" "),s("p",[s("code",[t._v("tileLoadFunction")]),t._v("函数接受两个参数:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("imageTile")]),t._v(":当前瓦片对象, 类型是"),s("code",[t._v("ol.ImageTile")]),t._v(",可以通过该对象访问到当前瓦片的图像和其它瓦片相关的信息")]),t._v(" "),s("li",[s("code",[t._v("src")]),t._v(":瓦片的"),s("code",[t._v("URL")]),t._v(",表示瓦片应该从哪里加载")])]),t._v(" "),s("p",[t._v("上述封装的"),s("code",[t._v("tileLoadFunction")]),t._v("函数本质上就是先创建一个"),s("code",[t._v("img")]),t._v("图像实例,然后将瓦片的"),s("code",[t._v("src")]),t._v("赋值给"),s("code",[t._v("img")]),t._v(",然后利用"),s("code",[t._v("canvas")]),t._v("的"),s("code",[t._v("filter")]),t._v("属性改变图像的样式,重新绘制,最后将"),s("code",[t._v("canvas")]),t._v("中的内容赋值给当前瓦片对象.")]),t._v(" "),s("h4",{attrs:{id:"tileurlfunction-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tileurlfunction-函数"}},[t._v("#")]),t._v(" "),s("code",[t._v("tileUrlFunction")]),t._v(" 函数")]),t._v(" "),s("p",[s("code",[t._v("tileLoadFunction")]),t._v("函数和"),s("code",[t._v("tileUrlFunction")]),t._v("函数很像,在"),s("a",{attrs:{href:""}},[t._v("Openlayers 水印")]),t._v("一文中有提过.")]),t._v(" "),s("p",[s("code",[t._v("tileUrlFunction")]),t._v(" 主要用于定义如何根据瓦片的 "),s("code",[t._v("z")]),t._v(", "),s("code",[t._v("x")]),t._v(", "),s("code",[t._v("y")]),t._v(" 坐标来构造瓦片的 "),s("code",[t._v("URL")]),t._v("。这是一个函数，用来动态生成瓦片的 "),s("code",[t._v("URL")]),t._v(" 模板，通常用于设置瓦片图层的数据源（"),s("code",[t._v("Tile")]),t._v(" 类型的图层）.")]),t._v(" "),s("h4",{attrs:{id:"tileloadfunction和tileurlfunction函数的区别和联系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tileloadfunction和tileurlfunction函数的区别和联系"}},[t._v("#")]),t._v(" "),s("code",[t._v("tileLoadFunction")]),t._v("和"),s("code",[t._v("tileUrlFunction")]),t._v("函数的区别和联系")]),t._v(" "),s("p",[s("strong",[t._v("区别")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("特性")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[s("code",[t._v("tileUrlFunction")])]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[s("code",[t._v("tileLoadFunction")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("作用")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用于动态生成瓦片的"),s("code",[t._v("URL")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("用于处理每个瓦片的加载过程")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("参数")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("tileCoord")]),t._v(":(z,x,y)、"),s("code",[t._v("pixelRatio")]),t._v("、"),s("code",[t._v("projection")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("imageTile")]),t._v(":瓦片对象、"),s("code",[t._v("src")]),t._v(":瓦片 URL")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("主要用途")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("根据瓦片坐标动态生成瓦片的"),s("code",[t._v("URL")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("控制瓦片的加载过程(如修改请求、错误处理等)")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("strong",[t._v("控制点")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("生成"),s("code",[t._v("URL")]),t._v("的模板或路径")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("瓦片图像的加载过程,处理加载成功\\失败\\缓存等")])])])]),t._v(" "),s("p",[s("strong",[t._v("联系")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("工作流的不同阶段")]),t._v("："),s("code",[t._v("tileUrlFunction")]),t._v(" 主要在瓦片的 "),s("code",[t._v("URL")]),t._v(" 生成阶段起作用，它帮助你决定从哪里加载瓦片，而 "),s("code",[t._v("tileLoadFunction")]),t._v(" 则是在瓦片加载的后续阶段起作用，它帮助你在加载过程中处理细节。")]),t._v(" "),s("li",[s("strong",[t._v("相互配合")]),t._v("："),s("code",[t._v("tileUrlFunction")]),t._v(" 用于生成瓦片的 "),s("code",[t._v("URL")]),t._v("，一旦 "),s("code",[t._v("URL")]),t._v(" 生成后，"),s("code",[t._v("tileLoadFunction")]),t._v(" 就会负责实际的瓦片加载。两者通常一起使用来实现更灵活的瓦片加载和处理。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);