'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import styles from './Gallery.module.css'

const Gallery = ({ images }) => {
  const galleryRef = useRef(null)

  const scrollLeft = () => {
    galleryRef.current.scrollBy({ left: -200, behavior: 'smooth' })
  }

  const scrollRight = () => {
    galleryRef.current.scrollBy({ left: 200, behavior: 'smooth' })
  }

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.galleryContainer}>
        <button className={styles.scrollButton} onClick={scrollLeft}>
          &#8592;
        </button>

        <div className={styles.gallery} ref={galleryRef}>
          {images.map((image, index) => (
            <div key={index} className={styles.imageContainer}>
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                width={600}
                height={400} // Вказуємо фіксовані розміри
                priority={index === 0} // Перший елемент завантажується швидше
              />
            </div>
          ))}
        </div>
        <button className={styles.scrollButton} onClick={scrollRight}>
          &#8594;
        </button>
      </div>
    </div>
  )
}

export default Gallery
