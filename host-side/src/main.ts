import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'

const app = createApp(App)

const RemoteButton = defineAsyncComponent(() => import('remote_app/Button'))
app.component('RemoteButton', RemoteButton)

app.mount('#app')
