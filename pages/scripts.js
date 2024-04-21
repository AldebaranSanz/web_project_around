//variables popups
const popup = document.querySelector(".popup");
const popupEditProfile = document.getElementById("popupEditProfile");
const popupAddPlace = document.getElementById("popupAddPlace");
const addButton = document.querySelector(".profile__add-button");
const editButton = document.querySelector(".profile__edit-button");
const popupCloseEditProfile = document.getElementById(
  "popupEditProfile__close-icon"
);
const popupCloseAddPlace = document.getElementById("popupAddPlace__close-icon");
const saveButton = document.querySelector("#saveBtn");

//variables formularios
const inputName = document.querySelector("#name");
const profileName = document.querySelector(".profile__name");
const inputAboutMe = document.querySelector("#aboutMe");
const aboutMe = document.querySelector(".profile__role");

// FUNCIONES

//Añadir Lugar

function addPlace() {
  console.log("click en añadir lugar");
  popupAddPlace.classList.add("popup__opened");
}

//Editar Perfil
function editProfile() {
  console.log("click en editar perfil");
  popupEditProfile.classList.add("popup__opened");
}

//Guardar perfil editado
function saveProfile() {
  console.log("click en guardar perfil");
  profileName.textContent = inputName.value;
  aboutMe.textContent = inputAboutMe.value;
  closePopup(popupEditProfile);
}

//PRUEBA resetear perfil cuando se cierre el popup
function resetForm() {
  console.log("form cerrado sin guardar");
}

//Para todos los popups
function closePopup(popupToClose) {
  console.log("click en cerrar popup");
  popupToClose.classList.remove("popup__opened");
  popupToClose;
}

// Eventos - Listeners

addButton.addEventListener("click", addPlace);
editButton.addEventListener("click", editProfile);
popupCloseEditProfile.addEventListener("click", function () {
  closePopup(popupEditProfile);
});
popupCloseAddPlace.addEventListener("click", function () {
  closePopup(popupAddPlace);
});
saveButton.addEventListener("click", saveProfile);
