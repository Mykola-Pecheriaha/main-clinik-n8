import React from 'react'
import Card from '../Card/Card.jsx'
import styles from './InternDiseases.module.css'

const InternDiseases = () => {
  return (
    <div>
      {/* Заголовок з фоном */}
      <div className={styles.headerSection}>
        <h2 className={styles.headerTitle}>
          ВІДДІЛЕННЯ ТЕРАПЕВТИЧНОГО ПРОФІЛЮ
        </h2>
      </div>

      {/* Секція з картками */}
      <div className={styles.cardContainer}>
        <div className={styles.cardWrapper}>
          <Card
            title="Терапевтичне відділення №1"
            description="Стаціонарна медична допомога"
            imageUrl="/stationar.jpg"
            linkUrl="/departament/therapy/primaTherapy"
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
            title="Терапевтичне відділення №2"
            description="Стаціонарна медична допомога"
            imageUrl="/policlinic.jpg"
            linkUrl="/departament/therapy/secundTherapy"
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
            title="Неврологія"
            description="Стаціонарна медична допомога"
            imageUrl="/roddom.jpg"
            linkUrl="/departament/therapy/neurology "
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
            title="Реабілітація"
            description="Стаціонарна медична допомога"
            imageUrl="/paliativ.jpg"
            linkUrl="/departament/therapy/rehabilitation"
          />
        </div>
      </div>
    </div>
  )
}

export default InternDiseases
