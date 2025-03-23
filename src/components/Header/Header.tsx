import { HiOutlineMenu } from "react-icons/hi";
import styles from './Header.module.css'
import NavbarResponsive from "../NavbarResponsive/NavbarResponsive";
import { useState } from "react";
const Header = () => {

  const [toggleNavbar, setToggleNavbar] = useState(false)

  const handleToggleNavbar = () => {
    setToggleNavbar(!toggleNavbar)
  }



  return (
    <header className={styles.header}>

      <div className={styles.identity_company}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.company_name}>
          <span>Aloisa Interiors & Renovations</span>
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
          <li>Quiénes somos?</li>
          <li>Servicios</li>
          <li>Contáctanos</li>
        </ul>
      </nav>

    </header>
  )
}

export default Header