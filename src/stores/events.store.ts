import { defineStore } from 'pinia';
import { AppEvent } from '../types';
import { eventsService } from '../services/events.service';

export const useEventsStore = defineStore('events', {
  state: () => ({
    events: [] as AppEvent[],
    loading: false,
  }),

  actions: {
    async fetchEvents() {
      this.loading = true;
      try {
        this.events = await eventsService.getAll();
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        this.loading = false;
      }
    }
  }
});
