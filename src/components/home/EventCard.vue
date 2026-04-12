<template>
  <q-card class="event-card glass-panel flex row no-wrap overflow-hidden glow-border">
    <q-img :src="event.coverImage" class="col-4 gt-xs" style="min-width: 150px" />
    
    <q-card-section class="col">
      <div class="row items-center q-mb-xs">
        <q-chip size="sm" color="secondary" text-color="white" icon="event" outline>
          {{ new Date(event.startDate).toLocaleDateString('pt-BR') }}
        </q-chip>
        <q-chip size="sm" color="accent" text-color="primary" class="q-ml-sm text-weight-bold uppercase">
          {{ event.category }}
        </q-chip>
      </div>

      <div class="text-h6 text-heading q-mb-sm line-clamp-1">{{ event.title }}</div>
      <div class="text-caption text-grey-4 q-mb-md line-clamp-2">
        {{ event.description }}
      </div>
      
      <div class="row items-center text-caption text-grey-5">
        <q-icon name="location_on" color="grey-5" class="q-mr-xs" />
        {{ event.location }}
      </div>
    </q-card-section>

    <q-card-actions vertical align="center" class="bg-black-10">
      <q-btn flat round color="accent" icon="arrow_forward" @click="$emit('click')" />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { AppEvent } from 'src/types';

interface Props {
  event: AppEvent;
}

defineProps<Props>();
defineEmits(['click']);

defineOptions({
  name: 'EventCard'
});
</script>

<style lang="scss" scoped>
.event-card {
  transition: all 0.3s ease;
  height: 100%;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    transform: translateX(5px);
  }
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

.bg-black-10 {
  background: rgba(0, 0, 0, 0.15);
}
</style>
