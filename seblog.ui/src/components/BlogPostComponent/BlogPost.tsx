import React, { useState } from "react";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { BlogPostData } from "../../types/blogPostTypes";
import CommentBox from "../CommentBoxComponent/CommentBox";
import Comment from "../CommentComponent/Comment";

interface BlogPostProps {
  blogPost: BlogPostData;
}

const BlogPost = ({ blogPost }: BlogPostProps) => {
  const [displayComments, setDisplayComments] = useState<boolean>(false);

  const handleDisplayComments = () => {
    setDisplayComments(!displayComments);
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
        <>
          <Typography variant="h3" marginBottom={1} paddingTop={2}>
            {blogPost.title}
          </Typography>
        </>
        <>
          <Typography
            variant="body1"
            component="p"
            margin={1}
            paddingBottom={2}
          >
            {blogPost.content}
          </Typography>
          <Divider />

          <Button onClick={handleDisplayComments}>Comments</Button>

          {displayComments &&
            blogPost.comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          {displayComments && (
            <Box>
              <CommentBox />
            </Box>
          )}
        </>
      </Paper>
    </Box>
  );
};

export default BlogPost;
