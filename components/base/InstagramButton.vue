<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
</script>

<template>
  <nuxt-link
    to="https://www.instagram.com/klarekoepfeybbs"
    rel="noopener noreferrer"
    tag="a"
    :class="
      twMerge(
        'h-14 px-8 border rounded-lg',
        'flex items-center justify-center gap-2',
        'text-lg font-semibold',
        `text-white bg-instagram border-instagram/20`,
        'transition-color duration-300 cursor-pointer',
        '',
        // Hover
        'hover:bg-instagram-hover ',
        // Focus
        'focus:outline-none',
        'focus:ring-1 focus:ring-offset-1',
        'focus:ring-instagram/60 focus:ring-offset-instagram/60'
      )
    "
  >
    <Icon name="mdi:instagram" />
    Instagram
  </nuxt-link>
</template>
