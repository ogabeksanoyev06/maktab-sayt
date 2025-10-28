<template>
	<label class="group inline-flex items-center relative select-none" :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'" @click="handleChange">
		<span
			class="shrink-0 duration-200 ease-in-out inline-block h-6 w-6 rounded-md bg-[#E9EAEB] border border-[#E2E4E5] after:border-white peer-disabled:border-gray-100 peer-disabled:after:border-grey-100 relative"
			:class="[
				{
					'after:transition-all after:duration-200 after:absolute after:left-2 after:top-1 after:w-2 after:h-3 after:border-r-[2.2px] after:border-b-[2.2px] after:rotate-[45deg] after:opacity-0':
						!indeterminate
				},
				{
					'after:opacity-100 after:transition-all after:duration-200 after:absolute after:left-[8px] after:top-2 after:w-2 after:h-4 after:border-l-[2.2px]  !border-primary !bg-primary after:rotate-90':
						indeterminate
				},
				{
					'!border-red-600 !bg-white': error,
					'group-hover:border-primary group-hover:bg-white': !disabled
				},
				indeterminate ? '' : modelValue ? 'after:opacity-100 after:rotate-180' : '',
				modelValue ? '!border-primary !bg-primary' : '',
				checkboxStyles
			]"
		/>
		<span class="ml-2 leading-130 text-[13px]">
			<slot name="label">
				<span class="leading-130 text-[13px] text-muted-foreground" :class="[labelStyles]">
					{{ label }}
				</span>
			</slot>
		</span>
	</label>
</template>

<script setup>
const props = defineProps({
	modelValue: [String, Number, Boolean],
	label: String,
	name: String,
	value: [String, Number, Boolean],
	disabled: Boolean,
	error: Boolean,
	labelStyles: String,
	indeterminate: [Boolean, Number],
	checkboxStyles: String,
	infoIcon: Boolean,
	infoText: String,
	infoLink: String
})

const emit = defineEmits(['update:modelValue'])

const handleChange = () => {
	emit('update:modelValue', !props.modelValue)
}
</script>
