<script setup lang="ts">
const tableClassName = ['flex items-center justify-between'].join()
</script>

<template>
  <BaseHeadline level="3">Baukosten</BaseHeadline>
  <!-- Container -->
  <div class="mb-20 grid gap-5 md:grid-cols-2">
    <AwesomeCard>
      <!-- Neubau -->
      <AwesomeCardContent>
        <BaseAccordion>
          <template #summary>
            <AwesomeCardTitle>Neubau</AwesomeCardTitle>
            <div class="text-lg">am Traingsplatz Hallenbad</div>
            <BaseValue v="27.000.000" unit="€" class="text-4xl font-bold" />
          </template>
          <!-- Details -->
          <div>
            Inbegriffen: Einrichtung, Technikräume, LÜ Zentrale, Pausenflächen,
            Sanitärräume
          </div>
          <div class="mt-2">
            <b>Nutzfläche:</b>
            <div class="flex justify-between items-center">
              <label>2.Obergeschoss:</label>
              <BaseValue v="2.300" unit="m2" />
            </div>
            <div class="flex justify-between items-center">
              <label>1.Obergeschoss:</label>
              <BaseValue v="2.300" unit="m2" />
            </div>
            <div class="flex justify-between items-center">
              <label>Erdgeschoss:</label>
              <BaseValue v="1.400" unit="m2" />
            </div>
            <div
              class="flex justify-between items-center border-t font-semibold"
            >
              <label>Gesamt:</label>
              <BaseValue v="6.000" unit="m2" />
            </div>
          </div>
        </BaseAccordion>
      </AwesomeCardContent>
    </AwesomeCard>

    <!-- Umbau -->
    <AwesomeCard className="bg-green-50 dark:bg-green-700">
      <AwesomeCardContent>
        <BaseAccordion>
          <template #summary>
            <AwesomeCardTitle>Umbau</AwesomeCardTitle>
            <div class="text-lg">am bestehenden Standort</div>
            <BaseValue v="19.820.000" unit="€" class="text-4xl font-bold" />
          </template>

          <div class="flex flex-col gap-4">
            <div>
              <div class="font-semibold">Neubauerweiterung IT HTL</div>
              <p class="text-sm">Erschwernis durch Bestand</p>
            </div>

            <div class="">
              <div :class="tableClassName">
                <div>Erweiterung</div>
                <BaseValue v=" 11.270.000" unit="€" />
              </div>
              <div :class="tableClassName">
                <div>Abriss</div>
                <BaseValue v="400.000" unit="€" />
              </div>
              <div :class="tableClassName">
                <div>Umbau HTL</div>
                <BaseValue v="2.430.000" unit="€" />
              </div>
              <div :class="tableClassName">
                <div>Umbau HAK</div>
                <BaseValue v="5.720.000" unit="€" />
              </div>
              <div :class="tableClassName + ' border-t text-2xl font-bold'">
                <div>Gesamt</div>
                <BaseValue v="19.820.000" unit="€" />
              </div>
            </div>

            <div class="mt-2">
              <b>Nutzfläche:</b>
              <div class="flex justify-between items-center">
                <label>Bestand HTL:</label>
                <BaseValue v="1.360" unit="m2" />
              </div>
              <div class="flex justify-between items-center">
                <label>Bestand HAK:</label>
                <BaseValue v="2.190" unit="m2" />
              </div>
              <div class="flex justify-between items-center">
                <label>Erweiterung:</label>
                <BaseValue v="2.450" unit="m2" />
              </div>
              <div
                class="flex justify-between items-center border-t font-semibold"
              >
                <label>Gesamt:</label>
                <BaseValue v="6.000" unit="m2" />
              </div>
            </div>
          </div>
        </BaseAccordion>
      </AwesomeCardContent>
    </AwesomeCard>
  </div>
</template>
