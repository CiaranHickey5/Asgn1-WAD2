# Assignment 1 - ReactJS app.

Name: Ciaran Hickey

## Overview.

This repo contains a movie app, specifically using TMDB api and react.
It displays the latest and greatest movies. Movie statistics, reviews and more can be found.
This assignemnt is a continuation from the weekly labs where other features must be added to the app.

### Features.

[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
Here

- Feature 1: Three new static endpoints
  I added three new static endpoints to the app. Namely now playing, popular and top rated movies. The site header was updated to surf between the movie lists.
- Feature 2: Rating range filtering
  Users can use two sliders as a minimum and maximum range of rating. The movies with a rating between the minimum and maximum values will be shown. User is unable to make maximum slider below the minimum slider.
- Feature 3: Release date range
  Users can filter movies between two selected dates. The movies that were released between the dates will be displayed.
- Feature 4: React-query caching on all static endpoints
- Feature 5: Pagination
  The movie lists have pagination implemented with a maximum of 5 movies shown per page. The number of pages are shown below the movie list where the user can click to browse between each.
- Feature 6: Responsive UI layout for filter card.
  The new rating range and date range filters change layout depending on the size of the device.

## Setup requirements.

After cloning the repo I needed to install the node packages using npm install in the movies folder. I didn't clone these files because of the large file size. Finally, I would include the .env file which contains my TMDB key. This is a hidden file for security reasons.

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.]

- Discover list of now playing movies - movies/nowPlaying
- Discover list of popular movies - movies/popular
- Discover list of top rated movies - movies/topRated

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

- /blogs - displays all published blogs.
- /blogs/:id - displays a particular blog.
- /blogs/:id/comments - detail view of a particular blog and its comments.
- etc.

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project,
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).
