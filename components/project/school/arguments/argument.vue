import { Icon } from '.nuxt/components';
<script setup lang="ts">
interface Props {
  pro?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  pro: false,
})
</script>

<template>
  <div class="flex gap-4 items-center">
    <Icon
      :name="pro ? 'fa-check' : 'fa-times'"
      :class="pro ? 'text-green-500' : 'text-red-500'"
    />
    <div>
      <slot />
    </div>
  </div>
</template>
