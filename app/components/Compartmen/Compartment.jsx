import React from 'react'
import Card from '../Card/Card.jsx'
import styles from './Compartment.module.css'

const Compartment = () => {
  return (
    <div>
      {/* Заголовок з фоном */}
      <div className={styles.headerSection}>
        <h2 className={styles.headerTitle}>ВІДДІЛЕННЯ</h2>
      </div>

      {/* Секція з картками */}
      <div className={styles.cardContainer}>
        <div className={styles.cardWrapper}>
          <Card
            title="Хірургічні відділення"
            description="Стаціонарна  допомога"
            imageUrl="/stationar.jpg"
            linkUrl="/departament/surgical"
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
            title="Реанімація і інтенсивна Т"
            description="Інтенсивна терапія"
            imageUrl="/roddom.jpg"
            linkUrl="/departament/reanimation"
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
            title="Терапевтичні відділення"
            description="Стаціонарна  допомога"
            imageUrl="/policlinic.jpg"
            linkUrl="/departament/therapy"
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
            title="Пологовий будинок"
            description="Пологовий будинок"
            imageUrl="/roddom.jpg"
            linkUrl="/departament/maternity"
          />
        </div>

        <div className={styles.cardWrapper}>
          <Card
            title="Амбулаторна  допомога"
            description="Амбулаторна  допомога"
            imageUrl="/paliativ.jpg"
            linkUrl="/departament/ambulatory"
          />
        </div>

        <div className={styles.cardWrapper}>
          <Card
            title="Паліативна допомога"
            description="Паліативна допомога"
            imageUrl="/paliativ.jpg"
            linkUrl="/departament/palliative"
          />
        </div>
      </div>
    </div>
  )
}

export default Compartment
