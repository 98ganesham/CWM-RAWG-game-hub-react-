
import APIClient, { FetchResponse } from '../Services/api-client';
import platforms from '../Data/platforms';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

const apiClient = new APIClient<Platform>('/platforms/lists/parents')
export interface Platform{
    id: number;
    name: string;
    slug: string;

}

const usePlatforms =() =>({data: platforms, isLoading: false, error: null});


  



export default usePlatforms;