<script setup lang="ts">
interface Props {
  elements: { href: string; text: string }[]
}
const _props = defineProps<Props>()

const indexItemClassName = [
  'flex items-center justify-start',
  'gap-10',
  '',
  '',
  '',
  '',
].join()
</script>

<template>
  <div class="w-full">
    <BaseHeadline level="3">Inhaltsverzeichnis</BaseHeadline>
    <AwesomeLink
      v-for="element in elements"
      :key="element.href"
      :class="indexItemClassName"
      :href="element.href"
    >
      <Icon size="12" class="text-sm mr-3" name="fa-arrow-right" />
      <span>{{ element.text }}</span>
    </AwesomeLink>
  </div>
</template>
