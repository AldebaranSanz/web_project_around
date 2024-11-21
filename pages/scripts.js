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
const inputTitle = document.querySelector("#title");
const inputLink = document.querySelector("#link");
const formAddCard = document.querySelector(".popup__form_addcard");

//variables tarjetas
const cardTemplate = document
  .getElementById("card-template")
  .content.querySelector(".elements__element");
const cardContainer = document.querySelector(".elements__grid");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

// Función para crear una tarjeta a partir de los datos
function createCard(name, link) {
  const card = cardTemplate.cloneNode(true); // Clonar el template

  // Modificar los elementos con los datos de la tarjeta
  card.querySelector(".elements__title").textContent = name;
  card.querySelector(".elements__image").src = link;
  card.querySelector(".elements__image").alt = `Imagen de ${name}`;

  //card.style.backgroundImage = `url(${link})`;
  card
    .querySelector(".elements__like-icon")
    .addEventListener("click", function () {
      card
        .querySelector(".elements__like-icon")
        .classList.toggle("elements__like-icon_active");
    });

  card
    .querySelector(".elements__trash-icon")
    .addEventListener("click", function () {
      card.remove();
    });

  /*
    card.queruSelector('.elements__image').addEventListener('click' , function() {
      //abrir popup
       popupImage.classList.add("popup__opened");
      popupImageTitle.textContent = name;
      popupImageImg.src = link;
    })
    */
  return card;
}

// Añadir las tarjetas al cargar la página
initialCards.forEach(({ name, link }) => {
  const newCard = createCard(name, link);
  cardContainer.appendChild(newCard); // Insertar cada tarjeta en el contenedor
});

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
  if (inputName.value.trim() === "" || inputAboutMe.value.trim() === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  console.log("click en guardar perfil");
  profileName.textContent = inputName.value;
  aboutMe.textContent = inputAboutMe.value;
  closePopup(popupEditProfile);
}

//Para todos los popups
function closePopup(popupToClose) {
  console.log("click en cerrar popup");
  popupToClose.classList.remove("popup__opened");
  popupToClose;
}

//Resetear campos del form "editar perfil" cuando se cierre el popup
function resetEditProfileForm() {
  console.log("form cerrado sin guardar");
  inputName.value = profileName.textContent;
  inputAboutMe.value = aboutMe.textContent;
}

//Resetear campos del form "editar perfil" cuando se cierre el popup
function resetAddplaceForm() {
  console.log("form cerrado sin guardar");
  inputTitle.value = "";
  inputLink.value = "";
}

// Eventos - Listeners

addButton.addEventListener("click", addPlace);
editButton.addEventListener("click", editProfile);
popupCloseEditProfile.addEventListener("click", function () {
  closePopup(popupEditProfile);
  resetEditProfileForm();
});
popupCloseAddPlace.addEventListener("click", function () {
  closePopup(popupAddPlace);
  resetAddplaceForm();
});
saveButton.addEventListener("click", saveProfile);

formAddCard.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = inputTitle.value;
  const link = inputLink.value;
  if (name.trim() === "" || link.trim() === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }
  const card = createCard(name, link);
  cardContainer.prepend(card);
  closePopup(popupAddPlace);
});
