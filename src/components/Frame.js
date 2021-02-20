import React from 'react'

import ExternalLink from 'components/ExternalLink'


class Frame extends React.Component {
  state = {
    logoIndex: Math.ceil(1 + Math.random() * 9),

    menuOpened: false,
  }

  setIndex = () =>
    {}
    // this.setState({
    //   logoIndex: Math.ceil(1 + Math.random() * 9)
    // })

  render = () =>
    <div className={"frame " + this.props.className}>

      <div
        className={`frame__logo frame__logo--${this.state.logoIndex}`}
        onMouseEnter={() => this.setIndex()}
      />

      <div className={`frame__menu ${this.state.menuOpened && "frame__menu--opened"}`}>
        <div
          className="frame__menu__burger"
          onClick={() => this.setState({ menuOpened: !this.state.menuOpened })}
        />
        <ExternalLink
          className="frame__menu__item frame__menu__item--vk"
          newTab
          to="https://vk.com/perfobufet"
        />
        <ExternalLink
          className="frame__menu__item frame__menu__item--inst"
          newTab
          to="https://instagram.com/perfobufet"
        />
      </div>

      <div className={`frame__container ${this.props.noPadding && "frame__container--no-padding"}`}>
        {this.props.children}
      </div>

      {this.props.bottom ?
        <div className="frame__bottom-content">
          {this.props.bottom}
        </div>
        :
        <div className="frame__bottom-line" />
      }

      {this.props.clouds && <div className="frame--clouds" />}
    </div>
}


export default Frame
