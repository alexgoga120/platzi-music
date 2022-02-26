import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt';
import router from './router'


const emitter = mitt();
const convertMsToMm = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
}

var app = createApp(App).use(router)

app.directive('blur', {
    beforeMount: (el, binding) => {
        if (!binding.value) {
            el.style.filter = 'blur(3px)'
            el.style.cursor = 'not-allowed'
            el.querySelectorAll('button').forEach(button => {
                button.setAttribute('disabled', true)
            })
        }
    }
})


app.config.globalProperties.emitter = emitter
app.config.globalProperties.convertMsToMm = convertMsToMm
app.mount('#app')
