import { Box, Button, Divider, TextField } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import React, { useState } from "react";

const CommentBox = () => {
  const [input, setInput] = useState<string>("");
  const handleSubmit = () => {
    if (input.length > 0) {
      console.log("submitted");
      console.log(input);
      setInput("");
    } else {
      console.log("no input");
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
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
        label="Write a comment"
        minRows={2}
        sx={{
          width: "95%",
          margin: "0.5rem",
        }}
        multiline
        onChange={handleChange}
        value={input}
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
