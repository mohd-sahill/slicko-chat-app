import React, { useState, useEffect } from "react";
import icon from "./images/icon.png";
import { IoSendSharp } from "react-icons/io5";

function ChatRoom({ socket, userName, room }) {
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);

  const sendMessage = async () => {
    if (message !== "") {
      const messageData = {
        room: room,
        author: userName,
        message: message,
        time: new Date().getHours() + ":" + new Date().getMinutes(),
      };
      await socket.emit("send_message", messageData);
    }
  };

  useEffect(() => {
    socket.on("send_message", (data) => {
      setData(data);
    });
  }, [socket]);
  console.log(data);
  return (
    <main className="container">
      <div className="header">
        <img src={icon} alt="altimg" />
        <h2>Hi there!</h2>
        <p>chat privately with any of your friends through this app</p>
      </div>
      <div className="message-space">
        <div className="message">
          <div className="text">
            that is awesome Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. In ad maiores quam tenetur itaque officia assumenda dolor
            commodi laboriosam iure, voluptatum incidunt, quidem sit nisi eos
            aperiam voluptate corrupti pariatur?
          </div>
          <div className="info">
            <p>11:1</p>
            <p style={{ fontWeight: "bolder" }}>Deved</p>
          </div>
        </div>
        <div className="message">
          <div className="text">
            that is awesome Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. In ad maiores quam tenetur itaque officia assumenda dolor
            commodi laboriosam iure, voluptatum incidunt, quidem sit nisi eos
            aperiam voluptate corrupti pariatur?
          </div>
          <div className="info">
            <p>11:1</p>
            <p style={{ fontWeight: "bolder" }}>Deved</p>
          </div>
        </div>
      </div>
      <div className="input-sr">
        <input
          type="text"
          placeholder="type your message"
          onChange={(event) => {
            setMessage(event.target.value);
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
