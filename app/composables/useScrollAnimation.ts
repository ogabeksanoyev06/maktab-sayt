import { ref, onMounted, onUnmounted } from 'vue'

// Global observer instance to reduce memory usage
let globalObserver: IntersectionObserver | null = null
const observedElements = new Map<HTMLElement, () => void>()

const createGlobalObserver = () => {
	if (globalObserver) return globalObserver

	globalObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				const callback = observedElements.get(entry.target as HTMLElement)
				if (callback) {
					callback()
				}
			})
		},
		{
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px'
		}
	)

	return globalObserver
}

export const useScrollAnimation = (
	options: {
		threshold?: number
		rootMargin?: string
		triggerOnce?: boolean
		delay?: number
	} = {}
) => {
	const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true, delay = 0 } = options

	const elementRef = ref<HTMLElement | null>(null)
	const isVisible = ref(false)
	const hasAnimated = ref(false)

	const handleIntersection = () => {
		if (elementRef.value) {
			const rect = elementRef.value.getBoundingClientRect()
			const isIntersecting = rect.top < window.innerHeight && rect.bottom > 0

			if (isIntersecting && !isVisible.value) {
				setTimeout(() => {
					isVisible.value = true
					if (triggerOnce) {
						hasAnimated.value = true
						// Remove from observer if triggerOnce is true
						if (globalObserver && elementRef.value) {
							globalObserver.unobserve(elementRef.value)
							observedElements.delete(elementRef.value)
						}
					}
				}, delay)
			} else if (!triggerOnce && !isIntersecting) {
				isVisible.value = false
			}
		}
	}

	onMounted(() => {
		if (elementRef.value) {
			const observer = createGlobalObserver()
			observedElements.set(elementRef.value, handleIntersection)
			observer.observe(elementRef.value)
		}
	})

	onUnmounted(() => {
		if (elementRef.value && globalObserver) {
			globalObserver.unobserve(elementRef.value)
			observedElements.delete(elementRef.value)
		}
	})

	return {
		elementRef,
		isVisible,
		hasAnimated
	}
}

// Enhanced composable for staggered animations - Optimized
export const useStaggeredScrollAnimation = (
	options: {
		threshold?: number
		rootMargin?: string
		triggerOnce?: boolean
		staggerDelay?: number
		childSelector?: string
	} = {}
) => {
	const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true, staggerDelay = 80, childSelector = '.animate-child' } = options

	const containerRef = ref<HTMLElement | null>(null)
	const isVisible = ref(false)
	const hasAnimated = ref(false)

	const handleIntersection = () => {
		if (containerRef.value) {
			const rect = containerRef.value.getBoundingClientRect()
			const isIntersecting = rect.top < window.innerHeight && rect.bottom > 0

			if (isIntersecting && !isVisible.value) {
				isVisible.value = true
				if (triggerOnce) {
					hasAnimated.value = true
				}

				// Animate children with stagger - Optimized with requestAnimationFrame
				const children = containerRef.value.querySelectorAll(childSelector)
				children.forEach((child, index) => {
					requestAnimationFrame(() => {
						setTimeout(() => {
							child.classList.add('animate-in')
						}, index * staggerDelay)
					})
				})
			} else if (!triggerOnce && !isIntersecting) {
				isVisible.value = false
				// Reset children animation
				const children = containerRef.value.querySelectorAll(childSelector)
				children.forEach((child) => {
					child.classList.remove('animate-in')
				})
			}
		}
	}

	onMounted(() => {
		if (containerRef.value) {
			const observer = createGlobalObserver()
			observedElements.set(containerRef.value, handleIntersection)
			observer.observe(containerRef.value)
		}
	})

	onUnmounted(() => {
		if (containerRef.value && globalObserver) {
			globalObserver.unobserve(containerRef.value)
			observedElements.delete(containerRef.value)
		}
	})

	return {
		containerRef,
		isVisible,
		hasAnimated
	}
}
