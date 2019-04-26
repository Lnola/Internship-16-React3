export const fetchAnimals = animalType =>
  fetch(`http://localhost:3000/${animalType}`).then(response =>
    response.json()
  );

export const fetchAnimalById = (animalType, id) =>
  fetch(`http://localhost:3000/${animalType}/${id}`).then(response =>
    response.json()
  );

export const editAnimal = (animalType, animalId, newName, newDescription) =>
  fetch(`http://localhost:3000/${animalType}/${animalId}`, {
    method: "PUT",
    body: JSON.stringify({
      name: newName,
      description: newDescription,
      id: animalId
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => response.json());

export const saveAnimal = (animalType, newName, newDescription) =>
  fetch(`http://localhost:3000/${animalType}`, {
    method: "POST",
    body: JSON.stringify({
      name: newName,
      description: newDescription
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => response.json());

export const deleteAnimal = (animalType, id) =>
  fetch(`http://localhost:3000/${animalType}/${id}`, {
    method: "DELETE",
    body: JSON.stringify({
      id: id
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => response.json());
