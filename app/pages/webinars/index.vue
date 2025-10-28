<template>
	<div class="container pt-10">
		<h1 class="title-style mb-2 sm:mb-3 md:mb-6 mt-3">Vebinarlar</h1>
		<div class="grid gap-8 md:grid-cols-12">
			<div class="md:col-span-9">
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<card-webinar v-for="key in 4" :key />
				</div>
				<div class="flex items-center justify-center mt-9">
					<UIButton variant="outline" :text="$t('btn_more')" icon="lucide-arrow-down" />
				</div>
			</div>
			<div class="md:col-span-3">
				<common-sidebar-news />
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
