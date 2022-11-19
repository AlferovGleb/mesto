const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const likeDisableButtonElement = document.querySelector('.element__like');
const formElement = popupElement.querySelector('.popup__form');
const nameInput = popupElement.querySelector('.popup__input_type_name');
const textInput = popupElement.querySelector('.popup__input_type_text');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');

const openPopup = function() {
  popupElement.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  textInput.value = profileText.textContent;
}

const closePopup = function() {
  popupElement.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileText.textContent = textInput.value;
  closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);