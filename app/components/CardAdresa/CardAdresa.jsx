import Image from 'next/image' // Використовуємо Image з Next.js
import styles from './CardAdresa.module.css'

const CardAdresa = ({ icon, title, text }) => {
  return (
    <div className={styles.card}>
      <Image
        src={icon}
        alt={title}
        className={styles.icon}
        width={40}
        height={40}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default CardAdresa
