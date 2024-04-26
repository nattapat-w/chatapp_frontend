import { useState, useRef } from "react";
import profileImage from "../../assets/profile.png";
import FeedboxProps from "./IPostbox";
import Postbox from "./Postbox";
import deafultProfileImage from "../../assets/profile.png";
const ChatBox = () => {
  const mockData: FeedboxProps[] = [
    {
      profileImage: deafultProfileImage,
      title: "Title 1",
      username: "user1",
      fullname: "User One",
      description: "Description 1",
      comment: 10,
      repost: 5,
      like: 20,
      view: 100,
      time_ago: 30, // Assuming this represents time in minutes
    },
    {
      profileImage: deafultProfileImage,
      title: "Title 2",
      username: "user2",
      fullname: "User Two",
      description: "Description 2",
      comment: 15,
      repost: 8,
      like: 25,
      view: 150,
      time_ago: 45, // Assuming this represents time in minutes
    },
    {
      profileImage: deafultProfileImage,
      title: "Title 3",
      username: "user3",
      fullname: "User Three",
      description: "Description 3",
      comment: 8,
      repost: 3,
      like: 15,
      view: 80,
      time_ago: 20, // Assuming this represents time in minutes
    },
    {
      profileImage: deafultProfileImage,
      title: "Title 3",
      username: "user3",
      fullname: "User Three",
      description: "Description 3",
      comment: 8,
      repost: 3,
      like: 15,
      view: 80,
      time_ago: 20, // Assuming this represents time in minutes
    },
    {
      profileImage: deafultProfileImage,
      title: "Title 3",
      username: "user3",
      fullname: "User Three",
      description: "Description 3",
      comment: 8,
      repost: 3,
      like: 15,
      view: 80,
      time_ago: 20, // Assuming this represents time in minutes
    },
    {
      profileImage: deafultProfileImage,
      title: "Title 3",
      username: "user3",
      fullname: "User Three",
      description: "Description 3",
      comment: 8,
      repost: 3,
      like: 15,
      view: 80,
      time_ago: 20, // Assuming this represents time in minutes
    },
    {
      profileImage: deafultProfileImage,
      title: "Title 3",
      username: "user3",
      fullname: "User Three",
      description: "Description 3",
      comment: 8,
      repost: 3,
      like: 15,
      view: 80,
      time_ago: 20, // Assuming this represents time in minutes
    },
    {
      profileImage: deafultProfileImage,
      title: "Title 3",
      username: "user3",
      fullname: "User Three",
      description: "Description 3",
      comment: 8,
      repost: 3,
      like: 15,
      view: 80,
      time_ago: 20, // Assuming this represents time in minutes
    },
    {
      profileImage: deafultProfileImage,
      title: "Title 3",
      username: "user3",
      fullname: "User Three",
      description: "Description 3",
      comment: 8,
      repost: 3,
      like: 15,
      view: 80,
      time_ago: 20, // Assuming this represents time in minutes
    },
    {
      profileImage: deafultProfileImage,
      title: "Title 3",
      username: "user3",
      fullname: "User Three",
      description: "Description 3",
      comment: 8,
      repost: 3,
      like: 15,
      view: 80,
      time_ago: 20, // Assuming this represents time in minutes
    },
    {
      profileImage: deafultProfileImage,
      title: "Title 3",
      username: "user3",
      fullname: "User Three",
      description: "Description 3",
      comment: 8,
      repost: 3,
      like: 15,
      view: 80,
      time_ago: 20, // Assuming this represents time in minutes
    },
  ];
  return (
    <>
      <div className="lg:w-1/12"></div>
      <div className="flex flex-col w-full lg:w-6/12">
        <div className="sticky top-0 left-0 items-center w-full">
          <div className="flex justify-between w-full items-center bg-light-primary drop-shadow-sm dark:border-b dark:border-dark-border dark:bg-dark-primary dark:text-dark-text">
            <span className="text:black w-1/2 border-r dark:text-dark-text text-center underline font-bold hover:bg-slate-100 py-3 transition-colors duration-200 hover:cursor-pointer">
              For you
            </span>
            <span className="text:black w-1/2 dark:text-dark-text text-center hover:bg-slate-100 py-3 transition-colors duration-200 hover:cursor-pointer">
              Following
            </span>{" "}
          </div>
        </div>
        {/* body */}
        {mockData.map((post) => (
          <Postbox data={post} />
        ))}
      </div>
      <div className="lg:w-1/12"></div>
    </>
  );
};

export default ChatBox;
