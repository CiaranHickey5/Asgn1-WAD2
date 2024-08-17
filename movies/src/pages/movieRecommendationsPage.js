import React from "react";
import PageTemplate from "../components/templateMoviePage";
import { getMovieRecommendations } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

const MovieRecommendationsPage = (props) => {
  const { data, error, isLoading, isError } = useQuery(
    "movieRecommendations",
    getMovieRecommendations
  );

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const movies = data.results;

  return (
    <PageTemplate
      title="Movie Recommendations"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />;
      }}
    />
  );
};

export default MovieRecommendationsPage;
