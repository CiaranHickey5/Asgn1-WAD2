import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";

const MovieVideo = ({ movie }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <Typography variant="h5" component="h3">
        Videos
      </Typography>

      {/* Check if movie.results is defined and not empty before rendering videos */}
      {movie.results && movie.results.length > 0 ? (
        movie.results.map((video) => (
          <div key={video.id}>
            <Typography>{video.name}</Typography>
            <iframe
              title={video.name}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.key}`}
              allowFullScreen
            ></iframe>
          </div>
        ))
      ) : (
        <Typography>No videos available</Typography>
      )}

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      ></Drawer>
    </>
  );
};

export default MovieVideo;
