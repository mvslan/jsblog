import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

const MessageItem = function (props) {
  return (
    <div className="content">
      <Link to="/message/1" target="blank" className="title">
        姑妈说：找媳妇不能找家有两个闺女的
      </Link>
      <p>
        表弟找了女朋友，姑妈死活不同意。表弟急了：你都没见过，就说不同意，为什么呀？
        姑妈振振有词：我不用见，早就告诉过你，两个女孩的人家不能要
      </p>
      <div className="meta">
        <Link to="/" className="nickname">
          你的名字
        </Link>
        <span>评论数：100</span>
      </div>
    </div>
  );
};

export default MessageItem;
