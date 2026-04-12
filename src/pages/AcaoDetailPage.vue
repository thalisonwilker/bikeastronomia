<template>
  <q-page class="q-pa-md">
    <div v-if="loading" class="flex flex-center" style="min-height: 50vh">
      <q-spinner-orbit color="accent" size="100px" />
    </div>

    <div v-else-if="action" class="container">
      <q-btn flat color="grey-4" icon="arrow_back" label="Voltar" :to="{ name: 'acoes' }" class="q-mb-lg" />

      <div class="row q-col-gutter-xl">
        <div class="col-12 col-md-7">
          <q-img :src="action.coverImage" class="rounded-borders glow-border" style="max-height: 500px" />
          
          <div class="q-mt-xl">
            <h1 class="text-h3 text-heading q-mb-md">{{ action.name }}</h1>
            <div class="row q-gutter-sm q-mb-lg">
              <q-chip v-for="tag in action.tags" :key="tag" outline color="accent" text-color="white" size="sm">
                {{ tag }}
              </q-chip>
            </div>
            
            <p class="text-body1 text-grey-3 q-mb-md" style="white-space: pre-line">
              {{ action.fullDescription }}
            </p>
          </div>
        </div>

        <div class="col-12 col-md-5">
          <div class="glass-panel q-pa-lg sticky-sidebar">
            <div class="text-h5 text-heading q-mb-md">Informações</div>
            
            <q-list dark padding>
              <q-item>
                <q-item-section avatar>
                  <q-icon name="calendar_today" color="accent" />
                </q-item-section>
                <q-item-section>
                  <q-item-label caption class="text-white uppercase">Início do Projeto</q-item-label>
                  <q-item-label>{{ new Date(action.createdAt).toLocaleDateString('pt-BR') }}</q-item-label>
                </q-item-section>
              </q-item>

              <q-item>
                <q-item-section avatar>
                  <q-icon :name="action.icon" :style="{ color: action.color }" />
                </q-item-section>
                <q-item-section>
                  <q-item-label caption class="text-white uppercase">Categoria</q-item-label>
                  <q-item-label>Educação Científica</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>

            <q-separator dark class="q-my-md" />

            <div class="text-weight-bold q-mb-sm">Interessado em apoiar ou participar?</div>
            <p class="text-caption text-grey-4 q-mb-lg">Nossas ações dependem da colaboração da comunidade e de entusiastas como você.</p>
            
            <q-btn unelevated color="accent" text-color="primary" label="Entrar em Contato" class="full-width text-weight-bold" :to="{ name: 'contato', query: { acao: action.slug } }" />
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center q-pa-xl">
      <div class="text-h4">Ação não encontrada</div>
      <q-btn outline color="accent" label="Ver todas as ações" :to="{ name: 'acoes' }" class="q-mt-md" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useActionsStore } from 'src/stores/actions.store';

const route = useRoute();
const actionsStore = useActionsStore();
const action = computed(() => actionsStore.currentAction);
const loading = computed(() => actionsStore.loading);

const loadAction = () => {
  const slug = route.params.slug as string;
  actionsStore.fetchActionBySlug(slug);
};

onMounted(loadAction);
watch(() => route.params.slug, loadAction);

defineOptions({
  name: 'AcaoDetailPage'
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

.sticky-sidebar {
  position: sticky;
  top: 100px;
}
</style>
