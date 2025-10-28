<script setup>
const search = defineModel()
const clear = () => {
	search.value = ''
}
</script>

<template>
	<FormInput v-model="search" class="sm:max-w-[380px] w-full" :placeholder="$t('search')" suffix-class="flex-y-center gap-1">
		<template #prefix>
			<i class="icon-search text-gray-3 text-2xl leading-6" />
		</template>
		<template #suffix>
			<button class="icon-x-mark text-lg scale-0 opacity-0 hover:text-red transition-all duration-300" :class="{ '!scale-100 !opacity-100': search?.length }" @click="clear" />
		</template>
	</FormInput>
</template>
