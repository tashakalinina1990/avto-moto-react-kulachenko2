import React from 'react';
import {COMPANY_NAMES, HEADER_LINKS} from '../../utils/const';

const Header = () => {

  const headerItemElements = COMPANY_NAMES.map((name, index) => {
    return (
      <li className="header__item" key={index}>{name}</li>
    )
  });

  const menuLinkElements = HEADER_LINKS.map(({title, path}, index) => {
    return (
      <li className="menu__item" key={`${index}-${title}`}>
        <a className="menu__link" href={path}>{title}</a>
      </li>
    )
  });

  return (
    <header className="header">
      <div className="header__wrapper">
        <svg className="header__icon-logo" width="55" height="55">
          <use xlinkHref="#icon-logo" />
        </svg>
        <ul className="header__list">
          {headerItemElements}
        </ul>
        <nav className="header__menu menu">
          <ul className="menu__list">
            {menuLinkElements}
          </ul>
        </nav>
      </div>
    </header >
  );
};

export default Header;