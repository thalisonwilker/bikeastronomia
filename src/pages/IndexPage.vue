<template>
  <q-page>
    <!-- HERO SECTION -->
    <section class="hero-section flex flex-center text-center q-pa-md relative-position">
      <div class="hero-overlay"></div>
      
      <div class="hero-content q-gutter-y-lg animate-fade z-top">
        <div class="logo-wrapper q-mb-xl">
          <img src="~assets/images/logo.png" style="max-width: 90vw; width: 650px; height: auto;" class="q-mb-md filter-glow">
        </div>
        
        <div class="q-gutter-y-md q-mt-lg flex flex-center column">
          <q-btn size="lg" unelevated color="accent" text-color="primary" label="Ações Educativas" class="text-weight-bold" style="min-width: 250px" :to="{ name: 'acoes' }" />
          <q-btn size="lg" outline color="white" label="Próximos Eventos" style="min-width: 250px" :to="{ name: 'eventos' }" />
        </div>
      </div>
    </section>

    <!-- HISTORY SECTION -->
    <section class="history-section relative-position q-py-xl overflow-hidden">
      <div class="history-bg"></div>
      <div class="history-overlay"></div>
      
      <div class="container q-px-lg q-px-md-xl relative-position z-top">
        <div class="row justify-center">
          <div class="col-12 col-md-10 col-lg-8">
            <div class="glass-panel q-pa-lg q-pa-md-xl text-center">
              <h2 class="text-h3 text-heading q-mb-lg text-accent">O Projeto BIKE ASTRONOMIA</h2>
              
              <p class="text-h5 text-md-h4 text-weight-medium line-height-relaxed q-mb-xl">
                Surgiu em 2013 como um encontro informal entre ciclistas amantes da Astronomia, 
                Cosmologia e Astrofísica.
              </p>

              <div class="flex flex-center q-my-xl">
                <q-separator color="white" style="width: 80px; height: 3px; border-radius: 4px; box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);" />
              </div>

              <p class="text-body1 text-md-h6 text-grey-3 text-weight-light line-height-lg text-justify-center">
                Eram passeios ligados ao Coletivo Corujão que organiza até hoje, circuitos noturnos e
                passeios temáticos e culturais com Bicicletas. Entretanto, um pequeno grupo de
                estudantes de física, engenharia e educadores, tiveram a ideia de formatar passeios com
                encontros voltados para a Astronomia, o que resultou em atividades rotineiras a cada mês
                com temas direcionados a esse campo científico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECT EVOLUTION & SOCIAL CAUSE SECTION -->
    <section class="sky-section relative-position q-py-xl overflow-hidden">
      <div class="sky-bg"></div>
      
      <div class="container q-px-lg q-px-md-xl relative-position z-top">
        <!-- EVOLUTION SECTION -->
        <div class="row q-col-gutter-xl items-center q-pt-xl">
          <div class="col-12 col-md-7">
            <p class="text-h5 text-white line-height-relaxed q-mb-lg">
              O Projeto tomou outra formatação e os passeios foram deixados como segundo plano e em 2017, somente as atividades de estudos e observações ganharam pauta maior.
            </p>
            <div class="row q-col-gutter-md q-mb-lg">
              <div class="col-4">
                <q-img src="https://placehold.co/400x300/10142e/ffffff/png?text=EXEMPLO+1" class="rounded-borders gallery-img" ratio="1" />
              </div>
              <div class="col-4">
                <q-img src="https://placehold.co/400x300/10142e/ffffff/png?text=EXEMPLO+2" class="rounded-borders gallery-img" ratio="1" />
              </div>
              <div class="col-4">
                <q-img src="https://placehold.co/400x300/10142e/ffffff/png?text=EXEMPLO+3" class="rounded-borders gallery-img" ratio="1" />
              </div>
            </div>
            <div class="bg-white q-pa-lg rounded-borders text-black shadow-10">
              <p class="text-body1 q-ma-none text-weight-medium">
                Agora, como uma plataforma educativa que envolve atividades para <span class="text-weight-bold">divulgar a Astronomia ao público em geral</span> e <span class="text-weight-bold">atividades lúdicas para um público infanto-juvenil</span>.
              </p>
            </div>
          </div>
          <div class="col-12 col-md-5 text-right">
            <q-img src="https://placehold.co/600x900/10142e/ffffff/png?text=DESTAQUE+EVOLUÇÃO" class="rounded-borders shadow-20 glow-border" style="max-width: 450px" />
          </div>
        </div>

        <!-- SOCIAL CAUSE SECTION -->
        <div class="row q-col-gutter-xl items-start q-mt-xl-extra q-pb-xl">
          <div class="col-12 col-md-5">
            <h2 class="text-h3 text-white line-height-xs q-mb-xl text-uppercase text-weight-bold">
              Projeto abraça a<br>
              causa social,<br>
              levando<br>
              conhecimento<br>
              da ciência<br>
              Astronômica.
            </h2>
          </div>
          <div class="col-12 col-md-7">
            <q-img src="https://placehold.co/800x500/10142e/ffffff/png?text=PROJETO+SOCIAL" class="rounded-borders shadow-20 glow-border q-mb-lg" />
            <div class="row justify-end">
              <div class="col-12 col-sm-10">
                <p class="text-body2 text-grey-3 line-height-relaxed text-right">
                  Além de diversas ferramentas pedagógicas, como oficinas, cinema, palestras e atividades externas, com a utilização de recursos óticos, entre telescópios, máquinas fotográficas ( astrofotografia ) e instrumentos de medição.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- OBJECTIVES SECTION -->
    <section class="objectives-section relative-position q-py-xl overflow-hidden">
      <div class="sky-bg-alt"></div>
      
      <div class="container q-px-lg q-px-md-xl relative-position z-top">
        <h2 class="text-h3 text-heading text-center q-mb-xl text-white animate-fade">Objetivos da Plataforma</h2>
        
        <div class="row q-col-gutter-xl justify-center">
          <div v-for="(obj, index) in objectives" :key="index" class="col-12 col-sm-6 col-md-3">
            <div class="objective-card text-center animate-fade-delayed">
              <q-img :src="obj.image" class="objective-img q-mb-lg shadow-20" ratio="0.85" />
              <p class="text-body2 text-grey-3 line-height-relaxed q-px-sm">
                {{ obj.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ACTIONS SECTION -->
    <section class="actions-section q-pa-lg q-pa-md-xl">
      <div class="container q-px-lg q-px-md-xl">
        <div class="row items-center q-mb-xl">
          <div class="col">
            <h2 class="text-h3 text-heading q-ma-none">Ações Educativas</h2>
            <p class="text-grey-4 text-h6 text-weight-light">Conheça nossos programas e saiba como participar</p>
          </div>
          <div class="col-auto">
            <q-btn flat color="accent" label="Ver todas as ações educativas" icon-right="arrow_forward" :to="{ name: 'acoes' }" />
          </div>
        </div>

        <!-- EDUCATIONAL SUB-NAVBAR -->
        <div class="edu-nav-container q-mb-xl animate-fade">
          <div class="edu-nav shadow-10">
            <div 
              v-for="item in navItems" 
              :key="item.slug"
              class="edu-nav-item"
              :class="{ 'active': selectedSlug === item.slug }"
              @click="selectAction(item.slug)"
              v-html="item.name"
            >
            </div>
          </div>
        </div>

        <div v-if="loading" class="row q-col-gutter-lg">
          <div v-for="i in 3" :key="i" class="col-12 col-sm-6 col-md-4">
            <q-skeleton height="300px" square class="glass-panel" />
          </div>
        </div>

        <div v-else class="row q-col-gutter-lg">
          <div v-for="action in filteredActions" :key="action.id" class="col-12 col-sm-6 col-md-4">
            <transition
              appear
              enter-active-class="animated zoomIn"
              leave-active-class="animated zoomOut"
              mode="out-in"
            >
              <ActionCard :action="action" @click="$router.push({ name: 'acao-detail', params: { slug: action.slug } })" />
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- EVENTS PREVIEW SECTION -->
    <section class="events-preview-section q-pa-lg q-pa-md-xl relative-position">
      <div class="stars-overlay"></div>
      <div class="container relative-position z-top">
        <div class="row items-center q-mb-xl">
          <div class="col">
            <h2 class="text-h3 text-heading q-ma-none text-white">Próximos Eventos</h2>
            <p class="text-grey-4 text-h6 text-weight-light">Fique por dentro da nossa agenda astronômica</p>
          </div>
          <div class="col-auto">
            <q-btn outline color="accent" label="Ver Agenda Full" icon-right="calendar_month" :to="{ name: 'eventos' }" />
          </div>
        </div>

        <div class="row q-col-gutter-lg">
          <div v-for="(event, i) in upcomingEvents" :key="i" class="col-12 col-sm-6 col-md-4">
            <q-card class="event-card glass-panel shadow-20 full-height flex flex-vertical">
              <q-img :src="event.image" ratio="16/9">
                <div class="absolute-top-right q-ma-sm">
                  <q-badge color="accent" text-color="primary" class="q-pa-sm text-weight-bold shadow-5">
                    {{ event.date }}
                  </q-badge>
                </div>
              </q-img>
              
              <q-card-section class="q-pa-lg col">
                <div class="text-h6 text-white q-mb-xs text-weight-bold">{{ event.title }}</div>
                <div class="flex items-center text-grey-4 q-mb-md">
                   <q-icon name="location_on" color="accent" class="q-mr-xs" />
                   <span class="text-caption">{{ event.location }}</span>
                </div>
                <p class="text-body2 text-grey-3 line-height-relaxed ellipsis-3-lines">
                  {{ event.description }}
                </p>
              </q-card-section>
              
              <q-card-actions class="q-pa-lg q-pt-none">
                <q-btn flat color="accent" label="Ver Detalhes" :to="{ name: 'eventos' }" class="full-width border-accent" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </section>

    <!-- MEMBERS SECTION -->
    <section class="members-section q-pa-lg q-pa-md-xl relative-position">
      <div class="container animate-fade">
        <h2 class="text-h3 text-heading text-center q-mb-xl text-white">Membros da Plataforma</h2>
        
        <div class="row q-col-gutter-xl items-center">
          <div class="col-12 col-md-5">
            <div class="members-list">
              <div v-for="(item, i) in membersInfo" :key="i" class="member-info-row">
                <q-separator color="white" class="opacity-30 q-mb-md" />
                <div class="text-h6 text-white text-weight-light q-py-md">
                  {{ item }}
                </div>
              </div>
              <q-separator color="white" class="opacity-30" />
            </div>
          </div>
          <div class="col-12 col-md-7">
            <q-img 
              src="https://placehold.co/1200x800/10142e/ffffff/png?text=MEMBROS+DA+PLATAFORMA" 
              class="rounded-borders shadow-20 glow-border" 
            />
          </div>
        </div>
      </div>
    </section>

    <!-- PARTNERS SECTION -->
    <PartnersSection />

    <!-- STRUCTURE SECTION -->
    <section class="structure-section relative-position q-py-xl overflow-hidden">
      <div class="structure-bg"></div>
      
      <div class="container q-px-lg q-px-md-xl relative-position z-top">
        <div class="row q-col-gutter-xl items-center">
          <div class="col-12 col-md-5">
            <h2 class="text-h2 text-heading text-white line-height-xs q-mb-none text-weight-bold">
              Estrutura e<br>
              acervo<br>
              material do<br>
              projeto
            </h2>
          </div>
          
          <div class="gt-sm col-md-1 flex justify-center">
            <div class="vertical-divider"></div>
          </div>
          
          <div class="col-12 col-md-6">
            <div class="q-gutter-y-lg">
              <div v-for="(cat, i) in structureCategories" :key="i" class="structure-group animate-fade">
                <h3 class="text-h5 text-white text-weight-bold q-mb-xs">{{ cat.title }}</h3>
                <p class="text-body2 text-grey-4 line-height-relaxed">{{ cat.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="cta-section q-pa-md q-pa-md-xl text-center">
      <div class="glass-panel q-pa-lg q-pa-md-xl">
        <h2 class="text-h3 text-heading q-mb-md">Pronto para explorar o universo?</h2>
        <p class="text-h6 text-weight-light q-mb-xl">Seja como voluntário, parceiro ou participante, o céu é para todos.</p>
        <q-btn size="lg" unelevated color="accent" text-color="primary" label="Fale Conosco" :to="{ name: 'contato' }" class="text-weight-bold" />
      </div>
    </section>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';
import { useActionsStore } from 'src/stores/actions.store';
import ActionCard from 'src/components/home/ActionCard.vue';
import PartnersSection from 'src/components/home/PartnersSection.vue';

const actionsStore = useActionsStore();
const actions = computed(() => actionsStore.actions);
const loading = computed(() => actionsStore.loading);

const selectedSlug = ref<string | null>(null);

const structureCategories = [
  {
    title: '1. Equipamentos de Observação',
    description: '2 telescópios Refratores 70mm, Celestron, 2 telescópios refletores OTA 104mm, 1 Telescópio Refletor Sky-Watcher 203mm Dobsorinano e um binóculo Sacura 30x70.'
  },
  {
    title: '2. Equipamentos de Mídia e Tecnologia',
    description: 'Equipamentos fotográficos Nikon, 1 Drone PA5 4k, 2 Notebooks, acervo digital áudio-visual e 3 tripés.'
  },
  {
    title: '3. Materiais Educacionais e de Referência',
    description: "Maquetes planetárias, BANNER'S educativos e acervo de obras sobre Astronomia, Astrofísica e Cosmologia."
  }
];

const objectives = [
  { 
    text: 'Divulgar a Astronomia sob o âmbito científico para o público em geral.', 
    image: 'https://placehold.co/400x500/10142e/ffffff/png?text=OBJETIVO+1' 
  },
  { 
    text: 'Promover a Astronomia em instituições como escolas e centros educativos.', 
    image: 'https://placehold.co/400x500/10142e/ffffff/png?text=OBJETIVO+2' 
  },
  { 
    text: 'Apresentar a Astronomia em espaços abertos e eventos de natureza acadêmica, como cursos, oficinas e workshops.', 
    image: 'https://placehold.co/400x500/10142e/ffffff/png?text=OBJETIVO+3' 
  },
  { 
    text: 'Realizar palestras e atividades lúdicas relacionadas à Astronomia.', 
    image: 'https://placehold.co/400x500/10142e/ffffff/png?text=OBJETIVO+4' 
  }
];

const upcomingEvents = [
  {
    title: 'Noite de Observação Lunar',
    date: '15 MAI',
    location: 'Praça da República, Belém',
    description: 'Venha observar as crateras da Lua com nossos telescópios de alta potência. Evento aberto ao público.',
    image: 'https://images.unsplash.com/photo-1522030239044-1293bf41852d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Astrofotografia no Utinga',
    date: '22 MAI',
    location: 'Parque do Utinga, Belém',
    description: 'Workshop prático de fotografia do céu noturno utilizando câmeras DSLR e tripés. Vagas limitadas.',
    image: 'https://images.unsplash.com/photo-1444703686981-a3abb99d4fe3?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Palestra: Vida em Marte?',
    date: '05 JUN',
    location: 'Escola Modelo - Auditório',
    description: 'Discussão sobre as recentes descobertas dos rovers e as possibilidades de vida no sistema solar.',
    image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=800'
  }
];

const membersInfo = [
  'Coordenação geral: 1',
  'Colegiado de coordenadores: 4',
  'Membros consultores: 3',
  'Membros atuantes: 12',
  'Administradores de páginas em redes Sociais e grupos de aplicativos ( Facebook, Instagram, WhatsApp ): 11'
];

const navItems = [
  { name: 'CINE <br>ASTRONOMIA', slug: 'cine-astronomia' },
  { name: 'FOGUETES <br>ARTESANAIS', slug: 'foguetes-artesanais' },
  { name: 'OLIMPÍADA <br>ESTUDANTIL', slug: 'olimpiada-estudantil' },
  { name: 'ASTRONOMIA NA <br>COMUNIDADE', slug: 'astronomia-na-comunidade' },
  { name: 'CINE ASTRONOMIA <br>KID\'S', slug: 'cine-astronomia-kids' },
  { name: 'ASTRONOMIA <br>PRAIANA', slug: 'astronomia-praiana' },
  { name: 'ENCONTROS <br>CIENTÍFICOS', slug: 'encontros-cientificos' },
];

const filteredActions = computed(() => {
  const list = actions.value.slice(0, 7); // Max 7 for index
  if (!selectedSlug.value) return list.slice(0, 3);
  return list.filter(a => a.slug === selectedSlug.value);
});

function selectAction(slug: string | null) {
  if (selectedSlug.value === slug) {
    selectedSlug.value = null; // Toggle off
  } else {
    selectedSlug.value = slug;
  }
}

onMounted(() => {
  actionsStore.fetchActions();
});

defineOptions({
  name: 'IndexPage'
});
</script>

<style lang="scss" scoped>
.hero-section {
  min-height: 90vh;
  padding-top: 100px;
  background: transparent;
  position: relative;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.z-top {
  z-index: 2;
}

.opacity-70 {
  opacity: 0.7;
}

.hero-content {
  max-width: 800px;
}

.history-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.history-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('../assets/images/image-pedal.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: 0;
}

.sky-bg-alt {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at bottom left, #1a237e 0%, #0a0e2e 70%);
  z-index: 0;
}

.objective-img {
  clip-path: polygon(0 0, 75% 0, 100% 25%, 100% 100%, 0 100%);
  border-radius: 4px;
  background: white; // Visible behind the clip
}

.objective-card {
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    .objective-img {
      filter: brightness(1.1);
    }
  }
}

.history-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent, rgba(10, 14, 46, 0.8), #0a0e2e);
  z-index: 1;
}

.sky-section {
  background: #0a0e2e;
}

.sky-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at top right, #1a237e 0%, #0a0e2e 70%);
  z-index: 0;
}

.line-height-relaxed {
  line-height: 1.4;
}

.line-height-lg {
  line-height: 1.8;
}

.line-height-xs {
  line-height: 1.1;
}

.q-mt-xl-extra {
  margin-top: 120px;
}

.gallery-img {
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
}

.text-justify-center {
  text-align: center;
  @media (min-width: 600px) {
    text-align: justify;
    text-align-last: center;
  }
}

.bg-primary-dark {
  background: rgba(10, 14, 46, 0.4);
}

.members-section {
  background: radial-gradient(circle at bottom right, #0a0e2e 0%, #1a237e 100%);
}

.events-preview-section {
  background: #0d1117;
}

.event-card {
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    border-color: $accent;
    box-shadow: 0 10px 30px rgba(245, 166, 35, 0.2);
    
    .q-img {
      filter: brightness(1.1);
    }
  }
}

.border-accent {
  border: 1px solid rgba(245, 166, 35, 0.3);
}

.ellipsis-3-lines {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

.structure-section {
  background-color: #050714;
}

.structure-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1920') center/cover no-repeat;
  opacity: 0.2;
  z-index: 0;
}

.vertical-divider {
  width: 2px;
  height: 250px;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.4), transparent);
}

