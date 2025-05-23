import { CgClose } from "react-icons/cg";
import styles from './NavbarResponsive.module.css'
import { motion } from "motion/react"

interface NavbarResponsiveProps {
    handleToggleNavbar: () => void
    handleCloseNavbar: () => void
}

const NavbarResponsive = ({
    handleToggleNavbar,
    handleCloseNavbar
}: NavbarResponsiveProps) => {
  return (
    <div
        className={styles.content_block}
    >
        <motion.div 
            className={styles.navbar}
            initial={{ x: '-100%' }} 
            animate={{ x: -1 }}        
            transition={{
                type: 'spring',          
                stiffness: 250,          
                damping: 30,            
                duration: 0.1
            }}    
        >
            <CgClose className={styles.close_icon} onClick={handleToggleNavbar} />
            <ul className={styles.nav_list}>
                <li>
                    <a href="#about" onClick={handleCloseNavbar} >Quiénes somos?</a>
                </li>
                <li>
                    <a href="#services" onClick={handleCloseNavbar}>Servicios</a>
                </li>
                <li>
                    <a href="#contact" onClick={handleCloseNavbar}>Contacto</a>
                </li>
            </ul>
        </motion.div>
    </div>
  )
}

export default NavbarResponsive