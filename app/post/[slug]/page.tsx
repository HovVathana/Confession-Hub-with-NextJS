"use client";

import SkeletonLoaderInput from "@/app/common/SkeletonLoaderInput";
import SkeletonLoaderPost from "@/app/common/SkeletonLoaderPost";
import AddComment from "@/app/components/AddComment";
import Post from "@/app/components/Post";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import Moment from "react-moment";

type URL = {
  params: {
    slug: string;
  };
};

const fetchDetails = async (slug: string) => {
  const response = await axios.get(`/api/posts/${slug}`);
  return response.data;
};

export default function PostDetail(url: URL) {
  const { data, isLoading } = useQuery({
    queryKey: ["detail-post"],
    queryFn: () => fetchDetails(url.params.slug),
  });
  // if (isLoading) return "Loading...";
  if (data) console.log(data);
  return (
    <div>
      {isLoading ? (
        <div className="flex flex-col gap-8">
          <SkeletonLoaderPost />
          <SkeletonLoaderInput />
        </div>
      ) : (
        <div>
          <Post
            id={data?.id}
            name={data.username}
            postTitle={data.title}
            Comment={data.Comment}
            createdAt={data.createdAt}
          />
          <AddComment id={data?.id} />
          {data?.Comment?.map((comment) => (
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ ease: "easeOut" }}
              className="my-6 bg-white p-8 rounded-md"
              key={comment.id}
            >
              <div className="flex justify-between items-center gap-2">
                <h3 className="font-bold">{comment.username}</h3>
                <Moment fromNow interval={30} className="text-sm">
                  {comment.createdAt}
                </Moment>
              </div>
              <div className="py-4">{comment.message}</div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
