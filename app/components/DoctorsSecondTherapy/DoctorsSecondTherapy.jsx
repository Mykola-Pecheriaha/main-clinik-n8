import React from 'react'
// import Card from '../Card/Card.jsx'

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
            layout="horizontal"
            customStyles={{
              card: styles.customCard,
              cardImage: styles.enlargedCardImage, // Використовуємо новий клас для збільшення
              cardTitle: styles.customCardTitle,
              cardDescription: styles.customCardDescription,
            }}
          />
        </div>

        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Румак Інга Сергіївна"
            description="Лікар-терапевт. 1985р. - закінчила Буковинську державну медичну академію . Категорія - Вища."
            imageUrl="/images/secondTherapy/therapy8.jpg"
            layout="horizontal"
            customStyles={{
              card: styles.customCard,
              cardImage: styles.enlargedCardImage, // Використовуємо новий клас для збільшення
              cardTitle: styles.customCardTitle,
              cardDescription: styles.customCardDescription,
            }}
          />
        </div>

        <div className={styles.cardWrapper}>
          <CardsDoctors
            title=" Анастасія "
            description="Лікар-анестезіолог,  2019р. - закінчив Чернівецький Державний медичний університет. Категорія - друга."
            imageUrl="/images/reanimation/reanim14і.JPG"
            layout="horizontal"
            customStyles={{
              card: styles.customCard,
              cardImage: styles.enlargedCardImage, // Використовуємо новий клас для збільшення
              cardTitle: styles.customCardTitle,
              cardDescription: styles.customCardDescription,
            }}
          />
        </div>

        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Блискун Володимир Юрійович"
            description="Лікар-хірург, Заслужений лікар України. 1976р. - закінчив Вінницький медичний інститут. Категорія - Вища."
            imageUrl="/images/doctors/pizicм.jpg"
            layout="horizontal"
            customStyles={{
              card: styles.customCard,
              cardImage: styles.enlargedCardImage, // Використовуємо новий клас для збільшення
              cardTitle: styles.customCardTitle,
              cardDescription: styles.customCardDescription,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default DoctorsSecondTherapy
