import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Qasid student information system currently under maintenance
        </p>
      </div>
      <div>
        <p>Please check back after a few hours</p>
        <p><a href="https://www.qasid.com">Visit qasid.com</a></p>
      </div>
    </main>
  )
}
