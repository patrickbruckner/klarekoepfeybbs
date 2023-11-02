<template>
  <details class="appearance-none" v-bind="$attrs">
    <summary class="flex flex-col cursor-pointer">
      <slot name="summary" />
    </summary>
    <div
      class="bg-white p-4 border rounded-md transition-all duration-300 ease-in-out"
    >
      <slot />
    </div>
  </details>
</template>
