/* 
étape : 3
Probleme : je veux afficher un lien dans le menu pour chaque recettes renvoyer par mon api et qu'au clic on affiche la page de la recette

- J'ai déjà la logique pour créer le menu en fonction de la liste des recettes via le composant Menu qui fait un useSelector pour récupérer la bonne liste
- J'ai déjà la logique pour afficher le détail de la recette via mes Routes
- J'ai pas la bonne liste dans mon state
- J'ai besoin :
  - Au chargement déclencher l'appel -> useEffect pour réagir après un rendu, ici au rendu initial de l'application
  - De déclencher un appel à l'api -> axios.get() -> si possible rangé dans un middleware
  - Mémoriser le retour de l'api dans le state -> dispatch d'action pour atterir dans le reducer
*/

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';

import Menu from 'src/components/Menu';
import Home from 'src/components/Home';
import Fav from 'src/components/Fav';
import Recipe from 'src/components/Recipe';
import Error from 'src/components/Error';

import Loading from './Loading';

import './style.scss';
import { fetchRecipes } from '../../actions/recipes';

function App() {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.logged);
  const loading = useSelector((state) => state.recipes.loading);

  useEffect(() => {

    dispatch(fetchRecipes());
    /*
    dispatch({
      type: 'FETCH_RECIPES',
    })
    */
  }, []);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/recipe/:slug" exact>
          <Recipe />
        </Route>
        {logged && (
          <Route path="/fav">
            <Fav />
          </Route>
        )}
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
