import {
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoHomeOutline,
  IoCameraOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Container,
  Content,
  PagesMenu,
  Logo,
} from '@/styles/components/HeaderMenu';
import { HeaderMenu as english } from '../../public/languages/english.js';
import { HeaderMenu as portuguese } from '../../public/languages/portuguese.js';
import { HeaderMenu as german } from '../../public/languages/german.js';

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

  return (
    <Container>
      <Content>
        <Logo>
          <span>Xenia Yasmin</span>
        </Logo>
        <PagesMenu>
          <Link href='/'>
            <a className={router.pathname == '/' ? 'selectedPage' : undefined}>
              <IoHomeOutline /> {language.home}
            </a>
          </Link>

          <Link href='/albums'>
            <a
              className={
                router.pathname == '/albums' ? 'selectedPage' : undefined
              }
            >
              <IoCameraOutline /> {language.albums}
            </a>
          </Link>

          <Link href='/me'>
            <a
              className={router.pathname == '/me' ? 'selectedPage' : undefined}
            >
              <IoPersonOutline /> {language.about_me}
            </a>
          </Link>

          <Link href='https://api.whatsapp.com/send?phone=491603220803&text=Olá Xenia'>
            <a target='_blank'>
              <IoLogoWhatsapp /> {language.contact}
            </a>
          </Link>

          <Link href='https://www.instagram.com/_xeniayasmin/'>
            <a target='_blank'>
              <IoLogoInstagram /> {language.instagram}
            </a>
          </Link>
        </PagesMenu>
      </Content>
    </Container>
  );
};
