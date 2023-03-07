import { Helmet } from 'react-helmet';
import { PRODUCT_LIST_HELMET } from './constants';
import Header from '../HomePage/Header';
import Category from './Category';
import Menu from './Menu';
import Contact from '../HomePage/Contact';
import Copyright from '../HomePage/Copyright';

function ProductListPage() {
  return (
    <>
      <Helmet>
        <title>{PRODUCT_LIST_HELMET}</title>
      </Helmet>

      <Header />
      <Category />
      <Menu />
      <Contact />
      <Copyright />
    </>
  );
}

export default ProductListPage;
