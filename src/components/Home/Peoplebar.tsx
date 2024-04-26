import React, {useRef, useEffect} from "react";
import defaultProfileImage from "../../assets/profile.png";
import PeopleItem from "./PeopleItem";
import PeopleItemProps from "./IPeopleItem";
const Peoplebar = () => {
  const mockData: PeopleItemProps[] = [
    {
      username: "user1",
      fullname: "User One",
      profileImage: defaultProfileImage,
    },
    {
      username: "user2",
      fullname: "User Two",
      profileImage: defaultProfileImage,
    },
    {
      username: "user3",
      fullname: "User Three",
      profileImage: defaultProfileImage,
    },
    {
      username: "user3",
      fullname: "User Three",
      profileImage: defaultProfileImage,
    },
    {
      username: "user3",
      fullname: "User Three",
      profileImage: defaultProfileImage,
    },
    {
      username: "user3",
      fullname: "User Three",
      profileImage: defaultProfileImage,
    },
    {
      username: "user3",
      fullname: "User Three",
      profileImage: defaultProfileImage,
    },
    {
      username: "user3",
      fullname: "User Three",
      profileImage: defaultProfileImage,
    },
    {
      username: "user3",
      fullname: "User Three",
      profileImage: defaultProfileImage,
    },
    {
      username: "user3",
      fullname: "User Three",
      profileImage: defaultProfileImage,
    },
    {
      username: "user3",
      fullname: "User Three",
      profileImage: defaultProfileImage,
    },
    {
      username: "user3",
      fullname: "User Three",
      profileImage: defaultProfileImage,
    },
    {
      username: "user3",
      fullname: "User Three",
      profileImage: defaultProfileImage,
    },
    {
      username: "user3",
      fullname: "User Three",
      profileImage: defaultProfileImage,
    },
    {
      username: "user3",
      fullname: "User Three",
      profileImage: defaultProfileImage,
    },
    {
      username: "user3",
      fullname: "User Three",
      profileImage: defaultProfileImage,
    },
    {
      username: "user3",
      fullname: "User Three",
      profileImage: defaultProfileImage,
    },
    {
      username: "user3",
      fullname: "User Three",
      profileImage: defaultProfileImage,
    },
    {
      username: "user3",
      fullname: "User Three",
      profileImage: defaultProfileImage,
    },
    {
      username: "user3",
      fullname: "User Three",
      profileImage: defaultProfileImage,
    },
    {
      username: "user3",
      fullname: "User Three",
      profileImage: defaultProfileImage,
    },
    {
      username: "user3",
      fullname: "User Three",
      profileImage: defaultProfileImage,
    },
    {
      username: "user4",
      fullname: "User Three",
      profileImage: defaultProfileImage,
    },
  ];
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []); // Empty dependency array to run only once

  return (
    <>
      <div className="sticky w-96 bg-light-primary top-0 right-0 dark:bg-dark-primary dark:text-dark-text p-3">
        <span className="flex w-full font-bold text-lg pl-3">Contact</span>
        <div className=" px-3 max-h-full overflow-y-auto dark:bg-dark-primary">
          <ul className="space-y-2 font-medium">
            {mockData.map((peopleItem) => (
              <PeopleItem data={peopleItem} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Peoplebar;
