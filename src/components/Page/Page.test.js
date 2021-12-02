/* eslint-disable */
import { shallow } from 'enzyme';
import Page from './index';

describe('Test du composant <Page />', () => {
  test('Il doit renvoyer un element main avec la classe page', () => {
    const wrapper = shallow((
      <Page>
        Test
      </Page>
    ));
    expect(wrapper.find('.page')).toHaveLength(1);
  });

  test('Il doit y avoir autant d\'elements enfants que d\'enfants passes', () => {
    const wrapper = shallow((
      <Page>
        <p>Coucou</p>
        <p>Coucou</p>
        <p>Coucou</p>
      </Page>
    ));
    expect(wrapper.find('p')).toHaveLength(3);
  });

  test('On a un message d\'erreur en cas d\'erreur', () => {
    const wrapper = shallow((
      <Page error={true}>
        Test
      </Page>
    ));
    expect(wrapper.find('p.error')).toHaveLength(1);
  });

  test('On n\'a pas de message d\'erreur sans erreur', () => {
    const wrapper = shallow((
      <Page>
        Test
      </Page>
    ));
    expect(wrapper.find('p.error')).toHaveLength(0);
  });
});
