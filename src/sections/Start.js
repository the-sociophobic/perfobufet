import React from 'react'

import { Context } from 'components/Store'
import Frame from 'components/Frame'


class Start extends React.Component {
  state = {
    loaded: false,
    started: false,
  }

  static contextType = Context

  start = () => {
    this.sceneRef?.current?.scene?.start?.()
    this.setState({ started: true })
  }

  render = () =>
    <Frame clouds />
}

export default Start
