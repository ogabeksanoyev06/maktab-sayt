<script setup lang="ts">
interface Props {
	item: {
		id: number
		name: string
		image: string
		latitude: number
		longitude: number
		address: string
		region: number
		region_name?: string
		near_to_metro?: boolean
		length_from_metro?: number
		metro_name?: string | null
		telegram_channel?: string | null
		phone?: string | null
		secondary_phone?: string | null
		has_math: boolean
		has_cdi_mock: boolean
		images?: string[]
	}
}
defineProps<Props>()

const emit = defineEmits<{
	(e: 'show-branch-modal', branch: any): void
}>()
</script>

<template>
	<div class="bg-white rounded-3xl border-2 border-white p-4 shadow-card flex flex-col gap-4">
		<img :src="item.image" :alt="item.name" class="size-16 aspect-square rounded-xl shadow-card" />
		<div class="flex flex-col gap-5">
			<div class="flex flex-col gap-1">
				<h3 class="text-lg sm:text-xl font-bold !leading-130">{{ item.name }}</h3>
				<div class="flex-y-center gap-1 max-sm:text-sm">
					<span class="icon-location text-blue text-xl leading-5"></span>
					{{ item.address }}
				</div>
			</div>
			<div class="grid grid-cols-2 gap-3">
				<UIButton size="small" :text="$t('about_branch')" @click="emit('show-branch-modal', item)" />
				<a :href="`tel:${item.phone}`">
					<UIButton size="small" :text="$t('call')" icon-position="right" icon="icon-phone" class="w-full" />
				</a>
			</div>
		</div>
	</div>
</template>
