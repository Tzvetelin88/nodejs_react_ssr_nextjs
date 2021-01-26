
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function CarsList(props) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Cars list
        </h1>

        <div className={styles.grid}>
          <Link href="/cars/tesla">
            <div className={styles.card}>Tesla</div>
          </Link>

          <Link href="/cars/ford">
            <div className={styles.card}>Ford</div>
          </Link>

          <Link href="/cars/lambo">
            <div className={styles.card}>Lambo</div>
          </Link>
        </div>
      </main>
    </div>
  )
}