export const namespaced = true;
import axios from 'axios';
import Article from '../../models/Article';

export const state = {
    articles: [],
};

export const mutations = {
    addArticle(state, article) {
        state.articles.push(article);
    },

    updateArticle(state, updatedArticle) {
        const index = state.articles.findIndex((article) => article.id === updatedArticle.id);
        if (index !== -1) {
            state.articles.splice(index, 1, updatedArticle);
        }
    },

    deleteArticle(state, articleId) {
        state.articles = state.articles.filter((article) => article.id !== articleId);
    },
    setArticles(state, articles) {
        state.articles = articles;
    },
};

export  const actions = {
    async fetchArticles({ commit,rootState }) {
        try {
            const authToken = rootState.auth.authToken; // Assuming you have an auth module with the authToken state
            const headers = {
                Authorization: `Bearer ${authToken}`,
            };
          const response = await axios.get('http://localhost:8000/api/articles', { headers }); // Replace with your API URL
          const articlesData = response.data.data;
          const articles = articlesData.map((article) => new Article(article.id, article.title, article.content));
          commit('setArticles', articles);
          console.log('Fetched articles:', articles);
        } catch (error) {
          console.error('Error fetching articles:', error);
        }
      },
    createArticle({ commit }, { name, content }) {

        const id = Date.now();
        const newArticle = new Article(id, name, content);
        commit('addArticle', newArticle);
        return newArticle;
    },

    updateArticle({ commit }, updatedArticle) {
        commit('updateArticle', updatedArticle);
    },

    deleteArticle({ commit }, articleId) {
        commit('deleteArticle', articleId);
    },
    
};

export const getters = {

    allArticles: (state) => state.articles,
};

