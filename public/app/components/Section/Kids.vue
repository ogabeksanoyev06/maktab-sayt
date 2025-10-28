<template>
    <div class="md:px-9 md:py-6 bg-[#F5F7FA]">
        <div class="bg-[linear-gradient(109.6deg,_#005EFE_0.88%,_#003898_100.96%)] md:rounded-[40px] relative z-20">
            <img src="/images/kids/pattern.svg" alt="Kids bg" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover">
            <div class="container relative pt-8 md:pt-[50px] pb-8 md:pb-16">
                <img src="/images/kids/kids-logo.svg" alt="Kids logo" class="w-[260px] sm:w-[352px] h-6 md:h-8">
                <div class="mt-6 sm:mt-10 pb-8 sm:pb-16 md:w-1/2">
                    <h2 class="text-[28px] leading-140 font-bold text-white mb-2">{{ $t('kids_section_title') }}</h2>
                    <p class="text-base text-white/80 leading-140">{{ $t('kids_section_description') }}</p>
                    <div class="flex flex-wrap gap-4 mt-6">
                        <UIButton :text="$t('call_us')" icon="icon-phone-call text-xl leading-5" class="!text-gray-6 min-w-[200px]" variant="white" />
                        <nuxt-link-locale to="/everest-kids">
                            <UIButton class="min-w-[200px] !bg-white/10 hover:!bg-white/20" :text="$t('learn_more')" icon="icon-arrow !text-2xl leading-6" />
                        </nuxt-link-locale>
                    </div>
                </div>
                <div class="grid grid-cols-12 gap-5 relative z-1 sm:w-fit">
                    <div v-for="(item, index) in list" :key="index" class="p-4 bg-white/10 sm:max-w-[260px] rounded-[20px] flex flex-col items-start backdrop-blur col-span-6 sm:col-span-4 max-sm:last:col-start-4">
                        <h4 class="text-xl leading-130 font-bold text-white">{{ item.title }}</h4>
                        <p class="text-sm text-white/80 leading-140 mt-1 mb-5">{{ item.subtitle }}</p>
                        <div class="py-1 px-3 border border-white/10 rounded-full text-base leading-130 text-white">
                            {{ item.grades }}
                        </div>
                    </div>
                </div>
                <img class="max-md:hidden h-4/5 lg:h-full aspect-[528/580] absolute bottom-0 right-0 z-[-1]" src="/images/kids/kids.webp" alt="Kids image">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const list = computed(() => [
    {
        title: t('youngsters'),
        subtitle: t('youngsters_subtitle'),
        grades: t('grades', { n: '1-3' })
    },
    {
        title: t('juniors'),
        subtitle: t('juniors_subtitle'),
        grades: t('grades', { n: '4-9' })
    },
    {
        title: t('teens'),
        subtitle: t('teens_subtitle'),
        grades: t('grades', { n: '10-11' })
    }
])
</script>