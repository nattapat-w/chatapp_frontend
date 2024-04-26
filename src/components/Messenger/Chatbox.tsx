import { useState, useRef } from "react";
import profileImage from "../../assets/profile.png";
import Textbox from "./Textbox";
const ChatBox = () => {
  const mockData = [
    {
      profileImage: profileImage,
      text: "Hello, how are you?",
      isOwner: true,
    },
    {
      profileImage: profileImage,
      text: "I'm doing well, thank you!",
      isOwner: false,
    },
    {
      profileImage: profileImage,
      text: "What are you up to today?",
      isOwner: true,
    },
    {
      profileImage: profileImage,
      text: "Just working on some projects.",
      isOwner: false,
    },
    {
      profileImage: profileImage,
      text: "That sounds interesting!",
      isOwner: true,
    },
    {
      profileImage: profileImage,
      text: "Yes, it's quite engaging.",
      isOwner: false,
    },
    {
      profileImage: profileImage,
      text: "Are you free this weekend?",
      isOwner: true,
    },
    {
      profileImage: profileImage,
      text: "Yes, let's catch up!",
      isOwner: false,
    },
    {
      profileImage: profileImage,
      text: "Great! I'll see you then.",
      isOwner: true,
    },
    {
      profileImage: profileImage,
      text: "Looking forward to it!",
      isOwner: false,
    },
    {
      profileImage: profileImage,
      text: "How's the weather over there?",
      isOwner: true,
    },
    {
      profileImage: profileImage,
      text: "It's sunny and warm.",
      isOwner: false,
    },
    {
      profileImage: profileImage,
      text: "Lucky you!",
      isOwner: true,
    },
    {
      profileImage: profileImage,
      text: "Yes, it's lovely.",
      isOwner: false,
    },
    {
      profileImage: profileImage,
      text: "What are your plans for today?",
      isOwner: true,
    },
    {
      profileImage: profileImage,
      text: "Just taking it easy.",
      isOwner: false,
    },
  ];
  const chatContainerRef = useRef<HTMLDivElement>(null); 
  const [message, setMessage] = useState("");
  const [mockDataList, setMockDataList] = useState(mockData);

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };
  const scrollChatToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };
  const handleMessageSubmit = () => {
    if (message.trim() !== "") {
      setMockDataList([
        ...mockDataList,
        {
          profileImage: profileImage,
          text: message,
          isOwner: true,
        },
      ]);
      setMessage("");
      // delay for new message
      setTimeout(() => {
        scrollChatToBottom();
      }, 0);
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevents newline insertion
      handleMessageSubmit(); // Submit the message
    }
  };
  const calculateRows = (text: string) => {
    const rows = text.split("\n").length; // Count the number of newline characters
    return rows > 5 ? 5 : rows; // Limit the number of rows to 5
  };
  return (
    <>
      <div className="flex flex-col w-full  bg-slate-100 lg:w-8/12 flex-grow">
        {/* User Nav */}
        <div className="flex justify-center">
          <div className="flex justify-between w-full items-center bg-light-primary drop-shadow-sm dark:border-b border-r dark:border-dark-border dark:bg-dark-primary p-3 dark:text-dark-text">
            <div className="flex items-center">
              <img
                src={profileImage}
                className="w-12 h-12 rounded-full mr-4"
                alt="Profile"
              ></img>
              <div className="flex flex-col">
                <span className="text:black dark:text-dark-text">James Ratchapon</span>
                <span className="text-xs text:black dark:text-dark-text">Currently using</span>
              </div>
            </div>
            <div className="">Info</div>
          </div>
        </div>
        {/* body */}
        <div ref={chatContainerRef} className="h-full w-full bg-gray-50 dark:bg-dark-primary light p-3 overflow-auto">
          {/* Chat Message */}
          {mockDataList.map((textbox) => (
            <Textbox
              profileImage={textbox.profileImage}
              text={textbox.text}
              isOwner={textbox.isOwner}
            />
          ))}
        </div>
        <div className="flex w-full justify-between bg-white dark:bg-dark-primary px-6">
          <textarea
            className="bg-light-inputBg dark:bg-dark-inputBg w-4/5 m-3 dark:text-dark-text px-6 py-3 rounded-3xl focus:outline-none justify-end"
            value={message}
            onChange={handleMessageChange}
            onKeyDown={handleKeyDown}
            placeholder="Type your message here..."
            rows={calculateRows(message)}
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
