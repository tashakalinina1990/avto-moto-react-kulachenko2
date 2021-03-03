import moment from 'moment';
import 'moment/locale/ru'

export const getDate = () => {
  moment.locale(`ru`);
  return moment().format();
};

export const convertDateInHumanizeView = (date) => {
  return moment(date).fromNow();
}

export const getStarElementFromRating = (rating) => {
  let starIdNames = [];
  for (let x = 1; x <= 5; x++) {
    x < +rating || x === +rating ?
      starIdNames.push(`#icon-star-red`) :
      starIdNames.push(`#icon-star-grey`);
  }
  return starIdNames;
};