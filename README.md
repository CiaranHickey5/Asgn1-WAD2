# Assignment 1 - ReactJS app.

Name: Ciaran Hickey

## Table of contents

- [Overview](#overview)
- [Features](#features)
- [Setup-Requirements](#setup-requirements)
- [API-Endpoints](#api-endpoints)
- [Routing](#routing)

## Overview.

This repo contains a movie app, specifically using TMDB api and react.
It displays the latest and greatest movies. Movie statistics, reviews and more can be found.
This assignemnt is a continuation from the weekly labs where other features must be added to the app.

## Features.

- Feature 1: Three new static endpoints
  I added three new static endpoints to the app. Namely now playing, popular and top rated movies. The site header was updated to surf between the movie lists.
- Feature 2: Rating range filtering
  Users can use two sliders as a minimum and maximum range of rating. The movies with a rating between the minimum and maximum values will be shown. User is unable to make maximum slider below the minimum slider.
- Feature 3: Release date range
  Users can filter movies between two selected dates. The movies that were released between the dates will be displayed.
- Feature 4: React-query caching on all static and parameterised endpoints
- Feature 5: Pagination
  The movie lists have pagination implemented with a maximum of 5 movies shown per page. The number of pages are shown below the movie list where the user can click to browse between each.
- Feature 6: Responsive UI layout for filter card.
  The new rating range and date range filters change layout depending on the size of the device.
- Feature 7: Sorting movies
  Able to sort the movie list by either highest rating (default), alphabetical order or newest release date.
- Feature 8: Movie videos
  Displays the videos of a particular movie and each videos name.

## Setup requirements.

After cloning the repo I needed to install the node packages using npm install in the movies folder. I didn't clone these files because of the large file size. Finally, I would include the .env file which contains my TMDB key. This is a hidden file for security reasons.

## API endpoints.

- Discover list of now playing movies - movies/nowPlaying
- Discover list of popular movies - movies/popular
- Discover list of top rated movies - movies/topRated
- Discover videos of particular movie - movies/:id/videos

## Routing.

- /movies/:id/videos - displays videos associated with particular movie
- /movies/nowPlaying
- /movies/popular
- /movies/topRated
