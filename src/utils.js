export const fetchDogs = () =>
  fetch("http://localhost:3000/dogs").then(response => response.json());

export const fetchDogById = id =>
  fetch(`http://localhost:3000/dogs/${id}`).then(response => response.json());

export const editDog = (dogId, newName, newDescription) =>
  fetch(`http://localhost:3000/dogs/${dogId}`, {
    method: "PUT",
    body: JSON.stringify({
      name: newName,
      description: newDescription,
      id: dogId
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => response.json());

export const saveDog = (newName, newDescription) =>
  fetch(`http://localhost:3000/dogs`, {
    method: "POST",
    body: JSON.stringify({
      name: newName,
      description: newDescription
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => response.json());

export const deleteDog = dogId =>
  fetch(`http://localhost:3000/dogs/${dogId}`, {
    method: "DELETE",
    body: JSON.stringify({
      id: dogId
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => response.json());
