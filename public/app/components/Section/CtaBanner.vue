<script setup lang="ts">
interface Props {
	images?: []
	reverse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	reverse: false
})
</script>
<template>
	<section class="overflow-hidden py-8 md:py-16">
		<div class="container relative">
			<slot name="background" />
			<div
				class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-20 items-center relative z-1"
				:class="reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''"
			>
				<div>
					<slot />
				</div>
				<div class="lg:grid grid-cols-12 grid-rows-9 gap-2 md:gap-4 h-[430px] hidden" :class="reverse ? 'lg:-ml-[250px]' : 'lg:-mr-[250px]'">
					<div class="col-span-4 row-span-2 overflow-hidden rounded-xl">
						<img src="/images/media.png" alt="" class="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105" />
					</div>
					<div class="col-span-4 row-span-3 col-start-1 row-start-3 overflow-hidden rounded-xl">
						<img src="/images/media.png" alt="" class="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105" />
					</div>
					<div class="col-span-4 row-span-4 col-start-1 row-start-6 overflow-hidden rounded-xl">
						<img src="/images/media.png" alt="" class="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105" />
					</div>
					<div class="col-span-4 row-span-4 col-start-5 row-start-6 overflow-hidden rounded-xl">
						<img src="/images/media.png" alt="" class="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105" />
					</div>
					<div class="col-span-4 row-span-4 col-start-9 row-start-6 overflow-hidden rounded-xl">
						<img src="/images/media.png" alt="" class="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105" />
					</div>
					<div class="col-span-4 row-span-2 col-start-5 row-start-1 overflow-hidden rounded-xl">
						<img src="/images/media.png" alt="" class="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105" />
					</div>
					<div class="col-span-4 row-span-2 col-start-9 row-start-1 overflow-hidden rounded-xl">
						<img src="/images/media.png" alt="" class="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105" />
					</div>
					<div class="col-span-2 row-span-3 col-start-5 row-start-3 overflow-hidden rounded-xl">
						<img src="/images/media.png" alt="" class="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105" />
					</div>
					<div class="col-span-3 row-span-3 col-start-7 row-start-3 overflow-hidden rounded-xl">
						<img src="/images/media.png" alt="" class="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105" />
					</div>
					<div class="col-span-3 row-span-3 col-start-10 row-start-3 overflow-hidden rounded-xl">
						<img src="/images/media.png" alt="" class="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105" />
					</div>
				</div>
				<UIMarquee :speed="30" :repeat="10" :overlay="false" class="block lg:hidden">
					<div class="overflow-hidden w-[200px] aspect-video rounded-2xl">
						<img src="/images/media.png" alt="brand" class="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105" />
					</div>
				</UIMarquee>
			</div>
		</div>
	</section>
</template>
