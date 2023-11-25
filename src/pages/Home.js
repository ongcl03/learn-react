import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: "cat",
    queryFn: () =>
      Axios.get("https://catfact.ninja/fact")
        .then((res) => res.data)
        .catch((e) => console.log(e)),
  });

  if (isError) {
    return <h1>Sorry, there's an error</h1>;
  }

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <h1>
      This is the home page
      <p>{catData?.fact}</p>
      {/* Using refetch to update the data */}
      <button onClick={refetch}>Update Data</button>
    </h1>
  );
};
