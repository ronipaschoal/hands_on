import axios from 'axios';

const urlApi = 'https://jsonplaceholder.typicode.com';

export const getAllUsers = async () => {

  const allUsers = await axios(`${urlApi}/users`)
    .then(response => {
      if(response.status == 200) {
        return response.data;
      }
    });

  return allUsers;
};

export const getUserById = async (id: string) => {

  const user = await axios(`${urlApi}/users/${id}`)
    .then(response => {
      if(response.status == 200) {
        return response.data;
      }
    });

  return user;
};