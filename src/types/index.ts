import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface User {
  id: number;
  name: string;
  email: string;
  roleName: string;
}

export interface AuthContextType {
  user: User;
  token: string;
  login: (username: string, password: string) => void;
  logout: () => void;
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>
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
  creatorUserName?: string;
  creatorEmail?: string;
  categoryName?: string;
  hasApplied?: boolean;
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

export interface CreatedJobs {
  id: number
  title: string
  description: string
  location: string
  creatorUserName: string
  creatorEmail: string
  categoryName: string
}

export interface Applicant {
  id?: number;
  applicationId: number;
  userId: number;
  userName: string;
  userEmail: string;
  applyDate: Date;
  description: string;
}

export interface JobPostData {
  title: string;
  description: string;
  location: string;
  userId: number;
  categoryId: number;
}

export interface ApplicationPostData {
  description: string;
  userId: number;
  jobId: number;
}

export interface JobPostErrors extends Partial<Record<keyof JobPostData, boolean>> { }

export interface ErrorItemProps {
  titleText: string
}
