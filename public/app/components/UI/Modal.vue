<template>
	<Teleport to="body">
		<div
			:class="[wrapperClass, { '!opacity-100 !visible': value }]"
			data-modal="wrapper"
			class="fixed w-full h-full bg-[#1C2329]/30 flex justify-center z-[100] top-0 left-0 invisible opacity-0 transition-all duration-300 items-center p-3"
			@click="handleOuterClick"
		>
			<Transition name="modal" mode="out-in">
				<div v-if="value" class="bg-white w-full lg:max-w-[580px] relative max-h-screen md:overflow-y-auto rounded-3xl" :class="[bodyClass, { animated: animationIn }]">
					<div v-if="!noHeader" class="flex items-center mx-5 pb-5 pt-6 rounded-t-3xl" :class="[headerStyle]">
						<slot name="header">
							<h3 class="w-full text-2xl md:text-3xl leading-130 font-bold" :class="titleStyle">
								{{ title }}
							</h3>
							<button class="w-9 h-9 bg-gray-1 rounded-full shrink-0 flex-center p-1.5 transition-300 active:scale-95 group" @click="value = false">
								<span class="icon-x-mark text-2xl leading-6 text-[#1C2329] group-hover:text-red transition-300" />
							</button>
						</slot>
					</div>
					<button v-if="noHeader && hasCloseIcon" class="absolute -top-7 lg:-top-12 -right-0 lg:-right-[80px] active:scale-95 group" @click="value = false">
						<span class="icon-x-mark text-2xl leading-6 text-[#1C2329] group-hover:text-red transition-300" />
					</button>
					<slot />
					<slot name="footer" />
				</div>
			</Transition>
		</div>
	</Teleport>
</template>

<script lang="ts" setup>
interface Props {
	title?: string
	wrapperClass?: string | string[]
	modalClass?: string | string[]
	noHeader?: boolean
	disableOuterClose?: boolean
	bodyClass?: string | string[]
	hasCloseIcon?: boolean
	titleStyle?: string
	headerStyle?: string
}
const props = withDefaults(defineProps<Props>(), {
	title: 'Modal title',
	titleStyle: '',
	headerStyle: '',
	wrapperClass: '',
	bodyClass: '',
	modalClass: ''
})

interface Emits {
	(e: 'outer-click'): void
}
const emit = defineEmits<Emits>()
const value = defineModel<boolean>('modelValue', { required: true })
const animationIn = ref(false)

function handleOuterClick(e: Event) {
	const target = e.target as HTMLElement
	if (target.dataset?.modal == 'wrapper') {
		emit('outer-click')
		if (!props.disableOuterClose) {
			value.value = false
		} else {
			animationIn.value = true
			setTimeout(() => {
				animationIn.value = false
			}, 500)
		}
	}
}

watch(
	() => value.value,
	(val) => {
		if (val) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
	}
)
onMounted(() => {
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && !props.disableOuterClose) {
			value.value = false
		}
	})
})
</script>

<style scoped>
@keyframes modal {
	from {
		opacity: 0;
		transform: translateY(-40px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.modal-enter-active {
	animation: modal 0.3s ease-in-out;
}
.modal-leave-active {
	animation: modal 0.3s ease-in-out reverse;
}

@keyframes mobile-modal {
	from {
		opacity: 0;
		transform: translateY(50%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
.mobile-modal-enter-active {
	animation: mobile-modal 0.5s ease-in-out;
}
.mobile-modal-leave-active {
	animation: mobile-modal 0.5s ease-in-out reverse;
}

.animated {
	animation: horizontal-shaking 0.4s ease-in-out;
}
</style>
