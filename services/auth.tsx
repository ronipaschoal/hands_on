import Router from 'next/router';
import axios from 'axios';

export const TOKEN_KEY = "@hands-on-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

interface Login {
  email: string;
  password: string;
  lastAccess: number;
}

export const loginService = (login: Login) => {

  axios('https://jsonplaceholder.typicode.com/users/1')
    .then(response => {
      if(response.status == 200) {
        localStorage.setItem(TOKEN_KEY, JSON.stringify({...response.data, ...login}));
        Router.push('/');
      }
    });
};

export const logoutService = () => {
  localStorage.removeItem(TOKEN_KEY);
  Router.push('/login');
};

//Verifica se o usuario está logado e retorna para o login caso negativo.
export const getLoggedInUser = () => {
  if (!isAuthenticated()) {
    Router.push('/login');
    return false;
  } else {
    return JSON.parse(localStorage.getItem(TOKEN_KEY) as string);
  }
};
