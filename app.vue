<script lang="ts" setup>
const url = 'https://www.klarekoepfeybbs.at/'
const title = 'Klare Köpfe Ybbs'
const description =
  '... ist eine offene, unabhängige und überparteiliche Bürger:innenbewegung, in der sich Menschen zusammenfinden, um mit Engagement, wirtschaftlichem Hausverstand und profundem Wissen, die Entwicklung in unserer Stadt positiv zu beeinflussen.'

useHead({
  title,
  titleTemplate: `%s - Klare Köpfe Ybbs`,
  htmlAttrs: {
    lang: 'de',
  },
  link: [{ rel: 'canonical', href: url }],
  meta: [
    { property: 'og:title', content: title },
    {
      property: 'og:description',
      content: description,
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: url },
    { property: 'og:locale', content: 'de_AT' },
    { property: 'og:image', content: `${url}icon.png` },
  ],
})

//TODO: Email Weiterleitung
// email: rudolf-wolfgang.braun@gmx.at

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: '/icon.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <Body
    class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-950"
  >
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </Body>
</template>
