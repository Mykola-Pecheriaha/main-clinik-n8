import React from 'react'
import styles from './Direction.module.css'
import CardDirection from '../CardDirection/CardDirection'

const Direction = () => {
  return (
    <div>
      {/* Заголовок з фоном */}
      <div className={styles.headerSection}>
        <h1 className={styles.headerTitle}> Адміністрація лікарні</h1>
      </div>

      {/* Секція з картками */}
      <div className={styles.cardContainer}>
        <div className={styles.cardWrapper}>
          <CardDirection
            title=" Проц Віктор Йосипович"
            description={`Генеральний директор, Заслужений лікар України.\n
1980р. - закінчив Чернівецький медичний інститут\n
категорія - Вища`}
            imageUrl="/images/administratia/proz2.jpg"
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
          <CardDirection
            title="Кіршенблат Володимир Яковлевич"
            description="Медичний директор. 1980р. - закінчив чернівецький медичний інститут . Категорія - Вища."
            imageUrl="/images/administratia/cirshenblat3.jpg"
            layout="horizontal"
            customStyles={{
              card: styles.customCard,
              cardImage: styles.enlargedCardImage, // Використовуємо новий клас для збільшення
              cardTitle: styles.customCardTitle,
              cardDescription: styles.customCardDescription,
            }}
          />
        </div>

        <div className={styles.headerSection}>
          <h1 className={styles.headerTitle}> Заступники</h1>
        </div>

        <div className={styles.cardWrapper}>
          <CardDirection
            title="Бамбизов ЛеонідМихайлович"
            description="Лікар-хірург. Наукова ступень -кандидат медичних наук, вчене звання - доцент 1993р. - закінчив Запорізький державний медичний інститут. Категорія - Вища."
            imageUrl="/images/doctors/bambizov.jpg"
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
          <CardDirection
            title="Андрушкова Юліана Анатоліївна"
            description="Лікар-хірург. 2019р. - закінчив Буковинський державний медичний університет. Категорія - друга."
            imageUrl="/images/doctors/andrushcova.jpg"
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
          <CardDirection
            title="Грудецький Віталій Віталійович"
            description="Лікар-хірург, Заслужений лікар України. 1976р. - закінчив Вінницький медичний інститут. Категорія - Вища."
            imageUrl="/images/doctors/grugezcy.jpg"
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
          <CardDirection
            title="Карпенко Олександир Вікторович"
            description="Лікар-хірург, Заслужений лікар України. 1976р. - закінчив Вінницький медичний інститут. Категорія - Вища."
            imageUrl="/images/doctors/karptnco.jpg"
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
          <CardDirection
            title="Фомін Андрій Борисович"
            description="Лікар-хірург, Заслужений лікар України. 1976р. - закінчив Вінницький медичний інститут. Категорія - Вища."
            imageUrl="/images/doctors/fomin.jpg"
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
          <CardDirection
            title="Кубеєв Сергій Германович"
            description="Лікар-урологю  1993р. - закінчив Чернівецький медичний інститут. Категорія - Вища."
            imageUrl="/images/doctors/kubeyev.jpg"
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
          <CardDirection
            title="Курій Микола Іванович"
            description="Лікар-хірург, Заслужений лікар України. 1976р. - закінчив Вінницький медичний інститут. Категорія - Вища."
            imageUrl="/images/doctors/kuriy.jpg"
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
          <CardDirection
            title="Блискун Володимир Юрійович"
            description="Лікар-хірург, Заслужений лікар України. 1976р. - закінчив Вінницький медичний інститут. Категорія - Вища."
            imageUrl="/images/doctors/pizic.jpg"
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

export default Direction
