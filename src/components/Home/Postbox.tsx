import React from "react";
import PostboxProps from "./IPostbox";

const Postbox = ({ data }: { data: PostboxProps }) => {
  return (
    <div className="flex flex-row p-4 border-b border-gray-300 bg-light-primary dark:bg-dark-primary dark:text-dark-text">
        {/* profile Image */}
        <div className="h-full">
          <img
            src={data.profileImage}
            alt="Profile"
            className="w-10 h-10 rounded-full mr-2"
          />
        </div>
        <div className="flex flex-col w-full">
        {/* profile */}
        <div className="flex items-center">
          <div className="flex flex-row gap-1">
            <h3 className="font-bold">{data.fullname}</h3>
            <p className="text-sm text-gray-500">@{data.username}</p>
          </div>
        </div>
        {/* body content */}
        <div>{data.description}</div>
        {/* action */}
        <div className="flex justify-end items-end">
          <span className="mr-4">{data.comment} Comments</span>
          <span className="mr-4">{data.repost} Reposts</span>
          <span className="mr-4">{data.like} Likes</span>
          <span>{data.view} Views</span>
        </div>
      </div>
    </div>
  );
};

export default Postbox;
