<template>
	<div class="relative">
		<div class="container absolute top-0 bottom-0 left-1/2 -translate-x-1/2 py-8 z-10 pointer-events-none">
			<div
				class="bg-white p-5 pb-0 max-w-[45%] h-full overflow-y-auto rounded-[32px] pointer-events-auto shadow-[0_305px_85px_0_rgba(0,0,0,0.00),0_195px_78px_0_rgba(0,0,0,0.00),0_110px_66px_0_rgba(0,0,0,0.01),0_49px_49px_0_rgba(0,0,0,0.02),0_12px_27px_0_rgba(0,0,0,0.02)]"
			>
				<div class="mb-5">
					<FormInput
						class="!bg-[#F5F7FA] focus-within:!bg-white !rounded-full !py-3"
						:placeholder="$t('searching_for_branches')"
						input-class="!font-medium placeholder:!text-[#676869]"
					>
						<template #suffix>
							<i class="icon-search text-2xl leading-6 text-[#676869]" />
						</template>
					</FormInput>
				</div>
				<!-- Branch Cards -->

				<div class="flex flex-col gap-3">
					<template v-if="isPending">
						<BranchCardLoading v-for="key in 3" :key="key" />
					</template>
					<template v-else>
						<BranchCard
							v-for="(branch, index) in branchesData"
							:key="index"
							:branch="branch"
							:is-active="activeBranchId === branch.id"
							@click="focusOnBranch"
							@clickToTarget="showBranchModal"
						/>
					</template>
				</div>
			</div>
		</div>

		<!-- Map -->
		<div class="yandex-map-container relative z-0">
			<div ref="mapContainer" class="map-container"></div>
		</div>
		<common-branch-modal v-model="branchModal" :branch="selectedBranch" />
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useNuxtApp } from '#app'
import BranchCard from '@/components/UI/BranchCard.vue'
import BranchCardLoading from '@/components/UI/BranchCardLoading.vue'
interface Props {
	center?: [number, number]
	zoom?: number
	width?: string
	height?: string
	apiKey?: string
}

const props = withDefaults(defineProps<Props>(), {
	center: () => [41.327107, 69.234937], // Moscow coordinates
	zoom: 14,
	width: '100%',
	height: 'auto',
	apiKey: '05181cd4-e8a6-43c1-8365-8653993c01c3' // Replace with your actual API key
})
const { $axios } = useNuxtApp()
const branchesData = ref(null)
const isPending = ref(true)

const branchModal = ref(false)
const selectedBranch = ref(null)
const showBranchModal = (branch: any) => {
	selectedBranch.value = branch
	branchModal.value = true
}
const fetchBranches = async () => {
	try {
		isPending.value = true
		const response = await $axios.get('ielts/Branches/')
		branchesData.value = response.data
		isPending.value = false
	} catch (error) {
		console.error('Error fetching branches:', error)
		branchesData.value = null
		isPending.value = false
	}
}

const mapContainer = ref<HTMLElement>()
let map: any = null
let ymaps: any = null
let markers: any[] = []
let activeMarker: any = null
const activeBranchId = ref<number | null>(null)

