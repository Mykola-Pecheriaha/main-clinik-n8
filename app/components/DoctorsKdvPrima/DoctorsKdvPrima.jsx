import React from 'react'
import Image from 'next/image'
import styles from './DoctorsKdvPrima.module.css'
import CardsDoctors from '../CardsDoctors/CardsDoctors.jsx'

const DoctorsKdvPrima = () => {
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
            title="Олійник Юлія"
            description={`лікар-гінеколог, Завідувач консультативно-діагностичного відділення 
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
            title="Андрушкова Юліана Анатолієвна"
            description="Лікар-хірург. 2022р. - закінчив Буковинський державний медичний університет . Категорія - Вища."
            imageUrl="/images/policlinik/policliniccomm4.JPG"
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

export default DoctorsKdvPrima
