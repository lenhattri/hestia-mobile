import { WS_BASE_URL } from "@/config/websocket";
import { getTokens } from "@/utils/storage";

let socket: WebSocket | null = null;

export const createWebSocket = async (roomId: string) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    return socket;
  }

  const tokens = await getTokens();
  const access = tokens?.access_token;

  socket = new WebSocket(
    `${WS_BASE_URL}?room=${roomId}&token=${access}`
  );

  return socket;
};

export const closeWebSocket = () => {
  if (socket) {
    socket.close();
    socket = null;
  }
};
