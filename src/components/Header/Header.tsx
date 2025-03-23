import { HiOutlineMenu } from "react-icons/hi";
import styles from './Header.module.css'
const Header = () => {
  return (
    <header className={styles.header}>

      <div className={styles.identity_company}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.company_name}>
          <span>Aloisa Interiors & Renovations</span>
        </div>
      </div>

      <nav className={styles.nav}>
        <HiOutlineMenu className={styles.menu_icon} />
        <ul className={styles.nav_list}>
          <li>Quienes somos?</li>
          <li>Servicios</li>
          <li>Contactanos</li>
        </ul>
      </nav>

    </header>
  )
}

export default Header