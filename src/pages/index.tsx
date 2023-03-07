import { QueryClient, QueryClientProvider } from 'react-query';
import HomePage from '@/layouts/HomePage';

const queryClient = new QueryClient();

function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}

export default Home;

