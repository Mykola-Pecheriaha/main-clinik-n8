import React from 'react'
import Image from 'next/image'

import styles from './DoctorsPrimaTherapy.module.css'
import CardsDoctors from '../CardsDoctors/CardsDoctors.jsx'

const DoctorsPrimaTherapy = () => {
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
            title="Захарчук Яна Василівна"
            description={`лікар-Терапевт. Завідувачка терапевтичним відділенням №2
1995р. - закінчила Буковинську державну медичну академію\n
категорія - Вища`}
            imageUrl="/images/primatherapy/primather2.JPG"
            imageWidth={300} // ширина зображення
            imageHeight={400} // висота зображення
            layout="horizontal"
          />
        </div>

        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Ватаман Олена Вікторівна"
            description="Лікар-терапевт. 1985р. - закінчила Буковинську державну медичну академію . Категорія - Вища."
            imageUrl="/images/primatherapy/primather6.JPG"
            imageWidth={300} // ширина зображення
            imageHeight={400} // висота зображення
            layout="horizontal"
          />
        </div>

        <div className={styles.cardWrapper}>
          <CardsDoctors
            title=" Анастасія "
            description="Лікар-анестезіолог,  2019р. - закінчив Чернівецький Державний медичний університет. Категорія - друга."
            imageUrl="/images/primatherapy/primather4.JPG"
            imageWidth={300} // ширина зображення
            imageHeight={400} // висота зображення
            layout="horizontal"
          />
        </div>
      </div>
    </div>
  )
}

export default DoctorsPrimaTherapy
