<script lang="ts" setup>
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '', title: 'Gegen den Schul-Neubau' })
</script>

<template>
  <LayoutPageWrapper class="space-y-10">
    <ProjectSchoolHeader />

    <ProjectSchoolArguments id="argumente" />

    <ProjectSchoolFurtherInformation id="informationen" />

    <!-- Kosten -->
    <ProjectSchoolCost id="kosten" />

    <ProjectSchoolPhotos id="plaene" />
  </LayoutPageWrapper>
</template>
