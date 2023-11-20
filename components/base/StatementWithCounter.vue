<script setup lang="ts">
interface Props {
  statement: string
  statementFrom: string
  answer?: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="border rounded-md p-4 mb-4">
    <p class="mb-4">
      <span v-if="statementFrom" class="font-bold">
        Statement {{ statementFrom }}:</span
      >
      {{ statement }}
    </p>

    <p class="text-red-700 font-bold">
      <slot> {{ answer }}</slot>
    </p>
  </div>
</template>
