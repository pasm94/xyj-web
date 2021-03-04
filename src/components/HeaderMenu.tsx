import styles from '../styles/components/HeaderMenu.module.css'
import { IoLogoInstagram, IoLogoWhatsapp, IoHomeOutline, IoCameraOutline, IoPersonOutline } from 'react-icons/io5'

export function HeaderMenu() {
  return (
    <header className={styles.headerMenu}>
      <div className={styles.headerContent}>
        <div>
          {/* <img src="xenia_profile.jpg" alt=""/> */}
          <span>Xenia Yasmin</span>
        </div>
        <div>
          <a href="#"><IoHomeOutline /> Home</a>
          <a href="#"><IoCameraOutline /> Álbuns</a>
          <a href="#"><IoPersonOutline /> Sobre mim</a>
          <a href="#"><IoLogoWhatsapp /> Contato</a>
          <a href="#"><IoLogoInstagram /> Instagram</a>
        </div>
      </div>
    </header>
  )
}