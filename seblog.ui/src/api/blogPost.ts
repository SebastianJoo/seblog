import axios from "axios";
import { ApiBlogPost, BlogPostData } from "../types/blogPostTypes";
import { apiURL } from "./consts";

export const postBlog = (blogPost: BlogPostData) => {
  return axios.post(apiURL, blogPost);
};
export const getAllBlogPosts = async (): Promise<ApiBlogPost[]> => {
  return (await axios.get(apiURL)).data;
};
