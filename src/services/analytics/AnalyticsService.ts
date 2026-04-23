export class AnalyticsService {
  track(eventName: string, payload: Record<string, unknown> = {}) {
    console.log('[analytics]', eventName, payload);
  }
}

export const analyticsService = new AnalyticsService();
