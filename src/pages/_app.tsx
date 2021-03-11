import { HeaderMenu } from "@/components/HeaderMenu";
import GlobalStyle from "@/styles/GlobalStyle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <HeaderMenu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
