<template>
    <div 
        class="bg-[#f5f7fa] hover:bg-white border border-[#ebedf0] hover:border-[#fe014d] rounded-[28px] p-4 flex gap-4 items-center cursor-pointer relative hover:shadow-[0_35px_77px_0_rgba(254,1,77,0.15)] group transition-300"
        :class="{ 'bg-white border-[#fe014d] card-active': isActive }"
        @click.stop="$emit('click', branch)"
    >
        <!-- Branch Image -->
        <div class="w-32 h-32 bg-white rounded-[20px] overflow-hidden shadow-[0px_30px_50px_5px_rgba(39,48,56,0.06)] flex-shrink-0">
            <img 
                :src="branch.image || '/images/branch-default.jpg'" 
                :alt="branch.name"
                class="w-full h-full object-cover object-center"
            />
        </div>

        <!-- Branch Details -->
        <div class="flex-1 flex flex-col justify-between h-full min-h-[128px]">
            <div class="flex flex-col gap-1 mb-4">
                <h3 class="font-bold text-2xl leading-[1.3] text-[#1c2329]">{{ branch.name }}</h3>
                <div class="flex gap-1 items-center">
                    <i class="icon-location text-xl leading-5 text-blue group-hover:text-[#fe014d] transition-300 group-[.card-active]:text-[#fe014d]" />
                    <p class="font-normal text-sm leading-[1.3] text-[#1c2329] m-0 flex-1">{{ branch.address || 'Address not available' }}</p>
                </div>
            </div>

            <div class="flex items-center justify-between w-full">
                <div v-if="branch.near_to_metro" class="flex gap-2 items-center px-3 py-2 border border-gray-2 rounded-full">
                    <div class="flex gap-1.5 items-center font-medium text-sm leading-[1.3] text-[#676869]">
                        <i class="icon-metro text-base leading-4 text-[#676869] group-hover:text-blue transition-300 group-[.card-active]:text-blue" />
                        <span>{{ branch.metro_name || 'Station name' }}</span>
                    </div>
                    <div class="w-px h-4 bg-[#dfe0e1] rounded-[50px]"></div>
                    <div class="flex gap-1.5 items-center font-medium text-sm leading-[1.3] text-[#676869]">
                        <i class="icon-person text-base leading-4 text-[#676869] group-hover:text-blue transition-300 group-[.card-active]:text-blue" />
                        <span>{{ meterToKilometer(branch.length_from_metro || 0) }}</span>
                    </div>
                </div>
                <div v-else></div>
                <div 
                    class="rounded-2xl px-1 py-1 flex items-center justify-center w-8 h-8 transition-colors duration-300 group-hover:bg-[#fe014d] group-[.card-active]:bg-[#fe014d]"
                    :class="isActive ? 'bg-[#fe014d]' : 'bg-[#c5c7c9]'"
                    @click.stop="$emit('clickToTarget', branch)"
                >
                    <i class="icon-chevron text-white text-2xl leading-6 -rotate-90 translate-x-px" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Branch {
    near_to_metro?: boolean
    length_from_metro?: number
    id: number
    name: string
    address?: string
    image?: string
    latitude?: number
    longitude?: number
}

interface Props {
    branch: Branch
    isActive?: boolean
}

defineProps<Props>()

defineEmits<{
    click: [branch: Branch]
    clickToTarget: [branch: Branch]
}>()

</script>
