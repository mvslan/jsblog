import React from 'react'
import MessageItem from './components/MessageItem'
import './index.less'

const Messages = function (props) {
  console.log(props)
  return (<div>
    <MessageItem></MessageItem>
  </div>)
}

export default Messages