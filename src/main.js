import { createApp } from 'vue'
import App from './App.vue'

import eventBus from "@/plugins/event-bus";

const app = createApp(App)
app.use(eventBus);

app.mount('#app')
