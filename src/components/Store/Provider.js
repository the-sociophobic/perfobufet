import React from 'react'
import { createClient } from 'contentful'

import Cookies from 'universal-cookie'
import axios from 'axios'

import initialState from './initialState'
import Context from './Context'


class Provider extends React.Component {

  state = initialState

  cookies = new Cookies()

  componentDidMount = () => {
    this.loadContentful()
  }

  loadContentful = async () => {
    this.client = createClient({
        space: 'r1hg9m75veq3',
        accessToken: 'cUHQvlK_jsdMBLoK3rHSllIOH7pDim4Mac-FU7wkkLg',
        host: 'cdn.contentful.com'
      })

    const entries = await this.client.getEntries()

    this.setState({
      space: await this.client.getSpace(),
      items: entries.items.map(entry => ({
        id: entry.sys.id,
        type: entry.sys.contentType.sys.id,
        ...entry.fields
      }))
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