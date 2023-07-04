import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import APIClient ,{FetchResponse } from '../Services/api-client';
import Platform from '../Entities/Platform';
import ms from 'ms';



const apiClient =  new APIClient<Game>('/games')
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform }[]
    metacritic : number;
    rating_top: number;
    
  }
  
  

const useGames = (gameQuery: GameQuery) => 
useInfiniteQuery<FetchResponse<Game>, Error >({
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

   
})


 

export default useGames;