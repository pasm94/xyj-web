import styles from '../styles/components/HeaderMenu.module.css'
import { IoLogoInstagram, IoLogoWhatsapp, IoHomeOutline, IoCameraOutline, IoPersonOutline } from 'react-icons/io5'
import { LinkHTMLAttributes, useEffect, useState, } from 'react'
import Link from 'next/link'
import { Router, useRouter } from 'next/router'

export function HeaderMenu() {
  const router = useRouter();

  return (
    <header className={styles.headerMenu}>
      <div className={styles.headerContent}>
        <div>
          <span className="effect-shine">Xenia Yasmin</span>
        </div>
        <div>
          <Link href="/">
            {router.pathname === '/' ? (
              <a className={styles.selectedLink}><IoHomeOutline /> Home</a>
            ) : (
              <a><IoHomeOutline /> Home</a>
            )}
          </Link>

          <Link href="/albums">
            {router.pathname === '/albums' ? (
              <a className={styles.selectedLink}><IoCameraOutline /> Álbuns</a>
            ) : (
              <a><IoCameraOutline /> Álbuns</a>
            )}
          </Link>

          <Link href="/me">
            {router.pathname === '/me' ? (
              <a className={styles.selectedLink}><IoPersonOutline /> Sobre mim</a>
            ) : (
              <a><IoPersonOutline /> Sobre mim</a>
            )}
          </Link>

          <Link href="https://api.whatsapp.com/send?phone=491603220803&text=Olá Xenia">
            <a target="_blank"><IoLogoWhatsapp /> Contato</a>
          </Link>

          <Link href="https://www.instagram.com/_xeniayasmin/">
            <a target="_blank"><IoLogoInstagram /> Instagram</a>
          </Link>

        </div>
      </div>
    </header >
  )
}