import React from 'react'


class Frame extends React.Component {


  render = () =>
    <div className={"frame " + this.props.className}>
      <div className="frame__logo" />
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
    </div>
}

export default Frame
