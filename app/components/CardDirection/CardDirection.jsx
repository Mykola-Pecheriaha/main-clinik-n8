import React from 'react'
import Image from 'next/image'
import styles from './CardDirection.module.css'

const CardDirection = ({
  title,
  description,
  imageUrl,
  layout = 'vertical',
  imageFlex = 1,
  textFlex = 1,
}) => {
  return (
    <div
      className={`${styles.card} ${
        layout === 'horizontal' ? styles.horizontal : ''
      }`}
    >
      <div className={styles.imageWrapper} style={{ flex: imageFlex }}>
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={400}
          className={styles.image}
        />
      </div>
      <div className={styles.content} style={{ flex: textFlex }}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default CardDirection
