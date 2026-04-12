<template>
  <q-page class="q-pa-xl">
    <div class="container mx-auto">
      <div class="row items-center q-mb-xl">
        <div class="col-12 col-md-6">
          <h1 class="text-h2 text-heading text-gradient q-mb-md">Agenda Celéstial</h1>
          <p class="text-h6 text-grey-4 text-weight-light">Fique por dentro de todos os nossos eventos, observações e oficinas.</p>
        </div>
        <div class="col-12 col-md-6 flex justify-end items-center q-gutter-sm">
          <q-btn-toggle
            v-model="filter"
            toggle-color="accent"
            flat
            text-color="grey-4"
            toggle-text-color="primary"
            class="glass-panel"
            :options="[
              {label: 'Todos', value: 'all'},
              {label: 'Próximos', value: 'upcoming'},
              {label: 'Passados', value: 'past'}
            ]"
          />
        </div>
      </div>

      <div v-if="loading" class="q-gutter-y-md">
        <q-skeleton v-for="i in 3" :key="i" height="120px" square class="glass-panel" />
      </div>

      <div v-else-if="filteredEvents.length > 0" class="row q-col-gutter-lg">
        <div v-for="event in filteredEvents" :key="event.id" class="col-12">
          <EventCard :event="event" @click="handleEventClick(event)" />
        </div>
      </div>

      <div v-else class="text-center q-pa-xl glass-panel">
        <q-icon name="bedtime" size="100px" color="grey-8" class="q-mb-md" />
        <div class="text-h5 text-grey-5">Nenhum evento encontrado nesta categoria.</div>
        <q-btn outline color="accent" label="Limpar Filtros" class="q-mt-lg" @click="filter = 'all'" />
      </div>
    </div>

    <!-- Info Banner -->
    <div class="q-mt-xl glass-panel q-pa-xl text-center">
      <div class="text-h4 text-heading q-mb-md">Quer realizar um evento na sua escola?</div>
      <p class="text-body1 text-grey-4 q-mb-lg">Levâmos nossos telescópios e oficinas para instituições de ensino e espaços públicos.</p>
      <q-btn color="accent" text-color="primary" label="Solicitar Agendamento" :to="{ name: 'contato' }" class="text-weight-bold" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useEventsStore } from 'src/stores/events.store';
import EventCard from 'src/components/home/EventCard.vue';
import { AppEvent } from 'src/types';

const eventsStore = useEventsStore();
const loading = computed(() => eventsStore.loading);
const filter = ref('upcoming');

const filteredEvents = computed(() => {
  const allEvents = eventsStore.events;
  const now = new Date();

  if (filter.value === 'all') return allEvents;
  
  return allEvents.filter(e => {
    const eventDate = new Date(e.startDate);
    return filter.value === 'upcoming' ? eventDate >= now : eventDate < now;
  });
});

const handleEventClick = (event: AppEvent) => {
  // Logic for opening event details or registration
  console.log('Event clicked:', event.title);
};

onMounted(() => {
  eventsStore.fetchEvents();
});

defineOptions({
  name: 'EventosPage'
});
</script>

<style lang="scss" scoped>
.container {
  max-width: 1000px;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>
