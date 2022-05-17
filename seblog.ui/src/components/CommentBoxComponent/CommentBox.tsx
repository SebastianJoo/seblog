import { Box, Button, Divider, TextField } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import React from "react";

interface CommentBoxProps {
  onCommenting: () => void;
}

const CommentBox = ({ onCommenting }: CommentBoxProps) => {
  const handleSubmit = () => {
    console.log("submitted");
    onCommenting();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
      }}
    >
      <Divider />
      <TextField
        variant="outlined"
        label="Write a comment"
        minRows={2}
        sx={{
          width: "95%",
          margin: "0.5rem",
        }}
        multiline
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
