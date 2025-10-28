<template>
	<div>
		<UIBreadcrumb :routes="breadcrumbItems" />
		<div class="container">
			<h1 class="title-style mb-2 sm:mb-3 md:mb-6 mt-3">{{ $t('feedback_management_title') }}</h1>
			<transition name="fade" mode="out-in">
				<div v-if="showContent" key="content" class="bg-white rounded-xl p-4 md:p-8 flex justify-between relative mb-10">
					<div class="w-full grid gap-3">
						<h2 class="text-xl md:text-3xl font-black">{{ $t('feedback_management_welcome') }}</h2>
						<p>{{ $t('feedback_management_description') }}</p>
						<UIButton :text="$t('feedback_management_button')" icon="lucide:send" class="!h-10 max-w-max mt-3" @click="showContent = false" />
					</div>
					<div class="w-full hidden md:block"></div>
					<img alt="send feedback school" class="absolute right-0 h-96 w-full max-w-lg -bottom-10 hidden md:block" src="https://tmci.uz/images/chat.png" />
				</div>
				<div v-else class="grid gap-5 mb-10">
					<div class="bg-white rounded-xl grid gap-5 p-5">
						<h3 class="text-2xl font-medium">Shaxsiy ma'lumotlar</h3>
						<div class="bg-gray-100 rounded-xl p-4 flex items-start gap-3 mt-3">
							<div class="bg-yellow-500 rounded-full text-white grid place-items-center shrink-0 size-12 p-1">
								<Icon name="lucide:info" class="!size-7"></Icon>
							</div>
							<div>
								<h3 class="text-base font-medium">Maxfiyligingizni qadrlaymiz!</h3>
								<p class="text-sm leading-tight">
									Zarur bo'lmasa, shaxsiy ma'lumotlaringiz oshkor qilinmaydi. Iltimos, bog'lanish ma'lumotlaringizni to'ldiring, shunda Institut siz bilan bog'lanishi mumkin. Aks holda,
									fikr-mulohazangiz e'tiborsiz qoladi.
								</p>
							</div>
						</div>
						<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
							<FormGroup :label="$t('full_name_label')" isRequired>
								<FormInput variant="filled" :placeholder="$t('input_placeholder')" v-model="form.values.name" :error="form.$v.value.name.$error" />
							</FormGroup>
							<FormGroup :label="$t('email_label')" isRequired>
								<FormInput variant="filled" :placeholder="$t('email_placeholder')" v-model="form.values.email" :error="form.$v.value.email.$error" />
							</FormGroup>
							<FormGroup :label="$t('phone_label')" isRequired>
								<FormInput variant="filled" placeholder="00 000 00 00" v-maska="'## ### ## ##'" v-model="form.values.phone" :error="form.$v.value.phone.$error" class="!gap-1">
									<template #prefix>
										<span class="text-base sm:text-sm font-normal outline-none"> +998 </span>
									</template>
								</FormInput>
							</FormGroup>
						</div>
						<FormGroup :label="$t('details_label')" isRequired>
							<FormTextarea variant="filled" :maxlength="500" :placeholder="$t('details_placeholder')" :rows="5" v-model="form.values.text" :error="form.$v.value.text.$error" />
						</FormGroup>
						<UIButton :text="$t('feedback_management_button')" icon="lucide:send" class="ml-auto w-full max-w-sm" @click="submit" />
					</div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script setup lang="ts">
import { required, minLength, email } from '@vuelidate/validators'

const { t } = useI18n()

const showContent = ref(true)
const loading = ref(false)

const form = useForm(
	{
		name: '',
		email: '',
		phone: '',
		text: ''
	},
	{
		email: { required, email },
		name: { required, minLength: minLength(3) },
		phone: { required, minLength: minLength(12) },
		text: { required, minLength: minLength(5) }
	}
)

const submit = async () => {
	form.$v.value.$touch()
	if (form.$v.value.$invalid) return
}

const breadcrumbItems = [
	{
		name: t('about_us.page_title'),
		path: '/about-us'
	},
	{
		name: t('contact'),
		path: '/contacts'
	},
	{
		name: t('feedback_management_title'),
		path: ''
	}
]
</script>
