(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{161:function(t,e,s){t.exports=s.p+"assets/img/osconfig-borad-sram-size.97b0da51.png"},162:function(t,e,s){t.exports=s.p+"assets/img/raw-project-copy-liteos.0fcbb562.png"},164:function(t,e,s){t.exports=s.p+"assets/img/raw-project-osconfig.48bebeab.png"},165:function(t,e,s){t.exports=s.p+"assets/img/osconfig-borad-include-stm32fxxx.7e27c363.png"},166:function(t,e,s){t.exports=s.p+"assets/img/raw-project-error-multiply-defined.a78bd7b7.png"},168:function(t,e,s){t.exports=s.p+"assets/img/stm32cube-nvic-no-systick.f4864c0c.png"},287:function(t,e,s){t.exports=s.p+"assets/img/raw-project-list-iar.1729225a.png"},288:function(t,e,s){t.exports=s.p+"assets/img/raw-project-first-compile-iar.98883375.png"},289:function(t,e,s){t.exports=s.p+"assets/img/raw-project-group-iar.f80528bc.png"},290:function(t,e,s){t.exports=s.p+"assets/img/raw-project-group-files.7cb23f40.png"},291:function(t,e,s){t.exports=s.p+"assets/img/raw-project-options-include-iar.bdc038a3.png"},292:function(t,e,s){t.exports=s.p+"assets/img/raw-project-include-path-iar.ce5773bf.png"},293:function(t,e,s){t.exports=s.p+"assets/img/raw-project-compile-error-iar.b8e2bdb6.png"},294:function(t,e,s){t.exports=s.p+"assets/img/raw-project-osconfig-path-iar.7a30308e.png"},295:function(t,e,s){t.exports=s.p+"assets/img/raw-project-compile-ok-iar.836bc693.png"},696:function(t,e,s){"use strict";s.r(e);var a=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"stm32-系列（iar-ewarm）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stm32-系列（iar-ewarm）","aria-hidden":"true"}},[t._v("#")]),t._v(" STM32 系列（IAR EWARM）")]),t._v(" "),a("p",[a("a",{attrs:{href:"/porting/F103ZE_LiteOS_IAR.rar"}},[t._v("移植工程下载")])]),t._v(" "),a("h2",{attrs:{id:"编译并验证裸机工程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译并验证裸机工程","aria-hidden":"true"}},[t._v("#")]),t._v(" 编译并验证裸机工程")]),t._v(" "),a("p",[t._v("默认的裸机工程如下图所示，会按照代码功能组织好。我们可以执行编译检查工程是否 OK。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(287),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(288),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"拷贝-liteos-内核源码及测试相关代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拷贝-liteos-内核源码及测试相关代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 拷贝 LiteOS 内核源码及测试相关代码")]),t._v(" "),a("p",[a("img",{attrs:{src:s(162),alt:""}})]),t._v(" "),a("p",[t._v("在 STM32Cube 裸机工程中创建 "),a("code",[t._v("Middlewares/LiteOS")]),t._v(" 目录，拷贝上图中源码目录到该目录下。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├─ Middlewares\n│  └─ LiteOS\n│     ├─ arch\n│     ├─ examples\n│     └─ kernel\n")])])]),a("h2",{attrs:{id:"创建-liteos-分组并添加-c-源文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-liteos-分组并添加-c-源文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建 LiteOS 分组并添加 .c 源文件")]),t._v(" "),a("p",[t._v("在工程目录上点击右键，创建 "),a("code",[t._v("Middleware/LiteOS/arch")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(289),alt:""}})]),t._v(" "),a("p",[t._v("如下图增加 LiteOS 源代码：")]),t._v(" "),a("p",[t._v("arch 需要添加 "),a("code",[t._v("los_dispatch_keil.S")]),t._v("，"),a("code",[t._v("los_hw.c")]),t._v("，"),a("code",[t._v("los_hw_tick.c")]),t._v(" 和 "),a("code",[t._v("los_hwi.c")]),t._v("，这 4 个文件。")]),t._v(" "),a("p",[t._v("kernel 需要添加的文件比较多：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("los_init.c")])]),t._v(" "),a("li",[a("code",[t._v("base/core")]),t._v(" 下面全部 .c 文件")]),t._v(" "),a("li",[a("code",[t._v("base/ipc")]),t._v(" 下面全部 .c 文件")]),t._v(" "),a("li",[a("code",[t._v("base/mem/bestfit_little")]),t._v(" 下面全部 .c 文件")]),t._v(" "),a("li",[a("code",[t._v("base/mem/common")]),t._v(" 下面全部 .c 文件")]),t._v(" "),a("li",[a("code",[t._v("base/mem/membox")]),t._v(" 下面全部 .c 文件")]),t._v(" "),a("li",[a("code",[t._v("base/misc")]),t._v(" 下面全部 .c 文件")]),t._v(" "),a("li",[a("code",[t._v("base/om")]),t._v(" 下面全部 .c 文件")]),t._v(" "),a("li",[a("code",[t._v("extended/tickless")]),t._v(" 下面全部 .c 文件（如果没有使用 tickless，可以不必添加）")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(290),alt:""}})]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("需要注意的是，LiteOS 提供了 3 套动态内存分配算法，位于 "),a("code",[t._v("LiteOS\\kernel\\base\\mem")]),t._v(" 目录下，分别是 "),a("code",[t._v("bestfit")]),t._v("、"),a("code",[t._v("bestfit_little")]),t._v("、"),a("code",[t._v("tlsf")]),t._v(" 这三套动态内存算法只需要添加其中一套就行了，对于资源有限的芯片，建议选择 "),a("code",[t._v("bestfit_little")]),t._v("，上面的示例也是添加了这一套动态分配算法；另外 "),a("code",[t._v("LiteOS\\kernel\\base\\mem\\membox")]),t._v(" 目录下是 LiteOS 提供的静态内存算法，与动态内存算法不冲突，需要添加；"),a("code",[t._v("LiteOS\\kernel\\base\\mem\\common")]),t._v(" 目录的内容需要全部添加")])]),t._v(" "),a("h2",{attrs:{id:"配置-c-c-源码-h-头文件路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-c-c-源码-h-头文件路径","aria-hidden":"true"}},[t._v("#")]),t._v(" 配置 C/C++ 源码 .h 头文件路径")]),t._v(" "),a("p",[a("img",{attrs:{src:s(291),alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(292),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"编译代码并处理移植中的编译错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译代码并处理移植中的编译错误","aria-hidden":"true"}},[t._v("#")]),t._v(" 编译代码并处理移植中的编译错误")]),t._v(" "),a("p",[t._v("编译会发现如下错误，提示缺少 "),a("code",[t._v("los_builddef.h")]),t._v(" 文件，这个文件没有包含在源码中，需要从其他示例工程中过来。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(293),alt:""}})]),t._v(" "),a("p",[t._v("我们在 STM32F103RB_NUCLED 发现 "),a("code",[t._v("OS_CONFIG")]),t._v(" 目录，将该目录拷贝到本地工程中。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(164),alt:""}})]),t._v(" "),a("p",[t._v("也别忘记把 OS_CONFIG 目录配置到头文件路径中。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(294),alt:""}})]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[a("code",[t._v("OS_CONFIG/target_config.h")]),t._v(" 文件有两处需要适配您的开发环境进行调整：")]),t._v(" "),a("ol",[a("li",[t._v("正确修改导入 ST 官方驱动文件，如果是 M4 系列芯片是 "),a("code",[t._v("stm32f4xx.h")]),t._v(" 文件")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(165),alt:""}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("将内存设置为匹配当前芯片 SRAM 大小，查找数据手册可以了解芯片内存大小")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(161),alt:""}})])]),t._v(" "),a("p",[t._v("再次编译代码，之前的大量报错应该就清理得差不多了。")]),t._v(" "),a("p",[a("img",{attrs:{src:s(166),alt:""}})]),t._v(" "),a("p",[t._v("如果编译后还发现上图中的两个错误，显示有两个函数重复定义。您可以直接注释掉这两个函数，但为了保证 STM32Cube 生成工程不会再次覆盖修改后代码，建议按下图所示操作，在 STM32Cube 中屏蔽这两个函数生成。")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[a("code",[t._v("PendSV_Handler")]),t._v(" 和 "),a("code",[t._v("SysTick_Handler")]),t._v(" 这两个函数只有在 LiteOS Kernel 有对应实现才能够屏蔽，如果不进行 OS，不可屏蔽盖函数，否则会导致芯片跑不起来。")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(168),alt:""}})]),t._v(" "),a("h3",{attrs:{id:"编译无误，os-移植大功告成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译无误，os-移植大功告成","aria-hidden":"true"}},[t._v("#")]),t._v(" 编译无误，OS 移植大功告成")]),t._v(" "),a("p",[a("img",{attrs:{src:s(295),alt:""}})])])}],i=s(0),r=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},a,!1,null,null,null);r.options.__file="stm32-iar.md";e.default=r.exports}}]);