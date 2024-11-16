import Image from 'next/image'
import Link from 'next/link'
import styles from './Card.module.css'

const Card = ({ title, description, imageUrl, linkUrl }) => {
  return (
    <Link href={linkUrl} passHref>
      <div className={styles.card}>
        {/* Зображення */}
        <Image
          src={imageUrl}
          alt={title}
          width={75}
          height={75}
          className={styles.cardImage}
        />
        {/* Заголовок */}
        <h3 className={styles.cardTitle}>{title}</h3>
        {/* Опис */}
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </Link>
  )
}

export default Card
