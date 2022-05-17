import React, { useState } from "react";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { BlogPostData } from "../../types/blogPostTypes";
import CommentBox from "../CommentBoxComponent/CommentBox";
import Comment from "../CommentComponent/Comment";

interface BlogPostProps {
  blogPost: BlogPostData;
}

const BlogPost = ({ blogPost }: BlogPostProps) => {
  const [isCommenting, setIsCommenting] = useState<boolean>(false);

  const handleCommenting = () => {
    setIsCommenting(!isCommenting);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "60%",
        maxWidth: "80%",
        minWidth: "80%",
        marginBottom: "1rem",
      }}
    >
      <Paper elevation={2}>
        <Box>
          <Typography variant="h3" marginBottom={1} paddingTop={2}>
            {blogPost.title}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            component="p"
            margin={1}
            paddingBottom={2}
          >
            {blogPost.content}
          </Typography>
          <Divider />
          {blogPost.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
          {!isCommenting ? (
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                sx={{ margin: "1rem" }}
                onClick={handleCommenting}
              >
                Comment
              </Button>
            </Box>
          ) : (
            <CommentBox onCommenting={handleCommenting} />
          )}
        </Box>
      </Paper>
    </Box>
  );
};

export default BlogPost;
