import { config } from './config';

export const WS_BASE_URL = config.WS_BASE_URL;

export const DEFAULT_ROOMS = {
  KIT01: config.DEFAULT_ROOMS.KIT01,
} as const;
