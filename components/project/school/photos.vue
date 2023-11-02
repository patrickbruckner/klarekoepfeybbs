<script setup lang="ts">
// const isSlider = ref(false)

const imageClassName = [
  'snap-center snap-start:ml-4 snap-end:mr-4',
  'border-4 rounded-lg shadow-md',
].join(' ')

const sliderClassName =
  'flex flex-nowrap overflow-x-scroll snap-x snap-mandatory'
const gridClassName = 'grid grid-cols-2 items-start gap-4'

const containerClass = computed(() => gridClassName)
//   isSlider.value ? sliderClassName : gridClassName
// )
</script>

<template>
  <LayoutPageSection>
    <div class="flex items-center justify-between">
      <BaseHeadline id="Fotos" level="2">Fotos</BaseHeadline>
      <!-- 
        <AwesomeButton @click="isSlider = !isSlider" class="">
        <Icon
          :name="
            isSlider
              ? 'solar:slider-vertical-minimalistic-outline'
              : 'material-symbols:gallery-thumbnail-outline-sharp'
          "
          class="text-2xl"
        />
      </AwesomeButton> 
    --></div>

    <div :class="containerClass">
      <nuxt-link
        to="/images/projekte/schulbau/SkizzeNeubau.jpg"
        target="_blank"
      >
        <figure class="grid gap-1">
          <img
            :class="imageClassName"
            src="/images/projekte/schulbau/SkizzeNeubau.jpg"
            alt="Schul-Neubau"
          />
          <figcaption class="text-center text-sm">
            Schul-Neubau am Trainingsplatz Hallenbad
          </figcaption>
        </figure>
      </nuxt-link>

      <nuxt-link to="/images/projekte/schulbau/Schulring.jpg" target="_blank">
        <figure class="grid gap-1">
          <img
            :class="imageClassName + ' border-green-400'"
            src="/images/projekte/schulbau/Schulring.jpg"
            alt="Schul-Neubau"
          />
          <figcaption class="text-center text-sm mt-1">
            Schulring nach Umbau (Skizze)
          </figcaption>
        </figure>
      </nuxt-link>

      <nuxt-link to="/images/projekte/schulbau/SkizzeUmbau.jpg" target="_blank">
        <figure class="grid gap-1">
          <img
            :class="imageClassName + ' border-green-400'"
            src="/images/projekte/schulbau/SkizzeUmbau.jpg"
            alt="Schul-Neubau"
          />
          <figcaption class="text-center text-sm">
            Plan Umbau am Schulring
          </figcaption>
        </figure>
      </nuxt-link>
    </div>
  </LayoutPageSection>
</template>
