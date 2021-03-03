import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {EMPTY_STRING_VALUE, FormFieldName, RATINGS, NAME_ITEM_IN_LOCAL_STORAGE} from '../../utils/const';
import {getDate} from '../../utils/utils';
import PropTypes from 'prop-types';

const Modal = ({isActive, onModalCloseClick, updateComments}) => {
  const [isErrorValidationName, setErrorValidationName] = React.useState(false);
  const [isErrorValidationComment, setErrorValidationComment] = React.useState(false);
  const [isCommentFieldWasInWorkLast, setCommentFieldWasInWorkLast] = React.useState(false);

  React.useEffect(() => {
    // получаем данные из localStorage если они есть и записываем их в форму
    const dataFromLocalStorage = JSON.parse(localStorage.getItem(NAME_ITEM_IN_LOCAL_STORAGE));
    if (dataFromLocalStorage) {
      inputNameRef.current.value = dataFromLocalStorage.name;
      inputMeritRef.current.value = dataFromLocalStorage.merit;
      inputFlawRef.current.value = dataFromLocalStorage.flaw;
      inputCommentRef.current.value = dataFromLocalStorage.comment;
      // находим нужный radio и ставим checked
      Array.from(radioBlock.current.children).forEach((element) => {
        if (element.value === dataFromLocalStorage.rating) {
          element.checked = true;
        }
      })
    }

    // правила для установления фокуса при открытии / перерисовке модального окна
    if (isErrorValidationName) {
      inputNameRef.current.focus();
      return false;
    }
    if (isErrorValidationComment || isCommentFieldWasInWorkLast) {
      inputCommentRef.current.focus();
      return false;
    }
    inputNameRef.current.focus();
  });

  const elementClassName = isActive ? `modal modal--active` : `modal`;
  document.body.style.overflow = isActive ? `hidden` : `auto`; // скрывает скролл если открыто мод. окно
  const inputNameRef = React.createRef();
  const inputMeritRef = React.createRef();
  const inputFlawRef = React.createRef();
  const inputCommentRef = React.createRef();
  const radioBlock = React.createRef();
  const formRef = React.createRef();

  const resetFormField = () => {
    inputNameRef.current.value = EMPTY_STRING_VALUE;
    inputMeritRef.current.value = EMPTY_STRING_VALUE;
    inputFlawRef.current.value = EMPTY_STRING_VALUE;
    inputCommentRef.current.value = EMPTY_STRING_VALUE;
    Array.from(radioBlock.current.children).forEach((element) => {
      if (element.checked === true) {
        element.checked = false;
      }
    })
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(formRef.current);

    // проверка поля name
    if (formData.get(FormFieldName.NAME) === EMPTY_STRING_VALUE) {
      setErrorValidationName(true);
      return false;
    }

    //проверка поля comment
    if (formData.get(FormFieldName.COMMENT) === EMPTY_STRING_VALUE) {
      setErrorValidationComment(true);
      return false;
    }

    updateComments([{
      name: formData.get(FormFieldName.NAME),
      merit: formData.get(FormFieldName.MERIT),
      flaw: formData.get(FormFieldName.FLAW),
      rating: formData.get(FormFieldName.RATING),
      comment: formData.get(FormFieldName.COMMENT),
      date: getDate(),
    }]);

    onModalCloseClick(evt);
    localStorage.removeItem(NAME_ITEM_IN_LOCAL_STORAGE); //при успешной отправке формы данные из localStorage удаляются
    resetFormField(); // обнуляем данные из формы
    setCommentFieldWasInWorkLast(false); // для того чтобы фокус при открытии мод. окна был в поле name
  }

  const onFormInput = (evt) => {
    if (evt.target.name === FormFieldName.NAME && isErrorValidationName === true) {
      setErrorValidationName(false);
      setCommentFieldWasInWorkLast(false); //для того чтобы фокус не перескакивал с инпута name на comment
    }
    if (evt.target.name === FormFieldName.COMMENT && isErrorValidationComment === true) {
      setErrorValidationComment(false);
      setCommentFieldWasInWorkLast(true);
    }

    //Запись в LocalStorage
    const formData = new FormData(formRef.current);
    localStorage.setItem(NAME_ITEM_IN_LOCAL_STORAGE, JSON.stringify({
      name: formData.get(FormFieldName.NAME),
      merit: formData.get(FormFieldName.MERIT),
      flaw: formData.get(FormFieldName.FLAW),
      rating: formData.get(FormFieldName.RATING),
      comment: formData.get(FormFieldName.COMMENT),
    }))
  };

  const formRatingInputElements = RATINGS.map((numberRating, index) => {
    return (
      <React.Fragment key={index}>
        <input className="form__rating-input visually-hidden" name="rating" value={numberRating} id={`${numberRating}-stars`} type="radio" />
        <label htmlFor={`${numberRating}-stars`} className="form__rating-label" title="perfect">
          <svg className="form__star-image" width="27" height="27">
            <use xlinkHref="#icon-star-rating" />
          </svg>
        </label>
      </React.Fragment>
    );
  });

  return (
    <div
      className={elementClassName}
      onClick={onModalCloseClick}>
      <div className="modal__content"
        onClick={(evt) => {
          evt.stopPropagation();
        }}>
        <h2 className="modal__title">Оставить отзыв</h2>
        <form className="modal__form form"
          action="somefile.php"
          method="post"
          ref={formRef}
          onSubmit={onFormSubmit}
          onInput={onFormInput}
        >

          <div className="form__left-block">
            <p className={isErrorValidationName ? `form__info` : `form__info form__info--not-active`}>Пожалуйста, заполните поле</p>
            <label className="form__name-field-label visually-hidden" htmlFor="name" aria-label="Поле для ввода имени"></label>
            <input className={isErrorValidationName ? `form__input form__input--name form__input--not-valid` : `form__input form__input--name`} type="text" placeholder="Имя" name="name" id="name" ref={inputNameRef} />
            <label className="form__merit-field-label visually-hidden" htmlFor="merit"
              aria-label="Поле для ввода положительных особенностей автомобиля"></label>
            <input className="form__input form__input--merit" type="text" name="merit" id="merit" placeholder="Достоинства" ref={inputMeritRef} />
            <input className="form__input form__input--flaw" type="text" name="flaw" id="flaw" placeholder="Недостатки" ref={inputFlawRef} />
          </div>

          <div className="form__right-block">
            <div className="form__rating-block" ref={radioBlock}>
              {formRatingInputElements}
              <p className="form__title-rating">Оцените товар:</p>
            </div>
            <p className={isErrorValidationComment ? `form__info` : `form__info form__info--not-active`}>Пожалуйста, заполните поле</p>
            <label className="form__text-area-label visually-hidden" htmlFor="comment" aria-label="Поле для комментария"></label>
            <textarea className={isErrorValidationComment ? `form__text-area form__text-area--not-valid` : `form__text-area`} name="comment" id="comment" placeholder="Комментарий" ref={inputCommentRef}></textarea>
          </div>

          <input className="form__submit" type="submit" value="Оставить отзыв" />
        </form>
        <button
          className="modal__close"
          onClick={onModalCloseClick}
        >
          <svg width="16" height="16">
            <use xlinkHref="#icon-close" />
          </svg>
        </button>
      </div>
    </div >
  );
};

Modal.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onModalCloseClick: PropTypes.func.isRequired,
  updateComments: PropTypes.func.isRequired
};

const mapDispatchToProps = ((dispatch) => ({
  updateComments(comments) {
    dispatch(ActionCreator.updateComments(comments));
  }
}));

export default connect(null, mapDispatchToProps)(Modal);