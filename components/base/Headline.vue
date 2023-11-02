<script setup lang="ts">
interface Props {
  level: '1' | '2' | '3'
  className: string
}
const props = withDefaults(defineProps<Props>(), {
  level: '3',
  className: 'text-2xl font-semibold mb-2',
})

const tagClassName = computed(() => {
  switch (props.level) {
    case '1':
      return 'text-4xl font-bold mb-4'
    case '2':
      return 'text-3xl font-bold mb-3'
    case '3':
      return 'text-2xl font-semibold mb-2'
    default:
      return 'text-2xl font-semibold mb-2'
  }
})

const className = computed(() => {
  return [tagClassName.value, props.className].join(' ')
})

const tag = computed(() => `h${props.level}`)
</script>

<template>
  <component :is="tag" :class="className"><slot /></component>
</template>
