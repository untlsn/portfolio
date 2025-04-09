<script lang="ts" setup>
import { pl, en } from '@nuxt/ui/locale';

const { locale } = useI18n();

const pickedLocale = computed(() => locale.value === 'pl' ? pl : en);
</script>

<template>
  <UApp :locale="pickedLocale">
    <NuxtPage />
  </UApp>
</template>
