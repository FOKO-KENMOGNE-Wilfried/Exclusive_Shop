import "./style.css"
import "./components/style/GlobalStyle.css"
import { createApp } from 'vue'
import App from './App.vue'
import { router } from "./routes"

const app = createApp(App)

app.use(router)

app.mount('#app')
