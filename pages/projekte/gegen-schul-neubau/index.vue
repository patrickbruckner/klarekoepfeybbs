<script lang="ts" setup>
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '', title: 'Gegen den Schul-Neubau' })
</script>

<template>
  <LayoutPageWrapper class="space-y-10">
    <ProjectSchoolHeader />

    <img src="/images/projekte/schulbau/SkizzeNeubau.jpg" alt="Skizze Neubau" />

    <BaseContentIndex
      :elements="[
        { href: '#argumente', text: 'Warum wir uns einbringen' },
        { href: '#informationen', text: 'Weitere Informationen' },
        { href: '#kosten', text: 'Projektkosten' },
        { href: '#plaene', text: 'Pläne und Skizzen' },
      ]"
    />

    <ProjectSchoolArguments id="argumente" />

    <ProjectSchoolFurtherInformation id="informationen" />

    <!-- Kosten -->
    <ProjectSchoolCost id="kosten" />

    <ProjectSchoolPhotos id="plaene" />
  </LayoutPageWrapper>
</template>
