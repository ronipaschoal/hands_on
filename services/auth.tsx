import Router from 'next/router';

export const TOKEN_KEY = "@hands-on-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

interface User {
  name: string;
  email: string;
  senha: string;
}

export const loginService = (user: User) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(user));
};

export const logoutService = () => {
  localStorage.removeItem(TOKEN_KEY);
};

//Verifica se o usuario está logado e retorna para o login caso negativo.
export const loginContolService = () => {
  !isAuthenticated() && Router.push('/login');
};
