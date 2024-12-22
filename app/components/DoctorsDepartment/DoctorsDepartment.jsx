import React from 'react'
import Image from 'next/image'

import styles from './DoctorsDepartment.module.css'
import CardsDoctors from '../CardsDoctors/CardsDoctors.jsx'

const DoctorsDepartment = () => {
  return (
    <div>
      {/* Заголовок з фоном */}
      <div className={styles.headerSection}>
        <h2 className={styles.headerTitle}>Лікарі Відділення хірургії</h2>
      </div>

      {/* Секція з картками */}
      <div className={styles.cardContainer}>
        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Пижик Валентин Анатолієвич"
            description={`лікар-хірург, Заслужений лікар України\n
1976р. - закінчив Вінницький медичний інститут\n
категорія - Вища`}
            imageUrl="/images/doctors/pizic.jpg"
            imageWidth={300} // ширина зображення
            imageHeight={400} // висота зображення
            layout="horizontal"
          />
        </div>

        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Печеряга Микола Миколайович"
            description="Лікар-хірург. 1995р. - закінчив Одеський державний медичний університет з відзнакою . Категорія - Вища."
            imageUrl="/images/doctors/pecheriaha.jpg"
            imageWidth={300} // ширина зображення
            imageHeight={400} // висота зображення
            layout="horizontal"
          />
        </div>

        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Бамбизов ЛеонідМихайлович"
            description="Лікар-хірург. Наукова ступень -кандидат медичних наук, вчене звання - доцент 1993р. - закінчив Запорізький державний медичний інститут. Категорія - Вища."
            imageUrl="/images/doctors/bambizov.jpg"
            imageWidth={300} // ширина зображення
            imageHeight={400} // висота зображення
            layout="horizontal"
          />
        </div>
        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Андрушкова Юліана Анатоліївна"
            description="Лікар-хірург. 2019р. - закінчив Буковинський державний медичний університет. Категорія - друга."
            imageUrl="/images/doctors/andrushcova.jpg"
            imageWidth={300} // ширина зображення
            imageHeight={400} // висота зображення
            layout="horizontal"
          />
        </div>
        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Грудецький Віталій Віталійович"
            description="Лікар-хірург, Заслужений лікар України. 1976р. - закінчив Вінницький медичний інститут. Категорія - Вища."
            imageUrl="/images/doctors/grugezcy.jpg"
            imageWidth={300} // ширина зображення
            imageHeight={400} // висота зображення
            layout="horizontal"
          />
        </div>
        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Карпенко Олександир Вікторович"
            description="Лікар-хірург, Заслужений лікар України. 1976р. - закінчив Вінницький медичний інститут. Категорія - Вища."
            imageUrl="/images/doctors/karptnco.jpg"
            imageWidth={300} // ширина зображення
            imageHeight={400} // висота зображення
            layout="horizontal"
          />
        </div>
        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Фомін Андрій Борисович"
            description="Лікар-хірург, Заслужений лікар України. 1976р. - закінчив Вінницький медичний інститут. Категорія - Вища."
            imageUrl="/images/doctors/fomin.jpg"
            imageWidth={300} // ширина зображення
            imageHeight={400} // висота зображення
            layout="horizontal"
          />
        </div>
        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Кубеєв Сергій Германович"
            description="Лікар-урологю  1993р. - закінчив Чернівецький медичний інститут. Категорія - Вища."
            imageUrl="/images/doctors/kubeyev.jpg"
            imageWidth={300} // ширина зображення
            imageHeight={400} // висота зображення
            layout="horizontal"
          />
        </div>
        <div className={styles.cardWrapper}>
          <CardsDoctors
            title="Курій Микола Іванович"
            description="Лікар-хірург, Заслужений лікар України. 1976р. - закінчив Вінницький медичний інститут. Категорія - Вища."
            imageUrl="/images/doctors/kuriy.jpg"
            layout="horizontal"
          />
        </div>
      </div>
    </div>
  )
}

export default DoctorsDepartment
