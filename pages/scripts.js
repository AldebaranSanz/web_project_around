const popup = document.querySelector(".popup");
const popupEditProfile = document.getElementById("popupEditProfile");
const popupAddPlace = document.getElementById("popupAddPlace");
const addButton = document.querySelector(".profile__add-button");
const editButton = document.querySelector(".profile__edit-button");
// const popupClose = document.querySelector(".popup__close-icon");
const popupCloseEditProfile = document.getElementById(
  "popupEditProfile__close-icon"
);
const popupCloseAddPlace = document.getElementById("popupAddPlace__close-icon");
const popupOverlay = document.querySelector(".popup__overlay");

// Funciones

function addPlace() {
  console.log("click en añadir lugar");
  popupAddPlace.classList.add("popup__opened");
  popupOverlay.classList.add("popup__opened");
}

function editProfile() {
  console.log("click en editar perfil");
  popupEditProfile.classList.add("popup__opened");
  popupOverlay.classList.add("popup__opened");
}

function closePopup() {
  console.log("click en cerrar popup");
  // popup.classList.remove("popup__opened");
  // popupOverlay.classList.remove("popup__opened");
  popupEditProfile.classList.remove("popup__opened");
  popupAddPlace.classList.remove("popup__opened");
  popupOverlay.classList.remove("popup__opened");
}

// Eventos - Listeners

addButton.addEventListener("click", addPlace);
editButton.addEventListener("click", editProfile);
popupCloseEditProfile.addEventListener("click", closePopup);
popupCloseAddPlace.addEventListener("click", closePopup);
