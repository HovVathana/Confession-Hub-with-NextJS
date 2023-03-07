import React from "react";

type Props = {};

export default function SkeletonLoaderPost({}: Props) {
  return (
    <div className="border border-gray-300 bg-white shadow rounded-md p-8">
      <div className="animate-pulse">
        <div className=" flex justify-between items-center gap-2">
          <div className="bg-gray-200 w-24 h-5"></div>
          <h2 className="bg-gray-200 w-32 h-5"></h2>
        </div>
        <div className="my-8">
          <div className="bg-gray-200 w-full h-5 mb-2"></div>
          <div className="bg-gray-200 w-full h-5 mb-2"></div>
          <div className="bg-gray-200 w-full h-5 mb-2"></div>
        </div>
        <div className="bg-gray-200 w-32 h-10 flex gap-4 cursor-pointer items-center"></div>
      </div>
    </div>
  );
}
