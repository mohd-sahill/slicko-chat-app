import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import ChatRoom from "./ChatRoom";

const socket = io.connect("http://localhost:3001");

function App() {
  const [userName, setUserName] = useState("");
  const [roomId, setRoomId] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (userName !== "" && roomId !== "") {
      socket.emit("join_room", roomId);
      setShowChat(true);
    }
  };
  return (
    <>
      {!showChat ? (
        <div className="join_info">
          <h1 style={{"fontSize" : "50px"}}>JoIn ChAt</h1>
          <input
            type="text"
            placeholder="sahil"
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room8748174"
            onChange={(event) => {
              setRoomId(event.target.value);
            }}
          />

          <button className="btn" onClick={joinRoom}>
            Join room
          </button>
        </div>
      ) : (
        <ChatRoom socket={socket} userName={userName} roomId={roomId} />
      )}
    </>
  );
}

export default App;
