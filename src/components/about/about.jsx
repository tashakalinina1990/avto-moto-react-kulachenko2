import React from 'react';
import {TABS, DEFAULT_ACTIVE_TAB_NAME} from '../../utils/const';
import TabSpecification from '../tab-specification/tab-specification';
import TabComment from '../tab-comment/tab-comment';
import TabContact from '../tab-contact/tab-contact';
import PropTypes from 'prop-types';

const About = ({onModalOpenButtonClick}) => {

  const [activeTab, setActiveTab] = React.useState(DEFAULT_ACTIVE_TAB_NAME);
  const [specification, comment, contact] = TABS;

  const onItemClick = (evt) => {
    evt.preventDefault();
    setActiveTab(evt.target.textContent);
  };

  const tabElements = TABS.map((name, index) => {
    return (
      <li className="about__item"
        key={`${index}-${name}`}
        onClick={onItemClick}>
        <a href="/" className={name === activeTab ? `about__link about__link--active` : `about__link`}>{name}</a>
      </li>
    )
  })

  return (
    <section className="about">
      <h2 className="visually-hidden">Секция с характеристиками автомобиля, отзывами владельцев автомобиля, контактами
      предприятия, реализующего автомобиль</h2>
      <div className="about__wrapper">
        {/* табы переключающие отображение блоков */}
        <ul className="about__tab-list">
          {tabElements}
        </ul>
        <TabSpecification isActive={activeTab === specification ? true : false} />
        <TabComment isActive={activeTab === comment ? true : false} onModalOpenButtonClick={onModalOpenButtonClick} />
        <TabContact isActive={activeTab === contact ? true : false} />
      </div>
    </section>
  );
};

About.propTypes = {
  onModalOpenButtonClick: PropTypes.func.isRequired
};

export default About;