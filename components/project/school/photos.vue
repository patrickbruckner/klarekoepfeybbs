<script setup lang="ts">
const isSlider = ref(false)

const imageClassName = [
  'snap-center snap-start:ml-4 snap-end:mr-4',
  'border-4 border-white rounded-lg shadow-md',
].join(' ')

const sliderClassName =
  'flex flex-nowrap overflow-x-scroll snap-x snap-mandatory'
const gridClassName = 'grid grid-cols-2 items-center gap-4'

const containerClass = computed(() =>
  isSlider.value ? sliderClassName : gridClassName
)
</script>

<template>
  <LayoutPageSection>
    <div class="flex items-center justify-between">
      <BaseHeadline id="Fotos" level="2">Fotos</BaseHeadline>
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
    </div>

    <div :class="containerClass">
      <img
        :class="imageClassName"
        src="/images/projekte/schulbau/Schulring.jpg"
        alt="Schul-Neubau"
      />
      <img
        :class="imageClassName"
        src="/images/projekte/schulbau/SkizzeNeubau.jpg"
        alt="Schul-Neubau"
      />
      <img
        :class="imageClassName"
        src="/images/projekte/schulbau/SkizzeUmbau.jpg"
        alt="Schul-Neubau"
      />
    </div>
  </LayoutPageSection>
</template>
