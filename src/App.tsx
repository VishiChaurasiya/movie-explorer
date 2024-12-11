import MovieList from "./components/MovieList";

const App: React.FC = () => (
  <div className="container mx-auto">
    <h1 className="text-2xl font-bold text-center my-4">Movie Explorer</h1>
    <MovieList />
  </div>
);

export default App;
