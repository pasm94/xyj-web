import { HeaderMenu } from "../components/HeaderMenu";
import "../styles/global.css";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeaderMenu />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
