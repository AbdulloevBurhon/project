import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { sendMessage, subscribeToMessages } from "../../services/chat";

function Chat() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const user = auth.currentUser;

  useEffect(() => {
    const unsub = subscribeToMessages(setMessages);

    return () => unsub();
  }, []);

  const handleSend = async () => {
    if (!text.trim()) return;

    await sendMessage(text, user);
    setText("");
  };

  return (
    <div>
      <h2>Chat</h2>

      <div style={{ height: 300, overflow: "auto" }}>
        {messages.map((msg) => (
          <div key={msg.id}>
            <b>{msg.email}:</b> {msg.text}
          </div>
        ))}
      </div>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите сообщение"
      />

      <button onClick={handleSend}>Отправить</button>
    </div>
  );
}

export default Chat;
