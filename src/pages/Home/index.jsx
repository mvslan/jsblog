import React from 'react'
import LayoutWrapper from '../../layout/LayoutWrapper'
import Messages from '../Messages'

class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <LayoutWrapper>
      <Messages></Messages>
    </LayoutWrapper>
  }
}


export default Home