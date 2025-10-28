// import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	app: {
		pageTransition: { name: 'fade', mode: 'out-in' },
		layoutTransition: { name: 'fade', mode: 'out-in' }
	},
	css: ['~/assets/css/main.css'],

	modules: [
		'@nuxtjs/i18n',
		'@nuxt/eslint',
		[
			'@pinia/nuxt',
			{
				autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
			}
		],
		'@nuxt/icon',
		'@nuxt/ui'
	],
	i18n: {
		locales: [
			{
				code: 'uz',
				iso: 'uz-UZ',
				file: 'uz.json'
			},
			{
				code: 'en',
				iso: 'en-US',
				file: 'en.json'
			},
			{
				code: 'ru',
				iso: 'ru-RU',
				file: 'ru.json'
			}
		],
		defaultLocale: 'uz',
		strategy: 'prefix_and_default',
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'locale'
		},
		langDir: 'locales',
		compilation: {
			strictMessage: false
		}
	},

	// vite: {
	// 	plugins: [tailwindcss()]
	// },
	icon: {
		size: '20px',
		serverBundle: {
			collections: ['lucide', 'heroicons']
		}
	}
})
