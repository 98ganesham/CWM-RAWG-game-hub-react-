import { useQuery } from '@tanstack/react-query';
import genres from '../Data/genres'
import apiClient from '../Services/api-client';
import { FetchResponse } from '../Services/api-client'



export interface Genre {
    id: number;
    name: string;
    image_background : string;
  }


const useGenres = () => useQuery({
  queryKey:['genres'],
  queryFn: () => 
  apiClient
  .get<FetchResponse<Genre>>('/genres').then(res => res.data),
  staleTime: 24*60*60*1000,
  initialData: {count: genres.length, results: genres}
})
   
      
        
        
     

export default useGenres;