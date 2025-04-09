<script lang="ts" setup>
import { animate, stagger } from 'animejs';

const props = defineProps<{
  list:   { icon: string; label: string; href: string }[];
  right?: boolean;
}>();

useAnimeScopeSafe(useTemplateRef('buttons-root'), () => {
  animate('a', {
    x:        stagger(props.right ? '-5rem' : '5rem'),
    delay:    stagger(100),
    duration: stagger(200, { start: 500 }),
  });
});
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
      class="flex gap-3 ml-2 w-min"
      :class="right && 'ml-auto'"
    >
      <UButton
        v-for="({ icon: name, label, href }, i) in list"
        :key="name"
        variant="outline"
        :style="{ '--index': props.right ? list.length - i - 1 : -i }"
        class="text-white motion-safe:translate-x-[calc(var(--index)*5rem)] relative group"
        :aria-label="label"
        target="_blank"
        :href
      >
        <UIcon
          :name
          class="text-[4rem] size-12"
        />
        <span class="absolute top-full w-16 text-center -translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {{ label }}
        </span>
      </UButton>
    </div>
  </section>
</template>

<style scoped>

</style>
