import axios from "axios";
import { BlogPostData } from "../types/blogPostTypes";

export const postBlog = async (blogPost: BlogPostData) => {
  return axios.post("/api/blogPost", blogPost);
};
