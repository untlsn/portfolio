<script lang="ts" setup>
const { locale: getLocale, setLocale } = useI18n();
const locale = computed({
  get: () => getLocale.value,
  set: (value) => setLocale(value),
});

const items = [
  { label: 'English', value: 'en' },
  { label: 'Polski', value: 'pl' },
];
</script>

<template>
  <header class="border-b-1 border-vaporware-600/60 flex py-2 px-12 gap-4 items-center">
    <NuxtImg
      src="/favicon.svg"
      width="32"
    />
    <h1 class="text-2xl mr-auto">
      Filip Skoczeń Portfolio
    </h1>
    <USelect
      v-model="locale"
      :items
      default-value="English"
    />
    <NuxtLink
      href="https://github.com/untlsn"
      target="_blank"
      aria-label="GitHub"
    >
      <UIcon
        name="simple-icons:github"
        class="text-3xl leading-0"
      />
    </NuxtLink>
  </header>
</template>

<style scoped>

</style>
