"use client";

import CreatePost from "./components/AddPost";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Post from "./components/Post";
import { PostType } from "./types/Posts";
import SkeletonLoaderInput from "./common/SkeletonLoaderInput";
import SkeletonLoaderPost from "./common/SkeletonLoaderPost";

const allPosts = async () => {
  const response = await axios.get("/api/posts/getPosts");
  return response.data;
};

export default function Home() {
  const { data, error, isLoading } = useQuery<PostType[]>({
    queryFn: allPosts,
    queryKey: ["posts"],
  });
  if (error) return error;

  return (
    <main>
      {isLoading ? (
        <div className="flex flex-col gap-8">
          <SkeletonLoaderInput />
          <SkeletonLoaderPost />
          <SkeletonLoaderPost />
          <SkeletonLoaderPost />
        </div>
      ) : (
        <div>
          <CreatePost />
          {data?.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              name={post.username}
              postTitle={post.title}
              Comment={post?.Comment}
            />
          ))}
        </div>
      )}
    </main>
  );
}
