import "./style.css"
import PrimeVue from "primevue/config"
import Aura from "@primevue/themes/aura"
import "./utils/style/GlobalStyle.css"
import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./routes"

const app = createApp(App)

app.use(router);
app.use(PrimeVue, {
    theme:  {
        preset: Aura,
        options: {
            darkModeSelector: "dark-app"
        }
    }
});

app.mount('#app');
