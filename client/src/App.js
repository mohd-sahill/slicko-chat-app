import './App.css';
import icon from "./images/icon.png"
import { IoSendSharp} from "react-icons/io5"
function App() {
  return (
 <>
  <main className="container">
    <div className="header">
  <img src={icon} alt="image" />
      <h2>Hi there!</h2>
      <p>chat privately with any of your friends through this app</p>
    </div>
    <div className="message-space">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam pariatur quisquam saepe optio debitis quia deserunt, quibusdam est, repudiandae exercitationem at temporibus reiciendis officia distinctio, suscipit odio laborum ab illum.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam pariatur quisquam saepe optio debitis quia deserunt, quibusdam est, repudiandae exercitationem at temporibus reiciendis officia distinctio, suscipit odio laborum ab illum.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam pariatur quisquam saepe optio debitis quia deserunt, quibusdam est, repudiandae exercitationem at temporibus reiciendis officia distinctio, suscipit odio laborum ab illum.</p>
    </div>
    <div className="input-sr">
    <input type="text" placeholder = "type your message"/>
    <button><IoSendSharp  style={{color: '#0040ff', fontSize: '20px'}} /></button>
    </div>
  </main>
 </>
  );
}

export default App;
