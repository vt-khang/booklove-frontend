import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import 'react-loading-skeleton/dist/skeleton.css';
import '@/styles/globals.css';
import '@/styles/components.css';
import '@/styles/layouts.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Component
      key={router.asPath}
      {...pageProps}
    />
  );
}

