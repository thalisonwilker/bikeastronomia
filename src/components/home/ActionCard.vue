<template>
  <q-card class="action-card glass-panel glow-border full-height overflow-hidden" clickable @click="$emit('click')">
    <q-img :src="action.coverImage" :ratio="16/9">
      <div class="absolute-bottom text-heading text-weight-bold" style="background: rgba(0,0,0,0.5)">
        {{ action.name }}
      </div>
    </q-img>

    <q-card-section>
      <div class="row items-center no-wrap q-mb-sm">
        <q-icon :name="action.icon" :style="{ color: action.color }" size="24px" class="q-mr-sm" />
        <div class="text-caption text-grey-4 uppercase letter-spacing-1">
          Ação Educativa
        </div>
      </div>
      <div class="text-body2 text-grey-3 line-clamp-3">
        {{ action.shortDescription }}
      </div>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn flat no-caps color="accent" label="Saber mais" icon-right="chevron_right" />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { EducationalAction } from 'src/types';

interface Props {
  action: EducationalAction;
}

defineProps<Props>();
defineEmits(['click']);

defineOptions({
  name: 'ActionCard'
});
</script>

<style lang="scss" scoped>
.action-card {
  transition: transform 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-8px);
  }
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

.letter-spacing-1 {
  letter-spacing: 1px;
}
</style>
