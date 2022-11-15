const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupSubmitButtonElement = popupElement.querySelector('.popup__submit-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const likeDisableButtonElement = document.querySelector('.element__like');
const formElement = document.querySelector('.');

const openPopup = function() {
  popupElement.classList.add('popup__is-opened');
}

const closePopup = function() {
  popupElement.classList.remove('popup__is-opened');
}

const closePopupByClickOnOverlay = function(event) {
  console.log(event);
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
}

const activeLike = function() {
  likeDisableButtonElement.classList.add('element__like_active');
}

const disableLike = function() {
  likeDisableButtonElement.classList.remove('element__like_active');
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);
likeDisableButtonElement.addEventListener('click', activeLike);