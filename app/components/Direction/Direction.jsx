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
            title="Клічук Лариса Володимирівна"
            description="Заступник генерального директора з медичного маркетингу та адміністрування. 1993р. - Буковинський державний медичний університет. Категорія - Вища."
            imageUrl="/images/administratia/clichukі.jpg"
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
            title="Ткачик Світлана Ярославівна"
            description="Зазступник медичного директора з контролю якості медичного обслуговування. 199хр. - закінчила Буковинський державний медичний університет. Категорія - вища."
            imageUrl="/images/administratia/tkachik.jpg"
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
