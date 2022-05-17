import React from "react";
import BlogPost from "../../components/BlogPostComponent/BlogPost";
import { blogPostsMock } from "../../mocks/mocks";

import styles from "./BlogContainer.module.scss";

const BlogContainer = () => {
  return (
    <div className={styles["BlogContainer"]}>
      {blogPostsMock.map((blogPost) => {
        return <BlogPost key={blogPost.id} blogPost={blogPost} />;
      })}
    </div>
  );
};

export default BlogContainer;
