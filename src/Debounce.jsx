import { useState } from "react";
import useDebounce from "./useDebounce.js";

export default function Debounce() {
  const [query, setQuery] = useState("");
  const debouncedValue = useDebounce(query, 200);

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <p>{debouncedValue}</p>
    </div>
  );
}
