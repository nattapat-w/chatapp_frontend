import React from "react";
import ChatBox from "../components/Messenger/Chatbox";
import ProfileDetail from "../components/Messenger/ProfileDetail";
import Sidebar from "../components/Messenger/Sidebar";

const MessengerPage = () => {
  return (
    <>
      <div className="flex pt-12 flex-col lg:flex lg:h-full lg:pt-12 lg:flex-row" id="messenger-page">
        <Sidebar />
        <ChatBox />
        <ProfileDetail />
      </div>
    </>
  );
};

export default MessengerPage;
