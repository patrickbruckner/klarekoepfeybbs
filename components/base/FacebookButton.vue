<script setup lang="ts">
import { twMerge } from 'tailwind-merge'

const facebookHexCode = '#1877F2'
</script>

<template>
  <nuxt-link
    to="https://www.facebook.com/profile.php?id=61552866832620"
    rel="noopener noreferrer"
    tag="a"
    :class="
      twMerge(
        'h-14 px-8 border rounded-lg',
        'flex items-center justify-center gap-2',
        'text-lg font-semibold',
        `text-white bg-facebook border-facebook/20`,
        'transition-color duration-300 cursor-pointer',
        '',
        // Hover
        'hover:bg-facebook-hover',
        // Focus
        'focus:outline-none',
        'focus:ring-1 focus:ring-offset-1',
        'focus:ring-facebook/60 focus:ring-offset-facebook/60'
      )
    "
  >
    <Icon name="ic:baseline-facebook" />
    Facebook
  </nuxt-link>
</template>
