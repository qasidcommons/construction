import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Qasid student information system currently under maintenance
        </p>
      </div>
     <div className={styles.center}>
      <a href="https://www.qasid.com">
        <Image
          className={styles.logo}
          src="https://www.qasid.com/wp-content/themes/qasid/images/qasid_header_logo@2x.png"
          alt="Qasid logo"
          priority
        />
      </a>
      </div>
    </main>
  )
}
