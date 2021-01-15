import SvgIcon from './index.vue'

const install = function(Vue) {
    Vue.component('artms-svg', SvgIcon)
}

if (window.Vue) {
    window['artms-svg'] = permission
    Vue.use(install) // eslint-disable-line
}

SvgIcon.install = install
export default SvgIcon