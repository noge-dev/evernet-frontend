import type { PingResponse } from "@/types/ping"
import axios from 'axios'

export async function ping(): Promise<PingResponse> {
  try {
    const response = await axios.get<PingResponse>('/api/ping')
    return response.data
  } catch (error) {
    // Tu peux personnaliser la gestion d'erreur ici
    throw new Error(`Ping failed: ${(error as Error).message}`)
  }
}