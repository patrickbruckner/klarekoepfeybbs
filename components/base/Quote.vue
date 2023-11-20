<script setup lang="ts">
interface Props {
  by: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="mb-10">
    <slot />
    <p class="mt-2 italic">Zitat von {{ by }}</p>
  </div>
</template>
