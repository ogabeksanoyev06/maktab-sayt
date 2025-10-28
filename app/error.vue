<script setup lang="ts">
import type { NuxtError } from "#app";

defineProps<{
  error: NuxtError;
}>();

useSeoMeta({
  title: "Sahifa topilmadi | 3-maktab",
  description:
    "Kechirasiz, siz qidirayotgan sahifa topilmadi. Ehtimol, manzil noto‘g‘ri kiritilgan yoki sahifa o‘chirilgan bo‘lishi mumkin.",
});

useHead({
  htmlAttrs: {
    lang: "uz",
  },
});
</script>

<template>
  <UApp>
    <div
      class="min-h-screen flex flex-col items-center justify-center text-center bg-bg text-text transition-colors duration-300 p-6"
    >
      <h1 class="text-8xl font-bold text-primary mb-4">
        {{ error.statusCode || 404 }}
      </h1>

      <h2 class="text-2xl font-semibold mb-2">Sahifa topilmadi</h2>

      <p class="text-text-muted mb-6 max-w-md">
        Kechirasiz, siz izlagan sahifa mavjud emas yoki vaqtincha o‘chirilgan.
        Iltimos, manzilni tekshiring yoki bosh sahifaga qayting.
      </p>

      <NuxtLink
        to="/"
        class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium bg-primary text-white hover:bg-primary/90 transition-300"
      >
        <span class="i-lucide-home"></span>
        Bosh sahifaga qaytish
      </NuxtLink>
    </div>
  </UApp>
</template>
