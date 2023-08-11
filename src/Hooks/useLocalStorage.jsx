import { useEffect, useState } from "react";

export const useLocalStorage = () => {
  const [value, setValue] = useState(() => {
    const storeMovies = localStorage.getItem("watched");
    return storeMovies ? JSON.parse(storeMovies) : [];
  });

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};
