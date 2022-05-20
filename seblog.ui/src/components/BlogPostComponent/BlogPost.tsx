import React, { useState } from "react";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { ApiBlogPost } from "../../types/blogPostTypes";
import CommentBox from "../CommentBoxComponent/CommentBox";
import Comment from "../CommentComponent/Comment";

interface BlogPostProps {
  blogPost?: ApiBlogPost;
}

const BlogPost = ({ blogPost }: BlogPostProps) => {
  const [displayComments, setDisplayComments] = useState<boolean>(false);

  const handleDisplayComments = () => {
    setDisplayComments(!displayComments);
  };
  if (!blogPost) {
    return <div>Something went wrong</div>;
  }

  if (!blogPost.comments) {
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
            {displayComments && (
              <Box>
                <CommentBox blogPostId={blogPost.id} />
              </Box>
            )}
          </>
        </Paper>
      </Box>
    );
  }

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
              <CommentBox blogPostId={blogPost.id} />
            </Box>
          )}
        </>
      </Paper>
    </Box>
  );
};

export default BlogPost;
