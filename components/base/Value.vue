<script setup lang="ts">
interface Props {
  v: string | number
  unit: 'm' | 'm2' | 'm3' | '€'
  valueClassName?: string
  unitClassName?: string
}
const props = defineProps<Props>()

const valueClassName = computed(() => {
  return ['', props.valueClassName].join(' ')
})
const unitClassName = computed(() => {
  return ['text-[.8em]', props.unitClassName].join(' ')
})
</script>

<template>
  <span>
    <span :class="valueClassName">{{ v }}&nbsp;</span>
    <span v-if="unit === 'm'" :class="unitClassName">m</span>
    <span v-if="unit === 'm2'" :class="unitClassName">m<sup>2</sup></span>
    <span v-if="unit === 'm3'" :class="unitClassName">m<sup>2</sup></span>
    <span v-if="unit === '€'" :class="unitClassName">€</span>
  </span>
</template>
