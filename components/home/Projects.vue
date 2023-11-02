<script setup lang="ts">
import PetitionButton from '../base/PetitionButton.vue'
</script>

<template>
  <LayoutPageSection>
    <LayoutPageSectionTitle>
      <span class="text-2xl font-bold">Aktuelles Projekt</span>
    </LayoutPageSectionTitle>

    <AwesomeCard class="grid md:grid-cols-2">
      <nuxt-link to="projekte/gegen-schul-neubau">
        <img
          src="/images/projekte/schulbau/SkizzeNeubau.jpg"
          alt="Skizze Neubau"
        />
      </nuxt-link>
      <AwesomeCardContent class="space-y-2">
        <AwesomeCardTitle>
          <nuxt-link to="projekte/gegen-schul-neubau">
            Gegen den Schul-Neubau / Für Ausbau der bestehenden Schulen
          </nuxt-link>
        </AwesomeCardTitle>

        <div>
          Ein Initiativantrag mit Unterschriftensammlung an den Gemeinderat soll
          die politisch Verantwortlichen in Ybbs an der Donau dazu bewegen, die
          Realisierung dieses Projekts zu überdenken und eine nachhaltige
          Alternative am Standort in Erwägung zu ziehen.
        </div>

        <div class="flex items-center justify-between">
          <PetitionButton small />

          <AwesomeButton href="projekte/gegen-schul-neubau">
            Zum Projekt
          </AwesomeButton>
        </div>
      </AwesomeCardContent>
    </AwesomeCard>
  </LayoutPageSection>
</template>
