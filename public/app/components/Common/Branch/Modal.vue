<template>
    <UIModal v-model="value" :title="branch?.name" bodyClass="overflow-hidden">
        <div class="pb-4 sm:pb-5 px-4 sm:px-6">
            <Swiper v-bind="settings" class="!overflow-visible">
                <SwiperSlide v-for="(item, key) in branch?.images" :key="key">
                    <img :src="item.image" :alt="branch?.name" class="w-full aspect-square object-cover rounded-xl sm:rounded-3xl flex-shrink-0" />
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="flex flex-col gap-5 px-4 sm:px-6 pb-4 sm:pb-6">
            <div class="border border-gray-1 rounded-[24px] flex flex-col items-start gap-3 p-4">
                <a :href="mapLink" target="_blank" class="flex items-center gap-1 group">
                    <span class="size-7 flex-center bg-[#FE014D1A] text-red rounded-full icon-location flex-shrink-0 p-1"></span>
                    <span class="text-base !leading-130 text-[#1C2329] transition-300 group-hover:text-red">{{ branch?.address }}</span>
                </a>
                <a :href="mapLink" target="_blank" class="w-full h-[160px] rounded-[20px] overflow-hidden relative bg-no-repeat bg-center bg-cover" :style="`background-image: url('https://static-maps.yandex.ru/1.x/?lang=ru-RU&ll=${branch.longitude},${branch.latitude}&z=14&l=map')`">
                    <svg class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-full" width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2383_273)">
                        <path d="M11.5713 0.951172C17.62 0.951172 22.5232 5.79697 22.5234 11.7744C22.5234 16.3375 19.6651 20.2381 15.6221 21.8301L12.3867 27.1611C12.0159 27.7719 11.1287 27.7718 10.7578 27.1611L7.52151 21.8311C3.47801 20.2393 0.61911 16.3378 0.61911 11.7744C0.61941 5.79707 5.52271 0.951272 11.5713 0.951172Z" fill="#FE014D"/>
                        <mask id="mask0_2383_273" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="23" height="28">
                        <path d="M11.5713 0.951172C17.62 0.951172 22.5232 5.79697 22.5234 11.7744C22.5234 16.3375 19.6651 20.2381 15.6221 21.8301L12.3867 27.1611C12.0159 27.7719 11.1287 27.7718 10.7578 27.1611L7.52151 21.8311C3.47801 20.2393 0.61911 16.3378 0.61911 11.7744C0.61941 5.79707 5.52271 0.951272 11.5713 0.951172Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0_2383_273)">
                        <path d="M15.6221 21.8294L15.2731 20.9432L14.9744 21.0608L14.8079 21.3353L15.6221 21.8294ZM7.52151 21.8304L8.33561 21.3361L8.16901 21.0617L7.87031 20.9442L7.52151 21.8304ZM11.5713 0.950457V1.90286C17.1046 1.90286 21.5708 6.33276 21.5711 11.7738L22.5234 11.7737H23.4758C23.4756 5.25966 18.1353 -0.00195312 11.5713 -0.00195312V0.950457ZM22.5234 11.7737L21.5711 11.7738C21.5711 15.9267 18.97 19.4876 15.2731 20.9432L15.6221 21.8294L15.971 22.7155C20.3602 20.9873 23.4758 16.747 23.4758 11.7737H22.5234ZM15.6221 21.8294L14.8079 21.3353L11.5725 26.6663L12.3867 27.1604L13.2008 27.6548L16.4362 22.3235L15.6221 21.8294ZM12.3867 27.1604L11.5725 26.6663L10.7578 27.1604L9.94371 27.6547C10.6854 28.876 12.459 28.8763 13.2008 27.6548L12.3867 27.1604ZM10.7578 27.1604L11.5725 26.6663L8.33561 21.3361L7.52151 21.8304L6.70741 22.3246L9.94371 27.6547L10.7578 27.1604ZM7.52151 21.8304L7.87031 20.9442C4.17311 19.4888 1.57151 15.9269 1.57151 11.7737H0.61911H-0.333191C-0.333191 16.7473 2.78291 20.9885 7.17261 22.7165L7.52151 21.8304ZM0.61911 11.7737H1.57151C1.57171 6.33276 6.03811 1.90286 11.5713 1.90286V0.950457V-0.00195312C5.00741 -0.00184312 -0.332991 5.25976 -0.333191 11.7737H0.61911Z" fill="url(#paint0_linear_2383_273)" fill-opacity="0.2"/>
                        </g>
                        <path d="M16.8824 11.2032C16.998 11.0889 17.0557 11.0317 17.1273 11.0318C17.1988 11.032 17.2564 11.0894 17.3714 11.2043L17.946 11.7778C18.0425 11.8741 18.0908 11.9223 18.1093 11.9871C18.1278 12.0518 18.1131 12.1148 18.0837 12.2409C17.3969 15.1846 14.7416 17.3803 11.5883 17.3803C9.2066 17.3803 7.1097 16.1252 5.9285 14.2541C5.832 14.1011 5.7837 14.0246 5.7938 13.9341C5.804 13.8436 5.8714 13.7763 6.0064 13.6415L7.4119 12.2386C7.5274 12.1233 7.5852 12.0656 7.6569 12.0656C7.7287 12.0656 7.7864 12.1233 7.9019 12.2386L8.2491 12.5852C8.3645 12.7003 8.4222 12.7579 8.4939 12.758C8.5656 12.758 8.6233 12.7005 8.7389 12.5855L12.1912 9.14896C12.3067 9.03396 12.3645 8.97646 12.4362 8.97656C12.5079 8.97656 12.5655 9.03416 12.6809 9.14936L15.5619 12.0252C15.677 12.1401 15.7346 12.1975 15.8061 12.1977C15.8777 12.1978 15.9354 12.1406 16.051 12.0262L16.8824 11.2032Z" fill="white"/>
                        <path opacity="0.5" d="M7.28688 10.45C7.27108 10.6444 7.26319 10.7417 7.23099 10.8114C7.19879 10.8811 7.13919 10.9409 7.01999 11.0606L5.45218 12.6341C5.36408 12.7225 5.31999 12.7668 5.27229 12.7548C5.22449 12.7428 5.20689 12.6843 5.17179 12.5672C4.99619 11.9822 4.90479 11.3591 4.90479 10.7193C4.90479 7.03677 7.90008 4.04688 11.5892 4.04688C15.128 4.04688 17.917 6.69708 18.2258 10.0762C18.2424 10.2574 18.2507 10.348 18.1956 10.3738C18.1406 10.3996 18.075 10.3341 17.9438 10.2032L17.3734 9.63378C17.2579 9.51848 17.2001 9.46078 17.1284 9.46078C17.0566 9.46078 16.9988 9.51848 16.8833 9.63378L16.1904 10.3255C16.0703 10.4454 16.0102 10.5053 15.959 10.4876C15.9078 10.4699 15.8973 10.3829 15.8762 10.2088C15.6175 8.06727 13.7988 6.39927 11.5892 6.39927C9.29878 6.39927 7.46678 8.23798 7.28688 10.45Z" fill="white"/>
                        </g>
                        <defs>
                        <linearGradient id="paint0_linear_2383_273" x1="11.5713" y1="0.950457" x2="11.5713" y2="27.6185" gradientUnits="userSpaceOnUse">
                        <stop offset="0.17354" stop-color="white"/>
                        <stop offset="0.66057" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                        <clipPath id="clip0_2383_273">
                        <rect width="23" height="28" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </a>
                <div v-if="branch.near_to_metro" class="border border-gray-2 rounded-full flex items-center gap-2 px-3 py-[7px]">
                    <div class="flex-y-center gap-1.5">
                        <span class="icon-metro text-blue size-4 flex-shrink-0 aspect-square" />
                        <span class="leading-130 font-medium">{{ branch?.metro_name }}</span>
                    </div>
                    <div class="w-px h-4 bg-gray-2"></div>
                    <div class="flex-y-center gap-1.5">
                        <span class="icon-person text-blue size-4 flex-shrink-0 aspect-square" />
                        <span class="leading-130 font-medium">{{ meterToKilometer(branch?.length_from_metro || 0) }}</span>
                    </div>
                </div>
            </div>
            <div v-if="branch?.phone || branch?.secondary_phone || branch?.telegram_channel" class="border border-gray-1 rounded-[24px] flex flex-col items-start gap-4 p-4">
                <a v-if="branch?.phone" :href="`tel:${branch?.phone}`" target="_blank" class="flex items-center gap-2">
                    <span class="size-8 flex-center bg-[#29CC5F] text-white rounded-full icon-phone text-xl leading-5"></span>
                    <span class="text-base !leading-130">{{ formatPhoneNumber(branch?.phone) }}</span>
                </a>
                <a v-if="branch?.secondary_phone" :href="`tel:${branch?.secondary_phone}`" target="_blank" class="flex items-center gap-2">
                    <span class="size-8 flex-center bg-[#29CC5F] text-white rounded-full icon-phone text-xl leading-5"></span>
                    <span class="text-base !leading-130">{{ formatPhoneNumber(branch?.secondary_phone) }}</span>
                </a>
                <a v-if="branch?.telegram_channel" :href="`https://t.me/everestofficial`" target="_blank" class="flex items-center gap-2">
                    <span class="size-8 flex-center bg-[#33AFED] text-white rounded-full icon-telegram text-xl leading-5"></span>
                    <span class="text-base !leading-130">{{ branch?.telegram_channel }}</span>
                </a>
            </div>
        </div>
    </UIModal>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const settings = {
	modules: [],
	spaceBetween: 8,
	breakpoints: {
		0: { slidesPerView: 4 },
        640: { slidesPerView: 6 },
		1024: { slidesPerView: 5 }
	}
}
const value = defineModel<boolean>('modelValue', { required: true })

const props =defineProps<{
    branch: any
}>()

const mapLink = computed(() => `https://yandex.ru/maps/?ll=${props.branch.longitude},${props.branch.latitude}&z=16&l=map&pt=${props.branch.longitude},${props.branch.latitude},pm2rdm`)
</script>