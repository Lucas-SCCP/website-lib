import type { RawWebsiteType } from '../types/RawWebsiteType'

class CacheService {
  getStructure(): RawWebsiteType {
    try {
      const cachedData = localStorage.getItem('websiteData')

      if (!cachedData) {
        throw new Error('Sem dados em cache')
      }

      return JSON.parse(cachedData)
    } catch (error: unknown) {
      console.error('Erro ao buscar dados do cache:', error)
      throw new Error(error instanceof Error ? error.message : String(error))
    }
  }
}

export { CacheService }
