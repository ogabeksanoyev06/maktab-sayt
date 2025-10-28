<template>
	<ul class="accordion flex flex-col gap-4">
		<li v-for="(item, i) in items" :key="i" class="accordion__item bg-white border-2 border-white rounded-2xl shadow-card cursor-pointer">
			<div class="accordion__trigger flex items-center justify-between gap-2 p-3 sm:p-4" :class="{ accordion__trigger_active: activeIndex === i }" @click="toggle(i)">
				<h3 class="sm:text-xl font-bold leading-130">
					{{ item.question }}
				</h3>
				<span class="sm:size-7 size-5 flex-center bg-gray-1 rounded-full p-[5px_4px_3px_4px] transition-300" :class="activeIndex === i ? ' rotate-180' : ''">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
						<path d="M16.6673 6.66602L10.0007 13.3327L3.33398 6.66602" stroke="#181D27" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</span>
			</div>
			<transition name="accordion" @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave">
				<div v-show="activeIndex === i" class="accordion__content px-3 sm:px-4">
					<p class="pb-4 text-sm leading-130 text-gray-6">
						{{ item.answer }}
					</p>
				</div>
			</transition>
		</li>
	</ul>
</template>

<script setup>
const props = defineProps({
	activeProp: { type: Number, default: null },
	items: { type: Array, default: () => [] },
	title: String,
	answer: String
})

const activeIndex = ref(props.activeProp)

watch(
	() => props.activeProp,
	(val) => {
		activeIndex.value = val
	}
)

function toggle(index) {
	activeIndex.value = activeIndex.value === index ? null : index
}

function enter(el) {
	el.style.height = '0px'
	el.style.opacity = '0'
	void el.offsetHeight
	el.style.height = el.scrollHeight + 'px'
	el.style.opacity = '1'
}
function afterEnter(el) {
	el.style.height = 'auto'
}
function leave(el) {
	el.style.height = el.scrollHeight + 'px'
	el.style.opacity = '1'
	void el.offsetHeight
	el.style.height = '0px'
	el.style.opacity = '0'
}
function afterLeave(el) {
	el.style.height = '0px'
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
	transition:
		height 0.3s ease,
		opacity 0.3s ease;
	overflow: hidden;
}
</style>
