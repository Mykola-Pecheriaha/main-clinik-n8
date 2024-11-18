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
        <Card
          title="Хірургічні відділення"
          description="Стаціонарна медична допомога "
          imageUrl="/stationar.jpg"
          linkUrl="/departament/surgical"
        />
        <Card
          title="Терапевтичні відділення"
          description="Амбулаторна медична допомога "
          imageUrl="/policlinic.jpg"
          linkUrl="/departament/therapy"
        />
        <Card
          title="Пологовий будинок"
          description="Пологовий будинок"
          imageUrl="/roddom.jpg"
          linkUrl="/departament/maternity"
        />
        <Card
          title="Паліативна допомога"
          description="Паліативна допомога"
          imageUrl="/paliativ.jpg"
          linkUrl="/departament/palliative"
        />
      </div>
    </div>
  )
}

export default Compartment
