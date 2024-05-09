(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{344:function(t,e,s){"use strict";s.r(e);var a=s(4),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"pinia-源码浅析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pinia-源码浅析"}},[t._v("#")]),t._v(" Pinia 源码浅析")]),t._v(" "),e("h4",{attrs:{id:"vue-demi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue-demi"}},[t._v("#")]),t._v(" vue-demi")]),t._v(" "),e("p",[e("code",[t._v("Pinia")]),t._v(" 中只用到了 vue-demi 一种库，vue-demi 的介绍可以参考 "),e("RouterLink",{attrs:{to:"/pages/3183r7jkfee/"}},[t._v("vue-demi")])],1),t._v(" "),e("h4",{attrs:{id:"createpinia-创建pinia-实例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#createpinia-创建pinia-实例"}},[t._v("#")]),t._v(" "),e("code",[t._v("createPinia")]),t._v(" 创建Pinia 实例")]),t._v(" "),e("p",[e("code",[t._v("createPinia")]),t._v("函数是"),e("code",[t._v("Pinia")]),t._v("的核心函数，它返回一个"),e("code",[t._v("Pinia")]),t._v("实例，该实例包含"),e("code",[t._v("install")]),t._v("方法，用于安装"),e("code",[t._v("Pinia")]),t._v("插件,以及"),e("code",[t._v("use")]),t._v("方法，用于注册插件，比如数据持久化插件"),e("code",[t._v("piniaPluginPersistedstate")])]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPinia")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pinia "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("vueDemi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("markRaw")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("install")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*...*/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("plugin")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*...*/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         _p"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("_a")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("_e")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("scope"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("_s")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         state"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" pinia\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br")])]),e("h4",{attrs:{id:"definestore-定义-store"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#definestore-定义-store"}},[t._v("#")]),t._v(" "),e("code",[t._v("defineStore")]),t._v(" 定义 Store")]),t._v(" "),e("p",[e("code",[t._v("vueDemi.hasInjectionContext()")]),t._v(" 函数用于检查当前环境是否具有注入上下文，返回的是一个布尔值")]),t._v(" "),e("p",[e("code",[t._v("defineStore")]),t._v(" 定义 store，接受一个唯一的 id 字符串和 store 配置项，其中定义并返回了"),e("code",[t._v("useStore")]),t._v("函数,配置项可以是函数也可以是对象, "),e("code",[t._v("defineStore")]),t._v("内部提供了"),e("code",[t._v("createSetupStore")]),t._v("和"),e("code",[t._v("createOptionsStore")]),t._v("两种方式创建 store")]),t._v(" "),e("h5",{attrs:{id:"createsetupstore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#createsetupstore"}},[t._v("#")]),t._v(" "),e("code",[t._v("createSetupStore")])]),t._v(" "),e("p",[e("code",[t._v("createSetupStore")]),t._v(" 接收6个参数,分别是"),e("code",[t._v("id")]),t._v(","),e("code",[t._v("setup")]),t._v(","),e("code",[t._v("options")]),t._v(","),e("code",[t._v("pinia")]),t._v(","),e("code",[t._v("hot")]),t._v(","),e("code",[t._v("isOptionsStore")])]),t._v(" "),e("h5",{attrs:{id:"createoptionsstore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#createoptionsstore"}},[t._v("#")]),t._v(" "),e("code",[t._v("createOptionsStore")])]),t._v(" "),e("h4",{attrs:{id:"storetorefs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#storetorefs"}},[t._v("#")]),t._v(" "),e("code",[t._v("storeToRefs")])]),t._v(" "),e("p",[e("code",[t._v("storeToRefs")]),t._v("接收一个参数"),e("code",[t._v("store")]),t._v(",作用是从"),e("code",[t._v("store")]),t._v("中解构出响应式数据。")]),t._v(" "),e("p",[t._v("pinia内部实现"),e("code",[t._v("storeToRefs")]),t._v("的逻辑是先判断是否是vue2，\n如果是vu2，则通过"),e("code",[t._v("vueDemi.toRef")]),t._v("工具函数将store转为响应式数据，然后返回；\n如果当前是vue3，则分为两步：")]),t._v(" "),e("ol",[e("li",[t._v("定义一个空对象refs,通过"),e("code",[t._v("vueDemi.toRaw")]),t._v("将store转为普通对象并返回")]),t._v(" "),e("li",[t._v("循环遍历第1步中的对象，通过"),e("code",[t._v("vueDemi.isRef")]),t._v("和"),e("code",[t._v("vueDemi.isReactive")]),t._v("判断其值是否是响应式数据，如果是，则通过"),e("code",[t._v("vueDemi.toRef")]),t._v("将响应式数据转为普通数据，然后返回；")]),t._v(" "),e("li",[t._v("返回refs")])])])}),[],!1,null,null,null);e.default=n.exports}}]);