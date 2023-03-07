import React from "react";

type Props = {};

export default function SkeletonLoaderInput({}: Props) {
  return (
    <div className="border border-gray-300 bg-white shadow rounded-md p-8">
      <div className="animate-pulse">
        <div className="bg-gray-200 rounded-md w-full h-5 my-8 p-8"></div>
        <div className="bg-gray-200 rounded-md w-full h-10 my-8 p-10"></div>
        <div className="flex items-center justify-end gap-2">
          <div className="bg-gray-200 py-2 px-6 rounded-xl w-36 h-10"></div>
        </div>
      </div>
    </div>
  );
}
