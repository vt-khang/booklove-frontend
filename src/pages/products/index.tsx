import { QueryClient, QueryClientProvider } from 'react-query';
import ProductListPage from '@/layouts/ProductListPage';

function ProductList() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ProductListPage />
    </QueryClientProvider>
  );
}

export default ProductList;
