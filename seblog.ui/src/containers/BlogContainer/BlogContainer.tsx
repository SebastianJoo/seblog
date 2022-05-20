import React, { useEffect, useState } from "react";
import { getAllBlogPosts } from "../../api/blogPost";
import BlogPost from "../../components/BlogPostComponent/BlogPost";
import { ApiBlogPost } from "../../types/blogPostTypes";

import styles from "./BlogContainer.module.scss";

const BlogContainer = () => {
  const [blogPosts, setBlogPosts] = useState<ApiBlogPost[]>([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const posts = await getAllBlogPosts();
        if (posts) {
          setBlogPosts(posts);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllPosts();
  }, []);

  if (!blogPosts) {
    return <div>No posts!</div>;
  }

  return (
    <>
      <div className={styles["BlogContainer"]}>
        {blogPosts.map((blogPost) => {
          return <BlogPost key={blogPost.id} blogPost={blogPost} />;
        })}
      </div>
    </>
  );
};

export default BlogContainer;
