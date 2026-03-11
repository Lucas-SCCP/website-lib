import { ApiService } from './ApiService'
import { CacheService } from './CacheService'
import type { RawWebsiteType } from '../types/RawWebsiteType'

class ConstructorService {
  async fetchWebsiteFromApi(websiteId: number, apiUrl: string): Promise<RawWebsiteType> {
    const apiService = new ApiService()
    const website = await apiService.getStructure(websiteId, apiUrl)
    if (!website) {
      throw new Error('Site não encontrado')
    }

    localStorage.setItem('websiteData', JSON.stringify(website))

    return website
  }

  async fetchWebsiteFromCache(): Promise<RawWebsiteType> {
    const cacheService = new CacheService()
    const website = cacheService.getStructure()
    if (!website) {
      throw new Error('Site não encontrado')
    }

    return website
  }

  async fetchMenu(): Promise<{ id: number; name: string; path: string; type: 'link' }[]> {
    const websiteStructure = await this.fetchWebsiteFromCache()

    return websiteStructure.pages
      .filter((page) => page.menu === 1)
      .map((page) => ({
        id: page.id,
        name: page.name,
        path: page.path,
        type: 'link' as const
      }))
  }
}

export { ConstructorService }
