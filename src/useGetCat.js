import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

// Create a custom hooks for fetching cat fact, provides abstarction
export const useGetCat = () => {
  const {
    data,
    refetch,
    isLoading: isCatLoading,
    error,
  } = useQuery({
    queryKey: "cat",
    queryFn: async () =>
      Axios.get("https://catfact.ninja/fact")
        .then((res) => res.data)
        .catch((e) => console.log(e)),
  });

  const refetchData = () => {
    alert("Data Refetched");
    refetch();
  };

  return { data, refetchData, isCatLoading };
};
