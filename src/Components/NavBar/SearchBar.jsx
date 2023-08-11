import { useRef } from "react";
import { useKey } from "../../Hooks/useKey";

/* eslint-disable react/prop-types */
const SearchBar = ({ query, setQuery }) => {
  const inputRef = useRef(null);

  useKey("enter", () => {
    if (document.activeElement === inputRef) return;
    inputRef.current.focus();
    setQuery("");
  });

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      ref={inputRef}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;
