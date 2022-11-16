const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupSubmitButtonElement = popupElement.querySelector('.popup__submit-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const likeDisableButtonElement = document.querySelector('.element__like');
const formElement = popupElement.querySelector('.popup__form');
const nameInput = popupElement.querySelector('.popup__form-name');
const textInput = popupElement.querySelector('.popup__form-text');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');

const openPopup = function() {
  popupElement.classList.add('popup__is-opened');
  nameInput.value = profileName.textContent;
  textInput.value = profileText.textContent;
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

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileText.textContent = textInput.value;
  closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOverlay);
likeDisableButtonElement.addEventListener('click', activeLike);
formElement.addEventListener('submit', formSubmitHandler);