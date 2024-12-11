import { useState, useEffect } from "react";
import MovieItem from "./MovieItem";
import Spinner from "./Spinner";
import { fetchMovies } from "../services/api";
import { Movie } from "../types/movie";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("Batman");
  const [error, setError] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useInfiniteScroll(() => {
    setPage((prev) => prev + 1);
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        const data = await fetchMovies(query, page);
        if (data.Search) {
          setMovies((prev) => [...prev, ...data.Search]);
        } else {
          setError("No results found.");
        }
      } catch (e) {
        console.error(e);
        setError("Error fetching movies.");
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();

    // eslint-disable-next-line
  }, [query, page]);

  return (
    <div className="p-4">
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search movies..."
          className="w-full"
          onChange={(e) => {
            setQuery(e.target.value);
            setMovies([]);
            setPage(1);
          }}
        />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Movie List</CardTitle>
        </CardHeader>
        <CardContent>
          {movies.map((movie) => (
            <MovieItem key={movie.imdbID} movie={movie} />
          ))}
          {isFetching && <Spinner />}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </CardContent>
      </Card>
    </div>
  );
};

export default MovieList;
