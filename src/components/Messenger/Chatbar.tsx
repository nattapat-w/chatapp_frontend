import React from "react";
import defaultProfileImage from "../../assets/profile.png";
import ChatbarProps from "./IChatbar";

const Chatbar = ({ profileImage, fullname, notification }: ChatbarProps) => {
  console.log(fullname);

  return (
    <>
      <li>
        <a
          href="#"
          className="flex items-center p-2 rounded-lg dark:text-dark hover:bg-gray-100 dark:hover:bg-dark-secondary dark:text-dark-text "
        >
          <img
            src={profileImage ? profileImage : defaultProfileImage}
            className="w-12 h-12 rounded-full"
            alt="Profile Image"
          ></img>
          <span className="flex-1 ms-3 whitespace-nowrap">{fullname}</span>
          {notification !== 0 ? (
            <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
              {notification}
            </span>
          ) : (
            <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium"></span>
          )}
        </a>
      </li>
    </>
  );
};

export default Chatbar;
