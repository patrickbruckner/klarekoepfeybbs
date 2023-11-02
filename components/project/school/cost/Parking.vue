<script setup lang="ts">
const tableClassName = ['flex items-center justify-between'].join()
</script>

<template>
  <BaseHeadline level="3">Parken</BaseHeadline>
  <!-- Container -->
  <div class="mb-20 grid gap-5 md:grid-cols-2">
    <AwesomeCard>
      <!-- Neubau -->
      <AwesomeCardContent>
        <AwesomeCardTitle>Kellergeschoss Parkebene</AwesomeCardTitle>
        <div class="text-lg">
          im Hochwasser/Grundwasserbereich, Fahrtrampen, 100 Stellplätze
        </div>
        <BaseValue v="5.980.000" unit="€" class="text-4xl font-bold" />
      </AwesomeCardContent>
    </AwesomeCard>

    <!-- Umbau -->
    <AwesomeCard class="bg-green-50">
      <AwesomeCardContent>
        <AwesomeCardTitle>Parkhaus mit 3 Ebenen</AwesomeCardTitle>
        <div class="text-lg">begrünte Fassade, 70 Stellplätze</div>
        <BaseValue v="3.700.000" unit="€" class="text-4xl font-bold" />
      </AwesomeCardContent>
    </AwesomeCard>
  </div>
</template>
