import React from 'react';
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import mapIcon from '../../icon/location.svg';
import {MapSetting, IconSetting} from '../../utils/const';
import PropTypes from 'prop-types';

const TabContact = ({isActive}) => {

  const elementClassName = isActive ? `about__contact contact` : `about__contact contact contact--not-active`;

  return (
    <div className={elementClassName}>
      <ul className="contact__list">
        <li className="contact__item">
          <span className="contact__title">Адрес</span>
          <span className="contact__text">Санкт-Петербург, набережная&#160;реки&#160;Карповки, дом 5</span>
        </li>
        <li className="contact__item">
          <span className="contact__title">Режим работы</span>
          <span className="contact__text">Ежедневно, с 10:00 до 21:00</span>
        </li>
        <li className="contact__item">
          <span className="contact__title">Телефон</span>
          <a className="contact__text contact__text--link" href="tel:88003335599">8 (800) 333-55-99</a>
        </li>
        <li className="contact__item">
          <span className="contact__title">E-mail</span>
          <a className="contact__text contact__text--link" href="mailto:info@avto-moto.ru?subject=avto-moto.ru">info@avto-moto.ru</a>
        </li>
      </ul>
      {/* яндекс API */}
      <YMaps>
        <Map defaultState={{center: MapSetting.COORDINATES, zoom: MapSetting.ZOOM}} className={MapSetting.CONTAINER}>
          <Placemark
            geometry={IconSetting.COORDINATES}
            options={{
              iconLayout: IconSetting.LAYOUT,
              iconImageHref: mapIcon,
              iconImageSize: IconSetting.SIZES,
              iconImageOffset: IconSetting.OFFSETS
            }}
          />
        </Map>
      </YMaps >
    </div>
  )
};

TabContact.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default TabContact;