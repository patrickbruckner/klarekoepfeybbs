<script lang="ts" setup>
definePageMeta({ layout: 'page' })
useHead({ titleTemplate: '', title: 'Klare Köpfe Ybbs' })
</script>

<template>
  <LayoutPageWrapper>
    <!-- Banner -->
    <LayoutPageSection>
      <div class="flex-1 flex flex-col items-center justify-center">
        <h1 class="text-center mt-4">
          <span
            class="animated-text-bg drop-shadow-xl text-6xl sm:text-8xl md:text-8xl lg:text-8xl 2xl:text-8xl block font-black uppercase"
            style="
              --content: 'Klare';
              --start-color: #007cf0;
              --end-color: #00dfd8;
              --animation-name: anim-fg-1;
            "
          >
            <span class="animated-text-fg">Klare</span>
          </span>
          <span
            class="animated-text-bg drop-shadow-xl text-6xl sm:text-8xl md:text-8xl lg:text-8xl 2xl:text-8xl block font-black uppercase"
            style="
              --content: 'Köpfe';
              --start-color: #7928ca;
              --end-color: #ff0080;
              --animation-name: anim-fg-2;
            "
          >
            <span class="animated-text-fg">Köpfe</span>
          </span>
          <span
            class="animated-text-bg drop-shadow-xl text-6xl sm:text-8xl md:text-8xl lg:text-8xl 2xl:text-8xl block font-black uppercase"
            style="
              --content: 'Ybbs';
              --start-color: #ff4d4d;
              --end-color: #f9cb28;
              --animation-name: anim-fg-3;
            "
          >
            <span class="animated-text-fg">Ybbs</span>
          </span>
        </h1>
        <div
          class="px-4 mt-6 text-lg text-center max-w-[500px] md:max-w-[600px]"
        >
          ist eine offene, unabhängige und überparteiliche Bürger:innenbewegung
          in der sich Menschen zusammenfinden, um mit Engagement,
          wirtschaftlichem Hausverstand und profundem Wissen, die Entwicklung in
          unserer Stadt positiv zu beeinflussen.
        </div>

        <div class="flex space-x-4 ml-2 mt-8 justify-center md:justify-start">
          <nuxt-link
            to="https://nuxt.com/"
            rel="noopener noreferrer"
            tag="a"
            class="cursor-pointer border transition-color duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:dark:ring-offset-gray-50 focus:dark:ring-gray-400 focus:ring-gray-600/[0.6] focus:ring-offset-gray-800/[0.6] flex items-center justify-center font-semibold text-white bg-primary-500 hover:bg-primary-400 border-primary-500 h-14 px-8 text-lg rounded-lg font-extrabold"
          >
            Facebook
          </nuxt-link>
          <nuxt-link
            href="https://github.com/viandwi24/nuxt3-awesome-starter"
            rel="noopener noreferrer"
            tag="a"
            class="cursor-pointer border transition-color duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:dark:ring-offset-gray-50 focus:dark:ring-gray-400 focus:ring-gray-600/[0.6] focus:ring-offset-gray-800/[0.6] flex items-center justify-center font-semibold text-gray-800 bg-gray-200 border-gray-200 hover:bg-gray-300 dark:text-white dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 h-14 px-8 text-lg rounded-lg font-extrabold"
          >
            Instagram
          </nuxt-link>
        </div>
      </div>
    </LayoutPageSection>

    <!-- Projects -->
    <LayoutPageSection>
      <LayoutPageSectionTitle>
        <span class="text-2xl font-bold">Aktuelles Projekt</span>
      </LayoutPageSectionTitle>

      <AwesomeCard>
        <AwesomeCardContent>
          <AwesomeCardTitle
            ><nuxt-link to="projekte/gegen-schul-neubau"
              >Gegen den Schul-Neubau</nuxt-link
            ></AwesomeCardTitle
          >
          Ein Initiativantrag mit Unterschriftensammlung an den Gemeinderat soll
          die politisch Verantwortlichen in Ybbs an der Donau dazu bewegen, die
          Realisierung dieses Projekts zu überdenken und eine nachhaltige
          Alternative am Standort in Erwägung zu ziehen.
        </AwesomeCardContent>
        <AwesomeCardFooter>
          <AwesomeCardFooterButton
            href="projekte/gegen-schul-neubau/unterschreiben"
          >
            Hier unterschreiben
          </AwesomeCardFooterButton>
          <AwesomeCardFooterButton href="projekte/gegen-schul-neubau">
            Zum Projekt
          </AwesomeCardFooterButton>
        </AwesomeCardFooter>
      </AwesomeCard>
    </LayoutPageSection>

    <!-- Foundation -->
    <LayoutPageSection>
      <LayoutPageSectionTitle>
        <span class="text-2xl font-bold">Gründung</span>
      </LayoutPageSectionTitle>

      <p class="mb-12">
        Anlass für die Gründung ist der geplante Schulneubau auf dem Areal der
        FZZ Ybbs. Themenfelder wie lebendiges und lebenswertes Ortszentrum,
        Verkehrsberuhigung und Nachhaltigkeit stehen damit in Verbindung und
        sind uns wichtig.
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
                WIR nutzen dieses Potential und profitieren von
                unterschiedlichen Gedanken, Auffassungen und Fachwissen
              </p>
            </div>
            <div class="flex items-center gap-5">
              <Icon
                name="tdesign:undertake-environment-protection"
                class="w-16 h-16 shrink-0 text-primary-400"
              />
              <p class="">
                WIR zeigen Verantwortung für nachkommende Generationen, indem
                wir sorgsam mit dem was uns zur Verfügung steht, umgehen.
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
  </LayoutPageWrapper>
</template>
