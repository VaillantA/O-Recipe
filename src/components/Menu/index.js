import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Menu = () => {
  const recipes = useSelector((state) => state.recipes.list);
  const logged = useSelector((state) => state.user.logged);
  return (
    <nav className="menu">
      <NavLink
        className="menu-link"
        activeClassName="menu-link--active"
        to="/"
        exact
      >
        Accueil
      </NavLink>
      {logged && (
        <NavLink
          className="menu-link"
          activeClassName="menu-link--active"
          to="/fav"
          exact
        >
          Mes favoris
        </NavLink>
      )}
      {recipes.map((recipe) => (
        <NavLink
          key={recipe.id}
          className="menu-link"
          activeClassName="menu-link--active"
          to={`/recipe/${recipe.slug}`}
          exact
        >
          {recipe.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Menu;
