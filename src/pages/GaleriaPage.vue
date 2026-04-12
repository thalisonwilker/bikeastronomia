<template>
  <q-page class="q-pa-xl">
    <div class="container mx-auto">
      <div class="text-center q-mb-xl">
        <h1 class="text-h2 text-heading text-white q-mb-md">Galeria de Momentos</h1>
        <p class="text-h6 text-grey-4 text-weight-light">Registros de nossas observações, oficinas e encontros astronômicos.</p>
      </div>

      <div class="row q-col-gutter-lg justify-center">
        <div v-for="(image, index) in galleryImages" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-3">
          <q-card class="gallery-card glass-panel glow-border overflow-hidden cursor-pointer" @click="openLightbox(index)">
            <q-img :src="image.url" :ratio="1" class="gallery-img">
              <div class="absolute-bottom text-caption text-center" style="background: rgba(0,0,0,0.4)">
                {{ image.title }}
              </div>
            </q-img>
          </q-card>
        </div>
      </div>

      <!-- Simple Lightbox -->
      <q-dialog v-model="lightbox" full-width full-height>
        <q-card class="bg-black text-white relative-position">
          <q-btn icon="close" flat round dense class="absolute-top-right q-ma-md z-max" v-close-popup />
          <div class="flex flex-center full-height">
            <q-img :src="galleryImages[currentImageIndex].url" fit="contain" style="max-height: 85vh" />
            <div class="absolute-bottom q-pa-lg text-center bg-black-50">
              <div class="text-h6 text-heading">{{ galleryImages[currentImageIndex].title }}</div>
              <p class="text-grey-4">{{ galleryImages[currentImageIndex].description }}</p>
            </div>
          </div>
          
          <q-btn icon="chevron_left" flat round dense class="absolute-left q-ma-md" size="xl" @click="prevImage" />
          <q-btn icon="chevron_right" flat round dense class="absolute-right q-ma-md" size="xl" @click="nextImage" />
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const lightbox = ref(false);
const currentImageIndex = ref(0);

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=1000', title: 'Via Láctea em Mosqueiro', description: 'Registro feito durante o Acampamento Astronômico 2023.' },
  { url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1000', title: 'Nebulosa de Órion', description: 'Observação astrofotográfica com telescópio refletor.' },
  { url: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bac4?auto=format&fit=crop&q=80&w=1000', title: 'A Lua em Detalhes', description: 'Foto tirada por um participante na Praça da República.' },
  { url: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&q=80&w=1000', title: 'Eclipse do Sol', description: 'Fase máxima observada em Belém.' },
  { url: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&q=80&w=1000', title: 'Oficina de Foguetes', description: 'Lançamento coletivo no campus da UFPA.' },
  { url: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=1000', title: 'Exploração PET', description: 'A alegria da ciência em cada lançamento.' },
  { url: 'https://images.unsplash.com/photo-1534067783941-51c9c23ea3d3?auto=format&fit=crop&q=80&w=1000', title: 'Kids no Telescópio', description: 'Inspirando o futuro da astronomia paraense.' },
  { url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000', title: 'Céu da Amazônia', description: 'Visão panorâmica do céu estrelado sobre a floresta.' }
];

const openLightbox = (index: number) => {
  currentImageIndex.value = index;
  lightbox.value = true;
};

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % galleryImages.length;
};

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + galleryImages.length) % galleryImages.length;
};

defineOptions({
  name: 'GaleriaPage'
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
}
.gallery-card {
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
    z-index: 10;
  }
}
.gallery-img {
  filter: saturate(0.8);
  transition: filter 0.3s ease;
  &:hover {
    filter: saturate(1.2);
  }
}
.bg-black-50 {
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(5px);
}
</style>
