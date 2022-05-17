import React from "react";
import { Box, Typography } from "@mui/material";
import { BlogCommentData } from "../../types/blogPostTypes";

interface CommentProps {
  comment: BlogCommentData;
}

const Comment = ({ comment }: CommentProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Typography variant="subtitle1" component="p" marginLeft={1}>
        {comment.author}
      </Typography>
      <Typography variant="body2" component="p" margin={1}>
        {comment.content}
      </Typography>
    </Box>
  );
};

export default Comment;
