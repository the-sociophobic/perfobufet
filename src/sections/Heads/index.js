import React from 'react'

import Frame from 'components/Frame'
import ThreeScene from 'components/ThreeScene'
import ExternalLink from 'components/ExternalLink'

import Head from 'libs/three/units/Head'
import Lights from 'libs/three/units/Lights'
import Controls from 'libs/three/units/Controls'


class Heads extends React.Component {
  state = {
    currentHead: Math.floor(Math.random() * 4.9),
  }

  sceneRef = React.createRef()

  setIndex = _index => {
    this.setState({ index: _index })
    this.sceneRef?.current?.scene?.scene?.units?.heads?.setIndex?.( _index )
  }
  start = () => {
    this.sceneRef?.current?.scene?.start?.()
    this.setState({ started: true })
  }
  toggleHeads = () =>
    this.sceneRef?.current?.scene?.scene?.units?.heads?.toggleHeads?.()

  renderDesc = person =>
    <div className="desc">
      <div className="desc__card">
        <div className="desc__card__title">
          <h1
            className="desc__card__title__h1"
            onClick={() => this.sceneRef?.current?.scene?.scene?.units?.heads?.toggleHeads?.()}
          >
              {person.name}
          </h1>
          <div className="desc__card__title__links">
            {person.tg &&
              <ExternalLink newTab to={person.tg}>
                <div className="desc__card__title__links__item desc__card__title__links__item--tg" />
              </ExternalLink>
            }
            {person.inst &&
                <ExternalLink newTab to={person.inst}>
                <div className="desc__card__title__links__item desc__card__title__links__item--inst" />
              </ExternalLink>
            }
            {person.vk &&
                <ExternalLink newTab to={person.vk}>
                <div className="desc__card__title__links__item desc__card__title__links__item--vk" />
              </ExternalLink>
            }
            {person.fb &&
                <ExternalLink newTab to={person.fb}>
                <div className="desc__card__title__links__item desc__card__title__links__item--fb" />
              </ExternalLink>
            }
          </div>
        </div>
        <div className="desc__text">
          {person.text}
        </div>
      </div>

      <div
        onClick={() => this.setIndex( (this.state.index + 1) % 5 )}
        className="desc__arrow desc__arrow--left"
      />
      <div
        onClick={() => this.setIndex( (this.state.index + 4) % 5 )}
        className="desc__arrow desc__arrow--right"
      />
    </div>

  render = () =>
    <Frame clouds className="frame--last" bottom='лид груп'>
      <ThreeScene
        sceneRef={this.sceneRef}
        react={{
          index: this.state.index
        }}
        setLoaded={() => this.setState({ loaded: true })}
      />
    </Frame>
}

export default Heads
