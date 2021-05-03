import {
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoHomeOutline,
  IoCameraOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import { useRouter } from 'next/router';
import {
  Container,
  Content,
  PagesMenu,
  Logo,
  Bars,
  Nav,
} from '@/styles/components/HeaderMenu';
import { HeaderMenu as english } from '../../public/languages/english.js';
import { HeaderMenu as portuguese } from '../../public/languages/portuguese.js';
import { HeaderMenu as german } from '../../public/languages/german.js';
import { useState } from 'react';

let language = english;

if (process.browser) {
  if (navigator.language.substr(0, 2) == 'pt') {
    language = portuguese;
  } else if (navigator.language.substr(0, 2) == 'de') {
    language = german;
  }
}

export const HeaderMenu = () => {
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <Container>
        <Content>
          <Logo>
            <span>Xenia Yasmin</span>
          </Logo>

          <PagesMenu>
            <Link href='/'>
              <a
                className={router.pathname == '/' ? 'selectedPage' : undefined}
              >
                <IoHomeOutline /> {language.home}
              </a>
            </Link>

            <Link href='/albums'>
              <a
                className={
                  router.pathname.includes('/albums')
                    ? 'selectedPage'
                    : undefined
                }
              >
                <IoCameraOutline /> {language.albums}
              </a>
            </Link>

            <Link href='/me'>
              <a
                className={
                  router.pathname == '/me' ? 'selectedPage' : undefined
                }
              >
                <IoPersonOutline /> {language.about_me}
              </a>
            </Link>

            <Link href='https://api.whatsapp.com/send?phone=491603220803'>
              <a target='_blank'>
                <IoLogoWhatsapp />
              </a>
            </Link>

            <Link href='https://www.instagram.com/_xeniayasmin/'>
              <a target='_blank'>
                <IoLogoInstagram />
              </a>
            </Link>
          </PagesMenu>
          <Bars onClick={() => setIsNavOpen(!isNavOpen)}>
            <FaBars />
          </Bars>
        </Content>
      </Container>

      {isNavOpen && (
        <Nav>
          <Link href='/'>
            <a
              onClick={() => setIsNavOpen(!isNavOpen)}
              className={router.pathname == '/' ? 'selectedPage' : undefined}
            >
              <IoHomeOutline /> {language.home}
            </a>
          </Link>

          <Link href='/albums'>
            <a
              onClick={() => setIsNavOpen(!isNavOpen)}
              className={
                router.pathname.includes('/albums') ? 'selectedPage' : undefined
              }
            >
              <IoCameraOutline /> {language.albums}
            </a>
          </Link>

          <Link href='/me'>
            <a
              onClick={() => setIsNavOpen(!isNavOpen)}
              className={router.pathname == '/me' ? 'selectedPage' : undefined}
            >
              <IoPersonOutline /> {language.about_me}
            </a>
          </Link>

          <Link href='https://api.whatsapp.com/send?phone=491603220803'>
            <a onClick={() => setIsNavOpen(!isNavOpen)} target='_blank'>
              <IoLogoWhatsapp /> Whatsapp
            </a>
          </Link>

          <Link href='https://www.instagram.com/_xeniayasmin/'>
            <a onClick={() => setIsNavOpen(!isNavOpen)} target='_blank'>
              <IoLogoInstagram /> Instagram
            </a>
          </Link>
        </Nav>
      )}
    </>
  );
};
