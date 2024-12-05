import React from 'react'
import Card from '../Card/Card.jsx'
import styles from './MaternityHospital.module.css'

const MaternityHospital = () => {
  return (
    <div>
      {/* Заголовок з фоном */}
      <div className={styles.headerSection}>
        <h2 className={styles.headerTitle}>ПОЛОГОВИЙ БУДИНОК</h2>
      </div>

      {/* Секція з картками */}
      <div className={styles.cardContainer}>
        <div className={styles.cardWrapper}>
          <Card
            title="Акушерське відділення"
            description="Стаціонарна медична допомога"
            imageUrl="/stationar.jpg"
            linkUrl="/departament/maternity/obstetrics"
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
            title="Відділення патологиї вагітності"
            description="Стаціонарна медична допомога"
            imageUrl="/policlinic.jpg"
            linkUrl="/departament/maternity/pregnancy"
          />
        </div>

        <div className={styles.cardWrapper}>
          <Card
            title="Відділення гінекології"
            description="Стаціонарна медична допомога"
            imageUrl="/roddom.jpg"
            linkUrl="/departament/maternity/gynecology "
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
            title="Відділення неврології"
            description="Стаціонарна медична допомога"
            imageUrl="/paliativ.jpg"
            linkUrl="/departament/maternity/neurology"
          />
        </div>
      </div>
    </div>
  )
}

export default MaternityHospital
