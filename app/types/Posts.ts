export type PostType = {
  title: string;
  id: string;
  createdAt: string;
  username: string;
  Comment?:
    | {
        createdAt: string;
        id: string;
        postId: string;
        username: string;
      }[]
    | undefined;
};
