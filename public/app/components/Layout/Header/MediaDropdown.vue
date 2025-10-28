<template>
	<UIDropdown
		:show="showDropdown"
		@toggle="handleDropdownToggle"
		:head-class="`py-1 px-2.5 rounded-full transition-all duration-300 font-medium leading-130 text-sm hover:text-blue border border-transparent flex items-center gap-0.5 cursor-pointer ${showDropdown ? '!bg-[#0154F8]/10 !text-blue !border-[#0154F8]/20' : ''} ${theme !== 'white' ? 'text-white' : 'text-gray-6'}`"
		body-class="!min-w-[280px] !max-w-[320px] !left-1/2 !-translate-x-1/2"
	>
		<template #head>
			<span :class="showDropdown ? 'text-blue' : theme !== 'white' ? 'text-white' : 'text-gray-6'">{{ $t('media') }}</span>
			<i
				class="icon-chevron text-base leading-4 transition-transform duration-300"
				:class="[{ 'rotate-180': showDropdown }, showDropdown ? 'text-blue' : theme !== 'white' ? 'text-[#606569]' : 'text-gray-4']"
			/>
		</template>

		<template #body>
			<div class="px-4">
				<div class="bg-white rounded-[30px] border border-[#F5F7FA] shadow-[0_30px_70px_-10px_rgba(39,48,56,0.20)] p-5 -mt-2 min-w-[300px]">
					<div class="flex flex-col gap-4">
						<!-- IELTS Results -->
						<nuxt-link-locale to="/results/ielts" class="group w-full p-3 flex justify-between bg-white border border-[#EBEDF0] rounded-[12px] hover:border-[rgba(254,1,77,0.12)]">
							<div class="flex flex-col gap-3 items-start">
								<svg
									class="transition-all duration-200 grayscale group-hover:grayscale-0"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
								>
									<g clip-path="url(#clip0_media_ielts)">
										<path
											d="M17.4373 10.5C15.1631 10.5 13.3125 12.3506 13.3125 14.6248C13.3125 16.8991 15.1631 18.7497 17.4373 18.7497C19.7116 18.7497 21.5622 16.8991 21.5622 14.6248C21.5622 12.3506 19.7116 10.5 17.4373 10.5ZM19.1862 13.963C17.9871 15.7619 18.3271 15.2519 17.6862 16.2129C17.456 16.5582 16.99 16.6498 16.6461 16.4206L15.5212 15.6706C15.1766 15.4409 15.0838 14.9755 15.3135 14.6305C15.5432 14.286 16.0086 14.1931 16.3536 14.4228L16.8542 14.7566C18.0504 12.9627 17.986 13.0123 18.1873 12.8976C18.8704 12.5024 19.6252 13.3037 19.1862 13.963Z"
											fill="url(#paint0_media_ielts)"
										/>
										<path
											d="M14.0625 23.2497V19.1221C16.0635 20.6275 18.8141 20.6254 20.8122 19.1221V23.2497C20.8122 23.8259 20.1879 24.1861 19.6901 23.9008L17.4374 22.6137L15.1846 23.9008C14.6849 24.1865 14.0625 23.8243 14.0625 23.2497Z"
											fill="url(#paint1_media_ielts)"
										/>
										<path
											d="M18.9371 9.20309V1.62885C18.9371 0.730754 18.2064 0 17.3083 0H4.06659C3.1685 0 2.43774 0.730754 2.43774 1.62885V18.9954C2.43774 19.8935 3.1685 20.6242 4.06659 20.6242H12.5624C12.5624 17.3969 12.5574 17.5966 12.5741 17.4481C10.0635 13.1439 14.0612 7.84902 18.9371 9.20309ZM6.93758 3.74986H13.3123C13.7267 3.74986 14.0623 4.08547 14.0623 4.49983C14.0623 4.91419 13.7267 5.2498 13.3123 5.2498H6.93758C6.52322 5.2498 6.18761 4.91419 6.18761 4.49983C6.18761 4.08547 6.52322 3.74986 6.93758 3.74986ZM10.6874 11.2496H6.93758C6.52322 11.2496 6.18761 10.914 6.18761 10.4996C6.18761 10.0852 6.52322 9.74963 6.93758 9.74963H10.6874C11.1018 9.74963 11.4374 10.0852 11.4374 10.4996C11.4374 10.914 11.1018 11.2496 10.6874 11.2496ZM6.93758 8.24969C6.52322 8.24969 6.18761 7.91408 6.18761 7.49972C6.18761 7.08536 6.52322 6.74975 6.93758 6.74975H13.3123C13.7267 6.74975 14.0623 7.08536 14.0623 7.49972C14.0623 7.91408 13.7267 8.24969 13.3123 8.24969H6.93758Z"
											fill="url(#paint2_media_ielts)"
										/>
									</g>
									<defs>
										<linearGradient id="paint0_media_ielts" x1="17.4373" y1="10.5" x2="17.4373" y2="24.0006" gradientUnits="userSpaceOnUse">
											<stop stop-color="#6395F8" />
											<stop offset="1" stop-color="#0154F8" />
										</linearGradient>
										<linearGradient id="paint1_media_ielts" x1="17.4373" y1="10.5" x2="17.4373" y2="24.0006" gradientUnits="userSpaceOnUse">
											<stop stop-color="#6395F8" />
											<stop offset="1" stop-color="#0154F8" />
										</linearGradient>
										<linearGradient id="paint2_media_ielts" x1="10.6874" y1="0" x2="10.6874" y2="20.6242" gradientUnits="userSpaceOnUse">
											<stop stop-color="#FE6693" />
											<stop offset="1" stop-color="#FE014D" />
										</linearGradient>
										<clipPath id="clip0_media_ielts">
											<rect width="24" height="24" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<span class="text-[#1C2329] text-sm font-bold">IELTS Results</span>
							</div>
							<i class="icon-arrow text-gray-4 text-lg transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:!text-[#FE014D] group-hover:translate-x-1"></i>
						</nuxt-link-locale>

						<!-- Multi-Level Results -->
						<nuxt-link-locale
							to="/results/multi-level"
							class="group w-full p-3 flex justify-between bg-white border border-[#EBEDF0] rounded-[12px] hover:border-[rgba(254,1,77,0.12)]"
						>
							<div class="flex flex-col gap-3 items-start">
								<svg
									class="transition-all duration-200 grayscale group-hover:grayscale-0"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
								>
									<g clip-path="url(#clip0_media_multi)">
										<path
											d="M11.0162 0.0908438C11.6537 -0.0302813 12.346 -0.0302813 12.9835 0.0908438C13.651 0.217219 14.2409 0.548344 15.754 1.43109L21.7716 4.94109C22.516 5.37572 23.0327 5.67759 23.401 5.93072C23.7782 6.19022 23.8907 6.32784 23.9271 6.39309C24.0242 6.56709 24.0242 6.71859 23.9271 6.89297C23.8907 6.95822 23.7782 7.09547 23.401 7.35534C23.0327 7.60809 22.516 7.91034 21.7716 8.34459L15.754 11.8546C14.2405 12.7373 13.651 13.0688 12.9835 13.1952C12.3333 13.316 11.6664 13.316 11.0162 13.1952C10.3487 13.0688 9.75922 12.7377 8.24572 11.8546L2.2281 8.34459C1.48372 7.91034 0.966975 7.60809 0.598725 7.35534C0.221475 7.09584 0.108975 6.95822 0.0725996 6.89259C-0.0245254 6.71822 -0.0245254 6.56672 0.0725996 6.39272C0.108975 6.32709 0.221475 6.18984 0.598725 5.93034C0.966975 5.67722 1.48372 5.37534 2.2281 4.94109L8.24572 1.43109C9.75922 0.547969 10.3487 0.216844 11.0162 0.0904687V0.0908438Z"
											fill="url(#paint0_media_multi)"
										/>
										<path
											d="M23.3899 11.1856C23.046 10.9411 22.5735 10.6531 21.9064 10.25L16.4906 13.4097C15.1477 14.1935 14.2942 14.6911 13.3031 14.879C12.4418 15.0399 11.5582 15.0399 10.6969 14.879C9.70575 14.6915 8.85225 14.1931 7.50937 13.4097L2.094 10.25C1.42687 10.6528 0.954 10.9411 0.6105 11.1856C0.234375 11.4523 0.118875 11.5966 0.07875 11.6709C-0.02625 11.8659 -0.02625 12.0436 0.07875 12.2383C0.1185 12.3125 0.234375 12.4565 0.610125 12.7239C0.978375 12.9856 1.49475 13.2976 2.23913 13.7473L8.25675 17.3788C9.77175 18.293 10.359 18.6335 11.0216 18.7636C11.6558 18.8881 12.3443 18.8881 12.9784 18.7636C13.641 18.6335 14.2282 18.293 15.7432 17.3788L21.7609 13.7473C22.5052 13.298 23.0216 12.9856 23.3899 12.7235C23.7656 12.4565 23.8811 12.3125 23.9212 12.2383C24.0263 12.0433 24.0263 11.8659 23.9212 11.6709C23.8815 11.5966 23.7656 11.4526 23.3899 11.1856Z"
											fill="url(#paint1_media_multi)"
										/>
										<path
											d="M1.87125 15.5273C1.32 15.8611 0.91425 16.1123 0.610125 16.3283C0.234375 16.5957 0.118875 16.7393 0.07875 16.8136C-0.02625 17.0086 -0.02625 17.1863 0.07875 17.3813C0.1185 17.4556 0.234375 17.5996 0.610125 17.8666C0.978375 18.1283 1.49475 18.4403 2.23913 18.89L8.25675 22.5215C9.77175 23.4361 10.3586 23.7766 11.0216 23.9063C11.6558 24.0308 12.3443 24.0308 12.9784 23.9063C13.641 23.7766 14.2282 23.4361 15.7432 22.5215L21.7609 18.89C22.5052 18.4407 23.0216 18.1283 23.3899 17.8666C23.7656 17.5996 23.8811 17.4556 23.9212 17.3813C24.0263 17.1863 24.0263 17.0086 23.9212 16.814C23.8815 16.7393 23.7656 16.5957 23.3899 16.3283C23.0858 16.112 22.6804 15.8615 22.1287 15.5273L16.4985 18.9252C15.1586 19.7341 14.3032 20.2508 13.3084 20.4458C12.4441 20.6129 11.5559 20.6129 10.6916 20.4458C9.69675 20.2508 8.84138 19.7341 7.5015 18.9252L1.87125 15.5273Z"
											fill="url(#paint2_media_multi)"
										/>
									</g>
									<defs>
										<linearGradient id="paint0_media_multi" x1="11.9999" y1="0" x2="11.9999" y2="13.2858" gradientUnits="userSpaceOnUse">
											<stop stop-color="#FE6693" />
											<stop offset="1" stop-color="#FE014D" />
										</linearGradient>
										<linearGradient id="paint1_media_multi" x1="12" y1="10.25" x2="12" y2="18.857" gradientUnits="userSpaceOnUse">
											<stop stop-color="#FC8EAC" />
											<stop offset="1" stop-color="#E11D48" />
										</linearGradient>
										<linearGradient id="paint2_media_multi" x1="12" y1="15.5273" x2="12" y2="23.9997" gradientUnits="userSpaceOnUse">
											<stop stop-color="#FE6693" />
											<stop offset="1" stop-color="#FE014D" />
										</linearGradient>
										<clipPath id="clip0_media_multi">
											<rect width="24" height="24" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<span class="text-[#1C2329] text-sm font-bold">Multi-Level Results</span>
							</div>
							<i class="icon-arrow text-gray-4 text-lg transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:!text-[#FE014D] group-hover:translate-x-1"></i>
						</nuxt-link-locale>

						<!-- SAT Results -->
						<nuxt-link-locale to="/results/sat" class="group w-full p-3 flex justify-between bg-white border border-[#EBEDF0] rounded-[12px] hover:border-[rgba(254,1,77,0.12)]">
							<div class="flex flex-col gap-3 items-start">
								<svg
									class="grayscale group-hover:grayscale-0 transition-all duration-200"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
								>
									<g clip-path="url(#clip0_media_sat)">
										<path
											d="M17.5573 18.5148C17.7219 18.4985 18.348 18.5088 18.504 18.5063C18.3942 18.2041 18.2043 17.9376 17.9545 17.7353C17.7048 17.5329 17.4046 17.4024 17.0863 17.3577C17.0178 17.3409 16.9544 17.3077 16.9017 17.2609C16.8489 17.214 16.8085 17.155 16.7837 17.089C16.651 16.7187 16.4073 16.3985 16.0859 16.1719C15.7644 15.9453 15.3809 15.8235 14.9876 15.823H13.7932V14.7293C14.3398 14.2604 14.7375 13.6421 14.9374 12.9503C15.338 12.6433 15.6476 12.2333 15.8332 11.764C17.7943 6.11112 9.1813 3.94212 8.1103 9.79126C7.98945 10.7148 8.31302 12.2941 9.2803 12.9455C9.48206 13.6354 9.87936 14.2519 10.4242 14.7207V15.8268C9.90816 15.7955 9.05916 15.934 8.7583 15.6631L6.0583 13.6651C6.00982 13.6281 5.95378 13.6022 5.89416 13.5893L4.75845 10.1363L5.10773 7.88626C5.37321 7.7634 5.58894 7.55382 5.71944 7.29201C5.84993 7.0302 5.88741 6.73177 5.8257 6.44583C5.76399 6.15988 5.60678 5.90347 5.37993 5.71878C5.15307 5.53409 4.8701 5.43213 4.57759 5.42969H1.32216C1.0302 5.43297 0.748023 5.53532 0.521859 5.71998C0.295695 5.90463 0.138963 6.16064 0.0773513 6.44604C0.0157391 6.73144 0.0529005 7.0293 0.182745 7.29081C0.31259 7.55232 0.527415 7.76197 0.792016 7.8854L0.914159 8.66369C1.23516 8.61483 1.78202 8.66369 2.10002 8.64654C2.47979 8.64874 2.84492 8.79337 3.12318 9.05184C3.40144 9.31031 3.57258 9.66378 3.60274 10.0424C3.63291 10.4209 3.51991 10.7971 3.28609 11.0963C3.05227 11.3956 2.71465 11.5962 2.34002 11.6585C2.0223 11.6818 1.7036 11.6888 1.38516 11.6795L1.56602 12.832C1.5943 13.0083 1.67157 13.1732 1.78902 13.3078C1.90647 13.4424 2.05938 13.5412 2.2303 13.5931L3.00045 16.4071C2.76183 16.5959 2.60664 16.8707 2.56811 17.1725C2.52958 17.4743 2.61077 17.7793 2.7943 18.022L4.96459 20.7305C5.45145 21.2667 5.40045 22.1148 5.3893 22.7877C5.36916 23.029 5.41759 23.299 5.68802 23.3765C5.78045 23.3965 5.87521 23.4036 5.96959 23.3975H10.1087C10.3624 22.9428 12.8842 18.682 13.2124 18.1107C13.27 18.0168 13.362 17.9491 13.4688 17.9223C13.5756 17.8954 13.6887 17.9114 13.7839 17.9669C13.879 18.0223 13.9481 18.1126 13.9767 18.2186C14.0053 18.3246 13.9912 18.4379 13.9372 18.5343L11.0149 23.952C10.9794 24.0197 10.9664 24.0967 10.9779 24.1719C10.9893 24.2471 11.0246 24.3165 11.0786 24.3699C11.1327 24.4232 11.2025 24.4579 11.2778 24.4688C11.3531 24.4796 11.4301 24.466 11.4975 24.43L14.2613 23.0469C14.8028 22.7748 15.5138 22.1944 15.8962 21.7093L22.4074 13.2872C22.5069 13.1579 22.5554 12.9962 22.5434 12.8336C22.5314 12.671 22.4598 12.5187 22.3424 12.4062C22.2251 12.2938 22.0705 12.2291 21.9076 12.2243C21.7448 12.2194 21.5868 12.2748 21.4634 12.3801L19.5843 14.0072C19.4927 14.0849 19.3778 14.1282 19.2591 14.1298C19.1405 14.1313 19.0246 14.0911 18.9311 14.0158C18.8376 13.9405 18.7722 13.8343 18.7455 13.7155C18.7189 13.5967 18.7326 13.472 18.7845 13.3616L20.4647 9.71401C20.5045 9.63019 20.5251 9.5384 20.5251 9.44548C20.5251 9.35256 20.5045 9.26078 20.4647 9.17696C20.4249 9.09313 20.3668 9.01923 20.2945 8.96058C20.2223 8.90192 20.1377 8.85998 20.047 8.83781C19.9564 8.81563 19.8621 8.81381 19.7706 8.83248C19.6791 8.85115 19.5929 8.88984 19.5181 8.94576L17.5573 10.4803V18.5148Z"
											fill="url(#paint0_media_sat)"
										/>
									</g>
									<defs>
										<linearGradient id="paint0_media_sat" x1="10.943" y1="0.00390625" x2="10.943" y2="24.001" gradientUnits="userSpaceOnUse">
											<stop stop-color="#FE6693" />
											<stop offset="1" stop-color="#FE014D" />
										</linearGradient>
										<clipPath id="clip0_media_sat">
											<rect width="24" height="24" fill="white" />
										</clipPath>
									</defs>
								</svg>
								<span class="text-[#1C2329] text-sm font-bold">SAT Results</span>
							</div>
							<i class="icon-arrow text-gray-4 text-lg transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:!text-[#FE014D] group-hover:translate-x-1"></i>
						</nuxt-link-locale>
					</div>
				</div>
			</div>
		</template>
	</UIDropdown>
</template>

<script setup lang="ts">
interface Props {
	theme?: 'white' | 'dark' | 'transparent'
}

const props = withDefaults(defineProps<Props>(), {
	theme: 'white'
})

const showDropdown = ref(false)

function handleDropdownToggle(val: boolean) {
	showDropdown.value = val
}
</script>
