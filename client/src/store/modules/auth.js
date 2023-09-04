import axios from 'axios';
import router from '../../routes';


export const namespaced = true;
/* eslint-disable no-useless-catch */
export const state = {
  loggedIn: false,
  authToken: null,
  name: null,
};

export const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value;
  },
  setAuthToken(state, token) {
    state.authToken = token;
  },
};

export const actions = {
  async loginUser({ commit }, { username, password }) {
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email: username,
        password: password, 
      });

      const responseData = response.data;

      if (responseData.success) {
        const token = responseData.data.token;
        const name = responseData.data.name;

        commit('setLoggedIn', true);
        commit('setAuthToken', token);
        commit('name', name);
        localStorage.setItem('authToken', token);

        router.push('/dashboard');
      } else {
        return { success: false, message: responseData.message };
      }
    } catch (error) {
    
      console.error('Login API request error:', error);
      return { success: false, message: 'An error occurred. Please try again later.' };
    }
  },
  loadToken({ commit }) {
    const token = localStorage.getItem('authToken'); // Try to load the token from local storage

    if (token) {
      commit('setAuthToken', token);
      commit('setLoggedIn', true);
    }
  },
  logoutUser({ commit }) {
    localStorage.removeItem('authToken');

    commit('setLoggedIn', false);
    commit('setAuthToken', null);
  },
};