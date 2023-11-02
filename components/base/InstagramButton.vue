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
        `text-gray-800 bg-instagram border-gray-200`,
        'transition-color duration-300 cursor-pointer',
        '',
        // Hover
        'hover:bg-gray-300 ',
        // Focus
        'focus:outline-none',
        'focus:ring-1 focus:ring-offset-1',
        'focus:ring-gray-600/[0.6] focus:ring-offset-gray-800/[0.6]',
        // Dark mode
        `dark:text-white dark:border-gray-800 dark:bg-instagram`,
        `dark:hover:bg-instagram-hover`,
        'focus:dark:ring-offset-gray-50 focus:dark:ring-gray-400'
      )
    "
  >
    <Icon name="mdi:instagram" />
    Instagram
  </nuxt-link>
</template>
