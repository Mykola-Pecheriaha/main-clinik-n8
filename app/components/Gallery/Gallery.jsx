'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import styles from './Gallery.module.css'

const Gallery = ({ images }) => {
  const galleryRef = useRef(null)

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -150, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 100, behavior: 'smooth' })
    }
  }

  return (
    <div className={styles.galleryWrapper}>
      <button className={styles.scrollButton} onClick={scrollLeft}>
        &#8592;
      </button>

      <div className={styles.gallery} ref={galleryRef}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageContainer}>
            <Image
              src={image}
              alt={`Gallery Image ${index + 1}`}
              layout="fill" // Зображення займає весь контейнер
              objectFit="cover" // Зберігає пропорції, обрізаючи зайве
              objectPosition="center" // Вирівнює по центру
            />
          </div>
        ))}
      </div>

      <button className={styles.scrollButton} onClick={scrollRight}>
        &#8594;
      </button>
    </div>
  )
}

export default Gallery
