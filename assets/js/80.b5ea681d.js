(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{454:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),s("p",[t._v("本文简单介绍 Openlayers 的比例尺知识。")]),t._v(" "),s("h3",{attrs:{id:"比例尺单位"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#比例尺单位"}},[t._v("#")]),t._v(" 比例尺单位")]),t._v(" "),s("p",[t._v("Openlayers 中比例尺的单位主要有四种："),s("strong",[t._v("度")]),t._v("（degrees）、"),s("strong",[t._v("英尺")]),t._v("（imperial）、"),s("strong",[t._v("海里")]),t._v("（nautical）和"),s("strong",[t._v("公制")]),t._v("（metric），其中英尺又分为"),s("strong",[t._v("英制英尺")]),t._v("（imperial）和"),s("strong",[t._v("美制英尺")]),t._v("（us）")]),t._v(" "),s("h3",{attrs:{id:"比例尺单位换算"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#比例尺单位换算"}},[t._v("#")]),t._v(" 比例尺单位换算")]),t._v(" "),s("p",[t._v("以下是度、英尺、海里、公制单位（以米为例）之间的一些常见换算公式：")]),t._v(" "),s("p",[s("strong",[t._v("一、度与米的换算")]),t._v("\n地理坐标中的度（°）与距离（米）的换算比较复杂，因为它取决于纬度。")]),t._v(" "),s("ul",[s("li",[t._v("在赤道上，1 度大约等于 111319.5 米。随着纬度的升高，1 度对应的距离会逐渐减小。")]),t._v(" "),s("li",[t._v("可以使用以下近似公式计算特定纬度上 1 度对应的距离（单位：米）："),s("code",[t._v("111319.5 * cos (纬度)")]),t._v("。")])]),t._v(" "),s("p",[s("strong",[t._v("二、英尺与米的换算")]),t._v(" "),s("code",[t._v("1 英尺 = 0.3048 米")])]),t._v(" "),s("p",[s("strong",[t._v("三、海里与米的换算")]),t._v(" "),s("code",[t._v("1 海里 = 1852 米")])]),t._v(" "),s("ul",[s("li",[t._v("例如：")])]),t._v(" "),s("p",[t._v("如果要将 5000 英尺转换为米，可以这样计算："),s("code",[t._v("5000 * 0.3048 = 1524 米")]),t._v("\n如果有 3 海里要转换为米："),s("code",[t._v("3 * 1852 = 5556 米")])]),t._v(" "),s("h3",{attrs:{id:"openlayers-中的比例尺"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#openlayers-中的比例尺"}},[t._v("#")]),t._v(" Openlayers 中的比例尺")]),t._v(" "),s("p",[t._v("Openlayers 中的比例尺控件是在"),s("code",[t._v("ol.control.ScaleLine")]),t._v("中实现的。")]),t._v(" "),s("p",[s("strong",[t._v("设置比例尺")])]),t._v(" "),s("p",[t._v("语法："),s("code",[t._v("map.addControl(new ScaleLine());")])]),t._v(" "),s("p",[t._v("Openlayers 默认的比例尺单位是由地图定义时设置的坐标参考系决定的，比如如果坐标参考系是"),s("code",[t._v("EPSG:4326")]),t._v(",比例尺单位就是"),s("strong",[t._v("度")]),t._v("，如果是"),s("code",[t._v("EPSG:3857")]),t._v(",则单位就是"),s("strong",[t._v("公制")])]),t._v(" "),s("p",[s("strong",[t._v("动态修改比例尺单位")])]),t._v(" "),s("p",[t._v("代码如下：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" scaleControl "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" map\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getControls")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getArray")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("control")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" control "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScaleLine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scaleControl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUnits")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  scaleControl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setUnits")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//v的取值 度：degrees 英制英尺：imperial 美制英尺：us 海里：nautical 公制：metric")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("思路：首先获取地图控件，遍历控件，判断控件是否是"),s("code",[t._v("ScaleLine")]),t._v("类的实例，然后调用"),s("code",[t._v("getUnits()")]),t._v("方法获取当前比例尺单位，修改比例尺单位调用"),s("code",[t._v("setUnits()")]),t._v("方法，")])])}),[],!1,null,null,null);s.default=e.exports}}]);