import React from 'react'


class Frame extends React.Component {
  state = {
    logoIndex: Math.ceil(1 + Math.random() * 9)
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
