import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import img from "../../images/pexels-dziana-hasanbekava-5480827.jpg";
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const formControl = {
  margin: 1,
  minWidth: 220,
  backgroundColor: "rgb(255, 255, 255)",
};

export default function FilterMoviesCard(props) {
  const { data, error, isLoading, isError } = useQuery("genres", getGenres);
  const [ratingFilter, setRatingFilter] = useState([0, 10]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const genres = data.genres;
  if (genres[0].name !== "All") {
    genres.unshift({ id: "0", name: "All" });
  }

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value);
  };

  const handleTextChange = (e) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  const handleMinRatingChange = (event, newValue) => {
    const newMin = Math.min(newValue, ratingFilter[1]);
    setRatingFilter([newMin, ratingFilter[1]]);
    props.onMinRatingChange(event, newMin);
  };

  const handleMaxRatingChange = (event, newValue) => {
    const newMax = Math.max(newValue, ratingFilter[0]);
    setRatingFilter([ratingFilter[0], newMax]);
    props.onMaxRatingChange(event, newMax);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
    props.onStartDateChange(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    props.onEndDateChange(date);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "rgb(204, 204, 0)",
      }}
      variant="outlined"
    >
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
        </Typography>
        <TextField
          sx={{ ...formControl }}
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
          value={props.titleFilter}
          onChange={handleTextChange}
        />
        <FormControl sx={{ ...formControl }}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            defaultValue=""
            value={props.genreFilter}
            onChange={handleGenreChange}
          >
            {genres.map((genre) => (
              <MenuItem key={genre.id} value={genre.id}>
                {genre.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Typography id="rating-range-slider" gutterBottom>
          Rating Range
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Slider
            value={ratingFilter[0]}
            onChange={handleMinRatingChange}
            valueLabelDisplay="auto"
            aria-labelledby="min-rating-slider"
            min={0}
            max={10}
          />
          <Typography style={{ margin: "0 16px" }}>to</Typography>
          <Slider
            value={ratingFilter[1]}
            onChange={handleMaxRatingChange}
            valueLabelDisplay="auto"
            aria-labelledby="max-rating-slider"
            min={0}
            max={10}
          />
        </div>

        <Typography id="date-range-picker" gutterBottom>
          Release Date Range
        </Typography>
        <ReactDatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          placeholderText="Start Date"
          className="form-control"
          isClearable
        />
        <ReactDatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          placeholderText="End Date"
          className="form-control"
          isClearable
        />
      </CardContent>
      <CardMedia sx={{ height: 300 }} image={img} title="Filter" />
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies.
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}
