import React from 'react';
import {connect} from 'react-redux';
import {convertDateInHumanizeView, getStarElementFromRating} from '../../utils/utils';
import {EMPTY_ARRAY_VALUE} from '../../utils/const';
import PropTypes from 'prop-types';

const TabComment = ({isActive, onModalOpenButtonClick, comments}) => {

  const elementClassName = isActive ? `about__comments comments` : `about__comments comments comments--not-active`;

  let commentsItemElements = [];

  if (comments.length !== EMPTY_ARRAY_VALUE) {
    commentsItemElements = comments.map(({name, merit, flaw, rating, comment, date}, index) => {

      const starsElements = getStarElementFromRating(rating).map((starIdName, index) => {
        return (
          <svg width="17" height="17" key={index}>
            <use xlinkHref={starIdName} />
          </svg>
        )
      });

      return (
        <li className="comments__item" key={`${index}-${name}`}>
          <span className="comments__user-name">{name}</span>
          <div className="comments__merit">
            <span className="comments__title">Достоинства</span>
            <span className="comments__text">{merit}</span>
          </div>
          <div className="comments__flaw">
            <span className="comments__title">Недостатки</span>
            <span className="comments__text">{flaw}</span>
          </div>
          <div className="comments__recall">
            <span className="comments__title">Комментарий</span>
            <span className="comments__text">{comment}</span>
          </div>
          <div className="comments__stars">
            {starsElements}
            <span className="comments__text comments__text--red">Советует</span>
          </div >
          <div className="comments__time">
            <span className="comments__response-time">{convertDateInHumanizeView(date)}</span>
            <a className="comments__link" href="/">Ответить</a>
          </div>
        </li >
      )
    });
  }

  return (
    <div className={elementClassName}>
      <a href="/"
        className="comments__button button button--white-short"
        onClick={onModalOpenButtonClick}
      >Оставить отзыв</a>
      <ul className="comments__list">
        {commentsItemElements.length !== EMPTY_ARRAY_VALUE ? commentsItemElements : ``}
      </ul >
    </div >
  )
};

TabComment.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onModalOpenButtonClick: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired
};

const mapStateToProps = (({comments}) => {
  return {comments}
});

export default connect(mapStateToProps, null)(TabComment);