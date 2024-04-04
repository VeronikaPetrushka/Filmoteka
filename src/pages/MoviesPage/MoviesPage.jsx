// import { useSearchParams } from "react-router-dom";
// import MovieList from "../../components/MovieList/MovieList";
// import SearchBox from "../../components/SearchBox/SearchBox";
// // import getMovies from api

// export default function Movies() {
//   const movies = getMovies();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const movieName = searchParams.get("name") ?? "";

//   const visibleProducts = movies.filter((product) =>
//     product.name.toLowerCase().includes(movieName.toLowerCase())
//   );

//   const updateQueryString = (name) => {
//     const nextParams = name !== "" ? { name } : {};
//     setSearchParams(nextParams);
//   };

//   return (
//     <main>
//       <SearchBox value={movieName} onChange={updateQueryString} />
//       <MovieList products={visibleProducts} />
//     </main>
//   );
// }
