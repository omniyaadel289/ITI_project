/*import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')*/

import { createApp } from 'vue'
import router from './routers/index'
import landingcomponent from './components/landingcomponent.vue'

createApp(landingcomponent).use(router).mount('#app');
