import React from 'react'
import Card from '../Card/Card.jsx'
import Image from 'next/image'
import styles from './AmbulatorGeneral.module.css'

const AmbulatorGeneral = () => {
  return (
    <div>
      {/* Заголовок з фоном */}
      <div className={styles.headerSection}>
        <h2 className={styles.headerTitle}>АМБУЛАТОРНА ДОПОМОГА</h2>
      </div>

      {/* Секція з картками */}
      <div className={styles.cardContainer}>
        <div className={styles.cardWrapper}>
          <Card
            title="КДВ головного корпусу"
            description="Амбулаторна медична допомога"
            imageUrl="/stationar.jpg"
            linkUrl="/departament/ambulatory/kdwprima"
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
            title="Жіноча консультація "
            description="Амбулаторна медична допомога"
            imageUrl="/policlinic.jpg"
            linkUrl="/departament/surgical/traumatOrthop"
          />
        </div>
        <div className={styles.cardWrapper}>
          <Card
            title="Поліклінічне відділення IV корпусу"
            description="Амбулаторна медична допомога"
            imageUrl="/policlinic.jpg"
            linkUrl="/departament/surgical/vertebrology"
          />
        </div>
      </div>
    </div>
  )
}

export default AmbulatorGeneral
