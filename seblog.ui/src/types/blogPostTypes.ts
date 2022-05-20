export interface ApiBlogPost {
  id: string; // id of the blog post
  title: string; // title of the blog post
  content: string; // content of the blog post
  creationDate: string; // creation date of the blog post
  comments?: ApiCommentData[]; // comments of the blog post
}

export interface ApiCommentData {
  id: string; // id of the blog comment
  author: string; // author of the comment
  content: string; // content of the comment
  blogPostId: string; // id of the blog post
  creationDate: string; // creation date of the comment
}

export interface BlogPostData {
  title: string;
  content: string;
}
