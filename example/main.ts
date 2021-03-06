
import { createApp } from "vue";
// @ts-ignore
import App from "./App.vue";
import Vue3TrackPlush from "vue3-track-plush"
const app = createApp(App)
app.use(Vue3TrackPlush, {
    // baseURL: "<接口域名>",
    // url: "<接口地址>",
    // projectName: "项目名称"
    baseURL: "http://d.daily.vdian.net",
    url: "/api/action/record",
    projectName: "项目名称",
})
app.mount("#app");