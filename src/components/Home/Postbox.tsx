import PostboxProps from "./IPostbox";
const Postbox = ({ data }: { data: PostboxProps }) => {
  return (
    <div className="p-4 my-2 bg-light-primary hover:bg-light-secondary dark:hover:bg-dark-inputBg border-b dark:border-dark-border cursor-pointer dark:bg-dark-secondary rounded-md dark:text-dark-text">
      <div className="flex flex-row">
        {/* profile Image */}
        <div className="h-full">
          <img
            src={data.profileImage}
            alt="Profile"
            className="w-10 h-10 rounded-full mr-2 min-w-10"
          />
        </div>
        <div className="flex flex-col w-full">
          {/* profile */}
          <div className="flex items-center gap-2">
            <p className="font-bold text-sm">{data.fullname}</p>
            <p className="text-sm text-theme-grayColor dark:brightness-150">@{data.username}</p>
            <p className="text-sm text-theme-grayColor">• {data.time_ago} minutes ago</p>

          </div>

          {/* body content */}
          <div className="mb-3">
            <div className="max-h-20 mb-3 font-bold text-2xl">{data.title}</div>
            <p className="line-clamp-4">{data.description}</p>
          </div>

          {/* engagement */}
          <div className="flex flex-row w-full items-end justify-between">
            <div className="flex rounded-full gap-4">
              {/* action */}
              <svg
                className="h-6 w-6 cursor-pointer hover:text-theme-mainColor"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />{" "}
                <polyline points="16 12 12 8 8 12" />{" "}
                <line x1="12" y1="16" x2="12" y2="8" />
              </svg>
              <div className="w-[1px] bg-gray-300"></div>
              <svg
                className="h-6 w-6 cursor-pointer hover:text-theme-disAgree"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />{" "}
                <polyline points="8 12 12 16 16 12" />{" "}
                <line x1="12" y1="8" x2="12" y2="16" />
              </svg>
            </div>
            {/* display data */}
            <div className="flex">
              <div className="flex flex-row gap-6">
                <div className="flex flex-row gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                    />
                  </svg>
                  <span>{data.comment}</span>
                </div>
                <div className="flex flex-row gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                    />
                  </svg>

                  <span>{data.repost}</span>
                </div>
                <div className="flex flex-row gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                  <span>{data.view}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* action */}
    </div>
  );
};

export default Postbox;
