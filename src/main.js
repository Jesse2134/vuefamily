// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// 完整引入 element-ui 和 样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

// 第三方丰富的图标
import 'font-awesome/css/font-awesome.min.css';

// 国际化语言
// import locale from 'element-ui/lib/locale/lang/en';

import App from './App';
import router from './router';
import Dict from './dict';

Vue.use(ElementUI, {
  // locale
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
});

Vue.prototype.Dict = Dict;
