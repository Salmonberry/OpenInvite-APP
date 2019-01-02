import Vue from 'vue';
import weex from 'weex-vue-render';
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, {
  locale
})

weex.init(Vue);
