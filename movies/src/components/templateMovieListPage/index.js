import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import MovieList from "../movieList";
import Grid from "@mui/material/Grid";

function MovieListPageTemplate({ movies, title, action }) {
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [ratingFilter, setRatingFilter] = useState([0, 10]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 3;
  const genreId = Number(genreFilter);

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else if (type === "genre") setGenreFilter(value);
  };

  const handleMinRatingChange = (event, newValue) => {
    setRatingFilter([newValue, ratingFilter[1]]);
  };

  const handleMaxRatingChange = (event, newValue) => {
    setRatingFilter([ratingFilter[0], newValue]);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

  const displayedMovies = movies
    .filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .filter((m) => {
      const rating = m.vote_average;
      return rating >= ratingFilter[0] && rating <= ratingFilter[1];
    })
    .filter((m) => {
      const releaseDate = new Date(m.release_date);
      const isAfterStart = startDate ? releaseDate >= startDate : true;
      const isBeforeEnd = endDate ? releaseDate <= endDate : true;
      return isAfterStart && isBeforeEnd;
    })
    .slice(indexOfFirstMovie, indexOfLastMovie);

  const totalPages = Math.ceil(
    movies.filter((m) => {
      return m.title.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    }).length / moviesPerPage
  );

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const paginationStyle = {
    textAlign: "center",
    marginTop: "20px",
  };

  const buttonStyle = {
    backgroundColor: "#f8f9fa",
    border: "1px solid #dee2e6",
    color: "#212529",
    padding: "5px 10px",
    margin: "0 5px",
    cursor: "pointer",
    borderRadius: "3px",
  };

  const activeButtonStyle = {
    backgroundColor: "#007bff",
    color: "white",
  };

  return (
    <Grid container sx={{ padding: "20px" }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={2}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <FilterCard
            onUserInput={handleChange}
            titleFilter={nameFilter}
            genreFilter={genreFilter}
            ratingFilter={ratingFilter}
            onMinRatingChange={handleMinRatingChange}
            onMaxRatingChange={handleMaxRatingChange}
            onStartDateChange={handleStartDateChange}
            onEndDateChange={handleEndDateChange}
          />
        </Grid>
        <MovieList action={action} movies={displayedMovies} />
        <Grid item xs={12} style={paginationStyle}>
          <div style={paginationStyle}>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageClick(i + 1)}
                style={{
                  ...buttonStyle,
                  ...(i + 1 === currentPage && activeButtonStyle),
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default MovieListPageTemplate;
