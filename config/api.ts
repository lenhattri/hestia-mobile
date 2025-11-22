import { config } from "./config";

export const API_BASE_URL = config.API_BASE_URL;

export const ENDPOINTS = {
  LOGIN: '/auth/login',
  REFRESH: '/auth/refresh',
  LOGOUT: '/auth/logout',
} as const;
