<template>
  <q-page>
    <!-- HERO SECTION (SOBRE) -->
    <section class="sobre-hero-section flex flex-center text-center q-pa-md relative-position">
      <div class="hero-overlay"></div>
      <div class="hero-content q-gutter-y-md animate-fade z-top">
        <h1 class="text-h2 text-heading text-white q-mb-md">Sobre o Bike Astronomia</h1>
        <p class="text-h6 text-grey-4 text-weight-light">Uma jornada de descoberta e ciência pelas ruas de Belém.</p>
      </div>
    </section>

    <!-- CONTENT FROM HOME -->
    <!-- HISTORY SECTION -->
    <section class="history-section relative-position q-py-xl overflow-hidden">
      <div class="history-bg"></div>
      <div class="history-overlay"></div>
      
      <div class="container q-px-lg q-px-md-xl relative-position z-top text-center">
        <div class="row justify-center">
          <div class="col-12 col-md-10 col-lg-8">
            <div class="glass-panel q-pa-lg q-pa-md-xl">
              <h2 class="text-h3 text-heading q-mb-lg text-accent">Nossa História</h2>
              <p class="text-h5 text-white line-height-relaxed q-mb-xl">
                Surgiu em 2013 como um encontro informal entre ciclistas amantes da Astronomia.
              </p>
              <p class="text-body1 text-grey-3 line-height-lg text-justify-center">
                Eram passeios ligados ao Coletivo Corujão que organiza até hoje, circuitos noturnos e
                passeios temáticos e culturais com Bicicletas. Entretanto, um pequeno grupo de
                estudantes de física, engenharia e educadores, tiveram a ideia de formatar passeios com
                encontros voltados para a Astronomia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OBJECTIVES SECTION -->
    <section class="objectives-section relative-position q-py-xl overflow-hidden bg-dark">
      <div class="container q-px-lg q-px-md-xl">
        <h2 class="text-h3 text-heading text-center q-mb-xl text-white">Objetivos da Plataforma</h2>
        <div class="row q-col-gutter-xl justify-center">
          <div v-for="(obj, index) in objectives" :key="index" class="col-12 col-sm-6 col-md-3">
            <div class="objective-card text-center">
              <q-img :src="obj.image" class="objective-img q-mb-lg shadow-20" ratio="0.85" />
              <p class="text-body2 text-grey-3 line-height-relaxed">{{ obj.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MEMBERS SECTION -->
    <section class="members-section q-pa-lg q-pa-md-xl relative-position">
      <div class="container">
        <h2 class="text-h3 text-heading text-center q-mb-xl text-white">Membros da Plataforma</h2>
        <div class="row q-col-gutter-xl items-center">
          <div class="col-12 col-md-5">
            <div class="members-list">
              <div v-for="(item, i) in membersInfo" :key="i" class="member-info-row">
                <q-separator color="white" class="opacity-30 q-mb-md" />
                <div class="text-subtitle1 text-white text-weight-light q-py-md">{{ item }}</div>
              </div>
              <q-separator color="white" class="opacity-30" />
            </div>
          </div>
          <div class="col-12 col-md-7">
            <q-img src="https://placehold.co/1200x800/10142e/ffffff/png?text=EQUIPE" class="rounded-borders glow-border" />
          </div>
        </div>
      </div>
    </section>

    <!-- STRUCTURE SECTION -->
    <section class="structure-section relative-position q-py-xl overflow-hidden">
      <div class="container q-px-lg q-px-md-xl">
        <div class="row q-col-gutter-xl items-center">
          <div class="col-12 col-md-5">
            <h2 class="text-h2 text-heading text-white line-height-xs q-mb-none text-weight-bold">Estrutura e Acervo</h2>
          </div>
          <div class="col-12 col-md-7">
            <div class="q-gutter-y-lg">
              <div v-for="(cat, i) in structureCategories" :key="i" class="structure-group">
                <h3 class="text-h5 text-white text-weight-bold q-mb-xs">{{ cat.title }}</h3>
                <p class="text-body2 text-grey-4">{{ cat.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
const objectives = [
  { text: 'Divulgar a Astronomia sob o âmbito científico para o público em geral.', image: 'https://placehold.co/400x500/10142e/ffffff/png?text=OBJETIVO+1' },
  { text: 'Promover a Astronomia em instituições como escolas e centros educativos.', image: 'https://placehold.co/400x500/10142e/ffffff/png?text=OBJETIVO+2' },
  { text: 'Apresentar a Astronomia em espaços abertos e eventos de natureza acadêmica.', image: 'https://placehold.co/400x500/10142e/ffffff/png?text=OBJETIVO+3' },
  { text: 'Realizar palestras e atividades lúdicas relacionadas à Astronomia.', image: 'https://placehold.co/400x500/10142e/ffffff/png?text=OBJETIVO+4' }
];

const membersInfo = [
  'Coordenação geral: 1',
  'Colegiado de coordenadores: 4',
  'Membros consultores: 3',
  'Membros atuantes: 12',
  'Administradores de redes sociais: 11'
];

const structureCategories = [
  { title: '1. Equipamentos de Observação', description: 'Telescópios refletores e refratores de alta potência.' },
  { title: '2. Mídia e Tecnologia', description: 'Equipamentos fotográficos e drones para registros.' },
  { title: '3. Materiais Educativos', description: 'Maquetes e acervo bibliográfico especializado.' }
];

defineOptions({ name: 'SobrePage' });
</script>

<style lang="scss" scoped>
.sobre-hero-section {
  min-height: 50vh;
  background: #0a0e2e;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.line-height-relaxed { line-height: 1.6; }
.history-bg {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image: url('../assets/images/image-pedal.png');
  background-size: cover;
  opacity: 0.1;
  z-index: 0;
}
.objective-img { clip-path: polygon(0 0, 75% 0, 100% 25%, 100% 100%, 0 100%); }
.members-section { background: radial-gradient(circle, #1a237e 0%, #0a0e2e 100%); }
</style>
