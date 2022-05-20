import { Box, Button, Divider, TextField } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import React, { useState } from "react";
import { CommentData } from "../../types/blogPostTypes";
import { postComment } from "../../api/comment";

interface CommentBoxProps {
  blogPostId: string;
}

const CommentBox = ({ blogPostId }: CommentBoxProps) => {
  const [commentInput, setCommentInput] = useState<string>("");
  const [nameInput, setNameInput] = useState<string>("");

  const handleSubmit = () => {
    if (commentInput.length > 0 && nameInput.length > 0) {
      const comment: CommentData = {
        author: nameInput,
        content: commentInput,
        blogId: blogPostId,
      };
      postComment(comment);

      setCommentInput("");
      setNameInput("");
    } else {
      console.log("no input");
    }
  };
  const handleCommentInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentInput(event.target.value);
  };
  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameInput(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
      }}
      component="form"
    >
      <Divider />
      <TextField
        variant="outlined"
        label="Name"
        size={"small"}
        sx={{
          width: "15%",
          margin: "0.5rem 0.5rem 0",
        }}
        onChange={handleNameInput}
        value={nameInput}
      />
      <TextField
        variant="outlined"
        label="Write a comment"
        minRows={2}
        sx={{
          width: "95%",
          margin: "0.5rem",
        }}
        multiline
        onChange={handleCommentInput}
        value={commentInput}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <Button
          variant="contained"
          sx={{
            margin: "0.5rem",
          }}
          onClick={handleSubmit}
        >
          <ArrowCircleRightIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default CommentBox;
