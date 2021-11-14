import axios from 'axios';

export const getAllUsers = async () => {

  const allUsers = await axios('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if(response.status == 200) {
        return response.data;
      }
    });

  return allUsers;
};