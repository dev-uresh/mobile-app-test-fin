export interface LoginPayload {
  username: string;
  password: string;
}

export class AuthApi {
  async login(payload: LoginPayload) {
    return {
      token: `demo-token-${payload.username}`,
      user: {
        id: 'demo-user',
        username: payload.username,
      },
    };
  }
}

export const authApi = new AuthApi();
