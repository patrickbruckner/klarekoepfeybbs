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

    <div class="space-y-3">
      <p>
        Einen genauen Bericht zum Bürgerforum sowie eine detailierte
        Stellungnahme finden sie hier.
      </p>

      <div class="flex items-center gap-3">
        <AwesomeButton
          to="/projekte/gegen-schul-neubau/buergerforum"
          class="w-fit"
        >
          zum Bericht
        </AwesomeButton>
        <AwesomeButton
          to="/projekte/gegen-schul-neubau/buergerforum/stellungnahme"
          class="w-fit"
        >
          Stellungnahme
        </AwesomeButton>
      </div>
    </div>

    <ProjectSchoolArguments id="argumente" />

    <!-- Kosten -->
    <ProjectSchoolCost id="kosten" />

    <ProjectSchoolPhotos id="plaene" />

    <ProjectSchoolFurtherInformation id="informationen" />
  </LayoutPageWrapper>
</template>
