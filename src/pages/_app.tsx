import type { AppProps } from 'next/app';
import GlobalStyles from '@/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
