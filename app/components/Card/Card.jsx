import Image from 'next/image'
import Link from 'next/link'
import styles from './Card.module.css'

const Card = ({
  title,
  description,
  imageUrl,
  linkUrl,
  layout = 'vertical',
  customStyles = {},
}) => {
  const isLinkActive = Boolean(linkUrl)

  const CardContent = (
    <div
      className={`${styles.card} ${customStyles.card || ''} ${
        layout === 'horizontal' ? styles.cardHorizontal : ''
      }`}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={100}
        height={100}
        className={`${styles.cardImage} ${customStyles.cardImage || ''}`}
      />
      <div className={styles.cardContent}>
        <h3 className={`${styles.cardTitle} ${customStyles.cardTitle || ''}`}>
          {title}
        </h3>
        <p
          className={`${styles.cardDescription} ${
            customStyles.cardDescription || ''
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  )

  return isLinkActive ? (
    <Link href={linkUrl} passHref>
      {CardContent}
    </Link>
  ) : (
    CardContent
  )
}

export default Card
