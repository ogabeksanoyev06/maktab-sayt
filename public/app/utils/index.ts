export function getNextPageOffset(lastPage: { next: string; results: any[] }, allPages: any[], limit: number = 8) {
	// Check if we have a next URL in the response
	if (lastPage.next) {
		try {
			const nextUrl = new URL(lastPage.next)
			const offset = nextUrl.searchParams.get('offset')
			return offset ? parseInt(offset) : undefined
		} catch (e) {
			console.warn('Invalid next URL:', lastPage.next)
		}
	}

	// Fallback: check if last page has fewer items than limit
	const results = lastPage.results
	if (Array.isArray(results) && results.length < limit) {
		return undefined // No more pages
	}

	// Calculate next offset based on current pages
	return allPages.length * limit
}

export function getYoutubeShortsThumbnail(url?: string, quality: 'small' | 'medium' | 'large' = 'large'): string {
	if (!url) return ''

	const regex = /(?:youtube\.com\/(?:shorts\/|watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
	const match = url.match(regex)
	if (!match) return ''

	const id = match[1]

	switch (quality) {
		case 'small':
			return `https://i.ytimg.com/vi/${id}/default.jpg`
		case 'large':
			return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
		case 'medium':
		default:
			return `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
	}
}

export function getShortsVideoId(url?: string): string {
	if (!url) return ''

	const regex = /(?:youtube\.com\/(?:shorts\/|watch\?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
	const match = url.match(regex)
	return match ? match[1] : ''
}

export function isYouTubeShorts(url?: string): boolean {
	if (!url) return false
	return url.includes('youtube.com/shorts/') || url.includes('youtu.be/')
}

export function formatMoneyDecimal(number: any, fix = 0) {
	const option = {
		maximumFractionDigits: fix,
		minimumFractionDigits: fix
	}

	const formatted = number ? new Intl.NumberFormat('ru-RU', option).format(number) : '0'

	return `${formatted} UZS`
}

export const VIDEO_TYPES = {
	TALKS: 'talks',
	INTERVIEWS: 'interviews',
	FEEDBACK: 'feedback',
	GO_GLOBAL_FEEDBACK: 'go_global_feedback',
	KIDS_FEEDBACK: 'kids_feedback',
	OTHER: 'other',
	INSTAGRAM: 'instagram'
}

export function meterToKilometer(meter: number): string {
	if (meter > 1000) {
		return `${(meter / 1000).toFixed(1)} km`
	}
	return `${meter} m`
}

export function formatPhoneNumber(phone: string): string {
	return phone
		.trim()
		.replace(/\D/g, '')
		.replace(/(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, '+$1 ($2) $3-$4-$5')
}
