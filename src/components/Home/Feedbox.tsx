import deafultProfileImage from "../../assets/profile.png";
import FeedboxProps from "./IPostbox";
import Postbox from "./Postbox";
const ChatBox = () => {
  const mockData: FeedboxProps[] = [
    {
      profileImage: deafultProfileImage,
      title: "Reincarnated as a Slime Season 3 - Episode 7 discussion",
      username: "user1",
      fullname: "AutoLovepon",
      description:
        "Tensei Shitara Slime Datta Ken Season 3, episode 7 Alternative names: Tensei shitara Slime Datta Ken 3rd Season, Tensura, That Time I Got Reincarnated as a Slime Season 3 Reminder: Please do not discuss plot points not yet seen or skipped in the show. Failing to follow the rules may result in a ban.",
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
      description: "Tensei Shitara Slime Datta Ken Season 3, episode 7 Alternative names: Tensei shitara Slime Datta Ken 3rd Season, Tensura, That Time I Got Reincarnated as a Slime Season 3 Reminder: Please do not discuss plot points not yet seen or skipped in the show. Failing to follow the rules may result in a ban.Tensei Shitara Slime Datta Ken Season 3, episode 7 Alternative names: Tensei shitara Slime Datta Ken 3rd Season, Tensura, That Time I Got Reincarnated as a Slime Season 3 Reminder: Please do not discuss plot points not yet seen or skipped in the show. Failing to follow the rules may result in a ban.Tensei Shitara Slime Datta Ken Season 3, episode 7 Alternative names: Tensei shitara Slime Datta Ken 3rd Season, Tensura, That Time I Got Reincarnated as a Slime Season 3 Reminder: Please do not discuss plot points not yet seen or skipped in the show. Failing to follow the rules may result in a ban.Tensei Shitara Slime Datta Ken Season 3, episode 7 Alternative names: Tensei shitara Slime Datta Ken 3rd Season, Tensura, That Time I Got Reincarnated as a Slime Season 3 Reminder: Please do not discuss plot points not yet seen or skipped in the show. Failing to follow the rules may result in a ban.Tensei Shitara Slime Datta Ken Season 3, episode 7 Alternative names: Tensei shitara Slime Datta Ken 3rd Season, Tensura, That Time I Got Reincarnated as a Slime Season 3 Reminder: Please do not discuss plot points not yet seen or skipped in the show. Failing to follow the rules may result in a ban.Tensei Shitara Slime Datta Ken Season 3, episode 7 Alternative names: Tensei shitara Slime Datta Ken 3rd Season, Tensura, That Time I Got Reincarnated as a Slime Season 3 Reminder: Please do not discuss plot points not yet seen or skipped in the show. Failing to follow the rules may result in a ban.Tensei Shitara Slime Datta Ken Season 3, episode 7 Alternative names: Tensei shitara Slime Datta Ken 3rd Season, Tensura, That Time I Got Reincarnated as a Slime Season 3 Reminder: Please do not discuss plot points not yet seen or skipped in the show. Failing to follow the rules may result in a ban.Tensei Shitara Slime Datta Ken Season 3, episode 7 Alternative names: Tensei shitara Slime Datta Ken 3rd Season, Tensura, That Time I Got Reincarnated as a Slime Season 3 Reminder: Please do not discuss plot points not yet seen or skipped in the show. Failing to follow the rules may result in a ban.Tensei Shitara Slime Datta Ken Season 3, episode 7 Alternative names: Tensei shitara Slime Datta Ken 3rd Season, Tensura, That Time I Got Reincarnated as a Slime Season 3 Reminder: Please do not discuss plot points not yet seen or skipped in the show. Failing to follow the rules may result in a ban.Tensei Shitara Slime Datta Ken Season 3, episode 7 Alternative names: Tensei shitara Slime Datta Ken 3rd Season, Tensura, That Time I Got Reincarnated as a Slime Season 3 Reminder: Please do not discuss plot points not yet seen or skipped in the show. Failing to follow the rules may result in a ban.",
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
          <div className="flex justify-between w-full items-center border-b bg-light-primary drop-shadow-sm dark:border-b dark:border-dark-border dark:bg-dark-primary dark:text-dark-text">
            <span className="text:black w-1/2 border-x dark:border-dark-border text-light-text bg-light-mainTheme  dark:text-dark-text text-center underline font-bold hover:bg-slate-100 dark:hover:bg-dark-secondary py-3 hover:cursor-pointer">
              For you
            </span>
            <span className="text:black w-1/2 border-r dark:border-dark-border dark:text-dark-text bg-light-primary dark:bg-dark-primary text-center hover:bg-light-secondary dark:hover:bg-dark-secondary py-3 hover:cursor-pointer">
              Following
            </span>
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
