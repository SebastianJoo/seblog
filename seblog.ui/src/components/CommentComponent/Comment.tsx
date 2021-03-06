import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { ApiCommentData } from "../../types/blogPostTypes";

interface CommentProps {
  comment: ApiCommentData;
}

const Comment = ({ comment }: CommentProps) => {
  return (
    <>
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
      <Divider />
    </>
  );
};

export default Comment;
