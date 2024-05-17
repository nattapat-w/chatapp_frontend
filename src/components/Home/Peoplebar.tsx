import defaultProfileImage from "../../assets/profile.png";
import PeopleItem, { PeopleItemProps } from "./PeopleItem";
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

  return (
    <>
      <div className="sticky w-96 bg-light-primary top-0 right-0 dark:bg-dark-primary dark:text-dark-text pr-2">
        <div className="flex items-center">
          <span className="flex font-bold text-lg px-3 py-3">
            Contact
          </span>
          <form className="p-3 dark:border-b dark:border-dark-border ">
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
                placeholder="Find your contact"
              />
            </div>
          </form>
        </div>
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
