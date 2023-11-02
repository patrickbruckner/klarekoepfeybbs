<script setup lang="ts">
interface Props {
  small?: boolean
}
const props = defineProps<Props>()

const petitionText = 'Zur Aktuellen Petition'

const petitionLink =
  'https://www.openpetition.eu/at/petition/online/schulstandort-it-htl-ybbs'
</script>

<template>
  <nuxt-link
    v-if="!small"
    :to="petitionLink"
    rel="noopener noreferrer"
    tag="a"
    class="cursor-pointer border transition-color duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:dark:ring-offset-gray-50 focus:dark:ring-gray-400 focus:ring-gray-600/[0.6] focus:ring-offset-gray-800/[0.6] flex items-center justify-center font-semibold text-white bg-primary-500 hover:bg-primary-400 border-primary-500 h-14 px-8 text-lg rounded-lg font-extrabold"
  >
    {{ petitionText }}
  </nuxt-link>

  <AwesomeButton v-if="small" :href="petitionLink">
    {{ petitionText }}
  </AwesomeButton>
</template>
