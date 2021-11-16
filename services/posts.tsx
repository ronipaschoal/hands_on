import axios from 'axios';

const urlApi = 'https://jsonplaceholder.typicode.com';

export const getAllPosts = async () => {

  const allPosts = await axios(`${urlApi}/posts`)
    .then(response => {
      if(response.status == 200) {
        return response.data;
      }
    });

  return allPosts;
};

export const getPostById = async (id: string) => {

  const post = await axios(`${urlApi}/posts/${id}`)
    .then(response => {
      if(response.status == 200) {
        return response.data;
      }
    });

  return post;
};

export const getPostsByUserId = async (id: string) => {

  const postsByUser = await axios(`${urlApi}/posts?userId=${id}`)
    .then(response => {
      if(response.status == 200) {
        return response.data;
      }
    });

  return postsByUser;
};