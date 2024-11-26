import React from 'react'
import Image from 'next/image'
import styles from './CardsDoctors.module.css'

const CardsDoctors = ({
  title,
  description,
  imageUrl,
  layout = 'vertical', // Горизонтальне або вертикальне розташування
  imageFlex = 1, // Пропорція зображення
  textFlex = 1, // Пропорція тексту
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
          width={200}
          height={150}
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

export default CardsDoctors
