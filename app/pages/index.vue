<script setup lang="ts">
const autoScroll = computed(() => {
  return import.meta.browser
    && window.matchMedia('(prefers-reduced-motion: no-preference)').matches
    && { stopOnMouseEnter: true, stopOnInteraction: false, startDelay: 0 };
});
</script>

<template>
  <div>
    <HomeHeader />
    <main class="max-w-7xl mx-auto border-x-2 py-12">
      <div class="grid lg:grid-cols-3 px-12">
        <h1 class="text-4xl mt-12 text-blue-400">
          {{ $t('welcome-message') }}
        </h1>
        <UIcon
          name="my:title-image"
          class="text-[16rem] mx-auto w-[1em] block my-12"
        />
        <p class="text-2xl mb-12 ml-auto self-end text-vaporware-900">
          Web developer
        </p>
      </div>
      <div class="grid lg:grid-cols-2 border-y">
        <article class="py-6 px-12">
          <header class="text-3xl my-4 text-blue-400">
            {{ $t('dev-desc.0') }}
          </header>
          <p
            v-for="i in 5"
            :key="i"
          >
            {{ $t(`dev-desc.${i}`) }}
          </p>
        </article>
        <article class="text-right border-l py-6 px-12">
          <header class="text-3xl my-4 text-vaporware-900">
            Media
          </header>
          <HomeMediaLink
            href="https://github.com/untlsn"
            icon="simple-icons:github"
          >
            Github
          </HomeMediaLink>
          <HomeMediaLink
            href="https://exercism.org/profiles/Untlsn"
            icon="simple-icons:exercism"
          >
            Exercism
          </HomeMediaLink>
          <HomeMediaLink
            href="https://www.frontendmentor.io/profile/untlsn"
            icon="simple-icons:frontendmentor"
          >
            Frontend Mentor
          </HomeMediaLink>
        </article>
      </div>
      <article class="contents">
        <HomeGradientTitle>
          Frontend:
        </HomeGradientTitle>
        <div class="grid lg:grid-cols-2">
          <IconButtonList
            :list="[
              { label: 'NuxtJS', href: 'https://nuxt.com/', icon: 'devicon:nuxtjs' },
              { label: 'NextJS', href: 'https://nextjs.org/', icon: 'devicon:nextjs' },
              { label: 'SolidJS', href: 'https://docs.solidjs.com/', icon: 'devicon:solidjs' },
              { label: 'NestJS', href: 'https://nestjs.com/', icon: 'devicon:nestjs' },
            ]"
          >
            {{ $t('frameworks') }}:
          </IconButtonList>
          <IconButtonList
            right
            :list="[
              { label: 'Tailwind', href: 'https://tailwindcss.com/', icon: 'devicon:tailwindcss' },
              { label: 'ChartJS', href: 'https://www.chartjs.org/', icon: 'devicon:chartjs' },
              { label: 'Clerk', href: 'https://clerk.com/', icon: 'simple-icons:clerk' },
              { label: 'tRPC', href: 'https://trpc.io/', icon: 'devicon:trpc' },
            ]"
          >
            {{ $t('additional-technologies') }}:
          </IconButtonList>
        </div>
        <section class="border-y py-6 px-12 space-y-4">
          <p>{{ $t('frontend-desc.0') }}</p>
          <p>{{ $t('frontend-desc.1') }}</p>
        </section>
      </article>
      <article>
        <HomeGradientTitle>
          {{ $t('project-types.generic') }}
        </HomeGradientTitle>
        <section>
          <header class="text-2xl px-12 py-6 text-blue-400">
            {{ $t('project-types.internal') }}
          </header>
          <div class="px-12">
            <UAccordion
              class="border-1 px-4"
              type="multiple"
              :items="Array(7).fill({})"
            >
              <template #default="{ index }">
                <span class="min-w-32 inline-block">{{ $t(`projects-names.${index}`) }}:</span>
                <span>{{ $t(`projects-subname.${index}`) }}</span>
              </template>
              <template #content="{ index }">
                <p
                  v-for="(_, i) in 3"
                  :key="i"
                  class="mb-2"
                >
                  <b class="inline-block w-48">{{ $t(`project-desc-names.${i}`) }}: </b>
                  {{ $t(`project-desc.${index}.${i}`) }}
                </p>
              </template>
            </UAccordion>
          </div>
        </section>
        <section>
          <header class="text-2xl px-12 py-6 text-right text-vaporware-900">
            Frontend Mentor
          </header>
          <UCarousel
            :ui="{ item: 'basis-1/2 lg:basis-1/5 self-center' }"
            loop
            :auto-scroll
            :items="[
              { image: '/screens/frontend-mentor-1.png', link: 'https://www.frontendmentor.io/solutions/nuxt3-with-unocss-cgrYMGG-yq' },
              { image: '/screens/frontend-mentor-2.png', link: 'https://www.frontendmentor.io/solutions/solidstart-static-with-unocss-NskJDyVfG-' },
              { image: '/screens/frontend-mentor-3.png', link: 'https://www.frontendmentor.io/solutions/solidjs-with-unocss-pg5BFH-eXO' },
              { image: '/screens/frontend-mentor-4.png', link: 'https://www.frontendmentor.io/solutions/solidstart-static-with-unocss-088rc8H2k3' },
              { image: '/screens/frontend-mentor-5.png', link: 'https://www.frontendmentor.io/solutions/solidstart-static-with-unocss-9ST2Nn3RZf' },
              { image: '/screens/frontend-mentor-6.png', link: 'https://www.frontendmentor.io/solutions/solidstart-static-with-unocss-BR9JH0LrEn' },
              { image: '/screens/frontend-mentor-7.png', link: 'https://www.frontendmentor.io/solutions/vue-with-vitesse-UcXXmyXUbF' },
              { image: '/screens/frontend-mentor-8.png', link: 'https://www.frontendmentor.io/solutions/vue3-random-advice-app-with-cooldown-XEQd8E-gB' },
            ]"
          >
            <template #default="{ item, index }">
              <NuxtLink
                :href="item.link"
                target="_blank"
              >
                <img
                  :src="item.image"
                  :alt="`frontend-mentor-${index}`"
                >
              </NuxtLink>
            </template>
          </UCarousel>
        </section>
      </article>
    </main>
  </div>
</template>
