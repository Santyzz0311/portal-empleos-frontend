import { ReactNode } from 'react'

export interface User {
  id: number;
  name: string;
  email: string;
  rol?: string;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}
