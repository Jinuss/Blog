(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{368:function(s,t,a){s.exports=a.p+"assets/img/mapbox01.40d7b981.png"},499:function(s,t,a){"use strict";a.r(t);var e=a(4),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("h3",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),t("p",[s._v("在工作中，二维地图的图层源是后端提供，前端只需要采用 "),t("code",[s._v("Mapbox GL")]),s._v(" 进行地图数据的渲染。有个业务是需要在地图上显示图幅号业务数据，而该图幅是通过"),t("code",[s._v("addSource")]),s._v("等方式添加进行渲染。在内网（不与互联网互通）环境中，无法正确显示图幅号。在局域网环境进行 "),t("code",[s._v("Mapbox GL")]),s._v(" 渲染地图需要手动添加字体。")]),s._v(" "),t("h3",{attrs:{id:"解决步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决步骤"}},[s._v("#")]),s._v(" 解决步骤")]),s._v(" "),t("ul",[t("li",[s._v("在互联网环境，打开控制台，发现字体是如下加载：")])]),s._v(" "),t("img",{attrs:{src:a(368)}}),s._v(" "),t("ul",[t("li",[t("p",[s._v("复制上述链接，下载该字体文件，在项目中根目录"),t("code",[s._v("public")]),s._v("下新建名为"),t("code",[s._v("Open Sans Regular,Arial Unicode MS Regular")]),s._v("的文件夹，将字体文件放入其中")])]),s._v(" "),t("li",[t("p",[s._v("编辑"),t("code",[s._v("Mapbox GL")]),s._v("的"),t("code",[s._v("style")]),s._v("文件,如："),t("code",[s._v('glyphs: "./fonts/{fontstack}/{range}.pbf",')]),s._v("，解决问题。")])])]),s._v(" "),t("h3",{attrs:{id:"收获"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#收获"}},[s._v("#")]),s._v(" 收获")]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v("Mapbox GL")]),s._v(" 中，"),t("code",[s._v("glyphs")]),s._v(" 是用于定义地图上文本标签（如地名、道路标签等）所使用的字体符号的资源。"),t("code",[s._v("Mapbox GL")]),s._v(" 使用矢量切片（"),t("code",[s._v("vector tiles")]),s._v("）来渲染地图，而文本标签的渲染依赖于字体符号（"),t("code",[s._v("glyphs")]),s._v("）")]),s._v(" "),t("h2",{attrs:{id:"glyphs的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#glyphs的概念"}},[s._v("#")]),s._v(" "),t("code",[s._v("glyphs")]),s._v("的概念")]),s._v(" "),t("p",[t("code",[s._v("glyphs")]),s._v("就是字体符号，它的概念如下：")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("glyphs")]),s._v("是字体中每个字符的图形表示。例如，字母 "),t("code",[s._v('"A"')]),s._v(" 在字体文件中有一个对应的 "),t("code",[s._v("glyph")]),s._v("，表示它的形状。")])]),s._v(" "),t("li",[t("p",[s._v("在 "),t("code",[s._v("Mapbox GL")]),s._v(" 中，字体符号以 "),t("code",[s._v("PBF（Protocol Buffer Binary Format")]),s._v(" 格式存储，这种格式是经过压缩的二进制格式，适合网络传输和高效渲染。")])])]),s._v(" "),t("h3",{attrs:{id:"glyphs-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#glyphs-url"}},[s._v("#")]),s._v(" "),t("code",[s._v("glyphs url")])]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("Mapbox GL")]),s._v("的样式中，"),t("code",[s._v("glyphs")]),s._v("字段指定了字体符号的"),t("code",[s._v("URL")]),s._v("模板，如："),t("code",[s._v('"glyphs": "https://fonts.openmaptiles.org/{fontstack}/{range}.pbf"')])]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("{fontstack}")]),s._v(" 是字体堆栈的名称，通常是一个字体族（如 "),t("code",[s._v("Open Sans Bold")]),s._v("）。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("{range}")]),s._v(" 是字符的 "),t("code",[s._v("Unicode")]),s._v(" 范围，通常以十六进制表示（如 "),t("code",[s._v("0-255")]),s._v(" 表示前 "),t("code",[s._v("256")]),s._v(" 个字符）。")])])]),s._v(" "),t("h3",{attrs:{id:"font-stack字体堆栈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#font-stack字体堆栈"}},[s._v("#")]),s._v(" "),t("code",[s._v("font stack")]),s._v("字体堆栈")]),s._v(" "),t("p",[s._v("字体堆栈是指一组字体名称，"),t("code",[s._v("Mapbox GL")]),s._v(" 会按照顺序尝试加载这些字体。如果第一个字体中没有某个字符的 "),t("code",[s._v("glyph")]),s._v("，它会尝试下一个字体。\n如"),t("code",[s._v('"text-font": ["Open Sans Bold", "Arial Unicode MS Bold"]')]),s._v("：表示优先使用 "),t("code",[s._v("Open Sans Bold")]),s._v("，如果某个字符在该字体中不存在，则使用 "),t("code",[s._v("Arial Unicode MS Bold")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"glyphs的加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#glyphs的加载"}},[s._v("#")]),s._v(" "),t("code",[s._v("glyphs")]),s._v("的加载")]),s._v(" "),t("p",[s._v("当 "),t("code",[s._v("Mapbox GL")]),s._v(" 需要渲染文本标签时，它会根据 "),t("code",[s._v("glyphs URL")]),s._v(" 模板和字体堆栈，动态加载所需的字体符号。")]),s._v(" "),t("p",[s._v("例如，如果地图上有一个标签是 "),t("code",[s._v('"Mapbox"')]),s._v("，"),t("code",[s._v("Mapbox GL")]),s._v(" 会加载包含这些字符的 "),t("code",[s._v("glyphs")]),s._v(" 文件（如 "),t("code",[s._v("0-255.pbf")]),s._v("），并从中提取所需的字符形状。")]),s._v(" "),t("h3",{attrs:{id:"glyphs的渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#glyphs的渲染"}},[s._v("#")]),s._v(" "),t("code",[s._v("glyphs")]),s._v("的渲染")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("加载的 "),t("code",[s._v("glyphs")]),s._v(" 会被转换为纹理（"),t("code",[s._v("texture")]),s._v("），并上传到 GPU 进行渲染。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("Mapbox GL")]),s._v(" 使用这些纹理来绘制地图上的文本标签。由于 "),t("code",[s._v("glyphs")]),s._v(" 是矢量数据，它们可以无损缩放，适应不同的地图缩放级别。")])])]),s._v(" "),t("h3",{attrs:{id:"自定义字体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义字体"}},[s._v("#")]),s._v(" 自定义字体")]),s._v(" "),t("p",[s._v("工具如 "),t("a",{attrs:{href:"https://github.com/mapbox/fontnik",target:"_blank",rel:"noopener noreferrer"}},[s._v("fontnik"),t("OutboundLink")],1),s._v(" 可以将常见的字体文件（如 "),t("code",[s._v(".ttf")]),s._v(" 或 "),t("code",[s._v(".otf")]),s._v("）转换为 "),t("code",[s._v("PBF")]),s._v(" 格式。")]),s._v(" "),t("h3",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),t("p",[s._v("以下是一个 "),t("code",[s._v("Mapbox GL")]),s._v(" 样式中 "),t("code",[s._v("glyphs")]),s._v(" 配置的示例")]),s._v(" "),t("div",{staticClass:"language-json line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"glyphs"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://fonts.openmaptiles.org/{fontstack}/{range}.pbf"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"layers"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"road-label"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"type"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"symbol"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"source"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"composite"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"source-layer"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"road"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"layout"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"text-field"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{name}"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"text-font"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Open Sans Bold"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Arial Unicode MS Bold"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("在这个例子中，"),t("code",[s._v("glyphs URL")]),s._v(" 指定了字体符号的存储位置。"),t("code",[s._v("text-font")]),s._v(" 指定了字体堆栈，"),t("code",[s._v("Mapbox GL")]),s._v(" 会从这些字体中加载所需的 "),t("code",[s._v("glyphs")]),s._v("。")]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[t("code",[s._v("Mapbox GL")]),s._v(" 中的 "),t("code",[s._v("glyphs")]),s._v(" 是实现文本标签渲染的核心机制。它通过按需加载字体符号，并结合矢量切片的优势，实现了高效、灵活的地图文本渲染。通过自定义 "),t("code",[s._v("glyphs URL")]),s._v(" 和字体堆栈，开发者可以灵活地控制地图上文本的显示效果。")])])}),[],!1,null,null,null);t.default=r.exports}}]);