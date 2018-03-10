// @flow

import React from 'react'
import type { Element } from 'react'

import './TextLink.css'

type props = {
  children: Element<any>,
  url: string,
}

const TextLink = ({ children, url }: props) => (
  <a className="text-link" href={url}>
    {children}
  </a>
)

export default TextLink
