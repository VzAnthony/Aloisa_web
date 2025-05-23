import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import styles from './Footer.module.css'
import logo from '../../assets/logo_aloisa.png'


const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.logo_container}>
            <picture className={styles.logo}>
              <img src={logo} alt="Logo" />
            </picture>
          </div>
          <div className={styles.contact_container}>
                <span className={styles.contact_title}>CONTACTO: </span>
                <ul className={styles.contact_list}>
                    <li className={styles.contact_list_phone}>
                        <FaPhone /> <span>+34 614406232</span>
                    </li>
                    <li>
                        <MdEmail style={{fontSize: '21px'}} /> <span>aloisaworld@gmail.com</span>
                    </li>
                </ul>
          </div>
        </div>
    </div>
  )
}

export default Footer