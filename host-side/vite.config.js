// vite.config.js
import Vue from '@vitejs/plugin-vue'
import topLevelAwait from 'vite-plugin-top-level-await'
import federation from "@originjs/vite-plugin-federation";

export default {
    base: '/app/',
    plugins: [
        Vue(),
        topLevelAwait(),
        federation({
            name: 'host-app',
            remotes: {
                remote_app: "http://localhost:5002/assets/remoteEntry.js",
            },
            shared: ['vue']
        })
    ]
}
