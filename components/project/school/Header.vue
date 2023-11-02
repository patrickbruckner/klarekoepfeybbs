<script setup lang="ts"></script>

<template>
  <!-- Projects -->
  <LayoutPageSection>
    <div class="grid gap-4 md:grid-cols-2 items-center">
      <div class="grid gap-5">
        <LayoutPageSectionTitle>
          Gegen den Schul-Neubau / Für den Umbau
        </LayoutPageSectionTitle>
        <p>
          Ein Initiativantrag mit Unterschriftensammlung an den Gemeinderat soll
          die politisch Verantwortlichen in Ybbs an der Donau dazu bewegen, die
          Realisierung dieses Projekts zu überdenken und eine nachhaltige
          Alternative am Standort in Erwägung zu ziehen.
        </p>

        <BaseContentIndex
          :elements="[
            { href: '#argumente', text: 'Warum wir uns einbringen' },
            { href: '#informationen', text: 'Weitere Informationen' },
            { href: '#kosten', text: 'Projektkosten' },
            { href: '#plaene', text: 'Pläne und Skizzen' },
          ]"
        />
      </div>

      <img
        class="rounded-md shadow-lg"
        src="/images/projekte/schulbau/SkizzeNeubau.jpg"
        alt="Skizze Neubau"
      />
    </div>
  </LayoutPageSection>
</template>
