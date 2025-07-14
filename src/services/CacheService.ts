class CacheService {
  getStructure(): any {
    try {
      const cachedData = localStorage.getItem('websiteData');
      
      if (!cachedData) {
        throw new Error('Sem dados em cache');
      }

      return JSON.parse(cachedData);
    } catch (error: any) {
      console.error('Erro ao buscar dados do cache:', error);
      throw new Error(error.message || error);
    }
  }
}

export { CacheService };