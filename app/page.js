import Image from 'next/image'
import styles from './page.module.css'

import BigBord from './components/BigBort/BigBord'

export default function Home() {
  return (
    <div className={styles.container}>
      <h3> Головна сторінка </h3>
      <BigBord />
    </div>
  )
}
