<template>
	<div :class="['cursor-pointer', wrapperClass]">
		<div @click="$emit('toggle')" class="w-full px-4 py-2">
			<slot name="header"></slot>
		</div>

		<transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave">
			<div v-show="show" ref="body" class="overflow-hidden">
				<slot name="body"></slot>
			</div>
		</transition>
	</div>
</template>

<script setup>
defineProps({
	show: Boolean,
	wrapperClass: [String, Array]
})

const body = ref(null)

const beforeEnter = (el) => {
	el.style.height = '0'
	el.style.opacity = '0'
}
const enter = (el) => {
	el.style.transition = 'height .35s ease, opacity .25s ease'
	el.style.height = el.scrollHeight + 'px'
	el.style.opacity = '1'
}
const afterEnter = (el) => {
	el.style.height = 'auto'
}

const beforeLeave = (el) => {
	el.style.height = el.scrollHeight + 'px'
	el.style.opacity = '1'
}
const leave = (el) => {
	el.style.transition = 'height .35s ease, opacity .2s ease'
	el.style.height = '0'
	el.style.opacity = '0'
}
const afterLeave = (el) => {
	el.style.height = '0'
}
</script>
