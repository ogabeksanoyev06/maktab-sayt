<template>
	<div class="flex flex-col gap-2">
		<div class="flex items-center justify-between">
			<p class="text-sm leading-130 font-normal" :class="labelClass">
				{{ label }}
				<span v-if="isRequired" class="text-red-600">*</span>
			</p>
			<transition name="fade-sm">
				<div v-if="!error">
					<p v-for="item in errors" :key="item.$uid" class="text-sm leading-130 font-normal text-red-600">
						{{ item?.$message }}
					</p>
				</div>
				<p v-else class="text-sm leading-130 font-normal text-red-600">
					{{ errorLabel }}
				</p>
			</transition>
		</div>
		<slot />
	</div>
</template>

<script setup>
const props = defineProps({
	label: { type: String, default: 'Label' },
	labelClass: { type: String, default: '' },
	error: { type: Boolean, default: false },
	errors: { type: Array, default: () => [] },
	errorLabel: { type: String, default: '' },
	isRequired: { type: Boolean, default: false }
})
</script>
