import axios from 'axios';

const IBGE_API_BASE = 'https://servicodados.ibge.gov.br/api/v1/localidades';

export interface IBGEState {
  id: number;
  sigla: string;
  nome: string;
}

export interface IBGECity {
  id: number;
  nome: string;
}

export const fetchStates = async (): Promise<IBGEState[]> => {
  try {
    const response = await axios.get<IBGEState[]>(`${IBGE_API_BASE}/estados`);
    return response.data.sort((a, b) => a.nome.localeCompare(b.nome));
  } catch (error) {
    console.error('Error fetching states:', error);
    return [];
  }
};

export const fetchCities = async (stateUF: string): Promise<IBGECity[]> => {
  try {
    const response = await axios.get<IBGECity[]>(`${IBGE_API_BASE}/estados/${stateUF}/municipios`);
    return response.data.sort((a, b) => a.nome.localeCompare(b.nome));
  } catch (error) {
    console.error(`Error fetching cities for state ${stateUF}:`, error);
    return [];
  }
};