import App from '../App'
import Messages from '../pages/Messages'
import MessageDetail from '../pages/MessageDetail'
import Books from '../pages/Books'
import Write from '../pages/Write'


const routes = [
  {
    path: '/write', component: Write, exact: true,
  },
  {
    path: '/', component: App, exact: true,
  },
  {
    path: '/message/:id', component: MessageDetail,
  },
  {
    path: '/books', component: Books, exact: true,
  },


]

export default routes