import { useQuery } from "@tanstack/react-query";

const getLocations = async () => {
    const BASE_URL=import.meta.env.VITE_BASE_URL;
;  const url = BASE_URL + "/locations";
  try{
  const response = await fetch(url);
  return await response.json();
    }catch(error:any){
      return  Promise.reject(error.response.message || 'An unknown error occurred');
    }
};

export const useGetLocations = () => {
  return useQuery({
    queryKey: ["location"],
    queryFn: getLocations,
  });
};
