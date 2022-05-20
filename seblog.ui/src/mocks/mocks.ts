import { ApiBlogPost, ApiCommentData } from "../types/blogPostTypes";

export const blogCommentMock: ApiCommentData[] = [
  {
    id: "1",
    author: "John Doe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus risus, porta vel mattis eget,",
    blogPostId: "1",
  },
  {
    id: "2",
    author: "Jane Doedoe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus risus, porta vel mattis eget,",
    blogPostId: "1",
  },
];

export const blogPostsMock: ApiBlogPost[] = [
  {
    id: "1",
    title: "Hello what is up",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus risus, porta vel mattis eget, eleifend non ligula. Pellentesque eleifend dolor non facilisis faucibus. Suspendisse mollis interdum diam ut fermentum. Vestibulum mauris nibh, viverra ac lectus et, consequat viverra massa. Vestibulum ac porta est, at posuere erat. Pellentesque dapibus, enim et fringilla efficitur, ligula arcu feugiat purus, pretium luctus ante ligula in diam. Sed metus mauris, dictum congue leo posuere, placerat scelerisque sapien. Curabitur felis quam, laoreet sed mi nec, maximus lobortis purus. Curabitur in neque rutrum, suscipit nisl a, ullamcorper turpi",
    comments: blogCommentMock,
  },
  {
    id: "2",
    title: "Second title",
    content: "Second content",
    comments: blogCommentMock,
  },
];
