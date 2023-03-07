import { Helmet } from 'react-helmet';
import { HOME_HELMET } from './constants';
import Header from './Header';
import Home from './Home';
import Contact from './Contact';
import Copyright from './Copyright';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>{HOME_HELMET}</title>
      </Helmet>

      <Header />
      <Home />
      <Contact />
      <Copyright />
    </>
  );
}

export default HomePage;
