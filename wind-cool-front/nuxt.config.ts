/*
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2023-08-25 23:27:41
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-13 17:07:51
 * @FilePath: \nuxt\nuxt-test1\nuxt.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            meta: [
                // <meta name="viewport" content="width=device-width, initial-scale=1">
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                }
            ],
            script: [
                {
                    src: '/flexible.js',
                }],
            title: "风微凉官网"
        }

    },
    modules: ['@pinia/nuxt'],
    devServer: {
        host: "0.0.0.0",
        port: 3003
    },
    imports: {
        dirs: [
            // Scan top-level modules
            'composables',
            // ... or scan modules nested one level deep with a specific name and file extension
            'composables/*/*.{ts,js,mjs,mts}',
            // ... or scan all modules within given directory
            'composables/**'
        ]
    },
    runtimeConfig: {
        // 只能在服务端获取的
        isServer: true,
        // 位于public属性里面的键值对，在服务端和客户端都可以获取
        public: {
            apiBase: ""//会根据指令的运行，自动生成对应的数据
        },
        // 只能在服务端获取的
        isConsole: true,
    }
})
