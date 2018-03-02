// @flow

import React from 'react'

import './TextLink.css'

type props = {
  children: ReactElement,
  url: string,
}

export default ({ children, url }: props) => (
  <a className="text-link" href={url}>
    {children}
  </a>
)
