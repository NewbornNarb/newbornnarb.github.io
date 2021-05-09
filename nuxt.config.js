
export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: 'Jesse Atter',
        title: 'Jesse Atter',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '3D Modeller and Texture Artist' },
            { property: 'og:title', content: 'Jesse Atter' }, 
            { property: 'og:description', content: 'Artist and Illustrator' },
            { property: 'og:image', content: 'https://jesseatter.ca/preview.png' },
            { property: 'og:url', content: 'https://jesseatter.ca' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { property: 'og:site_name', content: 'Jesse Atter' },
            { property: 'fb:app_id', content: 'newbornnarb_github_io' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
    ],

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        theme: {
            dark: true,
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        babel: {
            plugins: [
                ["@babel/plugin-proposal-private-methods", { "loose": true }]
            ]
        }
    }
}
