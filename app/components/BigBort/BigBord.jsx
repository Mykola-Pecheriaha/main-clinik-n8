import React from 'react'
import styles from './BigBort.module.css'
import Link from 'next/link'
import CardsPage from '../CardsPage/CardsPage'

const BigBord = () => {
  return (
    <div className={styles.bigBord}>
      <div className={styles.containerBig}>
        {/* Основний заголовок */}
        <h1 className={styles.mainTitle}>ЦЕНТРАЛЬНА МІСЬКА КЛІНІЧНА ЛІКАРНЯ</h1>
        <h4 className={styles.subTitle}>
          Багатопрофільна медична допомога найвищого рівня
        </h4>

        {/* Кнопка "Зв'язатися з нами" */}
        {/* Використовуємо Link для кнопки */}
        <Link href="/hospital/contacts">
          <button className={styles.contactButton}>Зв'язатися з нами</button>
        </Link>
      </div>
      {/* Статистика */}
      <div className={styles.stats}>
        <p>
          <span>30,000+</span> <br /> щасливих пацієнтів
        </p>
        <p>
          <span>26</span> <br /> пакет медичних гарантій
        </p>
        <p>
          <span>20,000+</span> <br /> виконано медичних послуг
        </p>
      </div>

      {/* Опис пропозицій */}
      <h2 className={styles.offerTitle}>ЩО МИ ПРОПОНУЄМО</h2>
      <p className={styles.description}>
        <strong>Центральна міська клінічна лікарня </strong>- провідний медичний
        заклад міста Чернівці і всієї Буковини, а також прикарпаття, тернопілля
        та поділля. Ми забезпечуємо їх високоспеціалізованою медичною допомогою.{' '}
        <br />
        Наша лікарня працює за 26 медичними пакетами, що дозволяє нам
        пропонувати широкий спектр послуг для наших пацієнтів.
      </p>

      {/* Секція з картками */}
      <div className={styles.cardsSection}>
        <CardsPage />
      </div>
    </div>
  )
}

export default BigBord
