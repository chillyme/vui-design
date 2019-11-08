webpackJsonp([9],{"33Qr":function(t,e){},SJf9:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("xe5J"),s=n("Fy5V"),l=n("RLuK"),i={components:{Example:l.a},data:function(){return{code:'<template>\n  <div class="example-modal-basic-usage">\n    <vui-button type="primary" @click="showModal">Open basic modal</vui-button>\n    <vui-modal\n      v-model="visible"\n      title="Basic Modal"\n      @ok="handleOk"\n      @cancel="handleCancel"\n    >\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n    </vui-modal>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false\n      };\n    },\n    methods: {\n      showModal() {\n        this.visible = true;\n      },\n      handleOk() {\n        this.$message.info("Clicked ok");\n      },\n      handleCancel() {\n        this.$message.info("Clicked cancel");\n      }\n    }\n  };\n<\/script>\n',visible:!1}},methods:{showModal:function(){this.visible=!0},handleOk:function(){this.$message.info("Clicked ok")},handleCancel:function(){this.$message.info("Clicked cancel")}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Example",{attrs:{vertical:"",id:"example-modal-basic-usage"}},[n("template",{slot:"source"},[n("div",{staticClass:"example-modal-basic-usage"},[n("vui-button",{attrs:{type:"primary"},on:{click:t.showModal}},[t._v("Open basic modal")]),n("vui-modal",{attrs:{title:"Basic Modal"},on:{ok:t.handleOk,cancel:t.handleCancel},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")])])],1)]),n("template",{slot:"title"},[t._v("基本用法")]),n("template",{slot:"describe"},[n("p",[t._v("最简单的使用方法，通过控制 "),n("code",[t._v("visible")]),t._v(" 属性来显示或隐藏对话框。可以使用 "),n("code",[t._v("v-model")]),t._v(" 双向绑定。")])]),n("template",{slot:"code"},[t._v(t._s(t.code))])],2)},staticRenderFns:[]},d=n("VU/8")(i,a,!1,null,null,null).exports,c={components:{Example:l.a},data:function(){return{code:'<template>\n  <div class="example-modal-headless-and-footless">\n    <vui-button type="primary" @click="showModal1">Headless</vui-button>\n    <vui-modal headless v-model="visible1">\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n    </vui-modal>\n    <vui-button type="primary" @click="showModal2">Footless</vui-button>\n    <vui-modal title="Modal Title" footless v-model="visible2">\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n    </vui-modal>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible1: false,\n        visible2: false\n      };\n    },\n    methods: {\n      showModal1() {\n        this.visible1 = true;\n      },\n      showModal2() {\n        this.visible2 = true;\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-modal-headless-and-footless > .vui-button { margin-right:10px; }\n</style>\n',visible1:!1,visible2:!1}},methods:{showModal1:function(){this.visible1=!0},showModal2:function(){this.visible2=!0}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Example",{attrs:{vertical:"",id:"example-modal-headless-and-footless"}},[n("template",{slot:"source"},[n("div",{staticClass:"example-modal-headless-and-footless"},[n("vui-button",{attrs:{type:"primary"},on:{click:t.showModal1}},[t._v("Headless")]),n("vui-modal",{attrs:{headless:""},model:{value:t.visible1,callback:function(e){t.visible1=e},expression:"visible1"}},[n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")])]),n("vui-button",{attrs:{type:"primary"},on:{click:t.showModal2}},[t._v("Footless")]),n("vui-modal",{attrs:{title:"Modal Title",footless:""},model:{value:t.visible2,callback:function(e){t.visible2=e},expression:"visible2"}},[n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")])])],1)]),n("template",{slot:"title"},[t._v("隐藏页头页脚")]),n("template",{slot:"describe"},[n("p",[t._v("通过设置 "),n("code",[t._v("headless")]),t._v(" 和 "),n("code",[t._v("footless")]),t._v(" 属性来隐藏对话框的头部内容和底部内容。")])]),n("template",{slot:"code"},[t._v(t._s(t.code))])],2)},staticRenderFns:[]};var r=n("VU/8")(c,v,!1,function(t){n("hb0Q")},null,null).exports,p={components:{Example:l.a},data:function(){return{code:'<template>\n  <div class="example-modal-hide-close-button">\n    <vui-button type="primary" @click="showModal">Hide close cutton</vui-button>\n    <vui-modal title="Modal Title" :closable="false" v-model="visible">\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n    </vui-modal>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false\n      };\n    },\n    methods: {\n      showModal() {\n        this.visible = true;\n      }\n    }\n  };\n<\/script>\n',visible:!1}},methods:{showModal:function(){this.visible=!0}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Example",{attrs:{vertical:"",id:"example-modal-hide-close-button"}},[n("template",{slot:"source"},[n("div",{staticClass:"example-modal-hide-close-button"},[n("vui-button",{attrs:{type:"primary"},on:{click:t.showModal}},[t._v("Hide close cutton")]),n("vui-modal",{attrs:{title:"Modal Title",closable:!1},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")])])],1)]),n("template",{slot:"title"},[t._v("隐藏关闭按钮")]),n("template",{slot:"describe"},[n("p",[t._v("将 "),n("code",[t._v("closable")]),t._v(" 属性设置为 "),n("code",[t._v("false")]),t._v("，可以隐藏对话框右上角的关闭按钮。")])]),n("template",{slot:"code"},[t._v(t._s(t.code))])],2)},staticRenderFns:[]},u=n("VU/8")(p,m,!1,null,null,null).exports,_={components:{Example:l.a},data:function(){return{code:'<template>\n  <div class="example-modal-button-props">\n    <vui-button type="primary" @click="showModal">Open modal with customized button props</vui-button>\n    <vui-modal\n      v-model="visible"\n      title="Modal Title"\n      cancelText="Cancel"\n      okText="OK"\n      :cancelButtonProps="cancelButtonProps"\n      :okButtonProps="okButtonProps"\n    >\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n    </vui-modal>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false,\n        cancelButtonProps: {\n          props: {\n            type: "text"\n          }\n        },\n        okButtonProps: {\n          props: {\n            disabled: true\n          }\n        }\n      };\n    },\n    methods: {\n      showModal() {\n        this.visible = true;\n      }\n    }\n  };\n<\/script>\n',visible:!1,cancelButtonProps:{props:{type:"text"}},okButtonProps:{props:{disabled:!0}}}},methods:{showModal:function(){this.visible=!0}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Example",{attrs:{vertical:"",id:"example-modal-button-props"}},[n("template",{slot:"source"},[n("div",{staticClass:"example-modal-button-props"},[n("vui-button",{attrs:{type:"primary"},on:{click:t.showModal}},[t._v("Open modal with customized button props")]),n("vui-modal",{attrs:{title:"Modal Title",cancelText:"Cancel",okText:"OK",cancelButtonProps:t.cancelButtonProps,okButtonProps:t.okButtonProps},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")])])],1)]),n("template",{slot:"title"},[t._v("按钮属性")]),n("template",{slot:"describe"},[n("p",[t._v("通过 "),n("code",[t._v("okText")]),t._v(" 和 "),n("code",[t._v("cancelText")]),t._v(" 属性来设置按钮的显示文字。")]),n("p",[t._v("设置 "),n("code",[t._v("okButtonProps")]),t._v(" 和 "),n("code",[t._v("cancelButtonProps")]),t._v(" 分别定义确定按钮和取消按钮的 "),n("code",[t._v("props")]),t._v("。")])]),n("template",{slot:"code"},[t._v(t._s(t.code))])],2)},staticRenderFns:[]},b=n("VU/8")(_,h,!1,null,null,null).exports,f={components:{Example:l.a},data:function(){return{code:'<template>\n  <div class="example-modal-position">\n    <vui-button type="primary" @click="showModal1">Open modal at 50px to top</vui-button>\n    <vui-modal v-model="visible1" title="Modal Title" top="50">\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n    </vui-modal>\n    <vui-button type="primary" @click="showModal2">Vertically centered modal</vui-button>\n    <vui-modal v-model="visible2" title="Modal Title" centered>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n    </vui-modal>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible1: false,\n        visible2: false\n      };\n    },\n    methods: {\n      showModal1() {\n        this.visible1 = true;\n      },\n      showModal2() {\n        this.visible2 = true;\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-modal-position > .vui-button { margin-right:10px; }\n</style>\n',visible1:!1,visible2:!1}},methods:{showModal1:function(){this.visible1=!0},showModal2:function(){this.visible2=!0}}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Example",{attrs:{vertical:"",id:"example-modal-position"}},[n("template",{slot:"source"},[n("div",{staticClass:"example-modal-position"},[n("vui-button",{attrs:{type:"primary"},on:{click:t.showModal1}},[t._v("Open modal at 50px to top")]),n("vui-modal",{attrs:{title:"Modal Title",top:"50"},model:{value:t.visible1,callback:function(e){t.visible1=e},expression:"visible1"}},[n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")])]),n("vui-button",{attrs:{type:"primary"},on:{click:t.showModal2}},[t._v("Vertically centered modal")]),n("vui-modal",{attrs:{title:"Modal Title",centered:""},model:{value:t.visible2,callback:function(e){t.visible2=e},expression:"visible2"}},[n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")])])],1)]),n("template",{slot:"title"},[t._v("位置")]),n("template",{slot:"describe"},[n("p",[t._v("使用 "),n("code",[t._v("top")]),t._v(" 或 "),n("code",[t._v("centered")]),t._v(" 属性来设置对话框的打开位置。")])]),n("template",{slot:"code"},[t._v(t._s(t.code))])],2)},staticRenderFns:[]};var S=n("VU/8")(f,x,!1,function(t){n("cTOP")},null,null).exports,y={components:{Example:l.a},data:function(){return{code:'<template>\n  <div class="example-modal-width">\n    <vui-button type="primary" @click="showModal">Modal width</vui-button>\n    <vui-modal v-model="visible" title="Modal Title" width="360">\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n    </vui-modal>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false\n      };\n    },\n    methods: {\n      showModal() {\n        this.visible = true;\n      }\n    }\n  };\n<\/script>\n',visible:!1}},methods:{showModal:function(){this.visible=!0}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Example",{attrs:{vertical:"",id:"example-modal-width"}},[n("template",{slot:"source"},[n("div",{staticClass:"example-modal-width"},[n("vui-button",{attrs:{type:"primary"},on:{click:t.showModal}},[t._v("Modal width")]),n("vui-modal",{attrs:{title:"Modal Title",width:"360"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")])])],1)]),n("template",{slot:"title"},[t._v("宽度")]),n("template",{slot:"describe"},[n("p",[t._v("设置对话框的宽度为 "),n("code",[t._v("360px")]),t._v("。")]),n("p",[t._v("对话框的宽度是响应式的。当屏幕宽度小于 "),n("code",[t._v("768px")]),t._v(" 时，宽度会被强制设为 "),n("code",[t._v("auto")]),t._v("。")])]),n("template",{slot:"code"},[t._v(t._s(t.code))])],2)},staticRenderFns:[]},w=n("VU/8")(y,k,!1,null,null,null).exports,g={components:{Example:l.a},data:function(){return{code:'<template>\n  <div class="example-modal-asynchronously-close">\n    <vui-button type="primary" @click="showModal">Open modal with async logic</vui-button>\n    <vui-modal v-model="visible" title="Modal Title" @cancel="handleCancel" okAsync @ok="handleOk">\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n    </vui-modal>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false\n      };\n    },\n    methods: {\n      showModal() {\n        this.visible = true;\n      },\n      handleCancel() {\n        this.$message.info("Cancel task!");\n      },\n      handleOk(done) {\n        // 模拟异步任务的执行\n        const task = () => {\n          // bool 为 true 表示异步任务执行成功\n          // bool 为 false 表示异步任务执行失败\n          const bool = Math.random() > 0.5;\n\n          // 提示执行结果\n          if (bool) {\n            this.$message.success("Task executed successfully!");\n          }\n          else {\n            this.$message.error("Task executed failed!");\n          }\n\n          // 调用 done 函数，告知对话框 ok 事件回调函数内部的异步任务执行完成，取消按钮的 loading 状态\n          // 给 done 函数传入 true，或者不传入参数，对话框均会关闭\n          // 传入 false 阻止对话框关闭\n          done && done(bool);\n        };\n\n        setTimeout(task, 3000);\n      }\n    }\n  };\n<\/script>\n',visible:!1}},methods:{showModal:function(){this.visible=!0},handleCancel:function(){this.$message.info("Cancel task!")},handleOk:function(t){var e=this;setTimeout(function(){var n=Math.random()>.5;n?e.$message.success("Task executed successfully!"):e.$message.error("Task executed failed!"),t&&t(n)},3e3)}}},M={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Example",{attrs:{vertical:"",id:"example-modal-asynchronously-close"}},[n("template",{slot:"source"},[n("div",{staticClass:"example-modal-asynchronously-close"},[n("vui-button",{attrs:{type:"primary"},on:{click:t.showModal}},[t._v("Open modal with async logic")]),n("vui-modal",{attrs:{title:"Modal Title",okAsync:""},on:{cancel:t.handleCancel,ok:t.handleOk},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")])])],1)]),n("template",{slot:"title"},[t._v("异步关闭")]),n("template",{slot:"describe"},[n("p",[t._v("通过设置 "),n("code",[t._v("cancelAsync")]),t._v(" 和 "),n("code",[t._v("okAsync")]),t._v(" 分别标记取消按钮和确定按钮的点击事件回调函数是否执行异步任务。")]),n("p",[t._v("当该属性为 "),n("code",[t._v("true")]),t._v(" 时，点击按钮后，按钮会进入 "),n("code",[t._v("loading")]),t._v(" 状态，同时事件回调函数会接收一个 "),n("code",[t._v("done")]),t._v(" 函数作为参数，需要在异步任务完成后调用这个 "),n("code",[t._v("done")]),t._v(" 函数，告知对话框异步任务执行完成，此时按钮会移除 "),n("code",[t._v("loading")]),t._v(" 状态。")]),n("p",[t._v("1、"),n("code",[t._v("done()")]),t._v(" 或 "),n("code",[t._v("done(true)")]),t._v(" 表示 "),n("code",[t._v("loading")]),t._v(" 状态结束后自动关闭对话框；")]),n("p",[t._v("2、"),n("code",[t._v("done(false)")]),t._v(" 表示 "),n("code",[t._v("loading")]),t._v(" 状态结束后禁止关闭对话框。")])]),n("template",{slot:"code"},[t._v(t._s(t.code))])],2)},staticRenderFns:[]},C=n("VU/8")(g,M,!1,null,null,null).exports,T={components:{Example:l.a},data:function(){return{code:'<template>\n  <div class="example-modal-custom-footer">\n    <vui-button type="primary" @click="showModal">Open modal with customized footer</vui-button>\n    <vui-modal v-model="visible" title="Modal Title">\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <p>Some contents...</p>\n      <template slot="footer">\n        <vui-button @click="handleReturn">Return</vui-button>\n        <vui-button type="primary" :loading="loading" @click="handleSubmit">Submit</vui-button>\n      </template>\n    </vui-modal>\n  </div>\n</template>\n\n<script>\n  export default {\n    data() {\n      return {\n        visible: false,\n        loading: false\n      };\n    },\n    methods: {\n      showModal() {\n        this.visible = true;\n      },\n      handleReturn() {\n        this.visible = false;\n      },\n      handleSubmit() {\n        this.loading = true;\n\n        setTimeout(() => {\n          this.visible = false;\n          this.loading = false;\n        }, 3000);\n      }\n    }\n  };\n<\/script>\n',visible:!1,loading:!1}},methods:{showModal:function(){this.visible=!0},handleReturn:function(){this.visible=!1},handleSubmit:function(){var t=this;this.loading=!0,setTimeout(function(){t.visible=!1,t.loading=!1},3e3)}}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Example",{attrs:{vertical:"",id:"example-modal-custom-footer"}},[n("template",{slot:"source"},[n("div",{staticClass:"example-modal-custom-footer"},[n("vui-button",{attrs:{type:"primary"},on:{click:t.showModal}},[t._v("Open modal with customized footer")]),n("vui-modal",{attrs:{title:"Modal Title"},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("p",[t._v("Some contents...")]),n("template",{slot:"footer"},[n("vui-button",{on:{click:t.handleReturn}},[t._v("Return")]),n("vui-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.handleSubmit}},[t._v("Submit")])],1)],2)],1)]),n("template",{slot:"title"},[t._v("自定义页脚")]),n("template",{slot:"describe"},[n("p",[t._v("利用 "),n("code",[t._v("footer")]),t._v(" 插槽自定义对话框底部内容。点击提交后进入 "),n("code",[t._v("loading")]),t._v(" 状态，完成后关闭。")])]),n("template",{slot:"code"},[t._v(t._s(t.code))])],2)},staticRenderFns:[]},$=n("VU/8")(T,E,!1,null,null,null).exports,B={components:{Example:l.a},data:function(){return{code:'<template>\n  <div class="example-modal-confirm">\n    <vui-button type="primary" @click="showConfirm">Confirm</vui-button>\n    <vui-button @click="showDeleteConfirm">Delete</vui-button>\n    <vui-button @click="showAsynchronouslyCloseConfirm">Asynchronously close</vui-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    methods: {\n      showConfirm() {\n        this.$modal.confirm({\n          title: "Do you want to delete these items?",\n          description: "Some descriptions...",\n          onCancel() {\n            console.log("Cancel");\n          },\n          onOk() {\n            console.log("OK");\n          }\n        });\n      },\n      showDeleteConfirm() {\n        this.$modal.confirm({\n          title: "Are you sure delete this task?",\n          description: "Some descriptions...",\n          cancelText: "No",\n          okText: "Yes",\n          okButtonProps: {\n            props: {\n              type: "error"\n            }\n          },\n          onCancel() {\n            console.log("Cancel");\n          },\n          onOk() {\n            console.log("OK");\n          }\n        });\n      },\n      showAsynchronouslyCloseConfirm() {\n        this.$modal.confirm({\n          title: "Friendly Tips",\n          description: "The current operation will permanently delete the task. Do you want to continue?",\n          cancelText: "Cancel",\n          okText: "Continue",\n          okAsync: true,\n          onCancel: () => {\n            console.log("Cancel");\n          },\n          onOk: done => {\n            // 模拟异步任务的执行\n            const task = () => {\n              // bool 为 true 表示异步任务执行成功\n              // bool 为 false 表示异步任务执行失败\n              const bool = Math.random() > 0.5;\n\n              // 提示执行结果\n              if (bool) {\n                this.$message.success("Delete successfully!");\n              }\n              else {\n                this.$message.error("Delete failed, please try again later!");\n              }\n\n              // 调用 done 函数，告知对话框 ok 事件回调函数内部的异步任务执行完成，取消按钮的 loading 状态\n              // 给 done 函数传入 true，或者不传入参数，对话框均会关闭\n              // 传入 false 阻止对话框关闭\n              done && done(bool);\n            };\n\n            setTimeout(task, 3000);\n          }\n        });\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-modal-confirm > .vui-button { margin-right:10px; }\n</style>\n'}},methods:{showConfirm:function(){this.$modal.confirm({title:"Do you want to delete these items?",description:"Some descriptions...",onCancel:function(){console.log("Cancel")},onOk:function(){console.log("OK")}})},showDeleteConfirm:function(){this.$modal.confirm({title:"Are you sure delete this task?",description:"Some descriptions...",cancelText:"No",okText:"Yes",okButtonProps:{props:{type:"error"}},onCancel:function(){console.log("Cancel")},onOk:function(){console.log("OK")}})},showAsynchronouslyCloseConfirm:function(){var t=this;this.$modal.confirm({title:"Friendly Tips",description:"The current operation will permanently delete the task. Do you want to continue?",cancelText:"Cancel",okText:"Continue",okAsync:!0,onCancel:function(){console.log("Cancel")},onOk:function(e){setTimeout(function(){var n=Math.random()>.5;n?t.$message.success("Delete successfully!"):t.$message.error("Delete failed, please try again later!"),e&&e(n)},3e3)}})}}},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Example",{attrs:{vertical:"",id:"example-modal-confirm"}},[n("template",{slot:"source"},[n("div",{staticClass:"example-modal-confirm"},[n("vui-button",{attrs:{type:"primary"},on:{click:t.showConfirm}},[t._v("Confirm")]),n("vui-button",{on:{click:t.showDeleteConfirm}},[t._v("Delete")]),n("vui-button",{on:{click:t.showAsynchronouslyCloseConfirm}},[t._v("Asynchronously close")])],1)]),n("template",{slot:"title"},[t._v("确认对话框")]),n("template",{slot:"describe"},[n("p",[t._v("使用 "),n("code",[t._v("confirm()")]),t._v(" 可以快捷地弹出确认框。")])]),n("template",{slot:"code"},[t._v(t._s(t.code))])],2)},staticRenderFns:[]};var F=n("VU/8")(B,O,!1,function(t){n("33Qr")},null,null).exports,A={components:{Example:l.a},data:function(){return{code:'<template>\n  <div class="example-modal-information">\n    <vui-button type="info" @click="showInfoNotice">消息</vui-button>\n    <vui-button type="warning" @click="showWarningNotice">警告</vui-button>\n    <vui-button type="success" @click="showSuccessNotice">成功</vui-button>\n    <vui-button type="error" @click="showErrorNotice">失败</vui-button>\n  </div>\n</template>\n\n<script>\n  export default {\n    methods: {\n      showInfoNotice() {\n        this.$modal.info({\n          title: "This is a info message",\n          description: "Some descriptions..."\n        });\n      },\n      showWarningNotice() {\n        this.$modal.warning({\n          title: "This is a warning message",\n          description: "Some descriptions..."\n        });\n      },\n      showSuccessNotice() {\n        this.$modal.success({\n          title: "This is a success message",\n          description: "Some descriptions..."\n        });\n      },\n      showErrorNotice() {\n        this.$modal.error({\n          title: "This is a error message",\n          description: "Some descriptions..."\n        });\n      }\n    }\n  };\n<\/script>\n\n<style>\n  .example-modal-information > .vui-button { margin-right:10px; }\n</style>\n'}},methods:{showInfoNotice:function(){this.$modal.info({title:"This is a info message",description:"Some descriptions..."})},showWarningNotice:function(){this.$modal.warning({title:"This is a warning message",description:"Some descriptions..."})},showSuccessNotice:function(){this.$modal.success({title:"This is a success message",description:"Some descriptions..."})},showErrorNotice:function(){this.$modal.error({title:"This is a error message",description:"Some descriptions..."})}}},N={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Example",{attrs:{vertical:"",id:"example-modal-information"}},[n("template",{slot:"source"},[n("div",{staticClass:"example-modal-information"},[n("vui-button",{attrs:{type:"info"},on:{click:t.showInfoNotice}},[t._v("消息")]),n("vui-button",{attrs:{type:"warning"},on:{click:t.showWarningNotice}},[t._v("警告")]),n("vui-button",{attrs:{type:"success"},on:{click:t.showSuccessNotice}},[t._v("成功")]),n("vui-button",{attrs:{type:"error"},on:{click:t.showErrorNotice}},[t._v("失败")])],1)]),n("template",{slot:"title"},[t._v("信息提示")]),n("template",{slot:"describe"},[n("p",[t._v("四种类型的信息提示，只提供一个确定按钮用于关闭。")])]),n("template",{slot:"code"},[t._v(t._s(t.code))])],2)},staticRenderFns:[]};var P=n("VU/8")(A,N,!1,function(t){n("iVTe")},null,null).exports,j={components:{Example:l.a},data:function(){return{code:'<template>\n  <vui-button type="primary" @click="showSuccessNotice">Close automatically after 5s</vui-button>\n</template>\n\n<script>\n  export default {\n    methods: {\n      showSuccessNotice() {\n        let seconds = 5;\n        let modal = this.$modal.success({\n          title: "Friendly Tips",\n          description: "This modal will be closed after " + seconds + " second!"\n        });\n        let interval = setInterval(() => {\n          seconds -= 1;\n          modal.update({\n            description: "This modal will be closed after " + seconds + " second!"\n          });\n        }, 1000);\n\n        setTimeout(() => {\n          clearInterval(interval);\n          interval = null;\n\n          modal.close();\n        }, seconds * 1000);\n      }\n    }\n  };\n<\/script>\n'}},methods:{showSuccessNotice:function(){var t=5,e=this.$modal.success({title:"Friendly Tips",description:"This modal will be closed after "+t+" second!"}),n=setInterval(function(){t-=1,e.update({description:"This modal will be closed after "+t+" second!"})},1e3);setTimeout(function(){clearInterval(n),n=null,e.close()},1e3*t)}}},R={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Example",{attrs:{vertical:"",id:"example-modal-update-and-close"}},[n("template",{slot:"source"},[n("vui-button",{attrs:{type:"primary"},on:{click:t.showSuccessNotice}},[t._v("Close automatically after 5s")])],1),n("template",{slot:"title"},[t._v("更新和关闭")]),n("template",{slot:"describe"},[n("p",[t._v("手动更新和关闭通过 "),n("code",[t._v("this.$modal[type]")]),t._v(" 方式创建的对话框。")])]),n("template",{slot:"code"},[t._v(t._s(t.code))])],2)},staticRenderFns:[]},V=n("VU/8")(j,R,!1,null,null,null).exports,U={mixins:[o.a],components:{Markdown:s.a,ExampleModalBasicUsage:d,ExampleModalHeadlessAndFootless:r,ExampleModalHideCloseButton:u,ExampleModalButtonProps:b,ExampleModalPosition:S,ExampleModalWidth:w,ExampleModalAsynchronouslyClose:C,ExampleModalCustomFooter:$,ExampleModalConfirm:F,ExampleModalInfomation:P,ExampleModalUpdateAndClose:V}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Markdown",[n("h1",[t._v("Modal 对话框")]),n("p",[t._v("模态对话框。")]),n("h2",[t._v("何时使用")]),n("p",[t._v("需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 "),n("code",[t._v("Modal")]),t._v(" 在当前页面正中打开一个对话框，承载相应的操作。另外当需要一个简洁的确认框询问用户时，可以使用精心封装好的 "),n("code",[t._v("this.$modal.confirm()")]),t._v(" 等方法。")]),n("h2",[t._v("代码演示")])]),n("vui-row",{attrs:{gutter:20}},[n("vui-col",{attrs:{span:12}},[n("ExampleModalBasicUsage"),n("ExampleModalHeadlessAndFootless"),n("ExampleModalHideCloseButton"),n("ExampleModalButtonProps"),n("ExampleModalPosition"),n("ExampleModalWidth")],1),n("vui-col",{attrs:{span:12}},[n("ExampleModalAsynchronouslyClose"),n("ExampleModalCustomFooter"),n("ExampleModalConfirm"),n("ExampleModalInfomation"),n("ExampleModalUpdateAndClose")],1)],1),n("Markdown",[n("p",[t._v("除了上述通过标准组件的使用方式，"),n("code",[t._v("Vui")]),t._v(" 还精心封装了一些实例方法，用来创建一次性的轻量级对话框。实例以隐式创建 "),n("code",[t._v("Modal")]),t._v(" 组件的方式在全局创建一个对话框，并在关闭时移除。")])]),n("Markdown",[n("h2",{attrs:{id:"example-api"}},[t._v("API")]),n("h3",[t._v("Modal 属性")]),n("table",{staticClass:"example-api-props"},[n("thead",[n("tr",[n("th",{attrs:{width:"100"}},[t._v("属性")]),n("th",[t._v("说明")]),n("th",{attrs:{width:"150"}},[t._v("类型")]),n("th",{attrs:{width:"150"}},[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("visible")]),n("td",[t._v("对话框是否可见，可以使用 "),n("code",[t._v("v-model")]),t._v(" 双向绑定")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("false")])])]),n("tr",[n("td",[t._v("headless")]),n("td",[t._v("是否隐藏对话框头部内容")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("false")])])]),n("tr",[n("td",[t._v("header")]),n("td",[t._v("对话框头部内容")]),n("td",[t._v("Slot")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("title")]),n("td",[t._v("对话框标题")]),n("td",[t._v("String | Slot")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("footless")]),n("td",[t._v("是否隐藏对话框底部内容")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("false")])])]),n("tr",[n("td",[t._v("footer")]),n("td",[t._v("对话框底部内容")]),n("td",[t._v("Slot")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("showCancelButton")]),n("td",[t._v("是否显示取消按钮")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("true")])])]),n("tr",[n("td",[t._v("cancelButtonProps")]),n("td",[t._v("取消按钮的属性，遵循"),n("a",{attrs:{href:"https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx",target:"_blank"}},[t._v("jsx规范")])]),n("td",[t._v("Object")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("cancelText")]),n("td",[t._v("取消按钮文字")]),n("td",[t._v("String")]),n("td",[n("code",[t._v("取消")])])]),n("tr",[n("td",[t._v("cancelAsync")]),n("td",[t._v("标记取消按钮的点击事件回调函数是否执行异步任务")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("false")])])]),n("tr",[n("td",[t._v("showOkButton")]),n("td",[t._v("是否显示确定按钮")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("true")])])]),n("tr",[n("td",[t._v("okButtonProps")]),n("td",[t._v("确定按钮的属性，遵循"),n("a",{attrs:{href:"https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx",target:"_blank"}},[t._v("jsx规范")])]),n("td",[t._v("Object")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("okText")]),n("td",[t._v("确定按钮文字")]),n("td",[t._v("String")]),n("td",[n("code",[t._v("确定")])])]),n("tr",[n("td",[t._v("okAsync")]),n("td",[t._v("标记确定按钮的点击事件回调函数是否执行异步任务")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("false")])])]),n("tr",[n("td",[t._v("closable")]),n("td",[t._v("是否显示右上角的关闭按钮")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("true")])])]),n("tr",[n("td",[t._v("top")]),n("td",[t._v("对话框距离页面顶部的距离，垂直居中显示对话框时该属性无效")]),n("td",[t._v("String | Number")]),n("td",[n("code",[t._v("100")])])]),n("tr",[n("td",[t._v("centered")]),n("td",[t._v("是否垂直居中显示对话框")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("false")])])]),n("tr",[n("td",[t._v("width")]),n("td",[t._v("对话框宽度。对话框的宽度是响应式的。当屏幕宽度小于 "),n("code",[t._v("768px")]),t._v(" 时，宽度会被强制设为 "),n("code",[t._v("auto")]),t._v("。")]),n("td",[t._v("String | Number")]),n("td",[n("code",[t._v("520")])])]),n("tr",[n("td",[t._v("className")]),n("td",[t._v("对话框样式类名")]),n("td",[t._v("String")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("backdrop")]),n("td",[t._v("是否显示背景遮罩")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("true")])])]),n("tr",[n("td",[t._v("backdropClassName")]),n("td",[t._v("背景遮罩样式类名")]),n("td",[t._v("String")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("clickBackdropToClose")]),n("td",[t._v("点击背景遮罩是否关闭对话框")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("true")])])]),n("tr",[n("td",[t._v("getPopupContainer")]),n("td",[t._v("指定对话框挂载的 HTML 节点")]),n("td",[t._v("Function")]),n("td",[t._v("() => document.body")])])])]),n("h3",[t._v("Modal 事件")]),n("table",{staticClass:"example-api-events"},[n("thead",[n("tr",[n("th",{attrs:{width:"100"}},[t._v("事件名")]),n("th",[t._v("说明")]),n("th",{attrs:{width:"150"}},[t._v("类型")]),n("th",{attrs:{width:"150"}},[t._v("回调参数")])])]),n("tbody",[n("tr",[n("td",[t._v("change")]),n("td",[t._v("显示状态发生变化时触发的事件回调，可以使用 "),n("code",[t._v("v-model")]),t._v(" 双向绑定")]),n("td",[t._v("Function")]),n("td",[n("code",[t._v("visible")])])]),n("tr",[n("td",[t._v("ok")]),n("td",[t._v("点击确定按钮的事件回调，"),n("code",[t._v("okAsync")]),t._v(" 启用模式下回调参数为 "),n("code",[t._v("done")]),t._v(" 函数")]),n("td",[t._v("Function")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("cancel")]),n("td",[t._v("点击取消按钮（或右上角关闭按钮、背景遮罩）的事件回调，"),n("code",[t._v("cancelAsync")]),t._v(" 启用模式下回调参数为 "),n("code",[t._v("done")]),t._v(" 函数")]),n("td",[t._v("Function")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("open")]),n("td",[t._v("对话框打开时触发的事件回调")]),n("td",[t._v("Function")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("afterOpen")]),n("td",[t._v("对话框完全打开时（打开动画完成后）触发的事件回调")]),n("td",[t._v("Function")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("close")]),n("td",[t._v("对话框关闭时触发的事件回调")]),n("td",[t._v("Function")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("afterClose")]),n("td",[t._v("对话框完全关闭时（关闭动画完成后）触发的事件回调")]),n("td",[t._v("Function")]),n("td",[t._v("--")])])])]),n("h3",[t._v("全局方法")]),n("p",[t._v("除了标准组件的使用方式，"),n("code",[t._v("Vui")]),t._v(" 还精心封装了一些实例方法，用来创建一次性的轻量级对话框。实例以隐式创建 "),n("code",[t._v("Modal")]),t._v(" 组件的方式在全局创建一个对话框，并在关闭时移除。您可以直接通过调用以下方法来使用：")]),n("ul",[n("li",[n("code",[t._v("this.$modal.info(options)")])]),n("li",[n("code",[t._v("this.$modal.warning(options)")])]),n("li",[n("code",[t._v("this.$modal.success(options)")])]),n("li",[n("code",[t._v("this.$modal.error(options)")])]),n("li",[n("code",[t._v("this.$modal.confirm(options)")])])]),n("p",[t._v("以上方法隐式的创建及维护 "),n("code",[t._v("Modal")]),t._v(" 组件，参数 "),n("code",[t._v("options")]),t._v(" 是一个对象。具体说明如下：")]),n("table",{staticClass:"example-api-props"},[n("thead",[n("tr",[n("th",{attrs:{width:"100"}},[t._v("选项")]),n("th",[t._v("说明")]),n("th",{attrs:{width:"150"}},[t._v("类型")]),n("th",{attrs:{width:"150"}},[t._v("默认值")])])]),n("tbody",[n("tr",[n("td",[t._v("title")]),n("td",[t._v("对话框标题")]),n("td",[t._v("String | Function")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("description")]),n("td",[t._v("对话框描述内容")]),n("td",[t._v("String | Function")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("icon")]),n("td",[t._v("对话框图标类型")]),n("td",[t._v("String")]),n("td",[t._v("自动")])]),n("tr",[n("td",[t._v("cancelButtonProps")]),n("td",[t._v("取消按钮的属性，遵循"),n("a",{attrs:{href:"https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx",target:"_blank"}},[t._v("jsx规范")]),t._v("，该选项仅在 "),n("code",[t._v("confirm")]),t._v(" 对话框中有效")]),n("td",[t._v("Object")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("cancelText")]),n("td",[t._v("取消按钮文字，该选项仅在 "),n("code",[t._v("confirm")]),t._v(" 对话框中有效")]),n("td",[t._v("String")]),n("td",[n("code",[t._v("取消")])])]),n("tr",[n("td",[t._v("cancelAsync")]),n("td",[t._v("标记取消按钮的点击事件回调函数是否执行异步任务，该选项仅在 "),n("code",[t._v("confirm")]),t._v(" 对话框中有效")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("false")])])]),n("tr",[n("td",[t._v("okButtonProps")]),n("td",[t._v("确定按钮的属性，遵循"),n("a",{attrs:{href:"https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx",target:"_blank"}},[t._v("jsx规范")])]),n("td",[t._v("Object")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("okText")]),n("td",[t._v("确定按钮文字")]),n("td",[t._v("String")]),n("td",[n("code",[t._v("确定")])])]),n("tr",[n("td",[t._v("okAsync")]),n("td",[t._v("标记确定按钮的点击事件回调函数是否执行异步任务")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("false")])])]),n("tr",[n("td",[t._v("top")]),n("td",[t._v("对话框距离页面顶部的距离，垂直居中显示对话框时该属性无效")]),n("td",[t._v("String | Number")]),n("td",[n("code",[t._v("100")])])]),n("tr",[n("td",[t._v("centered")]),n("td",[t._v("是否垂直居中显示对话框")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("false")])])]),n("tr",[n("td",[t._v("width")]),n("td",[t._v("对话框宽度。对话框的宽度是响应式的。当屏幕宽度小于 "),n("code",[t._v("768px")]),t._v(" 时，宽度会被强制设为 "),n("code",[t._v("auto")]),t._v("。")]),n("td",[t._v("String | Number")]),n("td",[n("code",[t._v("520")])])]),n("tr",[n("td",[t._v("className")]),n("td",[t._v("对话框样式类名")]),n("td",[t._v("String")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("backdrop")]),n("td",[t._v("是否显示背景遮罩")]),n("td",[t._v("Boolean")]),n("td",[n("code",[t._v("true")])])]),n("tr",[n("td",[t._v("backdropClassName")]),n("td",[t._v("背景遮罩样式类名")]),n("td",[t._v("String")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("getPopupContainer")]),n("td",[t._v("指定对话框挂载的 HTML 节点")]),n("td",[t._v("Function")]),n("td",[t._v("() => document.body")])]),n("tr",[n("td",[t._v("onOpen")]),n("td",[t._v("对话框打开时触发的事件回调")]),n("td",[t._v("Function")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("onAfterOpen")]),n("td",[t._v("对话框完全打开时（打开动画完成后）触发的事件回调")]),n("td",[t._v("Function")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("onClose")]),n("td",[t._v("对话框关闭时触发的事件回调")]),n("td",[t._v("Function")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("onAfterClose")]),n("td",[t._v("对话框完全关闭时（关闭动画完成后）触发的事件回调")]),n("td",[t._v("Function")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("onCancel")]),n("td",[t._v("点击取消按钮的事件回调，"),n("code",[t._v("cancelAsync")]),t._v(" 启用模式下回调参数为 "),n("code",[t._v("done")]),t._v(" 函数，该选项仅在 "),n("code",[t._v("confirm")]),t._v(" 对话框中有效")]),n("td",[t._v("Function")]),n("td",[t._v("--")])]),n("tr",[n("td",[t._v("onOk")]),n("td",[t._v("点击确定按钮的事件回调，"),n("code",[t._v("okAsync")]),t._v(" 启用模式下回调参数为 "),n("code",[t._v("done")]),t._v(" 函数")]),n("td",[t._v("Function")]),n("td",[t._v("--")])])])]),n("p",[t._v("以上函数调用后，均会返回一个引用，可以通过该引用更新和关闭对话框。")]),n("ul",[n("li",[n("code",[t._v("modal.update(options)")])]),n("li",[n("code",[t._v("modal.close()")])])]),n("p",[t._v("其中 "),n("code",[t._v("modal.upadte")]),t._v(" 方法的参数 "),n("code",[t._v("options")]),t._v(" 同 "),n("code",[t._v("this.$modal[type]")]),t._v(" 方法一致。")])])],1)},staticRenderFns:[]},I=n("VU/8")(U,D,!1,null,null,null);e.default=I.exports},cTOP:function(t,e){},hb0Q:function(t,e){},iVTe:function(t,e){}});
//# sourceMappingURL=9.9bdc8095abd79a4ded25.js.map