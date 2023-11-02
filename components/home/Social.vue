<script setup lang="ts">
import FacebookButton from '../base/FacebookButton.vue'
import InstagramButton from '../base/InstagramButton.vue'
</script>

<template>
  <LayoutPageSection class="space-y-4 px-4">
    <LayoutPageSectionTitle class="text-center">
      <span class="text-2xl font-bold">
        Weitere Informationen auf Social Media
      </span>
    </LayoutPageSectionTitle>

    <div class="flex justify-center gap-5">
      <FacebookButton />
      <InstagramButton />
    </div>
  </LayoutPageSection>
</template>
