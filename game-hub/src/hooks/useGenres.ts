import ms from "ms";

import APIClient from "../Services/api-client";
import { useQuery } from "@tanstack/react-query";
import genres from "../Data/genres";
import  Genre  from "../Entities/Genre";

const apiClient  =new APIClient<Genre>('/genres');
const useGenres = () => 
useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: ms('24'),
  initialData: genres,});
export default useGenres;