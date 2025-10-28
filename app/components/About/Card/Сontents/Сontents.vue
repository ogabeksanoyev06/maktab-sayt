<template>
	<div>
		<div v-if="!item.is_card" class="flex max-md:flex-col-reverse flex-row items-stretch gap-4">
			<div class="flex flex-col justify-between gap-3 h-full w-full">
				<h2 class="text-2xl md:text-3xl font-medium">
					{{ item.title }}
				</h2>
				<article class="article w-full" v-html="item.content"></article>
			</div>
			<div>
				<img :alt="item.title" class="rounded md:rounded-xl max-h-96 object-cover" :src="item.image" />
			</div>
		</div>

		<div v-else class="flex max-md:flex-col flex-row gap-4 items-stretch">
			<div class="w-full">
				<img :alt="item.title" :src="item.image" class="object-cover object-center max-h-96 rounded md:rounded-xl w-full min-w-[320px] h-full" />
			</div>
			<div class="rounded md:rounded-xl p-2 md:p-4 min-h-full bg-gray-100 flex flex-col items-start justify-between">
				<article class="grid gap-3 mb-3">
					<h3 class="text-dark text-xl md:text-2.5xl font-medium">
						{{ item.title }}
					</h3>
					<div class="text-foreground leading-140" v-html="item.content"></div>
				</article>
				<UIButton :text="$t('more_btn')" :to="item.file" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Props {
	item: {
		title: string
		content: string
		image: string
		file: string | null
		is_card: boolean
	}
}

defineProps<Props>()
</script>
