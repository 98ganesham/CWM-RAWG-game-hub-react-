import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import Platform from '../Entities/Platform';
import APIClient, { FetchResponse } from '../Services/api-client';
import useGameQueryStore from '../store';



const apiClient =  new APIClient<Game>('/games')
export interface Game {
    id: number;
    name: string;
    slug: string;
    description_raw: string;
    background_image: string;
    parent_platforms: {platform: Platform }[]
    metacritic : number;
    rating_top: number;
    
  }
  
  

const useGames = () => {
 const  gameQuery=  useGameQueryStore(s => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error >({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam=1}) =>
    apiClient.getAll({
      params:{
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
      }
    }),
  staleTime: ms('24h'),
  getNextPageParam: (lastPages, allPages) =>{
    return lastPages.count ? allPages.length +1: undefined;
  
  }
  
     
  });
  
}; 
export default useGames;