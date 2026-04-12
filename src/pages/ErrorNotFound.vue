<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center relative-position">
    <StarBackground />
    
    <div class="z-top">
      <div style="font-size: 30vh" class="text-heading text-accent opacity-50">
        404
      </div>

      <div class="text-h2 text-heading" style="opacity: .4">
        Oops. Você parece estar perdido no espaço...
      </div>

      <q-btn
        class="q-mt-xl text-weight-bold"
        color="accent"
        text-color="primary"
        unelevated
        to="/"
        label="Voltar para a Terra (Home)"
        no-caps
        size="lg"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import StarBackground from 'src/components/common/StarBackground.vue';

defineOptions({
  name: 'ErrorNotFound'
});
</script>

<style scoped>
.opacity-50 {
  opacity: 0.5;
}
.z-top {
  z-index: 10;
}
</style>
