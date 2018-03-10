// @flow

import React from 'react'
import type { Element } from 'react'


import './TextLink.css'

type props = {
  children: Element<any>,
  url: string,
}

export default ({ children, url }: props) => (
  <a className="text-link" href={url}>
    {children}
  </a>
)
