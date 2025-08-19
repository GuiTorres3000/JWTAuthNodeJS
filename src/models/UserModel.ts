export interface User {
      id: string,
      username: string,
      email: string,
      password: string,
      role: 'user' | 'admin',
      createdAt: Date,
}

// Array em memória de usuários como exemplo
export const users: User[] = [];