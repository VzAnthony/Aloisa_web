import { HiOutlineMenu } from "react-icons/hi";
import styles from './Header.module.css'
import NavbarResponsive from "../NavbarResponsive/NavbarResponsive";
import { useState } from "react";
import logo from '../../assets/logo_aloisa.png'
const Header = () => {

  const [toggleNavbar, setToggleNavbar] = useState(false)

  const handleToggleNavbar = () => {
    setToggleNavbar(!toggleNavbar)
  }

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.identity_company}>
          <div className={styles.logo}>
            <picture className={styles.logo}>
              <img src={logo} alt="Logo" />
            </picture>
          </div>
        </div>

        <nav className={styles.nav}>
          {
            toggleNavbar && (
              <NavbarResponsive handleToggleNavbar={handleToggleNavbar} />
            )
          }
          <HiOutlineMenu className={styles.menu_icon} onClick={handleToggleNavbar} />
          <ul className={styles.nav_list}>
            <li>
              <a href="#about">Quiénes somos?</a>
            </li>
            <li>
              <a href="#services">Servicios</a>
            </li>
            <li>
              <a href="#contact">Contáctanos</a>
            </li>
          </ul>
        </nav>

      </div>

    </header>
  )
}

export default Header