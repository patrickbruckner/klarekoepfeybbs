<script setup lang="ts">
const tableClassName = ['flex items-center justify-between gap-4'].join()
</script>

<template>
  <BaseHeadline level="3">Zusatzkosten</BaseHeadline>
  <!-- Container -->
  <div class="mb-20 grid gap-5 md:grid-cols-2">
    <AwesomeCard>
      <!-- Neubau -->
      <AwesomeCardContent>
        <BaseAccordion>
          <template #summary>
            <AwesomeCardTitle>Neubau</AwesomeCardTitle>
            <BaseValue v="1.080.000" unit="€" class="text-4xl font-bold" />
          </template>
          <!-- Details -->
          <b>Innbegriffen:</b>
          <div class="mt-2 grid gap-4">
            <div :class="tableClassName">
              <label>
                Kleinfeld Sportplatz <BaseValue v="900" unit="m2" />
                <p class="text-sm">Kunstrasen, Aussenanlagen</p>
              </label>
              <BaseValue v="250.000" unit="€" />
            </div>
            <div :class="tableClassName">
              <label>Verlegung Beach-Volleyball Platz</label>
              <BaseValue v="40.000" unit="€" />
            </div>
            <div :class="tableClassName">
              <label>Verlegung Paddel Platz</label>
              <BaseValue v="90.000" unit="€" />
            </div>
            <div :class="tableClassName">
              <label>Fussgänger Überführung B25 / Busbahnhof</label>
              <BaseValue v="350.000" unit="€" />
            </div>
            <div :class="tableClassName">
              <label>
                Neubaukosten Infrastruktur Anschluss
                <p class="text-sm">Kanal und Strom in der Sportplatzstrasse</p>
              </label>
              <BaseValue v="250.000" unit="€" />
            </div>
            <div :class="tableClassName">
              <label> Verkehrsmassnahmen Sportplatzstrasse u Umgebung </label>
              <BaseValue v="100.000" unit="€" />
            </div>
            <div :class="tableClassName + ' border-t font-semibold'">
              <label>Gesamt:</label>
              <BaseValue v="1.080.000" unit="€" />
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
            <BaseValue v="1.000.000" unit="€" class="text-4xl font-bold" />
          </template>
          <!-- Details -->
          <b>Innbegriffen:</b>
          <div class="mt-2 grid gap-2">
            <div :class="tableClassName">
              <label> Neubau Anteilig Infrastruktur </label>
              <BaseValue v="100.000" unit="€" />
            </div>
            <div :class="tableClassName">
              <label> Verkehrsmassnahmen Begegnungszone </label>
              <BaseValue v="300.000" unit="€" />
            </div>
            <div :class="tableClassName">
              <label>
                Schul Provisorium für Bauvorhaben in 2 Etappen
                <p class="text-sm">
                  am Standort Burggebäude, Adaptierung, Provisorien, Anpassung,
                  für Nachnutzung vorbereitet und geeignet
                </p>
              </label>
              <BaseValue v="600.000" unit="€" />
            </div>
            <div :class="tableClassName + ' border-t font-semibold'">
              <label>Gesamt:</label>
              <BaseValue v="1.000.000" unit="€" />
            </div>
          </div>
        </BaseAccordion>
      </AwesomeCardContent>
    </AwesomeCard>
  </div>
</template>
