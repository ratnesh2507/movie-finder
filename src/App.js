import { useState } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import NumResults from "./components/NumResults";

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  return (
    <>
      <Navbar>
        <Search query={query} setQuery={setQuery} />
        <NumResults />
      </Navbar>
    </>
  );
}
