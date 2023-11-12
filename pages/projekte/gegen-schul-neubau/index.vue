<script lang="ts" setup>
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '', title: 'Gegen den Schul-Neubau' })
</script>

<template>
  <LayoutPageWrapper class="space-y-10">
    <ProjectSchoolHeader />

    <LayoutPageSectionTitle>
      <span class="text-2xl font-bold">Bürgerforum am 3.11.2023</span>
    </LayoutPageSectionTitle>

    Wie das Bürgerforum abgelaufen ist, erfahren Sie hier.

    <AwesomeButton to="/projekte/gegen-schul-neubau/buergerforum" class="w-fit">
      zum Bericht
    </AwesomeButton>

    <ProjectSchoolArguments id="argumente" />

    <!-- Kosten -->
    <ProjectSchoolCost id="kosten" />

    <ProjectSchoolPhotos id="plaene" />

    <ProjectSchoolFurtherInformation id="informationen" />
  </LayoutPageWrapper>
</template>
