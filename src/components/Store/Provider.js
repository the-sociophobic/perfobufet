import React from 'react'

import Cookies from 'universal-cookie'
import axios from 'axios'

import initialState from './initialState'
import Context from './Context'


const query = `
  {
    tag {
      name
    }
  }
`

const query1 = `{
  person {
    id
    name
    face3D {
      fileName
    }
    desc {

    }
  }
}`


class Provider extends React.Component {

  state = initialState

  cookies = new Cookies()

  // client = contentful.createClient({
  //   space: 'r1hg9m75veq3',
  //   // environment: '<environment_id>', // defaults to 'master' if not set
  //   accessToken: 'cUHQvlK_jsdMBLoK3rHSllIOH7pDim4Mac-FU7wkkLg'
  // })

  componentDidMount = () => {
    this.loadContentful2()
  }

  loadContentful = async () => {
    axios.defaults.headers.post['Content-Type'] = "application/json"
    axios.defaults.headers.post['Authorization'] = "Bearer cUHQvlK_jsdMBLoK3rHSllIOH7pDim4Mac-FU7wkkLg"
    // axios.defaults.withCredentials = true

    const data = (await axios
      .post(
        `https://graphql.contentful.com/content/v1/spaces/r1hg9m75veq3/`,
        { query }
      )
    ).data

    console.log(data)
  }

  loadContentful2 = async () => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/r1hg9m75veq3/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer cUHQvlK_jsdMBLoK3rHSllIOH7pDim4Mac-FU7wkkLg",
        },
        body: JSON.stringify({ query }),
      })
      .then(response => response.json())
      .then(({ data, errors }) => {
        errors &&
          console.error(errors);

        console.log(data)
      });
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