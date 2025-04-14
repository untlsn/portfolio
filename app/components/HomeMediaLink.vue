<script lang="ts" setup>
defineProps<{
  icon: string;
  href: string;
}>();
</script>

<template>
  <p>
    <NuxtLink
      :href
      target="_blank"
    >
      <UIcon :name="icon" />
      <span><slot /></span>
    </NuxtLink>
  </p>
</template>

<style scoped>

</style>
