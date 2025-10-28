import { useI18n } from 'vue-i18n'

export const useLanguageSwitcher = () => {
	const { locale, setLocale: changeLocaleI18n } = useI18n()

	const languagesList = [
		{
			name: "O'zbekcha",
			code: 'uz'
		},
		{
			name: 'English',
			code: 'en',
			flag: '/static/front/svg/flag/mobile/en.svg'
		},
		{
			name: 'Русский',
			code: 'ru'
		},
		{
			name: 'Ўзбекча',
			code: 'uk'
		}
	]

	console.log(locale)

	const currentLanguage = computed(() => languagesList.find((lang) => lang.code === locale.value))

	async function changeLocale(_locale: string) {
		await changeLocaleI18n(_locale as 'en' | 'ru')
		window.location.reload()
	}

	return { currentLanguage, languagesList, changeLocale }
}
