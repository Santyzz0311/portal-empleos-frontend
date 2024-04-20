import { ReactNode } from 'react'

export interface User {
  id: number;
  name: string;
  email: string;
  roleName: string;
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

export interface Errors {
  email?: string;
  password?: string;
  form?: string;
}

export interface ApplyModalProps {
  idJob: number;
  jobTitle: string;
  jobDescription: string;
  userName: string;
  setModal: (value: boolean) => void;
}

export interface JobCardProps {
  id: number;
  title: string;
  description: string;
  location: string;
  creatorUserName: string;
  creatorEmail: string;
  categoryName: string;
  hasApplied: boolean;
}

export interface Category {
  id: number;
  name: string;
}

export interface Job {
  id: number;
  title: string;
  description: string;
  location: string;
}

export interface NavItemProps {
  label: string;
  onClick: () => void;
}

export interface Applies {
  jobId: number;
  jobTitle: string;
  appliedOn: string;
  applyDescription: string;
  jobLocation: string;
  jobCreatorName: string;
  jobCreatorEmail: string;
}
