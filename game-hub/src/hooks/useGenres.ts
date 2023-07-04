import { useQuery } from '@tanstack/react-query';
import genres from '../Data/genres'
import APIClient from '../Services/api-client';
import { Platform } from './usePlatforms';





const apiClient = new APIClient<Genre>('/genres')
export interface Genre {
    id: number;
    name: string;
    image_background : string;
  }


const useGenres = () =>({data: genres, isLoading: false, error: null}) 

   
      
        
        
     

export default useGenres;