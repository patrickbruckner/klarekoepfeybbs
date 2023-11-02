<script setup lang="ts"></script>

<template>
  <LayoutPageSection class="grid gap-2 items-center md:grid-cols-2">
    <div>
      <LayoutPageSectionTitle>
        <span class="text-2xl font-bold">Mehr zum Projekt</span>
      </LayoutPageSectionTitle>

      <p>
        Mehr zum Projekt und den damit einhergehenden Bedenken, Überlegungen
        und weiterführenden Zusammenhängen für unsere Stadt finden und verfolgen
        sie in unseren Profilen:
      </p>
    </div>

    <div class="space-y-2 mt-3">
      <AwesomeButton
        href="https://www.facebook.com/profile.php?id=61552866832620"
      >
        Facebook (Klare Köpfe Ybbs)
      </AwesomeButton>
      <AwesomeButton to="https://www.instagram.com/klarekoepfeybbs/">
        Instagram (@klarekoepfeybbs)
      </AwesomeButton>
    </div>
  </LayoutPageSection>
</template>
