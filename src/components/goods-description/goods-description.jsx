import React from 'react';
import {GOODS_DESCRIPTION_ICON_ID_NAMES, GoodsDescriptionIconSize} from '../../utils/const';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const GoodsDescription = ({car}) => {
  const {name, features, currentPrice, oldPrice} = car;

  const [firstIconIdName] = GOODS_DESCRIPTION_ICON_ID_NAMES;
  const goodsItemIcons = GOODS_DESCRIPTION_ICON_ID_NAMES.map((idName, index) => {
    return (
      <li className="goods__item-icon" key={index}>
        <svg className="goods__icon" width={idName === firstIconIdName ? GoodsDescriptionIconSize.SMALL.width : GoodsDescriptionIconSize.OTHER.width} height={idName === firstIconIdName ? GoodsDescriptionIconSize.SMALL.height : GoodsDescriptionIconSize.OTHER.height}>
          <use xlinkHref={idName} />
        </svg>
      </li>
    )
  });
  const goodsFeaturesElements = features.map((feature, index) => {
    return (
      <li className="goods__item-text" key={index}>{feature}</li>
    );
  });

  return (
    <div className="goods__right-block">
      <p className="goods__title">{name}</p>
      <ul className="goods__list-icon">
        {goodsItemIcons}
      </ul >
      <ul className="goods__list-text">
        {goodsFeaturesElements}
      </ul>
      <div className="goods__price-block">
        <span className="goods__current-price">{currentPrice} &#8381;</span>
        <span className="goods__old-price">{oldPrice} &#8381;</span>
      </div>
      <a href="/" className="goods__request button">Оставить заявку</a>
      <a href="/" className="goods__credit button button--white-long">В кредит от 11 000 &#8381;</a>
    </div >
  )
}

GoodsDescription.propTypes = {
  car: PropTypes.shape({
    name: PropTypes.string.isRequired,
    features: PropTypes.array.isRequired,
    currentPrice: PropTypes.string.isRequired,
    oldPrice: PropTypes.string.isRequired
  }).isRequired
};

const mapStateToProps = (({car}) => {
  return {
    car
  }
});

export default connect(mapStateToProps)(GoodsDescription);