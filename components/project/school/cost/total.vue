<script setup lang="ts">
const tableClassName = ['flex items-center justify-between'].join()
</script>

<template>
  <BaseHeadline level="3">Gesamt</BaseHeadline>
  <!-- Container -->
  <div class="mb-20 grid gap-5 md:grid-cols-2">
    <AwesomeCard>
      <!-- Neubau -->
      <AwesomeCardContent>
        <AwesomeCardTitle>Schul-Neubau</AwesomeCardTitle>
        <div class="text-lg">inklusive aller Kosten und Steuern</div>
        <BaseValue v="34.060.000" unit="€" class="text-4xl font-bold" />
      </AwesomeCardContent>
    </AwesomeCard>

    <!-- Umbau -->
    <AwesomeCard className="bg-green-50">
      <AwesomeCardContent>
        <AwesomeCardTitle>Umbau und Erweiterung</AwesomeCardTitle>
        <div class="text-lg">inklusive aller Kosten und Steuern</div>
        <BaseValue v="24.520.000" unit="€" class="text-4xl font-bold" />
      </AwesomeCardContent>
    </AwesomeCard>
  </div>
</template>
