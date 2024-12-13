import React from 'react';
import './Styles/Chat.css';

const Chat = () => {
  const messages = [
    { id: 1, text: "Do you still need someone for this job?", sender: "other" },
    { id: 2, text: "...", sender: "user" },
  ];

  return (
    <div className="chat-container">
      <div className="sidebar">
        <h2>Chats</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="chat-list">
          <div className="chat-item selected">
            <p>Chris M</p>
            <p className="chat-date">Due: 12/9/24</p>
          </div>
          <div className="chat-item">
            <p>John K.</p>
            <p className="chat-date">Due Fri</p>
          </div>
        </div>
      </div>
      <div className="chat-main">
        <div className="chat-header">
          <div className="profile-info">
            <img
              src="/path-to-profile-image.jpg"
              alt="Profile"
              className="profile-pic"
            />
            <div>
              <h3>Chris M.</h3>
              <p>Clean Room</p>
            </div>
          </div>
          <div className="user-stats">
            <p>Rating: <span>4.8</span></p>
            <p>Posted Jobs: <span>3</span></p>
          </div>
        </div>
        <div className="chat-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`chat-bubble ${message.sender === "user" ? "user" : "other"}`}
            >
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <div className="attachment-icon">+</div>
          <input type="text" placeholder="Type here ..." />
        </div>
      </div>
      <footer className="chat-footer">
        <p>About | FAQ | Support | Contact Us.</p>
      </footer>
    </div>
  );
};

export default Chat;
