import { Box, Button, Paper, TextField } from "@mui/material";
import React from "react";

const BlogCreation = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    
  };

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
            minRows={10}
            sx={{
              width: "90%",
              margin: "0.5rem",
            }}
            multiline
          />
        </Box>
        <Box display={"flex"} alignItems={"flex-end"} flexDirection={"column"}>
          <Button variant="contained" sx={{ margin: "0 1rem 1rem 0" }}>
            Create post
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default BlogCreation;
