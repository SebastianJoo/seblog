import { Box, Paper, TextField } from "@mui/material";
import React from "react";

const BlogCreation = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          minWidth: "80%",
          maxWidth: "80%",
          minHeight: "80%",
          marginBottom: "2rem",
        }}
      >
        <Box alignItems={"flex-start"} display={"flex"}>
          <TextField
            variant="outlined"
            label="Title"
            sx={{
              width: "50%",
              margin: "0.5rem",
            }}
            multiline
          />
        </Box>
        <Box alignItems={"flex-start"} display={"flex"}>
          <TextField
            variant="outlined"
            label="Content"
            minRows={8}
            sx={{
              width: "90%",
              margin: "0.5rem",
            }}
            multiline
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default BlogCreation;
