<script setup>
import { required, minLength, sameAs } from '@vuelidate/validators'
import { useMutation } from '@tanstack/vue-query'

const { $axios } = useNuxtApp()
const loading = ref(false)
const { t } = useI18n()

const form = useForm(
	{
		name: '',
		phone: '',
		text: '',
		checked: false
	},
	{
		name: { required, minLength: minLength(5) },
		phone: { required, minLength: minLength(12) },
		text: { required },
		checked: { sameAsTrue: sameAs(true) }
	}
)

const { mutate, isPending } = useMutation({
	mutationFn: () => {
		return $axios
			.post('/ielts/Contact/', {
				...form.values,
				phone: '+998' + form.values.phone.replace(/ /g, ''),
				checked: undefined
			})
			.then((res) => {
				console.log(res)
				form.values = {
					name: '',
					phone: '',
					text: '',
					checked: false
				}
				form.$v.value.$reset()
				alert(t('your_request_successfully_sent'))
				return res.data
			})
	}
})

const submit = () => {
	form.$v.value.$touch()
	if (!form.$v.value.$invalid) {
		mutate()
	}
}
</script>

<template>
	<div class="md:mx-9">
		<div class="bg-white border-2 border-white md:rounded-[36px] shadow-card py-8 md:py-16 mt-8 md:my-16 flex flex-col items-center justify-center gap-6 md:gap-12 text-center">
			<div class="flex flex-col items-center gap-1">
				<p class="text-base leading-140">{{ $t('could_not_find_an_answer') }}</p>
				<h3 class="text-2xl md:text-[28px] font-bold leading-130">{{ $t('explain_your_matter_and_send_the_inquiry_using_the_form_below') }}</h3>
			</div>
			<div class="flex flex-col gap-3 md:gap-5 max-w-[724px] w-full max-md:px-4">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
					<FormGroup :label="$t('your_name')">
						<FormInput variant="filled" :placeholder="$t('your_name_placeholder')" v-model="form.values.name" :error="form.$v.value.name.$error" />
					</FormGroup>
					<FormGroup :label="$t('phone_number')">
						<FormInput variant="filled" placeholder="00 000 00 00" v-maska="'## ### ## ##'" v-model="form.values.phone" :error="form.$v.value.phone.$error" class="!gap-1">
							<template #prefix>
								<span class="text-base font-normal outline-none text-gray-6 leading-130"> +998 </span>
							</template>
						</FormInput>
					</FormGroup>
				</div>
				<FormGroup :label="$t('explain_the_matter')">
					<FormTextarea variant="filled" :maxlength="500" :placeholder="$t('matter_placeholder')" :rows="4" v-model="form.values.text" :error="form.$v.value.text.$error" />
				</FormGroup>
				<div class="flex flex-col md:flex-row items-start md:items-center gap-6 text-left">
					<FormCheckbox v-model="form.values.checked" :error="form.$v.value.checked.$error">
						<template #label>
							<span class="leading-130 text-[13px] text-gray-6 font-normal">
								{{ $t('privacy_label') }}
								<a href="/" target="_blank" class="text-blue"> {{ $t('privacy_label_link') }} </a>
							</span>
						</template>
					</FormCheckbox>

					<UIButton class="max-w-[207px] w-full" :loading :text="$t('lets_go')" @click="submit" />
				</div>
			</div>
		</div>
	</div>
</template>
