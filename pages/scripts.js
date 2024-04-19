document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector(".profile__add-button");
  const popup = document.querySelector(".popup");
  const editButton = document.querySelector(".profile__edit-button");

  function addPlace() {
    console.log("click en añadir lugar");
    addButton.classList.add("popup_opened");
  }

  function editProfile() {
    console.log("click en editar perfil");
  }

  addButton.addEventListener("click", addPlace);
  editButton.addEventListener("click", editProfile);
});
