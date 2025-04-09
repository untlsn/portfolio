<script lang="ts" setup>
defineProps<{
  icon: string;
  href: string;
}>();
</script>

<template>
  <p>
    <NuxtLink :href>
      <UIcon :name="icon" />
      <span><slot /></span>
    </NuxtLink>
  </p>
</template>

<style scoped>

</style>