const createMarkerSVG = (color: string) => {
	return btoa(`
        <svg width="46" height="56" viewBox="0 0 46 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_2380_526" fill="white">
            <path d="M23 0C35.7025 0 46 10.1765 46 22.7295C45.9999 32.3145 39.9959 40.5122 31.502 43.8535L24.7119 55.0391C23.9331 56.3218 22.0708 56.3218 21.292 55.0391L14.502 43.8555C6.00627 40.515 0.000108337 32.3157 0 22.7295C0 10.1766 10.2977 0.00021597 23 0Z"/>
            </mask>
            <path d="M23 0C35.7025 0 46 10.1765 46 22.7295C45.9999 32.3145 39.9959 40.5122 31.502 43.8535L24.7119 55.0391C23.9331 56.3218 22.0708 56.3218 21.292 55.0391L14.502 43.8555C6.00627 40.515 0.000108337 32.3157 0 22.7295C0 10.1766 10.2977 0.00021597 23 0Z" fill="${color}"/>
            <path d="M23 0L23 -2L23 -2L23 0ZM46 22.7295L48 22.7295V22.7295H46ZM31.502 43.8535L30.7698 41.9923L30.1422 42.2392L29.7923 42.8157L31.502 43.8535ZM24.7119 55.0391L26.4215 56.077L26.4216 56.0769L24.7119 55.0391ZM21.292 55.0391L19.5824 56.077L19.5824 56.077L21.292 55.0391ZM14.502 43.8555L16.2115 42.8175L15.8615 42.241L15.2338 41.9942L14.502 43.8555ZM0 22.7295L-2 22.7295L-2 22.7295L0 22.7295ZM23 0V2C34.6203 2 44 11.3033 44 22.7295H46H48C48 9.04968 36.7847 -2 23 -2V0ZM46 22.7295L44 22.7295C43.9999 31.4535 38.5357 38.9374 30.7698 41.9923L31.502 43.8535L32.2341 45.7147C41.456 42.087 47.9999 33.1754 48 22.7295L46 22.7295ZM31.502 43.8535L29.7923 42.8157L23.0023 54.0012L24.7119 55.0391L26.4216 56.0769L33.2116 44.8913L31.502 43.8535ZM24.7119 55.0391L23.0023 54.0011L23.0016 54.0011L21.292 55.0391L19.5824 56.077C21.14 58.6425 24.8639 58.6425 26.4215 56.077L24.7119 55.0391ZM21.292 55.0391L23.0016 54.0011L16.2115 42.8175L14.502 43.8555L12.7924 44.8934L19.5824 56.077L21.292 55.0391ZM14.502 43.8555L15.2338 41.9942C7.46627 38.94 2.0001 31.4546 2 22.7295L0 22.7295L-2 22.7295C-1.99988 33.1768 4.54627 42.09 13.7701 45.7168L14.502 43.8555ZM0 22.7295H2C2 11.3035 11.3799 2.0002 23 2L23 0L23 -2C9.21551 -1.99977 -2 9.04978 -2 22.7295H0Z" fill="url(#paint0_linear_2380_526)" fill-opacity="0.2" mask="url(#path-1-inside-1_2380_526)"/>
            <path d="M34.1529 23.0276C34.3956 22.7874 34.5169 22.6673 34.6671 22.6676C34.8174 22.6679 34.9382 22.7885 35.1799 23.0297L36.3864 24.2341C36.5891 24.4365 36.6905 24.5376 36.7294 24.6736C36.7683 24.8096 36.7374 24.942 36.6757 25.2066C35.2333 31.3884 29.6572 35.9994 23.0352 35.9994C18.0336 35.9994 13.6302 33.3638 11.1498 29.4343C10.947 29.113 10.8456 28.9523 10.8669 28.7624C10.8882 28.5724 11.0299 28.4309 11.3133 28.148L14.2648 25.2018C14.5074 24.9596 14.6287 24.8386 14.7794 24.8386C14.9301 24.8386 15.0514 24.9596 15.294 25.2018L16.0231 25.9296C16.2654 26.1715 16.3865 26.2924 16.537 26.2925C16.6876 26.2926 16.8089 26.1718 17.0515 25.9303L24.3013 18.7137C24.544 18.4722 24.6653 18.3515 24.8158 18.3516C24.9664 18.3517 25.0875 18.4726 25.3298 18.7144L31.3799 24.7537C31.6216 24.995 31.7424 25.1156 31.8927 25.1159C32.0429 25.1162 32.1643 24.9961 32.4069 24.7559L34.1529 23.0276Z" fill="white"/>
            <path opacity="0.3" d="M14.0025 21.4465C13.9693 21.8549 13.9527 22.059 13.8851 22.2054C13.8175 22.3518 13.6923 22.4775 13.4419 22.7288L10.1496 26.0332C9.96456 26.2189 9.87203 26.3118 9.7717 26.2866C9.67138 26.2615 9.63448 26.1385 9.56068 25.8927C9.19195 24.6642 9 23.3556 9 22.0121C9 14.2789 15.2902 8 23.0373 8C30.4688 8 36.3257 13.5654 36.9742 20.6616C37.0089 21.0422 37.0263 21.2324 36.9107 21.2866C36.7951 21.3407 36.6574 21.2032 36.3819 20.9283L35.1841 19.7326C34.9415 19.4904 34.8202 19.3693 34.6695 19.3693C34.5188 19.3693 34.3975 19.4904 34.1549 19.7326L32.6998 21.1851C32.4476 21.4369 32.3214 21.5627 32.2139 21.5256C32.1063 21.4884 32.0842 21.3056 32.04 20.9401C31.4967 16.4429 27.6774 12.94 23.0373 12.94C18.2275 12.94 14.3801 16.8015 14.0025 21.4465Z" fill="white"/>
            <defs>
            <linearGradient id="paint0_linear_2380_526" x1="23" y1="0" x2="23" y2="56.0011" gradientUnits="userSpaceOnUse">
            <stop offset="0.17354" stop-color="white"/>
            <stop offset="0.66057" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            </defs>
        </svg>
    `)
}

const resetAllMarkers = () => {
	markers.forEach((marker) => {
		marker.options.set('iconImageHref', 'data:image/svg+xml;base64,' + createMarkerSVG('#0154F8'))
	})
}

