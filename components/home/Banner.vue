<script setup lang="ts"></script>

<template>
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
      <div class="px-4 mt-6 text-lg text-center max-w-[500px] md:max-w-[600px]">
        ist eine offene, unabhängige und überparteiliche Bürger:innenbewegung,
        in der sich Menschen zusammenfinden, um mit Engagement, wirtschaftlichem
        Hausverstand und profundem Wissen, die Entwicklung in unserer Stadt
        positiv zu beeinflussen.
      </div>

      <div class="flex space-x-4 ml-2 mt-8 justify-center md:justify-start">
        <BasePetitionButton />
      </div>
    </div>
  </LayoutPageSection>
</template>
