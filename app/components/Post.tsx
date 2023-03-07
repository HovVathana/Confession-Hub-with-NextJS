"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Moment from "react-moment";

type PostProps = {
  name: string;
  postTitle: string;
  id: string;
  Comment: [] | undefined;
  createdAt: string;
};

export default function Post({
  name,
  postTitle,
  id,
  Comment,
  createdAt,
}: PostProps) {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ ease: "easeOut" }}
      className="bg-white my-8 p-8 rounded-lg "
    >
      <div className="flex justify-between items-center gap-2">
        <h3 className="font-bold text-gray-700">{name}</h3>
        <Moment fromNow interval={30} className="text-sm">
          {createdAt}
        </Moment>
      </div>
      <div className="my-8">
        <p className="break-all">{postTitle}</p>
      </div>
      <div className="flex gap-4 cursor-pointer items-center">
        <Link href={`/post/${id}`}>
          <p className="text-sm font-bold text-gray-700">
            {Comment?.length} Comment
          </p>
        </Link>
      </div>
    </motion.div>
  );
}
