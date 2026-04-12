import { ACTIONS_MOCK } from '../mocks/actions.mock';
import { EducationalAction } from '../types';

/**
 * Service to handle educational actions data.
 * Designed to be easily switched to a real API in the future.
 */
class ActionsService {
  async getAll(): Promise<EducationalAction[]> {
    // Simulate API delay
    return new Promise((resolve) => {
      setTimeout(() => resolve(ACTIONS_MOCK), 500);
    });
  }

  async getBySlug(slug: string): Promise<EducationalAction | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(ACTIONS_MOCK.find(a => a.slug === slug));
      }, 300);
    });
  }
}

export const actionsService = new ActionsService();
