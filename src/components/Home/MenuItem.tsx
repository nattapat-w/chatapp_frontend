import defaultProfileImage from "../../assets/profile.png";

export interface MenuItemProps {
  image: string;
  title: string;
}


const MenuItem = ({ title, image }: MenuItemProps) => {
  return (
    <>
      <li>
        <a
          href="#"
          className="flex items-center p-2 rounded-lg dark:text-dark hover:bg-gray-100 dark:hover:bg-dark-secondary dark:text-dark-text "
        >
          <img
            src={image ? image : defaultProfileImage}
            className="w-10 h-10 rounded-full"
            alt="Profile Image"
          ></img>
          <span className="flex-1 ms-3 ml-6 whitespace-nowrap">{title}</span>
        </a>
      </li>
    </>
  );
};

export default MenuItem;
