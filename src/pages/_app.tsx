import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@/styles/globalStyles';
import { defaultTheme } from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
