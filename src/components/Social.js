import React from 'react'

import ExternalLink from 'components/ExternalLink'


export default class Social extends React.Component {
  state = {}

  render = () =>
    <div className="social">
      {[
        {
          url: "https://instagram.com/perfobufet",
          className: "social__link--inst",
        },
        {
          url: "https://vk.com/perfobufet",
          className: "social__link--vk",
        },
      ].map(link =>
        <ExternalLink
          newTab
          to={link.url}
          className={`social__link ${link.className}`}
        />
      )}
    </div>
}
