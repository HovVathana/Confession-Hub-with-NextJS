export type PostType = {
  id: string;
  title: string;
  updatedAt?: string;
  username: string;
  Comment:
    | {
        createdAt?: string;
        id: string;
        postId: string;
        title: string;
        username: string;
      }[]
    | undefined;
};
