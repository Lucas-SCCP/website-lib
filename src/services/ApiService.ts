class ApiService {
  async getStructure(websiteId: number, apiUrl: string): Promise<any> {
    try {
      const response = await fetch(
        `${apiUrl}/website/${websiteId}/structure`
      );
      if (!response.ok) {
        throw new Error(response.status.toString());
      }
      const json = await response.json();
      return json.data;
    } catch (error: any) {
      console.error('Erro ao buscar dados da API:', error);
      throw new Error(error.message || error);
    }
  }
}

export { ApiService };