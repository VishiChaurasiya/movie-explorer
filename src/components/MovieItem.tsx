import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Movie } from "../types/movie";

interface Props {
  movie: Movie;
}

const MovieItem: React.FC<Props> = ({ movie }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={movie.imdbID}>
        <AccordionTrigger>{movie.Title}</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>
              <strong>Year:</strong> {movie.Year}
            </p>
            <p>
              <strong>Genre:</strong> {movie.Genre || "N/A"}
            </p>
            <p>
              <strong>Director:</strong> {movie.Director || "N/A"}
            </p>
            <p>
              <strong>Plot:</strong> {movie.Plot || "N/A"}
            </p>
            {movie.Poster && (
              <img
                src={movie.Poster}
                alt={`${movie.Title} poster`}
                className="rounded-lg mt-2 w-full max-w-xs"
              />
            )}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default MovieItem;
