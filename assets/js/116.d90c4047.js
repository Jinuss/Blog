(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{451:function(e,v,_){"use strict";_.r(v);var o=_(4),s=Object(o.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h3",{attrs:{id:"概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),v("p",[v("code",[e._v("schedule")]),e._v("调度器是 "),v("code",[e._v("Vue3")]),e._v(" 中用于处理异步更新如某些副作用"),v("code",[e._v("effct")]),e._v("、生命周期钩子函数"),v("code",[e._v("onMounted")]),e._v("等的核心模块，它负责将异步更新任务添加到队列中，并适时执行更新操作。其核心实现位于"),v("code",[e._v("packages\\runtime-core\\src\\scheduler.ts")])]),e._v(" "),v("h3",{attrs:{id:"源码实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#源码实现"}},[e._v("#")]),e._v(" 源码实现")]),e._v(" "),v("h4",{attrs:{id:"job的概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#job的概念"}},[e._v("#")]),e._v(" "),v("code",[e._v("job")]),e._v("的概念")]),e._v(" "),v("p",[v("code",[e._v("schedule")]),e._v("是通过队列的方式，所谓的任务"),v("code",[e._v("job")]),e._v("就是要执行的更新操作，除了本身的函数外,一个"),v("code",[e._v("job")]),e._v("可能还会有以下可选属性:")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("id")]),e._v(": 任务的唯一标识")]),e._v(" "),v("li",[v("code",[e._v("pre")]),e._v(": 是否是预更新任务")]),e._v(" "),v("li",[v("code",[e._v("computed")]),e._v(": 是否是计算属性")]),e._v(" "),v("li",[v("code",[e._v("allowRecurse")]),e._v(": 是否允许递归更新")]),e._v(" "),v("li",[v("code",[e._v("ownerInstance")]),e._v(": 任务所属的组件实例")])]),e._v(" "),v("h4",{attrs:{id:"schedule的实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#schedule的实现"}},[e._v("#")]),e._v(" "),v("code",[e._v("schedule")]),e._v("的实现")]),e._v(" "),v("p",[v("code",[e._v("schedule")]),e._v("维护几个全局变量，如下：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("queue")]),e._v(": 任务队列")]),e._v(" "),v("li",[v("code",[e._v("pendingPostFlushCbs")]),e._v(": 待处理的回调函数队列")]),e._v(" "),v("li",[v("code",[e._v("activePostFlushCbs")]),e._v(": 正在处理的回调函数队列")]),e._v(" "),v("li",[v("code",[e._v("isFlushPending")]),e._v(": 是否还有"),v("code",[e._v("job")]),e._v("等待更新")]),e._v(" "),v("li",[v("code",[e._v("isFlushing")]),e._v(": 是否正在执行更新")]),e._v(" "),v("li",[v("code",[e._v("flushIndex")]),e._v(": 当前正在执行的"),v("code",[e._v("job")]),e._v("的索引")]),e._v(" "),v("li",[v("code",[e._v("postFlushIndex")]),e._v(": 待处理的回调函数的索引")]),e._v(" "),v("li",[v("code",[e._v("currentFlushPromise")]),e._v(": 当前正在执行的"),v("code",[e._v("Promise")])]),e._v(" "),v("li",[v("code",[e._v("RECURSION_LIMIT")]),e._v(": 递归更新的最大次数 // 内置 100")])]),e._v(" "),v("p",[v("code",[e._v("schedule")]),e._v("主要是通过"),v("code",[e._v("queueJob")]),e._v("和"),v("code",[e._v("queuePostFlushCb")]),e._v("两个函数来添加任务到队列中，而这两个队列有所不同")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("queue")]),e._v(": 添加的任务会按照优先级进行排序；这个队列处理的主要是需要异步执行的具体任务，如重新渲染、副作用函数等")]),e._v(" "),v("li",[v("code",[e._v("pendingPostFlushCbs")]),e._v(": 添加的任务会按照添加顺序进行排序；这个队列处理的是后置任务，如"),v("code",[e._v("onUpdated")]),e._v("、"),v("code",[e._v("onUnmounted")]),e._v("，后置任务是在主要刷新任务执行完成后才会被执行的任务")])]),e._v(" "),v("h5",{attrs:{id:"queuejob"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#queuejob"}},[e._v("#")]),e._v(" "),v("code",[e._v("queueJob")])]),e._v(" "),v("h5",{attrs:{id:"queuepostflushcb"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#queuepostflushcb"}},[e._v("#")]),e._v(" "),v("code",[e._v("queuePostFlushCb")])])])}),[],!1,null,null,null);v.default=s.exports}}]);