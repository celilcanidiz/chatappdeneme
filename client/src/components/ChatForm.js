import {useState} from 'react'
import styles from "./styles.module.css";
import { sendMessage } from '../SocketApi';
import { useChat } from "../context/ChatContext";

function ChatForm() {
    const [message, setMessge]= useState("");

    const {setMessages} = useChat();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(message);

        setMessages((prevState) => [...prevState, { message, fromMe: true }]);
        sendMessage(message);
        setMessge("");

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input className={styles.textInput} value={message} onChange={(e) => setMessge(e.target.value)}/>
        </form>
    </div>
  )
}

export default ChatForm