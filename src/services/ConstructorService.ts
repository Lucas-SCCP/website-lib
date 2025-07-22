import React from 'react';
import { ApiService } from './ApiService';
import { CacheService } from './CacheService';
import ComponentFactory from '../factories/ComponentFactory';
import ElementFactory from '../factories/ElementFactory';
import type { WebsiteType } from '../types/WebsiteType';

class ConstructorService {
  async fetchWebsiteFromApi(websiteId: number, apiUrl: string): Promise<WebsiteType> {
    const apiService = new ApiService();
    const website = await apiService.getStructure(websiteId, apiUrl) as WebsiteType | null;
    if (!website) {
      throw new Error('Site não encontrado');
    }

    localStorage.setItem('websiteData', JSON.stringify(website));

    return website;
  }

  async fetchWebsiteFromCache(): Promise<WebsiteType> {
    const cacheService = new CacheService();
    const website = cacheService.getStructure() as WebsiteType | null;
    if (!website) {
      throw new Error('Site não encontrado');
    }

    return website;
  }

  async fetchMenu(): Promise<
    { id: number; name: string; path: string; type: 'link' }[]
  > {
    const websiteStructure = await this.fetchWebsiteFromCache();

    return websiteStructure.pages
      .filter(page => page.menu === 1)
      .map(page => ({
        id: page.id,
        name: page.name,
        path: page.path,
        type: 'link' as const,
      }));
  }

  createComponent(component: any): React.ReactElement | null {
    return ComponentFactory.create(component);
  }

  createElement(element: any): React.ReactElement | null {
    return ElementFactory.create(element);
  }
}

export { ConstructorService };