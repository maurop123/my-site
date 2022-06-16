import Vue from 'vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGithub } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faGithub)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)