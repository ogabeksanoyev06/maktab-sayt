<script setup>
const search = defineModel()
</script>

<template>
	<FormInput v-model="search" class="sm:max-w-[380px] w-full !bg-white" :placeholder="$t('search')" suffix-class="flex-y-center gap-1" variant="filled">
		<template #prefix>
			<Icon name="lucide-search" class="" />
		</template>
		<template #suffix>
			<button
				class="h-max transition-all duration-300 cursor-pointer opacity-0 flex-center group invisible scale-0"
				:class="{ '!opacity-100 !scale-100 !visible': search?.length }"
				@click="search = ''"
			>
				<Icon name="lucide-x" class="hover:text-red-600" />
			</button>
		</template>
	</FormInput>
</template>
