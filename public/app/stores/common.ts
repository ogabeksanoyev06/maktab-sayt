import { defineStore } from 'pinia'
import { useNuxtApp } from '#app'

export const useCommonStore = defineStore('common', () => {
	const { $axios } = useNuxtApp()

	const fetchStatistics = async (params: { limit?: number; statistic_section__slug?: string } = {}) => {
		const { data } = await $axios.get('common/Statistic/', { params })
		return data
	}

	return {
		fetchStatistics
	}
})