.member-info-row {
  transition: all 0.3s ease;
  &:hover {
    padding-left: 10px;
    background: rgba(255, 255, 255, 0.05);
  }
}

.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.edu-nav-container {
  width: 100%;
}

.edu-nav {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  border-radius: 4px;
}

.edu-nav-item {
  padding: 12px 5px;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-family: 'Orbitron', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.3;
  min-height: 80px;

  &:last-child {
    border-right: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background: #ffffff !important;
    color: #121212 !important;
    font-weight: 700;
  }
}

@media (max-width: 1024px) {
  .edu-nav-item {
    font-size: 10px;
    padding: 10px 4px;
  }
}

@media (max-width: 900px) {
  .edu-nav {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .edu-nav-item:nth-child(4n) {
    border-right: none;
  }
  
  .edu-nav-item:nth-child(n+5) {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
}

@media (max-width: 600px) {
  .text-h2 {
    font-size: 2.2rem !important;
    line-height: 1.2 !important;
  }
  .text-h3 {
    font-size: 1.8rem !important;
    line-height: 1.2 !important;
  }
  .text-h4 {
    font-size: 1.5rem !important;
  }
  .text-h5 {
    font-size: 1.2rem !important;
  }
  .text-h6 {
    font-size: 1rem !important;
  }

  .q-mt-xl-extra {
    margin-top: 60px;
  }

  .cta-section {
    padding: 40px 16px !important;
  }

  .edu-nav-item {
    font-size: 9px;
    padding: 8px 2px;
    min-height: 70px;
    letter-spacing: 0;
  }
}

.animate-fade {
  animation: fadeIn 1s ease-out;
}

.filter-glow {
  filter: drop-shadow(0 0 20px rgba(245, 166, 35, 0.3));
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
