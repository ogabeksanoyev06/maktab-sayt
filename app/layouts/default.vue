<template>
	<div class="flex flex-col min-h-screen hidden-on-print">
		<LayoutHeader />
		<main class="flex-1 pt-20 md:pt-20">
			<slot />
		</main>
		<LayoutFooter />
	</div>
</template>
