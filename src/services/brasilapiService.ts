import axios from 'axios';

const BRASILAPI_BASE = 'https://brasilapi.com.br/api';

export interface BrasilAPIState {
  id: number;
  sigla: string;
  nome: string;
}

export interface BrasilAPICity {
  id: number;
  nome: string;
}

export interface BrasilAPIAddress {
  cep: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
}

export const fetchStates = async (): Promise<BrasilAPIState[]> => {
  try {
    const response = await axios.get<BrasilAPIState[]>(`${BRASILAPI_BASE}/ibge/uf/v1`);
    return response.data.sort((a, b) => a.nome.localeCompare(b.nome));
  } catch (error) {
    console.error('Error fetching states:', error);
    return [];
  }
};

export const fetchCities = async (stateUF: string): Promise<BrasilAPICity[]> => {
  try {
    const response = await axios.get<BrasilAPICity[]>(`${BRASILAPI_BASE}/ibge/municipios/v1/${stateUF}`);
    return response.data.sort((a, b) => a.nome.localeCompare(b.nome));
  } catch (error) {
    console.error(`Error fetching cities for state ${stateUF}:`, error);
    return [];
  }
};

export const fetchAddressByCEP = async (cep: string): Promise<BrasilAPIAddress | null> => {
  try {
    const response = await axios.get<BrasilAPIAddress>(`${BRASILAPI_BASE}/cep/v1/${cep}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching address for CEP ${cep}:`, error);
    return null;
  }
};