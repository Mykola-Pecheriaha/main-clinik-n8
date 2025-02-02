import React from 'react'

import Image from 'next/image'
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
            imageUrl="/images/doctors/"
            imageWidth={300} // ширина зображення
            imageHeight={400} // висота зображення
            layout="horizontal"
          />
        </div>

        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Бойчук Степан Іванович"
            description="Лікар-анестезіолог. 1985р. - закінчив Чернівецький медичний інститут . Категорія - Вища."
            imageUrl="/images/doctors/"
            imageWidth={300} // ширина зображення
            imageHeight={400} // висота зображення
            layout="horizontal"
          />
        </div>

        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Стефанюк Іван Степанович"
            description="Лікар-анестезіолог. 1987р. - закінчив Чернівецький медичний інститут. Категорія - Вища."
            imageUrl="/images/reanimation/reanim7.JPG"
            imageWidth={300} // ширина зображення
            imageHeight={400} // висота зображення
            layout="horizontal"
          />
        </div>
        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Варфоломієв Владислав Вадимович"
            description="Лікар-хірург. 2020р. - закінчив Буковинський державний медичний університет. Категорія - друга."
            imageUrl="/images/reanimation/reanim6.JPG"
            imageWidth={300} // ширина зображення
            imageHeight={400} // висота зображення
            layout="horizontal"
          />
        </div>
        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Белінський Олександир Володимирович"
            description="Лікар-анестезіолог,  2022р. - закінчив Буковинський Державний медичний університет. Категорія - .."
            imageUrl="/images/reanimation/reanim5.JPG"
            imageWidth={300} // ширина зображення
            imageHeight={400} // висота зображення
            layout="horizontal"
          />
        </div>
        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Бологан Анастасія Вікторівна"
            description="Лікар-анестезіолог,  2019р. - закінчила Чернівецький Державний медичний університет. Категорія - .."
            imageUrl="/images/reanimation/reanim14.JPG"
            imageWidth={300} // ширина зображення
            imageHeight={400} // висота зображення
            layout="horizontal"
          />
        </div>
      </div>
    </div>
  )
}

export default DoctorsReanimation
