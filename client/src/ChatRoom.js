import React, { useState, useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom"
import icon from "./images/icon.png";
import { IoSendSharp } from "react-icons/io5";

function ChatRoom({ socket, userName, roomId }) {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (message !== "") {
      const messageData = {
        room: roomId,
        author: userName,
        message: message,
        time: new Date().getHours() + ":" + new Date().getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setMessage("")
    }
  };

  useEffect(() => {
    socket.on("recieve_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);
  return (
    <main className="container">
      <div className="header">
        <img src={icon} alt="altimg" />
        <h2>Hi there!</h2>
      </div>

      <div className="message-space">
      <ScrollToBottom className = "message-space">
        { messageList.map((messageContent) => {
          return (
            <div className="message" id={userName === messageContent.author ? "you" : "other"}>
              <div className="text">{messageContent.message}</div>
              <div className="info">
                <p>{messageContent.time}</p>
                <p style={{ fontWeight: "bolder" }}>{messageContent.author}</p>
              </div>
            </div>
          );
        })}
        </ScrollToBottom>
      </div>
      <div className="input-sr">
        <input
          type="text"
          value = {message}
          placeholder="type your message"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}>
          <IoSendSharp style={{ color: "#0040ff", fontSize: "20px" }} />
        </button>
      </div>
    </main>
  );
}

export default ChatRoom;
