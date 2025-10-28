<template>
	<div class="flex min-h-screen flex-col">
		<div class="">
			<LayoutHeader />
			<main class="relative z-0 flex-1">
				<div>
					<slot />
				</div>
			</main>
		</div>
		<LayoutFooter />
	</div>
</template>

<script setup></script>
