import { useI18n } from 'vue-i18n'

type LocaleCode = 'uz' | 'en' | 'ru'

export const useLanguageSwitcher = () => {
	const { locale, setLocale } = useI18n()

	const cookieLocale = useCookie<LocaleCode>('i18n_redirected')

	const languagesList: { name: string; code: LocaleCode; flag: string }[] = [
		{
			name: "O'zbekcha",
			code: 'uz',
			flag: '/svg/flags/uz.svg'
		},
		{
			name: 'English',
			code: 'en',
			flag: '/svg/flags/en.svg'
		},
		{
			name: 'Русский',
			code: 'ru',
			flag: '/svg/flags/ru.svg'
		}
	]

	const currentLanguage = computed(() => languagesList.find((lang) => lang.code === locale.value))

	function changeLocale(_locale: LocaleCode) {
		cookieLocale.value = _locale
		setLocale(_locale)
	}

	return { currentLanguage, languagesList, changeLocale }
}
