import { EVENTS_MOCK } from '../mocks/events_news.mock';
import { AppEvent } from '../types';

class EventsService {
  async getAll(): Promise<AppEvent[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(EVENTS_MOCK), 400);
    });
  }

  async getById(id: string): Promise<AppEvent | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(EVENTS_MOCK.find(e => e.id === id));
      }, 300);
    });
  }
}

export const eventsService = new EventsService();
