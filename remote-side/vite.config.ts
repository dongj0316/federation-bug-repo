// vite.config.js
import Vue from '@vitejs/plugin-vue'
import topLevelAwait from 'vite-plugin-top-level-await'
import federation from "@originjs/vite-plugin-federation";

export default {
    plugins: [
        Vue(),
        topLevelAwait(),
        federation({
            name: 'remote-app',
            filename: 'remoteEntry.js',
            // Modules to expose
            exposes: {
                './Button': './src/Button.vue',
            },
            shared: ['vue']
        })
    ]
}
