import React from 'react'

import Image from 'next/image'
import styles from './DoctorsSrcondTherapy.module.css'
import CardsDoctors from '../CardsDoctors/CardsDoctors.jsx'

const DoctorsSecondTherapy = () => {
  return (
    <div>
      {/* Заголовок з фоном */}
      <div className={styles.headerSection}>
        <h2 className={styles.headerTitle}>Лікарі Відділення</h2>
      </div>

      {/* Секція з картками */}
      <div className={styles.cardContainer}>
        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Ткач Яна Василівна"
            description={`лікар-Терапевт. Завідувачка терапевтичним відділенням №2
1995р. - закінчила Буковинську державну медичну академію\n
категорія - Вища`}
            imageUrl="/images/secondTherapy/therapy14.jpg"
            imageWidth={300} // ширина зображення
            imageHeight={400} // висота зображення
            layout="horizontal"
          />
        </div>

        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Румак Інга Сергіївна"
            description="Лікар-терапевт. 1985р. - закінчила Буковинську державну медичну академію . Категорія - Вища."
            imageUrl="/images/secondTherapy/therapy8.jpg"
            imageWidth={300} // ширина зображення
            imageHeight={400} // висота зображення
            layout="horizontal"
          />
        </div>
      </div>
    </div>
  )
}

export default DoctorsSecondTherapy
