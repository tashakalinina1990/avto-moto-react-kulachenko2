import React from 'react';
import {FOOTER_LINKS} from '../../utils/const';

const Footer = () => {

  const footerItemElements = FOOTER_LINKS.map(({title, path}, index) => {
    return (
      <li className="footer__item" key={`${index}-${title}`}>
        <a className="footer__link" href={path}>{title}</a>
      </li>
    );
  });

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <ul className="footer__list">
          {footerItemElements}
        </ul>
      </div>
    </footer>
  )
};

export default Footer;