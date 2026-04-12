<template>
  <q-page class="q-pa-xl">
    <div class="container">
      <div class="text-center q-mb-xl animate-fade">
        <h1 class="text-h2 text-heading text-gradient q-mb-md">Nossas Ações</h1>
        <p class="text-h6 text-grey-4 text-weight-light mx-auto" style="max-width: 700px">
          Explore os diversos programas educativos que transformam a maneira como vemos o céu em Belém e região.
        </p>
      </div>

      <!-- EDUCATIONAL SUB-NAVBAR -->
      <div class="edu-nav-container q-mb-xl animate-fade-delayed">
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
          <!-- Clear/All option -->
          <div 
            class="edu-nav-item"
            :class="{ 'active': selectedSlug === null }"
            @click="selectAction(null)"
            v-html="'VER <br> TODAS'"
          >
          </div>
        </div>
      </div>

      <div v-if="loading" class="row q-col-gutter-lg">
        <div v-for="i in 6" :key="i" class="col-12 col-sm-6 col-md-4">
          <q-skeleton height="350px" square class="glass-panel" />
        </div>
      </div>

      <div v-else class="row q-col-gutter-lg">
        <div v-for="action in filteredActions" :key="action.id" class="col-12 col-sm-6 col-md-4">
          <transition
            appear
            enter-active-class="animated zoomIn"
            leave-active-class="animated zoomOut"
          >
            <ActionCard 
              :action="action" 
              @click="$router.push({ name: 'acao-detail', params: { slug: action.slug } })" 
            />
          </transition>
        </div>
      </div>

      <div v-if="!loading && filteredActions.length === 0" class="text-center q-pa-xl">
        <div class="text-h5 text-grey-5">Nenhuma ação encontrada.</div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';
import { useActionsStore } from 'src/stores/actions.store';
import ActionCard from 'src/components/home/ActionCard.vue';

const actionsStore = useActionsStore();
const actions = computed(() => actionsStore.actions);
const loading = computed(() => actionsStore.loading);

const selectedSlug = ref<string | null>(null);

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
  if (!selectedSlug.value) return actions.value;
  return actions.value.filter(a => a.slug === selectedSlug.value);
});

function selectAction(slug: string | null) {
  selectedSlug.value = slug;
}

onMounted(() => {
  if (actions.value.length === 0) {
    actionsStore.fetchActions();
  }
});

defineOptions({
  name: 'AcoesPage'
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.edu-nav-container {
  width: 100%;
  padding: 0 4px;
}

.edu-nav {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
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
    color: #000000 !important;
    font-weight: 700;
  }
}

.animate-fade {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-fade-delayed {
  animation: fadeIn 0.8s ease-out 0.2s forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 1024px) {
  .edu-nav-item {
    font-size: 10px;
    padding: 10px 4px;
  }
}

/* Mobile adjustments */
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
  .edu-nav-item {
    font-size: 9px;
    padding: 8px 2px;
    min-height: 70px;
    letter-spacing: 0;
  }
}
</style>
