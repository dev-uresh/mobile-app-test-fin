export class BiometricService {
  async isAvailable() {
    return true;
  }

  async authenticate() {
    return true;
  }
}

export const biometricService = new BiometricService();
