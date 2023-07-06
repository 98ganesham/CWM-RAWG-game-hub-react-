import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import platforms from '../Data/platforms';
import APIClient from '../Services/api-client';
import { Platform } from '../Entities/Platform';


const apiClient = new APIClient<Platform>('/platforms/lists/parents');
const usePlatforms =() =>
useQuery({
   queryKey:  ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms,
});
export default usePlatforms;