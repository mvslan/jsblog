import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

class LayoutWrapper extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const props = this.props
    return <>
      <Header />
      {props.children}
      <Footer />
    </>
  }
}


export default LayoutWrapper