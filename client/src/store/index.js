import { createStore } from 'vuex';
import * as auth from './modules/auth'; 
import * as articleModule from './modules/articles'; 



const store = createStore({
    modules: {
      auth,
      articleModule
    },
  });

export default store