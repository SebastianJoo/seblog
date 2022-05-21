import axios from "axios";
import { CommentData } from "../types/blogPostTypes";
import { commentApiURL } from "./consts";

export const postComment = (comment: CommentData) => {
  return axios.post(commentApiURL, comment);
};

export const getCommentByPostId = async (postId: number) => {
  return axios.get(`${commentApiURL}/${postId}`);
};
