import Header from './header';
import Footer from './footer';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  },
};

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <div>
        <Header />
        <div>{children}</div>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

/* <img src="/Version1BG.svg" alt="BG"/> */
