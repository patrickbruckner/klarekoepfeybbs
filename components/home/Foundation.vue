<script setup lang="ts"></script>

<template>
  <LayoutPageSection>
    <LayoutPageSectionTitle>
      <span class="text-2xl font-bold">Gründung</span>
    </LayoutPageSectionTitle>

    <p class="mb-4">
      Anlass für die Gründung der Klare Köpfe Ybbs ist der geplante Schulneubau
      auf dem Areal der FZZ Ybbs. 
    </p>

    <p class="mb-12">
      Themenfelder wie lebendiges und lebenswertes Ortszentrum,
      Verkehrsberuhigung, Nachhaltigkeit und Bodenschutz stehen damit in
      Verbindung und sind uns wichtig.
    </p>

    <AwesomeCard>
      <AwesomeCardContent>
        <AwesomeCardTitle>Warum wir uns einbringen</AwesomeCardTitle>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="flex items-center gap-5">
            <Icon
              name="fluent:people-community-20-regular"
              class="w-16 h-16 shrink-0 text-primary-400"
            />
            <p class="">
              WIR repräsentieren eine Vielfalt an Menschen und Meinungen
            </p>
          </div>
          <div class="flex items-center gap-5">
            <Icon
              name="material-symbols:network-intelligence"
              class="w-16 h-16 shrink-0 text-primary-400"
            />
            <p class="">
              WIR nutzen dieses Potential und profitieren von unterschiedlichen
              Gedanken, Auffassungen und Fachwissen
            </p>
          </div>
          <div class="flex items-center gap-5">
            <Icon
              name="tdesign:undertake-environment-protection"
              class="w-16 h-16 shrink-0 text-primary-400"
            />
            <p class="">
              WIR zeigen Verantwortung für nachkommende Generationen, indem wir
              sorgsam mit dem was uns zur Verfügung steht, umgehen.
            </p>
          </div>
          <div class="flex items-center gap-5">
            <Icon
              name="ph:heart-fill"
              class="w-16 h-16 shrink-0 text-green-400"
            />
            <p class="font-bold">
              WIR treten mit Leidenschaft für den Lebensraum in unserer Stadt
              ein.
            </p>
          </div>
        </div>
      </AwesomeCardContent>
    </AwesomeCard>
  </LayoutPageSection>
</template>
