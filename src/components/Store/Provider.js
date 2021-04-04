import React from 'react'

import Cookies from 'universal-cookie'

import initialState from './initialState'
import Context from './Context'
import {
  createContentfulClient,
  getContentfulItems
} from 'libs/utils/contentful'


class Provider extends React.Component {

  state = initialState

  cookies = new Cookies()

  componentDidMount = () => {
    this.loadContentful()
  }

  loadContentful = async () => {
    this.client = createContentfulClient()

    this.setState({
      space: await this.client.getSpace(),
      ...(await getContentfulItems(this.client))
    })

    console.log(this.state)
  }


  stateAndSetters = () => ({
    ...this.state,
    cookies: this.cookies,
    checkUser: this.checkUser,
    logout: this.logout,
    setState: obj => this.setState(obj),
  })

  render = () =>
    <Context.Provider value={this.stateAndSetters()}>
      {this.props.children}
    </Context.Provider>
}


export default Provider