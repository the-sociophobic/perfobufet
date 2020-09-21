import React from 'react'


class Frame extends React.Component {


  render = () =>
    <div className={"frame " + this.props.className}>
      <div className="frame__logo" />
      {this.props.children}
      <div className="frame__lower-line" />
    </div>
}

export default Frame
