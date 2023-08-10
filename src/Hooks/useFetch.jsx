import { useEffect, useState } from "react";

export const useFetch = (API_URL, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        setErrorMessage("");
        setIsLoading(true);
        const res = await fetch(API_URL, { signal: controller.signal });
        if (!res.ok) throw new Error("something went wrong, try again later");
        const data = await res.json();
        if (data.Response === "False") throw new Error("movies not found");
        setIsLoading(false);
        setData(data.Search);

        console.log(data);
      } catch (error) {
        if (error.name !== "AbortError") setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (query < 3) {
      setData([]);
      setErrorMessage("");
    }

    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [API_URL, query]);
  return { data, isLoading, errorMessage };
};
