// components/Searchbar.tsx
import React, { useState, useRef, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Fuse from "fuse.js";
import { searchRoutes } from "../../utils/searchRoutes";

type SearchItem = {
  keyword: string;
  url: string;
};

const suggestions: SearchItem[] = searchRoutes;

const Searchbar: React.FC = () => {
  const [query, setQuery] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [results, setResults] = useState<SearchItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const fuse = useRef(
    new Fuse(suggestions, {
      keys: ["keyword"],
      threshold: 0.3,
      ignoreLocation: true,
    })
  ).current;

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
    } else {
      setResults(fuse.search(query, { limit: 5 }).map((r) => r.item));
    }
  }, [query, fuse]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsFocus(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <div
        className="flex min-w-[400px] items-center text-[1.5rem] border rounded px-2"
        onClick={() => setIsFocus(true)}
      >
        {!isFocus && <IoSearchOutline size={30} />}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What can I help you with today?"
          className="ml-1 w-full focus:outline-none focus:ring-0 focus:border-transparent"
        />
      </div>

      {isFocus && results.length > 0 && (
        <ul className="absolute z-10 bg-white border rounded w-full mt-1 max-h-60 overflow-auto shadow-lg text-left">
          {results.map((item) => (
            <li key={item.url}>
              <a
                href={item.url}
                className="block px-4 py-2 hover:bg-gray-100 transition text-blue-600 "
                onClick={() => {
                  setQuery("");
                  setIsFocus(false);
                }}
              >
                {item.keyword}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Searchbar;
