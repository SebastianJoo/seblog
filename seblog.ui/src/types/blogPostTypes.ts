export interface BlogPostData {
  id: string; // id of the blog post
  title: string; // title of the blog post
  content: string; // content of the blog post
  comments: BlogCommentData[]; // comments of the blog post
}

export interface BlogCommentData {
  id: string; // id of the blog comment
  author: string; // author of the comment
  content: string; // content of the comment
}
