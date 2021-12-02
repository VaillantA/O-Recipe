import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';

const Fav = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'FETCH_FAV',
    });
  }, []);
  const recipes = useSelector((state) => state.recipes.fav);
  const recipesError = useSelector((state) => state.recipes.errorFav);
  return (
    <Page error={recipesError}>
      <AppHeader />
      <Content
        title="Mes recettes favorites"
        text="Miam."
        recipes={recipes}
      />
    </Page>
  );
};

export default Fav;
