import React from 'react'
// import Card from '../Card/Card.jsx'

import styles from './DoctorsReanimation.module.css'
import CardsDoctors from '../CardsDoctors/CardsDoctors.jsx'

const DoctorsReanimation = () => {
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
            title="Ставнічук Юрій Миколайович"
            description={`лікар-анестезіолог реаніматолог, 
1995р. - закінчив Буковинську Вержавну медичну академію\n
категорія - Вища`}
            imageUrl="/images/doctors/pizic2.jpg"
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
            title="Бойчук Степан Іванович"
            description="Лікар-анестезіолог. 1985р. - закінчив Чернівецький медичний інститут . Категорія - Вища."
            imageUrl="/images/doctors/pecheriaha2.jpg"
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
            title="Стефанюк Іван Степанович"
            description="Лікар-анестезіолог. 1987р. - закінчив Чернівецький медичний інститут. Категорія - Вища."
            imageUrl="/images/reanimation/reanim7.JPG"
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
            title="Варфоломієв Владислав Васильович"
            description="Лікар-хірург. 2019р. - закінчив Буковинський державний медичний університет. Категорія - друга."
            imageUrl="/images/reanimation/reanim6.JPG"
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
            title=" Олександир "
            description="Лікар-анестезіолог,  2017р. - закінчив Вінницький медичний інститут. Категорія - Вища."
            imageUrl="/images/reanimation/reanim5.JPG"
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
            imageUrl="/images/reanimation/reanim14.JPG"
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
            title="Фомін Андрій Борисович"
            description="Лікар-хірург, Заслужений лікар України. 1976р. - закінчив Вінницький медичний інститут. Категорія - Вища."
            imageUrl="/images/doctors/fominм.jpg"
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
            title="Кубеєв Сергій Германович"
            description="Лікар-урологю  1993р. - закінчив Чернівецький медичний інститут. Категорія - Вища."
            imageUrl="/images/doctors/kubeyevм.jpg"
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
            title="Курій Микола Іванович"
            description="Лікар-хірург, Заслужений лікар України. 1976р. - закінчив Вінницький медичний інститут. Категорія - Вища."
            imageUrl="/images/doctors/kuriyм.jpg"
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

export default DoctorsReanimation
