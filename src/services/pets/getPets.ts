import { GetPetsRequest } from '../../interfaces/pets'
import httpClient from '../api/httpClient'

export async function getPets(
    params: GetPetsRequest
): Promise<GetPetsRequest>{
    try{
        const response = await httpClient.get('/pets', { params })

        return response.data
    }catch(error) {
        console.log('Erro ao buscar pets', error)
        throw error
    }
    
}