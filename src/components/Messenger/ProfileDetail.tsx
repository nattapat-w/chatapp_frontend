import React from "react";
import defaultProfileImage from "../../assets/profile.png";
const ProfileDetail = () => {
  return (
    <>
      <div className="sticky w-96 bg-light-primary dark:bg-dark-primary dark:text-dark-text flex-none right-0 p-6">
        <div className="flex justify-center flex-col items-center p-3">
          <img
            src={defaultProfileImage}
            className="rounded-full w-48 h-48 mb-3"
          ></img>
          <span className="text-2xl font-bold">James Ratchapon</span>
          <span className="text-md">Last used 24 minutes ago.</span>
        </div>
      </div>
    </>
  );
};

export default ProfileDetail;
