import '@/styles/globals.css';
import '@/styles/card.css';
import '@/styles/nav.css';
import '@/styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps, session }: any) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

