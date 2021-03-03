import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const TabSpecification = ({isActive, car}) => {
  const {detailFeatures} = car;
  const elementClassName = isActive ? `about__specifications-list specification` : `about__specifications-list specification specification--not-active`;

  const specificationItemElements = detailFeatures.map(({type, description}, index) => {
    return (
      <li className="specification__item" key={index}>
        <span className="specification__type">{type}</span>
        <span className="specification__text">{description}</span>
      </li>
    );
  });

  return (
    <ul className={elementClassName}>
      {specificationItemElements}
    </ul>
  );
};

TabSpecification.propTypes = {
  isActive: PropTypes.bool.isRequired,
  car: PropTypes.shape({
    detailFeatures: PropTypes.arrayOf(PropTypes.object).isRequired
  }).isRequired
};

const mapStateToProps = (({car}) => {
  return {
    car
  }
});

export default connect(mapStateToProps)(TabSpecification);