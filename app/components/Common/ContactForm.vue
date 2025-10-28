<script setup lang="ts">
import { required, minLength } from '@vuelidate/validators'

const loading = ref(false)
const { t } = useI18n()

const form = useForm(
	{
		name: '',
		phone: '',
		text: ''
	},
	{
		name: { required, minLength: minLength(3) },
		phone: { required, minLength: minLength(12) },
		text: { required, minLength: minLength(5) }
	}
)

const submit = async () => {
	form.$v.value.$touch()
	if (form.$v.value.$invalid) return
}
</script>

<template>
	<section class="bg-secondary py-8 md:py-16">
		<div class="bg-white container relative flex md:gap-5 flex-col md:flex-row w-full rounded-xl max-md:pb-4 my-8 md:my-20 mb-6 md:mb-[97px]">
			<div class="py-4 md:p-9 w-full">
				<div class="max-w-[456px] space-y-5">
					<div class="flex flex-col gap-3">
						<p class="base-title-style !mb-0">
							<span class="text-primary">Savollar</span>
							bormi?
						</p>
						<p class="max-w-[402px] text-sm sm:text-base font-medium">
							O‘zingizni qiziqtirgan savollar va murojatlaringiz bo‘lsa biz bilan bog‘laning, mas'ul xodimlarimiz tez orada siz bilan aloqaga chiqishadi.
						</p>
					</div>
					<div class="flex gap-3 md:gap-5">
						<a
							class="flex flex-1 items-center gap-1.5 p-2 md:p-3 bg-transparent duration-200 hover:bg-white border border-gray-100 hover:border-primary hover:shadow-main rounded"
							href="mailto:info@3maktab.uz"
						>
							<i class="text-2xl text-gray icon-mail h-6 flex-center"></i>
							<p class="text-sm truncate sm:text-base font-medium">info@3maktab.uz</p>
						</a>
					</div>
				</div>
			</div>
			<div
				class="max-w-full md:max-w-[582px] w-full bg-white lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 p-4 md:p-6 space-y-4 md:space-y-6 rounded-[20px] border border-gray-100"
			>
				<div class="md:mb-8">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
						<FormGroup :label="$t('your_name')">
							<FormInput variant="filled" :placeholder="$t('your_name_placeholder')" v-model="form.values.name" :error="form.$v.value.name.$error" />
						</FormGroup>
						<FormGroup :label="$t('phone_number')">
							<FormInput variant="filled" placeholder="00 000 00 00" v-maska="'## ### ## ##'" v-model="form.values.phone" :error="form.$v.value.phone.$error" class="!gap-1">
								<template #prefix>
									<span class="text-base sm:text-sm font-normal outline-none"> +998 </span>
								</template>
							</FormInput>
						</FormGroup>
					</div>
					<FormGroup :label="$t('explain_the_matter')" class="mt-2 md:mt-4">
						<FormTextarea variant="filled" :maxlength="500" :placeholder="$t('explain_the_matter_placeholder')" :rows="4" v-model="form.values.text" :error="form.$v.value.text.$error" />
					</FormGroup>
				</div>
				<div class="w-full">
					<UIButton :text="$t('send_btn')" icon="lucide:send" class="min-w-[174px] text-center !ml-auto flex-center !h-10 max-w-max" @click="submit" />
				</div>
			</div>
		</div>
	</section>
</template>
