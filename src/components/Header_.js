import React from 'react'


class Header extends React.Component {


  render = () =>
    <div className="header">
      <div className="header__perfobufet-logo" />
      {/* <div className="header__lev-logo" /> */}
      <div className="header__top">
        <div className="header__top__text">
          перфобуфет
        </div>
        <div className="header__top__line" />
      </div>
      <div className="header__bottom">
        <div className="header__bottom__line" />
        <div className="header__top__text">
          site by
        </div>
      </div>
      <div className="header__left">
        <div className="header__top__text">
          перфобуфет
        </div>
        <div className="header__left__line" />
      </div>
      <div className="header__right">
        <div className="header__right__line" />
        <div className="header__top__text">
          site by
        </div>
      </div>
    </div>
}

export default Header
