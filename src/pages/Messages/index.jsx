import React, { useState, useEffect } from "react";
import MessageItem from "./components/MessageItem";
import "./index.less";
import { getMessages } from "../../api";

const Messages = function (props) {
  const [messages, setMessages] = useState([]);
  getMessages().then((res) => {
    console.log(res);
    setMessages(res.data.list);
  });
  // useEffect(() => {
  //   console.log(111);
  // });
  return (
    <div>
      <ul>
        {messages.length &&
          messages.map((item) => (
            <li>
              <MessageItem item={item}></MessageItem>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Messages;
