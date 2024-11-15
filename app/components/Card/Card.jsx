import Image from 'next/image'
import Link from 'next/link'
import styles from './Card.module.css'

const Card = ({
  title,
  description,
  imageUrl,
  hasButton = false,
  linkUrl = '',
}) => {
  return (
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
      {/* Кнопка */}
      {hasButton && linkUrl && (
        <Link href={linkUrl}>
          <a className={styles.cardButton}>Дізнатися більше</a>
        </Link>
      )}
    </div>
  )
}

export default Card
