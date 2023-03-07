"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

import React from "react";

type PostProps = {
  id?: string;
};

type Comment = {
  postId?: string;
  title: string;
  username: string;
};

export default function AddComment({ id }: PostProps) {
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const queryClient = useQueryClient();
  let commentToastId: string;

  const { mutate } = useMutation(
    async (data: Comment) => axios.post("/api/posts/addComment", { data }),
    {
      onError: (error) => {
        setIsDisabled(false);
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data.message, { id: commentToastId });
        }
      },
      onSuccess: (data) => {
        queryClient.invalidateQueries(["detail-post"]);
        setIsDisabled(false);
        setUsername("");
        setTitle("");
        toast.success("Added your comment", { id: commentToastId });
      },
    }
  );

  const submitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    commentToastId = toast.loading("Adding your comment", {
      id: commentToastId,
    });
    mutate({ title, postId: id, username });
  };

  return (
    <form onSubmit={submitComment} className="my-8">
      <h3 className="font-medium">Add a comment</h3>
      <div className="flex flex-col my-2">
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          name="username"
          className="p-4 text-lg rounded-md my-2"
          placeholder="Username"
        />
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          name="title"
          className="p-4 text-lg rounded-md my-2"
          placeholder="Anything to comment?"
        />
      </div>
      <div className="flex justify-end items-center gap-2">
        <button
          disabled={isDisabled}
          className=" text-sm bg-teal-600 text-white py-2 px-6 rounded-xl disabled:opacity-25"
          type="submit"
        >
          Add Comment 🚀
        </button>
      </div>
    </form>
  );
}
