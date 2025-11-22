import 'dotenv/config';

export default ({ config }) => {
  return {
    ...config,
    extra: {
      API_BASE_URL: process.env.API_BASE_URL,
      WS_BASE_URL: process.env.WS_BASE_URL,
      DEFAULT_ROOM_KIT01: process.env.DEFAULT_ROOM_KIT01,
    },
  };
};
