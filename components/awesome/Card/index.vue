<script lang="ts" setup>
import { twMerge } from 'tailwind-merge'
const props = defineProps({
  disabled: {
    type: Boolean,
    required: false,
  },
  className: String,
})

const className = twMerge(
  'card',
  'w-full relative overflow-hidden',
  'border border-gray-950/10 rounded',
  'bg-white',
  'duration-300 transition-colors',
  'dark:border-gray-50/[0.2] dark:bg-gray-950',
  props.className
)
</script>

<template>
  <div :class="className">
    <div
      v-if="disabled"
      class="absolute z-10 top-0 left-0 w-full h-full bg-gray-900/[0.75] cursor-not-allowed"
    />
    <slot />
  </div>
</template>
