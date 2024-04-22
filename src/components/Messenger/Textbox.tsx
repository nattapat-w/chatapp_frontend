import React from "react";

interface TextboxProps {
  profileImage: string | undefined;
  text: string;
  isOwner: boolean;
}

const Textbox = ({ profileImage, text, isOwner }: TextboxProps) => {
  return (
    <div
      className={`flex flex-row items-center space-x-3 my-4 ${
        !isOwner ? "justify-start" : "justify-end"
      }`}
    >
      {!isOwner ? (
        <>
          <img
            src={profileImage}
            className="w-8 h-8 rounded-full"
            alt="Profile"
          />
          <div className="bg-light-secondary dark:bg-dark-secondary dark:text-dark-text rounded-3xl px-4 py-2 max-w-2xl whitespace-pre-wrap">
            {text}
          </div>
        </>
      ) : (
        <>
          <div className="bg-amber-600 dark:text-dark-text text-slate-50 rounded-3xl px-4 py-2 max-w-2xl whitespace-pre-wrap break-all">
            {text}
          </div>
          <img
            src={profileImage}
            className="w-8 h-8 rounded-full"
            alt="Profile"
          />
        </>
      )}
    </div>
  );
};

export default Textbox;
