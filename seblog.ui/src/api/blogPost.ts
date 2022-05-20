import axios from "axios";
import { ApiBlogPost, BlogPostData } from "../types/blogPostTypes";
import { blogPostApiURL } from "./consts";

export const postBlog = (blogPost: BlogPostData) => {
  return axios.post(blogPostApiURL, blogPost);
};
export const getAllBlogPosts = async (): Promise<ApiBlogPost[]> => {
  return (await axios.get(blogPostApiURL)).data;
};
