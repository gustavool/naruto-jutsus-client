import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { index as store } from '@/store';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/styles/globalStyles';
import { defaultTheme } from '@/styles/theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Head>
            <title>Naruto Jutsus Data</title>
            <link
              rel="icon"
              type="image/x-icon"
              href="/assets/icons/sharingan.png"
            />
          </Head>
          <Component {...pageProps} />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
