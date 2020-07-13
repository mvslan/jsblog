import React from 'react'
import MessageItem from './components/MessageItem'
import './index.less'
import { getMessages } from '../../api'

getMessages().then(res => {
  console.log(res)
})

const Messages = function (props) {

  return (<div>
    <MessageItem></MessageItem>
  </div>)
}

export default Messages