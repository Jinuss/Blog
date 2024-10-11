(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{525:function(t,e,s){"use strict";s.r(e);var a=s(4),c=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h3",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),e("p",[e("code",[t._v("watch")]),t._v(" 和"),e("code",[t._v("watchEffect")]),t._v("是 Vue3 中常用的两个 api，用于监听数据变化。除此之外还有 vue3 还提供了"),e("code",[t._v("watchPostEffect")]),t._v("和"),e("code",[t._v("watchSyncEffect")])]),t._v(" "),e("h4",{attrs:{id:"watch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#watch"}},[t._v("#")]),t._v(" "),e("code",[t._v("watch")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("watch(source, cb, options?)")]),t._v(" "),e("code",[t._v("watch")]),t._v("主动监听，在初始化时会执行一次回调函数，当监听的数据"),e("code",[t._v("source")]),t._v("发生变化时会执行回调函数"),e("code",[t._v("cb")]),t._v("。"),e("code",[t._v("cb")]),t._v("接收两个参数，一个是"),e("code",[t._v("newValue")]),t._v("，一个是"),e("code",[t._v("oldValue")]),t._v("。\n"),e("code",[t._v("watch")]),t._v("的"),e("code",[t._v("source")]),t._v("可以是一个"),e("code",[t._v("getter")]),t._v("函数，也可以是一个"),e("code",[t._v("ref")]),t._v("对象，也可以是一个"),e("code",[t._v("reactive")]),t._v("对象。可以同时监听多个数据，也存在一定的性能的开销。")])]),t._v(" "),e("h4",{attrs:{id:"watcheffect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#watcheffect"}},[t._v("#")]),t._v(" "),e("code",[t._v("watchEffect")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("watchEffect(effect, options?)")]),t._v(" "),e("code",[t._v("watchEffect")]),t._v("被动监听，在初始化时会执行一次回调函数，当回调函数内部中的任何"),e("em",[t._v("响应式数据")]),t._v("发生变化都会执行回调函数"),e("code",[t._v("effect")]),t._v("，它也无需指定具体的依赖。\n"),e("code",[t._v("effect")]),t._v("接收一个参数，是"),e("code",[t._v("onInvalidate")]),t._v("，用于注册一个清理函数，当监听的数据发生变化时，会执行清理函数。")])]),t._v(" "),e("h4",{attrs:{id:"watchposteffect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#watchposteffect"}},[t._v("#")]),t._v(" "),e("code",[t._v("watchPostEffect")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("watchPostEffect(effect)")]),t._v("：\n和"),e("code",[t._v("watchEffect")]),t._v("类似，自动监听，回调函数会在 DOM 更新之后调用，能够确保回调函数执行时可以获取到更新后的 DOM，适用于需要在 DOM 更新后执行操作的情况，如读取元素的位置、尺寸等信息")])]),t._v(" "),e("h4",{attrs:{id:"watchsynceffect"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#watchsynceffect"}},[t._v("#")]),t._v(" "),e("code",[t._v("watchSyncEffect")])]),t._v(" "),e("ul",[e("li",[e("code",[t._v("watchSyncEffect(effect)")]),t._v("：\n同步监听，每当依赖变化时立即触发回调函数，而不会等待下一次事件循环。适用于需要立即响应数据变化的情况，如实时计算或者紧急数据更新等")])]),t._v(" "),e("h3",{attrs:{id:"四种监听器的实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四种监听器的实现"}},[t._v("#")]),t._v(" 四种监听器的实现")]),t._v(" "),e("p",[t._v("vue3 内部实现这 4 种监听器的原理大同小异，都是返回调用"),e("code",[t._v("doWatch")]),t._v("函数，位于"),e("code",[t._v("packages\\runtime-core\\src\\apiWatch.ts")])]),t._v(" "),e("h4",{attrs:{id:"dowatch原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dowatch原理"}},[t._v("#")]),t._v(" "),e("code",[t._v("doWatch")]),t._v("原理")]),t._v(" "),e("h5",{attrs:{id:"传参"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#传参"}},[t._v("#")]),t._v(" 传参")]),t._v(" "),e("p",[e("code",[t._v("doWatch")]),t._v("函数接收三个参数，分别是"),e("code",[t._v("source")]),t._v("、"),e("code",[t._v("cb")]),t._v("和"),e("code",[t._v("options")]),t._v("。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("watch")]),t._v("可以传入三个参数,"),e("code",[t._v("options={immediate,deep,flush,once}")])]),t._v(" "),e("li",[e("code",[t._v("watchEffect")]),t._v("传入两个参数，"),e("code",[t._v("options={immediate,deep,flush,once}")])]),t._v(" "),e("li",[t._v("对于"),e("code",[t._v("watchPostEffect")]),t._v("和"),e("code",[t._v("watchSyncEffect")]),t._v("来说，只有"),e("code",[t._v("source")]),t._v("参数作为回调函数，"),e("code",[t._v("watchPostEffect")]),t._v("函数内部"),e("code",[t._v("options")]),t._v("是"),e("code",[t._v("{flush:post}")]),t._v("；"),e("code",[t._v("watchSyncEffect")]),t._v("函数内部"),e("code",[t._v("options")]),t._v("是"),e("code",[t._v("{flush:sync}")])])]),t._v(" "),e("h4",{attrs:{id:"函数内部逻辑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数内部逻辑"}},[t._v("#")]),t._v(" 函数内部逻辑")]),t._v(" "),e("p",[t._v("首先"),e("code",[t._v("doWatch")]),t._v("会判断是否"),e("code",[t._v("cb")]),t._v("和"),e("code",[t._v("once")]),t._v(",如果有，就将其包装成一个新的函数，内部调用"),e("code",[t._v("unwatch")]),t._v("用于取消监听。")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cb "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" once"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" _cb "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cb"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("cb")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("_cb")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("unwatch")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[t._v("紧接着就是判断"),e("code",[t._v("source")]),t._v("的类型，从而设置不同的"),e("code",[t._v("getter")]),t._v("函数,"),e("code",[t._v("getter")]),t._v("函数用于后面定义"),e("code",[t._v("effect")]),t._v("。同时还会判断是否是多源，设置"),e("code",[t._v("isMultiSource")]),t._v("的值，如果"),e("code",[t._v("source")]),t._v("是数组，则"),e("code",[t._v("isMultiSource")]),t._v("为"),e("code",[t._v("true")]),t._v("。如果是"),e("code",[t._v("watch")]),t._v(",且"),e("code",[t._v("options")]),t._v("种的"),e("code",[t._v("deep")]),t._v("为"),e("code",[t._v("true")]),t._v("，则为深度监听。")]),t._v(" "),e("p",[t._v("后面"),e("code",[t._v("doWatch")]),t._v("定义了"),e("code",[t._v("onClenup")]),t._v("函数，用于注册一个清理函数，当监听的数据发生变化时，会执行清理函数。\n"),e("code",[t._v("doWatch")]),t._v("内部还针对 SSR 做了单独处理，定义不同的清理函数。")]),t._v(" "),e("p",[e("code",[t._v("doWatch")]),t._v("定义了一个"),e("code",[t._v("SchedulerJob")]),t._v("类的 job 函数，根据"),e("code",[t._v("flush")]),t._v("的值，定义不同的"),e("code",[t._v("scheduler")]),t._v("。由此可知只有"),e("code",[t._v("watch")]),t._v("和"),e("code",[t._v("watchEffect")]),t._v("的"),e("code",[t._v("job")]),t._v("会是会进入队列，调用"),e("code",[t._v("queueJob")]),t._v("。")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scheduler")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EffectScheduler\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flush "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sync'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    scheduler "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" job "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" any "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the scheduler function gets called directly")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flush "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("scheduler")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("queuePostRenderEffect")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("job"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" instance "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" instance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("suspense"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    job"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pre "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("instance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" job"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" instance"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("uid\n    "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("scheduler")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("queueJob")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("job"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("p",[t._v("至此，我们可以拿到"),e("code",[t._v("getter")]),t._v("和"),e("code",[t._v("scheduler")]),t._v("，通过"),e("code",[t._v("const effect = new reactivity.ReactiveEffect(getter, shared.NOOP, scheduler)")]),t._v(" 定义一个"),e("code",[t._v("effect")]),t._v(", "),e("code",[t._v("effect")]),t._v("是响应式里提到的一个概念，它会自动追踪其依赖，并在依赖变更时重新运行自身。")]),t._v(" "),e("p",[t._v("然后，定义了"),e("code",[t._v("unwatch")]),t._v("函数作为"),e("code",[t._v("doWatch")]),t._v("的返回值，用于取消监听。其内部会调用"),e("code",[t._v("effect.stop()")]),t._v("，停止"),e("code",[t._v("effect")]),t._v("的运行。")]),t._v(" "),e("p",[t._v("最后一部分就是"),e("code",[t._v("doWatch")]),t._v("的初始化运行")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("watch")]),t._v(":当"),e("code",[t._v("cb")]),t._v("存在，若"),e("code",[t._v("immediate")]),t._v("为"),e("code",[t._v("true")]),t._v("，则直接运行"),e("code",[t._v("job")]),t._v("，否则调用"),e("code",[t._v("effect.run()")]),t._v("赋值给"),e("code",[t._v("oldValue")])]),t._v(" "),e("li",[e("code",[t._v("watchPostEffect")]),t._v(":会运行一次"),e("code",[t._v("queuePostRenderEffect")]),t._v("，将"),e("code",[t._v("job")]),t._v("放入队列中")]),t._v(" "),e("li",[e("code",[t._v("watchEffet")]),t._v("则和"),e("code",[t._v("watchSyncEffect")]),t._v("一样，直接运行"),e("code",[t._v("effect.run()")])])])])}),[],!1,null,null,null);e.default=c.exports}}]);