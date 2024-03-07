(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{478:function(s,t,a){"use strict";a.r(t);var n=a(4),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_04-hook规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_04-hook规则"}},[s._v("#")]),s._v(" 04. Hook规则")]),s._v(" "),t("p",[s._v("Hook 本质就是 JavaScript 函数，但是在使用它时需要遵循"),t("strong",[s._v("两条规则")]),s._v("。我们提供了一个 "),t("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-react-hooks",target:"_blank",rel:"noopener noreferrer"}},[s._v("linter 插件"),t("OutboundLink")],1),s._v("来强制执行这些规则：")]),s._v(" "),t("h2",{attrs:{id:"只在最顶层使用-hook"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#只在最顶层使用-hook"}},[s._v("#")]),s._v(" 只在最顶层使用 Hook")]),s._v(" "),t("p",[s._v("不要在循环，条件或嵌套函数中调用 Hook， 确保"),t("strong",[s._v("总是在你的 React 函数的最顶层以及任何 return 之前调用他们")]),s._v("。遵守这条规则，你就能确保 Hook 在每一次渲染中都按照同样的顺序被调用。")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("React 怎么知道哪个 state 对应哪个 "),t("code",[s._v("useState")]),s._v("？答案是 React 靠的是 Hook 调用的顺序")])]),s._v(" "),t("li",[t("p",[s._v("如果我们想要有条件地执行一个 effect，可以将判断放到 Hook 的"),t("em",[s._v("内部")]),s._v("：")])])]),s._v(" "),t("div",{staticClass:"language-jsx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-jsx"}},[t("code",[s._v("  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("useEffect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("persistForm")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 👍 将条件判断放置在 effect 中")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      localStorage"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setItem")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'formData'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])]),s._v(" "),t("h2",{attrs:{id:"只在-react-函数中调用-hook"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#只在-react-函数中调用-hook"}},[s._v("#")]),s._v(" 只在 React 函数中调用 Hook")]),s._v(" "),t("p",[s._v("**不要在普通的 JavaScript 函数中调用 Hook。**你可以：")]),s._v(" "),t("ul",[t("li",[s._v("✅ 在 React 的函数组件中调用 Hook")]),s._v(" "),t("li",[s._v("✅ 在自定义 Hook 中调用其他 Hook")])]),s._v(" "),t("h2",{attrs:{id:"eslint-插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eslint-插件"}},[s._v("#")]),s._v(" ESLint 插件")]),s._v(" "),t("p",[s._v("我们发布了一个名为 "),t("a",{attrs:{href:"https://www.npmjs.com/package/eslint-plugin-react-hooks",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("eslint-plugin-react-hooks")]),t("OutboundLink")],1),s._v(" 的 ESLint 插件来强制执行这两条规则。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" eslint-plugin-react-hooks --save-dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 你的 ESLint 配置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"plugins"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"react-hooks"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"rules"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"react-hooks/rules-of-hooks"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"error"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 检查 Hook 的规则")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"react-hooks/exhaustive-deps"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"warn"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 检查 effect 的依赖")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);