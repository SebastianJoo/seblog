import axios from "axios";
import { BlogPostData } from "../types/blogPostTypes";
import { apiURL } from "./consts";

export const postBlog = (blogPost: BlogPostData) => {
  return axios.post(apiURL, blogPost);
};
