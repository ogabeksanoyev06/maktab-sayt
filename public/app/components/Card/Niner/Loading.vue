<script setup></script>

<template>
	<div class="w-full flex flex-col justify-between gap-2 relative overflow-hidden z-1 bg-blue outline outline-[6px] outline-[#FFFFFF12] rounded-[32px] p-4 sm:p-7">
		<div class="flex flex-col gap-4">
			<div class="flex flex-col gap-1">
				<div class="w-3/4 h-9 rounded skeleton skeleton_dark"></div>
				<div class="w-1/4 h-5 rounded skeleton skeleton_dark"></div>
			</div>
			<div class="flex flex-col gap-1">
				<div class="h-3 w-3/5 rounded skeleton skeleton_dark"></div>
				<div class="h-3 w-4/5 rounded skeleton skeleton_dark"></div>
				<div class="h-3 w-2/5 rounded skeleton skeleton_dark"></div>
				<div class="h-3 w-full rounded skeleton skeleton_dark"></div>
				<div class="h-3 w-2/4 rounded skeleton skeleton_dark"></div>
				<div class="h-3 w-1/4 rounded skeleton skeleton_dark"></div>
				<div class="h-3 w-3/5 rounded skeleton skeleton_dark"></div>
			</div>
		</div>
		<div class="grid grid-cols-[130px_170px] justify-start gap-2">
			<div class="rounded-3xl w-[130px] h-[100px] skeleton skeleton_dark">

			</div>
			<div class="grid grid-cols-2 gap-1">					
				<div class="rounded-2xl w-20 skeleton skeleton_dark"></div>
				<div class="rounded-2xl w-20 skeleton skeleton_dark"></div>
				<div class="rounded-2xl w-20 skeleton skeleton_dark"></div>
				<div class="rounded-2xl w-20 skeleton skeleton_dark"></div>
			</div>
		</div>
	</div>
</template>
