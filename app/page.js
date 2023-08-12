import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Qasid student information system currently under maintenance
        </h1>
      </div>
     <div className={styles.center}>
      <a href="https://www.qasid.com">
        Go to www.qasid.com in the meantime
      </a>
      </div>
    </main>
  )
}
