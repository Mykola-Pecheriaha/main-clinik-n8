import React from 'react'
import Image from 'next/image'
import styles from './DoctorsObstetrics.module.css'
import CardsDoctors from '../CardsDoctors/CardsDoctors.jsx'

const DoctorsObstetrics = () => {
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
            title="Маник Іван Васильович"
            description={`лікар-Терапевт. Завідувачка терапевтичним відділенням №2
1995р. - закінчила Буковинську державну медичну академію\n
категорія - Вища`}
            imageUrl="/images/obstetrics/obstetrics3.jpg"
            imageWidth={300}
            imageHeight={400}
            layout="horizontal"
          />
        </div>

        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Круглик Володимир Климович"
            description="Лікар-анестезіолог,  2019р. - закінчив Чернівецький Державний медичний університет. Категорія - друга."
            imageUrl="/images/obstetrics/obstetrics5.jpg"
            imageWidth={300}
            imageHeight={400}
            layout="horizontal"
          />
        </div>

        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Сорохан Майя Василівна"
            description="Лікар-хірург, Заслужений лікар України. 1976р. - закінчив Вінницький медичний інститут. Категорія - Вища."
            imageUrl="/images/obstetrics/obstetrics1.jpg"
            imageWidth={300}
            imageHeight={400}
            layout="horizontal"
          />
        </div>

        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Довгань В'ячеслав Юрійович"
            description="Лікар-хірург, Заслужений лікар України. 1976р. - закінчив Вінницький медичний інститут. Категорія - Вища."
            imageUrl="/images/obstetrics/obstetrics6.jpg"
            imageWidth={300}
            imageHeight={400}
            layout="horizontal"
          />
        </div>

        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Варвус Едуард Вікторович"
            description="Лікар-хірург, Заслужений лікар України. 1976р. - закінчив Вінницький медичний інститут. Категорія - Вища."
            imageUrl="/images/obstetrics/obstetrics4.jpg"
            imageWidth={300}
            imageHeight={400}
            layout="horizontal"
          />
        </div>

        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Наталія "
            description="Лікар-хірург, Заслужений лікар України. 1976р. - закінчив Вінницький медичний інститут. Категорія - Вища."
            imageUrl="/images/obstetrics/obstetrics7.jpg"
            imageWidth={300}
            imageHeight={400}
            layout="horizontal"
          />
        </div>

        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Пушкашу Анастасія Василівна"
            description="Лікар-хірург, Заслужений лікар України. 1976р. - закінчив Вінницький медичний інститут. Категорія - Вища."
            imageUrl="/images/obstetrics/obstetrics9.JPG"
            imageWidth={300}
            imageHeight={400}
            layout="horizontal"
          />
        </div>
        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Захлівняк Тетяна Володимирівна"
            description="Лікар-хірург, Заслужений лікар України. 1976р. - закінчив Вінницький медичний інститут. Категорія - Вища."
            imageUrl="/images/obstetrics/obstetrics2.jpg"
            imageWidth={300}
            imageHeight={400}
            layout="horizontal"
          />
        </div>
        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Корчак Віра Дмитріївна"
            description="Лікар-хірург, Заслужений лікар України. 1976р. - закінчив Вінницький медичний інститут. Категорія - Вища."
            imageUrl="/images/obstetrics/obstetrics8.jpg"
            imageWidth={300}
            imageHeight={400}
            layout="horizontal"
          />
        </div>
      </div>
    </div>
  )
}

export default DoctorsObstetrics
