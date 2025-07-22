import type { RawWebsiteType } from '../types/RawWebsiteType'

class ApiService {
  async getStructure(websiteId: number, apiUrl: string): Promise<RawWebsiteType> {
    try {
      const response = await fetch(`${apiUrl}/website/${websiteId}/structure`)
      if (!response.ok) {
        throw new Error(response.status.toString())
      }
      const json = await response.json()
      return json.data
    } catch (error: unknown) {
      console.error('Erro ao buscar dados da API:', error)
      throw new Error(error instanceof Error ? error.message : String(error))
    }
  }
}

export { ApiService }
