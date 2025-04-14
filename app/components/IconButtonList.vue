<script lang="ts" setup>
defineProps<{
  list:   { icon: string; label: string; href: string }[];
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
      ref="buttons-root"
      class="flex gap-4 ml-2 w-min max-lg:flex-col"
      :class="right && 'ml-auto flex-row-reverse'"
    >
      <UButton
        v-for="({ icon: name, label, href }, i) in list"
        :key="name"
        variant="outline"
        :style="{ 'animation-duration': `${i * .2}s`, '--translate-x': `${(right ? i : -i) * 5}rem`, '--translate-y': `${i * -5}rem` }"
        class="text-white size-16 relative group move lg:motion-safe:translate-x-(--translate-x) max-lg:motion-safe:translate-y-(--translate-y)"
        :aria-label="label"
        target="_blank"
        :href
      >
        <UIcon
          :name
          class="text-[4rem] size-12"
        />
        <span class="absolute top-full left-0 w-16 text-center -translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {{ label }}
        </span>
      </UButton>
    </div>
  </section>
</template>

<style scoped>
@keyframes move {
  to {translate: 0 }
}

@media (prefers-reduced-motion: no-preference) {
  .move {
    animation: move linear forwards;
  }
}
</style>
