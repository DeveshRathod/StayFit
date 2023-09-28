import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return "Loading......";

  return (
    <Box
      sx={{
        mt: { lg: "200px", xs: "20px" },
      }}
      p="20px"
    >
      <Typography variant="h4" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "60px", xs: "20px" },
        }}
      >
        {exerciseVideos?.slice(0, 4).map((item, index) => (
          <a
            key={index}
            className="exercise-videoo"
            href={`https://youtube.com/watch?v=${item.video.videoId}`}
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography
                variant="h6"
                color="#000"
                fontSize="15px"
                width="300px"
                textOverflow="hidden"
                overflow="hidden"
              >
                {item.video.title}
              </Typography>
              <Typography
                variant="h6"
                color="#ff2625"
                fontSize="15px"
                width="300px"
                textOverflow="hidden"
                overflow="hidden"
              >
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
