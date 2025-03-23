import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div>Logo</div>
        <span className={styles.company_name}>Aloisa Interiors & Renovations</span>
        <div className={styles.contact_container}>
            <span className={styles.contact_title}>CONTACTO: </span>
            <ul className={styles.contact_list}>
                <li className={styles.contact_list_phone}>
                    <FaPhone /> <span>+34 614406232</span>
                </li>
                <li>
                    <MdEmail style={{fontSize: '21px'}} /> <span>aloisainterioresyreformas@gmail.com</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer