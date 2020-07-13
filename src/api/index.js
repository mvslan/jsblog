import axios from '../http/axios'
import Mock from '../mock'

export const getMessages = function () {
  return axios.get('api/messageList')
}

