<script setup lang="ts">
definePageMeta({ layout: 'bare' })
useHead({ titleTemplate: '', title: 'Bearbeitung - Klare Köpfe Ybbs' })
</script>

<template>
  <LayoutPageWrapper class="space-y-5">
    <LayoutPageSectionTitle>Im Aufbau</LayoutPageSectionTitle>

    <AwesomeCard>
      <AwesomeCardContent class="grid items-center justify-center gap-5">
        <BaseHeadline level="1">
          🚧 Unsere Webseite ist bald für Sie da! 🚧
        </BaseHeadline>
        <p>
          Hallo und herzlich willkommen! Wir freuen uns über Ihr Interesse und
          bedauern, dass Sie uns gerade nicht online besuchen können. Aber keine
          Sorge, hinter den Kulissen passiert Großartiges!
        </p>
        <BasePetitionButton />
      </AwesomeCardContent>
    </AwesomeCard>
  </LayoutPageWrapper>
</template>
