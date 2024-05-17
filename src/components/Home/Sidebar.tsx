import defaultProfileImage from "../../assets/profile.png";
import { MenuItemProps } from "./MenuItem";
import MenuItem from "./MenuItem";

const Sidebar = () => {
  const mockDataList: MenuItemProps[] = [
    {
      image: defaultProfileImage,
      title: "Friends",
    },
    {
      image: defaultProfileImage,
      title: "Notifications",
    },
    {
      image: defaultProfileImage,
      title: "Bookmarks",
    },
    {
      image: defaultProfileImage,
      title: "Profile",
    },
  ];
  return (
    <>
      <aside
        id="default-sidebar"
        className="sticky top-0 left-0 w-full lg:w-80 z-40"
        aria-label="Sidebar"
      >
        <div className="h-full flex flex-col bg-light-primary dark:bg-dark-primary">
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
                placeholder="Search for content"
              />
            </div>
          </form>
          <div className=" px-3 py-4 overflow-y-auto dark:bg-dark-primary">
            <ul className="space-y-2 font-medium">
              {mockDataList.map((menu) => (
                <MenuItem image={menu.image} title={menu.title} />
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
