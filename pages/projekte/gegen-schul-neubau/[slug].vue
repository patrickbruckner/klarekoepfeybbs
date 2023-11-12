<script lang="ts" setup>
definePageMeta({ layout: 'page' })

const { page } = useContent()
</script>

<template>
  <LayoutPageWrapper id="content" class="space-y-10">
    <!-- <ContentDoc /> -->
    <ContentRenderer v-if="page" :key="page._id" :value="page" />

    <div v-else>
      <LayoutPageSectionTitle>
        <span class="text-2xl font-bold">Inhalt nicht gefunden.</span>
      </LayoutPageSectionTitle>

      Leider konnte der gewünschte Inhalt nicht gefunden werden. Hier kommen sie
      zurück zum Projekt.
    </div>

    <AwesomeButton to="/projekte/gegen-schul-neubau" class="mt-4">
      zum Projekt
    </AwesomeButton>
  </LayoutPageWrapper>
</template>

<style scoped>
#content :deep(h1) {
  @apply text-2xl font-semibold mb-2;
}

#content :deep(h2) {
  margin-top: 2rem;
  margin-bottom: 1rem;
  @apply text-xl font-semibold mb-2;
}

#content :deep(p) {
  margin-bottom: 1.5rem;
}
</style>
