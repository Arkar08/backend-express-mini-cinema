import MovieCard from "../components/MovieCard";

const Movie = () => {
  return (
    <div className="h-[100%]">
      <div className="flex justify-between items-center m-4">
        <input
          type="text"
          placeholder="search movie..."
          className="w-[300px] p-2 border outline-none rounded-md"
        />
        <button className="p-2 bg-red-500 text-white rounded-md">New</button>
      </div>
      <hr />
      <MovieCard />
    </div>
  );
};

export default Movie;
