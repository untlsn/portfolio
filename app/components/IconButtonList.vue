<script lang="ts" setup>
defineProps<{
  list:   string[];
  right?: boolean;
}>();
</script>

<template>
  <section
    class="px-12 py-6"
    :class="right && 'text-right'"
  >
    <header
      class="text-2xl mb-4 "
      :class="right ? 'text-vaporware-900' : 'text-blue-400'"
    >
      <slot />
    </header>
    <div
      class="flex gap-2 ml-2 w-min"
      :class="right && 'ml-auto'"
    >
      <UButton
        v-for="name in list"
        :key="name"
        variant="outline"
        class="text-white"
      >
        <UIcon
          :name
          class="text-[4rem]"
        />
      </UButton>
    </div>
  </section>
</template>

<style scoped>

</style>
