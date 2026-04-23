export class PushService {
  async register() {
    return true;
  }

  async scheduleReminder() {
    return true;
  }
}

export const pushService = new PushService();
