export const fetchDogs = () =>
  fetch("http://localhost:3000/dogs").then(response => response.json());

export const fetchDogById = id =>
  fetch(`http://localhost:3000/dogs/${id}`).then(response => response.json());

export const editDog = (dogId, newName, newDescription) =>
  fetch(`http://localhost:3000/dogs`, {
    method: "POST",
    body: JSON.stringify({
      id: dogId,
      name: newName,
      description: newDescription
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response => response.json());
