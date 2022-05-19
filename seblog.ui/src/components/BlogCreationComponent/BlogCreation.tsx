import React from "react";
import { Box, Button, Paper, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { postBlog } from "../../api/blogPost";
import { BlogPostData } from "../../types/blogPostTypes";

const BlogCreation = () => {
  const [contentInput, setContentInput] = React.useState<string>("");
  const [titleInput, setTitleInput] = React.useState<string>("");

  let navigate = useNavigate();

  const handleSubmit = () => {
    if (contentInput.length > 0 && titleInput.length > 0) {
      const blog: BlogPostData = {
        title: titleInput,
        content: contentInput,
      };

      postBlog(blog);
      navigate("/blog");
    } else {
      console.log("no input");
    }
  };
  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContentInput(event.target.value);
  };
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitleInput(event.target.value);
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
            onChange={handleTitleChange}
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
            onChange={handleContentChange}
          />
        </Box>
        <Box display={"flex"} alignItems={"flex-end"} flexDirection={"column"}>
          <Button
            variant="contained"
            sx={{ margin: "0 1rem 1rem 0" }}
            onClick={handleSubmit}
          >
            Create post
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default BlogCreation;
