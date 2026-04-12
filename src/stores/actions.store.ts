import { defineStore } from 'pinia';
import { EducationalAction } from '../types';
import { actionsService } from '../services/actions.service';

export const useActionsStore = defineStore('actions', {
  state: () => ({
    actions: [] as EducationalAction[],
    loading: false,
    currentAction: null as EducationalAction | null,
  }),

  actions: {
    async fetchActions() {
      this.loading = true;
      try {
        this.actions = await actionsService.getAll();
      } catch (error) {
        console.error('Error fetching actions:', error);
      } finally {
        this.loading = false;
      }
    },

    async fetchActionBySlug(slug: string) {
      this.loading = true;
      try {
        const action = await actionsService.getBySlug(slug);
        this.currentAction = action || null;
      } catch (error) {
        console.error('Error fetching action by slug:', error);
      } finally {
        this.loading = false;
      }
    }
  }
});
