import React from "react";
import Chatbar from "./Chatbar";
import ChatbarProps from "./IChatbar";
import defaultProfileImage from "../../assets/profile.png";
const Sidebar = () => {
  const mockDataList: ChatbarProps[] = [
    {
      profileImage: defaultProfileImage,
      fullname: "John Doe",
      notification: 3,
    },
    {
      profileImage: defaultProfileImage,
      fullname: "Jane Smith",
      notification: 0,
    },
    {
      profileImage: defaultProfileImage,
      fullname: "Alice Johnson",
      notification: 5,
    },
    {
      profileImage: defaultProfileImage,
      fullname: "Alice Johnson",
      notification: 5,
    },
    {
      profileImage: defaultProfileImage,
      fullname: "Alice Johnson",
      notification: 5,
    },
    {
      profileImage: defaultProfileImage,
      fullname: "Alice Johnson",
      notification: 5,
    },
    {
      profileImage: defaultProfileImage,
      fullname: "Alice Johnson",
      notification: 5,
    },
    {
      profileImage: defaultProfileImage,
      fullname: "Alice Johnson",
      notification: 5,
    },
    {
      profileImage: defaultProfileImage,
      fullname: "Alice Johnson",
      notification: 5,
    },
    {
      profileImage: defaultProfileImage,
      fullname: "Alice Johnson",
      notification: 5,
    },
    {
      profileImage: defaultProfileImage,
      fullname: "Alice Johnson",
      notification: 5,
    },
    {
      profileImage: defaultProfileImage,
      fullname: "Alice Johnson",
      notification: 5,
    },
    {
      profileImage: defaultProfileImage,
      fullname: "Alice Johnson",
      notification: 5,
    },
    {
      profileImage: defaultProfileImage,
      fullname: "Alice Johnson",
      notification: 5,
    },
    {
      profileImage: defaultProfileImage,
      fullname: "Alice Johnson",
      notification: 5,
    },
  ];
  return (
    <>
      <aside
        id="default-sidebar"
        className="sticky w-full lg:w-96 z-40 drop-shadow-md"
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col bg-gray-50 dark:bg-dark-primary">
          <form className="p-3 dark:border-b border-r dark:border-dark-border ">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-3 ps-10 text-sm bg-light-inputBg dark:bg-dark-inputBg dark:text-dark-text border border-light-secondary dark:border-none text-gray-900  rounded-2xl outline-none"
                placeholder="Search for chat"
              />
            </div>
          </form>
          <div className=" px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-dark-primary">
            <ul className="space-y-2 font-medium">
              {mockDataList.map((chatdata) => (
                <Chatbar
                  profileImage={chatdata.profileImage}
                  fullname={chatdata.fullname}
                  notification={chatdata.notification}
                />
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
