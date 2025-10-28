<template>
	<UIDropdown body-class="!w-[172px] left-0 w-max min-w-full translate-y-full bg-white -bottom-1 z-[11]">
		<template #head>
			<div class="flex-center-between gap-4 relative group rounded border border-gray-200 bg-gray-100/80 cursor-pointer transition-300">
				<p class="pl-4 truncate text-sm font-semibold leading-130">
					{{ $t('share') }}
				</p>

				<button class="w-10 h-10 cursor-pointer flex-center bg-white border-l border-transparent rounded-r transition-300">
					<Icon name="lucide:share-2" class="transition-300 text-muted" />
				</button>
			</div>
		</template>

		<template #body>
			<div>
				<div
					v-for="item in socials"
					:key="item.name"
					class="flex items-center gap-2 px-3 py-2 text-sm font-semibold capitalize transition-300 cursor-pointer hover:bg-secondary hover:text-primary"
					@click="share(item.name)"
				>
					<Icon :name="item.icon" />
					{{ item.name }}
				</div>
			</div>
		</template>
	</UIDropdown>
</template>

<script setup lang="ts">
interface Props {
	title: string
}

const props = defineProps<Props>()

const socials = [
	{ name: 'facebook', icon: 'lucide:facebook' },
	{ name: 'telegram', icon: 'lucide:send' },
	{ name: 'twitter', icon: 'lucide:twitter' }
]

function share(platform: string) {
	const url = encodeURIComponent(window.location.href)
	const text = encodeURIComponent(props.title)

	const shareUrls: Record<string, string> = {
		facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
		telegram: `https://t.me/share/url?url=${url}&text=${text}`,
		twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`
	}
	const shareUrl = shareUrls[platform]
	if (shareUrl) {
		window.open(shareUrl, '_blank', 'noopener,noreferrer')
	} else {
		console.warn(`Platforma uchun ulashish linki topilmadi: ${platform}`)
	}
}
</script>
