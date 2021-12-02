import axios from 'axios';
import { FETCH_RECIPES } from '../actions/recipes';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

const ajax = (store) => (next) => (action) => {
  if (action.type === FETCH_RECIPES) {
    api.get('/recipes')
      .then((response) => {
        // handle success
        store.dispatch({
          type: 'SAVE_RECIPES',
          recipes: response.data,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
        store.dispatch({
          type: 'RECEIVE_ERROR',
        });
      })
      .finally(() => {
        // always executed
      });
  }
  else if (action.type === 'LOGIN') {
    // on va vouloir envoyer l'email et le mot de passe à l'api pour s'authentifier
    // ils sont dans le state, donc je récupère le state puisque j'ai accès au store
    const state = store.getState();
    // on fait l'appel à l'api
    api.post('/login', {
      email: state.user.email,
      password: state.user.password,
    })
      .then((response) => {
        // pour une connexion réussi on mémorise le token
        // https://github.com/axios/axios#custom-instance-defaults
        api.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
        store.dispatch({
          type: 'SAVE_USER',
          pseudo: response.data.pseudo,
        });
      })
      .catch((error) => {
        console.error(error);
        alert('Authentification échouée');
      });
  }
  else if (action.type === 'FETCH_FAV') {
    // pour nos demande ultérieures on peut redonner le token pour dire qui on est
    api.get('/favorites')
      .then((response) => {
        // handle success
        store.dispatch({
          type: 'SAVE_FAV',
          recipes: response.data.favorites,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
        store.dispatch({
          type: 'FAV_ERROR',
        });
      })
      .finally(() => {
        // always executed
      });
  }
  else if (action.type === 'LOGOUT') {
    // on efface un propriété d'un objet pour oublier le token
    delete api.defaults.headers.common.Authorization;
  }
  next(action);
};

export default ajax;