const focusOnBranch = (branch: any) => {
	if (activeBranchId.value === branch.id) {
		showBranchModal(branch)
		return
	}
	if (!map || !branch) return

	// Set active branch
	activeBranchId.value = branch.id

	// Find coordinates for the branch
	const lat = branch.latitude || branch.lat || branch.coordinates?.lat
	const lng = branch.longitude || branch.lng || branch.coordinates?.lng

	if (lat && lng) {
		// Reset all markers to blue
		resetAllMarkers()

		// Find the corresponding marker and make it red
		const targetMarker = markers.find((marker) => {
			const markerCoords = marker.geometry.getCoordinates()
			return Math.abs(markerCoords[0] - lat) < 0.0001 && Math.abs(markerCoords[1] - lng) < 0.0001
		})

		if (targetMarker) {
			targetMarker.options.set('iconImageHref', 'data:image/svg+xml;base64,' + createMarkerSVG('#FE014D'))
			activeMarker = targetMarker
		}

		// Focus on the branch location
		map.setCenter([lat, lng], 16, {
			duration: 500
		})
	}
}

const initMap = () => {
	if (!window.ymaps) {
		console.error('Yandex Maps API not loaded')
		return
	}

	ymaps = window.ymaps
	ymaps.ready(() => {
		if (mapContainer.value) {
			map = new ymaps.Map(mapContainer.value, {
				center: props.center,
				zoom: props.zoom,
				controls: [],
				copyrights: false,
				suppressMapOpenBlock: true
			})

			// Add markers from API data
			console.log('Branches data for markers:', branchesData.value)

			if (branchesData.value && Array.isArray(branchesData.value)) {
				branchesData.value.forEach((branch: any, index: number) => {
					console.log(`Processing branch ${index}:`, branch)

					// Check for different possible coordinate field names
					const lat = branch.latitude || branch.lat || branch.coordinates?.lat
					const lng = branch.longitude || branch.lng || branch.coordinates?.lng

					if (lat && lng) {
						console.log(`Adding marker at: ${lat}, ${lng}`)

						// Create custom marker based on Figma design
						const customMarker = new ymaps.Placemark(
							[lat, lng],
							{
								iconContent: `
                                <div style="
                                    position: absolute;
                                    top: -4px;
                                    left: 50%;
                                    transform: translateX(-50%) translateY(-100%);
                                    background: rgba(255, 255, 255, 0.9);
                                    backdrop-filter: blur(6px);
                                    padding: 8px 12px;
                                    border-radius: 100px;
                                    font-family: 'Inter', sans-serif;
                                    font-size: 13px;
                                    font-weight: 400;
                                    color: #1C2329;
                                    white-space: nowrap;
                                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                                    pointer-events: none;
                                ">
                                    <div style="
                                        line-height: 9px;
                                        height: 9px;
                                    ">
                                        ${branch.name || 'Everest Branch'}
                                    </div>
                                </div>
                            `
							},
							{
								iconLayout: 'default#imageWithContent',
								iconImageHref: 'data:image/svg+xml;base64,' + createMarkerSVG('#0154F8'),
								iconImageSize: [46, 56],
								iconImageOffset: [-23, -56],
								iconContentOffset: [0, 0],
								iconContentSize: [46, 56]
							}
						)

						// Add click event to marker
						customMarker.events.add('click', () => {
							if (activeBranchId.value === branch.id) {
								showBranchModal(branch)
								return
							}
							// Set active branch ID to make card active
							activeBranchId.value = branch.id

							// Reset all markers to blue
							resetAllMarkers()

							// Change clicked marker to red
							customMarker.options.set('iconImageHref', 'data:image/svg+xml;base64,' + createMarkerSVG('#FE014D'))

							// Focus on the clicked marker
							map.setCenter([lat, lng], 16, {
								duration: 500
							})

							// Store active marker
							activeMarker = customMarker
						})

						// Store marker in array
						markers.push(customMarker)

						map.geoObjects.add(customMarker)
					} else {
						console.log(`Branch ${index} missing coordinates:`, { lat, lng })
					}
				})
			} else {
				console.log('No valid branches data found')
				// Add a fallback marker to test if map is working
				const fallbackMarker = new ymaps.Placemark(
					props.center,
					{
						balloonContent: 'Fallback marker - API data not available'
					},
					{
						preset: 'islands#blueDotIcon'
					}
				)
				map.geoObjects.add(fallbackMarker)
			}
		}
	})
}

const loadYandexMapsAPI = () => {
	if (window.ymaps) {
		initMap()
		return
	}

	const script = document.createElement('script')
	script.src = `https://api-maps.yandex.ru/2.1/?apikey=${props.apiKey}&lang=en_US`
	script.async = true
	script.onload = () => {
		initMap()
	}
	script.onerror = () => {
		console.error('Failed to load Yandex Maps API')
	}
	document.head.appendChild(script)
}

onMounted(async () => {
	await fetchBranches()
	console.log(branchesData.value)
	loadYandexMapsAPI()
})

onUnmounted(() => {
	if (map) {
		map.destroy()
	}
})

// Extend Window interface for TypeScript
declare global {
	interface Window {
		ymaps: any
	}
}
</script>

<style scoped>
/* Map Container */
.yandex-map-container {
	width: v-bind(width);
	aspect-ratio: 1440 / 700;
	height: auto;
	max-height: 700px;
}

.map-container {
	width: 100%;
	height: 100%;
	border-radius: 8px;
	overflow: hidden;
}
</style>
