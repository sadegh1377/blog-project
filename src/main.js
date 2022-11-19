import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faEye,
  faHeart,
  faUser,
  faClock,
  faTrashAlt,
  faEyeSlash,
  faTrash,
  faEdit,
  faReplyAll,
  faInfoCircle,
  faPenToSquare,
  faXmark,
  faCircleUser,
  faGear,
  faRightFromBracket,
  faHeartCirclePlus,
  faPlus
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faEye, faHeart, faUser, faClock, faTrashAlt, faEyeSlash
    , faTrash, faReplyAll, faEdit, faInfoCircle, faPenToSquare, faXmark, faCircleUser, faGear,
    faRightFromBracket, faHeartCirclePlus, faPlus)


Vue.component('font-awesome-icon', FontAwesomeIcon)

// to be changed
const base = axios.create({
  baseURL: "https://api.realworld.io/api/"
});
Vue.prototype.$http = base;


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')