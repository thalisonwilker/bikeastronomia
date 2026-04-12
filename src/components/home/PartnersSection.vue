<template>
  <section class="partners-section q-pa-xl">
    <div class="container mx-auto">
      <div class="text-center q-mb-xl">
        <h2 class="text-h4 text-heading q-mb-md">Instituições e Parceiros</h2>
        <p class="text-body1 text-grey-4">Caminhamos juntos com quem acredita na educação e na ciência.</p>
        <q-separator color="accent" class="q-mx-auto" style="width: 60px; height: 3px;" />
      </div>

      <div class="row q-col-gutter-xl justify-center items-center">
        <div 
          v-for="partner in partners" 
          :key="partner.id" 
          class="col-6 col-sm-4 col-md-3 flex flex-center"
        >
          <div class="partner-logo-wrapper glass-panel q-pa-lg full-width flex flex-center glow-border">
            <q-img 
              :src="partner.logo" 
              fit="contain" 
              height="80px" 
              style="filter: grayscale(1); transition: all 0.3s ease;"
              class="partner-logo"
            >
              <template v-slot:loading>
                <q-spinner-orbit color="accent" />
              </template>
            </q-img>
            <q-tooltip class="bg-accent text-primary text-weight-bold">
              {{ partner.name }}
            </q-tooltip>
          </div>
        </div>
      </div>

      <div class="text-center q-mt-xl">
        <p class="text-caption text-grey-5">Deseja ser um parceiro do projeto? 
          <q-btn flat dense color="accent" label="Saiba como" :to="{ name: 'contato' }" />
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PARTNERS_MOCK } from 'src/mocks/partners.mock';

const partners = ref(PARTNERS_MOCK);

defineOptions({
  name: 'PartnersSection'
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

.partner-logo-wrapper {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
    background: rgba(255, 255, 255, 0.1);
    
    .partner-logo {
      filter: grayscale(0) !important;
    }
  }
}

.partner-logo {
  max-width: 150px;
}
</style>
