import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ProductProvider } from '@/contexts/ProductContext';
import ProductViewPage from '@/layouts/ProductViewPage';

function ProductView() {
  const queryClient = new QueryClient();

  const router = useRouter();
  const { keyword } = router.query;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {keyword && (
          <ProductProvider value={keyword}>
            <ProductViewPage />
          </ProductProvider>
        )}
      </QueryClientProvider>
    </>
  );
}

export default ProductView;
