import React from 'react'

import './Footer.css'

import TextLink from '../../TextLink'
import Icon from '../../Icon'

const Footer = () => (
  <footer>
    <div className="footer__top" />
    <div className="footer__main">
      <div className="footer__inner footer__grid">
        <div className="footer__author">
          Hanna Söderström <br />
          info@hannasoderstrom.com
        </div>

        <ul>
          <li>
            <TextLink url="https://github.com/gothbarbie/">
              <Icon isBrand marginRight name="github" size="lg" />@gothbarbie84
            </TextLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
