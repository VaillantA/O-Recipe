/* eslint-disable arrow-body-style */
// == Import : npm
import { Redirect, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// == Import : local
// Composants
import { findRecipe } from 'src/selectors/recipes';
import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

// Style
import './style.scss';

// == Composant
function Recipe() {
  const { slug } = useParams();
  const recipe = useSelector((state) => findRecipe(state.recipes.list, slug));

  // dans le cas où aucune recette n'est trouvée on redirige vers la route d'erreur
  if (!recipe) {
    return <Redirect to="/error" />;
  }
  return (
    <Page>
      <AppHeader />
      <div className="recipe">
        <Header
          name={recipe.title}
          thumbnail={recipe.thumbnail}
          author={recipe.author}
          difficulty={recipe.difficulty}
        />
        <Ingredients
          list={recipe.ingredients}
        />
        <Instructions
          steps={recipe.instructions}
        />
      </div>
    </Page>
  );
}

// == Export
export default Recipe;
