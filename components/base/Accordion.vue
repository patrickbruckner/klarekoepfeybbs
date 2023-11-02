<script setup lang="ts">
import { ref } from 'vue'

const detailsElement = ref<HTMLDetailsElement>()
const open = ref(false)

function toggle() {
  if (!detailsElement.value) {
    return
  }

  open.value = !open.value
  detailsElement.value.open = open.value
}
</script>

<template>
  <details ref="detailsElement" class="appearance-none" v-bind="$attrs">
    <summary
      class="relative flex flex-col cursor-pointer"
      @click.prevent="toggle"
    >
      <slot name="summary" />
      <AwesomeButton class="absolute right-0 top-1/2 -translate-y-1/2">
        <Icon v-if="!open" name="fa-arrow-down" />
        <Icon v-if="open" name="fa-arrow-up" />
      </AwesomeButton>
    </summary>
    <div
      class="bg-white p-4 border rounded-md transition-all duration-300 ease-in-out"
    >
      <slot />
    </div>
  </details>
</template>
