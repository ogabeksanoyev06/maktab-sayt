<template>
	<div class="transition-300 py-2.5 px-4 rounded flex flex-col gap-1" :class="[{ '!border-red-600 !bg-white': error }, variants[variant]]">
		<textarea
			v-bind="{
				id,
				type,
				minlength,
				maxlength,
				max,
				min,
				disabled,
				placeholder,
				readonly,
				autocomplete
			}"
			:id="inputId"
			ref="Input"
			:rows="rows"
			class="w-full h-full text-base sm:text-sm caret-primary font-normal bg-transparent outline-none resize-none"
			:value="modelValue"
			:class="inputClass"
			@keyup.enter="handleEnter"
			@input="handleInput"
			@blur="$emit('blur')"
			@focusout="$emit('focusout')"
			@focus="handleFocus"
		/>
		<div class="text-xs font-normal outline-none text-[#CCCFD1] leading-130 text-right">{{ modelValue.length }} / {{ maxlength }}</div>
	</div>
</template>

<script setup>
const props = defineProps({
	id: String,
	type: { type: String, default: 'text' },
	variant: { type: String, default: 'border' },
	placeholder: String,
	modelValue: { type: [String, Number], default: '' },
	disabled: Boolean,
	error: Boolean,
	focus: Boolean,
	maxlength: { type: Number, default: 99 },
	minlength: Number,
	max: Number,
	min: Number,
	inputClass: [String, Array],
	prefixClass: [String, Array, Object],
	suffixClass: [String, Array, Object],
	autocomplete: { type: String, default: 'new-password' },
	inputId: String,
	readonly: Boolean,
	maska: String,
	rows: { type: Number, default: 4 }
})

const emit = defineEmits(['update:modelValue', 'blur', 'focusout', 'focus', 'enter'])

const variants = {
	border: 'bg-white border border-gray-100 focus-within:border-primary',
	filled: 'border border-transparent focus-within:border-primary bg-gray-100 focus-within:bg-white'
}

const Input = ref(null)
defineExpose({ Input })

const handleInput = (e) => {
	emit('update:modelValue', e.target.value)
}

const handleEnter = () => {
	emit('enter')
}

const handleFocus = () => {
	emit('focus')
}

watch(
	() => props.focus,
	(value) => {
		if (value) {
			Input.value?.focus()
		}
	},
	{ immediate: true }
)
</script>
