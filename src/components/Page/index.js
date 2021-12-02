import PropTypes from 'prop-types';

import './style.scss';

const Page = ({ children, error }) => (
  <main className="page">
    {error && <p className="error">Une erreur s'est produite</p>}
    {children}
  </main>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.bool,
};

Page.defaultProps = {
  error: false,
};

export default Page;
