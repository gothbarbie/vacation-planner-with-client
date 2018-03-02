import React from 'react'

import './Footer.css'

import TextLink from '../../common/TextLink'
import Icon from '../../common/Icon'

export default () => (
  <footer>
    <div className="footer__top" />
    <div className="footer__main">
      <div className="footer__inner">
        <ul>
          <li>
            <TextLink url="https://github.com/gothbarbie/">
              <Icon isBrand name="github" size="lg" />@gothbarbie84
            </TextLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)
