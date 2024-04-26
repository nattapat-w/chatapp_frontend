import React from "react";
import PeopleItemProps from "./IPeopleItem";
import defaultProfileImage from "../../assets/profile.png";
const PeopleItem = ({ data }: { data: PeopleItemProps }) => {
  return (
    <>
      <li>
        <a
          href="#"
          className="flex items-center rounded-lg dark:text-dark hover:bg-gray-100 dark:hover:bg-dark-secondary dark:text-dark-text my-3"
        >
          <img
            src={data.profileImage ? data.profileImage : defaultProfileImage}
            className="w-10 h-10 rounded-full"
            alt="Profile Image"
          ></img>
          <div className="flex flex-col p-2">
            <span className="flex-1 whitespace-nowrap font-semibold">{data.fullname}</span>
            <p className="text-sm text-gray-500">@{data.username}</p>
          </div>
        </a>
      </li>
    </>
  );
};

export default PeopleItem;
