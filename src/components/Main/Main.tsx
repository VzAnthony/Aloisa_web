import styles from './Main.module.css'
import service from "../../assets/service.jpeg";
const LandingPage = () => {
  return (
    <section className={styles.content} id='about'>
      <div className={styles.logo_container}>
        <div className={styles.logo}> 
          <div className={styles.company_container}>
            <span className={styles.letter_company}>MARLI</span>
          </div>
          <div className={styles.slogan}>
            <hr />
            <p>CALIDAD Y PROFESIONALISMO QUE HACEN LA DIFERENCIA</p>
          </div>
        </div>
      </div>

<div className={styles.section} style={{marginTop: '100px'}}>
      <h3 className={styles.subtitle}>¿Quiénes somos?</h3>
      <p className={styles.description}>
        Somos Marli, una empresa distinguida por ofrecer un servicio de limpieza impecable, discreto y minucioso,
        orientado a residencias y espacios recientemente reacondicionados.
      </p>
      <p className={styles.description} id='services'>
        Con una filosofía basada en la excelencia silenciosa, transformamos cada lugar en un reflejo de orden, armonía y distinción. 
      </p>
</div>

<div className={styles.section}>
      <h3 className={styles.subtitle}>Servicios</h3>
      <p className={styles.description}>
        Damos un servicio especializado en limpieza integral, abarcando desde espacio cotidianos hasta ambientes posteriores a
        remodelaciones, garantizando un acabado impecable y cuidado en cada detalle.
      </p>
      <div className={styles.services_container}>
      <ul className={styles.services}>
        <li>Limpieza de terminación de obra</li>
        <li>Limpieza de residencias</li>
        <li>Limpieza de oficinas</li>
        <li>Limpieza general</li>
      </ul>

      <img src={service} alt="our services" />
      </div>
</div>

<div className={styles.section}>

      <h3 className={styles.subtitle} id='contact'>Contáctanos</h3>
      <p className={styles.description}>
        Cada espacio tiene una historia; permítenos ser parte de la tuya.
      </p>
      <p className={styles.description}>
        Ponte en contacto con nosotros para agendar una consulta personalizada.
      </p>
      <p className={styles.description}>
        Estaremos encantados de atenderte con discreción y seriedad que nos distingue.
      </p>
      <p className={styles.description}>
        <span>Numero de contacto: </span>
        <span>+34 614406232</span> 
      </p>
      <p className={styles.description}>
        <span>Correo: </span>
        <span>aloisaworld@gmail.com</span>
      </p>

</div>
    </section>
  )
}

export default LandingPage