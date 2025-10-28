<template>
	<div class="transition-300 flex items-center gap-2 py-2.5 px-4 rounded-xl" :class="[{ '!border-red': error }, variants[variant]]">
		<slot name="prefix" />
		<input
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
			class="w-full h-full text-base caret-blue font-normal bg-transparent outline-none text-gray-6 leading-130 placeholder:text-gray-4"
			:value="modelValue"
			:class="[inputClass]"
			@keyup.enter="handleEnter"
			@input="handleInput"
			@blur="$emit('blur')"
			@focusout="$emit('focusout')"
			@focus="handleFocus"
		/>
		<slot name="suffix" />
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
	maska: String
})

const emit = defineEmits(['update:modelValue', 'blur', 'focusout', 'focus', 'enter'])

const variants = {
	border: 'bg-white border border-gray-1 focus-within:border-blue',
	filled: 'border border-transparent focus-within:border-blue bg-gray focus-within:bg-white'
}

const Input = ref(null)
defineExpose({ Input })

const handleEnter = () => {
	emit('enter')
}

const handleFocus = () => {
	emit('focus')
}

const handleInput = (e) => {
	emit('update:modelValue', e.target.value)
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
