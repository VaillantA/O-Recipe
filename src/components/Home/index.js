import { useSelector } from 'react-redux';

import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';

const Home = () => {
  const recipes = useSelector((state) => state.recipes.list);
  const recipesError = useSelector((state) => state.recipes.error);
  return (
    <Page error={recipesError}>
      <AppHeader />
      <Content
        title="Les recettes oRecipes"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, explicabo."
        recipes={recipes}
      />
    </Page>
  );
};

export default Home;
