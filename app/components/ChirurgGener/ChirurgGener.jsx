import React from 'react'
import Card from '../Card/Card.jsx'
import styles from './ChirurgGener.module.css'

const ChirurgGener = () => {
  return (
    <div>
      {/* Заголовок з фоном */}
      <div className={styles.headerSection}>
        <h2 className={styles.headerTitle}>ВІДДІЛЕННЯ ХІРУРГІЧНОГО ПРОФІЛЮ</h2>
      </div>

      {/* Секція з картками */}
      <div className={styles.cardContainer}>
        <div className={styles.cardWrapper}>
          <Card
            title="Відділення загальної хірургії"
            description="Стаціонарна медична допомога"
            imageUrl="/stationar.jpg"
            linkUrl="/departament/surgical/generalSurg"
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
            title="Травматолого - ортопедія"
            description="Стаціонарна медична допомога"
            imageUrl="/policlinic.jpg"
            linkUrl="/departament/surgical/traumatOrthop"
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
            title="Вертебрологія"
            description="Стаціонарна медична допомога"
            imageUrl="/policlinic.jpg"
            linkUrl="/departament/surgical/vertebrology"
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
            title="Гінекологія"
            description="Стаціонарна медична допомога"
            imageUrl="/roddom.jpg"
            linkUrl="/departament/surgical/gynecology "
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
            title="Офтальмологія"
            description="Стаціонарна медична допомога"
            imageUrl="/paliativ.jpg"
            linkUrl="/departament/surgical/ophthalmology"
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
            title="Отоларингологія"
            description="Стаціонарна медична допомога"
            imageUrl="/paliativ.jpg"
            linkUrl="/departament/surgical/otolaryngology"
          />
        </div>
      </div>
    </div>
  )
}

export default ChirurgGener
