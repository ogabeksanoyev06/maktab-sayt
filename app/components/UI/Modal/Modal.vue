<template>
	<Teleport to="body">
		<div
			:class="[wrapperClass, { '!opacity-100 !visible': show }]"
			data-modal="wrapper"
			class="fixed w-full h-full bg-black/75 flex justify-center z-[100] top-0 left-0 invisible opacity-0 transition-all duration-300 items-center p-3"
			@click="handleOuterClick"
		>
			<Transition name="modal" mode="out-in">
				<div v-if="show" class="bg-white w-full lg:max-w-[920px] max-h-screen md:overflow-y-auto rounded relative" :class="[bodyClass, { animated: animationIn }]">
					<div v-if="!noHeader" class="flex items-center border-b border-solid border-gray/40 mx-5 pb-4 pt-5 rounded-t" :class="[headerStyle]">
						<slot name="header">
							<h3 class="w-full text-base md:text-lg text-dark leading-6 font-bold font-mts" :class="titleStyle">
								{{ title }}
							</h3>
							<button class="text-2xl w-7 h-7 rounded-full flex-center transition-300 hover:bg-transparent active:scale-95 group" @click="$emit('close')">
								<!-- <span class="icon-x text-sm text-gray-100 group-hover:text-red transition-300" /> -->
								<Icon name="lucide-x" class="text-white shrink-0" />
							</button>
						</slot>
					</div>
					<button v-if="noHeader && hasCloseIcon" class="absolute -top-7 lg:-top-12 -right-0 lg:-right-[80px] active:scale-95 group" @click="$emit('close')">
						<Icon name="lucide-x" class="text-white" />
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
	show?: boolean
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
	modalClass: '',
	disableOuterClose: false
})

interface Emits {
	(e: 'close'): void
	(e: 'outer-click'): void
}
const emit = defineEmits<Emits>()
const animationIn = ref(false)

function handleOuterClick(e: Event) {
	const target = e.target as HTMLElement
	if (target.dataset?.modal == 'wrapper') {
		emit('outer-click')
		if (!props.disableOuterClose) {
			emit('close')
		} else {
			animationIn.value = true
			setTimeout(() => {
				animationIn.value = false
			}, 500)
		}
	}
}

watch(
	() => props.show,
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
			emit('close')
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
