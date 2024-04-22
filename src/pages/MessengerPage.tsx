import React from "react";
import ChatBox from "../components/Messenger/Chatbox";
import ProfileDetail from "../components/Messenger/ProfileDetail";
import Sidebar from "../components/Messenger/Sidebar";

const MessengerPage = () => {
  return (
    <>
      <div className="flex h-full pt-12">
        <Sidebar />
        <ChatBox />
        <ProfileDetail />
      </div>
    </>
  );
};

export default MessengerPage;
