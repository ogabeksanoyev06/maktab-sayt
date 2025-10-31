<script setup lang="ts">
interface TableHead {
	key: string
	title: string
	width?: string
}

interface Props {
	type?: 'filled' | 'transparent'
	head: TableHead[]
	data: Record<string, any>[]
	limit: number
	currentPage: number
	loading?: boolean
	thClass?: string
	tdClass?: string
	rowClass?: string
	wrapperClass?: string
}

const props = withDefaults(defineProps<Props>(), {
	loading: false,
	type: 'filled'
})

const getIndex = (i: number) => (props.currentPage - 1) * props.limit + i + 1
</script>

<template>
	<div :class="['relative w-full border border-border rounded-lg overflow-x-auto', wrapperClass]">
		<div v-if="loading" class="space-y-3 p-4">
			<div v-for="i in 6" :key="i" class="h-10 bg-gray-200 animate-pulse rounded-md" />
		</div>

		<table v-else class="w-full text-sm">
			<thead class="bg-gray-50 font-semibold">
				<tr class="border-b border-border">
					<th v-for="(h, i) in head" :key="i" :class="['text-left  py-3 px-4', thClass]" :style="{ width: h.width }">
						{{ h.title }}
					</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="(row, i) in data" :key="i" :class="['border-b border-border last:border-none', type === 'filled' && 'even:bg-gray-100', rowClass]">
					<td v-for="(h, j) in head" :key="j" :class="['py-3 px-4 font-medium', tdClass]">
						<slot :name="h.key" :row="row" :index="getIndex(i)">
							{{ h.key === '_index' ? getIndex(i) : row[h.key] }}
						</slot>
					</td>
				</tr>

				<tr v-if="!data.length && !loading">
					<td colspan="100%" class="py-6 text-center text-gray-400">Hozircha ma'lumot yo‘q</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
