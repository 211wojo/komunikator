
import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    { id: 1, 
     text: "Cześć!", 
     sender: "other" },
    { id: 2,
     text: "Wszystko dobrze!",
     sender: "me" }
  ]);

  function sendMessage() {
    if (message.trim() === "") {
      return;
    }

    const newMessage = {
      id: Date.now(),
      text: message,
      sender: "me"
    };

    setMessages([...messages, newMessage]);
    setMessage("");
  }

  return (
    <div className="app">

      <aside className="sidebar">
        <h2>Komunikator</h2>

        <div className="search">
          <input placeholder="Szukaj rozmowy..." />
        </div>

        <div className="user">
          <div>
            <strong>Jan Kowalski</strong>
            <p>Online</p>
          </div>
        </div>

        <button className="settings">
          Ustawienia
        </button>
      </aside>

      <main className="chat">

        <header>
          <h3>Rozmowa</h3>
          <span>Aktywny</span>
        </header>

        <div className="messages">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={"message " + msg.sender}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="message-input">

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Napisz wiadomość..."
          />

          <button onClick={sendMessage}>
            Wyślij
          </button>

        </div>

      </main>

    </div>
  );
}

export default App;
