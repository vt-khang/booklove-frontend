import { QueryClient, QueryClientProvider } from 'react-query';
import HomePage from '@/layouts/HomePage';

function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}

export default Home;

